import Link from "next/link";
import type { ReactNode } from "react";
import { contact, stats as baseStats, type Stat } from "@/content/site";
import { practices, type FrameworkStep, type MeasureGroup, type Practice, type TitledItem } from "@/content/practices";
import type { Faq } from "@/content/faq";
import { team } from "@/content/team";
import { Arrow, Avatar, ButtonLink, Chip, Num, SectionHeader, cn } from "@/components/ui/primitives";
import { CountUp } from "@/components/ui/CountUp";

const delay = (i: number, step = 70) => ({ ["--reveal-delay" as string]: `${i * step}ms` });

/* ---------- Stats: "Proof, not promises." ---------- */
const statTones = ["text-pink", "text-[color-mix(in_oklab,var(--color-pink),var(--color-violet))]", "text-violet", "text-indigo"];

export function StatsBand({
  index,
  eyebrow = "At a glance",
  title = "Proof, not promises.",
  labels,
  bodies,
}: {
  index?: string;
  eyebrow?: string;
  title?: string;
  labels?: string[];
  bodies?: string[];
}) {
  const items: Stat[] = baseStats.map((s, i) => ({ ...s, label: labels?.[i] ?? s.label, body: bodies?.[i] ?? s.body }));
  return (
    <section className="section relative" aria-labelledby="stats-h">
      <div className="container-x">
        <SectionHeader index={index} eyebrow={eyebrow} title={<span id="stats-h">{title}</span>} />
        <dl className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <div key={s.value} className="border-t border-line pt-6" data-reveal style={delay(i)}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <p className={cn("font-serif text-[clamp(4rem,3rem+4vw,6.5rem)] leading-none", statTones[i])}>
                  {s.count ? <CountUp to={s.count.to} decimals={s.count.decimals} suffix={s.count.suffix} final={s.value} /> : s.value}
                </p>
                <p className="mt-5 text-[1.05rem] font-semibold text-text" aria-hidden="true">
                  {s.label}
                </p>
                <p className="mt-2 text-[0.95rem] text-muted">{s.body}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- Position: 3 points ---------- */
export function PositionSection({ index, title, points }: { index?: string; title: string; points: TitledItem[] }) {
  return (
    <section className="section border-t border-line" aria-label="Our position">
      <div className="container-x">
        <p className="eyebrow" data-reveal>
          {index ? `${index} — ` : ""}Our position
        </p>
        <h2 className="display-m mt-4 max-w-4xl" data-reveal>
          {title}
        </h2>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {points.map((p, i) => (
            <li key={p.title} className="bg-bg p-7 sm:p-8" data-reveal style={delay(i)}>
              <Num n={i + 1} className="text-pink" />
              <h3 className="mt-6 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Numbered card grid (services / capabilities / audience) ---------- */
export function NumberedGrid({
  items,
  cols = 3,
  also,
  alsoLabel = "Also",
}: {
  items: TitledItem[];
  cols?: 2 | 3 | 4;
  also?: string[];
  alsoLabel?: string;
}) {
  return (
    <>
      <ol
        className={cn(
          "mt-14 grid gap-4",
          cols === 3 && "sm:grid-cols-2 lg:grid-cols-3",
          cols === 2 && "sm:grid-cols-2",
          cols === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        )}
      >
        {items.map((s, i) => (
          <li key={s.title} className="card card-hover p-7" data-reveal style={delay(i % 3)}>
            <span className="font-serif text-4xl text-pink/90">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 text-[1.15rem] font-semibold">{s.title}</h3>
            {s.body && <p className="mt-2.5 text-[0.95rem] text-muted">{s.body}</p>}
          </li>
        ))}
      </ol>
      {also && also.length > 0 && (
        <div className="mt-8 flex flex-wrap items-center gap-3" data-reveal>
          <span className="label">{alsoLabel}</span>
          {also.map((a) => (
            <Chip key={a}>{a}</Chip>
          ))}
        </div>
      )}
    </>
  );
}

/* ---------- Problem table: what goes wrong → what we do instead ---------- */
export function ProblemTable({ index, title, rows }: { index?: string; title: string; rows: NonNullable<Practice["problem"]>["rows"] }) {
  return (
    <section className="section border-t border-line" aria-label="The problem">
      <div className="container-x">
        <SectionHeader index={index} eyebrow="The problem" title={title} />
        <div className="mt-14">
          <div className="hidden grid-cols-2 border-b border-line pb-4 md:grid">
            <p className="label">What goes wrong</p>
            <p className="label !text-pink pl-8">What we do instead</p>
          </div>
          <ol>
            {rows.map((r, i) => (
              <li key={r.title} className="grid border-b border-line md:grid-cols-2" data-reveal style={delay(i)}>
                <div className="flex gap-5 py-7 md:pr-8">
                  <Num n={i + 1} className="mt-1" />
                  <div>
                    <h3 className="text-[1.08rem] font-semibold">{r.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] text-muted">{r.wrong}</p>
                  </div>
                </div>
                <div className="flex gap-3 pb-7 pl-10 md:border-l md:border-line md:py-7 md:pl-8">
                  <span className="label !text-pink shrink-0 pt-1 md:hidden">Instead</span>
                  <p className="text-text-2">{r.instead}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Framework timeline: WE DO / WE MEASURE ---------- */
export function FrameworkTimeline({ index, eyebrow, title, steps, note }: { index?: string; eyebrow: string; title: string; steps: FrameworkStep[]; note: string }) {
  return (
    <section className="section border-t border-line" aria-label={eyebrow}>
      <div className="container-x">
        <SectionHeader index={index} eyebrow={eyebrow} title={title} />
        <ol className="mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative" data-reveal style={delay(i)}>
              <Num n={i + 1} className={i === 0 ? "text-pink" : undefined} />
              <div className="relative mt-3 flex items-center">
                <span className="relative z-10 h-2.5 w-2.5 bg-pink" aria-hidden="true" />
                <span className="ml-0 h-px flex-1 bg-line-strong" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-[1.1rem] font-semibold">{s.title}</h3>
              <p className="label mt-5 !text-[0.65rem]">We do</p>
              <p className="mt-2 text-[0.93rem] text-text-2">{s.do}</p>
              <div className="mt-5 border-t border-line pt-4">
                <p className="label !text-[0.65rem]">We measure</p>
                <ul className="mt-2 space-y-1">
                  {s.measure.map((m) => (
                    <li key={m} className="font-mono text-[0.8rem] text-pink">
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-12 font-serif text-xl italic text-muted" data-reveal>
          {note}
        </p>
      </div>
    </section>
  );
}

/* ---------- Process: 4 steps + rituals ---------- */
export function ProcessSteps({ index, eyebrow = "How we work", title, steps, rituals, children }: { index?: string; eyebrow?: string; title: string; steps: TitledItem[]; rituals: string[]; children?: ReactNode }) {
  return (
    <section className="section border-t border-line" aria-label={eyebrow}>
      <div className="container-x">
        <SectionHeader index={index} eyebrow={eyebrow} title={title} />
        <ol className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card p-7" data-reveal style={delay(i)}>
              <div className="flex items-center justify-between">
                <span className="font-serif text-5xl text-text/90">{String(i + 1).padStart(2, "0")}</span>
                {i < steps.length - 1 && <Arrow className="hidden text-faint lg:block" />}
              </div>
              <h3 className="mt-8 text-[1.1rem] font-semibold">{s.title}</h3>
              <p className="mt-2.5 text-[0.95rem] text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3" data-reveal>
          {rituals.map((r) => (
            <li key={r} className="flex items-center gap-2.5 text-[0.95rem] text-text-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
        {children}
      </div>
    </section>
  );
}

/* ---------- Measure / Deliverables: 4 groups ---------- */
export function MeasureGroups({ index, eyebrow, title, lead, groups }: { index?: string; eyebrow: string; title: string; lead: string; groups: MeasureGroup[] }) {
  return (
    <section className="section border-t border-line" aria-label={eyebrow}>
      <div className="container-x">
        <SectionHeader index={index} eyebrow={eyebrow} title={title} lead={lead} />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <li key={g.title} className="card p-7" data-reveal style={delay(i)}>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-violet">{g.kicker}</p>
              <h3 className="display-s mt-3">{g.title}</h3>
              <ul className="mt-6 space-y-3 border-t border-line pt-5">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[0.95rem] text-text-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pink" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Principles (cream, deck p8) ---------- */
export function PrinciplesCream({ index, title, zero, items }: { index?: string; title: string; zero: TitledItem; items: TitledItem[] }) {
  const letters = ["A", "B", "C", "D", "E"];
  return (
    <section className="cream section" aria-label="Operating principles">
      <div className="container-x">
        <SectionHeader index={index} eyebrow="Operating principles" title={title} />
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div data-reveal>
            <p className="font-serif text-[clamp(8rem,6rem+8vw,13rem)] leading-[0.8] text-crimson" aria-hidden="true">
              0
            </p>
            <h3 className="mt-8 text-2xl font-semibold">
              <span className="sr-only">Zero </span>
              {zero.title}
            </h3>
            <p className="mt-3 max-w-md text-[1.02rem]">{zero.body}</p>
          </div>
          <ol className="border-t-2 border-ink">
            {items.map((p, i) => (
              <li key={p.title} className="flex gap-5 border-b border-ink/15 py-6" data-reveal style={delay(i)}>
                <span className="w-6 shrink-0 pt-0.5 font-mono text-sm text-crimson">{letters[i]}</span>
                <div>
                  <h3 className="text-[1.08rem] font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-[0.97rem]">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Team: principals + bench ---------- */
export function TeamSection({ index, headingLevel = "h2" }: { index?: string; headingLevel?: "h1" | "h2" }) {
  return (
    <section className="section border-t border-line" aria-label="The team">
      <div className="container-x">
        <SectionHeader index={index} eyebrow="The team" title={team.title} as={headingLevel} />
        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {team.people.map((p, i) => (
            <li key={p.name} className="card p-7" data-reveal style={delay(i)}>
              <div className="flex items-center gap-4">
                <Avatar initials={p.initials} gradient={p.gradient} />
                <div>
                  <h3 className="font-serif text-[1.75rem] leading-tight">{p.name}</h3>
                  <p className={cn("mt-1 font-mono text-[0.68rem] uppercase tracking-[0.18em]", p.gradient === "pink" ? "text-pink" : p.gradient === "violet" ? "text-violet" : "text-teal")}>
                    {p.role}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-[0.95rem] text-muted">{p.bio}</p>
            </li>
          ))}
        </ul>
        <div className="card mt-4 flex flex-col gap-4 p-6 sm:p-7" data-reveal>
          <p className="label">Senior core + specialist bench</p>
          <ul className="flex flex-wrap gap-2">
            {team.bench.map((b) => (
              <li key={b}>
                <Chip>{b}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Team pod (practice pages) ---------- */
export function TeamPod({ index, title, lead, roles, backedBy }: { index?: string; title: string; lead: string; roles: TitledItem[]; backedBy: string }) {
  return (
    <section className="section border-t border-line" aria-label="Your team">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <SectionHeader index={index} eyebrow="Your team" title={title} lead={lead} size="m" />
          <div className="card mt-10 p-6" data-reveal>
            <p className="label">Backed by</p>
            <p className="mt-2 text-text">{backedBy}</p>
          </div>
        </div>
        <ol className="border-t border-line">
          {roles.map((r, i) => (
            <li key={r.title} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[2rem_12rem_1fr] sm:gap-6" data-reveal style={delay(i)}>
              <Num n={i + 1} className="pt-1" />
              <h3 className="text-[1.05rem] font-semibold">{r.title}</h3>
              <p className="text-[0.95rem] text-muted">{r.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Why Hashmark: 8 items ---------- */
export function WhyGrid({ index, title, items }: { index?: string; title: string; items: TitledItem[] }) {
  return (
    <section className="section border-t border-line" aria-label="Why Hashmark">
      <div className="container-x">
        <SectionHeader index={index} eyebrow="Why Hashmark" title={title} />
        <ol className="mt-14 grid gap-x-10 sm:grid-cols-2">
          {items.map((w, i) => (
            <li key={w.title} className="flex gap-5 border-t border-line py-6" data-reveal style={delay(i % 2)}>
              <span className="w-10 shrink-0 font-serif text-3xl leading-none text-pink">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-[1.08rem] font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-[0.95rem] text-muted">{w.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Engagement models ---------- */
export function EngagementGrid({ index, title, items, note, footer }: { index?: string; title: string; items: TitledItem[]; note: string; footer: string[] }) {
  return (
    <section className="section border-t border-line" aria-label="Engagement models">
      <div className="container-x">
        <SectionHeader index={index} eyebrow="Engagement" title={title} />
        <ol className={cn("mt-14 grid gap-4 sm:grid-cols-2", items.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4")}>
          {items.map((e, i) => (
            <li key={e.title} className="card card-hover flex flex-col p-6" data-reveal style={delay(i)}>
              <Num n={i + 1} className="text-pink" />
              <h3 className="mt-8 font-serif text-2xl leading-tight">{e.title}</h3>
              <p className="mt-3 text-[0.93rem] text-muted">{e.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-line p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between" data-reveal>
          <p className="max-w-2xl text-text-2">{note}</p>
          <ul className="flex flex-wrap gap-2">
            {footer.map((f) => (
              <li key={f}>
                <Chip>{f}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ (native details) ---------- */
export function FaqSection({ index, faqs, title = "Questions, answered." }: { index?: string; faqs: Faq[]; title?: string }) {
  return (
    <section className="section border-t border-line" aria-label="Frequently asked questions">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeader index={index} eyebrow="FAQ" title={title} size="m" className="lg:sticky lg:top-28 lg:self-start" />
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line" data-reveal>
              <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.08rem] font-medium text-text [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line-strong transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-10 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing CTA (deck final slide) ---------- */
export function ClosingCta({
  title = "Let's build",
  emphasis = "what's next.",
  lead = "Building something technically complex and looking for a team that thinks at the protocol level? Let's discuss the architecture.",
  cta = "Start a conversation",
  href = "/contact",
}: {
  title?: string;
  emphasis?: string;
  lead?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="ambient relative overflow-hidden border-t border-line" aria-label="Contact">
      <span aria-hidden="true" className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-serif text-[clamp(18rem,30vw,34rem)] leading-none text-white/[0.035]">
        #
      </span>
      <div className="container-x relative py-[clamp(6rem,12vw,10rem)]">
        <h2 className="display-xl max-w-4xl" data-reveal>
          {title} <span className="em">{emphasis}</span>
        </h2>
        <p className="lead mt-8 max-w-2xl" data-reveal>
          {lead}
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={href}>{cta}</ButtonLink>
          <ButtonLink href={`mailto:${contact.email}`} variant="secondary" arrow={false}>
            {contact.email}
          </ButtonLink>
        </div>
        <ul className="mt-14 grid gap-3 sm:grid-cols-3" data-reveal>
          {[
            { k: "Email", v: contact.email, href: `mailto:${contact.email}` },
            { k: "WhatsApp", v: contact.whatsappDisplay, href: contact.whatsappHref },
            { k: contact.principal.name, v: contact.principal.email, href: `mailto:${contact.principal.email}` },
          ].map((c) => (
            <li key={c.k}>
              <a
                href={c.href}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="card card-hover block p-5"
              >
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-pink">{c.k}</span>
                <span className="mt-2 block break-all text-text">{c.v}</span>
                {c.href.startsWith("http") && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted" data-reveal>
          You&apos;ll speak directly with {contact.principal.name}, {contact.principal.role} — the architects you meet are the ones who build.
        </p>
      </div>
    </section>
  );
}

/* ---------- Practices overview ---------- */
export function PracticeTiles({ exclude, headingLevel = "h3" }: { exclude?: string; headingLevel?: "h2" | "h3" }) {
  const list = practices.filter((p) => p.slug !== exclude);
  const H = headingLevel;
  const accent: Record<Practice["accent"], string> = {
    pink: "from-pink/25",
    violet: "from-violet/25",
    teal: "from-teal/20",
    indigo: "from-indigo/25",
  };
  return (
    <ul className="mt-14 grid gap-4 md:grid-cols-3">
      {list.map((p, i) => (
        <li key={p.slug} data-reveal style={delay(i)} className={cn(list.length === 4 && i === 0 && "md:col-span-3")}>
          <Link href={`/services/${p.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden p-7 sm:p-9">
            <span aria-hidden="true" className={cn("pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br to-transparent blur-3xl", accent[p.accent])} />
            <span className="relative flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-pink">{p.index}</span>
              <Arrow className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-pink" />
            </span>
            <H className={cn("relative mt-8 font-serif leading-[1.05]", list.length === 4 && i === 0 ? "text-[clamp(2.2rem,1.6rem+2vw,3.4rem)]" : "text-[2rem]")}>
              {p.name}
            </H>
            <p className="relative mt-2 font-serif text-xl italic text-pink-soft">
              {p.hero.title} {p.hero.emphasis}
            </p>
            <p className="relative mt-5 max-w-2xl text-[0.97rem] text-muted">{p.summary}</p>
            <ul className="relative mt-auto flex flex-wrap gap-2 pt-8">
              {p.services.items.slice(0, list.length === 4 && i === 0 ? 6 : 3).map((s) => (
                <li key={s.title}>
                  <Chip>{s.title}</Chip>
                </li>
              ))}
            </ul>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Marquee (text wordmarks — no logos exist) ---------- */
export function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={hidden || undefined}>
      {items.map((n) => (
        <li key={n} className="whitespace-nowrap font-serif text-[1.75rem] text-text/55">
          {n}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]" role="region" aria-label={label}>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
