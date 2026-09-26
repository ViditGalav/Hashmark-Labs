// The four practices. Source: _docs/01-CONTENT-SOURCE-OF-TRUTH.md §6–17 (verbatim from decks).

export type TitledItem = { title: string; body: string };
export type FrameworkStep = { title: string; do: string; measure: string[] };
export type MeasureGroup = { kicker: string; title: string; items: string[] };

export type Practice = {
  slug: "engineering" | "product-tokenomics" | "growth" | "bd-partnerships";
  index: string;
  name: string;
  navLabel: string;
  summary: string;
  accent: "pink" | "violet" | "teal" | "indigo";
  hero: { eyebrow: string; title: string; emphasis: string; lead: string };
  meta: { title: string; description: string };
  position: { title: string; points: TitledItem[] };
  statsTitle: string;
  statBodies: [string, string, string, string];
  statLabels?: [string, string, string, string];
  problem?: { title: string; rows: { title: string; wrong: string; instead: string }[] };
  services: { title: string; items: TitledItem[]; also: string[] };
  framework?: { eyebrow: string; title: string; steps: FrameworkStep[]; note: string };
  process: { title: string; steps: TitledItem[]; rituals: string[] };
  measure?: { eyebrow: string; title: string; lead: string; groups: MeasureGroup[] };
  audience?: { eyebrow: string; title: string; items: TitledItem[]; note?: string };
  principles: { title: string; zero: TitledItem; items: TitledItem[] };
  team?: { title: string; lead: string; roles: TitledItem[]; backedBy: string };
  work:
    | { kind: "cases"; title: string; slugs: string[]; note?: string }
    | { kind: "in-preparation"; title: string; slots: { label: string; body: string }[]; note: string };
  why: { title: string; items: TitledItem[] };
  engagement: { title: string; items: TitledItem[]; note: string; footer: string[] };
  partOf: { title: string; emphasis: string };
  closing: { title: string; emphasis: string; lead: string; cta: string };
};

