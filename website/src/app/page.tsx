import type { Metadata } from "next";
import Link from "next/link";
import { position, site, whoWeAre } from "@/content/site";
import { engineering, practices } from "@/content/practices";
import { additionalWork, cases, getCase } from "@/content/work";
import { homeFaq } from "@/content/faq";
import { Arrow, ButtonLink, SectionHeader } from "@/components/ui/primitives";
import {
  ClientNames,
  ClosingCta,
  FaqSection,
  IntroSection,
  PracticeList,
  Principles,
  ProcessSteps,
  ServiceList,
  StatsRow,
  TeamSection,
  joinList,
  lowerFirst,
} from "@/components/sections/sections";
import { CaseRow } from "@/components/work/CaseCard";
import { JsonLd, faqJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: `${site.name}: senior engineers for AI, blockchain and fintech systems` },
  description:
    "Hashmark Labs designs and builds DeFi protocols, trading engines, data platforms and AI systems. 70+ systems delivered, with only 4–5 clients at a time.",
  alternates: { canonical: "/" },
};

const featured = ["assymetrix", "fincruse-crusex", "foreon-network"].map((s) => getCase(s)!);
const audienceList = joinList(whoWeAre.audiences.map(lowerFirst));

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="ambient pt-[72px]" aria-labelledby="hero-h">
        <div className="container-x grid gap-14 py-16 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-20 lg:py-28">
          <div>
            <p className="eyebrow" data-reveal>
              Hashmark Labs · engineering consultancy
            </p>
            <h1 id="hero-h" className="display-xl mt-5" data-reveal>
              We build the <span className="em">hard parts</span> of AI, blockchain and fintech products.
            </h1>
            <p className="lead mt-7 max-w-xl" data-reveal>
              We&apos;re senior engineers. We&apos;ve delivered 70+ systems, from DeFi protocols and trading engines to data
              platforms and asset tokenisation, and we only work with 4–5 clients at a time.
            </p>
            <div className="mt-9 flex flex-wrap gap-3" data-reveal>
              <ButtonLink href="/contact">Talk to an engineer</ButtonLink>
              <ButtonLink href="/work" variant="secondary" arrow={false}>
                See what we&apos;ve built
              </ButtonLink>
            </div>
          </div>

          <aside className="card p-6" aria-label="Live systems we built" data-reveal>
            <p className="text-sm text-muted">A few systems we built that you can use today</p>
            <ul className="mt-4 divide-y divide-line">
              {cases.map((c) => (
                <li key={c.slug}>
                  <Link href={`/work/${c.slug}`} className="group flex items-baseline justify-between gap-4 py-3">
                    <span>
                      <span className="block text-text group-hover:text-pink-soft">{c.name}</span>
                      <span className="block text-sm text-muted">{c.summary}</span>
                    </span>
                    <span className="hidden shrink-0 items-center gap-1.5 font-mono text-xs text-teal sm:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                      {c.domains[0].label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="container-x pb-14" data-reveal>
          <ClientNames label="We've also built for" names={additionalWork.map((w) => w.name)} />
        </div>
      </section>

      <IntroSection eyebrow="How we're different" title={position.title} points={position.points} />

      <section className="pb-[clamp(4rem,7vw,6rem)]" aria-label="In numbers">
        <div className="container-x">
          <StatsRow />
        </div>
      </section>

      {/* Work */}
      <section className="section border-t border-line" aria-label="Selected work">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Selected work" title="Three systems we're proud of" />
            <Link href="/work" className="inline-flex items-center gap-2 text-pink-soft hover:text-pink" data-reveal>
              All work <Arrow />
            </Link>
          </div>
          <div className="mt-10">
            {featured.map((c, i) => (
              <CaseRow key={c.slug} c={c} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section border-t border-line" aria-label="What we do">
        <div className="container-x">
          <SectionHeader eyebrow="What we do" title="Most of our work is engineering" lead={whoWeAre.body[0]} />
          <ServiceList items={engineering.services.items} also={engineering.services.also} />

          <div className="mt-20">
            <h3 className="display-s max-w-2xl" data-reveal>
              We also help with the work around the build
            </h3>
            <p className="mt-3 max-w-2xl text-muted" data-reveal>
              Token design, growth and partnerships go better when the people planning them know how the product works. Each of
              these practices has a Hashmark engineer on the team.
            </p>
            <PracticeList exclude="engineering" />
          </div>
        </div>
      </section>

      <ProcessSteps title={engineering.process.title} steps={engineering.process.steps} rituals={engineering.process.rituals} />

      <Principles title={engineering.principles.title} zero={engineering.principles.zero} items={engineering.principles.items} />

      <TeamSection />

      <section className="section border-t border-line" aria-label="Who we work with">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeader eyebrow="Who we work with" title={whoWeAre.title} size="m" />
          <div className="space-y-5 text-text-2" data-reveal>
            <p>{whoWeAre.body[1]}</p>
            <p>
              We work with {audienceList}, and we deliver to teams in the US, Europe, APAC and the Middle East.
            </p>
            <p>
              <Link href="/services" className="inline-flex items-center gap-2 text-pink-soft hover:text-pink">
                See all {practices.length} practices <Arrow />
              </Link>
            </p>
          </div>
        </div>
      </section>

      <FaqSection faqs={homeFaq} />
      <JsonLd data={faqJsonLd(homeFaq)} />

      <ClosingCta />
    </>
  );
}
