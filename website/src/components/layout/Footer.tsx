import Link from "next/link";
import { contact, site } from "@/content/site";
import { practices } from "@/content/practices";
import { cases } from "@/content/work";
import { Logo } from "@/components/ui/primitives";

export function Footer() {
  const cols = [
    { title: "Practices", links: practices.map((p) => ({ label: p.name, href: `/services/${p.slug}` })) },
    { title: "Work", links: [...cases.map((c) => ({ label: c.name, href: `/work/${c.slug}` })), { label: "All work", href: "/work" }] },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "How we work", href: "/approach" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg">
      <div className="container-x grid gap-14 py-20 lg:grid-cols-[1.3fr_2fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-6 font-serif text-2xl leading-snug text-text">
            Engineering the systems <span className="em">others can&apos;t.</span>
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="label">Email</dt>
              <dd className="mt-1">
                <a className="text-text-2 hover:text-pink" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label">WhatsApp</dt>
              <dd className="mt-1">
                <a className="text-text-2 hover:text-pink" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                  {contact.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label">Delivery</dt>
              <dd className="mt-1 text-text-2">{site.regions.join(" · ")}</dd>
            </div>
          </dl>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {cols.map((col) => (
            <div key={col.title}>
              <p className="label">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[0.93rem] text-text-2 transition-colors hover:text-text">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="container-x flex flex-col gap-3 border-t border-line py-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Hashmark Labs</p>
        <p>Senior engineers for AI, blockchain and fintech</p>
      </div>
    </footer>
  );
}