export const engineering: Practice = {
  slug: "engineering",
  index: "01",
  name: "Engineering",
  navLabel: "Engineering",
  summary:
    "AI-integrated systems, protocol engineering, DeFi, trading infrastructure, data platforms and fintech rails — architected and built by senior engineers.",
  accent: "pink",
  hero: {
    eyebrow: "Engineering practice",
    title: "Engineering the systems",
    emphasis: "others can't.",
    lead: "Senior-led AI, blockchain and full-stack engineering — architecting intelligent decentralised systems, built for scale, designed for trust, delivered globally.",
  },
  meta: {
    title: "Engineering — AI, blockchain & fintech systems",
    description:
      "Senior-led AI, blockchain and full-stack engineering: DeFi protocols, trading infrastructure, data intelligence, fintech rails and RWA — from architecture to mainnet and scale.",
  },
  position: {
    title: "We don't sell developers. We sell architecture, protocol expertise and senior execution.",
    points: [
      { title: "Before decisions, not after", body: "We join at the architecture and decision stage, where technical choices determine everything that follows." },
      { title: "Accountable end to end", body: "We own technical delivery across architecture, engineering, testing, deployment and scale." },
      { title: "Senior hands only", body: "The architects you meet are the engineers who build. No hand-offs to junior teams." },
    ],
  },
  statsTitle: "Proof, not promises.",
  statBodies: [
    "Across wallets, DeFi, trading, identity, RWA and infrastructure — for clients worldwide.",
    "Across AI-integrated DeFi, cross-chain protocols, fintech rails and data platforms.",
    "Production systems from prediction markets to real-world asset custody.",
    "A deliberate ceiling, so every client gets dedicated senior attention.",
  ],
  services: {
    title: "Where we go deepest.",
    items: [
      { title: "AI-Integrated Systems", body: "LLM agents, RAG, agentic workflows and on-chain + AI hybrid architectures" },
      { title: "DeFi & Financial Protocols", body: "AMMs, perps, lending, staking, yield engines and tokenomics design" },
      { title: "DEX & Trading Infrastructure", body: "Matching engines, hybrid liquidity routing and professional trading terminals" },
      { title: "Market Intelligence & Data", body: "Prediction-market intelligence, cross-venue analytics, terabyte-scale pipelines" },
      { title: "FinTech, Payments & Stablecoins", body: "Payment rails, multi-asset wallets, ledgers, settlement and stablecoin rails" },
      { title: "RWA & Tokenization", body: "Real estate, commodities, collectibles and ESG asset platforms" },
    ],
    also: ["Blockchain infrastructure", "Wallets, identity & interop", "Gaming & digital assets"],
  },
  process: {
    title: "Senior-led. Structured. Transparent.",
    steps: [
      { title: "Intake & context", body: "Vision, roadmap, documentation, codebase, constraints and business objectives — absorbed upfront." },
      { title: "Discovery & architecture", body: "Research, system design, protocol modelling, security and AI/data planning." },
      { title: "Execution", body: "Code-first delivery, weekly milestones, continuous communication and live progress visibility." },
      { title: "QA, security & launch", body: "Testing, audits, deployment, production handover and post-launch technical support." },
    ],
    rituals: ["Weekly deliverables", "Live progress visibility", "Direct engineer access"],
  },
  audience: {
    eyebrow: "Who we work with",
    title: "From the first architecture decision to production, mainnet and scale.",
    items: [
      { title: "Funded startups & founders", body: "" },
      { title: "Protocols & DAOs", body: "" },
      { title: "FinTech & financial platforms", body: "" },
      { title: "AI & data companies", body: "" },
      { title: "Enterprises & trade platforms", body: "" },
    ],
  },
  principles: {
    title: "Quality over quantity — by design.",
    zero: {
      title: "Junior-only deliveries.",
      body: "Every engagement is led, architected and built by senior engineers — with dedicated attention and minimal context switching.",
    },
    items: [
      { title: "Security & correctness", body: "Especially in cryptography and value-bearing code, where mistakes are irreversible." },
      { title: "Maintainable architectures", body: "Clear boundaries and minimal complexity your team can own after us." },
      { title: "Predictable delivery", body: "A week-by-week plan with visible progress — no black boxes." },
      { title: "Limited concurrency", body: "We cap concurrent engagements so each gets dedicated senior engineers." },
    ],
  },
  work: {
    kind: "cases",
    title: "Live systems, in production.",
    slugs: ["assymetrix", "fincruse-crusex", "goldpesa", "invaria", "foreon-network"],
  },
  why: {
    title: "Evidence, not adjectives.",
    items: [
      { title: "Protocol-level thinking", body: "On-chain order books, validators and tokenomics — Foreon, Goldpesa." },
      { title: "Financial infrastructure", body: "Matching engines and double-entry ledgers — Fincruse / CruseX." },
      { title: "Data infrastructure at scale", body: "Multi-terabyte, real-time pipelines — Assymetrix." },
      { title: "AI + blockchain convergence", body: "AI risk engines with on-chain verification — INVARIA." },
      { title: "Senior engineers from day one", body: "The architects in the first call build the system." },
      { title: "Web3-native execution", body: "Shipped on Ethereum, Solana, Cardano, Polygon and more." },
      { title: "Security-first engineering", body: "Correctness-first design for cryptography and value-bearing code." },
      { title: "Long-term partnership", body: "From architecture to post-launch advisory and scale." },
    ],
  },
  engagement: {
    title: "Flexible models, scoped to the problem.",
    items: [
      { title: "Dedicated engineering", body: "A senior team embedded in your roadmap for the long run." },
      { title: "Project-based delivery", body: "Defined scope from architecture to production launch." },
      { title: "Architecture & advisory", body: "System design, technical due diligence and CTO-level guidance." },
      { title: "Protocol engineering", body: "Smart contracts, on-chain mechanics and audit readiness." },
      { title: "Long-term partnership", body: "Ongoing ownership through scale, maintenance and evolution." },
    ],
    note: "Commercial terms are scoped after technical discovery — to complexity, delivery requirements and engagement model.",
    footer: ["Weekly visibility & direct engineer access", "USA · Europe · APAC · Middle East", "Lead architect across time zones"],
  },
  partOf: { title: "Engineering, at the core of", emphasis: "every practice." },
  closing: {
    title: "Let's build",
    emphasis: "what's next.",
    lead: "Building something technically complex and looking for a team that thinks at the protocol level? Let's discuss the architecture.",
    cta: "Discuss the architecture",
  },
};

