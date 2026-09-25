# 02 — Web3 Growth / Marketing / BD / Tokenomics Agency Websites: Competitive Teardown

Prepared for: Hashmark Labs agency website
Research date: 2026-09-25
Method: live WebFetch of homepages and selected inner pages (case studies, pricing, contact, service pages); raw-HTML/JS-bundle inspection where sites were client-rendered (Serotonin); WebSearch only to locate URLs or where fetch failed (marked as such).

## 0. Method notes and limitations (read first)

- WebFetch returns a text/markdown rendering of each page. Copy, nav, section order, stats, form fields and CTA labels below are observed. **Visual design notes are limited**: palettes/typography/motion are only recorded where visible in markup or assets (e.g. dark/light logo variants, Three.js/GSAP bundles). Where I could not observe design, I say so rather than guess.
- Stats quoted are **the sites' own claims**, not verified by me.
- Swaps vs. the suggested list, and why:
  - **Simplicity Group**: `simplicitygroup.ai` 301-redirects to `simplicitygroup.com`, an unrelated US insurance/annuities firm. The web3 firm is **simplicitygroup.xyz** (GTM + Tokenomics). Used the .xyz.
  - **Outlier Ventures**: homepage is now a Fund II investment-thesis page ("AI, Atoms & Association"), not an advisory storefront. Base Camp accelerator page (/base-camp/) still fetched and used.
  - **Chaos Labs**: homepage has pivoted to AI/enterprise intelligence ("Clarity Through Chaos"); web3 risk is now proof (logos, "$5 trillion" transactions), not the offer. Included as a "quant-credibility" reference.
  - **Hype Partners**: redirects to **hy.pe** ("The Superagency"); homepage is near-proof-free.
  - **Serotonin**: Remix SPA; WebFetch returns only the `<title>`. Content extracted from JS route bundles (observed) plus search-result snippets for stats (flagged).
  - **Tokenomia (tokenomia.pro)**: fetched, but the site is now an "agentic economy / x402" engineering squad, not a tokenomics advisory. Kept as a packaging reference only.
  - **Nomiks** (tokenomics firm): fetch failed (TLS certificate mismatch on netlify). Not documented.
  - **BlockScience**: fetch returned only the page title (JS-rendered). Not documented.
  - **Added**: **MarketAcross** (crypto PR, results-based retainer model), **Economics Design** (tokenomics consulting, strong service-page template), **Delphi Digital** (research-led credibility), **Blockchain-Ads** (pricing transparency).
  - Several inner URLs 404'd: serotonin.co/services, gauntlet.xyz/insights, gauntlet.xyz/research, economicsdesign.com/cases, lunarstrategy.com/cases.

---

## 1. Site-by-site teardowns

### 1.1 Serotonin — serotonin.co (GTM platform: strategy, marketing, recruiting, legal, products)

- **Hero**: "Bringing the world's breakthrough technologies to market." Meta description: "Serotonin is a go-to-market platform for web3, AI, and biotech. You build the future, we do the strategy, recruiting, and legal work."
- **CTAs**: not extractable from bundles (SPA).
- **Nav (from nav bundle)**: Strategy, Marketing, Recruiting, Legal, Products, Research, Clients, Team, About, Careers, Contact, Podcast, Terms, plus "SE.RO".
- **Page list (route manifest)**: /strategy, /web3-marketing, /web3-recruiting, /legal-services, /products, /research, /clients, /our-team, platform-privacy, platform-terms.
- **Homepage section order**: homepage route contains essentially only the headline string; page is a single-statement hero over a WebGL scene (the nav bundle ships Three.js — meshes, lights, shaders). i.e. a manifesto-style homepage with depth in inner pages.
- **Packaging**: practices as distinct business lines, each with its own page: Strategy ("We are natives of frontier technology, guiding companies to new opportunities through strategic transformation"), Web3 Marketing ("Our superpower is helping transformative technologies reach their audiences... measurable results globally"), Recruiting, Legal ("Serotonin Legal is a law firm advising startups on corporate, regulatory, equity compensation, tokenomics..."), Products (product studio: Franklin, Mojito, "Spindl (acquired by Coinbase)"), Research ("original, data-driven reports... evolving onchain economy"). No pricing observed.
- **Proof**: /clients page is a plain name list of ~70 clients: Arbitrum, Chainlink, Circle, Optimism, Polygon, Paypal, Robinhood, Ripple, Sotheby's, VanEck, WisdomTree, Vogue, Lido, Starkware, Wormhole, Bain Capital Crypto, etc. Product-studio exit ("acquired by Coinbase") used as proof. Per search snippets (not observed directly): "$400M+ client revenue, $800M+ capital raised, $7B+ portfolio TVL, $30B+ portfolio FDV, 2.5B+ impressions"; case studies incl. Sport.fun "$10M token sale oversubscribed 3.38x".
- **Frameworks**: none observed.
- **Conversion**: not observable. Podcast in nav.
- **Content**: Serotonin Research (reports), podcast.
- **Visual**: WebGL/Three.js 3D scene + GSAP animation library in bundles; text-light, statement-led. Palette/type not observable.
- **Strengths**: breadth reads as a "platform," not an agency; very high-signal client roster (tradfi + web3 blue chips); owned research; an exit as proof.
- **Weaknesses**: SPA with near-empty server HTML = poor crawlability/AI-answer visibility and a blank page for fetchers; heavy WebGL cost; homepage says little about who it's for.

