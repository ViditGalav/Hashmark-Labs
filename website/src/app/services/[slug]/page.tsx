import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPractice, practices, techDepth, type Practice } from "@/content/practices";
import { getCase } from "@/content/work";
import { ButtonLink, SectionHeader } from "@/components/ui/primitives";
import {
  ClosingCta,
  EngagementOptions,
  FrameworkTable,
  IntroSection,
  MeasureGroups,
  PracticeList,
  Principles,
  ProblemTable,
  ProcessSteps,
  ServiceList,
  TeamPod,
  TeamSection,
  joinList,
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

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPractice(slug);
  if (!p) notFound();

  return (
    <>
      <section className="ambient pt-[72px]" aria-labelledby="practice-h">
        <div className="container-x py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-muted" data-reveal>
            <Link href="/services" className="hover:text-text">
              Services
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{p.name}</span>
          </nav>
          <h1 id="practice-h" className="display-xl mt-6 max-w-4xl" data-reveal>
            {p.hero.title} <span className="em">{p.hero.emphasis}</span>
          </h1>
          <p className="lead mt-7 max-w-2xl" data-reveal>
            {p.hero.lead}
          </p>
          <div className="mt-9" data-reveal>
            <ButtonLink href={`/contact?practice=${p.slug}`}>{p.closing.cta}</ButtonLink>
          </div>
        </div>
      </section>

      <IntroSection eyebrow="Our view" title={p.position.title} points={p.position.points} />

      {p.problem && <ProblemTable title={p.problem.title} rows={p.problem.rows} />}

      <section className="section border-t border-line" aria-label="Services">
        <div className="container-x">
          <SectionHeader eyebrow="What we do" title={p.services.title} />
          <ServiceList items={p.services.items} also={p.services.also} />
        </div>
      </section>

      {p.slug === "engineering" && <TechDepthSection />}

      {p.framework && <FrameworkTable eyebrow={p.framework.eyebrow} title={p.framework.title} steps={p.framework.steps} note={p.framework.note} />}

      <ProcessSteps title={p.process.title} steps={p.process.steps} rituals={p.process.rituals} />

      {p.measure && <MeasureGroups eyebrow={p.measure.eyebrow} title={p.measure.title} lead={p.measure.lead} groups={p.measure.groups} />}

      {p.audience && <AudienceSection audience={p.audience} />}

      <Principles title={p.principles.title} zero={p.principles.zero} items={p.principles.items} />

      {p.team ? <TeamPod {...p.team} /> : <TeamSection />}

      <WorkSection p={p} />

      <EngagementOptions title={p.engagement.title} items={p.engagement.items} note={p.engagement.note} footer={p.engagement.footer} />

      <section className="section border-t border-line" aria-label="Other practices">
        <div className="container-x">
          <SectionHeader eyebrow="Our other practices" title="Clients often combine these" size="m" />
          <PracticeList exclude={p.slug} />
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

function TechDepthSection() {
  return (
    <section className="section border-t border-line" aria-label="Technical depth">
      <div className="container-x">
        <SectionHeader eyebrow="Technical depth" title={techDepth.title} />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {techDepth.columns.map((col) => (
            <div key={col.title} data-reveal>
              <h3 className="text-[1.05rem] font-semibold">{col.title}</h3>
              <ul className="mt-3 space-y-1.5 text-muted">
                {col.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 border-t border-line pt-6 text-muted" data-reveal>
          <span className="text-text-2">Languages and tools we use every day:</span>{" "}
          <span className="font-mono text-[0.85rem]">{techDepth.stack.join(", ")}</span>
        </p>
      </div>
    </section>
  );
}

function AudienceSection({ audience }: { audience: NonNullable<Practice["audience"]> }) {
  const hasBodies = audience.items.some((a) => a.body);
  return (
    <section className="section border-t border-line" aria-label={audience.eyebrow}>
      <div className="container-x">
        <SectionHeader eyebrow={audience.eyebrow} title={audience.title} />
        {hasBodies ? (
          <ServiceList items={audience.items} />
        ) : (
          <p className="lead mt-8 max-w-3xl" data-reveal>
            {joinList(audience.items.map((a) => a.title))}.
          </p>
        )}
        {audience.note && (
          <p className="mt-8 max-w-3xl font-serif text-2xl italic text-text" data-reveal>
            {audience.note}
          </p>
        )}
      </div>
    </section>
  );
}

function WorkSection({ p }: { p: Practice }) {
  const w = p.work;
  return (
    <section className="section border-t border-line" aria-label="Selected work">
      <div className="container-x">
        <SectionHeader eyebrow="Selected work" title={w.title} />
        {w.kind === "cases" ? (
          <>
            <div className="mt-10">
              {w.slugs.map((s, i) => {
                const c = getCase(s);
                return c ? <CaseRow key={s} c={c} flip={i % 2 === 1} /> : null;
              })}
            </div>
            {w.note && (
              <p className="mt-6 max-w-3xl text-muted" data-reveal>
                {w.note}
              </p>
            )}
          </>
        ) : (
          <div className="mt-10 max-w-3xl space-y-5 text-text-2" data-reveal>
            <p>
              These case studies are still being written up with our clients. What
              each one will cover:
            </p>
            <ul className="space-y-2 border-l border-line-strong pl-5 text-muted">
              {w.slots.map((s) => (
                <li key={s.label}>
                  <span className="text-text-2">{s.label}:</span> {s.body}
                </li>
              ))}
            </ul>
            <p>
              {w.note}{" "}
              <Link href={`/contact?practice=${p.slug}`} className="text-pink-soft underline underline-offset-4 hover:text-pink">
                Ask us for them
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