export const productTokenomics: Practice = {
  slug: "product-tokenomics",
  index: "04",
  name: "Product & Tokenomics",
  navLabel: "Product & Tokenomics",
  summary:
    "Product strategy, tokenomics and go-to-market architecture for Web3, AI and fintech ventures — designed by the engineers who build protocols.",
  accent: "violet",
  hero: {
    eyebrow: "Advisory · Tokenomics",
    title: "From idea to",
    emphasis: "working economy.",
    lead: "Product strategy, tokenomics and go-to-market architecture for Web3, AI and fintech ventures — designed by the engineers who build protocols.",
  },
  meta: {
    title: "Product Strategy & Tokenomics Design",
    description:
      "Tokenomics, incentive design, governance and Web3 product strategy — stress-tested before launch and designed by engineers who have built production protocols.",
  },
  position: {
    title: "Most tokenomics is designed in a spreadsheet. Ours is designed by people who have built the protocols.",
    points: [
      { title: "Is blockchain justified?", body: "We validate the use case first. If a token does not serve the business, we will tell you." },
      { title: "Economies that survive stress", body: "Incentives, emissions and adversarial behaviour modelled before launch." },
      { title: "Strategy that ships", body: "Every recommendation is buildable — and our engineering team can build it." },
    ],
  },
  statsTitle: "Strategy grounded in what actually ships.",
  statLabels: ["Products delivered", "Years of senior leadership", "Industry verticals", "Clients at a time, max"],
  statBodies: [
    "Wallets, DeFi, trading, identity, RWA and AI — strategy informed by real builds.",
    "Across protocol design, fintech rails and data platforms.",
    "Pattern recognition across 11 product categories.",
    "Senior architects on every advisory engagement.",
  ],
  problem: {
    title: "Why Web3 products fail before they scale.",
    rows: [
      { title: "Tokens without a job", wrong: "A token added for fundraising, with no utility or value accrual.", instead: "Utility and value-accrual design tied to real product usage and revenue." },
      { title: "Emissions that fund exits", wrong: "Incentives attract mercenary capital that leaves when rewards drop.", instead: "Emission schedules, sinks and vesting modelled against user behaviour." },
      { title: "Roadmaps disconnected from architecture", wrong: "Promises the chosen chain and stack cannot deliver.", instead: "Roadmaps built with architects — sequenced by technical dependency." },
      { title: "UX that loses users at the wallet", wrong: "Onboarding, gas and signing friction kill conversion.", instead: "Onboarding designed around account abstraction and embedded wallets." },
    ],
  },
  services: {
    title: "Strategy from concept to launch.",
    items: [
      { title: "Product Strategy & Roadmap", body: "Use-case validation, positioning, MVP scope and a sequenced roadmap." },
      { title: "Tokenomics & Incentive Design", body: "Utility, supply, emissions, distribution, vesting, sinks and value accrual." },
      { title: "Governance & DAO Design", body: "Voting models, treasury policy, delegation and progressive decentralisation." },
      { title: "Web3 UX Strategy", body: "Onboarding, wallet flows, account abstraction and conversion design." },
      { title: "Architecture & Feasibility", body: "Chain selection, build-vs-integrate decisions and cost-to-build." },
      { title: "Launch & GTM Architecture", body: "TGE sequencing, liquidity planning and launch readiness." },
    ],
    also: ["Technical due diligence", "Litepaper & whitepaper input", "Fractional CPO"],
  },
  framework: {
    eyebrow: "Tokenomics framework",
    title: "How we design token economies.",
    steps: [
      { title: "Utility & value", do: "Define what the token does and how value accrues to holders.", measure: ["Utility map", "Value-accrual paths"] },
      { title: "Supply & emissions", do: "Supply, emission curves and release logic tied to demand.", measure: ["Emission schedule", "Inflation profile"] },
      { title: "Distribution", do: "Allocations, vesting and unlocks across every stakeholder.", measure: ["Allocation table", "Unlock calendar"] },
      { title: "Incentives & sinks", do: "Rewards, fees and sinks that balance participation and pressure.", measure: ["Net emissions", "Fee flows"] },
      { title: "Stress-testing", do: "Scenario and adversarial simulation before anything ships.", measure: ["Scenario outcomes", "Failure thresholds"] },
    ],
    note: "Implemented in production: fee-routing tokenomics for Goldpesa (GPO/GPX liquidity protocols).",
  },
  process: {
    title: "Discover. Validate. Design. Stress-test.",
    steps: [
      { title: "Discover", body: "Business model, market, users, competitors and constraints — absorbed upfront." },
      { title: "Validate", body: "Use-case, token and chain decisions tested against the business case." },
      { title: "Design", body: "Product roadmap, token economy, governance and architecture blueprint." },
      { title: "Stress-test & hand off", body: "Simulation, review and a build-ready specification — or we build it." },
    ],
    rituals: ["Weekly working sessions", "Decision log", "Direct architect access"],
  },
  measure: {
    eyebrow: "What you receive",
    title: "Deliverables, not decks.",
    lead: "Every engagement ends with artefacts your team, investors and engineers can use.",
    groups: [
      { kicker: "Strategy", title: "Product strategy", items: ["Strategy memo", "MVP scope & roadmap", "Competitive positioning"] },
      { kicker: "Economy", title: "Token economy", items: ["Tokenomics model", "Scenario simulations", "Token design paper input"] },
      { kicker: "Governance", title: "Governance", items: ["Governance framework", "Treasury policy", "Decentralisation path"] },
      { kicker: "Build", title: "Build readiness", items: ["Architecture blueprint", "Chain & stack decision", "Launch plan"] },
    ],
  },
  audience: {
    eyebrow: "Who it is for",
    title: "Where we add the most value.",
    items: [
      { title: "Pre-token founders", body: "Deciding whether, when and how to launch a token." },
      { title: "Protocols redesigning", body: "Fixing emissions, liquidity or governance that is not working." },
      { title: "Fintech & enterprises", body: "Evaluating blockchain, stablecoins or tokenisation for a real business case." },
      { title: "Investors & funds", body: "Technical and tokenomics due diligence before an investment." },
    ],
    note: "The best time to design an economy is before launch. The second best time is now.",
  },
  principles: {
    title: "Advice you can build on.",
    zero: {
      title: "Tokens recommended for their own sake.",
      body: "We are business-first. If a token, a chain or a DAO does not serve your model, our recommendation will say so.",
    },
    items: [
      { title: "Compliance-aware design", body: "We design alongside your legal counsel. We do not provide legal or securities advice." },
      { title: "Simulate before launch", body: "No economy ships without scenario and adversarial testing." },
      { title: "Buildable by default", body: "Every recommendation is checked against real architecture." },
      { title: "Independent judgement", body: "Our advice is not tied to any chain, exchange or fund." },
    ],
  },
  team: {
    title: "Architects and strategists, together.",
    lead: "Advisory engagements pair product strategy with protocol engineering — so every decision is both commercially sound and buildable.",
    roles: [
      { title: "Engagement lead", body: "Owns the strategy, the decision log and the relationship." },
      { title: "Tokenomics designer", body: "Economy design, modelling and scenario simulation." },
      { title: "Protocol architect", body: "Chain selection, smart-contract architecture and feasibility." },
      { title: "Product & UX strategist", body: "Roadmap, onboarding and conversion design." },
      { title: "Growth advisor", body: "Launch, liquidity and GTM sequencing from our Growth practice." },
    ],
    backedBy: "Led by Vidit Galav, Head of Engineering — with the Hashmark Labs protocol team.",
  },
  work: {
    kind: "cases",
    title: "Economies and protocols we have built.",
    slugs: ["goldpesa", "foreon-network"],
    note: "Also: StreamNFT — staking, rent and loan protocols on Solana and Ethereum, and a senior contribution to ERC-7066 lockable NFTs.",
  },
  why: {
    title: "Why founders choose us for strategy.",
    items: [
      { title: "Designed by builders", body: "Token economies we have implemented run in production." },
      { title: "Strategy and build under one roof", body: "From recommendation to shipped protocol." },
      { title: "Business-first honesty", body: "We say no to tokens that do not serve the business." },
      { title: "Stress-tested economies", body: "Scenario and adversarial modelling before launch." },
      { title: "Protocol-level depth", body: "EVM, Solana, Cardano and more." },
      { title: "Senior architects only", body: "The people advising you design real systems." },
      { title: "GTM-aware design", body: "Pairs with our Growth and BD practices for launch." },
      { title: "Long-term partnership", body: "From first design to governance evolution." },
    ],
  },
  engagement: {
    title: "Flexible models, scoped to the decision.",
    items: [
      { title: "Strategy sprint", body: "A focused engagement to answer a defined product or token question." },
      { title: "Tokenomics engagement", body: "Full economy design, modelling and simulation." },
      { title: "Fractional CPO", body: "Senior product leadership embedded in your team." },
      { title: "Strategy + build", body: "Advisory that flows directly into Hashmark engineering." },
    ],
    note: "Commercial terms are scoped after discovery — to the decisions, depth and deliverables required.",
    footer: ["Senior-led from day one", "Weekly reporting", "USA · Europe · APAC · Middle East"],
  },
  partOf: { title: "Strategy, delivered by", emphasis: "the people who build." },
  closing: {
    title: "Let's design",
    emphasis: "what lasts.",
    lead: "Planning a token, redesigning an economy or defining a Web3 product? Let's start with a strategy session.",
    cta: "Request a strategy session",
  },
};

