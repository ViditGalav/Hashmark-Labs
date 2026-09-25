import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { cases, getCase } from "@/content/work";
import { getPractice } from "@/content/practices";
import { ClosingCta } from "@/components/sections/sections";
import { Arrow, ButtonLink, Chip, LivePill, cn } from "@/components/ui/primitives";
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
  const title = `${c.name} — ${c.category}`;
  const description = `${c.summary} ${c.challenge}`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: { type: "article", title, description, url: `/work/${c.slug}` },
  };
}

const delay = (i: number, step = 70) => ({ ["--reveal-delay" as string]: `${i * step}ms` });

function Chapter({ n, title, id, children }: { n: string; title: string; id: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="border-t border-line pt-8 sm:pt-10" data-reveal>
      <h2 id={id} className="eyebrow">
        {n} — {title}
      </h2>
      <div className="mt-6 sm:mt-8">{children}</div>
    </section>
  );
}

function MetaRow({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("border-t border-line py-5", className)}>
      <dt className="label">{label}</dt>
      <dd className="mt-2.5">{children}</dd>
    </div>
  );
}

function DomainLink({ href, label, className }: { href: string; label: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group inline-flex min-h-11 items-center gap-1.5 font-mono text-sm text-text-2 transition-colors hover:text-pink", className)}
    >
      {label}
      <Arrow direction="up-right" className="h-3.5 w-3.5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pink" />
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
      {/* Hero */}
      <section className="ambient relative overflow-hidden border-b border-line" aria-labelledby="case-h">
        <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-[58%] hidden -translate-y-1/2 select-none font-serif text-[clamp(16rem,28vw,30rem)] leading-none text-white/[0.035] md:block"
        >
          {c.index}
        </span>
        <div className="container-x relative pb-[clamp(3.5rem,7vw,6rem)] pt-[clamp(7.5rem,13vw,10rem)]">
          <nav aria-label="Breadcrumb" data-reveal>
            <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              <li>
                <Link href="/work" className="inline-flex min-h-11 items-center transition-colors hover:text-pink">
                  Work
                </Link>
              </li>
              <li aria-hidden="true" className="text-faint">
                /
              </li>
              <li>
                <span aria-current="page" className="text-text-2">
                  {c.name}
                </span>
              </li>
            </ol>
          </nav>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4" data-reveal>
            <p className="eyebrow">
              Case {c.index} — {c.category}
            </p>
            <LivePill />
          </div>
          <h1 id="case-h" className="display-xl mt-5 max-w-5xl break-words" data-reveal>
            {c.name}
          </h1>
          <p className="display-s mt-6 max-w-3xl italic text-text-2" data-reveal>
            {c.summary}
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6" data-reveal aria-label="Live at">
            {c.domains.map((d) => (
              <li key={d.href}>
                <DomainLink href={d.href} label={d.label} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Body */}
      <div className="container-x section !pt-[clamp(3.5rem,7vw,6rem)]">
        <div className="grid gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[19rem_minmax(0,1fr)] xl:gap-24">
          {/* Sticky meta sidebar */}
          <aside aria-label="Case details" className="lg:sticky lg:top-28 lg:self-start" data-reveal>
            <dl className="border-b border-line">
              <MetaRow label="Status">
                <LivePill />
              </MetaRow>
              <MetaRow label="Category">
                <span className="text-text">{c.category}</span>
              </MetaRow>
              <MetaRow label={practiceLinks.length > 1 ? "Practices" : "Practice"}>
                <ul>
                  {practiceLinks.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/services/${p.slug}`}
                        className="group inline-flex min-h-11 items-center gap-2 text-text transition-colors hover:text-pink"
                      >
                        {p.name}
                        <Arrow className="text-muted transition-all group-hover:translate-x-0.5 group-hover:text-pink" />
                      </Link>
                    </li>
                  ))}
                </ul>
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
              <MetaRow label="Stack">
                <ul className="flex flex-wrap gap-2 pt-1">
                  {c.stack.map((s) => (
                    <li key={s}>
                      <Chip>{s}</Chip>
                    </li>
                  ))}
                </ul>
              </MetaRow>
            </dl>
          </aside>

          {/* Chapters */}
          <article aria-labelledby="case-h" className="flex min-w-0 flex-col gap-16 sm:gap-20">
            <Chapter n="01" title="The challenge" id="challenge-h">
              <p className="max-w-3xl font-serif text-[clamp(1.6rem,1.15rem+1.7vw,2.5rem)] leading-[1.18] text-text">{c.challenge}</p>
            </Chapter>

            <Chapter n="02" title="What we engineered" id="engineered-h">
              <ol className="border-b border-line">
                {c.engineered.map((e, idx) => (
                  <li
                    key={e}
                    className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-4 border-t border-line py-7 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-6"
                    data-reveal
                    style={delay(idx)}
                  >
                    <span aria-hidden="true" className="font-serif text-[clamp(2.4rem,2rem+1.6vw,3.5rem)] leading-[0.9] text-pink">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-[1.05rem] leading-relaxed text-text-2 sm:text-[1.12rem]">{e}</p>
                  </li>
                ))}
              </ol>
            </Chapter>

            <Chapter n="03" title="Architecture" id="architecture-h">
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 -z-10 sm:-inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_70%_20%,rgb(139_123_255/0.14),transparent_70%)]"
                />
                <ArchitectureDiagram diagram={c.diagram} />
              </div>
              <p className="mt-4 font-mono text-xs tracking-[0.08em] text-muted">Architecture as delivered — simplified for publication.</p>
            </Chapter>

            <Chapter n="04" title="Stack" id="stack-h">
              <ul className="flex flex-wrap gap-2.5">
                {c.stack.map((s) => (
                  <li key={s}>
                    <Chip className="px-4 py-2 text-[0.8rem]">{s}</Chip>
                  </li>
                ))}
              </ul>
            </Chapter>

            {/* Engagement callout */}
            <aside aria-label="Engagement" className="card overflow-hidden p-7 sm:p-10" data-reveal>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-pink/20 to-transparent blur-3xl"
              />
              <p className="label relative !text-pink">Engagement</p>
              <p className="display-s relative mt-4 max-w-2xl text-text">
                Every one of these systems is senior-led — the architects you meet are the <span className="em">engineers who build.</span>
              </p>
              <div className="relative mt-8">
                <ButtonLink href="/contact?practice=engineering">Discuss a similar system</ButtonLink>
              </div>
            </aside>
          </article>
        </div>

        {/* Previous / next */}
        <nav aria-label="More case studies" className="mt-20 grid gap-4 sm:mt-28 sm:grid-cols-2">
          {[
            { dir: "Previous case", c: prev, arrow: "left" as const },
            { dir: "Next case", c: next, arrow: "right" as const },
          ].map(({ dir, c: x, arrow }) => (
            <Link
              key={dir}
              href={`/work/${x.slug}`}
              rel={arrow === "left" ? "prev" : "next"}
              className={cn("card card-hover group flex flex-col p-6 sm:p-8", arrow === "right" && "sm:items-end sm:text-right")}
              data-reveal
            >
              <span className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-pink">
                {arrow === "left" && <Arrow className="rotate-180 transition-transform group-hover:-translate-x-1" />}
                {dir} · {x.index}
                {arrow === "right" && <Arrow className="transition-transform group-hover:translate-x-1" />}
              </span>
              <span className="mt-5 font-serif text-[clamp(1.9rem,1.5rem+1.4vw,2.75rem)] leading-tight text-text">{x.name}</span>
              <span className="mt-1.5 text-[0.95rem] text-muted">{x.category}</span>
            </Link>
          ))}
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
          name: `${c.name} — ${c.category}`,
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
