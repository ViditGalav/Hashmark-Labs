import type { Metadata } from "next";
import Link from "next/link";
import { additionalWork, cases } from "@/content/work";
import { bdPartnerships, growth } from "@/content/practices";
import { ClosingCta } from "@/components/sections/sections";
import { SectionHeader } from "@/components/ui/primitives";
import { AdditionalWorkGrid, CaseRow } from "@/components/work/CaseCard";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const description =
  "Systems we designed and built that are running in production: AI and data platforms, trading and payments infrastructure, DeFi protocols and on-chain markets.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: { title: "Work · Hashmark Labs", description, url: "/work" },
};

const inPreparation = [growth, bdPartnerships];

export default function WorkPage() {
  return (
    <>
      <section className="ambient pt-[72px]" aria-labelledby="work-h">
        <div className="container-x py-16 lg:py-24">
          <p className="eyebrow" data-reveal>
            Work
          </p>
          <h1 id="work-h" className="display-xl mt-5 max-w-4xl" data-reveal>
            Things we built that are <span className="em">live right now.</span>
          </h1>
          <p className="lead mt-7 max-w-2xl" data-reveal>
            Five systems in production, each designed and built by our senior engineers. For each one we&apos;ve included the
            problem, what we built and a simplified version of the architecture.
          </p>
        </div>
      </section>

      <section className="section !pt-8" aria-label="Case studies">
        <div className="container-x">
          {cases.map((c, i) => (
            <CaseRow key={c.slug} c={c} flip={i % 2 === 1} headingLevel="h2" />
          ))}
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="breadth-h">
        <div className="container-x">
          <SectionHeader
            eyebrow="More projects"
            title={<span id="breadth-h">Other things we&apos;ve worked on</span>}
            lead="Twelve more projects, from NFT lending and on-chain ticketing to tokenised real estate."
          />
          <div className="mt-12">
            <AdditionalWorkGrid items={additionalWork} />
          </div>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="gtm-h">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeader
            eyebrow="Growth and BD"
            title={<span id="gtm-h">Growth and BD case studies are on the way</span>}
            size="m"
          />
          <div className="space-y-8" data-reveal>
            <p className="text-text-2">
              We&apos;re still writing these up with our clients. Here&apos;s what each one will cover. If you&apos;d like the
              details before they&apos;re published,{" "}
              <Link href="/contact" className="text-pink-soft underline underline-offset-4 hover:text-pink">
                ask us
              </Link>
              .
            </p>
            {inPreparation.map((p) =>
              p.work.kind === "in-preparation" ? (
                <div key={p.slug}>
                  <h3 className="font-semibold text-text">
                    <Link href={`/services/${p.slug}`} className="hover:text-pink-soft">
                      {p.name}
                    </Link>
                  </h3>
                  <ul className="mt-2 space-y-1.5 border-l border-line-strong pl-5 text-muted">
                    {p.work.slots.map((s) => (
                      <li key={s.label}>
                        <span className="text-text-2">{s.label}:</span> {s.body}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null,
            )}
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
