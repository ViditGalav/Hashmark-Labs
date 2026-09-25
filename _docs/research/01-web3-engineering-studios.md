# 01 — How Top Web3 / Blockchain Engineering Studios Build Their Websites

Research date: 2026-09-25. Prepared for: Hashmark Labs agency site launch.

## Method and caveats

- Sources: live homepages and selected inner pages, fetched with WebFetch (converted to markdown) and with curl (raw HTML plus linked CSS, parsed for headings, form fields, fonts, hex colours and animation libraries).
- **Visual notes come from the page code, not screenshots.** Fonts and palettes are the most frequent `font-family` and hex values in the HTML/CSS. Motion notes come from detected `<video>`, Lottie, GSAP and `@keyframes`. Treat "feel" statements as inference.
- Section orders are as observed. Small interstitial blocks can be missed when a page lazy-loads content.
- Fetch problems:
  - **hacken.io** returned 403 to WebFetch; curl got the full HTML, so the Hacken data is real.
  - **informal.systems** renders on the client side; only the title and meta description were retrievable, so it is not profiled.
  - **zeeve.io** WebFetch output was truncated; I rebuilt the homepage from curl.
  - **moonsonglabs.com/contact** returned 404; the real page is `/contact-us/`, which was fetched.
  - **Trail of Bits** gave only a partial homepage.
- Sites profiled (12):
  - Premium tier: Nethermind, OpenZeppelin, Moonsong Labs, Sigma Prime, Hacken, ChainSafe.
  - Mid tier: 10Clouds, MetaLamp, Rumble Fish, Zeeve.
  - Volume tier: LeewayHertz.
  - Reference: Trail of Bits.
- Swaps against the suggested list:
  - Moonsong Labs was added. It is the closest positioning twin to Hashmark: blockchain + AI for institutional finance.
  - Informal Systems was dropped because it could not be fetched.
  - Blockchain App Factory and Consensys services were not fetched. Their tier is covered by LeewayHertz and Zeeve.

---

## Part A — Site-by-site profiles

### 1. Nethermind — https://www.nethermind.io (premium, flagship reference)
- **Hero:** "The Leading Engineers of Blockchain Infrastructure" / "We empower enterprises and developers worldwide to access and build on decentralized systems."
  - CTAs: "Explore our solutions" + "Contact us".
  - The hero also carries a promotional audit-slot offer.
- **Nav:** a mega-menu with 5 items.
  - Services: Protocol Engineering & Research; Network Infrastructure & Access; Scaling & Interoperability; Compliance & Identity; Asset & Treasury.
  - Blockchain Expertise: Engineering, Infrastructure, Research, Security.
  - Nethermind Security: Audits, Formal Verification, Audit Reports, Audit Subsidy Program, AuditAgent, AgentArena, ZK Audit.
  - Institutional: Bedrock.
  - Company: About, Open Roles, Insights, Events.
- **Homepage order (14 sections):**
  1. Hero
  2. "TRUSTED BY the best" — 35+ logos (Lido, dYdX, Ethereum Foundation, Gnosis, Starknet, Yearn…)
  3. Value proposition: "We build public blockchain infrastructure from core protocols to institutional systems"
  4. Latest news: UBS × Nethermind compliance PoCs
  5. Three featured offerings, each with a proof line. Example: Execution Client "Powers ~30% of the Ethereum network, since 2017"
  6. Selected Work (5 projects, including UBS risk framework and "Agentic AI for Regulated Finance")
  7. Stats: "200+ team members | 66+ countries | 9 years in blockchain"
  8. Four pillars: Engineering, Infrastructure, Security, Research
  9. Solutions: 6 cards, including "AI Agents & Infrastructure"
  10. Developer tools: Ethereum tools and Starknet tools
  11. Ethereum contributions: EIP-4337, EIP-4844, Verkle, Paprika, libp2p, EOF
  12. Insights carousel
  13. Press coverage
  14. Final CTA: "Bring your institution onto public networks"
- **Services depth:** very deep. The service page "Blockchain Core Engineering for Ethereum, Rollups, and ZK Systems" has these H2s:
  - Execution Infrastructure for Live Networks
  - Engineering domains
  - Technical approach
  - Engineering challenges and failure modes
  - When teams engage core engineering
  - Selected engineering work
  - Research & engineering infrastructure
  - Engineering research & technical writing

  This is a strong template: failure modes plus "when to engage" pre-qualifies the buyer.
- **Trust:**
  - 35+ logos; a network-share stat (~30% of Ethereum); a named bank (UBS); press.
  - Protocol contributions (EIPs) used as proof.
  - Arbitrum Audit Program and zkSync Security Council membership.
- **Conversion:**
  - Contact page "Facing a web3 challenge?"
    - Required fields: Full Name*, Email*, Job Title/Role* (dropdown: Founder/Executive, Tech Lead/Eng Manager, Software/Protocol Engineer, Smart Contract Engineer/Auditor, Security Researcher, Researcher, Product/Ops/Partnerships, Other), Type of Client* (Company or Individual), "Tell us more about what you're building*".
    - Optional fields: Telegram, Company/Project.
    - The page shows no booking widget; it also offers hello@ email.
