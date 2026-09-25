# Quality Standards — Definition of Done

A page is not done until every box below is true. QA agents check against this list.

## A. Truthfulness (zero tolerance)
1. Every factual claim (numbers, clients, technologies, team, results) is traceable to `01-CONTENT-SOURCE-OF-TRUTH.md`.
2. Nothing in §18 "Things that DO NOT exist" appears anywhere (no fake testimonials, logos, awards, press, addresses, prices, socials, surnames).
3. Any authored copy that is not in the decks (FAQs, meta descriptions, microcopy, privacy text) is logged in `04-ADDED-CONTENT-REGISTER.md`, and adds no new facts; it only rephrases facts that exist.
4. Case study metrics are never invented. Where the decks say "Case study in preparation", the site says so honestly and offers "available on request".
5. External client URLs are only those in the decks.

## B. Design fidelity
- Uses only tokens from `02-BRAND-AND-DESIGN-SYSTEM.md`. No random hex values in components.
- Instrument Serif for display, Inter for body, JetBrains Mono for labels. Never bold serif.
- Every section has an eyebrow + serif headline pattern unless deliberately a hero/CTA.
- Visual parity with the decks: gradients, live pills, chips, numbered lists, architecture diagrams.

## C. Responsive
- Checked at 375, 768, 1024, 1440 px. No horizontal scroll at any width. Tap targets ≥ 44px. Mobile nav works with keyboard and closes on route change / Esc.

## D. Accessibility (WCAG 2.2 AA)
- Semantic landmarks (header/nav/main/footer), one h1 per page, ordered headings.
- Text contrast ≥ 4.5:1 (body) / 3:1 (large). `--faint` only for ≥ 12px uppercase labels on `--bg`, never for essential body copy.
- Visible focus rings (pink 2px offset). Skip-link. Form fields have labels, error messages linked via aria-describedby, live-region status.
- All motion respects `prefers-reduced-motion`. Decorative SVGs `aria-hidden`.

## E. Performance & SEO
- Static generation for all pages; fonts via `next/font` (self-hosted, swap). No layout shift from fonts/images.
- Lighthouse targets: Perf ≥ 90, A11y ≥ 95, Best Practices ≥ 95, SEO 100.
- Unique `<title>` + meta description per page, canonical, Open Graph + Twitter card, dynamic OG image, `sitemap.xml`, `robots.txt`, JSON-LD (Organization, ProfessionalService, BreadcrumbList, FAQPage where FAQ exists).
- JS kept minimal: client components only where interaction is needed.

## F. Engineering
- TypeScript strict, zero `tsc` errors, zero ESLint errors, `next build` passes.
- All content lives in `src/content/*.ts` (single source), components are presentational. No copy hard-coded inside layout primitives.
- Contact form: server-side validation (zod), honeypot, rate-limit-friendly, never silently drops a lead: if email provider not configured, API returns 503 and UI shows direct email/WhatsApp fallback.
- No secrets committed. `.env.example` documents config.

## G. Conversion
- Primary CTA ("Start a conversation" / practice-specific CTA) visible in nav and at end of every page.
- Every service page ends with its deck closing line + CTA.
- Contact paths: form, email, WhatsApp. All working links.