### 1.2 Lunar Strategy — lunarstrategy.com (crypto ecosystem growth agency)

- **Hero**: "Your Crypto Ecosystem Growth Agency" / "Since 2019, we've worked together with 250+ ecosystems and projects in the Crypto space."
- **CTAs**: "Book a Free Consultation" (repeated), "Book a Meeting", "Download for Free" (guides).
- **Nav**: Home, Services, Guides, Contact, Cases, Blog. Footer: Cases, Services, About Us, Testimonials, Brand Kit, Guides, Career, Team, Blog.
- **Section order**: 1 Hero with guide download → 2 Contact block with named team members → 3 About intro → 4 Case-study carousel → 5 Services (6) → 6 Team → 7 Guides/research downloads → 8 Blog → 9 Consultation CTA → 10 Contact form + office details.
- **Packaging**: 6 services: Web3 Consulting & GTM Strategy; Social Media; Community Management; Influencer Marketing; PR; Event Management. No pricing page, but **budget bands in the form**: $15K–25K, $25K–50K, $50K+, plus "Looking to raise funds" checkbox.
- **Proof**: logos (Polkadot, ICP, Cardano, MultiversX...); "250+ Clients"; 9 case studies (Polkadot, Cardano, ICP, Supra); 30+ staff with photos; guide stats "5921+ Downloads Worldwide", "94% Read to the end", "4.7+ Average rating".
- **Conversion**: Calendly; form = Name, Email, Company, Website, Telegram, Project description, Budget band; Telegram live chat; three named BD contacts with direct Telegram links (Managing Partner, Head of BD, BD & IR); registered Lisbon address and company registration number shown.
- **Content**: 5 gated guides ("Crypto Marketing in 2026: A Complete Playbook", "Founder-Led Marketing Guide", "Strategic Fundraising with KOLs"...), 225+ blog posts.
- **Visual (limited)**: dark navy/blue with white; team photos; carousels.
- **Strengths**: human-first (named partners + Telegram on homepage), budget qualification in form, lead magnets with their own proof stats, legal entity disclosure.
- **Weaknesses**: generic service list (same six as every agency); "stats about downloads" is vanity proof; hero is category-generic. Cases index URL /cases 404'd.

### 1.3 Coinbound — coinbound.io (crypto/web3 marketing, influencer-led)

- **Hero**: "Top Crypto & Web3 Marketing Agency" / "The marketing agency your favorite crypto brands use."
- **CTAs**: "Get a Free Proposal" (primary), "Get A Free Marketing Plan", "Book A Call" (header).
- **Above-fold stats**: "900+ Happy Clients", "7+ Years", "1,400+ Campaigns Delivered", "30%+ Top 100 Market Cap Crypto Companies Represented".
- **Nav**: Services mega-menu (11: Influencer, PR & Earned Media, Social, PPC, Fractional CMO, Community, AI Optimization (AEO), Advisory & Consulting, Branding, Design, Events); Company (About, Founder, Focus Areas x7, Platforms, Careers); Resources (Blog, YouTube, Podcast, 8 Tools).
- **Section order (18)**: Hero+stats → "As featured by" → 9 service cards → 4 featured case studies w/ metrics → per-service deep-dive bands each with its own stat (Influencer "500+ influencers", Community "7x member growth", PR "8,250+ earned placements", Social "400%+ engagement growth", Fractional CMO, Consulting → "Coinbound Edge" data warehouse, Events) → Awards (40+) → Testimonials (7, 5-star) → Partner logos → Podcast → 6 YouTube videos → FAQ (12) → Footer.
- **Packaging**: à la carte services + Fractional CMO. /pricing shows **no numbers**: "Get a Customized Quote in Under a Minute" and "Plans are written by the strategist who would run the work, not generated from a rate card. That is why yours takes 24–48 hours instead of arriving instantly."
- **Proof**: case cards = logo + primary metric + secondary metric + headline (MetaMask "2M+ impressions / 50+ influencers"; OKX "10,000+ users / ~$32 CPA"; Algorand "55+ placements in 30 days"; BitDials "29.96x ROAS"). ~25 cases + 60+ logo-only "Past clients". **Case page template** (MetaMask): header (Client / Services / Client Goals) → title "How Coinbound Launched MetaMask Mobile Swaps with 50+ Crypto Influencers" → "At a Glance" metrics → Challenge → Solution (4 steps incl. "Measurement methodology") → Results → CTAs "Get a Proposal" / "Browse Case Studies".
- **Lead magnets**: 8 calculators (Meme Coin Marketing Budget, NFT budget, CPM, CPC, ROAS, LTV, Press Release Generator...). No newsletter observed on homepage.
- **Strengths**: best-in-class case-study template; per-service stats; tooling as SEO + lead gen; pricing page that explains why there's no rate card (who writes the plan).
- **Weaknesses**: stat and superlative overload ("Top", "world's largest network", "longer than any other agency"); award-badge wall reads as purchased/pay-to-play; case metrics are mostly reach/impressions (vanity) rather than business outcomes; very long page.

