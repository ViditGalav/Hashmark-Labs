"use client";

import { Suspense, useRef, useState, type ChangeEvent, type ComponentProps, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { contact } from "@/content/site";
import { Arrow, cn } from "@/components/ui/primitives";
import {
  BUDGET_OPTIONS,
  HONEYPOT_FIELD,
  MESSAGE_MIN,
  PRACTICE_SLUGS,
  STAGE_OPTIONS,
  TIMELINE_OPTIONS,
  contactSchema,
  toFieldErrors,
  type ContactField,
  type ContactFieldErrors,
} from "@/lib/contact-schema";

type PracticeSlug = (typeof PRACTICE_SLUGS)[number];
export type PracticeOption = { slug: PracticeSlug; name: string; index: string };

type Values = {
  name: string;
  email: string;
  company: string;
  website: string;
  practices: PracticeSlug[];
  stage: string;
  budget: string;
  timeline: string;
  message: string;
  telegram: string;
  nda: boolean;
  [HONEYPOT_FIELD]: string;
};

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; email: string }
  | { kind: "fallback" } // provider not configured, server error or network failure
  | { kind: "rate_limited" }
  | { kind: "invalid" };

const FIELD_ORDER: ContactField[] = [
  "name",
  "email",
  "company",
  "website",
  "practices",
  "stage",
  "budget",
  "timeline",
  "message",
  "telegram",
];

const isPracticeSlug = (v: string | null): v is PracticeSlug =>
  !!v && (PRACTICE_SLUGS as readonly string[]).includes(v);

const emptyValues = (practices: PracticeSlug[]): Values => ({
  name: "",
  email: "",
  company: "",
  website: "",
  practices,
  stage: "",
  budget: "",
  timeline: "",
  message: "",
  telegram: "",
  nda: false,
  [HONEYPOT_FIELD]: "",
});

/* ---------- Public component ---------- */
export function ContactForm({ practiceOptions }: { practiceOptions: PracticeOption[] }) {
  // useSearchParams needs a Suspense boundary for static rendering; the fallback is the
  // same form without a preselected practice, so the page is complete before hydration.
  return (
    <Suspense fallback={<ContactFormInner practiceOptions={practiceOptions} initialPractices={[]} />}>
      <ContactFormWithParams practiceOptions={practiceOptions} />
    </Suspense>
  );
}

function ContactFormWithParams({ practiceOptions }: { practiceOptions: PracticeOption[] }) {
  const params = useSearchParams();
  const requested = params.get("practice");
  const initial = isPracticeSlug(requested) ? [requested] : [];
  return <ContactFormInner key={initial.join(",")} practiceOptions={practiceOptions} initialPractices={initial} />;
}