export const growth: Practice = {
  slug: "growth",
  index: "02",
  name: "Growth & Marketing",
  navLabel: "Growth & Marketing",
  summary:
    "Full-funnel marketing, community and brand for Web3, AI and fintech products — led by people who understand how your product actually works.",
  accent: "teal",
  hero: {
    eyebrow: "Growth · Marketing",
    title: "Growth for products that are",
    emphasis: "hard to explain.",
    lead: "Full-funnel marketing, community and brand for Web3, AI and fintech products — led by people who understand how your product actually works.",
  },
  meta: {
    title: "Web3 Growth & Marketing",
    description:
      "Engineering-literate positioning, content, community, disclosed KOL campaigns, PR and performance acquisition — measured on active users, funded wallets and revenue.",
  },
  position: {
    title: "Most crypto marketing sells noise. We sell understanding — and the growth that follows it.",
    points: [
      { title: "Engineering-literate messaging", body: "We read the whitepaper and the code. Every claim we publish survives technical scrutiny." },
      { title: "Community before campaigns", body: "Durable holders, users and contributors — not rented attention that leaves after the airdrop." },
      { title: "Measured, not guessed", body: "Every channel is tied to acquisition, activation and retention — on-chain where possible." },
    ],
  },
  statsTitle: "Product literacy is our unfair advantage.",
  statLabels: ["Products delivered", "Years in the ecosystem", "Industry verticals", "Clients at a time, max"],
  statBodies: [
    "Across DeFi, trading, identity, RWA and AI — we know what makes users adopt.",
    "Across market cycles, narratives and shifting user behaviour.",
    "Category context from prediction markets to real-world assets.",
    "Senior strategists on every account — never a junior-run retainer.",
  ],
  problem: {
    title: "Why Web3 growth usually stalls.",
    rows: [
      { title: "The narrative outruns the product", wrong: "Claims the product cannot back up erode trust at the first test.", instead: "Positioning built from the product itself — mechanics, differentiation and proof." },
      { title: "Rented attention", wrong: "Paid KOL spikes and airdrop farmers that disappear in weeks.", instead: "Community programmes designed for retention, contribution and advocacy." },
      { title: "Vanity metrics", wrong: "Followers and impressions reported while wallets and revenue stay flat.", instead: "Reporting on active users, funded wallets, TVL and cost per activated user." },
      { title: "Fragmented vendors", wrong: "Five agencies, five dashboards and nobody who owns the outcome.", instead: "One accountable growth partner owning the funnel end to end." },
    ],
  },
  services: {
    title: "Full-funnel Web3 growth.",
    items: [
      { title: "Positioning & Narrative", body: "Category design, messaging architecture and a narrative your product can defend." },
      { title: "Content & Thought Leadership", body: "Technical explainers, research, founder voice, docs-to-content and SEO." },
      { title: "Community Building", body: "Discord, Telegram and X programmes, moderation and ambassador systems." },
      { title: "KOL & Influencer Campaigns", body: "Vetted, disclosed and tracked creator partnerships measured on outcomes." },
      { title: "PR & Media Relations", body: "Launch, funding and milestone announcements with crypto and tech media." },
      { title: "Performance Acquisition", body: "Paid and organic acquisition with on-chain attribution and conversion work." },
    ],
    also: ["Fractional CMO", "Brand identity", "Analytics & attribution"],
  },
  framework: {
    eyebrow: "Our framework",
    title: "From awareness to on-chain activation.",
    steps: [
      { title: "Awareness", do: "Narrative, PR, KOL and content that earn the first look.", measure: ["Share of voice", "Qualified reach"] },
      { title: "Consideration", do: "Explainers, docs, comparisons and social proof for sceptics.", measure: ["Site engagement", "Waitlist sign-ups"] },
      { title: "Activation", do: "Onboarding flows and incentives that get users to a first transaction.", measure: ["Wallet connects", "First transactions"] },
      { title: "Retention", do: "Community rituals, product updates and loyalty mechanics.", measure: ["D30 retention", "Active members"] },
      { title: "Advocacy", do: "Ambassadors, referrals and contributors who grow the product for you.", measure: ["Referral share", "UGC volume"] },
    ],
    note: "Every stage has an owner, a metric and a weekly number.",
  },
  process: {
    title: "Diagnose. Design. Launch. Compound.",
    steps: [
      { title: "Audit & positioning", body: "Product, market, competitor and community audit — then a positioning your team can repeat." },
      { title: "Growth plan", body: "Channel mix, narrative calendar, budget allocation and the metrics we will be judged on." },
      { title: "Launch & operate", body: "Campaigns, content and community run weekly by senior operators." },
      { title: "Measure & compound", body: "Cut what does not convert, double down on what does, report every week." },
    ],
    rituals: ["Weekly growth report", "Shared dashboard", "Direct strategist access"],
  },
  measure: {
    eyebrow: "What we measure",
    title: "Outcomes, not impressions.",
    lead: "We agree the scorecard before the first campaign goes live.",
    groups: [
      { kicker: "North star", title: "Product outcomes", items: ["Active wallets / users", "Funded accounts or TVL", "Revenue or fee growth"] },
      { kicker: "Acquisition", title: "Efficient growth", items: ["CAC by channel", "Visit → sign-up conversion", "Cost per activated user"] },
      { kicker: "Community", title: "Durable community", items: ["30-day member retention", "Active contributors", "Sentiment and support load"] },
      { kicker: "Brand", title: "Earned authority", items: ["Share of voice", "Search visibility", "Tier-1 media coverage"] },
    ],
  },
  audience: {
    eyebrow: "Launch programmes",
    title: "Built for the moments that matter.",
    items: [
      { title: "Token & TGE launch", body: "Narrative, community readiness, KOL sequencing and launch-week operations." },
      { title: "Mainnet & product launch", body: "Awareness build-up, onboarding campaigns and post-launch retention." },
      { title: "Funding announcement", body: "Story, media outreach and investor-grade narrative around the round." },
      { title: "Market expansion", body: "Localised positioning and community for new regions and languages." },
    ],
    note: "Launch moments are won in the six weeks before them — we plan backwards from the date.",
  },
  principles: {
    title: "Growth you can defend.",
    zero: {
      title: "Bots, fake followers or bought engagement.",
      body: "Every number we report is real. Artificial metrics damage exchange, investor and user trust — so we never use them.",
    },
    items: [
      { title: "Compliance-aware communication", body: "We work alongside your legal counsel. No price predictions, no return promises." },
      { title: "Disclosed partnerships", body: "Every KOL and creator collaboration is disclosed and tracked." },
      { title: "Technical accuracy", body: "Content reviewed against the product — our engineers are one message away." },
      { title: "You own the assets", body: "Channels, audiences, data and content stay with you." },
    ],
  },
  team: {
    title: "A senior growth pod, not a pool.",
    lead: "Every engagement gets a dedicated pod led by a senior growth lead — sized to the stage and scope of your company.",
    roles: [
      { title: "Growth lead", body: "Owns the strategy, the scorecard and the relationship. Your single point of accountability." },
      { title: "Content & narrative", body: "Research, technical writing, founder voice and editorial calendar." },
      { title: "Community lead", body: "Programme design, moderation, ambassadors and community analytics." },
      { title: "Performance & analytics", body: "Paid channels, attribution, funnel analysis and weekly reporting." },
      { title: "Technical advisor", body: "A Hashmark engineer who validates claims and product narratives." },
    ],
    backedBy: "Hashmark Labs engineering — 70+ Web3, AI and fintech products delivered.",
  },
  work: {
    kind: "in-preparation",
    title: "Growth engagements.",
    slots: [
      { label: "Growth · Web3", body: "Client, challenge, programme and measured outcomes — to be published." },
      { label: "Community · Launch", body: "Client, challenge, programme and measured outcomes — to be published." },
      { label: "Content · Brand", body: "Client, challenge, programme and measured outcomes — to be published." },
    ],
    note: "Detailed growth case studies are available on request.",
  },
  why: {
    title: "Why teams choose us for growth.",
    items: [
      { title: "Engineering-literate marketing", body: "We understand the protocol, so the story is accurate and differentiated." },
      { title: "One partner for product and growth", body: "Build and growth under one roof — no hand-off gaps." },
      { title: "Outcome-based scorecards", body: "Users, wallets and revenue — agreed before we start." },
      { title: "Crypto-native, globally delivered", body: "Across USA, Europe, APAC and the Middle East." },
      { title: "Senior operators only", body: "The strategist who pitches you runs your account." },
      { title: "Trust-first practices", body: "Disclosed partnerships and no artificial engagement." },
      { title: "Launch experience", body: "TGE, mainnet, funding and expansion programmes." },
      { title: "Long-term partnership", body: "From first launch to category leadership." },
    ],
  },
  engagement: {
    title: "Flexible models, scoped to your stage.",
    items: [
      { title: "Growth retainer", body: "An ongoing growth pod owning the full funnel month to month." },
      { title: "Launch sprint", body: "A fixed programme built around a TGE, mainnet or funding moment." },
      { title: "Fractional CMO", body: "Senior marketing leadership embedded in your team." },
      { title: "Growth audit", body: "A diagnostic of positioning, channels and funnel with a 90-day plan." },
    ],
    note: "Commercial terms are scoped after a growth diagnostic — to stage, goals and channel mix.",
    footer: ["Senior-led from day one", "Weekly reporting", "USA · Europe · APAC · Middle East"],
  },
  partOf: { title: "Growth, built by", emphasis: "the people who build." },
  closing: {
    title: "Let's grow",
    emphasis: "what you built.",
    lead: "Launching, scaling or repositioning a Web3, AI or fintech product? Let's start with a growth diagnostic.",
    cta: "Request a growth diagnostic",
  },
};