### 1.4 MarketAcross — marketacross.com (crypto PR + advisory + SEO) [added]

- **Hero**: "PR for the world's leading blockchain companies" / "...We guarantee results through strategic blockchain storytelling and full-stack, success-based growth campaigns."
- **CTAs**: "Book a strategy call", "Explore case studies".
- **Nav**: Services, Crypto Events (Events Calendar, Media Partnerships), Case Studies, Podcast, Blog, Company, Contact Us.
- **Section order**: Hero → "Trusted by blockchain leaders worldwide" logos (27+: Polkadot, Binance, Solana, Polygon, Cardano) → "Our Work" latest media hits → "Why MarketAcross" (3 differentiators) → "Building Blocks" services → Testimonials (13, named execs incl. Sandeep Nailwal/Polygon, Ubisoft) → Case carousel → Events → Partners → Contact form → Blog → FAQ → Footer (Clutch badges).
- **Packaging**: 3 practices (Blockchain PR, Advisory, SEO). Commercial model is the differentiator: "Results Based Retainer — you pay for media coverage; it's the only fair model."
- **Proof**: case card = client, tactics, article count, readership (Avalanche "167 articles, 3.12B readership"). "Crypto-Natives Since 2014".
- **Form**: Full Name, Company, Email, Telegram, service dropdown, message.
- **Strengths**: clear commercial model as positioning; live "media hits" feed = fresh proof; named senior testimonials.
- **Weaknesses**: "We guarantee results" language; "readership" (outlet audience totals) is an inflated metric.

### 1.5 NinjaPromo — ninjapromo.io (subscription full-service agency, crypto/fintech vertical)

- **Hero**: "All your marketing needs in one single monthly subscription" / "Crystal-clear hourly billing and hundreds of marketing and creative experts at your disposal."
- **CTAs**: "Book a demo", "Book Intro Call".
- **Nav**: Our Services (SEO, Paid, Influencer, Design, Social, Email, CRO, PR, Strategy, Analytics, AI Marketing), Industries (Finance, SaaS, Crypto, Forex, iGaming... + B2B/B2C/Startup/Enterprise), Success Stories, Our Team, Pricing, Testimonials, Company.
- **Section order**: Hero (dashboard image) → "Trusted by 250+ startups and global brands, across 30+ industries" → value prop → metric grid ("24 Hours Turnaround", "50%+ Output Growth", "$100k Saving", "10 Extra Hours/Week", "30+ Services On Tap", "Top 1% Global Experts") → "Challenges Our Clients Faced Before Working With Us" → why subscription beats agencies → services by category (Strategy/Digital/Design/Dev/Analytics) → "Your Full Subscription-Based Team" (hours per specialist under a **"$12,800/month"** example) → industries → "Results We've Delivered" → CTA.
- **Proof**: 50+ case studies (name + headline metric + task/execution/results), e.g. HTX "$20M deposits attracted"; "67% of clients see measurable results within the first 30 days".
- **Strengths**: pricing anchor visible; team-composition-by-hours makes a retainer tangible; "no long-term lock-in".
- **Weaknesses**: generic across industries (crypto is one of 15); unsubstantiated productivity stats ("$100k Saving", "Top 1%"); feels like a productized marketplace, not senior advisory.

### 1.6 ICODA — icoda.io (crypto / iGaming / AI marketing)

