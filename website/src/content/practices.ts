// The four practices. Facts: _docs/01-CONTENT-SOURCE-OF-TRUTH.md §6–17. Wording: _docs/06-VOICE-AND-HUMANIZER.md.

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
    "AI-integrated systems, protocol engineering, DeFi, trading infrastructure, data platforms and fintech rails, designed and built by senior engineers.",
  accent: "pink",
  hero: {
    eyebrow: "Engineering practice",
    title: "We design and build AI, blockchain",
    emphasis: "and fintech systems.",
    lead: "Senior engineers working on AI, blockchain and full-stack systems, from the first architecture decision through production and scale. Our clients are in the USA, Europe, APAC and the Middle East.",
  },
  meta: {
    title: "Engineering: AI, blockchain and fintech systems",
    description:
      "Senior engineers building DeFi protocols, trading infrastructure, data platforms, fintech rails and RWA systems, from architecture to mainnet and scale.",
  },
  position: {
    title: "We don't rent out developers. You get architecture, protocol expertise and senior engineers who do the work themselves.",
    points: [
      { title: "We come in before the big decisions", body: "We join at the architecture stage, because the technical choices made there shape everything that follows." },
      { title: "We own delivery end to end", body: "Architecture, engineering, testing, deployment and scaling are our responsibility, not something we hand back to you halfway." },
      { title: "The people you meet build it", body: "The architects on your first call are the engineers who write the system. Nothing gets passed down to a junior team." },
    ],
  },
  statsTitle: "What we've delivered so far.",
  statBodies: [
    "Across wallets, DeFi, trading, identity, RWA and infrastructure, for clients worldwide.",
    "Across AI-integrated DeFi, cross-chain protocols, fintech rails and data platforms.",
    "Production systems from prediction markets to real-world asset custody.",
    "A deliberate ceiling, so every client gets dedicated senior attention.",
  ],
  services: {
    title: "The areas we know best.",
    items: [
      { title: "AI-Integrated Systems", body: "LLM agents, RAG, agentic workflows and hybrid architectures that combine on-chain logic with AI." },
      { title: "DeFi & Financial Protocols", body: "AMMs, perps, lending, staking, yield engines and tokenomics design." },
      { title: "DEX & Trading Infrastructure", body: "Matching engines, hybrid liquidity routing and professional trading terminals." },
      { title: "Market Intelligence & Data", body: "Prediction-market intelligence, cross-venue analytics and terabyte-scale pipelines." },
      { title: "FinTech, Payments & Stablecoins", body: "Payment rails, multi-asset wallets, ledgers, settlement and stablecoin rails." },
      { title: "RWA & Tokenization", body: "Platforms for real estate, commodities, collectibles and ESG assets." },
    ],
    also: ["Blockchain infrastructure", "Wallets, identity & interop", "Gaming & digital assets"],
  },
  process: {
    title: "How a project runs with us.",
    steps: [
      { title: "Intake & context", body: "Before any design work, we go through your vision, roadmap, documentation, codebase, constraints and business objectives." },
      { title: "Discovery & architecture", body: "Research, system design and protocol modelling, plus planning for security and the AI and data layers." },
      { title: "Execution", body: "Code-first delivery against weekly milestones. You hear from us continuously and can watch progress live." },
      { title: "QA, security & launch", body: "Testing, audits, deployment and production handover, followed by technical support after launch." },
    ],
    rituals: ["Weekly deliverables", "Live progress visibility", "Direct engineer access"],
  },
  audience: {
    eyebrow: "Who we work with",
    title: "We work with teams from the first architecture decision through production, mainnet and scale.",
    items: [
      { title: "Funded startups & founders", body: "" },
      { title: "Protocols & DAOs", body: "" },
      { title: "FinTech & financial platforms", body: "" },
      { title: "AI & data companies", body: "" },
      { title: "Enterprises & trade platforms", body: "" },
    ],
  },
  principles: {
    title: "We keep quality high by taking on less.",
    zero: {
      title: "We don't hand projects to junior-only teams.",
      body: "Senior engineers lead, design and build every engagement. They give it their full attention instead of switching between a pile of other projects.",
    },
    items: [
      { title: "Security & correctness", body: "This matters most in cryptography and in code that holds value, where a mistake can't be undone." },
      { title: "Maintainable architectures", body: "Clear boundaries and as little complexity as we can manage, so your team can own the system after we leave." },
      { title: "Predictable delivery", body: "You get a week-by-week plan and can check progress against it whenever you like." },
      { title: "Limited concurrency", body: "We cap how many engagements we run at once, so each one has senior engineers dedicated to it." },
    ],
  },
  work: {
    kind: "cases",
    title: "These systems are live in production.",
    slugs: ["assymetrix", "fincruse-crusex", "goldpesa", "invaria", "foreon-network"],
  },
  why: {
    title: "What we can point to.",
    items: [
      { title: "Protocol-level thinking", body: "On-chain order books, validators and tokenomics (Foreon, Goldpesa)." },
      { title: "Financial infrastructure", body: "Matching engines and double-entry ledgers (Fincruse / CruseX)." },
      { title: "Data infrastructure at scale", body: "Multi-terabyte, real-time pipelines (Assymetrix)." },
      { title: "AI + blockchain convergence", body: "AI risk engines with on-chain verification (INVARIA)." },
      { title: "Senior engineers from day one", body: "The architects in the first call build the system." },
      { title: "Web3-native execution", body: "Shipped on Ethereum, Solana, Cardano, Polygon and more." },
      { title: "Security-first engineering", body: "Correctness comes first in cryptography and value-bearing code." },
      { title: "Long-term partnership", body: "From architecture to post-launch advisory and scale." },
    ],
  },
  engagement: {
    title: "We pick the engagement model to fit the problem.",
    items: [
      { title: "Dedicated engineering", body: "A senior team embedded in your roadmap for the long run." },
      { title: "Project-based delivery", body: "A defined scope, from architecture to production launch." },
      { title: "Architecture & advisory", body: "System design, technical due diligence and CTO-level guidance." },
      { title: "Protocol engineering", body: "Smart contracts, on-chain mechanics and getting you ready for audit." },
      { title: "Long-term partnership", body: "We stay on through scaling, maintenance and whatever the system needs next." },
    ],
    note: "We set commercial terms after technical discovery, based on complexity, delivery requirements and the engagement model.",
    footer: ["Weekly visibility & direct engineer access", "USA · Europe · APAC · Middle East", "Lead architect across time zones"],
  },
  partOf: { title: "Engineering sits underneath", emphasis: "every other practice." },
  closing: {
    title: "Tell us what you're",
    emphasis: "trying to build.",
    lead: "If it's technically complex and you want a team that thinks at the protocol level, we'd like to talk through the architecture with you.",
    cta: "Discuss your architecture",
  },
};