- **Content:** Insights blog, events, press, research, open-source tools.
- **Visual:**
  - Stack: Webflow.
  - Type: Exo (display) + DM Sans (body).
  - Palette: deep navy #073653 / #3a617c, cool greys #afb8c6 / #d8dfe8 / #f5f6fa, amber accent #ffb03a / #ff9900.
  - Motion: about 20 video references (looping hero and section video).
  - Density: high; a long page.
- **Strong:**
  - Proof is quantified and specific.
  - A protocol-contribution section shows authority rather than claiming it.
  - Service pages are deep and pre-qualify buyers.
- **Weak:**
  - The homepage is very long (14 blocks) and the story is diluted across Services / Expertise / Solutions / Pillars, which overlap.
  - The contact form has no budget or timeline qualification.

### 2. OpenZeppelin — https://www.openzeppelin.com (premium, best-in-class B2B)
- **Hero:** "The security standard for onchain finance" / "Finance is moving onchain with OpenZeppelin. The institutions and technology innovators leading that shift move faster when security is never in question, from first design through production."
  - CTAs: "Talk to an Expert" + "Explore Stats →".
  - An announcement bar sits above: "S&P Global Enters Agreement to Acquire OpenZeppelin".
- **Nav:** 5 dropdowns.
  - Services: Security Audits, Continuous Security Program, and the lifecycle Architect / Build / Secure / Support.
  - Solutions, split three ways:
    - Financial Institutions: Banks, Asset Managers, Payment Networks, Tokenization Platforms, Capital Markets Infra, Fintechs & Neobanks.
    - Networks & Protocols.
    - Public Sector & Regulators.
  - Developers: Contracts, tools, and 12 chains.
  - Research: Research, Audits, Customer Stories, Onchain Brief, Stats, Why OZ.
  - Company.
- **Homepage order:**
  1. Announcement bar
  2. Live counter, "Total value transferred via OpenZeppelin Contracts" (a huge number)
  3. Logos (Aave, Uniswap, Fidelity Digital Assets, WisdomTree, DTCC, EF, Coinbase, Fireblocks, BitGo…)
  4. "Onchain finance already runs on OpenZeppelin" — "9 of the top 10 stablecoins", "10 of the top 10 tokenized money market funds"
  5. "Security shaped to the world you operate in" — about 10 audience cards
  6. Testimonial (WisdomTree Head of Product)
  7. "Take your most critical onchain initiatives to production" — 6 use-case cards: Tokenization, Stablecoins, Collateral/Repo, Custody, Asset Mgmt/Yield, Payments
  8. Customer stories ×3
  9. Continuous Security Program: productised retainer, "scaled by OpenZeppelin AI"
  10. Compliance block: SOC 2 Type II, CCSS, GDPR, CCPA; standards bodies (ISO, EEA, LF Decentralized Trust); regulators engaged (US Treasury, SEC, FCA, AMF, HK SFC, HKMA)
  11. Developer foundation: Contracts, Wizard, MCP, Skills
  12. Second testimonial (Matter Labs)
  13. News and research
  14. Newsletter "The Onchain Brief"
  15. Footer with a repeated headline and CTA
- **Case studies:**
  - The listing filters by All / Layer 1 / Layer 2 / Financial Institutions / DeFi / Infrastructure.
  - Each card shows two metrics. Examples:
    - WisdomTree: "$790M in Tokenized Fund Assets Onchain" + "4 Critical Findings Resolved".
    - ZKsync: "819 Total Issues Uncovered Across 48 Audits".
  - Story template: The Challenge → OpenZeppelin's Solution → The Results → pull-quote → Services Used list → "Talk to an Expert".
- **Conversion:**
  - "Talk to an Expert" appears at least 4 times.
  - The /contact page is a router with 4 cards (Forum, Docs, Sales/Audit, Free Trial) plus a general form.
  - The newsletter works as a lead magnet.
- **Visual:**
  - Type: Inter throughout.
  - Palette: dark indigo #23233f, lavender #e5e6fd, electric indigo #4f56fa accent, near-black #0a0a0a.
  - Motion: GSAP + Lottie animations, some video.
  - Feel: calm, institutional, generous whitespace.
- **Strong:**
  - Audience segmentation: "Solutions" by who you are, not what they sell.
  - Outcome-framed use cases.
  - A compliance and regulator block.
  - Every case card carries metrics.
  - A productised retainer.
- **Weak:**
  - Very product- and developer-heavy nav for a buyer who only wants services.
  - The contact page adds a routing step before the form.

### 3. Moonsong Labs — https://moonsonglabs.com (premium, closest positioning analogue)
- **Hero:** "Blockchain & AI infrastructure for institutional finance" / "Programmable money, tokenized assets, & intelligent software are reshaping finance." Supporting line: "engineers the systems behind faster payments, modernized asset markets, and AI-powered financial operations."
  - CTAs: "Let's Talk" + "Explore Solutions".
- **Nav:** Solutions (dropdown), Work, Insights, Company, Contact. Minimal.
- **Homepage order:**
  1. Hero
  2. 4 solution blocks: Stablecoin Payment Infrastructure; Tokenization & RWA Systems; Institutional Blockchain Engineering; AI Workflows & Agentic Systems
  3. Logo ticker (Canton, Prividium, Chainlink, Moonbeam, ZKsync, StarkWare)
  4. 2 case studies
  5. Testimonial (Matter Labs CTO)
  6. "Why institutions trust Moonsong" (3 pillars)
  7. "From Concept to Production" — 5-step process (Discovery → Architecture → Implementation → Testing → Delivery)
  8. Footer