- **Hero**: "All-in-One Marketing for Your Crypto & Blockchain Project" / "Complete packages for traffic, influencer marketing, content creation, and AI visibility..."
- **CTAs**: "Get Your Proposal", "Book Intro Call".
- **Nav**: Crypto Marketing, iGaming Marketing, AI Marketing, Expertise, Pricing (links to a Calculator), Contact Us. Language selector (11+ languages); Telegram icon in header.
- **Section order**: Hero → stats ("650+ satisfied clients", "60+ leaders trust us", "17+ years") → badges (Clutch "Top Crypto Marketing Agency 2026", Trustpilot, "Top AI SEO Agency") → sector tags → "How can we help" → 7 services → "For whom" sector carousel → 10-case carousel ("2.7x Organic Traffic", "160K+ Subscribers in 7 Days") → partner networks (VCs, named YouTubers with follower counts) → FAQ → Contact form → Footer.
- **Claims**: service-level claims like "1400% AI traffic growth and 5X ROI in 3 months", "97% positive search outcomes". **But** FAQ contains an explicit anti-guarantee: "No honest agency can — and that's the first thing to check... it cannot control market conditions, your product, or a listing committee's decision. Any agency promising a guaranteed price or pump is a red flag worth walking away from."
- **Form**: Name, Telegram, Phone, Email, "Describe your situation". Separate email-only "AI Visibility Report" lead magnet.
- **Strengths**: multilingual; budget calculator; honest FAQ on guarantees.
- **Weaknesses**: iGaming adjacency hurts institutional trust; follower-count KOL lists; ORM/SERM ("reputation management") services read as reputation laundering; percentage claims without baselines.

### 1.7 Simplicity Group — simplicitygroup.xyz (GTM + Tokenomics boutique; closest analogue to Hashmark's advisory side)

- **Hero**: "Built for the top 1% of founders." / "We work with funded AI and Digital Asset founders who are serious about growth. If you have the product and the capital, we provide the strategy, the network, and the execution to scale it."
- **CTAs**: "Book a consultation" (Calendly), "Book your free consultation", "Book a call today and we will tell you exactly what is holding your growth back."
- **Nav**: About, Our Work, Blog, Contact Us, Book a consultation.
- **Section order**: Hero → metrics ("$310M+ raised by clients", "$3B+ market cap created", "$8M+ client ARR generated", "250+ clients serviced", "750+ strategic partners") → Services (GTM, Tokenomics) → **Co-founder bios** → track record callouts → testimonials (11, named C-level) → Philosophy → FAQ (5) → CTA → Footer.
- **Packaging**: two practices with sub-services (Tokenomics: Consulting, Audit, Design, Modelling; GTM: Strategy, GTM Engineering). **Public price floors**: "Go To Market starts at $5,000 per month and tokenomics services from $5,000."
- **Founder framing** (strong): Alex Fatuliaj — "The person your token model goes through before it ever goes live."; Daniel Malinovski — "The person who gets you in the right rooms and makes sure you leave with results."
- **Method cues**: "MiCA-aligned token models", Machinations simulation, pipeline systems for research/scoring/outreach, "Distribution is built two ways" (partnerships + paid).
- **Philosophy**: "the future of digital assets will be shaped not by speculation, but by fundamentals. Only those guided by clear, verifiable data..."
- **Our Work page**: 6 cases (2 GTM, 4 tokenomics) as one-line headline results ("$140M raised, 7 advisors & 20+ partners onboarded", "$2B+ fully diluted valuation reached post launch"); intro: "the same thinking from our writing, set out here as a record of what we did and what it produced."
- **Entities**: UK Ltd + RAKEZ UAE FZ-LLC (per search).
- **Strengths**: price floors, founder-as-product positioning, named testimonials that cite specific deliverables ("tokenomics audit", "story sharpening"), regulatory vocabulary (MiCA).
- **Weaknesses**: "market cap created" / "FDV reached" attribute market outcomes to the advisor (a credibility risk Hashmark should avoid); "top 1%" exclusivity copy; thin case detail.

### 1.8 Economics Design — economicsdesign.com (tokenomics consulting)

- **Hero**: "Build your business, Structure your economy." / "Economics Design is a global tokenomics consulting firm. We help businesses optimise their tokenomics strategies for long-term success."
- **CTA**: "Contact Us" (repeated); service pages add "Schedule a call".
- **Nav**: About Us, Services (Incentive Design, Financial Modelling, Web3 Strategy, Due Diligence, Token Insight), Cases, Blog, Academy, Contact, Search.
- **Section order**: Hero → 3 value props (Design, Sustainability, Approach/first principles) → Services → client logos (Boyd Gaming, N3twork, Shrapnel, Vesper Finance...) → 3 exec testimonials → CTA.
- **Service page template (Incentive Design)** — the best-structured advisory page found: headline "Align your economy with your business goals" → what's included (Strategy phase / Design phase) → **timeline "6-8 weeks"** (Weeks 1–4 strategy & risk; Weeks 5–8 design & mitigation) → **named deliverables** ("Economy Strategy Plan", "Risk Assessment Report", "Core Game Loop Analysis", "Integrated Economy Model", "Risk Mitigation Strategies", "Qualitative Economic Plan") → FAQ → CTA.
- **Content**: Blog, Academy (education).
- **Strengths**: fixed-scope sprint with dated phases and named deliverables = procurement-friendly; academy as authority.
- **Weaknesses**: no pricing, no case metrics on homepage, no newsletter/booking on homepage; /cases 404'd at time of fetch.

