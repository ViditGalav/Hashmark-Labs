import { site, contact } from "@/content/site";
import { practices } from "@/content/practices";
import type { Faq } from "@/content/faq";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/icon.svg"),
    slogan: site.tagline,
    description: site.description,
    email: contact.email,
    areaServed: ["United States", "Europe", "Asia-Pacific", "Middle East"],
    knowsAbout: ["Blockchain engineering", "Artificial intelligence", "Decentralised finance", "Tokenomics", "Fintech"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Practices",
      itemListElement: practices.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p.name, description: p.summary, url: absoluteUrl(`/services/${p.slug}`) },
      })),
    },
    employee: { "@type": "Person", name: contact.principal.name, jobTitle: contact.principal.role },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