export const productTokenomics: Practice = {
  slug: "product-tokenomics",
  index: "04",
  name: "Product & Tokenomics",
  navLabel: "Product & Tokenomics",
  summary:
    "Product strategy, tokenomics and go-to-market planning for Web3, AI and fintech ventures, designed by engineers who build protocols.",
  accent: "violet",
  hero: {
    eyebrow: "Advisory · Tokenomics",
    title: "We take you from a product idea",
    emphasis: "to a working economy.",
    lead: "Product strategy, tokenomics and go-to-market planning for Web3, AI and fintech ventures. The economics are designed by the same engineers who build protocols.",
  },
  meta: {
    title: "Product strategy and tokenomics design",
    description:
      "Tokenomics, incentive design, governance and Web3 product strategy, stress-tested before launch by engineers who have built production protocols.",
  },
  position: {
    title: "A lot of tokenomics gets designed in a spreadsheet; ours is designed by people who have built protocols themselves.",
    points: [
      { title: "We check whether you need a blockchain", body: "We validate the use case first. If a token doesn't serve the business, we'll tell you." },
      { title: "We test the economy under stress", body: "Incentives, emissions and adversarial behaviour are modelled before launch, so you know how the economy holds up." },
      { title: "Everything we recommend can be built", body: "We only recommend what can actually be built, and our own engineering team can build it." },
    ],
  },
  statsTitle: "Strategy based on what we've shipped.",
  statLabels: ["Products delivered", "Years of senior leadership", "Industry verticals", "Clients at a time, max"],
  statBodies: [
    "Wallets, DeFi, trading, identity, RWA and AI. Our strategy work draws on real builds.",
    "Across protocol design, fintech rails and data platforms.",
    "Pattern recognition across 11 product categories.",
    "Senior architects on every advisory engagement.",
  ],
  problem: {
    title: "Where Web3 products go wrong before they scale.",
    rows: [
      { title: "The token has no job", wrong: "It was added to raise money, with no utility and no way for value to accrue.", instead: "We design utility and value accrual around real product usage and revenue." },
      { title: "Emissions pay people to leave", wrong: "Incentives pull in mercenary capital, which leaves as soon as rewards drop.", instead: "We model emission schedules, sinks and vesting against how users actually behave." },
      { title: "The roadmap ignores the architecture", wrong: "It promises things the chosen chain and stack can't deliver.", instead: "We build the roadmap with architects and order it by technical dependency." },
      { title: "Users drop off at the wallet", wrong: "Onboarding, gas and signing friction kill conversion.", instead: "We design onboarding around account abstraction and embedded wallets." },
    ],
  },
  services: {
    title: "What we cover, from concept to launch.",
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
    title: "How we design a token economy.",
    steps: [
      { title: "Utility & value", do: "Define what the token does and how value accrues to holders.", measure: ["Utility map", "Value-accrual paths"] },
      { title: "Supply & emissions", do: "Set supply, emission curves and release logic so they follow demand.", measure: ["Emission schedule", "Inflation profile"] },
      { title: "Distribution", do: "Plan allocations, vesting and unlocks for every stakeholder.", measure: ["Allocation table", "Unlock calendar"] },
      { title: "Incentives & sinks", do: "Design rewards, fees and sinks that keep participation and pressure on the token in balance.", measure: ["Net emissions", "Fee flows"] },
      { title: "Stress-testing", do: "Run scenario and adversarial simulations before anything ships.", measure: ["Scenario outcomes", "Failure thresholds"] },
    ],
    note: "We've run this in production: the fee-routing tokenomics behind Goldpesa's GPO and GPX liquidity protocols.",
  },
  process: {
    title: "We start with your business model and finish with a build-ready spec.",
    steps: [
      { title: "Discover", body: "We learn your business model, market, users, competitors and constraints up front." },
      { title: "Validate", body: "We test the use case, the token and the chain choice against the business case." },
      { title: "Design", body: "Product roadmap, token economy, governance and an architecture blueprint." },
      { title: "Stress-test & hand off", body: "Simulation and review, then a build-ready specification. Or we build it ourselves." },
    ],
    rituals: ["Weekly working sessions", "Decision log", "Direct architect access"],
  },
  measure: {
    eyebrow: "What you receive",
    title: "What you have at the end.",
    lead: "Every engagement ends with artefacts your team, your investors and your engineers can work from.",
    groups: [
      { kicker: "Strategy", title: "Product strategy", items: ["Strategy memo", "MVP scope & roadmap", "Competitive positioning"] },
      { kicker: "Economy", title: "Token economy", items: ["Tokenomics model", "Scenario simulations", "Token design paper input"] },
      { kicker: "Governance", title: "Governance", items: ["Governance framework", "Treasury policy", "Decentralisation path"] },
      { kicker: "Build", title: "Build readiness", items: ["Architecture blueprint", "Chain & stack decision", "Launch plan"] },
    ],
  },
  audience: {
    eyebrow: "Who it is for",
    title: "Who we're most useful to.",
    items: [
      { title: "Pre-token founders", body: "Deciding whether, when and how to launch a token." },
      { title: "Protocols redesigning", body: "Fixing emissions, liquidity or governance that isn't working." },
      { title: "Fintech & enterprises", body: "Evaluating blockchain, stablecoins or tokenisation for a real business case." },
      { title: "Investors & funds", body: "Technical and tokenomics due diligence before an investment." },
    ],
    note: "It's easiest to design an economy before launch, but it's not too late to fix one that's already live.",
  },
  principles: {
    title: "We only give advice you can build on.",
    zero: {
      title: "We won't recommend a token just for the sake of having one.",
      body: "We start from the business. If a token, a chain or a DAO doesn't serve your model, our recommendation will say so.",
    },
    items: [
      { title: "Compliance-aware design", body: "We design alongside your legal counsel. We don't give legal or securities advice." },
      { title: "Simulate before launch", body: "No economy ships until it has been through scenario and adversarial testing." },
      { title: "Buildable by default", body: "Every recommendation is checked against a real architecture." },
      { title: "Independent judgement", body: "Our advice isn't tied to any chain, exchange or fund." },
    ],
  },
  team: {
    title: "Architects and strategists on the same team.",
    lead: "Each advisory engagement pairs product strategy with protocol engineering, so every decision makes commercial sense and can actually be built.",
    roles: [
      { title: "Engagement lead", body: "Owns the strategy, the decision log and the relationship." },
      { title: "Tokenomics designer", body: "Economy design, modelling and scenario simulation." },
      { title: "Protocol architect", body: "Chain selection, smart-contract architecture and feasibility." },
      { title: "Product & UX strategist", body: "Roadmap, onboarding and conversion design." },
      { title: "Growth advisor", body: "Launch, liquidity and GTM sequencing, from our Growth practice." },
    ],
    backedBy: "Led by Vidit Galav, Head of Engineering, with the Hashmark Labs protocol team.",
  },
  work: {
    kind: "cases",
    title: "Economies and protocols we've built.",
    slugs: ["goldpesa", "foreon-network"],
    note: "Also StreamNFT: staking, rent and loan protocols on Solana and Ethereum, plus a senior contribution to ERC-7066 lockable NFTs.",
  },
  why: {
    title: "Why founders come to us for strategy.",
    items: [
      { title: "Designed by builders", body: "Token economies we've implemented run in production." },
      { title: "Strategy and build under one roof", body: "From recommendation to shipped protocol." },
      { title: "Business-first honesty", body: "We say no to tokens that don't serve the business." },
      { title: "Stress-tested economies", body: "Scenario and adversarial modelling before launch." },
      { title: "Protocol-level depth", body: "EVM, Solana, Cardano and more." },
      { title: "Senior architects only", body: "The people advising you design real systems." },
      { title: "GTM-aware design", body: "Works alongside our Growth and BD practices for launch." },
      { title: "Long-term partnership", body: "From first design to governance changes later on." },
    ],
  },
  engagement: {
    title: "We scope the engagement to the decision in front of you.",
    items: [
      { title: "Strategy sprint", body: "A focused engagement to answer one defined product or token question." },
      { title: "Tokenomics engagement", body: "Full economy design, modelling and simulation." },
      { title: "Fractional CPO", body: "Senior product leadership embedded in your team." },
      { title: "Strategy + build", body: "Advisory that flows straight into Hashmark engineering." },
    ],
    note: "We set commercial terms after discovery, based on the decisions, depth and deliverables involved.",
    footer: ["Senior-led from day one", "Weekly reporting", "USA · Europe · APAC · Middle East"],
  },
  partOf: { title: "Strategy from", emphasis: "the people who build." },
  closing: {
    title: "Let's design an economy",
    emphasis: "that lasts.",
    lead: "Planning a token, redesigning an economy or defining a Web3 product? A strategy session is where we'd start.",
    cta: "Request a strategy session",
  },
};

