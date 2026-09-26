import type { Metadata } from "next";
import { position, site, whoWeAre } from "@/content/site";
import { engineering } from "@/content/practices";
import { Arrow, SectionHeader } from "@/components/ui/primitives";
import { ClosingCta, PositionSection, StatsBand, TeamSection, WhyGrid } from "@/components/sections/sections";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About — a senior technical partner",
  description:
    "Hashmark Labs is a deep-technical engineering consultancy across AI-integrated systems, blockchain protocol engineering, financial infrastructure and data intelligence — senior-led and delivered globally.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="ambient relative overflow-hidden pt-[72px]" aria-labelledby="about-h">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid gap-16 py-20 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:py-32">
          <div>
            <p className="eyebrow" data-reveal>
              About Hashmark Labs
            </p>
            <h1 id="about-h" className="display-l mt-6" data-reveal>
              A senior technical partner for complex financial, decentralised and <span className="em">intelligent systems.</span>
            </h1>
          </div>
          <div className="space-y-5" data-reveal>
            {whoWeAre.body.map((b) => (
              <p key={b} className="lead">
                {b}
              </p>
            ))}
          </div>
        </div>
      </section>

      <PositionSection index="01" title={position.title} points={position.points} />

      <section className="section border-t border-line" aria-label="Lifecycle and clients">
        <div className="container-x">
          <SectionHeader index="02" eyebrow="From first decision to scale" title="We stay accountable for how the system performs." />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4" aria-label="Engagement lifecycle">
            {whoWeAre.lifecycle.map((s, i) => (
              <li key={s} className="flex items-center justify-between bg-bg p-7" data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                <div>
                  <span className="font-mono text-xs text-pink">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 font-serif text-3xl text-text">{s}</p>
                </div>
                {i < whoWeAre.lifecycle.length - 1 && <Arrow className="hidden text-faint lg:block" />}
              </li>
            ))}
          </ol>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div data-reveal>
              <p className="label">Who we work with</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {whoWeAre.audiences.map((a) => (
                  <li key={a} className="chip !px-4 !py-2.5 !text-[0.9rem] !text-text">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <p className="label">Where we deliver</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {site.regions.map((r) => (
                  <li key={r} className="card px-4 py-4 text-center text-text">
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">Lead architect across time zones · weekly visibility · direct engineer access.</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand index="03" />

      <TeamSection index="04" />

      <WhyGrid index="05" title={engineering.why.title} items={engineering.why.items} />

      <ClosingCta />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
