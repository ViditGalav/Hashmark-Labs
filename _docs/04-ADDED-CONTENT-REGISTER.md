# Added-Content Register

Everything on the site that is NOT transcribed from the decks goes here, so the Hashmark team can review/rectify it. Authored content may only rephrase facts in the source of truth; it must not introduce new facts.

| # | Where | What | Basis | Status |
|---|---|---|---|---|
| 1 | Global | Domain `https://hashmarklabs.com` used as placeholder `SITE_URL` (env-configurable) | Unknown domain | ⚠ Confirm domain |
| 2 | Home / Contact | FAQ answers | Rephrased from deck facts (engagement, principles, regions, concurrency) | Review |
| 3 | All pages | Meta titles/descriptions | Rephrased deck hero lines | Review |
| 4 | /privacy | Privacy notice for the contact form | Generic, form-data-only; no legal entity named | ⚠ Needs legal review |
| 5 | /contact | Form fields (practice, stage, timeline) and microcopy | Research-based best practice | Review |
| 6 | /services overview | Short one-line practice summaries | Condensed from each deck hero sub-line | Review |
| 7 | /work | Case detail "Outcome" line is the deck summary line; no metrics added | Deck | OK |
| 8 | /contact form | Option lists — Stage: Idea / Pre-launch / Live product / Scaling / Enterprise · Budget band (optional): Under $25k / $25k–$75k / $75k–$150k / $150k+ / Not sure yet · Timeline: ASAP / 1–3 months / 3–6 months / Exploring. Budget bands are form choices only, not prices. | Architecture doc + common agency practice | ⚠ Confirm bands suit the team |
| 9 | /contact form | Microcopy: "Fields marked * are required", practices hint ("Choose one or more — clients combine them, or start with one."), message label "What are you building?" + placeholder/hint, validation messages, "Please send an NDA before we talk", honeypot | Practices hint rephrases deck "Clients combine them — or start with one." | Review |
| 10 | /contact form | Success state ("Thank you — message received." … "We'll reply to {email} to arrange a discovery conversation with a senior lead.") and failure fallback ("We couldn't send this from the form." with prefilled mailto + WhatsApp). No response-time promise. | Rephrases deck (senior lead, discovery) | Review |
| 11 | /contact aside | "What happens next": 01 Discovery conversation with a senior lead — "The architects you meet are the engineers who build. No hand-offs to junior teams." (TECH p2 verbatim) · 02 Scoped proposal — "Commercial terms are scoped after discovery — to the complexity, deliverables and engagement model required." (merges TECH p18 / PT p16 lines) · 03 Weekly delivery with direct access — "Weekly deliverables, live progress visibility and direct access to your senior lead — engineer, architect, strategist or BD lead." (generalises rituals across all four decks). "Prefer to write directly?" heading. | Deck lines | Review |
| 12 | /contact | Meta title "Contact — Start a conversation" + description | Rephrased deck closing lines | Review |
| 13 | /privacy | Full notice text: scope (form only), what's collected (form fields; IP used in memory for rate limiting only), purpose (respond + manage an engagement), third-party email delivery provider, retention "only as long as needed to respond and manage an engagement", "We do not sell your information", correction/deletion requests via hashmarklabs@gmail.com. "Last updated: September 2026". No legal entity/address. | Matches actual implementation (`src/app/api/contact/route.ts`) | ⚠ Needs legal review |
| 14 | 404 | "Error 404" · "This page isn't on the chain." · "The link may be broken, or the page may have moved." · buttons "Back to home" / "Contact us" | Authored microcopy | Review |
| 15 | OG image | "HASHMARK LABS" · "Engineering the systems *others can't.*" · "AI · Blockchain · FinTech — Senior-led consultancy" | Deck TECH p1 | OK |
| 16 | /llms.txt | Machine-readable summary: identity, proof numbers, four practice summaries, five flagship cases (category, summary, domains), contact. "No public pricing." | Deck facts only | Review |

