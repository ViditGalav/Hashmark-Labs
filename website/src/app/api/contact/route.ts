import { getPractice } from "@/content/practices";
import { contactSchema, HONEYPOT_FIELD, normaliseUrl, toFieldErrors, type ContactData } from "@/lib/contact-schema";

// Never cache; this handler has side effects.
export const dynamic = "force-dynamic";

/* ---------- Rate limit: 5 submissions per IP per 10 minutes (in-memory, per instance) ---------- */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // Opportunistic cleanup so the map can't grow without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/* ---------- Email rendering ---------- */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function rows(data: ContactData): [string, string][] {
  return [
    ["Name", data.name],
    ["Email", data.email],
    ["Company / project", data.company || "—"],
    ["Website", data.website ? normaliseUrl(data.website) : "—"],
    ["Practices", data.practices.map((p) => getPractice(p)?.name ?? p).join(", ")],
    ["Stage", data.stage || "—"],
    ["Budget band", data.budget || "—"],
    ["Timeline", data.timeline || "—"],
    ["Telegram", data.telegram || "—"],
    ["NDA requested", data.nda ? "Yes — please send an NDA before the first call" : "No"],
  ];
}

function renderHtml(data: ContactData): string {
  const table = rows(data)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#666;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`,
    )
    .join("");
  const message = escapeHtml(data.message).replace(/\r?\n/g, "<br>");
  return `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5;color:#1a1822">
<h2 style="margin:0 0 12px">New enquiry from the website</h2>
<table style="border-collapse:collapse">${table}</table>
<h3 style="margin:20px 0 8px">Message</h3>
<p style="margin:0">${message}</p>
</div>`;
}

function renderText(data: ContactData): string {
  return `${rows(data)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n")}\n\nMessage:\n${data.message}`;
}

/* ---------- Handler ---------- */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Respond as if accepted, send nothing.
  const trap = (body as Record<string, unknown>)[HONEYPOT_FIELD];
  if (typeof trap === "string" && trap.trim() !== "") {
    return Response.json({ ok: true });
  }

  if (rateLimited(clientIp(request))) {
    return Response.json({ error: "rate_limited" }, { status: 429, headers: { "Retry-After": "600" } });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "validation", fieldErrors: toFieldErrors(parsed.error) }, { status: 400 });
  }
  const data = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? "hashmarklabs@gmail.com";

  // Never pretend success: without a configured provider the lead would be lost.
  if (!apiKey || !from) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `New enquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`.slice(0, 200),
        html: renderHtml(data),
        text: renderText(data),
      }),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("[contact] Resend responded", res.status, await res.text().catch(() => ""));
      return Response.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Resend request failed", err);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
