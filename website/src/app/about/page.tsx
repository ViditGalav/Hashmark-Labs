import type { Metadata } from "next";
import { position, whoWeAre } from "@/content/site";
import { ClosingCta, IntroSection, StatsRow, TeamSection, joinList, lowerFirst } from "@/components/sections/sections";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hashmark Labs is an engineering consultancy for AI-integrated systems, blockchain protocols, financial infrastructure and data platforms, led by senior engineers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="ambient pt-[72px]" aria-labelledby="about-h">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20 lg:py-24">
          <div>
            <p className="eyebrow" data-reveal>
              About Hashmark Labs
            </p>
            <h1 id="about-h" className="display-l mt-5" data-reveal>
              {whoWeAre.title}
            </h1>
          </div>
          <div className="prose-body space-y-4 text-text-2" data-reveal>
            {whoWeAre.body.map((b) => (
              <p key={b} className="lead">
                {b}
              </p>
            ))}
          </div>
        </div>
      </section>

      <IntroSection eyebrow="How we're different" title={position.title} points={position.points} />

      <section className="pb-[clamp(4rem,7vw,6rem)]" aria-label="In numbers">
        <div className="container-x">
          <StatsRow />
        </div>
      </section>

      <section className="section border-t border-line" aria-label="Clients and regions">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <h2 className="display-s">Who we work with</h2>
            <p className="mt-4 text-text-2">
              {joinList(whoWeAre.audiences.map((a, i) => (i === 0 ? a : lowerFirst(a))))}. Most engagements start at the architecture stage and carry on through{" "}
              {joinList(whoWeAre.lifecycle.slice(1).map((s) => (s === "MVP" ? s : s.toLowerCase())))}.
            </p>
          </div>
          <div data-reveal>
            <h2 className="display-s">Where</h2>
            <p className="mt-4 text-text-2">
              We deliver to teams in the US, Europe, APAC and the Middle East. A lead architect covers your time zone, and you
              get weekly visibility and direct access to the engineers.
            </p>
          </div>
        </div>
      </section>

      <TeamSection />

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
