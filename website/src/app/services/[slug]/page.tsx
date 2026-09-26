import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPractice, practices, techDepth, type Practice } from "@/content/practices";
import { getCase } from "@/content/work";
import { Arrow, ButtonLink, Chip, SectionHeader } from "@/components/ui/primitives";
import {
  ClosingCta,
  EngagementGrid,
  FrameworkTimeline,
  MeasureGroups,
  NumberedGrid,
  PositionSection,
  PracticeTiles,
  PrinciplesCream,
  ProblemTable,
  ProcessSteps,
  StatsBand,
  TeamPod,
  TeamSection,
  WhyGrid,
} from "@/components/sections/sections";
import { CaseRow } from "@/components/work/CaseCard";
import { JsonLd, absoluteUrl, breadcrumbJsonLd } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPractice(slug);
  if (!p) return {};
  return {
    title: p.meta.title,
    description: p.meta.description,
    alternates: { canonical: `/services/${p.slug}` },
    openGraph: { title: `${p.name} · Hashmark Labs`, description: p.meta.description, url: `/services/${p.slug}` },
  };
}

/** Sequential section numbering that adapts to which sections a practice has. */
function counter() {
  let n = 0;
  return () => String(++n).padStart(2, "0");
}

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPractice(slug);
  if (!p) notFound();
  const next = counter();

  return (
    <>
      <PracticeHero p={p} />

      <PositionSection index={next()} title={p.position.title} points={p.position.points} />

      <StatsBand index={next()} eyebrow="Why it matters" title={p.statsTitle} labels={p.statLabels} bodies={p.statBodies} />

      {p.problem && <ProblemTable index={next()} title={p.problem.title} rows={p.problem.rows} />}

      <section className="section border-t border-line" aria-label="Services">
        <div className="container-x">
          <SectionHeader index={next()} eyebrow={p.slug === "engineering" ? "Capabilities" : "Services"} title={p.services.title} />
          <NumberedGrid items={p.services.items} also={p.services.also} />
        </div>
      </section>

      {p.slug === "engineering" && <TechDepthSection index={next()} />}

      {p.framework && <FrameworkTimeline index={next()} eyebrow={p.framework.eyebrow} title={p.framework.title} steps={p.framework.steps} note={p.framework.note} />}

      <ProcessSteps index={next()} title={p.process.title} steps={p.process.steps} rituals={p.process.rituals} />

      {p.measure && <MeasureGroups index={next()} eyebrow={p.measure.eyebrow} title={p.measure.title} lead={p.measure.lead} groups={p.measure.groups} />}

      {p.audience && <AudienceSection index={next()} audience={p.audience} />}

      <PrinciplesCream index={next()} title={p.principles.title} zero={p.principles.zero} items={p.principles.items} />

      {p.team ? <TeamPod index={next()} {...p.team} /> : <TeamSection index={next()} />}

      <WorkSection index={next()} p={p} />

      <WhyGrid index={next()} title={p.why.title} items={p.why.items} />

      <EngagementGrid index={next()} title={p.engagement.title} items={p.engagement.items} note={p.engagement.note} footer={p.engagement.footer} />

      <section className="section border-t border-line" aria-label="Other practices">
        <div className="container-x">
          <SectionHeader
            index={next()}
            eyebrow="Part of Hashmark Labs"
            title={p.partOf.title}
            emphasis={p.partOf.emphasis}
            lead={`${p.name} is one of four Hashmark Labs practices. Clients combine them — or start with one.`}
          />
          <PracticeTiles exclude={p.slug} />
        </div>
      </section>

      <ClosingCta title={p.closing.title} emphasis={p.closing.emphasis} lead={p.closing.lead} cta={p.closing.cta} href={`/contact?practice=${p.slug}`} />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: p.name, path: `/services/${p.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: p.name,
          description: p.summary,
          url: absoluteUrl(`/services/${p.slug}`),
          provider: { "@id": absoluteUrl("/#organization") },
          areaServed: ["United States", "Europe", "Asia-Pacific", "Middle East"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: p.services.title,
            itemListElement: p.services.items.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.body } })),
          },
        }}
      />
    </>
  );
}

function PracticeHero({ p }: { p: Practice }) {
  return (
    <section className="ambient relative overflow-hidden pt-[72px]" aria-labelledby="practice-h">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-8 top-24 select-none font-serif text-[clamp(14rem,28vw,30rem)] leading-none text-white/[0.03]">
        {p.index}
      </span>
      <div className="container-x relative py-20 lg:py-32">
        <nav aria-label="Breadcrumb" className="mb-10 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-faint" data-reveal>
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/services" className="hover:text-pink">
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-muted">
              {p.name}
            </li>
          </ol>
        </nav>
        <p className="eyebrow" data-reveal>
          {p.index} — {p.hero.eyebrow}
        </p>
        <h1 id="practice-h" className="display-xl mt-6 max-w-[16ch]" data-reveal>
          {p.hero.title} <span className="em">{p.hero.emphasis}</span>
        </h1>
        <p className="lead mt-8 max-w-2xl" data-reveal>
          {p.hero.lead}
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={`/contact?practice=${p.slug}`}>{p.closing.cta}</ButtonLink>
          <ButtonLink href="#services-overview" variant="secondary" arrow={false}>
            What we do
          </ButtonLink>
        </div>
        <ul id="services-overview" className="mt-16 flex scroll-mt-28 flex-wrap gap-2" data-reveal aria-label="Services in this practice">
          {p.services.items.map((s) => (
            <li key={s.title}>
              <Chip>{s.title}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TechDepthSection({ index }: { index: string }) {
  return (
    <section className="section border-t border-line" aria-label="Technical depth">
      <div className="container-x">
        <SectionHeader index={index} eyebrow="Technical depth" title={techDepth.title} />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {techDepth.columns.map((col) => (
            <div key={col.title} className="card p-7" data-reveal>
              <h3 className="display-s">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[0.95rem] text-text-2">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-pink" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="card mt-4 p-6 sm:p-7" data-reveal>
          <p className="label">Engineering</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {techDepth.stack.map((s) => (
              <li key={s}>
                <Chip>{s}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AudienceSection({ index, audience }: { index: string; audience: NonNullable<Practice["audience"]> }) {
  const hasBodies = audience.items.some((a) => a.body);
  return (
    <section className="section border-t border-line" aria-label={audience.eyebrow}>
      <div className="container-x">
        <SectionHeader index={index} eyebrow={audience.eyebrow} title={audience.title} />
        {hasBodies ? (
          <NumberedGrid items={audience.items} cols={4} />
        ) : (
          <ul className="mt-12 flex flex-wrap gap-3" data-reveal>
            {audience.items.map((a) => (
              <li key={a.title} className="chip !px-5 !py-3 !text-[0.95rem] !text-text">
                {a.title}
              </li>
            ))}
          </ul>
        )}
        {audience.note && (
          <p className="mt-10 font-serif text-2xl italic text-text" data-reveal>
            {audience.note}
          </p>
        )}
      </div>
    </section>
  );
}

function WorkSection({ index, p }: { index: string; p: Practice }) {
  const w = p.work;
  return (
    <section className="section border-t border-line" aria-label="Selected work">
      <div className="container-x">
        <SectionHeader index={index} eyebrow="Selected work" title={w.title} />
        {w.kind === "cases" ? (
          <>
            <div className="mt-14 space-y-4">
              {w.slugs.map((s, i) => {
                const c = getCase(s);
                return c ? <CaseRow key={s} c={c} flip={i % 2 === 1} /> : null;
              })}
            </div>
            {w.note && (
              <p className="mt-8 text-muted" data-reveal>
                {w.note}
              </p>
            )}
            <Link href="/work" className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-pink" data-reveal>
              All work <Arrow />
            </Link>
          </>
        ) : (
          <>
            <ul className="mt-14 grid gap-4 md:grid-cols-3">
              {w.slots.map((s) => (
                <li key={s.label} className="rounded-2xl border border-dashed border-line-strong p-7" data-reveal>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-violet">{s.label}</p>
                  <h3 className="display-s mt-4">Case study in preparation</h3>
                  <p className="mt-3 text-[0.95rem] text-muted">{s.body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-line p-6 sm:flex-row sm:items-center sm:justify-between" data-reveal>
              <p className="text-text-2">
                {w.note} Meanwhile, every engagement is backed by Hashmark Labs engineering — 70+ Web3, AI and fintech products delivered.
              </p>
              <ButtonLink href={`/contact?practice=${p.slug}`} variant="secondary" className="shrink-0">
                Request case studies
              </ButtonLink>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
