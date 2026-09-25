import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cases, getCase } from "@/content/work";

// OG images are rendered by Satori outside the CSS pipeline, so deck hex values are inlined here by necessity.
const C = {
  bg: "#0a0b14",
  text: "#f4f1fa",
  text2: "#c9c7de",
  muted: "#9a9cb8",
  pink: "#ff5e8e",
  pinkSoft: "#ff9cb9",
  violet: "#b98cff",
  teal: "#3fe0c5",
  surface2: "#1a1d38",
};

export const alt = "Hashmark Labs case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug) ?? cases[0];

  const [serif, serifItalic] = await Promise.all([
    readFile(join(process.cwd(), "src/app/_fonts/InstrumentSerif-Regular.ttf")),
    readFile(join(process.cwd(), "src/app/_fonts/InstrumentSerif-Italic.ttf")),
  ]);
  // Labels use next/og's bundled Geist (sans) when present; otherwise Satori falls back to the serif.
  const sans = await readFile(join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf")).catch(() => null);

  const nameSize = c.name.length > 14 ? 112 : 132;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: C.bg,
          backgroundImage:
            "radial-gradient(circle at 88% 0%, rgba(58,38,130,0.62) 0%, rgba(10,11,20,0) 55%), radial-gradient(circle at 0% 100%, rgba(90,30,90,0.55) 0%, rgba(10,11,20,0) 50%)",
          color: C.text,
          fontFamily: sans ? "Geist" : "Instrument Serif",
          position: "relative",
        }}
      >
        {/* Watermark hashmark */}
        <div
          style={{
            position: "absolute",
            right: 40,
            top: -40,
            fontFamily: "Instrument Serif",
            fontSize: 620,
            lineHeight: 1,
            color: "rgba(255,255,255,0.04)",
            display: "flex",
          }}
        >
          #
        </div>

        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 11,
                backgroundImage: `linear-gradient(135deg, ${C.pink}, ${C.violet})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: C.bg,
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              #
            </div>
            <div style={{ display: "flex", fontSize: 20, letterSpacing: 6, color: C.text2 }}>
              {`HASHMARK LABS · CASE ${c.index}`}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(63,224,197,0.35)",
              backgroundColor: "rgba(63,224,197,0.08)",
              color: C.teal,
              fontSize: 17,
              letterSpacing: 3,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: C.teal, display: "flex" }} />
            LIVE IN PRODUCTION
          </div>
        </div>

        {/* Title block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 5, color: C.pink }}>{c.category.toUpperCase()}</div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontFamily: "Instrument Serif",
              fontSize: nameSize,
              lineHeight: 1,
              letterSpacing: -2,
              color: C.text,
            }}
          >
            {c.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 980,
              fontFamily: "Instrument Serif",
              fontStyle: "italic",
              fontSize: 44,
              lineHeight: 1.15,
              color: C.pinkSoft,
            }}
          >
            {c.summary}
          </div>
        </div>

        {/* Stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {c.stack.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                padding: "8px 16px",
                borderRadius: 999,
                backgroundColor: C.surface2,
                border: "1px solid rgba(154,156,184,0.22)",
                color: C.text2,
                fontSize: 18,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
        ...(sans ? [{ name: "Geist", data: sans, style: "normal" as const, weight: 400 as const }] : []),
      ],
    },
  );
}
