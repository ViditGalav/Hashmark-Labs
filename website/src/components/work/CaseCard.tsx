import Link from "next/link";
import type { CaseStudy, AdditionalWork } from "@/content/work";
import { Arrow, LivePill, cn } from "@/components/ui/primitives";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

/** Case row: the story on one side, the deck's architecture diagram on the other. */
export function CaseRow({ c, flip = false, headingLevel = "h3" }: { c: CaseStudy; flip?: boolean; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="group relative grid gap-8 border-t border-line py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16" data-reveal>
      <div className={cn("flex flex-col", flip && "lg:order-2")}>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          <span>{c.category}</span>
          <LivePill label={`Live at ${c.domains[0].label}`} />
        </p>
        <H className="display-m mt-3">
          <Link href={`/work/${c.slug}`} className="after:absolute after:inset-0 after:content-[''] hover:text-pink-soft">
            {c.name}
          </Link>
        </H>
        <p className="mt-2 font-serif text-xl italic text-text-2">{c.summary}</p>
        <p className="mt-5 text-text-2">{c.challenge}</p>
        <p className="mt-5 font-mono text-[0.8rem] text-muted">{c.stack.join(" · ")}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[0.95rem] text-pink-soft lg:mt-auto lg:pt-6">
          How we built it <Arrow className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
      <div className={cn(flip && "lg:order-1")}>
        <ArchitectureDiagram diagram={c.diagram} compact />
      </div>
    </article>
  );
}

export function AdditionalWorkGrid({ items }: { items: AdditionalWork[] }) {
  return (
    <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((w) => (
        <li key={w.name} className="border-t border-line py-5" data-reveal>
          <h3 className="flex items-baseline justify-between gap-4">
            <span className="font-serif text-2xl leading-tight text-text">{w.name}</span>
            <span className="text-xs text-faint">{w.tag}</span>
          </h3>
          <p className="mt-1 text-muted">{w.line}</p>
        </li>
      ))}
    </ul>
  );
}
