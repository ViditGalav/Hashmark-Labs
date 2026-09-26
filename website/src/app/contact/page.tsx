import type { Metadata } from "next";
import { contact } from "@/content/site";
import { practices } from "@/content/practices";
import { ContactForm, type PracticeOption } from "@/components/contact/ContactForm";
import { Arrow } from "@/components/ui/primitives";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Hashmark Labs what you're building. You'll hear back from a senior engineer or lead, not a sales team.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact · Hashmark Labs" },
};

// Deck-backed steps (TECH p2, p7, p18; PT/GR/BD engagement notes). Logged in 04-ADDED-CONTENT-REGISTER.
const nextSteps = [
  {
    title: "A call with a senior lead",
    body: "Usually one of the engineers who would build your system. We talk through the problem, the constraints and what you've tried.",
  },
  {
    title: "A scoped proposal",
    body: "Once we understand the work, we scope the terms around its complexity, the deliverables and how you want to work with us.",
  },
  {
    title: "Weekly progress you can see",
    body: "Something delivered every week, progress you can follow as it happens, and a direct line to the people doing the work.",
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
      <section className="ambient pb-14 pt-32 sm:pb-16 lg:pt-40">
        <div className="container-x">
          <header className="max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 className="display-l mt-4">
              Tell us what you&apos;re <span className="em">building.</span>
            </h1>
            <p className="lead mt-6 max-w-2xl">
              A few lines about the product, where it&apos;s at and what&apos;s hard about it is plenty. A senior engineer or lead
              will read it and get back to you.
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
                    <span aria-hidden="true" className="w-4 shrink-0 font-mono text-sm text-pink-soft">
                      {i + 1}
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
              We work with teams in the US, Europe, APAC and the Middle East.
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
