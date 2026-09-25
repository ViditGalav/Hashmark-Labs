import type { Metadata } from "next";
import Link from "next/link";
import { practices } from "@/content/practices";
import { Arrow, ButtonLink, SectionHeader } from "@/components/ui/primitives";
import { ClosingCta, PracticeTiles, StatsBand } from "@/components/sections/sections";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Services — Engineering, Growth, BD and Tokenomics",
  description:
    "Four senior-led practices: Engineering, Growth & Marketing, BD & Partnerships, and Product & Tokenomics — for Web3, AI and fintech teams. Combine them or start with one.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="ambient relative overflow-hidden pt-[72px]" aria-labelledby="services-h">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-x relative py-20 lg:py-32">
          <p className="eyebrow" data-reveal>
            Services
          </p>
          <h1 id="services-h" className="display-xl mt-6 max-w-[15ch]" data-reveal>
            Four practices. <span className="em">One accountable team.</span>
          </h1>
          <p className="lead mt-8 max-w-2xl" data-reveal>
            Senior-led engineering at the core — with product &amp; tokenomics, growth and business development backed by the people who build. Clients combine them, or start with one.
          </p>
          <div className="mt-10 flex flex-wrap gap-3" data-reveal>
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section border-t border-line" aria-label="Practices">
        <div className="container-x">
          <SectionHeader index="01" eyebrow="The practices" title="Choose where to start." />
          <PracticeTiles />
        </div>
      </section>

      {/* Full service index — every service across practices, scannable */}
      <section className="section border-t border-line" aria-label="Service index">
        <div className="container-x">
          <SectionHeader index="02" eyebrow="Service index" title="Every service, at a glance." />
          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {practices.map((p) => (
              <div key={p.slug} data-reveal>
                <Link href={`/services/${p.slug}`} className="group flex items-baseline justify-between border-b border-line-strong pb-4">
                  <h3 className="font-serif text-3xl text-text">
                    <span className="mr-3 font-mono text-xs tracking-[0.2em] text-pink">{p.index}</span>
                    {p.name}
                  </h3>
                  <Arrow className="text-muted transition-all group-hover:translate-x-1 group-hover:text-pink" />
                </Link>
                <ul>
                  {p.services.items.map((s) => (
                    <li key={s.title} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                      <h4 className="text-[0.98rem] font-semibold">{s.title}</h4>
                      <p className="text-[0.93rem] text-muted">{s.body}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-faint">
                  <span className="label mr-2">Also</span>
                  {p.services.also.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBand index="03" />

      <ClosingCta />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}