## Recommended additions for the Hashmark team (not fabricated on the site)
- Professional domain email (e.g. hello@yourdomain) — a gmail address weakens trust with international enterprise buyers.
- Client testimonials (named, with permission) — strongest trust signal competitors use.
- Client logo permissions for the 5 flagship + 12 additional clients.
- Team photos and LinkedIn/GitHub/X profiles; full names for Haard and Bhargava.
- A booking link (Cal.com / Calendly) for a 30-min architecture call.
- Growth and BD case studies with measured outcomes.
- Company legal entity + registered address for the footer and privacy policy.
- Social profiles (X, LinkedIn, GitHub).

## Authored headlines & microcopy (site-builder, pass 1)
| # | Where | Copy | Basis |
|---|---|---|---|
| 8 | Home hero eyebrow | "AI · Blockchain · FinTech engineering" | TECH p1 focus |
| 9 | Home hero meta | "Capacity: 4–5 clients at a time" | Stat 4–5 |
| 10 | Home marquee label | "Shipped for teams across 11 verticals" | Stat 11 + client names TECH p9–15 |
| 11 | Home practices | "Four practices, one firm" / "Built by the people who build." / "Engineering is our core — and it sits behind every strategy, growth and partnership engagement." | Part-of slides; every pod includes a Hashmark engineer (GR/BD/PT team slides) |
| 12 | Home | "Where to start" / "Start with the conversation you need." | Practice closing slides |
| 13 | FAQ heading | "Questions, answered." | — |
| 14 | /services hero | "Four practices. One accountable team." + lead | Part-of slides; "one accountable growth partner" (GR p4) |
| 15 | /services | "Choose where to start." / "Every service, at a glance." | — |
| 16 | /approach hero lead | "We join at the architecture and decision stage, own delivery end to end, and keep every engagement visible week by week — no black boxes." | TECH p2, p8 |
| 17 | /approach | "Zero tolerance" / "What we will never do." / "Each practice is built around one thing it refuses to do…" / "The same discipline, applied to every practice." | The four "0" principles |
| 18 | Closing CTA | "You'll speak directly with Vidit Galav, Head of Engineering — the architects you meet are the ones who build." | TECH p16/p19 |
| 19 | Practice pages, in-prep work | "Meanwhile, every engagement is backed by Hashmark Labs engineering — 70+ Web3, AI and fintech products delivered." / "Request case studies" | GR/BD p11–12 |
| 20 | /about | "From first decision to scale" / "Where we deliver" | TECH p4, p18 |
| 21 | /work | Filter labels (All / AI & data / Trading & fintech / DeFi & tokenomics / Protocol engineering) and case→filter mapping | Deck case categories |
| 22 | /work | "Case studies in preparation" eyebrow, "Detailed growth and BD case studies are available on request." (merged deck notes), dashed-card body lines | GR/BD p12 |
| 23 | /work/[slug] | "Architecture as delivered — simplified for publication." / engagement callout "Every Hashmark system is senior-led — the architects you meet are the engineers who build." / "Discuss a similar system" / "Previous case" / "Next case" / "The practice" | TECH p9, p16 |
| 24 | Engineering page | "Engineering, at the core of every practice." | Part-of slides |
| 25 | /about | "We stay accountable for how the system performs." | TECH p4 fragment |
| 26 | /work | "Growth & BD engagements." / "Read the case study" | — |
| 27 | /approach | "These are the lines we hold with every client." | The four "0" principles |
| 28 | Case pages | "Every one of these systems is senior-led…" (narrowed from "Every Hashmark system", per audit) | TECH p9 |

## Audit decisions (QA pass, 2026-09-25)
- JSON-LD `telephone` removed — the deck labels the number as WhatsApp only.
- Product & Tokenomics CTA changed to "Request a strategy session" (no booking link exists).
- BD in-preparation slots now use each slot's own deck line (BD p12).
- FAQ chains answer separates "shipped on" (TECH p17) from protocol depth (TECH p6).
