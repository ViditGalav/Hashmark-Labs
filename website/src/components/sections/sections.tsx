import Link from "next/link";
import type { ReactNode } from "react";
import { contact, stats as baseStats } from "@/content/site";
import { practices, type FrameworkStep, type MeasureGroup, type Practice, type TitledItem } from "@/content/practices";
import type { Faq } from "@/content/faq";
import { team } from "@/content/team";
import { Arrow, Avatar, ButtonLink, SectionHeader, cn } from "@/components/ui/primitives";

/* ---------- Stats: a quiet row of real numbers ---------- */
export function StatsRow({ labels, bodies, className }: { labels?: string[]; bodies?: string[]; className?: string }) {
  return (
    <dl className={cn("grid gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4", className)} data-reveal>
      {baseStats.map((s, i) => (
        <div key={s.value}>
          <dt className="sr-only">{labels?.[i] ?? s.label}</dt>
          <dd>
            <p className="font-serif text-5xl leading-none text-text">{s.value}</p>
            <p className="mt-3 text-[0.95rem] font-medium text-text-2" aria-hidden="true">
              {labels?.[i] ?? s.label}
            </p>
            <p className="mt-1 text-sm text-muted">{bodies?.[i] ?? s.body}</p>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- Intro: a paragraph plus a few supporting points ---------- */
export function IntroSection({ eyebrow, title, points, children }: { eyebrow?: string; title: string; points: TitledItem[]; children?: ReactNode }) {
  return (
    <section className="section" aria-label={eyebrow ?? "Introduction"}>
      <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div data-reveal>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className={cn("font-serif text-[clamp(1.7rem,1.3rem+1.4vw,2.4rem)] leading-snug", eyebrow && "mt-3")}>{title}</h2>
        </div>
        <div className="space-y-7" data-reveal>
          {points.map((p) => (
            <div key={p.title}>
              <h3 className="text-[1.05rem] font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
      {children}
    </section>
  );
}

/* ---------- Services: two-column list with hairlines ---------- */
export function ServiceList({ items, also, alsoLabel = "We also do" }: { items: TitledItem[]; also?: string[]; alsoLabel?: string }) {
  return (
    <>
      <ul className="mt-12 grid gap-x-12 border-t border-line sm:grid-cols-2">
        {items.map((s) => (
          <li key={s.title} className="border-b border-line py-6" data-reveal>
            <h3 className="text-[1.08rem] font-semibold">{s.title}</h3>
            {s.body && <p className="mt-1.5 text-muted">{s.body}</p>}
          </li>
        ))}
      </ul>
      {also && also.length > 0 && (
        <p className="mt-6 text-muted" data-reveal>
          <span className="text-text-2">{alsoLabel}:</span> {listWithCommas(also.map(lowerFirst))}.
        </p>
      )}
    </>
  );
}

export const lowerFirst = (s: string) => (/^[A-Z][a-z]/.test(s) ? s[0].toLowerCase() + s.slice(1) : s);

/** Joins items; switches to semicolons when an item already contains a comma. */
export function listWithCommas(items: readonly string[]) {
  const clean = items.map((i) => i.replace(/ & /g, " and "));
  if (!clean.some((i) => i.includes(","))) return joinList(clean);
  return `${clean.slice(0, -1).join("; ")}; and ${clean[clean.length - 1]}`;
}

export function joinList(items: readonly string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

/* ---------- Problem table ---------- */
export function ProblemTable({ title, rows }: { title: string; rows: NonNullable<Practice["problem"]>["rows"] }) {
  return (
    <section className="section border-t border-line" aria-label="Common problems">
      <div className="container-x">
        <SectionHeader eyebrow="What usually goes wrong" title={title} />
        <div className="mt-12">
          <div className="hidden grid-cols-2 gap-10 border-b border-line pb-3 text-sm text-muted md:grid">
            <p>The problem</p>
            <p>What we do about it</p>
          </div>
          <ul>
            {rows.map((r) => (
              <li key={r.title} className="grid gap-3 border-b border-line py-7 md:grid-cols-2 md:gap-10" data-reveal>
                <div>
                  <h3 className="text-[1.05rem] font-semibold">{r.title}</h3>
                  <p className="mt-1.5 text-muted">{r.wrong}</p>
                </div>
                <p className="text-text-2 md:pt-0">
                  <span className="mr-2 text-pink-soft md:hidden">Our approach:</span>
                  {r.instead}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Framework: stages as a table (what we do / what we track) ---------- */
export function FrameworkTable({ eyebrow, title, steps, note }: { eyebrow: string; title: string; steps: FrameworkStep[]; note: string }) {
  return (
    <section className="section border-t border-line" aria-label={eyebrow}>
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line text-sm text-muted">
                <th scope="col" className="w-[22%] py-3 pr-6 font-normal">Stage</th>
                <th scope="col" className="py-3 pr-6 font-normal">What we do</th>
                <th scope="col" className="w-[28%] py-3 font-normal">What we track</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((s, i) => (
                <tr key={s.title} className="border-b border-line align-top">
                  <th scope="row" className="py-5 pr-6 font-semibold text-text">
                    <span className="mr-3 font-mono text-xs text-faint">{i + 1}</span>
                    {s.title}
                  </th>
                  <td className="py-5 pr-6 text-text-2">{s.do}</td>
                  <td className="py-5 font-mono text-[0.82rem] leading-relaxed text-pink-soft">{s.measure.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-muted" data-reveal>
          {note}
        </p>
      </div>
    </section>
  );
}

/* ---------- Process: a real sequence, so it is numbered ---------- */
export function ProcessSteps({ eyebrow = "Process", title, steps, rituals }: { eyebrow?: string; title: string; steps: TitledItem[]; rituals: string[] }) {
  return (
    <section className="section border-t border-line" aria-label={eyebrow}>
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-line-strong pt-5" data-reveal>
              <p className="font-mono text-sm text-pink-soft">Step {i + 1}</p>
              <h3 className="mt-2 text-[1.08rem] font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-text-2" data-reveal>
          Throughout: {joinList(rituals.map(lowerFirst))}.
        </p>
      </div>
    </section>
  );
}

/* ---------- Measures / deliverables: four plain columns ---------- */
export function MeasureGroups({ eyebrow, title, lead, groups }: { eyebrow: string; title: string; lead: string; groups: MeasureGroup[] }) {
  return (
    <section className="section border-t border-line" aria-label={eyebrow}>
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} data-reveal>
              <h3 className="text-[1.05rem] font-semibold">{g.title}</h3>
              <ul className="mt-3 space-y-1.5 text-muted">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Principles (cream section from the deck) ---------- */
export function Principles({ title, zero, items }: { title: string; zero: TitledItem; items: TitledItem[] }) {
  return (
    <section className="cream section" aria-label="How we operate">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">How we operate</p>
          <h2 className="display-m mt-3">{title}</h2>
          <div className="mt-10 border-l-2 border-crimson pl-6">
            <p className="font-serif text-2xl leading-snug text-ink">{zero.title}</p>
            <p className="mt-3">{zero.body}</p>
          </div>
        </div>
        <ul className="border-t border-ink/20">
          {items.map((p) => (
            <li key={p.title} className="border-b border-ink/15 py-6" data-reveal>
              <h3 className="text-[1.05rem] font-semibold">{p.title}</h3>
              <p className="mt-1.5">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Team ---------- */
export function TeamSection({ headingLevel = "h2", eyebrow = "Who you'll work with" }: { headingLevel?: "h1" | "h2"; eyebrow?: string }) {
  return (
    <section className="section border-t border-line" aria-label="The team">
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={team.title} as={headingLevel} />
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {team.people.map((p) => (
            <li key={p.name} data-reveal>
              <div className="flex items-center gap-4">
                <Avatar initials={p.initials} gradient={p.gradient} />
                <div>
                  <h3 className="font-serif text-2xl leading-tight">{p.name}</h3>
                  <p className="text-sm text-muted">{p.role}</p>
                </div>
              </div>
              <p className="mt-4 text-text-2">{p.bio}</p>
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-3xl border-t border-line pt-6 text-muted" data-reveal>
          {team.benchLine}
        </p>
      </div>
    </section>
  );
}

/* ---------- Practice team pod ---------- */
export function TeamPod({ title, lead, roles, backedBy }: { title: string; lead: string; roles: TitledItem[]; backedBy: string }) {
  return (
    <section className="section border-t border-line" aria-label="Your team">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionHeader eyebrow="Your team" title={title} lead={lead} size="m" />
          <p className="mt-6 text-muted" data-reveal>
            {backedBy}
          </p>
        </div>
        <dl className="border-t border-line">
          {roles.map((r) => (
            <div key={r.title} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6" data-reveal>
              <dt className="font-semibold text-text">{r.title}</dt>
              <dd className="text-muted">{r.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- Engagement models ---------- */
export function EngagementOptions({ title, items, note, footer, eyebrow = "Ways to work with us" }: { title: string; items: TitledItem[]; note: string; footer: string[]; eyebrow?: string }) {
  return (
    <section className="section border-t border-line" aria-label="Engagement models">
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <ul className="mt-12 grid gap-x-12 border-t border-line sm:grid-cols-2">
          {items.map((e) => (
            <li key={e.title} className="border-b border-line py-6" data-reveal>
              <h3 className="font-serif text-2xl">{e.title}</h3>
              <p className="mt-1.5 text-muted">{e.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-text-2" data-reveal>
          {note} {footer.length > 0 && <span className="text-muted">({joinList(footer)}.)</span>}
        </p>
      </div>
    </section>
  );
}

/* ---------- FAQ (native details) ---------- */
export function FaqSection({ faqs, title = "Things people usually ask us" }: { faqs: Faq[]; title?: string }) {
  return (
    <section className="section border-t border-line" aria-label="Frequently asked questions">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeader eyebrow="FAQ" title={title} size="m" className="lg:sticky lg:top-28 lg:self-start" />
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.05rem] font-medium text-text [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="mt-1 text-muted transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-8 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing call to action ---------- */
export function ClosingCta({
  title = "Tell us what you're",
  emphasis = "building.",
  lead = "If it's technically hard, we'd like to hear about it. Send a few lines about the product and where you're stuck, and an engineer will reply.",
  cta = "Talk to an engineer",
  href = "/contact",
}: {
  title?: string;
  emphasis?: string;
  lead?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="ambient border-t border-line" aria-label="Contact">
      <div className="container-x grid gap-12 py-[clamp(5rem,10vw,8rem)] lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <h2 className="display-l max-w-2xl" data-reveal>
            {title} <span className="em">{emphasis}</span>
          </h2>
          <p className="lead mt-6 max-w-xl" data-reveal>
            {lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3" data-reveal>
            <ButtonLink href={href}>{cta}</ButtonLink>
          </div>
        </div>
        <div className="space-y-4 text-text-2" data-reveal>
          <p>
            Or write to us directly at{" "}
            <a className="text-text underline decoration-line-strong underline-offset-4 hover:decoration-pink" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            , or message us on{" "}
            <a className="text-text underline decoration-line-strong underline-offset-4 hover:decoration-pink" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>{" "}
            at {contact.whatsappDisplay}.
          </p>
          <p className="text-muted">
            You&apos;ll most likely hear back from {contact.principal.name}, our {contact.principal.role.toLowerCase()}, at{" "}
            <a className="hover:text-pink" href={`mailto:${contact.principal.email}`}>
              {contact.principal.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Practices as a list ---------- */
export function PracticeList({ exclude, headingLevel = "h3" }: { exclude?: string; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="mt-10 border-t border-line">
      {practices
        .filter((p) => p.slug !== exclude)
        .map((p) => (
          <li key={p.slug} className="border-b border-line" data-reveal>
            <Link href={`/services/${p.slug}`} className="group grid gap-2 py-6 sm:grid-cols-[16rem_1fr_auto] sm:items-baseline sm:gap-8">
              <H className="font-serif text-[1.75rem] leading-tight transition-colors group-hover:text-pink-soft">{p.name}</H>
              <p className="text-muted">{p.summary}</p>
              <Arrow className="hidden text-muted transition-transform group-hover:translate-x-1 group-hover:text-pink sm:block" />
            </Link>
          </li>
        ))}
    </ul>
  );
}

/* ---------- Client names (text only; no logos exist) ---------- */
export function ClientNames({ names, label }: { names: string[]; label: string }) {
  return (
    <div>
      <p className="text-sm text-muted">{label}</p>
      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {names.map((n) => (
          <li key={n} className="font-serif text-xl text-text/70">
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}