### 1.9 Gauntlet — gauntlet.xyz (quant risk → vault curation; reference for quant credibility)

- **Hero**: "Fuel your growth with onchain yield." CTAs: "Speak with our team", "Explore Gauntlet Vaults"; header "Contact us" | "Launch app".
- **Nav**: Yield (Lending, Restaking, Levered RWA, Gauntlet USD Alpha, Aera), Users (Capital allocators, Builders, DAOs), Insights (Applied Research, Blog, VaultBook, Risk dashboards, Press), About Us (Team, Careers, Brand kit, **Security**).
- **Section order**: Hero with metrics ("$1.8B+" allocated, "150+" integrations, "2018") → logo carousel (Coinbase, Circle, Binance, Ledger, Anchorage, Phantom...) → 3 featured posts → 4 use cases → **3-pillar framework** (Risk Management: "Quantitative, model-driven frameworks with human oversight that have protected capital through every market cycle"; Yield Optimization; Aera Infrastructure) → **Security section with named partners** (Hypernative, ZeroShadow, Chainalysis) → KAST case study → announcements carousel → "Gauntlet Research" newsletter → footer.
- **Proof style**: specific stress-test narrative: "Gauntlet USDT vaults absorbed $775M in supply, a 40x TVL increase, and fully recovered to pre-deposit APY levels within 10 days."
- **Visual (limited)**: dark background, light text, blue/red accents.
- **Strengths**: audience-segmented nav ("Users"), public risk dashboards, security as a first-class page, operational proof (recovery time) not vanity.
- **Weaknesses**: product-first now; advisory buyers must dig.

### 1.10 Chaos Labs — chaoslabs.xyz (quant risk, now AI) 

- **Hero**: "Clarity Through Chaos" / "Chaos Labs turns complex, fragmented data into decision-ready, institutional-grade intelligence." CTA "Get Started".
- **Nav**: Resources (News, AI Research, Financial Research, Brand Kit), Company (About, News, Careers), Contact Us.
- **Section order**: Hero → single giant metric ("5 TRILLION in transactions processed") → 5 capability cards → logos (Circle, PayPal, Kalshi, Paradigm, Kraken, Aave, Ethena...) → research previews (dated posts, e.g. "We Backdoored an Open Model in One Day") → FAQ → closing CTA "Risk Less. Know More." → newsletter.
- **Strengths**: extreme restraint — one metric, one logo wall, dated research as proof of live expertise.
- **Weaknesses**: pivot means web3 buyers see AI copy; generic "Get Started".

### 1.11 Outlier Ventures — outlierventures.io (+ /base-camp/)

- **Homepage now**: Fund II thesis page. "AI, Atoms & Association" / "Our investment thesis for the next decade." CTAs: "View Thesis" (Slide deck · v1.1), "Apply for Funding via Outlier Ventures", "NEWSLETTER", "GET IN TOUCH". Nav: Funds (I, II), Research (System State). Page metadata shows Status: ACTIVE, Date: June 2026, "Thesis v1.1" — **versioned thesis document** as homepage. UK-regulatory disclaimer ("not investment advice or financial promotion").
- **Base Camp**: "an industry-leading 12 week accelerator program offering unrivalled support... on product roadmaps, community building, entity structuring, token design and more." Offers "Hands-on support from our in-house team of token engineers, venture experts, and marketers"; "400+ mentors and 180+ alumni"; vertical cohorts (DeAI, DeFi, RWA, DePIN; regional Riyadh, LatAm). CTA "REGISTER INTEREST".
- **Strengths**: thesis-as-product (versioned), compliance disclaimer, cohort structure.
- **Weaknesses**: equity/token-for-services model; the advisory story is fragmented across pages.

### 1.12 Wachsman — wachsman.com (strategic comms for tech/fin services)

