import type { Metadata } from "next";
import Link from "next/link";
import { additionalWork, cases } from "@/content/work";
import { bdPartnerships, growth } from "@/content/practices";
import { ClosingCta } from "@/components/sections/sections";
import { Arrow, SectionHeader } from "@/components/ui/primitives";
import { AdditionalWorkGrid, CaseRow } from "@/components/work/CaseCard";
import { WorkFilter, type WorkFilterOption } from "@/components/work/WorkFilter";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const description =
  "Production systems across AI, financial infrastructure, data intelligence and protocol engineering — every one senior-led.";

export const metadata: Metadata = {
  title: "Work — live systems in production",
  description,
  alternates: { canonical: "/work" },
  openGraph: { title: "Work — live systems in production", description, url: "/work" },
};

/** Filter groups for the flagship list — derived from each case's deck category. */
const filters: WorkFilterOption[] = [
  { id: "ai-data", label: "AI & data" },
  { id: "trading-fintech", label: "Trading & fintech" },
  { id: "defi-tokenomics", label: "DeFi & tokenomics" },
  { id: "protocol", label: "Protocol engineering" },
];

const caseGroups: Record<string, string[]> = {
  assymetrix: ["ai-data"],
  "fincruse-crusex": ["trading-fintech"],
  goldpesa: ["defi-tokenomics", "protocol"],
  invaria: ["ai-data", "trading-fintech"],
  "foreon-network": ["protocol", "defi-tokenomics"],
};

const inPreparation = [
  {
    practice: growth,
    heading: "Growth & Marketing",
  },
  {
    practice: bdPartnerships,
    heading: "BD & Partnerships",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="ambient relative overflow-hidden border-b border-line">
        <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[clamp(18rem,32vw,36rem)] leading-none text-white/[0.035] md:block"
        >
          #
        </span>
        <div className="container-x relative pb-[clamp(4rem,8vw,7rem)] pt-[clamp(8rem,14vw,11rem)]">
          <p className="eyebrow" data-reveal>
            Selected work
          </p>
          <h1 className="display-xl mt-6 max-w-5xl" data-reveal>
            Live systems, <span className="em">in production.</span>
          </h1>
          <p className="lead mt-8 max-w-2xl" data-reveal>
            {description}
          </p>
          <ol className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5" data-reveal>
            {cases.map((c) => (
              <li key={c.slug} className="border-l border-line-strong pl-4">
                <Link href={`/work/${c.slug}`} className="group block py-1">
                  <span className="block font-mono text-xs tracking-[0.12em] text-pink">{c.index}</span>
                  <span className="mt-1 block text-[0.95rem] text-text transition-colors group-hover:text-pink-soft">{c.name}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Flagship cases */}
      <section className="section !pt-[clamp(3.5rem,7vw,6rem)]" aria-labelledby="flagship-h">
        <div className="container-x">
          <h2 id="flagship-h" className="sr-only">
            Flagship case studies
          </h2>
          <WorkFilter
            options={filters}
            items={cases.map((c, i) => ({
              id: c.slug,
              groups: caseGroups[c.slug] ?? [],
              content: <CaseRow c={c} flip={i % 2 === 1} />,
            }))}
          />
        </div>
      </section>

      {/* Breadth */}
      <section className="section border-t border-line" aria-labelledby="breadth-h">
        <div className="container-x">
          <SectionHeader
            eyebrow="Selected additional work"
            title={<span id="breadth-h">Breadth behind the depth.</span>}
          />
          <div className="mt-14">
            <AdditionalWorkGrid items={additionalWork} />
          </div>
        </div>
      </section>

      {/* Growth & BD — honest "in preparation" slots */}
      <section className="section border-t border-line" aria-labelledby="gtm-h">
        <div className="container-x">
          <SectionHeader
            eyebrow="Case studies in preparation"
            title={<span id="gtm-h">Growth & BD engagements.</span>}
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-8">
            {inPreparation.map((group) => (
              <div key={group.practice.slug} data-reveal>
                <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                  <h3 className="font-serif text-[1.75rem] leading-tight">{group.heading}</h3>
                  <Link
                    href={`/services/${group.practice.slug}`}
                    className="group inline-flex min-h-11 items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-pink"
                  >
                    The practice <Arrow className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
                <ul className="mt-6 grid gap-3">
                  {group.practice.work.kind === "in-preparation" &&
                    group.practice.work.slots.map((slot) => (
                      <li key={slot.label} className="rounded-2xl border border-dashed border-line-strong bg-bg-2/60 p-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h4 className="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-violet">{slot.label}</h4>
                          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full border border-muted" />
                            Case study in preparation
                          </span>
                        </div>
                        <p className="mt-4 text-[0.95rem] text-muted">{slot.body}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="mt-10 flex flex-col gap-4 rounded-2xl border border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
            data-reveal
          >
            <p className="text-text-2">Detailed growth and BD case studies are available on request.</p>
            <Link
              href="/contact"
              className="group inline-flex min-h-11 shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-pink"
            >
              Request case studies <Arrow className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <ClosingCta />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
    </>
  );
}