/* ---------- Form ---------- */
function ContactFormInner({
  practiceOptions,
  initialPractices,
}: {
  practiceOptions: PracticeOption[];
  initialPractices: PracticeSlug[];
}) {
  const [values, setValues] = useState<Values>(() => emptyValues(initialPractices));
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);

  const submitting = status.kind === "submitting";

  function revalidate(next: Values, field: ContactField) {
    if (!errors[field]) return;
    const result = contactSchema.safeParse(next);
    const nextErrors = result.success ? {} : toFieldErrors(result.error);
    setErrors((prev) => ({ ...prev, [field]: nextErrors[field] }));
  }

  function update<K extends keyof Values>(field: K, value: Values[K]) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (field !== HONEYPOT_FIELD) revalidate(next, field as ContactField);
  }

  const onText = (field: "name" | "email" | "company" | "website" | "message" | "telegram" | "stage" | "budget" | "timeline") =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => update(field, e.target.value);

  function togglePractice(slug: PracticeSlug) {
    const has = values.practices.includes(slug);
    // Keep canonical order so the summary reads consistently.
    const next = PRACTICE_SLUGS.filter((s) => (s === slug ? !has : values.practices.includes(s)));
    update("practices", next);
  }

  function focusFirstError(errs: ContactFieldErrors) {
    const first = FIELD_ORDER.find((f) => errs[f]);
    if (!first) return;
    const el = formRef.current?.querySelector<HTMLElement>(first === "practices" ? "input[name='practices']" : `[name='${first}']`);
    el?.focus();
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const errs = toFieldErrors(result.error);
      setErrors(errs);
      setStatus({ kind: "invalid" });
      focusFirstError(errs);
      return;
    }
    setErrors({});
    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, [HONEYPOT_FIELD]: values[HONEYPOT_FIELD] }),
      });
      if (res.ok) {
        setStatus({ kind: "success", email: result.data.email });
        requestAnimationFrame(() => successRef.current?.focus());
        return;
      }
      if (res.status === 400) {
        const payload = (await res.json().catch(() => null)) as { fieldErrors?: ContactFieldErrors } | null;
        if (payload?.fieldErrors && Object.keys(payload.fieldErrors).length > 0) {
          setErrors(payload.fieldErrors);
          setStatus({ kind: "invalid" });
          focusFirstError(payload.fieldErrors);
          return;
        }
      }
      setStatus(res.status === 429 ? { kind: "rate_limited" } : { kind: "fallback" });
    } catch {
      setStatus({ kind: "fallback" });
    }
    requestAnimationFrame(() => alertRef.current?.focus());
  }

  const practiceNames = practiceOptions.filter((p) => values.practices.includes(p.slug)).map((p) => p.name);
  const mailto = buildMailto(values, practiceNames);
  const whatsapp = `${contact.whatsappHref}?text=${encodeURIComponent(
    `Hi Hashmark Labs, I'm ${values.name || "reaching out"}${values.company ? ` from ${values.company}` : ""}. I'd like to talk about ${
      practiceNames.length ? practiceNames.join(", ") : "a project"
    }.`,
  )}`;

  const liveMessage =
    status.kind === "submitting"
      ? "Sending your message…"
      : status.kind === "success"
        ? "Message sent."
        : status.kind === "invalid"
          ? `Please fix ${Object.values(errors).filter(Boolean).length} field${
              Object.values(errors).filter(Boolean).length === 1 ? "" : "s"
            } before sending.`
          : status.kind === "fallback"
            ? "Your message could not be sent from this form. Please use email or WhatsApp instead."
            : status.kind === "rate_limited"
              ? "Too many messages in a short time. Please try again later or contact us directly."
              : "";

  if (status.kind === "success") {
    return (
      <div className="card p-8 sm:p-10" ref={successRef} tabIndex={-1}>
        <p className="sr-only" role="status" aria-live="polite">
          {liveMessage}
        </p>
        <span aria-hidden="true" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal/40 bg-teal/10 text-teal">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10.5 8 14.5 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="display-s mt-6">
          Thanks, <span className="em">we&apos;ve got it.</span>
        </h3>
        <p className="mt-4 max-w-prose">
          Your enquiry is with the Hashmark Labs team. We&apos;ll reply to <span className="text-text">{status.email}</span> to arrange a
          discovery conversation with a senior lead.
          {values.nda ? " We've noted that you'd like an NDA before we talk." : ""}
        </p>
        <p className="mt-4 text-sm text-muted">
          Anything to add? Email{" "}
          <a className="text-text underline decoration-line-strong underline-offset-4 hover:text-pink" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(emptyValues(initialPractices));
            setStatus({ kind: "idle" });
          }}
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg border border-line-strong px-5 py-2.5 text-[0.95rem] font-medium text-text transition-colors hover:border-pink/60"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="cf-required-note" className="card p-6 sm:p-8 lg:p-10">
      <p id="cf-required-note" className="text-sm text-muted">
        Fields marked <span className="text-pink">*</span> are required.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <TextField id="name" label="Name" required autoComplete="name" value={values.name} onChange={onText("name")} error={errors.name} />
        <TextField
          id="email"
          label="Work email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={onText("email")}
          error={errors.email}
        />
        <TextField
          id="company"
          label="Company / project"
          autoComplete="organization"
          value={values.company}
          onChange={onText("company")}
          error={errors.company}
        />
        <TextField
          id="website"
          label="Website"
          type="url"
          inputMode="url"
          autoComplete="url"
          placeholder="example.com"
          value={values.website}
          onChange={onText("website")}
          error={errors.website}
          optional
        />
      </div>

      <fieldset className="mt-8" aria-describedby={errors.practices ? "practices-error" : "practices-hint"}>
        <legend className="label">
          Practices <span className="text-pink" aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </legend>
        <p id="practices-hint" className="mt-2 text-sm text-muted">
          Pick one or more.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {practiceOptions.map((p) => {
            const checked = values.practices.includes(p.slug);
            return (
              <label key={p.slug} className="relative inline-flex cursor-pointer">
                <input
                  type="checkbox"
                  name="practices"
                  value={p.slug}
                  checked={checked}
                  onChange={() => togglePractice(p.slug)}
                  aria-invalid={errors.practices ? true : undefined}
                  className="peer sr-only"
                />
                <span
                  className={cn(
                    "inline-flex min-h-11 items-center gap-2.5 rounded-lg border px-4 py-2 text-[0.93rem] transition-colors",
                    "peer-focus-visible:ring-2 peer-focus-visible:ring-pink peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg",
                    checked
                      ? "border-pink/70 bg-pink/15 text-text"
                      : "border-line bg-surface-2 text-text-2 hover:border-line-strong hover:text-text",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "inline-flex h-4 w-4 items-center justify-center rounded-[5px] border",
                      checked ? "border-pink bg-pink text-bg" : "border-line-strong",
                    )}
                  >
                    {checked && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5.2 4 7.2 8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  {p.name}
                </span>
              </label>
            );
          })}
        </div>
        <FieldError id="practices-error" message={errors.practices} />
      </fieldset>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <SelectField id="stage" label="Stage" options={STAGE_OPTIONS} value={values.stage} onChange={onText("stage")} error={errors.stage} />
        <SelectField
          id="budget"
          label="Budget band"
          options={BUDGET_OPTIONS}
          value={values.budget}
          onChange={onText("budget")}
          error={errors.budget}
          optional
        />
        <SelectField
          id="timeline"
          label="Timeline"
          options={TIMELINE_OPTIONS}
          value={values.timeline}
          onChange={onText("timeline")}
          error={errors.timeline}
        />
      </div>

      <div className="mt-8">
        <FieldLabel htmlFor="message" required>
          What are you building?
        </FieldLabel>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={6}
          value={values.message}
          onChange={onText("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={cn("message-hint", errors.message && "message-error") || undefined}
          placeholder="The product, the problem, and where you are today."
          className={cn(fieldClass, "min-h-40 resize-y leading-relaxed")}
        />
        <p id="message-hint" className="mt-2 text-sm text-muted">
          {values.message.trim().length < MESSAGE_MIN
            ? `${MESSAGE_MIN - values.message.trim().length} more characters, please.`
            : "Architecture, constraints and timelines all help us prepare."}
        </p>
        <FieldError id="message-error" message={errors.message} />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <TextField
          id="telegram"
          label="Telegram"
          placeholder="@handle"
          autoComplete="off"
          value={values.telegram}
          onChange={onText("telegram")}
          error={errors.telegram}
          optional
        />
        <div className="flex items-end">
          <label className="flex min-h-11 cursor-pointer items-center gap-3 text-[0.95rem] text-text-2">
            <input
              type="checkbox"
              name="nda"
              checked={values.nda}
              onChange={(e) => update("nda", e.target.checked)}
              className="h-5 w-5 shrink-0 cursor-pointer rounded border-line-strong accent-pink"
            />
            Please send an NDA before we talk
          </label>
        </div>
      </div>

      {/* Honeypot — hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
        <input
          id={HONEYPOT_FIELD}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values[HONEYPOT_FIELD]}
          onChange={(e) => update(HONEYPOT_FIELD, e.target.value)}
        />
      </div>

      {(status.kind === "fallback" || status.kind === "rate_limited") && (
        <div
          ref={alertRef}
          tabIndex={-1}
          className="mt-8 rounded-2xl border border-pink/40 bg-pink/[0.06] p-6"
          aria-labelledby="cf-fallback-title"
          role="group"
        >
          <h3 id="cf-fallback-title" className="font-sans text-base font-semibold text-text">
            {status.kind === "rate_limited" ? "Too many messages in a short time." : "We couldn't send this from the form."}
          </h3>
          <p className="mt-2 text-[0.95rem]">
            {status.kind === "rate_limited"
              ? "Please try again in a few minutes, or reach us directly:"
              : "Your message hasn't reached us yet. Please send it directly instead. The email link below already contains what you wrote:"}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={mailto}
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-pink px-5 py-2.5 text-[0.95rem] font-medium text-bg transition-colors hover:bg-pink-soft"
            >
              Send by email
              <Arrow />
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-[0.95rem] font-medium text-text transition-colors hover:border-pink/60"
            >
              Message on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="mt-4 break-words text-sm text-muted">
            {contact.email} · WhatsApp {contact.whatsappDisplay}
          </p>
        </div>
      )}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          See our{" "}
          <Link href="/privacy" className="text-text-2 underline decoration-line-strong underline-offset-4 hover:text-pink">
            privacy notice
          </Link>{" "}
          for how we handle what you send.
        </p>
        <button
          type="submit"
          disabled={submitting}
          aria-disabled={submitting}
          className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-pink px-7 py-3 text-[0.95rem] font-medium text-bg shadow-[0_0_0_1px_rgb(255_94_142/0.4),0_10px_40px_-10px_rgb(255_94_142/0.6)] transition-colors hover:bg-pink-soft disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Spinner />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {liveMessage}
      </p>
    </form>
  );
}

/* ---------- Field primitives ---------- */
const fieldClass =
  "block w-full min-h-11 rounded-xl border border-line bg-surface px-4 py-3 text-[0.98rem] text-text placeholder:text-muted " +
  "transition-colors hover:border-line-strong focus:border-pink/70 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink/70 " +
  "aria-[invalid=true]:border-pink/70";

function FieldLabel({
  htmlFor,
  required,
  optional,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="label mb-2.5 flex items-baseline gap-2">
      <span>
        {children}
        {required && (
          <>
            <span className="ml-1 text-pink" aria-hidden="true">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </span>
      {optional && <span className="normal-case tracking-normal text-muted/90">optional</span>}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-2 text-sm text-pink-soft">
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 4.8v3.6M8 10.9v.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {message}
    </p>
  );
}

function TextField({
  id,
  label,
  error,
  required,
  optional,
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
} & Omit<ComponentProps<"input">, "id" | "name" | "required">) {
  const errorId = `${id}-error`;
  return (
    <div className="min-w-0">
      <FieldLabel htmlFor={id} required={required} optional={optional}>
        {label}
      </FieldLabel>
      <input
        id={id}
        name={id}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass}
        {...rest}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function SelectField({
  id,
  label,
  options,
  error,
  optional,
  value,
  onChange,
}: {
  id: string;
  label: string;
  options: readonly string[];
  error?: string;
  optional?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  const errorId = `${id}-error`;
  return (
    <div className="min-w-0">
      <FieldLabel htmlFor={id} optional={optional}>
        {label}
      </FieldLabel>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(fieldClass, "appearance-none pr-10", value === "" && "text-muted")}
        >
          <option value="">Select…</option>
          {options.map((o) => (
            <option key={o} value={o} className="text-text">
              {o}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
        >
          <path d="M3 5.5 7 9.5l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function Spinner() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-spin">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
      <path d="M14.5 8A6.5 6.5 0 0 0 8 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Fallback helpers ---------- */
function buildMailto(values: Values, practiceNames: string[]): string {
  const lines = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.company && `Company / project: ${values.company}`,
    values.website && `Website: ${values.website}`,
    practiceNames.length > 0 && `Practices: ${practiceNames.join(", ")}`,
    values.stage && `Stage: ${values.stage}`,
    values.budget && `Budget band: ${values.budget}`,
    values.timeline && `Timeline: ${values.timeline}`,
    values.telegram && `Telegram: ${values.telegram}`,
    values.nda && "NDA: please send an NDA before we talk",
    "",
    values.message.length > 1500 ? `${values.message.slice(0, 1500)}…` : values.message,
  ].filter((l): l is string => typeof l === "string");
  const subject = `Project enquiry${values.name ? ` from ${values.name}` : ""}${values.company ? ` (${values.company})` : ""}`;
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
