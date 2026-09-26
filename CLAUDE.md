# Hashmark Labs Website — Project Rules

Read these before any work. They are binding for every agent.

1. **Source of truth:** `_docs/01-CONTENT-SOURCE-OF-TRUTH.md` (transcribed from the four PDF decks in this folder; raw text in `_source/text/`, page renders in `_source/pages/`). No claim appears on the site unless it is there.
2. **Never fabricate:** testimonials, client logos, awards, press, prices, addresses, founding year, socials, surnames, metrics. See §18 of the source of truth.
3. **Authored copy** (FAQs, meta, microcopy) only rephrases existing facts and is logged in `_docs/04-ADDED-CONTENT-REGISTER.md`.
4. **Design:** `_docs/02-BRAND-AND-DESIGN-SYSTEM.md` (exact deck fonts and colours). Tokens live in `website/src/app/globals.css`; don't hard-code hex values in components.
5. **Definition of done:** `_docs/03-QUALITY-STANDARDS.md`.
6. **Voice & design feel:** `_docs/06-VOICE-AND-HUMANIZER.md` governs wording and visual restraint. Wording may be rewritten; facts may not change.
7. **Architecture & research:** `_docs/05-SITE-ARCHITECTURE.md`, `_docs/research/*.md`.
8. **Code:** `website/` is Next.js 16 (App Router, async `params`), React 19, Tailwind v4, TypeScript strict. All copy lives in `website/src/content/`. Read `website/node_modules/next/dist/docs/` before using unfamiliar Next APIs.
9. **Verify** with `npm run build` and `npm run lint` in `website/` before declaring anything done.
