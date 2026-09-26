import Link from "next/link";
import type { CaseStudy, AdditionalWork } from "@/content/work";
import { Arrow, Chip, LivePill, cn } from "@/components/ui/primitives";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

/** Large alternating case row: copy on one side, deck-style architecture diagram on the other. */
export function CaseRow({ c, flip = false, headingLevel = "h3" }: { c: CaseStudy; flip?: boolean; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="card card-hover group overflow-hidden" data-reveal>
      <div className={cn("grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10", flip && "lg:[&>*:first-child]:order-2")}>
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow">
              Case {c.index} — {c.category}
            </p>
            <LivePill />
          </div>
          <H className="display-m mt-4">
            <Link href={`/work/${c.slug}`} className="after:absolute after:inset-0 after:content-['']">
              {c.name}
            </Link>
          </H>
          <p className="mt-3 font-serif text-xl italic text-text">{c.summary}</p>
          <p className="label mt-6">The challenge</p>
          <p className="mt-2 text-text-2">{c.challenge}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <li key={s}>
                <Chip>{s}</Chip>
              </li>
            ))}
          </ul>
          <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-pink lg:mt-auto lg:pt-8">
            Read the case study <Arrow className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
        <div className="relative">
          <ArchitectureDiagram diagram={c.diagram} compact />
        </div>
      </div>
    </article>
  );
}

const toneClass = { pink: "text-pink", violet: "text-violet", teal: "text-teal" } as const;

export function AdditionalWorkGrid({ items }: { items: AdditionalWork[] }) {
  return (
    <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((w, i) => (
        <li key={w.name} className="border-t border-line py-6" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 4) * 60}ms` }}>
          <p className={cn("font-mono text-[0.7rem] uppercase tracking-[0.2em]", toneClass[w.tone])}>{w.tag}</p>
          <h3 className="mt-2 font-serif text-[1.75rem] leading-tight text-text">{w.name}</h3>
          <p className="mt-2 text-[0.95rem] text-muted">{w.line}</p>
        </li>
      ))}
    </ul>
  );
}
