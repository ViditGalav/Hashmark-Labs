import type { Metadata } from "next";
import Link from "next/link";
import { practices } from "@/content/practices";
import { Arrow, ButtonLink } from "@/components/ui/primitives";
import { ClosingCta, joinList } from "@/components/sections/sections";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Services: engineering, growth, BD and tokenomics",
  description:
    "Four practices for Web3, AI and fintech teams: engineering, growth and marketing, BD and partnerships, and product and tokenomics. Use one or combine them.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="ambient pt-[72px]" aria-labelledby="services-h">
        <div className="container-x py-16 lg:py-24">
          <p className="eyebrow" data-reveal>
            Services
          </p>
          <h1 id="services-h" className="display-xl mt-5 max-w-4xl" data-reveal>
            Engineering first, and the <span className="em">work around it.</span>
          </h1>
          <p className="lead mt-7 max-w-2xl" data-reveal>
            We&apos;re an engineering firm at heart. Our product and tokenomics, growth, and BD teams each include a Hashmark
            engineer, so what they plan is something we know can be built. Some clients use one practice, some combine them.
          </p>
          <div className="mt-9" data-reveal>
            <ButtonLink href="/contact">Talk to an engineer</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Practices">
        <div className="container-x space-y-20">
          {practices.map((p) => (
            <article key={p.slug} className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16" data-reveal>
              <div>
                <h2 className="display-m">{p.name}</h2>
                <p className="mt-4 text-text-2">{p.summary}</p>
                <Link href={`/services/${p.slug}`} className="mt-6 inline-flex items-center gap-2 text-pink-soft hover:text-pink">
                  Read more <span className="sr-only">about {p.name}</span> <Arrow />
                </Link>
              </div>
              <div>
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {p.services.items.map((s) => (
                    <li key={s.title} className="border-b border-line py-4">
                      <h3 className="font-semibold text-text">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted">{s.body}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted">Also: {joinList(p.services.also)}.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

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