- **Hero**: "The future belongs to the fearless®" / "Advising the forward thinking companies in technology and financial services." CTA "Explore our services".
- **Nav**: About Us (Team, Locations), Expertise, News, Careers, Contact Us.
- **Section order**: Hero → mission → Expertise (6: Strategic Communications, Events & Speaking, CEO Advisory, Crisis & Issues Management, Investor Relations, Transaction Advisory Communications) → Client logos filterable by region (America, APAC, EMEA) → Careers → Contact → Footer with 8 offices (LA, Miami, DC, NY, Dublin, London, Geneva, Singapore).
- **Proof**: logos only; no metrics, cases or testimonials on homepage.
- **Strengths**: institutional tone, geography as proof of international reach, crisis/IR services signal seniority.
- **Weaknesses**: slogan hero says nothing specific; zero outcome proof.

### 1.13 Hype — hy.pe (formerly hypepartners.com)

- **Hero**: "The Superagency" / "A group of relentless creative operators building the stories, teams and systems that make crypto and emerging technology inevitable".
- **CTAs**: "Get in touch", "Start camera", "Start Chat" (interactive/novel).
- **Nav**: Marketing, Talent, Wrks; Bootcamp, PR, Events.
- **Sections**: Hero → "Stories that make technology matter" → "People who move your business forward" → "AI systems that create operating advantage" → footer (hello@hype.partners, 15 offices, Substack, Brand Book).
- **Proof**: none observed on homepage.
- **Strengths**: three outcome-phrased practice lines; brand confidence.
- **Weaknesses**: proof-free; only works with existing brand equity.

### 1.14 Other references (brief)

- **Blockchain-Ads** (ad platform): hero "Acquire your ideal customer. Scale without limits."; CTA "Request Access"; logos each paired with a metric (Coinbase "31,896 New Traders Acquired"); "Get started in 3 steps (Qualify → Launch → Scale)"; **minimums in FAQ**: "$10,000 minimum deposit", managed service "minimum monthly ad spend of $30,000", "around $135K per month on average"; "Rated 4.7/5 from 71 verified G2 reviews".
- **Delphi Digital**: hero "Crypto Research for Investors and Builders"; CTA "Sign Up for $199"; named testimonials from Vitalik Buterin, Joe Lubin etc.; advisory (Delphi Creative), Ventures, Labs as subsidiaries hung off a research brand — research is the top-of-funnel.
- **Tokenomia (tokenomia.pro)**: three-phase packaging (BLUEPRINT discovery → ENGINEERING "Dedicated Engineering Pod" marked "Popular" → LAB ongoing governance), phase-specific CTAs ("BOOK TECHNICAL AUDIT", "RESERVE SQUAD CAPACITY", "REQUEST PARTNERSHIP BRIEFING"), prices displayed as "$0/month" (apparent placeholder bug — a cautionary example), no proof at all, named partners with specialisms, Google Calendar "30-minute call... Zero obligations".

---

## 2. Synthesis

### 2.1 Table-stakes patterns (present on most sites)

1. **Category hero + one-line qualifier** ("Top Crypto & Web3 Marketing Agency", "Your Crypto Ecosystem Growth Agency").
2. **Stat strip directly under hero** (clients served, years, $ raised/volume). 8 of 12 sites.
3. **Logo wall** within first 2–3 sections. Nearly universal; Wachsman even filters by region.
4. **Service grid** of 3–11 services linking to per-service pages.
5. **Case cards = logo + 1–2 headline metrics**, with a detail page.
6. **Named testimonials** (name, title, company) — 7–13 quotes.
7. **FAQ block near the bottom** (Coinbound 12, Simplicity 5, ICODA, Blockchain-Ads, Chaos Labs).
8. **Book-a-call as primary CTA** (Calendly/Google Calendar); "free consultation/proposal" framing.
9. **Telegram as a contact field and channel** (Lunar, ICODA, MarketAcross, Simplicity). Crypto-native buyers expect it.
10. **Blog + podcast/YouTube** as content engine; newsletter less universal than expected.
11. **Dark theme** dominant among crypto-native sites; brand kit page common (Lunar, Gauntlet, Chaos, Hype).

### 2.2 What the best do differently

- **Practices as business lines, not service lists** (Serotonin: Strategy/Marketing/Recruiting/Legal/Products/Research each a page; Hype: 3 outcome-phrased lines). Fewer, bigger practices read as senior.
- **Fixed-scope sprints with dated phases and named deliverables** (Economics Design 6–8 weeks, Weeks 1–4 / 5–8, six named documents). This is the single most procurement-friendly pattern observed.
- **Price transparency as a trust signal**: Simplicity ("from $5,000"), NinjaPromo ($12,800/month example with hours per role), Blockchain-Ads (minimums), Lunar (budget bands in form). Coinbound turns *no* pricing into a trust statement ("written by the strategist who would run the work").
- **Founders as the product**: Simplicity's one-sentence role promises per founder; Lunar's named partners with direct Telegram on the homepage.
- **Research as proof of live expertise**: Gauntlet (Applied Research, VaultBook, risk dashboards), Chaos Labs (dated posts), Serotonin Research, Delphi, Outlier's versioned thesis.
- **Operational proof over vanity proof**: Gauntlet's "absorbed $775M... recovered... within 10 days" and named security partners; Coinbound's "Measurement methodology" step in each case.
- **Explicit anti-guarantee language** (ICODA FAQ) and **regulatory disclaimers** (Outlier's UK financial-promotion notice; Simplicity's "MiCA-aligned").
- **Audience-segmented navigation** (Gauntlet "Users: Capital allocators, Builders, DAOs").
- **Restraint** (Chaos Labs: one metric, one logo wall, research, CTA).