- **Solution page template (Stablecoin Payment Infrastructure):**
  1. Outcomes (Modernized Treasury, Streamlined Payouts, Cross-Border Settlement, Working Capital)
  2. "How Moonsong Enables Institutions" (Design Architecture, Configure Controls, Engineer Flows, Integrate Systems)
  3. "Moving You to Production" (Define / Build / Launch)
  4. "Let's Talk"
- **Case studies:**
  - `/work` filters by category: Stablecoin Payments (1), Tokenization (2), Blockchain Engineering (4).
  - Case page (Prividium) is a long-form narrative:
    - At a Glance
    - Meeting the Institutional Moment
    - The Challenge (a "fork vs layer" decision)
    - How Moonsong Approached It (embedded team, two client quotes)
    - What Moonsong Enabled
    - "Prividium Today"
    - "Since launch" metrics
    - Footnotes / sources
    - CTA
  - Named end-clients inside the story: Deutsche Bank's Memento, Cari Network, BitGo.
- **Contact** (`/contact-us/`, "Let's talk."):
  - Framing: "Get real answers from the experts behind billions of dollars in institutional onchain settlement."
  - "What to expect": 20-minute intro; meet the team; if there's a fit, they outline scoping.
  - Fields: Name, Email, Company, Position, "What are you working on?" (select: Stablecoin Payment Infrastructure / RWA & Tokenization Systems / Institutional Blockchain Engineering / AI & Agentic Systems / Something Else), "Anything else you want to share?", optional marketing opt-in.
- **Visual:**
  - Stack: Astro.
  - Type: Archivo Variable / Archivo Black / Host Grotesk (display and body) + IBM Plex Mono (technical accents).
  - Palette: warm cream #f5f0e6, cool greys #edf0f5, teal accents #55b5a6 / #3e9182 / #5de1e6.
  - Motion: logo ticker keyframes, pulse / ping.
  - Feel: editorial, light, low density.
- **Strong:**
  - The sharpest and most modern positioning (blockchain + AI for finance).
  - Solutions are named as buyer outcomes.
  - "What to expect" reduces friction on the contact page.
  - The form's intent dropdown mirrors the solution taxonomy.
  - Footnoted, sourced case studies.
- **Weak:**
  - Thin proof volume: only 6 cases and 1 testimonial on the homepage.
  - No stats bar, no team faces, no security or compliance badges.

### 4. Sigma Prime — https://sigmaprime.io (premium security/protocol engineering)
- **Hero:** "Blockchain Security Audits & Research" / "Auditing complex offchain code, ZK systems, blockchain infrastructure, and smart contracts."
  - CTAs: "Contact Us" + "View our services".
- **Nav:** Blog, Services, Case Studies, Products (Lighthouse, Anchor, Bombora, Secstant), About.
  - The Services dropdown has 8 items grouped under Security Audits / Education / Engineering, each with a one-line descriptor. Example: "Rolling Commit Reviews — Incremental PR-by-PR review for actively developed codebases".
- **Homepage order:**
  1. Hero
  2. Stats: "Established since 2016", "$57b+ TVL protected", "400+ projects audited", "6,500+ total findings", "700+ high-risk findings"
  3. 25 logos, "Securing the largest names in the industry"
  4. 4 service cards
  5. Case studies with tags and metrics
  6. Products: "We don't just audit Ethereum. We build it."
  7. CTA
- **Case studies:**
  - The listing filters by tech and domain tags: Solidity, Blockchain protocol, Go, Smart contracts, DeFi, L2, Rust, Bridge, Execution client, Infrastructure, Bitcoin, DVT, EVM, Staking.
  - Every card shows "Total findings" and "High + critical findings".
  - Case page (Reth) sections: breadcrumb → title + "Public report on GitHub ↗" + date + tags → Executive summary → "By the numbers" → "What we reviewed" (3 scoped areas) → Related services → Related research (3 posts) → "Looking for a security audit? Request a scoping call".