export const growth: Practice = {
  slug: "growth",
  index: "02",
  name: "Growth & Marketing",
  navLabel: "Growth & Marketing",
  summary:
    "Full-funnel marketing, community and brand for Web3, AI and fintech products, run by people who understand how the product works.",
  accent: "teal",
  hero: {
    eyebrow: "Growth · Marketing",
    title: "Growth marketing for products that are",
    emphasis: "hard to explain.",
    lead: "Full-funnel marketing, community and brand for Web3, AI and fintech products. The people running it understand how your product actually works.",
  },
  meta: {
    title: "Web3 growth and marketing",
    description:
      "Positioning, content, community, disclosed KOL campaigns, PR and paid acquisition for Web3 products, measured on active users and revenue.",
  },
  position: {
    title: "A lot of crypto marketing is noise; we start by understanding the product, and the growth comes from that.",
    points: [
      { title: "Engineering-literate messaging", body: "We read the whitepaper and the code, so every claim we publish holds up to technical scrutiny." },
      { title: "Community before campaigns", body: "We build a base of holders, users and contributors who stay, instead of renting attention that leaves after the airdrop." },
      { title: "Every channel is measured", body: "Each channel is tied to acquisition, activation and retention, using on-chain data where we can." },
    ],
  },
  statsTitle: "Why product knowledge matters in growth.",
  statLabels: ["Products delivered", "Years in the ecosystem", "Industry verticals", "Clients at a time, max"],
  statBodies: [
    "Across DeFi, trading, identity, RWA and AI. We know what makes users adopt.",
    "Across market cycles, narratives and shifting user behaviour.",
    "Category context from prediction markets to real-world assets.",
    "Senior strategists on every account. No junior-run retainers.",
  ],
  problem: {
    title: "Why Web3 growth usually stalls.",
    rows: [
      { title: "The story promises more than the product does", wrong: "Claims the product can't back up lose trust the first time someone tests them.", instead: "We build positioning from the product itself: its mechanics, what sets it apart and the proof." },
      { title: "Rented attention", wrong: "Paid KOL spikes and airdrop farmers bring numbers that disappear within weeks.", instead: "We design community programmes for retention, contribution and advocacy." },
      { title: "Vanity metrics", wrong: "Followers and impressions get reported while wallets and revenue stay flat.", instead: "We report on active users, funded wallets, TVL and cost per activated user." },
      { title: "Too many vendors", wrong: "Five agencies, five dashboards, and nobody owns the outcome.", instead: "One growth partner that's accountable for the whole funnel." },
    ],
  },
  services: {
    title: "Growth across the whole funnel.",
    items: [
      { title: "Positioning & Narrative", body: "Category design, messaging architecture and a narrative your product can defend." },
      { title: "Content & Thought Leadership", body: "Technical explainers, research, founder voice, docs-to-content and SEO." },
      { title: "Community Building", body: "Programmes on Discord, Telegram and X, moderation and ambassador systems." },
      { title: "KOL & Influencer Campaigns", body: "Vetted, disclosed and tracked creator partnerships, measured on outcomes." },
      { title: "PR & Media Relations", body: "Launch, funding and milestone announcements with crypto and tech media." },
      { title: "Performance Acquisition", body: "Paid and organic acquisition with on-chain attribution and conversion work." },
    ],
    also: ["Fractional CMO", "Brand identity", "Analytics & attribution"],
  },
  framework: {
    eyebrow: "Our framework",
    title: "From first look to on-chain activation.",
    steps: [
      { title: "Awareness", do: "Narrative, PR, KOL and content that earn the first look.", measure: ["Share of voice", "Qualified reach"] },
      { title: "Consideration", do: "Explainers, docs, comparisons and social proof for the sceptics.", measure: ["Site engagement", "Waitlist sign-ups"] },
      { title: "Activation", do: "Onboarding flows and incentives that get users to a first transaction.", measure: ["Wallet connects", "First transactions"] },
      { title: "Retention", do: "Community rituals, product updates and loyalty mechanics.", measure: ["D30 retention", "Active members"] },
      { title: "Advocacy", do: "Ambassadors, referrals and contributors who grow the product for you.", measure: ["Referral share", "UGC volume"] },
    ],
    note: "Each stage has an owner, a metric and a number we report every week.",
  },
  process: {
    title: "We audit first, then plan, run and adjust every week.",
    steps: [
      { title: "Audit & positioning", body: "We audit the product, market, competitors and community, then write positioning your team can repeat." },
      { title: "Growth plan", body: "Channel mix, narrative calendar, budget allocation, and the metrics we agree to be judged on." },
      { title: "Launch & operate", body: "Senior operators run campaigns, content and community week by week." },
      { title: "Measure & compound", body: "We cut what doesn't convert, put more into what does, and report every week." },
    ],
    rituals: ["Weekly growth report", "Shared dashboard", "Direct strategist access"],
  },
  measure: {
    eyebrow: "What we measure",
    title: "The numbers we're judged on.",
    lead: "We agree the scorecard with you before the first campaign goes live.",
    groups: [
      { kicker: "North star", title: "Product outcomes", items: ["Active wallets / users", "Funded accounts or TVL", "Revenue or fee growth"] },
      { kicker: "Acquisition", title: "Efficient growth", items: ["CAC by channel", "Visit → sign-up conversion", "Cost per activated user"] },
      { kicker: "Community", title: "Durable community", items: ["30-day member retention", "Active contributors", "Sentiment and support load"] },
      { kicker: "Brand", title: "Earned authority", items: ["Share of voice", "Search visibility", "Tier-1 media coverage"] },
    ],
  },
  audience: {
    eyebrow: "Launch programmes",
    title: "Programmes for launches and other big moments.",
    items: [
      { title: "Token & TGE launch", body: "Narrative, community readiness, KOL sequencing and launch-week operations." },
      { title: "Mainnet & product launch", body: "Building awareness beforehand, onboarding campaigns and retention after launch." },
      { title: "Funding announcement", body: "The story, media outreach and an investor-grade narrative around the round." },
      { title: "Market expansion", body: "Localised positioning and community for new regions and languages." },
    ],
    note: "Launches are won in the six weeks before them, so we plan backwards from the date.",
  },
  principles: {
    title: "Growth that holds up to scrutiny.",
    zero: {
      title: "We don't use bots, fake followers or bought engagement.",
      body: "Every number we report is real. Fake metrics damage your standing with exchanges, investors and users, so we never use them.",
    },
    items: [
      { title: "Compliance-aware communication", body: "We work alongside your legal counsel. We don't make price predictions or promise returns." },
      { title: "Disclosed partnerships", body: "Every KOL and creator collaboration is disclosed and tracked." },
      { title: "Technical accuracy", body: "Content is checked against the product, and our engineers are one message away." },
      { title: "You own the assets", body: "Channels, audiences, data and content stay with you." },
    ],
  },
  team: {
    title: "A dedicated senior pod runs your account.",
    lead: "Each engagement gets its own pod, led by a senior growth lead and sized to your company's stage and scope.",
    roles: [
      { title: "Growth lead", body: "Owns the strategy, the scorecard and the relationship. Your single point of accountability." },
      { title: "Content & narrative", body: "Research, technical writing, founder voice and the editorial calendar." },
      { title: "Community lead", body: "Programme design, moderation, ambassadors and community analytics." },
      { title: "Performance & analytics", body: "Paid channels, attribution, funnel analysis and weekly reporting." },
      { title: "Technical advisor", body: "A Hashmark engineer who checks claims and product narratives." },
    ],
    backedBy: "Backed by Hashmark Labs engineering, with 70+ Web3, AI and fintech products delivered.",
  },
  work: {
    kind: "in-preparation",
    title: "Growth case studies.",
    slots: [
      { label: "Growth · Web3", body: "Client, challenge, programme and measured outcomes. Write-up to be published." },
      { label: "Community · Launch", body: "Client, challenge, programme and measured outcomes. Write-up to be published." },
      { label: "Content · Brand", body: "Client, challenge, programme and measured outcomes. Write-up to be published." },
    ],
    note: "We can share detailed growth case studies on request.",
  },
  why: {
    title: "Why teams come to us for growth.",
    items: [
      { title: "Engineering-literate marketing", body: "We understand the protocol, so the story is accurate and stands apart." },
      { title: "One partner for product and growth", body: "Build and growth under one roof, with no gap at the hand-off." },
      { title: "Outcome-based scorecards", body: "Users, wallets and revenue, agreed before we start." },
      { title: "Crypto-native, globally delivered", body: "Across the USA, Europe, APAC and the Middle East." },
      { title: "Senior operators only", body: "The strategist who pitches you runs your account." },
      { title: "Trust-first practices", body: "Disclosed partnerships and no artificial engagement." },
      { title: "Launch experience", body: "TGE, mainnet, funding and expansion programmes." },
      { title: "Long-term partnership", body: "From first launch to leading your category." },
    ],
  },
  engagement: {
    title: "We scope the engagement to your stage.",
    items: [
      { title: "Growth retainer", body: "An ongoing growth pod that owns the full funnel, month to month." },
      { title: "Launch sprint", body: "A fixed programme built around a TGE, mainnet or funding moment." },
      { title: "Fractional CMO", body: "Senior marketing leadership embedded in your team." },
      { title: "Growth audit", body: "A diagnostic of your positioning, channels and funnel, with a 90-day plan." },
    ],
    note: "We set commercial terms after a growth diagnostic, based on your stage, goals and channel mix.",
    footer: ["Senior-led from day one", "Weekly reporting", "USA · Europe · APAC · Middle East"],
  },
  partOf: { title: "Growth, run by", emphasis: "the people who build." },
  closing: {
    title: "Let's get more people",
    emphasis: "using what you built.",
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
    "Business development, partnerships and sales for Web3, AI and fintech companies, from the first integration partner to an enterprise pipeline.",
  accent: "indigo",
  hero: {
    eyebrow: "BD · Partnerships & Sales",
    title: "Partnerships and sales that",
    emphasis: "turn into real traction.",
    lead: "Business development, partnerships and sales for Web3, AI and fintech companies. We work from your first integration partner through to an enterprise pipeline.",
  },
  meta: {
    title: "BD, partnerships and sales for Web3, AI and fintech",
    description:
      "Partnership strategy, ecosystem grants, listing readiness, enterprise sales and investor communications, led by senior BD people.",
  },
  position: {
    title: "Warm introductions only get you so far; what scales is a pipeline you can run again and again.",
    points: [
      { title: "Integration-ready partnerships", body: "We speak the partner's technical language, so deals end up integrated instead of just announced." },
      { title: "Pipeline as a system", body: "ICP, sequencing, CRM discipline and forecasting, so revenue becomes something you can predict." },
      { title: "Senior-led conversations", body: "Founder-level outreach to decision-makers. We don't do high-volume SDR spam." },
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
      { title: "Sales depends on the founder", wrong: "Every deal runs through one calendar, and growth stops when the founder is busy.", instead: "We document a sales motion your team can run, with senior coverage from day one." },
      { title: "Partnerships that never get integrated", wrong: "Press releases announce partnerships with no product, users or revenue behind them.", instead: "We scope partnerships around integration, co-marketing and shared metrics." },
      { title: "No defined ICP", wrong: "You reach out to everyone and convert almost no one.", instead: "A sharp ICP and a target-account list built from real buying signals." },
      { title: "The pipeline lives in inboxes", wrong: "There's no CRM, no forecast and nothing the board can see.", instead: "A shared CRM, agreed stage definitions and a weekly pipeline review." },
    ],
  },
  services: {
    title: "What we handle across BD and sales.",
    items: [
      { title: "Partnership Strategy", body: "Ecosystem mapping, partner prioritisation and deal structures that create value." },
      { title: "Ecosystem & Grants", body: "L1/L2 foundations, grant programmes, accelerators and ecosystem funds." },
      { title: "Exchange & Listing Readiness", body: "Listing documentation, readiness reviews and exchange outreach." },
      { title: "B2B & Enterprise Sales", body: "ICP design, account-based outbound and full-cycle deal management." },
      { title: "Sales Enablement", body: "Pitch decks, media kits, case studies, proposals and demo narratives." },
      { title: "Investor Communications", body: "Investor updates, data-room narrative and help telling the story of the round." },
    ],
    also: ["Fractional Head of BD", "CRM setup", "Market-entry strategy"],
  },
  framework: {
    eyebrow: "Partnership lifecycle",
    title: "How a partner goes from target list to integration.",
    steps: [
      { title: "Map", do: "An ecosystem map and a prioritised list of partners who can move your metrics.", measure: ["Target accounts", "Fit score"] },
      { title: "Engage", do: "Senior outreach, a tailored pitch and a clear case for what each side gets.", measure: ["Reply rate", "Meetings booked"] },
      { title: "Structure", do: "Agree commercial terms, technical scope and success metrics.", measure: ["Proposals sent", "Win rate"] },
      { title: "Integrate", do: "Technical integration, supported by Hashmark engineers.", measure: ["Integrations live", "Time to launch"] },
      { title: "Expand", do: "Co-marketing, joint launches and growing the account.", measure: ["Partner-sourced users", "Revenue"] },
    ],
    note: "We judge a partnership by the users and revenue it brings in, not by the logo it adds to a slide.",
  },
  process: {
    title: "We diagnose first, then plan, run the outreach and review weekly.",
    steps: [
      { title: "Diagnostic", body: "A review of your business model, ICP, current pipeline and partner landscape." },
      { title: "GTM & BD plan", body: "Target accounts, partner priorities, sales motion and quarterly targets." },
      { title: "Execute", body: "Senior BD leads run the outreach, meetings, proposals and deal management." },
      { title: "Review & scale", body: "A weekly pipeline review, updated forecasts, and playbooks your team keeps." },
    ],
    rituals: ["Weekly pipeline report", "You own the CRM", "Direct BD lead access"],
  },
  measure: {
    eyebrow: "What we measure",
    title: "A pipeline you can forecast.",
    lead: "We agree targets and stage definitions with you before any outreach starts.",
    groups: [
      { kicker: "Pipeline", title: "Pipeline health", items: ["Qualified pipeline value", "Opportunities by stage", "Cost per opportunity"] },
      { kicker: "Conversion", title: "Deal velocity", items: ["Meeting → proposal rate", "Win rate", "Sales cycle length"] },
      { kicker: "Partnerships", title: "Partner impact", items: ["Integrations live", "Partner-sourced users", "Co-marketing reach"] },
      { kicker: "Revenue", title: "Commercial outcome", items: ["New ARR / revenue", "Expansion revenue", "Forecast accuracy"] },
    ],
  },
  audience: {
    eyebrow: "Partner universe",
    title: "Where we can open doors for you.",
    items: [
      { title: "Exchanges & liquidity", body: "Centralised and decentralised exchanges, market-making and liquidity partners." },
      { title: "Chains & ecosystems", body: "L1/L2 foundations, grant programmes and ecosystem funds." },
      { title: "Wallets & infrastructure", body: "Wallets, oracles, RPC, custody and on/off-ramp providers." },
      { title: "Enterprises & fintech", body: "Banks, payment companies, trade platforms and enterprise buyers." },
    ],
    note: "We prioritise partners by how many users and how much revenue they can move. A big brand alone doesn't put them at the top of the list.",
  },
  principles: {
    title: "We treat your reputation as part of the job.",
    zero: {
      title: "We don't guarantee listings or make pay-to-play promises.",
      body: "Nobody credible can guarantee a listing. We get you ready, open the right conversations and represent you honestly.",
    },
    items: [
      { title: "Compliance-aware", body: "Listing, token and investor communications are reviewed with your counsel." },
      { title: "You own the pipeline", body: "Contacts, CRM data and relationships belong to you." },
      { title: "Transparent reporting", body: "Every week you see the activity, how the pipeline moved and what we learned." },
      { title: "Long-term reputation", body: "We protect your name in every conversation we open." },
    ],
  },
  team: {
    title: "A senior BD pod that runs the conversations itself.",
    lead: "Every engagement is led by a senior business development lead who handles the conversations personally.",
    roles: [
      { title: "BD lead", body: "Owns strategy, targets and senior partner conversations. Your single point of accountability." },
      { title: "Partnerships manager", body: "Partner pipeline, deal structuring and joint-launch coordination." },
      { title: "Sales operations", body: "CRM, sequencing, reporting and keeping the forecast clean." },
      { title: "Enablement & content", body: "Decks, proposals, media kits and case studies." },
      { title: "Technical advisor", body: "A Hashmark engineer for integration scoping and technical due diligence." },
    ],
    backedBy: "Backed by Hashmark Labs engineering, with 70+ Web3, AI and fintech products delivered.",
  },
  work: {
    kind: "in-preparation",
    title: "BD case studies.",
    slots: [
      { label: "Partnerships · Web3", body: "Client, partner targets, deals closed and measured outcomes. Write-up to be published." },
      { label: "Enterprise sales · AI", body: "Client, ICP, pipeline built and measured outcomes. Write-up to be published." },
      { label: "Ecosystem · Grants", body: "Client, programmes engaged and measured outcomes. Write-up to be published." },
    ],
    note: "We can share detailed BD case studies on request.",
  },
  why: {
    title: "Why teams come to us for BD.",
    items: [
      { title: "Technical depth in every deal", body: "Integration questions get answered in the room, not afterwards." },
      { title: "Deals that ship", body: "Our engineers can scope and support the integration." },
      { title: "A repeatable system", body: "ICP, CRM, sequencing and forecasting that you keep." },
      { title: "Senior-led outreach", body: "Conversations with decision-makers, never mass spam." },
      { title: "Crypto-native, globally delivered", body: "Across the USA, Europe, APAC and the Middle East." },
      { title: "Honest representation", body: "No guaranteed listings and no inflated promises." },
      { title: "Full-stack GTM", body: "Works alongside our Growth practice for joint launches." },
      { title: "Long-term partnership", body: "From first partner to enterprise pipeline." },
    ],
  },
  engagement: {
    title: "We scope the engagement to your pipeline.",
    items: [
      { title: "Fractional Head of BD", body: "Senior BD leadership embedded in your team." },
      { title: "Partnership sprint", body: "A focused programme to land a defined set of strategic partners." },
      { title: "Sales-as-a-service", body: "An ongoing retainer for outbound and deal management." },
      { title: "Listing & launch readiness", body: "Documentation, readiness review and exchange outreach." },
    ],
    note: "We set commercial terms after a BD diagnostic, based on your targets, market and sales motion.",
    footer: ["Senior-led from day one", "Weekly reporting", "USA · Europe · APAC · Middle East"],
  },
  partOf: { title: "Partnerships, backed by", emphasis: "real engineering." },
  closing: {
    title: "Let's find the partners",
    emphasis: "worth talking to.",
    lead: "Building partnerships, preparing for listings or scaling enterprise sales? Let's start with a BD diagnostic.",
    cta: "Request a BD diagnostic",
  },
};

/** Canonical deck order: 01 Engineering · 02 Growth · 03 BD · 04 Product & Tokenomics. */
export const practices: Practice[] = [engineering, growth, bdPartnerships, productTokenomics];

export const getPractice = (slug: string) => practices.find((p) => p.slug === slug);

/** Engineering technical depth (TECH p6). */
export const techDepth = {
  title: "The protocols, AI tooling and infrastructure we work in.",
  columns: [
    {
      title: "Protocol layers",
      items: [
        "Ethereum, Solana, Polygon, Arbitrum, Optimism",
        "Cosmos SDK, Substrate & Polkadot",
        "Cardano UTxO (Aiken & Plutus)",
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
        "ZK proofs: zkSNARKs, zkVMs",
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