export const bdPartnerships: Practice = {
  slug: "bd-partnerships",
  index: "03",
  name: "BD & Partnerships",
  navLabel: "BD & Partnerships",
  summary:
    "Business development, partnerships and sales for Web3, AI and fintech companies — from the first integration partner to an enterprise pipeline.",
  accent: "indigo",
  hero: {
    eyebrow: "BD · Partnerships & Sales",
    title: "The partnerships behind",
    emphasis: "real traction.",
    lead: "Business development, partnerships and sales for Web3, AI and fintech companies — from the first integration partner to an enterprise pipeline.",
  },
  meta: {
    title: "BD, Partnerships & Sales for Web3, AI and FinTech",
    description:
      "Partnership strategy, ecosystem grants, exchange listing readiness, enterprise sales and investor communications — senior-led, integration-ready and measured on revenue.",
  },
  position: {
    title: "Warm introductions don't scale. A repeatable pipeline does.",
    points: [
      { title: "Integration-ready partnerships", body: "We speak the partner's technical language, so deals get integrated — not just announced." },
      { title: "Pipeline as a system", body: "ICP, sequencing, CRM discipline and forecasting — revenue you can predict." },
      { title: "Senior-led conversations", body: "Founder-level outreach to decision-makers, not volume-driven SDR spam." },
    ],
  },
  statsTitle: "We know what partners ask before they sign.",
  statLabels: ["Products delivered", "Years in the ecosystem", "Industry verticals", "Clients at a time, max"],
  statBodies: [
    "Integration, security and scale questions answered from real delivery experience.",
    "Across exchanges, wallets, chains, infrastructure and fintech.",
    "Buyer and partner maps across 11 verticals.",
    "Senior BD attention on every account.",
  ],
  problem: {
    title: "Why business development stalls.",
    rows: [
      { title: "Founder-led sales hits a ceiling", wrong: "Deals depend on one calendar, and growth stops when the founder is busy.", instead: "A documented sales motion the team can run — with senior coverage from day one." },
      { title: "Announced, never integrated", wrong: "Partnership press releases with no product, users or revenue behind them.", instead: "Partnerships scoped around integration, co-marketing and shared metrics." },
      { title: "No defined ICP", wrong: "Outreach to everyone, conversion from almost no one.", instead: "A sharp ICP and target-account list built from real buying signals." },
      { title: "Pipeline lives in inboxes", wrong: "No CRM, no forecast and no visibility for the board.", instead: "A shared CRM, stage definitions and a weekly pipeline review." },
    ],
  },
  services: {
    title: "Business development, end to end.",
    items: [
      { title: "Partnership Strategy", body: "Ecosystem mapping, partner prioritisation and deal structures that create value." },
      { title: "Ecosystem & Grants", body: "L1/L2 foundations, grant programmes, accelerators and ecosystem funds." },
      { title: "Exchange & Listing Readiness", body: "Listing documentation, readiness reviews and exchange outreach." },
      { title: "B2B & Enterprise Sales", body: "ICP design, account-based outbound and full-cycle deal management." },
      { title: "Sales Enablement", body: "Pitch decks, media kits, case studies, proposals and demo narratives." },
      { title: "Investor Communications", body: "Investor updates, data-room narrative and round storytelling support." },
    ],
    also: ["Fractional Head of BD", "CRM setup", "Market-entry strategy"],
  },
  framework: {
    eyebrow: "Partnership lifecycle",
    title: "From target list to integrated partner.",
    steps: [
      { title: "Map", do: "Ecosystem map and a prioritised list of partners that move your metrics.", measure: ["Target accounts", "Fit score"] },
      { title: "Engage", do: "Senior outreach, tailored pitch and a clear mutual value case.", measure: ["Reply rate", "Meetings booked"] },
      { title: "Structure", do: "Commercial terms, technical scope and success metrics agreed.", measure: ["Proposals sent", "Win rate"] },
      { title: "Integrate", do: "Technical integration supported by Hashmark engineers.", measure: ["Integrations live", "Time to launch"] },
      { title: "Expand", do: "Co-marketing, joint launches and account growth.", measure: ["Partner-sourced users", "Revenue"] },
    ],
    note: "Partnerships are measured on users and revenue — not logos on a slide.",
  },
  process: {
    title: "Map. Engage. Close. Compound.",
    steps: [
      { title: "Diagnostic", body: "Business model, ICP, current pipeline and partner landscape review." },
      { title: "GTM & BD plan", body: "Target accounts, partner priorities, sales motion and quarterly targets." },
      { title: "Execute", body: "Outreach, meetings, proposals and deal management run by senior BD leads." },
      { title: "Review & scale", body: "Weekly pipeline review, forecast updates and playbooks your team keeps." },
    ],
    rituals: ["Weekly pipeline report", "You own the CRM", "Direct BD lead access"],
  },
  measure: {
    eyebrow: "What we measure",
    title: "Pipeline you can forecast.",
    lead: "Targets and stage definitions are agreed before outreach begins.",
    groups: [
      { kicker: "Pipeline", title: "Pipeline health", items: ["Qualified pipeline value", "Opportunities by stage", "Cost per opportunity"] },
      { kicker: "Conversion", title: "Deal velocity", items: ["Meeting → proposal rate", "Win rate", "Sales cycle length"] },
      { kicker: "Partnerships", title: "Partner impact", items: ["Integrations live", "Partner-sourced users", "Co-marketing reach"] },
      { kicker: "Revenue", title: "Commercial outcome", items: ["New ARR / revenue", "Expansion revenue", "Forecast accuracy"] },
    ],
  },
  audience: {
    eyebrow: "Partner universe",
    title: "Where we open doors.",
    items: [
      { title: "Exchanges & liquidity", body: "Centralised and decentralised exchanges, market-making and liquidity partners." },
      { title: "Chains & ecosystems", body: "L1/L2 foundations, grant programmes and ecosystem funds." },
      { title: "Wallets & infrastructure", body: "Wallets, oracles, RPC, custody and on/off-ramp providers." },
      { title: "Enterprises & fintech", body: "Banks, payment companies, trade platforms and enterprise buyers." },
    ],
    note: "We prioritise partners by the users and revenue they can move — not by the size of their logo.",
  },
  principles: {
    title: "Relationships worth keeping.",
    zero: {
      title: "Guaranteed listings or pay-to-play promises.",
      body: "No credible advisor can guarantee a listing. We prepare you, open the right conversations and represent you honestly.",
    },
    items: [
      { title: "Compliance-aware", body: "Listings, token and investor communications are reviewed with your counsel." },
      { title: "You own the pipeline", body: "Contacts, CRM data and relationships belong to you." },
      { title: "Transparent reporting", body: "Every week: activity, pipeline movement and what we learned." },
      { title: "Long-term reputation", body: "We protect your name in every conversation we open." },
    ],
  },
  team: {
    title: "A senior BD pod, not a call centre.",
    lead: "Every engagement is led by a senior business development lead who runs the conversations personally.",
    roles: [
      { title: "BD lead", body: "Owns strategy, targets and senior partner conversations. Your single point of accountability." },
      { title: "Partnerships manager", body: "Partner pipeline, deal structuring and joint-launch coordination." },
      { title: "Sales operations", body: "CRM, sequencing, reporting and forecast hygiene." },
      { title: "Enablement & content", body: "Decks, proposals, media kits and case studies." },
      { title: "Technical advisor", body: "A Hashmark engineer for integration scoping and technical due diligence." },
    ],
    backedBy: "Hashmark Labs engineering — 70+ Web3, AI and fintech products delivered.",
  },
  work: {
    kind: "in-preparation",
    title: "Business development engagements.",
    slots: [
      { label: "Partnerships · Web3", body: "Client, partner targets, deals closed and measured outcomes — to be published." },
      { label: "Enterprise sales · AI", body: "Client, ICP, pipeline built and measured outcomes — to be published." },
      { label: "Ecosystem · Grants", body: "Client, programmes engaged and measured outcomes — to be published." },
    ],
    note: "Detailed BD case studies are available on request.",
  },
  why: {
    title: "Why teams choose us for BD.",
    items: [
      { title: "Technical depth in every deal", body: "Integration questions answered in the room — not after." },
      { title: "Deals that ship", body: "Our engineers can scope and support the integration." },
      { title: "A system, not a Rolodex", body: "ICP, CRM, sequencing and forecasting you keep." },
      { title: "Senior-led outreach", body: "Decision-maker conversations, never mass spam." },
      { title: "Crypto-native, globally delivered", body: "Across USA, Europe, APAC and the Middle East." },
      { title: "Honest representation", body: "No guaranteed listings, no inflated promises." },
      { title: "Full-stack GTM", body: "Pairs with our Growth practice for joint launches." },
      { title: "Long-term partnership", body: "From first partner to enterprise pipeline." },
    ],
  },
  engagement: {
    title: "Flexible models, scoped to your pipeline.",
    items: [
      { title: "Fractional Head of BD", body: "Senior BD leadership embedded in your team." },
      { title: "Partnership sprint", body: "A focused programme to land a defined set of strategic partners." },
      { title: "Sales-as-a-service", body: "An ongoing outbound and deal-management retainer." },
      { title: "Listing & launch readiness", body: "Documentation, readiness review and exchange outreach." },
    ],
    note: "Commercial terms are scoped after a BD diagnostic — to targets, market and sales motion.",
    footer: ["Senior-led from day one", "Weekly reporting", "USA · Europe · APAC · Middle East"],
  },
  partOf: { title: "Partnerships, backed by", emphasis: "real engineering." },
  closing: {
    title: "Let's open",
    emphasis: "the right doors.",
    lead: "Building partnerships, preparing for listings or scaling enterprise sales? Let's start with a BD diagnostic.",
    cta: "Request a BD diagnostic",
  },
};

