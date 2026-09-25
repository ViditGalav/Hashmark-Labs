# Hashmark Labs — Website

Marketing site for Hashmark Labs, built from the four credential decks. Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages static)
npm run start
npm run lint
```

## Configure
Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical domain, e.g. `https://hashmarklabs.com`. Used for canonical URLs, sitemap, OG images and JSON-LD. **Set this before launch.** |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com). Lets the contact form send email. |
| `CONTACT_FROM_EMAIL` | Verified sender on your Resend domain, e.g. `Hashmark Labs <website@yourdomain.com>` |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries (defaults to hashmarklabs@gmail.com) |

Until the email variables are set, the contact form **does not pretend to succeed**. It shows the visitor your direct email and WhatsApp instead, so no lead is lost silently.

## Deploy
The quickest route is Vercel: import the repo, set the env vars above and deploy. Any Node host that runs `next start` also works.

## Where things live
| Path | What |
|---|---|
| `src/content/` | **All copy.** `site.ts` (identity, contact, stats), `practices.ts` (the four practices, transcribed from the decks), `work.ts` (case studies), `team.ts`, `faq.ts`. Edit text here, not in components. |
| `src/components/sections/sections.tsx` | Shared page sections (stats, principles, process, FAQ, CTA…) |
| `src/components/work/` | Case rows, architecture diagrams, filter |
| `src/app/` | Routes: `/`, `/services`, `/services/[slug]`, `/work`, `/work/[slug]`, `/approach`, `/about`, `/contact`, `/privacy`, plus sitemap, robots, OG images |
| `src/app/globals.css` | Design tokens (exact deck colours and fonts) |
| `public/llms.txt` | Machine-readable summary for AI assistants |

## Content rules
The project-level rules are in `../CLAUDE.md` and `../_docs/`. Every fact on the site traces to the decks (`../_docs/01-CONTENT-SOURCE-OF-TRUTH.md`), and any authored copy is listed in `../_docs/04-ADDED-CONTENT-REGISTER.md` for review.

## Adding a case study
Add an entry to `cases` in `src/content/work.ts` (with a `diagram`). The index page, detail page, OG image, sitemap, footer and search palette all pick it up automatically. To replace a Growth/BD "in preparation" slot, edit that practice's `work` block in `src/content/practices.ts`.
