import type { Metadata } from "next";
import { bdPartnerships, engineering, growth, practices, productTokenomics } from "@/content/practices";
import { SectionHeader } from "@/components/ui/primitives";
import { ClosingCta, EngagementOptions, Principles, ProcessSteps, joinList, lowerFirst } from "@/components/sections/sections";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "How a Hashmark project runs, the principles we work by, the things we won't do, and the ways you can engage us.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  const wontDo = [
    { practice: engineering.name, ...engineering.principles.zero },
    { practice: productTokenomics.name, ...productTokenomics.principles.zero },
    { practice: growth.name, ...growth.principles.zero },
    { practice: bdPartnerships.name, ...bdPartnerships.principles.zero },
  ];

  return (
    <>
      <section className="ambient pt-[72px]" aria-labelledby="approach-h">
        <div className="container-x py-16 lg:py-24">
          <p className="eyebrow" data-reveal>
            How we work
          </p>
          <h1 id="approach-h" className="display-xl mt-5 max-w-4xl" data-reveal>
            Senior people, a plan you can see, and <span className="em">no surprises.</span>
          </h1>
          <p className="lead mt-7 max-w-2xl" data-reveal>
            We get involved while the architecture is still being decided, we take responsibility for delivery, and you see
            progress every week rather than at the end.
          </p>
        </div>
      </section>

      <ProcessSteps title={engineering.process.title} steps={engineering.process.steps} rituals={engineering.process.rituals} />

      <section className="section border-t border-line" aria-label="Things we won't do">
        <div className="container-x">
          <SectionHeader
            eyebrow="Things we won't do"
            title="A few lines we don't cross"
            lead="Each of our practices has one thing it refuses to do, whatever the client asks. We'd rather say so up front."
          />
          <ul className="mt-12 grid gap-x-12 border-t border-line md:grid-cols-2">
            {wontDo.map((z) => (
              <li key={z.practice} className="border-b border-line py-7" data-reveal>
                <p className="text-sm text-muted">{z.practice}</p>
                <h3 className="mt-1 font-serif text-2xl leading-snug">{z.title}</h3>
                <p className="mt-2 text-muted">{z.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Principles title={engineering.principles.title} zero={engineering.principles.zero} items={engineering.principles.items} />

      <section className="section" aria-label="Methods by practice">
        <div className="container-x">
          <SectionHeader eyebrow="By practice" title="Each practice runs the same way, with its own steps" />
          <div className="mt-12 grid gap-x-16 gap-y-14 lg:grid-cols-2">
            {practices.map((p) => (
              <div key={p.slug} className="border-t border-line pt-6" data-reveal>
                <h3 className="font-serif text-2xl">{p.name}</h3>
                <ol className="mt-4 space-y-3">
                  {p.process.steps.map((s, j) => (
                    <li key={s.title} className="flex gap-4">
                      <span className="w-5 shrink-0 font-mono text-sm text-faint">{j + 1}</span>
                      <p className="text-muted">
                        <span className="font-semibold text-text">{s.title}.</span> {s.body}
                      </p>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-sm text-muted">Along the way: {joinList(p.process.rituals.map(lowerFirst))}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EngagementOptions
        title={engineering.engagement.title}
        items={engineering.engagement.items}
        note={engineering.engagement.note}
        footer={engineering.engagement.footer}
      />

      <ClosingCta />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "How we work", path: "/approach" },
        ])}
      />
    </>
  );
}
