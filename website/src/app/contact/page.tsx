import type { Metadata } from "next";
import { contact, site } from "@/content/site";
import { practices } from "@/content/practices";
import { ContactForm, type PracticeOption } from "@/components/contact/ContactForm";
import { Arrow } from "@/components/ui/primitives";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact — Start a conversation",
  description:
    "Building something technically complex? Talk to Hashmark Labs about AI, blockchain and fintech engineering, growth, BD or tokenomics — directly with a senior lead.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact · Hashmark Labs" },
};

// Deck-backed steps (TECH p2, p7, p18; PT/GR/BD engagement notes). Logged in 04-ADDED-CONTENT-REGISTER.
const nextSteps = [
  {
    title: "Discovery conversation with a senior lead",
    body: "The architects you meet are the engineers who build. No hand-offs to junior teams.",
  },
  {
    title: "Scoped proposal",
    body: "Commercial terms are scoped after discovery — to the complexity, deliverables and engagement model required.",
  },
  {
    title: "Weekly delivery with direct access",
    body: "Weekly deliverables, live progress visibility and direct access to your senior lead — engineer, architect, strategist or BD lead.",
  },
];

export default function ContactPage() {
  const practiceOptions: PracticeOption[] = practices.map((p) => ({ slug: p.slug, name: p.name, index: p.index }));

  const channels = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, external: false },
    { label: "WhatsApp", value: contact.whatsappDisplay, href: contact.whatsappHref, external: true },
    {
      label: `${contact.principal.name} · ${contact.principal.role}`,
      value: contact.principal.email,
      href: `mailto:${contact.principal.email}`,
      external: false,
    },
  ];

  return (
    <>
      <section className="ambient relative overflow-hidden pb-16 pt-36 sm:pb-20 lg:pt-44">
        <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
        <div className="container-x relative">
          <header className="max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 className="display-l mt-4">
              Let&apos;s build <span className="em">what&apos;s next.</span>
            </h1>
            <p className="lead mt-6 max-w-2xl">
              Building something technically complex and looking for a team that thinks at the protocol level? Let&apos;s discuss the
              architecture.
            </p>
          </header>
        </div>
      </section>

      <section className="pb-24 pt-4 sm:pb-32" aria-label="Contact form and direct channels">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-7 xl:col-span-8">
            <h2 className="sr-only">Send us a message</h2>
            <ContactForm practiceOptions={practiceOptions} />
            <noscript>
              <p className="mt-4 text-sm text-muted">
                This form needs JavaScript. Please email{" "}
                <a className="text-text underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>{" "}
                instead.
              </p>
            </noscript>
          </div>

          <aside className="min-w-0 space-y-6 lg:col-span-5 xl:col-span-4" aria-labelledby="direct-channels">
            <div className="card p-6 sm:p-8">
              <h2 id="direct-channels" className="label">
                Prefer to write directly?
              </h2>
              <ul className="mt-5 divide-y divide-line">
                {channels.map((c) => (
                  <li key={c.href} className="py-4 first:pt-0 last:pb-0">
                    <p className="label">{c.label}</p>
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group mt-1.5 inline-flex min-h-11 items-center gap-2 break-all text-[1.02rem] text-text transition-colors hover:text-pink"
                    >
                      {c.value}
                      <Arrow direction="up-right" className="shrink-0 text-muted transition-colors group-hover:text-pink" />
                      {c.external && <span className="sr-only"> (opens in a new tab)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 sm:p-8">
              <h2 className="label">What happens next</h2>
              <ol className="mt-6 space-y-6">
                {nextSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-pink/40 bg-pink/10 font-mono text-xs text-pink"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-sans text-[1rem] font-medium text-text">{s.title}</h3>
                      <p className="mt-1 text-[0.93rem] leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p className="label px-1 leading-relaxed">
              Delivery: <span className="text-text-2">{site.regions.join(" · ")}</span>
            </p>
          </aside>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
