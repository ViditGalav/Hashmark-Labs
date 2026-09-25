import type { Metadata } from "next";
import Link from "next/link";
import { position, site, whoWeAre } from "@/content/site";
import { engineering, practices } from "@/content/practices";
import { additionalWork, cases, clientNames } from "@/content/work";
import { homeFaq } from "@/content/faq";
import { Arrow, ButtonLink, SectionHeader } from "@/components/ui/primitives";
import { HashConstellation } from "@/components/sections/HashConstellation";
import {
  ClosingCta,
  EngagementGrid,
  FaqSection,
  Marquee,
  NumberedGrid,
  PositionSection,
  PracticeTiles,
  PrinciplesCream,
  ProcessSteps,
  StatsBand,
  TeamSection,
  WhyGrid,
} from "@/components/sections/sections";
import { AdditionalWorkGrid, CaseRow } from "@/components/work/CaseCard";
import { JsonLd, faqJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Engineering the systems others can't` },
  description:
    "Senior-led AI, blockchain and fintech engineering consultancy — plus product & tokenomics, growth and BD practices. 70+ systems delivered across wallets, DeFi, trading, identity, RWA and infrastructure.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="ambient relative overflow-hidden pt-[72px]" aria-labelledby="hero-h">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <HashConstellation className="pointer-events-none absolute right-[-30%] top-1/2 w-[130%] max-w-none -translate-y-[42%] opacity-40 sm:right-[-18%] sm:w-[90%] sm:opacity-55 lg:right-[-6%] lg:w-[58%] lg:opacity-100" />
        <div className="container-x relative flex min-h-[calc(100svh-72px)] flex-col justify-center py-20 lg:py-28">
          <p className="eyebrow" data-reveal>
            AI · Blockchain · FinTech engineering
          </p>
          <h1 id="hero-h" className="display-xl mt-6 max-w-[14ch]" data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            Engineering the systems <span className="em">others can&apos;t.</span>
          </h1>
          <p className="lead mt-8 max-w-[38rem]" data-reveal style={{ ["--reveal-delay" as string]: "160ms" }}>
            {site.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3" data-reveal style={{ ["--reveal-delay" as string]: "240ms" }}>
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              See live systems
            </ButtonLink>
          </div>
          <dl className="mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:mt-24 lg:grid-cols-4" data-reveal style={{ ["--reveal-delay" as string]: "320ms" }}>
            {[
              { k: "Focus", v: site.focus },
              { k: "Model", v: site.model },
              { k: "Delivery", v: site.regionsShort },
              { k: "Capacity", v: "4–5 clients at a time" },
            ].map((m, i) => (
              <div key={m.k} className={i === 0 ? "border-l-2 border-pink pl-4" : "border-l border-line-strong pl-4"}>
                <dt className="label">{m.k}</dt>
                <dd className="mt-1.5 text-[0.95rem] text-text">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Client wordmarks ---------- */}
      <section className="border-y border-line bg-bg-2 py-8" aria-label="Clients">
        <div className="container-x mb-5 flex items-center justify-between gap-4">
          <p className="label">Shipped for teams across 11 verticals</p>
          <Link href="/work" className="hidden items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted hover:text-pink sm:flex">
            All work <Arrow />
          </Link>
        </div>
        <Marquee items={clientNames} label="Client names" />
      </section>

      <PositionSection index="01" title={position.title} points={position.points} />

      <StatsBand index="02" />

      {/* ---------- Four practices ---------- */}
      <section className="section border-t border-line" aria-label="Practices">
        <div className="container-x">
          <SectionHeader
            index="03"
            eyebrow="Four practices, one firm"
            title="Built by the people who build."
            lead={
              <>
                {whoWeAre.body[0]} Engineering is our core — and it sits behind every strategy, growth and partnership engagement. Clients combine the practices, or start with one.
              </>
            }
          />
          <PracticeTiles />
        </div>
      </section>

      {/* ---------- Capabilities ---------- */}
      <section className="section border-t border-line" aria-label="Capabilities">
        <div className="container-x">
          <SectionHeader index="04" eyebrow="Capabilities" title={engineering.services.title} />
          <NumberedGrid items={engineering.services.items} also={engineering.services.also} />
        </div>
      </section>

      {/* ---------- Selected work ---------- */}
      <section className="section border-t border-line" aria-label="Selected work">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              index="05"
              eyebrow="Selected work"
              title="Live systems,"
              emphasis="in production."
              lead="Production systems across AI, financial infrastructure, data intelligence and protocol engineering — every one senior-led."
            />
            <ButtonLink href="/work" variant="secondary" className="shrink-0">
              All work
            </ButtonLink>
          </div>
          <div className="mt-14 space-y-4">
            {cases.map((c, i) => (
              <CaseRow key={c.slug} c={c} flip={i % 2 === 1} />
            ))}
          </div>
          <div className="mt-24">
            <p className="eyebrow" data-reveal>
              Selected additional work
            </p>
            <h3 className="display-m mt-4" data-reveal>
              Breadth behind the depth.
            </h3>
            <div className="mt-10">
              <AdditionalWorkGrid items={additionalWork} />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps index="06" title={engineering.process.title} steps={engineering.process.steps} rituals={engineering.process.rituals} />

      <PrinciplesCream index="07" title={engineering.principles.title} zero={engineering.principles.zero} items={engineering.principles.items} />

      {/* ---------- Who we work with ---------- */}
      <section className="section" aria-label="Who we work with">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <SectionHeader index="08" eyebrow="Who we are" title={whoWeAre.title} size="m" />
            <p className="lead mt-6" data-reveal>
              {whoWeAre.body[1]}
            </p>
            <ol className="mt-10 flex flex-wrap items-center gap-2" data-reveal aria-label="Engagement lifecycle">
              {whoWeAre.lifecycle.map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="chip !text-text">{s}</span>
                  {i < whoWeAre.lifecycle.length - 1 && <Arrow className="text-pink" />}
                </li>
              ))}
            </ol>
          </div>
          <div className="card p-7 sm:p-8" data-reveal>
            <p className="label">Who we work with</p>
            <ul className="mt-4 divide-y divide-line">
              {whoWeAre.audiences.map((a) => (
                <li key={a} className="flex items-center justify-between py-4 text-[1.02rem] text-text">
                  {a}
                  <span className="h-1.5 w-1.5 rounded-full bg-pink" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TeamSection index="09" />

      <WhyGrid index="10" title={engineering.why.title} items={engineering.why.items} />

      <EngagementGrid
        index="11"
        title={engineering.engagement.title}
        items={engineering.engagement.items}
        note={engineering.engagement.note}
        footer={engineering.engagement.footer}
      />

      {/* ---------- Practice-specific entry points ---------- */}
      <section className="section border-t border-line" aria-label="Start with one practice">
        <div className="container-x">
          <SectionHeader index="12" eyebrow="Where to start" title="Start with the conversation you need." size="m" />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((p) => (
              <li key={p.slug} className="bg-bg">
                <Link href={`/contact?practice=${p.slug}`} className="group flex h-full flex-col p-7 transition-colors hover:bg-surface/60">
                  <span className="font-mono text-xs tracking-[0.2em] text-pink">{p.index}</span>
                  <span className="mt-5 font-serif text-2xl text-text">
                    {p.closing.title} <em className="text-pink">{p.closing.emphasis}</em>
                  </span>
                  <span className="mt-3 text-[0.93rem] text-muted">{p.closing.lead}</span>
                  <span className="mt-6 inline-flex items-center gap-2 pt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-text-2 group-hover:text-pink lg:mt-auto">
                    {p.closing.cta} <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection index="13" faqs={homeFaq} />
      <JsonLd data={faqJsonLd(homeFaq)} />

      <ClosingCta />
    </>
  );
}