/** Canonical deck order: 01 Engineering · 02 Growth · 03 BD · 04 Product & Tokenomics. */
export const practices: Practice[] = [engineering, growth, bdPartnerships, productTokenomics];

export const getPractice = (slug: string) => practices.find((p) => p.slug === slug);

/** Engineering technical depth (TECH p6). */
export const techDepth = {
  title: "Depth across protocol, AI and infrastructure.",
  columns: [
    {
      title: "Protocol layers",
      items: [
        "Ethereum, Solana, Polygon, Arbitrum, Optimism",
        "Cosmos SDK, Substrate & Polkadot",
        "Cardano UTxO — Aiken & Plutus",
        "Internet Computer canisters",
        "Indexers, RPC & event-driven services",
      ],
    },
    {
      title: "AI & data",
      items: [
        "LLM orchestration & AI agents",
        "RAG and agentic workflows",
        "Multi-source ingestion pipelines",
        "TimescaleDB, terabyte-scale data",
        "Real-time intelligence & risk models",
      ],
    },
    {
      title: "Advanced protocol tech",
      items: [
        "ZK proofs — zkSNARKs, zkVMs",
        "Trusted Execution Environments",
        "Optimistic & ZK rollups",
        "MEV-aware architectures",
        "Account abstraction (ERC-4337)",
      ],
    },
  ],
  stack: [
    "Solidity", "Rust", "Move", "Aiken", "Plutus", "Foundry", "Hardhat", "Anchor", "Node.js", "TypeScript",
    "Python", "Go", "React", "Next.js", "PostgreSQL", "TimescaleDB", "Docker", "Kubernetes", "AWS", "GCP",
  ],
};
