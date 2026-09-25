# 03 — AI Consultancies & Elite UX Patterns

**Client:** Hashmark Labs — a senior-led engineering consultancy for AI, blockchain and fintech (international clients)
**Brand:** bg `#0a0b14` · gradient `#ff5e8e → #b98cff` · accent teal `#3fe0c5` · Instrument Serif display (pink italic emphasis) · Inter body · JetBrains Mono letter-spaced eyebrow labels · cream light sections
**Research date:** 2026-09-25

## How this research was done

I read every site through WebFetch. WebFetch turns a page into text and markdown, so it captures copy, information architecture, section order, CTAs and trust signals. It **does not capture** rendered visuals, CSS type sizes, scroll or motion behaviour, hover states or WebGL. Anything below about motion, type scale or micro-interactions is marked as **[practice]**: it is established industry practice or my professional recommendation, not something I saw during this research. Everything under "Observed" came from the fetched pages.

Fetches that worked: tribe.ai (home + case studies), fuzzylabs.ai, faculty.ai, datatonic.com, vstorm.co (home + case studies), netguru.com, thoughtworks.com/what-we-do/ai, quantiphi.com, linear.app (home, /customers, /customers/ramp), vercel.com, basement.studio (home, /showcase, one case study), metalab.com, instrument.com, stripe.com, paradigm.xyz, anthropic.com.
Partial results: vercel.com (the extraction returned no footer or logo band), metalab.com (the headline came back as "We makeinterfaces" and the markup was mostly repeated links, so its interactive "HoverDrag" work grid could not be inspected), paradigm.xyz (structure and nav only).
No fetch failed outright.

---

## Part A — AI engineering consultancies (observed)

| Firm | Hero (verbatim) | Primary CTA | Services structure | Trust signals | Case-study format |
|---|---|---|---|---|---|
| **Tribe AI** | "AI that ships, scales, and compounds." / "We embed. We build. We don't stop until it's in production." | "Start a conversation" (repeated) | 3-phase method: **Map → Build → Activate** | SOC 2 Type II, Microsoft SSPA, frontier-lab partnerships, ex-Stitch Fix/DocuSign leaders, offices in NY/SF/Lisbon | Logo + outcome headline with a number ("Cut recipe onboarding from 10 minutes to under a minute") + 2–3 line description; simple list, no filters |
| **Fuzzy Labs** | "Practical AI — Properly Engineered" / "use open source MLOps to help build and productionise AI models" | "Let's talk" + lead magnet "Get your cookbook" (MLOps Recipe Book) | Three service focuses picked in the contact form; content hub ("WTF is MLOps?", guides, open source) | Logos (eBay, ARM, Microsoft); open-source credibility | Carousel cards |
| **Faculty** | "Frontier AI for the frontlines of the world." | "Get started" / "Get in touch" | AI Services + proprietary product "Faculty Frontier™"; 13 industries | Sam Altman quote; "a decade of real world impact"; NHS/NESO/DSTL work | Image thumbnail + client logo + short title |
| **Datatonic** | "Your go-to AI Partner" / "…the leading cloud data + AI consultancy." | "Let's talk" | Services / Training / Industries / Our work / Hub / Partners | Google Cloud Partner of the Year award, ISO 27001 & 9001 in the footer, client logos, 5 office cities | 5 featured cases with image + subtitle |
| **Vstorm** | "Agentic AI Company" / "We build AI agents that run in production." | "Start the assessment" (self-serve AI readiness) + "Book the session" (45-min call with engineers) | Services submenu by capability (multi-agent, RAG, Pydantic AI, LangChain); 8+14 industries; "How we work" (TriStorm method) | "30+ production deployments", official Pydantic partner, Clutch, Deloitte Fast 50, team size | **Before→after metrics as the headline** ("44% → 98%", "2 hrs → 3 min"); filters by industry *and* business function |
| **Netguru** | "AI-native commerce" | "Estimate project" | 6-group Services mega menu (Strategy, Engineering, Design, AI & Data, Cloud, Delivery) + Commerce + Solutions | Big logos (IKEA, VW), 5 exec testimonials, B Corp, TÜV, NPS 73, 2500+ projects | Card = logo + thumbnail + engagement-type tag + outcome headline |
| **Thoughtworks (AI)** | "Governed to scale. Built to last. Deliver real AI value." | "Assess your AI readiness" / "Get in touch" | 5 practice areas (Strategy, Agentic, AI factory, GenAI, Data modernization) + branded platforms (AI/works™, Agent/works™) | Hyperscaler partner logos, analyst recognition, AWS specialization | Quantified mini-cases ("60% faster build times", "90% reduction…") |
| **Quantiphi** | "Compounded Edge" | "Unlock AI-Powered Growth", "Schedule a discovery call" | Applications / Industries / Partners / Resources / Company; 4 branded platforms | Gartner, Everest PEAK Matrix, CRN awards | Resources hub |

