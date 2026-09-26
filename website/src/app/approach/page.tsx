import type { Metadata } from "next";
import { bdPartnerships, engineering, growth, practices, productTokenomics } from "@/content/practices";
import { SectionHeader } from "@/components/ui/primitives";
import { ClosingCta, EngagementGrid, PrinciplesCream, ProcessSteps } from "@/components/sections/sections";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Approach — how we work",
  description:
    "Senior-led, structured and transparent: our delivery process, the principles we operate by — including what we will never do — and flexible engagement models.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  const zeros = [
    { practice: engineering.name, ...engineering.principles.zero },
    { practice: productTokenomics.name, ...productTokenomics.principles.zero },
    { practice: growth.name, ...growth.principles.zero },
    { practice: bdPartnerships.name, ...bdPartnerships.principles.zero },
  ];

  return (
    <>
      <section className="ambient relative overflow-hidden pt-[72px]" aria-labelledby="approach-h">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-x relative py-20 lg:py-32">
          <p className="eyebrow" data-reveal>
            Approach
          </p>
          <h1 id="approach-h" className="display-xl mt-6 max-w-[14ch]" data-reveal>
            Senior-led. Structured. <span className="em">Transparent.</span>
          </h1>
          <p className="lead mt-8 max-w-2xl" data-reveal>
            We join at the architecture and decision stage, own delivery end to end, and keep every engagement visible week by week — no black boxes.
          </p>
        </div>
      </section>

      <ProcessSteps index="01" title={engineering.process.title} steps={engineering.process.steps} rituals={engineering.process.rituals} />

      {/* What we will never do — the "0" principle of each practice */}
      <section className="section border-t border-line" aria-label="What we will never do">
        <div className="container-x">
          <SectionHeader
            index="02"
            eyebrow="Zero tolerance"
            title="What we will"
            emphasis="never do."
            lead="Each practice is built around one thing it refuses to do. These are the lines we hold with every client."
          />
          <ul className="mt-14 grid gap-4 md:grid-cols-2">
            {zeros.map((z, i) => (
              <li key={z.practice} className="card flex gap-6 p-7 sm:p-8" data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                <span className="font-serif text-7xl leading-[0.8] text-pink" aria-hidden="true">
                  0
                </span>
                <div>
                  <p className="label">{z.practice}</p>
                  <h3 className="mt-2 text-[1.15rem] font-semibold">
                    <span className="sr-only">Zero </span>
                    {z.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] text-muted">{z.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PrinciplesCream index="03" title={engineering.principles.title} zero={engineering.principles.zero} items={engineering.principles.items} />

      {/* Per-practice methods */}
      <section className="section" aria-label="Methods by practice">
        <div className="container-x">
          <SectionHeader index="04" eyebrow="Methods by practice" title="The same discipline, applied to every practice." />
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {practices.map((p, i) => (
              <div key={p.slug} className="card p-7 sm:p-8" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 2) * 70}ms` }}>
                <p className="font-mono text-xs tracking-[0.2em] text-pink">{p.index} — {p.name}</p>
                <h3 className="display-s mt-3">{p.process.title}</h3>
                <ol className="mt-6 space-y-4">
                  {p.process.steps.map((s, j) => (
                    <li key={s.title} className="flex gap-4">
                      <span className="w-6 shrink-0 font-mono text-xs text-faint">{String(j + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="font-semibold text-text">{s.title}</p>
                        <p className="mt-0.5 text-[0.93rem] text-muted">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 border-t border-line pt-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                  {p.process.rituals.join("  /  ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EngagementGrid
        index="05"
        title={engineering.engagement.title}
        items={engineering.engagement.items}
        note={engineering.engagement.note}
        footer={engineering.engagement.footer}
      />

      <ClosingCta />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Approach", path: "/approach" },
        ])}
      />
    </>
  );
}
