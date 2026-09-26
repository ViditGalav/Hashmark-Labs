import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { cases, getCase } from "@/content/work";
import { getPractice } from "@/content/practices";
import { ClosingCta } from "@/components/sections/sections";
import { Arrow, ButtonLink, LivePill, cn } from "@/components/ui/primitives";
import { ArchitectureDiagram } from "@/components/work/ArchitectureDiagram";
import { JsonLd, absoluteUrl, breadcrumbJsonLd } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  const title = `${c.name}: ${c.category}`;
  const description = `${c.summary} ${c.challenge}`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: { type: "article", title, description, url: `/work/${c.slug}` },
  };
}

function Part({ title, id, children }: { title: string; id: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="border-t border-line pt-8" data-reveal>
      <h2 id={id} className="text-sm font-medium text-pink-soft">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function MetaRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-line py-4">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="mt-1.5">{children}</dd>
    </div>
  );
}

function DomainLink({ href, label, className }: { href: string; label: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group inline-flex min-h-11 items-center gap-1.5 font-mono text-sm text-text-2 hover:text-pink", className)}
    >
      {label}
      <Arrow direction="up-right" className="h-3.5 w-3.5 text-muted group-hover:text-pink" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const i = cases.findIndex((x) => x.slug === c.slug);
  const prev = cases[(i - 1 + cases.length) % cases.length];
  const next = cases[(i + 1) % cases.length];
  const practiceLinks = c.practices.map((p) => getPractice(p)).filter((p) => p !== undefined);
  const url = absoluteUrl(`/work/${c.slug}`);

  return (
    <>
      <section className="ambient pt-[72px]" aria-labelledby="case-h">
        <div className="container-x py-14 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted" data-reveal>
            <Link href="/work" className="hover:text-text">
              Work
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{c.name}</span>
          </nav>
          <p className="mt-6 text-muted" data-reveal>
            {c.category}
          </p>
          <h1 id="case-h" className="display-xl mt-2 break-words" data-reveal>
            {c.name}
          </h1>
          <p className="mt-5 max-w-3xl font-serif text-[clamp(1.4rem,1.1rem+1vw,1.9rem)] italic leading-snug text-text-2" data-reveal>
            {c.summary}
          </p>
        </div>
      </section>

      <div className="container-x section !pt-14">
        <div className="grid gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-20">
          <aside aria-label="Project details" className="lg:sticky lg:top-28 lg:self-start" data-reveal>
            <dl className="border-b border-line">
              <MetaRow label="Status">
                <LivePill label="Live in production" />
              </MetaRow>
              <MetaRow label="Live at">
                <ul>
                  {c.domains.map((d) => (
                    <li key={d.href}>
                      <DomainLink href={d.href} label={d.label} className="break-all" />
                    </li>
                  ))}
                </ul>
              </MetaRow>
              <MetaRow label={practiceLinks.length > 1 ? "Practices" : "Practice"}>
                <ul className="space-y-1">
                  {practiceLinks.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/services/${p.slug}`} className="text-text hover:text-pink-soft">
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MetaRow>
              <MetaRow label="Stack">
                <p className="font-mono text-[0.85rem] leading-relaxed text-text-2">{c.stack.join(", ")}</p>
              </MetaRow>
            </dl>
          </aside>

          <article aria-labelledby="case-h" className="flex min-w-0 flex-col gap-14">
            <Part title="The problem" id="problem-h">
              <p className="max-w-3xl font-serif text-[clamp(1.5rem,1.15rem+1.2vw,2.1rem)] leading-snug text-text">{c.challenge}</p>
            </Part>

            <Part title="What we built" id="built-h">
              <ul className="max-w-3xl space-y-4">
                {c.engineered.map((e) => (
                  <li key={e} className="flex gap-4 text-[1.08rem] leading-relaxed text-text-2">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            </Part>

            <Part title="How it fits together" id="architecture-h">
              <div className="max-w-3xl">
                <ArchitectureDiagram diagram={c.diagram} />
                <p className="mt-3 text-sm text-muted">A simplified view of the architecture.</p>
              </div>
            </Part>

            <div className="flex max-w-3xl flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between" data-reveal>
              <p className="text-text-2">Working on something similar? The engineers who built this are the ones you&apos;d talk to.</p>
              <ButtonLink href="/contact?practice=engineering" className="shrink-0">
                Talk to an engineer
              </ButtonLink>
            </div>
          </article>
        </div>

        <nav aria-label="More case studies" className="mt-20 flex flex-col justify-between gap-6 border-t border-line pt-8 sm:flex-row">
          <Link href={`/work/${prev.slug}`} rel="prev" className="group">
            <span className="text-sm text-muted">Previous</span>
            <span className="mt-1 flex items-center gap-2 font-serif text-2xl text-text group-hover:text-pink-soft">
              <Arrow className="rotate-180" /> {prev.name}
            </span>
          </Link>
          <Link href={`/work/${next.slug}`} rel="next" className="group sm:text-right">
            <span className="text-sm text-muted">Next</span>
            <span className="mt-1 flex items-center gap-2 font-serif text-2xl text-text group-hover:text-pink-soft sm:justify-end">
              {next.name} <Arrow />
            </span>
          </Link>
        </nav>
      </div>

      <ClosingCta />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: c.name, path: `/work/${c.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": `${url}#case`,
          name: `${c.name}: ${c.category}`,
          headline: c.name,
          description: `${c.summary} ${c.challenge}`,
          url,
          about: [c.category, ...c.stack].map((name) => ({ "@type": "Thing", name })),
          keywords: c.stack.join(", "),
          creativeWorkStatus: c.status,
          mentions: c.domains.map((d) => ({ "@type": "WebSite", name: d.label, url: d.href })),
          creator: { "@id": absoluteUrl("/#organization") },
        }}
      />
    </>
  );
}