### What the category has in common (synthesis)
1. **"Production" is the positioning word everyone uses.** Tribe ("until it's in production"), Vstorm ("run in production"), Fuzzy ("productionise") and Thoughtworks ("stalled pilots") all make it. It no longer sets anyone apart. Hashmark needs a sharper claim, for example **senior-only teams plus regulated domains (fintech/on-chain)**, where mistakes cost money.
2. **A named method is the norm**: Map/Build/Activate, TriStorm, AI/works. A named, trademark-style method makes a consultancy's work feel like a product.
3. **Metrics in case-study headlines win.** Vstorm's "44% → 98%" format was the strongest pattern I found. Tribe and Thoughtworks do the same.
4. **Trust signals come in layers:** compliance (SOC 2, ISO 27001), partner badges (Google Cloud, AWS, Pydantic), awards (Clutch, Deloitte), client logos, and one testimonial from a famous name (Faculty with Altman).
5. **Two-speed conversion:** a low-commitment self-serve tool (Vstorm's assessment, Thoughtworks' readiness check, Fuzzy Labs' cookbook) sits next to a high-intent call booking ("45-minute session with engineers", which names *who* you will talk to).
6. **Weak spots across the category:** generic stock-style heroes, overloaded industry lists (Vstorm lists 22 industries, Faculty 13), carousels that hide case studies, and almost no visible design craft. **The design bar in AI consulting is low. Hashmark can win on craft alone.**

---

## Part B — Design-excellence references (observed)

| Site | Observed |
|---|---|
| **Linear** | Hero: "The product development system for teams and agents" / "Purpose-built for planning and building products. Designed for the AI era." Nav: Product, Resources, Customers, Pricing, Now, Contact, plus Docs / Log in / Sign up. The page is **built from real product UI** (issue view, timeline, diff views, agent threads) instead of illustrations. Three value pillars. Three named-executive quotes (OpenAI, Ramp, Opendoor). Stat "40,000+ product teams". 6-column footer (Product, Features, Company, Resources, Connect, Legal) with a Changelog feed. **Customers index:** card grid with a 56px logo, name, one-line impact, category tags, "Read story →"; **filter chips** (Featured, SaaS, AI, Fintech…); a bigger featured row with video; an aggregate metrics band ("3.3x faster issue resolution"). **Case detail (/customers/ramp):** outcome headline ("The coding agent behind 75% of Ramp's merged PRs"), **metadata sidebar** (Company, Founded, Switched, Size), video, three H2 sections (What / Why / How), attributed pull quotes, prev/next related stories. No strong end-of-page CTA (a gap Hashmark can fill). |
| **Vercel** | Hero: "Agentic Infrastructure" / "For coding agents to ship apps and agents automated by agents." Dual CTA "Deploy now" + "Talk to sales". The page is organised as **customer-led chapters** (Notion, Zapier, Mintlify), each followed by a 4-item feature grid. There is a "Recently shipped" strip. Mega menu and footer were not captured. |
| **basement.studio** | Hero: "A digital studio & branding powerhouse making cool shit that performs." Order: Hero → Selected Work (4) → Services (4 pillars with sub-lists) → client roster → About → contacts. The **showcase is a vertical list** with client, year, service tags and a 1–2 line synopsis. The case page has a title, metadata (client, year, services, live URL), narrative, closing tagline and "Related Projects". Awwwards / FWA / Webby credits. The copy is confident and irreverent. |
| **Metalab** | "We make interfaces" (the text extracted as "We makeinterfaces"). "Since 2006, we've helped the most innovative startups and reputable brands design, build, and ship products worth talking about." Work appears as a numbered 1–24 interactive "HoverDrag" grid (I could not inspect it). Extremely minimal copy. |
| **Instrument** | "We're a digital-first design agency where creativity meets technology." An award banner sits above the fold. Order: Work (filter: all / brand / marketing / product) → clients → services → purpose → news → newsletter ("Liner Notes") → footer. CTAs: "Start a Project", "View All Work". |
| **Stripe** | "Financial infrastructure to grow your revenue". Products mega menu in **5 labelled groups** (Payment processing, Financial services, Money movement, Risk & compliance, Specialized). **Stat band**: "135+ currencies", "US$1.9tn in payments volume", "99.999% uptime". Accordion-style case studies with metrics and product tags. The footer has columns plus a **language/region selector**. |
| **Paradigm** | A minimal hero with a one-sentence thesis. **Hamburger nav even on desktop** with nested items (Research → Index, Puzzles; Build → Incubations, Open Source). **Keyboard shortcut hints shown in brackets `[M] [X] [F]`**. The footer includes an LP Login. The design is text-first, restrained and institutional. |
| **Anthropic** | "AI research and products that put safety at the frontier". Nav: Research, Policy, Commitments, Learn, News, Try Claude, plus a language selector. Order: hero + feature card → Latest releases (3 cards with date + category) → mission section with 6 thematic tiles → **8-column footer**. Card metadata is set in small type (date, category). |

### Cross-reference lessons
- **Show the real artefact, not an illustration.** Linear uses product UI and Vercel uses customer architecture. For Hashmark that means real (sanitised) dashboards, agent traces, contract diagrams and latency charts.
- **Case studies are structured data.** Linear, basement and Vstorm all attach metadata (industry, year, services, size) to each case, which makes filters and related-work links possible.
- **Restraint signals seniority.** Paradigm, Metalab and Anthropic use little copy and quiet UI. basement's irreverence works for a brand studio but is wrong for a fintech consultancy.
- **Stat bands work when the numbers are huge or exact** (Stripe's "99.999%"). A vague "100+ projects" reads as filler.

---

## 1. Component inventory — best-practice specs

Conventions: container `max-width: 1280px` (text column 68ch). Gutters `clamp(16px, 4vw, 40px)`. 12-col grid, collapsing to 4-col below 768px. Focus ring: `outline: 2px solid #3fe0c5; outline-offset: 3px` (teal on dark, `#0a0b14` on cream). Minimum hit area 44×44px.

### 1.1 Global nav (header)
- **Layout:** logo left; 4–5 primary items (Practices, Work, Approach, Company, Insights); right side has a ghost "Book a call" button with a gradient border and a mono "EN / Status" utility. Height 72px, which becomes 60px after 80px of scroll.
- **States:** transparent over the hero, then `rgba(10,11,20,.72)` + `backdrop-filter: blur(14px)` + a 1px `rgba(255,255,255,.06)` bottom hairline once scrolled. It hides on scroll down and reappears on scroll up, but **never while focus is inside it**. The active page gets a 2px gradient underline. Hover shifts text from 70% to 100% opacity.
- **Motion:** 200ms ease-out on background and height. The hide/show uses `transform: translateY` only.
- **Responsive:** below 1024px it becomes a full-screen sheet menu with large serif links (the Paradigm idea) and a mono index `01 02 03`.
- **A11y:** `<header><nav aria-label="Primary">`; a skip link "Skip to content" as the first focusable element; `aria-current="page"`; the menu button uses `aria-expanded` and `aria-controls`; the sheet traps focus and Esc closes it.

### 1.2 Mega menu
- **Layout (from Stripe's grouping):** a 3-column panel. Columns 1–2 are practice groups (AI Engineering · Blockchain & Web3 · Fintech Systems), each with a mono eyebrow and 3–4 links carrying a one-line descriptor. Column 3 is a **featured case card** (image, metric, "Read →").
- **States:** opens on hover with a 120ms intent delay, or on click / Enter / Space. It closes after 250ms of hover-out grace, on Esc, or on focus-out. The trigger chevron rotates 180°.
- **Motion:** opacity 0→1 plus translateY 8px→0 over 180ms. With reduced motion, opacity only.
- **Responsive:** turns into an accordion inside the mobile sheet.
- **A11y:** disclosure pattern (a button with `aria-expanded`), **not** `role="menu"`. Links stay in tab order. The panel is a labelled region.

### 1.3 Hero
- **Layout:** mono eyebrow (`// SENIOR-LED ENGINEERING · AI · CHAIN · FINTECH`). H1 in Instrument Serif at display size, 2–3 lines, with one phrase in *pink italic*. A 1–2 line Inter subhead of about 20px at 60% opacity. Primary CTA "Book a technical call" (gradient fill) plus secondary "See the work" as a text link with an arrow. Below that, a proof row: 3 inline micro-stats or partner badges.
- **Visual:** a restrained gradient mesh or grain field, **or** a live "system" artefact (see Part 5). Never a stock robot or brain image.
- **Motion:** the headline reveals line by line with a mask (translateY 100%→0, stagger 80ms, 700ms, `cubic-bezier(.2,.7,.2,1)`) **only above the fold on first load**. The LCP text must be in the HTML and visible within 1s; if JS fails, the text shows immediately.
- **Responsive:** H1 goes from about 96px to 44px through clamp, and CTAs stack full-width below 480px.
- **A11y:** a single `<h1>`. Gradient text keeps a solid fallback colour. Contrast is at least 4.5:1 for the subhead (60% white on `#0a0b14` is about 8:1, fine).

### 1.4 Logo marquee
- **Layout:** the mono label "TRUSTED BY TEAMS AT" sits above a single row of monochrome logos at 50% opacity with a mask-gradient fade on both edges.
- **Motion:** CSS `@keyframes` translateX loop, 40–60s. **Pauses on hover and focus.** Under `prefers-reduced-motion` it becomes a static wrapped grid.
- **A11y:** the duplicated set has `aria-hidden="true"`. The logo list is a `<ul>` with alt text = company name. Add a visible pause button if the loop runs longer than 5s (WCAG 2.2.2).
- **Rule:** use real clients only. If there are fewer than 8, use a static grid, because a sparse marquee looks thin.

### 1.5 Stat band
- **Layout:** 3–4 cells separated by hairlines. Each has a large serif number, a mono unit or eyebrow, and a one-line Inter caption. Use exact numbers (Stripe style): "$1.2B+ settled on contracts we audited", "p95 < 180ms".
- **Motion:** the count-up runs once on intersection (800ms) and keeps the final value in the DOM for SEO and screen readers. With reduced motion there is no count.
- **Responsive:** 4 → 2×2 → 1 column.
- **A11y:** a `<dl>` with the number and caption in the same semantic unit. Do not count up inside an `aria-live` region.

### 1.6 Practice cards (3: AI · Blockchain · Fintech)
- **Layout:** large cards (min-height 420px) with mono index `01/03`, serif title, 2-line description, capability chips, and a "Explore practice →" footer. Give each a subtle signature visual (neural lattice / block chain / ledger lines) drawn in thin SVG strokes.
- **States:** on hover the border goes from `rgba(255,255,255,.08)` to a gradient border, a radial spotlight follows the cursor (CSS var `--x/--y`), and the arrow moves 4px. **The whole card is clickable** through a stretched link on the title's `<a>`, which avoids nested interactive elements.
- **Motion:** 250ms. The spotlight is disabled on touch devices and under reduced motion.
- **Responsive:** 3-col → horizontal scroll-snap on tablet → stacked on mobile. Stacking is preferred, because scrolling hides content.

### 1.7 Case-study cards
- **Layout (combining Vstorm, Linear and Tribe):** image or artefact on top (16:10). Meta row in mono: `FINTECH · 2025 · AI + CHAIN`. **The headline is the outcome** in serif ("Settlement reconciliation from 3 days to *11 minutes*"). A before→after metric chip in teal. Client logo.
- **Index page:** filter chips for practice, industry and engagement model, each with `aria-pressed`, and URL query params so filtered views can be shared. Put 1–2 featured large cards before the grid.
- **States:** the image scales 1.03 over 600ms, the headline gets an underline, and the metric chip glows.
- **A11y:** the card is an `<article>` with an `<h3>`. Images get meaningful alt text or empty alt if decorative.

### 1.8 Case detail layout
- **Structure (combining Linear and basement):**
  1. Hero: eyebrow (practice), serif outcome H1, 3 headline metrics.
  2. **Sticky meta sidebar** (desktop): Client, Industry, Region, Engagement model, Duration, Team (e.g. "2 staff engineers + 1 principal"), Stack chips, Links.
  3. Body chapters: **Context → Constraint → Approach → Architecture (diagram) → Results → What we'd do next**. The last one signals senior honesty.
  4. Pull quote from a named executive.
  5. Architecture diagram in inline SVG, zoomable, with a text description.
  6. "Next case" full-width band plus a **contextual CTA** ("Facing a similar reconciliation problem? Talk to the engineer who led this."). Linear lacks this CTA.
- **Reading UX:** a progress bar under the nav and a chapter TOC (scroll-spy) in the sidebar. Body text measure is 65–72ch.
- **Responsive:** the sidebar becomes a meta grid after the hero.
- **SEO:** `Article` + `Organization` JSON-LD and breadcrumbs.

### 1.9 Process timeline
- **Layout:** 4–5 steps with a named method (e.g. **Frame → Prove → Build → Harden → Hand over**). Desktop uses a horizontal rail; mobile uses a vertical rail. Each step shows a mono step number, serif name, duration ("Week 1–2"), deliverables list and the artefact produced.
- **Motion:** the rail fills with the gradient as the section scrolls (use CSS `animation-timeline: view()` with a JS fallback). The active step gets full opacity and the others 50%. **No scroll-jacking or pinning longer than about one viewport.**
- **A11y:** an `<ol>`. The content never depends on the animation.

### 1.10 Principle list
- **Layout:** an editorial numbered list on a **cream section**. Large serif statements ("Senior engineers write the code, *not just the slides*.") with a short Inter rationale. Two columns: number on the left, text on the right.
- **Motion:** each item fades up once (opacity + 16px). That's all.
- **A11y:** an `<ol>` with headings inside.

### 1.11 Team cards
- **Layout:** portrait (4:5, duotone treatment in the brand gradient, turning to colour on hover), name in serif, role in mono, **prior credentials** ("ex-Stripe, built ledger infra") and GitHub/LinkedIn icons. Principals get bigger cards.
- **States:** hover removes the duotone and shows a short "Currently obsessed with…" line.
- **A11y:** icon links have `aria-label` ("Aditi on GitHub"). Hover-only content must also appear on focus, or be visible on mobile.
- **Rule:** real people only. Seniority is the product, so this section works as a trust signal, not decoration.

### 1.12 Engagement model cards
- **Layout:** 3 cards: **Discovery Sprint** (fixed scope, 2–3 wks), **Build Pod** (monthly retainer, 2–5 seniors), **Embedded Principal / Fractional CTO**. Each shows a mono label, what you get, typical duration, team shape, a "from" price or "scoped per project", and a CTA. The middle card is highlighted with a gradient border and a "Most chosen" tag.
- **A11y:** comparison content also appears as a table for screen readers, or the cards use consistent heading order.

### 1.13 FAQ accordion
- **Layout:** two columns: a sticky heading plus "Still unsure? Email a principal" on the left, questions on the right.
- **Implementation:** native `<details><summary>` (accessible by default, works without JS) with a plus/minus icon rotation. Height animates via `interpolate-size: allow-keywords` or `::details-content` where supported, and snaps instantly otherwise.
- **SEO:** `FAQPage` JSON-LD. Google limits FAQ rich results to authoritative gov and health sites, but the markup is still useful for AI answer engines.
- **Content:** time zones and overlap, IP ownership, NDAs, security (SOC 2 posture), payment currencies, how fast senior staff can start.

### 1.14 CTA band
- **Layout:** full-bleed, the gradient mesh at low intensity on `#0a0b14`. Serif line ("Have a hard problem? *Let's look at it together.*"), primary "Book a 30-min technical call", and secondary `hello@hashmark…` with a copy-to-clipboard button. **Name the person** (avatar and "You'll speak with [Principal], not sales"), following Vstorm's "with engineers" idea.
- **Motion:** at most a slow gradient drift (20s+). Static under reduced motion.

### 1.15 Footer
- **Layout:** a giant serif wordmark or statement at the top (edge-to-edge type is a common award-site move, **[practice]**). Then 4–5 link columns (Practices, Work, Company, Resources, Legal), office cities with **live local times**, status and security links (Trust Center), newsletter, and social. The bottom row has ©, a region/language selector (Stripe) and "Built by Hashmark" credits.
- **A11y:** `<footer>` with a `<nav aria-label="Footer">`; the headings in columns are real headings or `<h2 class="visually-hidden">`.

### 1.16 Contact form
- **Layout:** two columns: form on the left, and on the right "what happens next" as 3 steps (reply within 1 business day → 30-min call with a principal → written proposal in 5 days) plus a direct email and calendar embed option.
- **Fields (progressive):** name, work email, company, **practice chips** (AI / Blockchain / Fintech / Not sure), budget range (select), timeline, message. The chip choice changes the placeholder hint. Keep required fields to 4 or fewer.
- **States:** label always visible (no placeholder-only labels), inline validation on blur, error text linked with `aria-describedby`, error summary at the top on submit. The submit button shows a spinner, then a success view with a calendar link. Show a friendly retry and mailto fallback on failure.
- **Spam:** honeypot + time-to-submit check + Turnstile. Avoid visual CAPTCHAs.
- **A11y:** `autocomplete` attributes, `inputmode="email"`, fieldset/legend for the chips, and focus moved to the success heading.

---

## 2. Motion guidelines

**Principle:** motion should explain things or show hierarchy, never decorate. A senior engineering brand should feel *precise*: short, eased and purposeful.

**Tokens [practice]:**
| Token | Value | Use |
|---|---|---|
| `--dur-1` | 120ms | hover colour/opacity |
| `--dur-2` | 200ms | buttons, nav state |
| `--dur-3` | 350ms | cards, menus |
| `--dur-4` | 700ms | hero reveal, section entrance |
| `--ease-out` | `cubic-bezier(.2,.7,.2,1)` | entrances |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)` | state toggles |

**Tasteful:** line-mask headline reveal on first load only; once-only fade-up (≤16px) of section content; a cursor spotlight on cards; progress rail fill; count-up stats; View Transitions API between case index and detail (shared-element image morph); magnetic CTA limited to ≤6px; hover underline draw.

**Gimmicky / avoid:** scroll-jacking and smooth-scroll libraries that override native scroll inertia (they break find-in-page, anchor links and trackpads); long pinned sections; custom cursors that replace the system cursor; parallax on body text; animating every element; letters flying in; auto-playing carousels for case studies; WebGL heroes that cost more than 150KB or block LCP; preloaders or intro screens (instant fail for a performance-credible consultancy).

**Reduced motion (required):**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important; animation-iteration-count: 1 !important;
    transition-duration: .01ms !important; scroll-behavior: auto !important;
  }
  .marquee { animation: none; flex-wrap: wrap; }
}
```
- Under reduced motion, keep opacity crossfades (they are fine) but remove transforms, parallax, count-ups and marquees.
- JS: `matchMedia('(prefers-reduced-motion: reduce)')` gates GSAP/Motion timelines. Default to **no animation until JS confirms** that motion is allowed, so there is no flash.
- Provide a visible pause control for anything looping longer than 5s (WCAG 2.2.2).
- Animate only `transform`, `opacity`, and `filter` in moderation. Never animate layout properties. Keep INP under 200ms.

---

## 3. Typography & spacing scale

Fluid range: 360px → 1440px viewport. Ratio: about 1.2 on mobile, about 1.333 on desktop.

### Type scale
| Token | Font | clamp() | ≈ min → max | Leading / tracking |
|---|---|---|---|---|
| `--fs-display` | Instrument Serif 400 | `clamp(3rem, 1.4rem + 7.1vw, 7.5rem)` | 48 → 120px | 0.95 / -0.02em |
| `--fs-h1` | Instrument Serif | `clamp(2.5rem, 1.5rem + 4.4vw, 5.5rem)` | 40 → 88px | 1.0 / -0.015em |
| `--fs-h2` | Instrument Serif | `clamp(2rem, 1.4rem + 2.7vw, 3.75rem)` | 32 → 60px | 1.05 / -0.01em |
| `--fs-h3` | Instrument Serif | `clamp(1.5rem, 1.2rem + 1.3vw, 2.25rem)` | 24 → 36px | 1.15 / -0.005em |
| `--fs-h4` | Inter 600 | `clamp(1.125rem, 1.05rem + .35vw, 1.375rem)` | 18 → 22px | 1.3 / -0.01em |
| `--fs-lead` | Inter 400 | `clamp(1.125rem, 1rem + .55vw, 1.5rem)` | 18 → 24px | 1.5 / -0.005em |
| `--fs-body` | Inter 400 | `clamp(1rem, .96rem + .19vw, 1.125rem)` | 16 → 18px | 1.6 / 0 |
| `--fs-small` | Inter 400 | `clamp(.875rem, .85rem + .1vw, .9375rem)` | 14 → 15px | 1.5 |
| `--fs-eyebrow` | JetBrains Mono 500 uppercase | `clamp(.6875rem, .66rem + .12vw, .78rem)` | 11 → 12.5px | 1.2 / **0.14em** |
| `--fs-mono-data` | JetBrains Mono 400 | `clamp(.8125rem, .79rem + .1vw, .875rem)` | 13 → 14px | 1.5 / 0.02em |

Notes:
- **Instrument Serif has only a 400 weight (plus italic).** Get hierarchy from size, not weight. Use the italic *only* for the pink emphasis phrase, at most one per headline. Colour `#ff5e8e`; optionally `background: linear-gradient(90deg,#ff5e8e,#b98cff); -webkit-background-clip:text` with a solid `color` fallback.
- Don't set serif text below about 20px. Below H3 size, switch to Inter.
- Load fonts self-hosted, subset (Latin), `font-display: swap`. **Preload only Instrument Serif regular** (the LCP font). Use `size-adjust` / `ascent-override` fallback metrics to cut CLS. Inter as a variable font with `font-feature-settings: "ss01","cv11"` for tabular data; use `font-variant-numeric: tabular-nums` in stats.
- Cream sections (`#f4efe6`-ish) use `#0a0b14` text. On cream, the pink `#ff5e8e` is too light for body text (below 3:1). Keep it to display sizes or darken it to about `#d6336c` for any small text.
- Teal `#3fe0c5` on `#0a0b14` passes easily and suits metric chips, focus rings and "live" indicators.

### Spacing scale (4px base, fluid at the upper end)
| Token | Value |
|---|---|
| `--space-3xs` | 4px |
| `--space-2xs` | 8px |
| `--space-xs` | 12px |
| `--space-s` | `clamp(16px, 15px + .3vw, 20px)` |
| `--space-m` | `clamp(24px, 21px + .9vw, 32px)` |
| `--space-l` | `clamp(32px, 26px + 1.8vw, 48px)` |
| `--space-xl` | `clamp(48px, 37px + 3vw, 80px)` |
| `--space-2xl` | `clamp(64px, 46px + 5vw, 128px)` |
| `--space-section` | `clamp(80px, 55px + 7vw, 176px)` |
| `--gutter` | `clamp(16px, 4vw, 40px)` |
| `--radius` | 4 / 10 / 20px (chips / buttons / cards) |

Layout: 12-col grid with `gap: var(--space-m)`; readable text column `max-width: 68ch`; hairlines `1px rgba(255,255,255,.08)` on dark and `rgba(10,11,20,.12)` on cream.

---

## 4. Performance / SEO / accessibility table stakes

**Core Web Vitals (p75, mobile):** LCP < 2.0s (the target is tighter than Google's 2.5s "good"), INP < 200ms, CLS < 0.05. Also: total JS for marketing pages < 150KB gz; hero with no JS dependency; images in AVIF/WebP with `srcset`/`sizes`, explicit width/height, `fetchpriority="high"` on the LCP image only and lazy loading below the fold; video `preload="none"` with a poster; third-party scripts (analytics, Calendly) loaded on interaction; static generation (Next.js / Astro) + edge CDN; Lighthouse at least 95 in all categories as a CI gate.

**Semantic HTML:** one `<h1>` per page and headings in order; `<header>/<nav>/<main id="main">/<article>/<section aria-labelledby>/<footer>`; buttons for actions and links for navigation; lists for lists; `lang="en"` (and `hreflang` if localised).

**JSON-LD:**
- Site-wide: `Organization` (name, logo, url, sameAs [LinkedIn, GitHub, X, Clutch], contactPoint, address/areaServed) + `WebSite`.
- Practice pages: `Service` (serviceType, provider, areaServed: "Worldwide").
- Case studies: `Article` (headline, datePublished, author = named engineer as `Person`, about) + `BreadcrumbList`.
- Team: `Person` with `jobTitle`, `worksFor`, `sameAs`.
- FAQ: `FAQPage`. Insights: `BlogPosting`.

**Metadata / OG:** a unique `<title>` (≤60 chars) and meta description (≤155) per page; canonical URLs; OG + Twitter cards at 1200×630; **auto-generated OG images per case study** (serif outcome headline + metric, e.g. with `@vercel/og`/Satori); favicon set + `theme-color: #0a0b14`; `sitemap.xml`, `robots.txt`; **`llms.txt`** so AI crawlers get clean summaries (Tribe markets "ask ChatGPT/Claude about us", which shows AI answer-engine visibility now matters for consultancies).

**Accessibility (WCAG 2.2 AA):** text contrast of 4.5:1 (3:1 for large text and UI); visible focus on every interactive element (teal ring); skip link; keyboard-operable menus and filters; `prefers-reduced-motion` and `prefers-contrast` support; no information carried by colour alone (metric chips also use arrows and text); forms with labels, error association and `autocomplete`; target size of 24px or more (44px recommended); captions or transcripts for any video; alt text policy; testing with axe in CI plus a manual pass with VoiceOver/NVDA.

**Privacy / trust:** cookieless analytics (Plausible/Fathom) so there's no consent banner hurting LCP and first impressions; a security page; clear legal entity and company registration in the footer (international clients check this).

---

## 5. Ten ideas to go "one step beyond"

1. **A live "proof strip" instead of vanity stats.** A small, real telemetry module: an on-chain counter of value secured by audited contracts (read from a public indexer), GitHub commit activity from open-source repos, or median time-to-first-PR on current engagements. Mark it "LIVE" in mono with a teal dot. None of the consultancies I reviewed show live evidence. Stripe-style exact numbers become verifiable.
2. **Architecture as the case-study hero.** Every case opens with an interactive, zoomable system diagram (inline SVG: nodes for LLM, vector DB, chain, ledger, with hover details) instead of a stock photo. This follows Linear's "real artefact" approach applied to consulting, and it proves engineering depth at a glance.
3. **Sign each case study with its engineer.** A byline with the lead engineer's photo, GitHub and a "Talk to Aditi about this" CTA. This makes "senior-led" concrete, fills the missing end-of-page CTA gap seen on Linear, and adds `Person` schema for E-E-A-T.
4. **A self-serve scoping tool with a real deliverable.** It goes beyond Vstorm's readiness quiz: an 8-question "AI / on-chain feasibility check" that returns a one-page PDF (risk flags, suggested engagement model, rough timeline band) and pre-fills the contact form. It's a lead magnet that also qualifies the lead.
5. **A command palette (⌘K) and keyboard hints.** Take Paradigm's `[M] [X]` shortcut idea further with a ⌘K palette to jump to practices, cases or team, or to copy the email. Developer buyers will notice it immediately, and it costs little.
6. **Publish a "What we'd do next" and "What went wrong" section in every case.** Honest reflections are a strong seniority signal. Agencies I reviewed only present wins.
7. **A shared-element morph from case card to case page.** The View Transitions API gives native, zero-library transitions: the card image and serif headline morph into the detail hero. It feels app-like, degrades gracefully, and respects reduced motion.
8. **Time-zone-aware conversion.** The CTA band shows "It's 10:42 in Bengaluru · 06:12 in London — we overlap with you 4h/day", with the visitor's zone detected on the client. Calendar slots are pre-filtered for overlap. This speaks directly to international buyers' first worry.
9. **An open-source and research layer.** An "Open Lab" section with repos, eval benchmarks, audit reports and small tools (e.g. gas-cost estimator, LLM eval harness), like Paradigm's Open Source / Puzzles and Fuzzy Labs' cookbook. It gives the site a reason to be linked to, which helps SEO, and shows proof of craft.
10. **Engineering the site in public.** A tiny footer badge that shows the page's live Lighthouse / CWV score and page weight ("This page: 142KB · LCP 0.9s") and links to a "How this site is built" write-up. Showing performance in public is rare among AI agencies, and here it is the proof of the claim.

Bonus: **machine-readable proposal.** Put `llms.txt` together with a structured `/capabilities.json` (practices, stack, rates band, availability) so procurement teams' AI assistants can quote Hashmark accurately. This is where the category is heading, and Tribe AI already markets "ask your AI about us".

---

### Sources
- https://www.tribe.ai · https://tribe.ai/case-studies
- https://www.fuzzylabs.ai
- https://faculty.ai
- https://www.datatonic.com
- https://vstorm.co · https://vstorm.co/case-studies/
- https://www.netguru.com
- https://www.thoughtworks.com/what-we-do/ai
- https://quantiphi.com
- https://linear.app · https://linear.app/customers · https://linear.app/customers/ramp
- https://vercel.com
- https://basement.studio · https://basement.studio/showcase · https://basement.studio/showcase/harvey-from-seed-to-series-d
- https://www.metalab.com
- https://www.instrument.com
- https://stripe.com
- https://www.paradigm.xyz
- https://www.anthropic.com
