// Shared contact-form schema — used by the client form (instant validation) and the
// /api/contact route handler (authoritative validation). Option labels are authored
// form choices, logged in _docs/04-ADDED-CONTENT-REGISTER.md.
import { z } from "zod";
import type { Practice } from "@/content/practices";

export const PRACTICE_SLUGS = [
  "engineering",
  "growth",
  "bd-partnerships",
  "product-tokenomics",
] as const satisfies readonly Practice["slug"][];

export const STAGE_OPTIONS = ["Idea", "Pre-launch", "Live product", "Scaling", "Enterprise"] as const;
export const BUDGET_OPTIONS = ["Under $25k", "$25k–$75k", "$75k–$150k", "$150k+", "Not sure yet"] as const;
export const TIMELINE_OPTIONS = ["ASAP", "1–3 months", "3–6 months", "Exploring"] as const;

/** Honeypot field name — real users never see or fill it. */
export const HONEYPOT_FIELD = "company_url_confirm";

export const MESSAGE_MIN = 20;
export const MESSAGE_MAX = 5000;

/** Accept "example.com" as well as "https://example.com"; only http(s) URLs are valid. */
export function normaliseUrl(value: string): string {
  const v = value.trim();
  if (!v) return "";
  return /^https?:\/\//i.test(v) ? v : `https://${v}`;
}

function isHttpUrl(value: string): boolean {
  try {
    const u = new URL(normaliseUrl(value));
    return (u.protocol === "http:" || u.protocol === "https:") && u.hostname.includes(".");
  } catch {
    return false;
  }
}

/** Optional select: empty string means "not answered". */
const optionalChoice = <T extends readonly [string, ...string[]]>(options: T) =>
  z.union([z.enum(options), z.literal("")]).optional().default("");

export const contactSchema = z.object({
  name: z.string().trim().min(1, { error: "Please tell us your name." }).max(120, { error: "Please keep this under 120 characters." }),
  email: z
    .string()
    .trim()
    .min(1, { error: "Please enter your work email." })
    .max(254, { error: "That email address is too long." })
    .pipe(z.email({ error: "Please enter a valid email address." })),
  company: z.string().trim().max(160, { error: "Please keep this under 160 characters." }).optional().default(""),
  website: z
    .string()
    .trim()
    .max(300, { error: "Please keep this under 300 characters." })
    .refine((v) => v === "" || isHttpUrl(v), { error: "Please enter a valid website address, e.g. example.com." })
    .optional()
    .default(""),
  practices: z
    .array(z.enum(PRACTICE_SLUGS), { error: "Please choose at least one practice." })
    .min(1, { error: "Please choose at least one practice." })
    .max(PRACTICE_SLUGS.length),
  stage: optionalChoice(STAGE_OPTIONS),
  budget: optionalChoice(BUDGET_OPTIONS),
  timeline: optionalChoice(TIMELINE_OPTIONS),
  message: z
    .string()
    .trim()
    .min(MESSAGE_MIN, { error: `Could you tell us a bit more? At least ${MESSAGE_MIN} characters.` })
    .max(MESSAGE_MAX, { error: `Please keep your message under ${MESSAGE_MAX} characters.` }),
  telegram: z.string().trim().max(64, { error: "Please keep this under 64 characters." }).optional().default(""),
  nda: z.boolean().optional().default(false),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;
export type ContactField = keyof ContactData;
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

/** First error message per field, in a shape both client and server can use. */
export function toFieldErrors(error: z.ZodError): ContactFieldErrors {
  const out: ContactFieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && key in contactSchema.shape && !(key in out)) {
      out[key as ContactField] = issue.message;
    }
  }
  return out;
}
