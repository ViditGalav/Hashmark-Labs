# Site Architecture & Research Decisions

Research inputs: `research/01-web3-engineering-studios.md`, `research/02-web3-growth-bd-tokenomics.md`, `research/03-ai-consultancies-and-elite-ux.md`.

## Positioning decision
Competitors are either engineering/security studios (Nethermind, OpenZeppelin, Moonsong) or growth/tokenomics shops (Serotonin, Lunar, Gauntlet). None credibly offers senior AI + blockchain + fintech engineering **and** go-to-market in one firm. Hashmark leads with **Engineering as the anchor**, with Growth, BD and Product & Tokenomics presented as "built by the people who build".
Trust wedge: the "0" principles (no junior-only delivery, no tokens for their own sake, no bots, no guaranteed listings). No competitor publishes a "what we won't do" list.

## Page map
| Route | Purpose |
|---|---|
| `/` | Home |
| `/services` | Four practices overview + how they combine |
| `/services/engineering` · `/services/growth` · `/services/bd-partnerships` · `/services/product-tokenomics` | One template, sections toggled by data |
| `/work` | 5 flagship cases + 12 additional systems + "in preparation" slots |
| `/work/[slug]` | Case detail: sticky meta sidebar, challenge, engineered, architecture diagram, stack, related practice, next case, CTA |
| `/approach` | Process, operating principles (all four "0"s), engagement models, rituals, tech depth |
| `/about` | Position, who we are, team, bench, regions, why |
| `/contact` | Form + direct channels + what happens next |
| `/privacy` | Contact-form privacy notice (flagged for legal review) |
| `sitemap.xml`, `robots.txt`, `llms.txt`, OG images, 404 | SEO / machine readability |

## Home section order
1. Hero: constellation, "Engineering the systems *others can't.*", two CTAs, meta row (Focus / Model / Delivery / Contact)
2. Client wordmark marquee (text names from decks; no logos)
3. Position: "We don't sell developers…" + 3 points
4. Stats: "Proof, not promises."
5. Four practices: Engineering as the large anchor tile, 3 go-to-market tiles
6. Capabilities: "Where we go deepest." (6)
7. Selected work: 5 live cases with architecture previews
8. Breadth: 12 additional systems
9. Process: 4 steps + rituals
10. Principles (cream section): big "0" + 4 principles
11. Team: 3 principals + bench
12. Why Hashmark: 8 evidence items
13. Engagement models
14. FAQ (native details, FAQPage JSON-LD)
15. Closing CTA naming the principal (Vidit Galav) + email/WhatsApp

## Practice page template (order)
Hero → Position (3) → Stats (practice wording) → Problem table (wrong → instead) → Services (6 + also) → Framework timeline (do / measure) → Process (4 + rituals) → Measure / Deliverables (4 groups) → Audience / Launch / Partner universe → Principles (cream, "0") → Team pod → Work (cases or honest "in preparation" slots) → Why (8) → Engagement → Other practices → Closing CTA.
Engineering adds: Technical depth (3 columns + stack marquee).

## Contact form
Name*, Work email*, Company / project, Website, Practice(s) (multi-select chips)*, Stage (Idea / Pre-launch / Live / Scaling / Enterprise), Budget band (optional), Timeline, Message*, Telegram (optional), "Request NDA first" checkbox, honeypot. Server validation with zod. Sends via Resend if `RESEND_API_KEY` is set, otherwise 503 with direct email/WhatsApp fallback shown. Never drops a lead silently.