### 2.3 Credibility pitfalls a trust-first firm can contrast against

| Pitfall observed | Where | Trust-first counter |
|---|---|---|
| "We guarantee results" | MarketAcross hero | Commit to scope, cadence, deliverables and measurement — never to outcomes you don't control |
| Market-outcome attribution ("$3B+ market cap created", "$2B+ FDV reached") | Simplicity; Serotonin (FDV/TVL per search) | Report only what you did and controlled (models shipped, audits delivered, partners introduced, pipeline built); label client outcomes as "client-reported" with context |
| Superlatives ("Top", "world's largest network", "Top 1%", "longer than any other agency") | Coinbound, NinjaPromo, Simplicity | Specific, checkable facts (years, named people, named deliverables) |
| Unbaselined % claims ("1400% AI traffic growth", "400%+ engagement", "67% see results in 30 days") | ICODA, Coinbound, NinjaPromo | Always baseline → result → timeframe → method |
| Vanity reach metrics ("3.12B readership", impressions) | MarketAcross, Coinbound | Business metrics (qualified pipeline, integrations live, retention, audit findings closed) |
| Award/badge walls (Clutch, Trustpilot, "Top AI SEO Agency") | Coinbound, ICODA, MarketAcross | Skip or keep to one verified review platform |
| Follower-count KOL lists, reputation "management" (SERM/ORM), iGaming adjacency | ICODA | Don't sell reach-for-hire; disclose paid promotion policy |
| Token-for-services / equity-for-advice conflicts | Outlier Base Camp ("equity stake and future token supply") | Publish a conflicts & compensation policy (cash fees; no undisclosed token allocations) |
| Placeholder/broken pricing ("$0/month") and no proof | Tokenomia | QA; if proof is thin, say what's coming and when |
| Proof-free brand-only sites | Hype, Wachsman homepages | Only viable with legacy fame — not for a new firm |
| SPA/WebGL sites that render empty to crawlers | Serotonin | Server-render all copy; motion as enhancement |

Also absent almost everywhere (opportunity): a published **"what we won't do"** list (no guaranteed listings, no price/pump promises, no wash/bot engagement, no paid undisclosed KOL posts), a **compliance/legal-review stance** for tokenomics, and **security posture** for engineering (Gauntlet is the only one with a Security page).

### 2.4 How Hashmark should present its 4 practices (+ honest "case study in preparation" gaps)

**Positioning thesis**: Hashmark is the only firm in this set that is *engineering-led*. Every competitor is either a marketing shop that added "advisory" or a tokenomics boutique that doesn't build. Lead with: "Senior engineers who also design the economy, the launch and the partnerships — so the model, the code and the market story agree."

**Structure**
- Homepage: 4 practice tiles phrased as outcomes (Hype pattern), each linking to a practice page. Engineering (AI, blockchain, fintech) first as the anchor; the three advisory practices framed as extensions that inherit engineering rigour.
  - Engineering — "Build systems that survive audits and scale."
  - Product & Tokenomics — "Economies that are modelled, stress-tested and implementable."
  - Growth & Marketing — "Distribution measured in pipeline, not impressions."
  - BD & Partnerships — "Introductions with a thesis, tracked to signed outcomes."
- Show a **cross-practice diagram** (single engagement flowing Discovery → Model → Build → Launch → Partnerships) — no competitor visualises how practices connect; Hashmark can.
- Each practice offers **2–3 entry packages**: a fixed-scope **Sprint** (e.g. "Tokenomics Design Sprint, 6 weeks, 5 named deliverables"), an **Audit/Review** (short, lower-risk first purchase — e.g. tokenomics audit, GTM readiness review, smart-contract/architecture review), and a **Retainer**. Publish "from" price floors or budget bands (Simplicity/Lunar pattern); if not, publish a Coinbound-style explanation.
- Name the **senior lead per practice** with a one-sentence role promise (Simplicity pattern) and direct contact (email + Telegram; Lunar pattern).