- **Visual:**
  - Stack: Astro; KaTeX is loaded, so the blog renders maths.
  - Palette: near-monochrome greys (#f5f5f5 → #707070) with a violet accent #715dd8.
  - Motion: one canvas element; heavy dark-mode styling.
  - Feel: engineer-minimal, no fluff.
- **Strong:**
  - Numbers everywhere.
  - A case → service → research internal-linking loop.
  - Links to public reports prove claims.
  - "Scoping call" is a better CTA than "contact".
- **Weak:**
  - Narrow audience.
  - Little narrative or brand warmth; almost no testimonials.

### 5. Hacken — https://hacken.io (premium security + compliance, conversion-heavy)
- **Top bar lead magnet:** "Q2 2026 Security & Compliance Report — 67 incidents, $764M in losses, 88% from operational failures. Get the report →".
- **Hero:** "End-to-end blockchain security & compliance partner for [Asset Managers / Digital Assets]" (rotating audience word). CTA: "Talk to our team".
  - Proof line under the hero: "2,158 public security assessments delivered, 16,520 found vulnerabilities, $430B+ in assets verified across PoR audits, ISO 27001 certified".
- **Nav:** Solutions, Compliance, Resources, Company, Portfolio, and a "Request a quote" button.
  - The Solutions mega-menu has 4 groups: Blockchain Assurance / Advanced Security / Others / Risk intelligence. Each item carries a sub-descriptor, e.g. "Cryptography Review — ZK / PQC / ECC / FHE".
- **Homepage order:**
  1. Hero with proof line
  2. Regulator and organisation logos, plus audience tabs (TradFi & DeFi, L1, L2, CEXes)
  3. "Protect assets and pass every compliance check": services arranged as a 3-stage lifecycle
     - 1 Build secure
     - 2 Prove compliance
     - 3 Operate with confidence

     Each item has a verb-led title and a specific CTA ("Schedule a pen-test →", "Run a Proof of Reserves →").
  4. "Security & compliance partnership in action": 8 dated case/news cards (Mastercard, Base, Bybit MiCAR licence, OKX PoR…)
  5. "End-to-end protection for digital assets" + "Our methodologies"
  6. Leadership team: 7 named execs with X/LinkedIn
  7. Standards bodies / MoUs
  8. Newsletter "Hacken Pulse" (two opt-in tracks: Security Pulse, Compliance Pulse)
  9. Final CTA "Let's discuss your next audit or compliance milestone"
  10. Footer grouped Audits / Extended Coverage / Compliance & Advisory, plus an ecosystem and language list and an ISO 27001:2022 badge
- **Visual:** Next.js; PP Mori font; light pastel card backgrounds (#e2e6f4, #fff5dd, #ffdce0, #f0e5f8); some video.
- **Strong:**
  - A gated research report as a top-bar lead magnet.
  - Lifecycle framing of services.
  - Verb-specific CTAs per service.
  - Named leadership.
  - Segmented newsletter.
  - Compliance frameworks named explicitly (MiCA, DORA, VARA, CCSS).
- **Weak:** busy. Many products and brands (HackenProof, DualDefense, Extractor, CORE3, $HAI) fragment the story.

### 6. ChainSafe — https://chainsafe.io (premium open-source R&D)
- **Hero:** "Open source, shared future" / "ChainSafe builds open source, protocol-agnostic infrastructure and tools…". CTA: "Build with us".
- **Nav (flat):** Protocol, Infrastructure, Co-Development, About Us, Gaming (external), Blog (external), Build with us, and a "New: Canton Development Services" flag.
- **Homepage order:**
  1. 3 pillars: Protocol / Infrastructure / Co-Development
  2. About 25 ecosystem partner logos (EF, Polkadot, Filecoin, Optimism, Celestia, Aztec, Lido…)
  3. "BUILDING protocols, powering ecosystems": client product cards (Lodestar, Forest, Gossamer, OP-Supervisor, R&D)
  4. "Expert Builders, Proven Operators": infra list plus staking networks, CTAs "Build with us" / "Stake with us"
  5. "Any Challenge, Any chain" co-development with 3 productised Canton offerings (ERC-20 middleware, DAML Autopilot "3,600+ compiler-validated patterns", x402 Facilitator)
  6. Contact form "LET'S SHIP THE FUTURE OF WEB3" (Full Name, Email, Message)
  7. Community / socials
  8. Footer
- **Visual:**
  - Stack: Webflow.
  - Palette: neon yellow #feff48 on near-black #0a0901, with an electric blue #4e33ff.
  - Type: Helvetica-style grotesk, uppercase display.
  - Motion: about 10 video references.
  - Feel: bold, brutalist, loud.
- **Strong:**
  - Distinctive brand; instantly recognisable.
  - "Co-Development" is a nice name for embedded engineering.
  - Productised accelerators.
- **Weak:**
  - No stats, testimonials or case-study metrics on the homepage.
  - The contact form has 3 fields and no qualification.

### 7. 10Clouds — https://www.10clouds.com (mid-tier, excellent conversion mechanics; pivoted to AI + fintech)
- **Hero:** "We help build agentic financial institutions" / "From credit automation to agentic commerce, we deliver production-ready AI for banks, insurers and fintechs."
  - CTA: "Get in touch".
  - Partner logos inside the hero: Anthropic, Mastercard, PZU.
- **Nav:**
  - Sectors: GenAI, Banking, Payments, Insurance, Factoring, Leasing, FinTech, Blockchain.
  - Services: AI Platform, Agentic Commerce, AI Automation, Company GPT, AI Agents & Assistants, AI Implementation.
  - Also: Clients, How we work, Blog, Contact.
- **Homepage order (15):**
  1. Sectors (8 cards)
  2. Recommended case studies
  3. Services (6)
  4. Insights (3)
  5. Clients tiered Enterprises / Scaleups / Startups
  6. Stats: "4.9/5 Clutch", "17 years", "120+ AI deployments", "72 NPS"
  7. "Results in Production" metric tiles: "79% FASTER PER CASE", "96 SUS SCORE", "5,000 TENDERS SCREENED / DAY", "6M+ PRINTS SOLD"
  8. Partnerships: Anthropic "Select partner in the Claude Partner Network Services Track", Mastercard Start Path
  9. "Four Ways In" (entry offers, including "Claude Code & Cowork Training")
  10. 8 testimonials with a Clutch badge "4.9 / 5 · 95 reviews"
  11. Awards: FT Europe's Fastest Growing, Deloitte CEE Fast 50
  12. Leadership (5 named, LinkedIn)
  13. Insights
  14. Client interviews
  15. CTA "Put AI to work in your business."
- **Contact form ("Start your project with 10Clouds!"):**
  - Fields: Full name*, Business e-mail*, Phone*, "How did you hear about us?"*, "Tell us more about the project"*.
  - Budget*: €25–50K / €50–100K / €100–200K / €200–500K / €500K+ / still exploring.
  - Timeline*: ASAP 1–2 mo / 3–6 / 6–12 / 12+ / unsure.
  - Checkboxes: Terms; "Sign NDA first"; newsletter.
  - Promise: "We'll get back to you within 1 working day."
  - IP / confidentiality statement.
- **Visual:**
  - Stack: Next.js.
  - Type: Fustat.
  - Palette: deep navy #081735, dark teal #29555e, sage #d3e3d8, slate #526373.
  - Feel: calm fintech.
- **Strong:**
  - Outcome metric tiles.
  - "Four Ways In" entry offers.
  - A budget, timeline and NDA-first form.
  - SLA on reply.
  - Named leaders.
  - Third-party ratings.
- **Weak:**
  - Blockchain is now buried as one sector.
  - Homepage repeats blocks (insights ×2, cases ×3).

### 8. MetaLamp — https://metalamp.io (mid-tier Web3 studio)
- **Hero:** "Building Web3 Solutions for Startups and Big Tech" / "A leading Web3 development studio you can trust".
  - CTAs: "Get in touch" (opens Calendly) + "Contact Us" (form modal).
- **Nav:**
  - Cases.
  - Services: dApps, Smart Contracts, Tokens, Design, Consulting, AI.
  - Expertise, in two groups: Solutions (TMA, DEX, RWA, Prediction Market, Wallet) and Domains (DeFi, NFT, GameFi, Omnichain, ZKP).
  - About (Team, Vacancies), Partners, Education, Magazine.
- **Homepage order:**
  1. Chain logo grid (about 20 chains)
  2. 6 service cards plus "Need something else? Tell us about your problem"
  3. 6 cases, each showing metric + engagement type (Outstaffing / Outsourcing) + stack. Example: Gearbox "$31.6M TVL, Outstaffing, TypeScript+React"
  4. 9 testimonials with headshots
  5. 9 award badges (Clutch, GoodFirms, DesignRush)
  6. Team-at-events photos (Token2049, Consensus HK, Binance BW)
  7. Tech stack by category, including an AI row (Mastra, Eliza, Claude Code, Cursor, RAG)
  8. CTA "Time to get involved": a named person ("Message Yana now" via Telegram/WhatsApp) + Calendly + form
  9. Blog with author and role bylines
  10. Newsletter via Telegram
- **Form fields:** Name, Email, Phone, Telegram nickname, "How we can help you", privacy checkbox.
- **Visual:** Open Sans; navy #080f2b + orange #ffa300; Swiper carousels; generic.
- **Strong:**
  - A human point of contact (named BD person) on Telegram/WhatsApp/Calendly: crypto-native buyers expect this.
  - Engagement model shown per case.
  - Technical deep-dive articles (Reserve, CoW, UMA).
- **Weak:** template-like design; award-badge clutter; a weak "you can trust" claim.

### 9. Rumble Fish — https://www.rumblefish.dev (mid-tier dev shop)
- **Hero:** "development tailored to your needs!" / "Rumble Fish helps entrepreneurs build and launch bespoke digital products…". CTA: "Book a free consultation".
- **Nav:** Services (13 in the dropdown: Blockchain, Web3 product, Smart Contracts, DeFi, Fintech, AI product, dApp, Crypto wallet…), Case studies, Careers, Blog, About, Contact.
- **Homepage order:**
  1. Client logos (MakerDAO, Tari, Merkl…)
  2. Featured launch "Soroban Scan is live on mainnet!"
  3. Who we are: "40 devs", "9 years", "57 projects", team photos
  4. 15+ services list
  5. 5 testimonials with headshots
  6. Latest case (Merkl → Stellar, "4 weeks", services tagged)
  7. Case grid (5)
  8. Blog (2 long-form SEO posts, 3–4.5k words, e.g. "ZKP Development Companies in 2026")
  9. Contact form (Full Name, Business Email, Message, opt-in)
- **Other conversion and trust:** Clutch "Top Blockchain Company Poland 2026" badges in the footer; a Telegram chat link.
- **Case studies:** filterable by service; a carousel.
- **Visual:** Next.js; Satoshi + Clash Display; light #fbfcfd with dark #272e35 / #070e15, blue #1976d2, pink #ec8dad.
- **Strong:** long-form SEO articles; engagement duration shown on cases.
- **Weak:**
  - A generic hero; "999 passion for coding" is a gimmick stat.
  - Service sprawl (16 SEO landing pages).
  - Few outcome metrics.

### 10. Zeeve — https://www.zeeve.io (enterprise infra platform + advisory)
- **Hero:** rotating H1s, including "Production Blockchain Infrastructure for Banks and Fintechs", "Privacy Infrastructure for Regulated Digital Asset Systems", "Launch Bank-Native Tokenized Deposits…".
- **Nav:** a mega-menu with 6 items.
  - Solutions: Industries (Banking & Capital Markets, Fintech & Payments, Telecom, ESG) plus Use Cases (Tokenized Funds & RWAs, Stablecoins & CBDCs, Digital Securities, Cross-Border Settlement).
  - Platform.
  - Products (Appchains, RPC & Nodes, Validators, Traceye).
  - Advisory & Engineering.
  - Resources (Blogs, Case Studies, Whitepapers & Reports, Events & Webinars, Docs).
  - Company (Security & Compliance, Partner Ecosystem…).
- **Proof:** "We power 25+ production chains processing 2B+ transactions monthly"; "Reduce settlement times by 90%"; "SOC2 / ISO-aligned operating posture"; partner quotes.
- **CTAs:** many variants ("Talk to an Architect", "Talk to a Privacy Architect", "Request a Demo", "Contact Sales", "Schedule a Call with Zeeve Expert"), plus Login/Signup.
- **Visual:**
  - Stack: WordPress.
  - Type: Poppins.
  - Palette: royal blue #1153ea, navy #183464, pale blue #f1f6ff, orange #ff9653.
  - Motion: heavy Swiper carousels, Lottie.
  - The page weighs 2.7 MB of HTML.
- **Strong:** role-specific CTAs ("Talk to an Architect"); industry × use-case matrix.
- **Weak:**
  - "SOC2-/ISO-aligned" is a hedge, not a certification.
  - Heavy page.
  - Generic SaaS look.

### 11. LeewayHertz — https://www.leewayhertz.com (volume-tier, SEO machine; now part of The Hackett Group)
- **Hero:** "AI development company enabling innovation and rapid development". CTA: "Get in touch".
- **Mega-menu:** AI Products, Services (GenAI, AI/ML, Data Eng, Web3, Blockchain, Hire Developers…), Industries, Insights, Work, About, Contact.
- **Homepage order:**
  1. Logos
  2. Stats
  3. About
  4. 6 services
  5. Industries
  6. Portfolio
  7. Testimonials (Siemens, O'Reilly)
  8. "As Mentioned in" press
  9. News (Hackett acquisition, Forbes, Gartner)
  10. Engagement models (Dedicated Team / Team Extension / Project-based)
  11. Contact form
  12. Blog
- **Form fields:** First, Last, Company Email, Company Name, Job Title (all required), Phone, Country, State (conditional), Comments*. Note under the form: **"We will send you an NDA before we talk."**
- **Strong:**
  - Engagement-model block.
  - The NDA promise.
  - A huge pillar-article library ("Agentic RAG: What it is…").
- **Weak:** commodity feel; everything-for-everyone; low design distinctiveness.

### 12. Trail of Bits — https://www.trailofbits.com (reference: research-led authority; partial fetch)
- **Hero:** "Solving Difficult Security Problems" / "Everything we publish lives here: security reviews, research, open-source tools, and talks."
  - CTAs: "Browse services", "Explore the work", "Read the blog".
- **Stats bar:** "946 Publications", "620 Audits", "200+ open-source repos", "since 2012".
- **Lesson:** a publications-as-proof model. Their body of work is the portfolio.

---

## Part B — Synthesis

### B1. Table stakes (seen on essentially all sites; missing any of these reads as amateur)
1. **Hero:**
   - A one-line category claim plus a one-sentence "who for / what outcome".
   - Two CTAs: primary "Talk to…/Contact" and secondary "Explore solutions/work".
2. **A logo wall directly under or near the hero.** Named tier-1 protocols or institutions: Nethermind 35+, Sigma 25, ChainSafe 25, OZ 12 curated.
3. **Quantified proof bar.** Examples:
   - Years in business (Sigma 2016, Hacken 2017, 10Clouds 17y).
   - Volume (400+ audits, 57 projects).
   - Value (TVL protected, $ secured).
   - Team size.
4. **Services grouped into 3–6 pillars**, each with a one-line descriptor, linking to dedicated service pages.
5. **Case studies with filters** (by domain, chain or tech) and **at least one metric per card**.
6. **Testimonials with name, title and company** (and headshots on the studio-tier sites).
7. **Blog / Insights** surfaced on the homepage (3–4 latest).
8. **Repeated CTA:** a final CTA band plus a nav button (the premium sites use one consistent label).
9. **Mega-footer:** services, company, resources, socials (X, LinkedIn, GitHub; Telegram on crypto-native studios), legal.
10. **Chain / stack coverage list:** logos of the chains supported (MetaLamp, Hacken, OZ).

### B2. Differentiators of the very best (Nethermind, OpenZeppelin, Moonsong, Sigma Prime, Hacken)
1. **Segmenting by buyer, not by capability.**
   - OZ "Solutions": Banks / Asset Managers / Tokenization Platforms / DeFi / Regulators.
   - Moonsong: 4 outcome-named solutions.
   - Zeeve: an industry × use-case matrix.
2. **Outcome-named use cases** ("Stablecoins & Tokenized Deposits", "Payments, Settlement & Cross-Border") rather than tech nouns ("smart contract development").
3. **Proof that cannot be faked:**
   - Public reports linked to GitHub (Sigma).
   - EIP / protocol contributions (Nethermind).
   - "9 of top 10 stablecoins" (OZ).
   - Named end-institutions (UBS, Deutsche Bank, WisdomTree).
   - Live counters (OZ total value transferred).
4. **Standard case template with metrics and service tags.**
   - Challenge → Approach → Results → quote → "Services used" → related research → CTA.
   - Sigma adds "By the numbers" and "What we reviewed". Moonsong adds footnotes and sources.
5. **Service pages written for engineers.** Nethermind's structure: domains / technical approach / **failure modes** / **when teams engage us** / selected work / research.
6. **A lifecycle or process narrative:**
   - OZ Architect → Build → Secure → Support.
   - Hacken Build secure → Prove compliance → Operate.
   - Moonsong Discovery → … → Delivery, and Define / Build / Launch.
7. **Productised retainers and entry offers:** OZ Continuous Security Program; Sigma "Rolling Commit Reviews" and "Integrated Security Engineer"; 10Clouds "Four Ways In"; ChainSafe Canton accelerators.
8. **Institutional compliance signalling:**
   - OZ lists SOC 2 Type II, standards bodies and regulators engaged.
   - Hacken shows ISO 27001 and names MiCA / DORA / VARA / CCSS.
9. **Friction-reducing contact UX:**
   - Moonsong "What to expect: 20-minute intro".
   - 10Clouds "reply within 1 working day" and "Sign NDA first".
   - LeewayHertz "We will send you an NDA before we talk".
   - MetaLamp puts a named BD person on Telegram/WhatsApp/Calendly.
10. **Research as a lead magnet:** Hacken's quarterly report in the top bar; OZ "The Onchain Brief"; Hacken's two-track newsletter.
11. **Named leadership with LinkedIn and X** (Hacken, 10Clouds). This is a senior-led signal.
12. **Distinct type systems:** a display face plus a mono or technical accent (Moonsong Archivo + IBM Plex Mono; Nethermind Exo + DM Sans; Rumble Fish Clash Display + Satoshi). Palettes are restrained (1 dark, 1 light, 1 accent), and motion is subtle (video loops, Lottie, tickers), not 3D-heavy. **No studied site ships WebGL/Three.js or Spline on the homepage.**

### B3. Gaps / opportunities for Hashmark Labs
1. **No one credibly spans AI + blockchain + fintech *and* go-to-market.**
   - Moonsong does AI + blockchain for finance but has no GTM, tokenomics or BD.
   - Nethermind lists "AI Agents & Infrastructure" as one card among many.
   - Studios with growth or tokenomics services (MetaLamp tokens) look commodity.

   Hashmark's claim to own is **"engineering + launch" under one senior team**: protocol → tokenomics → growth → partnerships.
2. **"Senior-led" is claimed nowhere with proof.** Only Hacken and 10Clouds show leaders, and no one shows *who actually works on your project*. Opportunity:
   - Principal bios with prior shipped systems.
   - "You work directly with the partners" guarantee.
   - A team-to-project ratio.
3. **Pricing and engagement transparency is absent from every premium site.** Only 10Clouds reveals budget bands, and only inside the form. Opportunity:
   - Publish engagement models with starting ranges or durations (Sprint / Build / Embedded / Retainer), as LeewayHertz and 10Clouds hint at.
   - Publish a clear scoping-first process.
4. **Case metrics are mostly security counts or vanity numbers.** Few sites show business outcomes such as volume processed, latency, TVL at launch, time-to-mainnet, or cost saved. Opportunity: every case carries 3 hard numbers plus stack, duration and team size (MetaLamp shows engagement type; Rumble Fish shows duration; no one shows all together).
5. **AI-native proof is thin.** Sites *say* AI (Nethermind AuditAgent, OZ "scaled by OpenZeppelin AI", 10Clouds) but rarely show an agent or RAG system's architecture or evals. Opportunity:
   - Architecture diagrams.
   - Eval metrics (accuracy, latency, cost per query).
   - An interactive demo, e.g. an on-site RAG assistant over Hashmark's own case studies and research.
6. **Contact forms are either too thin (ChainSafe: 3 fields) or too long (LeewayHertz: 9+).** No site offers routing by practice *plus* a budget band, timeline, NDA option, Telegram handle and an instant calendar slot together.
7. **Interactive or live proof is rare.** Only OZ's counter and Sigma's public reports qualify. Opportunity: lightweight, verifiable live elements, e.g.:
   - "Contracts we've shipped" with explorer links.
   - A GitHub activity strip.
   - Links to audited deployments.
8. **Regional and international trust basics are rarely addressed:** time zones, jurisdictions, entity details, working languages, data handling. OZ and Hacken do compliance badges; nobody states delivery-model logistics. Short "How we work across time zones / IP ownership / NDA / payment in fiat or stablecoins" FAQs would stand out.
9. **Visual whitespace in the category.** The field splits into "navy + orange/blue corporate" (Nethermind, Zeeve, MetaLamp, 10Clouds), "brutalist neon" (ChainSafe) and "editorial cream" (Moonsong). A precise, engineering-grade system (dark and light modes, a monospace data layer, restrained 2D motion diagrams of real architectures) is differentiated without adopting 3D gimmicks that no leader uses.

### B4. Recommended homepage section order for Hashmark Labs
1. **Announcement bar (optional).** Latest research report or launch, e.g. "State of RWA Infra 2026 — get the report".
2. **Hero:**
   - Category claim, e.g. "Senior engineers for onchain finance and AI systems".
   - Sub-line naming the outcome and the buyers (protocols, fintechs, institutions).
   - CTAs: primary "Book a scoping call", secondary "See our work".
   - Inline proof line with 3 stats: years, systems shipped, value or volume handled.
3. **Logo wall.** Clients plus the ecosystems and chains shipped on (curated to about 12, grayscale, ticker).
4. **What we build, as outcome-named solutions (6 cards).** Protocol & L1/L2 Engineering · DeFi & DEX / Trading Infrastructure · RWA & Tokenization · AI Agents & RAG · Data Platforms · Fintech Integration. Each card has a one-line outcome and a proof chip.
5. **"Beyond the build": the go-to-market practices.** Product & Tokenomics, Growth & Marketing, BD & Partnerships, framed as the engineering → launch lifecycle (Design → Build → Secure → Launch → Scale). This is Hashmark's differentiator and deserves its own band.
6. **Selected work.** 3 featured cases, each with 3 hard metrics, stack, duration and team size; "All case studies →".
7. **Senior-led proof.** Principals and leads with photos, prior systems shipped, and LinkedIn/X/GitHub links. Include a "You work with the people you meet" promise.
8. **Testimonials.** 2–3 with name, title, company and photo; carousel optional.
9. **How we engage.** Engagement models (Scoping Sprint → Build Squad → Embedded Team → Retainer / Continuous Engineering), each with typical duration or starting range, plus a 4–5 step process.
10. **Security and compliance posture.** Audit partners, internal review practice, testing and formal-methods tooling, NDA / IP assignment, data handling; badges only if real.
11. **Research and insights.** 3 latest technical deep-dives plus a newsletter or report opt-in.
12. **FAQ (6–8).** Engagement, pricing approach, time zones, IP, payment (fiat or stablecoin), security, how fast we start.
13. **Final CTA band.** "Tell us what you're building" with a short form or calendar embed, a named contact with Telegram, and "Reply within 1 business day".
14. **Mega-footer.** Solutions, Practices, Work, Research, Company, Legal, socials (X, LinkedIn, GitHub, Telegram), entity and location.

### B4b. Recommended page map
- `/` Home
- `/solutions/` (hub), with one page each, using the Nethermind structure (Overview · What we build · Technical approach · Failure modes we prevent · When to engage us · Selected work · Related research · CTA):
  - `/solutions/protocol-engineering`
  - `/solutions/defi`
  - `/solutions/dex-trading-infrastructure`
  - `/solutions/rwa-tokenization`
  - `/solutions/ai-agents-rag`
  - `/solutions/data-platforms`
  - `/solutions/fintech`
- `/practices/` (hub): `/practices/product-tokenomics`, `/practices/growth-marketing`, `/practices/bd-partnerships`
- `/industries/` (optional, OZ-style): protocols & L1/L2s · DeFi · exchanges & trading firms · fintechs & banks · asset managers / RWA issuers · AI-first companies
- `/work/`, filterable by solution, chain and industry
  - `/work/[slug]` template: At a glance (client, industry, duration, team, stack, chains) → Challenge → Approach / architecture diagram → Results (3 metrics) → Quote → Services used → Related research → CTA
- `/how-we-work` (engagement models, process, pricing approach, security, IP, NDA, time zones)
- `/about` (story, principals, team, values, locations) and `/about/team`
- `/research/` (blog + reports + newsletter): `/research/[slug]`, `/research/reports/[slug]` (gated PDF)
- `/careers`
- `/contact` (form + calendar + direct channels + what to expect)
- `/security` or `/trust` (security practices, NDA, data handling, compliance)
- Legal: `/privacy`, `/terms`, `/cookies`
- Utility: `/brand-kit` (seen on OZ, Moonsong, ChainSafe, Hacken)

### B5. Recommended contact form fields
Target 7 visible fields plus optional extras, in a two-step flow.

**Step 1 (required):**
1. Full name*
2. Work email*
3. Company / project*
4. Your role* (dropdown): Founder/CEO · CTO/Engineering lead · Product · Investor/Fund · Institution (bank, asset manager) · Other
5. What do you need?* (multi-select, mirrors the IA): Protocol / L1-L2 engineering · DeFi · DEX / trading infra · RWA / tokenization · AI agents / RAG · Data platform · Product & tokenomics · Growth & marketing · BD & partnerships · Not sure yet
6. Tell us what you're building* (textarea, with the prompt "stage, chain(s), what 'done' looks like")

**Step 2 (qualifying, required but quick):**

7. Budget range* (USD): <$25k · $25–75k · $75–150k · $150–300k · $300k+ · Not defined yet
8. Timeline*: ASAP (<1 mo) · 1–3 mo · 3–6 mo · 6+ mo · Exploring

**Optional fields:**
- Stage: Idea / Pre-launch / Live
- Telegram handle
- Company website
- "How did you hear about us?"
- Checkbox: "Send me an NDA before the call"
- Newsletter opt-in (unticked)
- Privacy consent*

**Post-submit:** offer an immediate calendar slot (Cal.com / Calendly) and show "What happens next: reply within 1 business day → 30-min scoping call with a principal → written proposal within X days".

**Always visible beside the form:**
- A direct email.
- A named BD contact with Telegram (MetaLamp pattern).
- Office / time-zone coverage.