**Handling missing case studies honestly (without looking weak)**
1. **Replace "case studies" with "Work" that has three evidence types**, so empty slots don't dominate:
   - *Shipped work* (engineering projects, possibly anonymised: "Tier-1 fintech, payments reconciliation engine" — sector, problem, stack, scope, duration, outcome within Hashmark's control).
   - *Sample deliverables*: redacted/synthetic tokenomics model excerpt, a GTM plan table of contents, a partnership scoring rubric, a risk-register template. Economics Design names deliverables; nobody shows them — showing them beats a logo.
   - *Research/teardowns*: public analyses of token launches or protocols (Gauntlet/Chaos/Delphi pattern) as proof of thinking.
2. **"In preparation" cards done properly**: a card with sector, engagement type, scope, status ("Engagement active — case study publishes after client approval, est. Q1 2027"), and what will be measured. This reads as a disciplined pipeline, not an empty shelf. Never show blank placeholders or "coming soon" with nothing else.
3. **Label provenance** on every number: "delivered by Hashmark" vs "client-reported" vs "team members' prior roles" (senior-led firms can cite prior-role experience if clearly labelled as such — e.g. "Our partners previously led X at Y").
4. **Publish a "How we measure" page** (Coinbound has a methodology step per case; make it firm-wide): baselines, attribution rules, what we refuse to claim (price, FDV, listings).
5. **Anonymised is fine; fabricated is fatal.** State the NDA policy: "Several engagements are under NDA; we'll walk you through them on a call."

### 2.5 Recommended service/practice page template (section order)

1. **Hero**: outcome headline + who it's for (stage/sector) + primary CTA "Book a 30-min scoping call" + secondary "Download sample deliverable".
2. **Problem framing**: 3 symptoms buyers recognise (e.g. "Emissions schedule nobody can defend to a VC").
3. **What we do / don't do**: scope in bullets + explicit exclusions (no guaranteed listings, no price promises, no undisclosed paid promotion).
4. **Engagement options**: Audit / Sprint / Retainer cards — duration, cadence, team (named senior lead + roles), "from" price or budget band.
5. **Process timeline**: phased weeks (Economics Design pattern) with named deliverables per phase.
6. **Deliverables gallery**: redacted/sample artefacts (model screenshot, report TOC, dashboard).
7. **Method / framework visual**: the practice's framework diagram (e.g. tokenomics: Objectives → Actors → Value flows → Simulation → Stress tests → Implementation spec).
8. **Proof**: cases (Challenge → Approach → Results with baseline/timeframe → provenance label), or "in preparation" cards + relevant research.
9. **Team**: senior lead(s) with photo, prior roles, LinkedIn; one-line role promise.
10. **How this connects to other practices**: cross-sell (e.g. tokenomics → smart-contract implementation → launch GTM → exchange/partner BD).
11. **Trust & compliance**: conflicts/compensation policy, legal-review stance (MiCA/securities counsel partnership, not legal advice), security practices, NDA policy.
12. **FAQ** (5–8: pricing, timeline, token payment?, guarantees, jurisdictions, NDAs).
13. **Final CTA + short form**: Name, Work email, Company/Project URL, Practice (multi-select), Stage (pre-seed → post-TGE / enterprise), Budget band, Timeline, Message, Telegram (optional). Calendly/Cal.com embed after submit.

Supporting site-level recommendations: server-rendered pages (avoid Serotonin's empty-HTML problem); research/insights section with a newsletter; audience-segmented nav option (Founders / Enterprises & Fintechs / Foundations & DAOs — Gauntlet pattern); Telegram + email + booking in header or contact page; legal entity and jurisdictions in footer (Lunar/Simplicity pattern); one restrained stat strip only with numbers Hashmark controls.

---

## 3. Source URLs fetched

- https://serotonin.co/ (+ JS bundles under /assets/ for route content), search result snippets for stats
- https://www.lunarstrategy.com , /contact (/cases 404)
- https://coinbound.io , /pricing/ , /case-studies/ , /case-studies/metamask/
- https://www.marketacross.com
- https://ninjapromo.io
- https://icoda.io
- https://simplicitygroup.xyz/ , /our-work (simplicitygroup.ai → simplicitygroup.com is unrelated)
- https://www.economicsdesign.com , /incentive-design (/cases 404)
- https://www.gauntlet.xyz (/insights, /research 404)
- https://chaoslabs.xyz
- https://outlierventures.io , /base-camp/
- https://wachsman.com
- https://hy.pe (redirect from hypepartners.com)
- https://www.blockchain-ads.com
- https://delphidigital.io
- https://tokenomia.pro
- Failed: nomiks.io (TLS error), block.science (title only)
