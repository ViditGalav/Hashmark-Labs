# Content Source of Truth — Hashmark Labs

Every factual claim on the website MUST trace to a line in this file. This file is transcribed from the four credential decks in the project root (full text extracted to `_source/text/*.txt`, page renders in `_source/pages/`). If a fact is not here, it is not on the site — unless it is logged in `_docs/04-ADDED-CONTENT-REGISTER.md` as authored content pending client review.

Deck keys: **TECH** = Technical Credentials (19p) · **PT** = Product & Tokenomics (16p) · **GR** = Growth (16p) · **BD** = BD & Partnerships (16p).

---

## 1. Identity
- Name: **Hashmark Labs**. Logo: `#` glyph in a rounded square with pink→violet gradient, wordmark "HASHMARK LABS" letter-spaced mono. (all decks p1)
- Master line: **"Engineering the systems others can't."** (TECH p1)
- Sub-line: "Senior-led AI, blockchain and full-stack engineering — architecting intelligent decentralised systems, built for scale, designed for trust, delivered globally." (TECH p1)
- Focus: AI · Blockchain · FinTech. Model: Senior-led consultancy. Delivery: USA · EU · APAC · ME (Middle East). (TECH p1)
- Four practices: 01 Engineering · 02 Growth & Marketing · 03 BD & Partnerships · 04 Product & Tokenomics. "Clients combine them — or start with one." (PT/GR/BD p15)

## 2. Contact (verbatim)
- Email: hashmarklabs@gmail.com
- WhatsApp: +91 63671 46698 → `https://wa.me/916367146698`
- Vidit Galav: geekviditweb3@gmail.com

## 3. Proof numbers (identical across decks; wording varies by practice)
| Number | TECH label | Other decks |
|---|---|---|
| 70+ | Systems delivered — "Across wallets, DeFi, trading, identity, RWA and infrastructure — for clients worldwide." | "Products delivered" |
| 6.5+ | Years of senior leadership — "Across AI-integrated DeFi, cross-chain protocols, fintech rails and data platforms." | GR/BD: "Years in the ecosystem" |
| 11 | Industry verticals — "Production systems from prediction markets to real-world asset custody." | |
| 4–5 | Clients at a time, max — "A deliberate ceiling, so every client gets dedicated senior attention." | |

Section title: "Proof, not promises." (TECH p3)

## 4. Position (TECH p2)
Headline: "We don't sell developers. We sell architecture, protocol expertise and senior execution."
- **Before decisions, not after** — We join at the architecture and decision stage, where technical choices determine everything that follows.
- **Accountable end to end** — We own technical delivery across architecture, engineering, testing, deployment and scale.
- **Senior hands only** — The architects you meet are the engineers who build. No hand-offs to junior teams.

## 5. Who we are (TECH p4)
"A senior technical partner for complex financial, decentralised and intelligent systems."
"Hashmark Labs is a deep-technical engineering consultancy across AI-integrated systems, blockchain protocol engineering, financial infrastructure, data intelligence and high-performance backends. We partner with ambitious teams from the first architecture decision to production, mainnet and scale — and stay accountable for how the system performs."
Lifecycle: Architecture → MVP → Production → Scale.
Who we work with: Funded startups & founders · Protocols & DAOs · FinTech & financial platforms · AI & data companies · Enterprises & trade platforms.

## 6. Engineering capabilities (TECH p5) — "Where we go deepest."
01 AI-Integrated Systems — LLM agents, RAG, agentic workflows and on-chain + AI hybrid architectures
02 DeFi & Financial Protocols — AMMs, perps, lending, staking, yield engines and tokenomics design
03 DEX & Trading Infrastructure — Matching engines, hybrid liquidity routing and professional trading terminals
04 Market Intelligence & Data — Prediction-market intelligence, cross-venue analytics, terabyte-scale pipelines
05 FinTech, Payments & Stablecoins — Payment rails, multi-asset wallets, ledgers, settlement and stablecoin rails
06 RWA & Tokenization — Real estate, commodities, collectibles and ESG asset platforms
Also: Blockchain infrastructure · Wallets, identity & interop · Gaming & digital assets

## 7. Technical depth (TECH p6)
- Protocol layers: Ethereum, Solana, Polygon, Arbitrum, Optimism · Cosmos SDK, Substrate & Polkadot · Cardano UTxO — Aiken & Plutus · Internet Computer canisters · Indexers, RPC & event-driven services
- AI & data: LLM orchestration & AI agents · RAG and agentic workflows · Multi-source ingestion pipelines · TimescaleDB, terabyte-scale data · Real-time intelligence & risk models
- Advanced protocol tech: ZK proofs — zkSNARKs, zkVMs · Trusted Execution Environments · Optimistic & ZK rollups · MEV-aware architectures · Account abstraction (ERC-4337)
- Engineering stack: Solidity, Rust, Move, Aiken, Plutus, Foundry, Hardhat, Anchor, Node.js, TypeScript, Python, Go, React, Next.js, PostgreSQL, TimescaleDB, Docker, Kubernetes, AWS, GCP

## 8. Engineering process (TECH p7) — "Senior-led. Structured. Transparent."
01 Intake & context — Vision, roadmap, documentation, codebase, constraints and business objectives — absorbed upfront.
02 Discovery & architecture — Research, system design, protocol modelling, security and AI/data planning.
03 Execution — Code-first delivery, weekly milestones, continuous communication and live progress visibility.
04 QA, security & launch — Testing, audits, deployment, production handover and post-launch technical support.
Rituals: Weekly deliverables · Live progress visibility · Direct engineer access

## 9. Engineering operating principles (TECH p8) — "Quality over quantity — by design."
Big "0" — Junior-only deliveries. "Every engagement is led, architected and built by senior engineers — with dedicated attention and minimal context switching."
- Security & correctness — Especially in cryptography and value-bearing code, where mistakes are irreversible.
- Maintainable architectures — Clear boundaries and minimal complexity your team can own after us.
- Predictable delivery — A week-by-week plan with visible progress — no black boxes.
- Limited concurrency — We cap concurrent engagements so each gets dedicated senior engineers.

## 10. Flagship case studies (TECH p9–14) — all "LIVE IN PRODUCTION"
Intro: "Live systems, in production. Production systems across AI, financial infrastructure, data intelligence and protocol engineering — every one senior-led."

### Case 01 — Assymetrix · AI & Data Intelligence · assymetrix.com · data.assymetrix.com
Summary: A multi-venue prediction-market intelligence platform.
Challenge: Every venue speaks a different market, trade and outcome model — and the edge lives in comparing them in real time.
Engineered: Canonical schema unifying Polymarket, Kalshi, Limitless and 5+ venues into one multi-terabyte dataset. · Cross-market AI engines surfacing arbitrage spreads, probability mispricings and yield strategies. · TimescaleDB hypertables, compression and tiered retention; real-time sync with automated recovery.
Diagram "System architecture": Source ingestion (Polymarket · Kalshi · Limitless · 5+ venues) → Canonical normalisation (One schema for markets, trades & outcomes) → AI intelligence layer (Arbitrage, mispricing & yield signals)
Stack: Node.js, TypeScript, PostgreSQL, TimescaleDB, Event-driven

### Case 02 — Fincruse / CruseX · Financial & Trading Infrastructure · fincruse.com
Summary: One system for banking, trading, wallets and payments.
Challenge: Deliver exchange-grade execution and bank-grade money movement, without reconciliation gaps between them.
Engineered: Internal matching engine with hybrid routing — user-to-user first, external venues for residual liquidity. · Double-entry ledger and atomic transactions for deposits, withdrawals and wallet reconciliation. · Transak on/off-ramp and Square payments; CruseX HFT terminal with spot and demo trading.
Diagram "Order flow & settlement": Internal matching engine (User-to-user matching first) → External venue routing (Binance · Coinbase · Bybit · B2broker) → Double-entry ledger (Atomic settlement & reconciliation)
Stack: Matching engine, Double-entry ledger, Transak, Fireblocks-ready

### Case 03 — Goldpesa · DeFi & Tokenomics · goldpesa.com · gpmines.com
Summary: A multi-protocol DeFi ecosystem with fee-driven tokenomics.
Challenge: Design rewards funded by real protocol activity — not inflationary emissions — across several interlocking protocols.
Engineered: Gamified staking "Mines": users stake USDC, advance through levels and earn protocol-driven rewards. · GPO and GPX liquidity protocols (100M tokens each) with demand-driven release and fee routing. · GoldPesa Vault: GPO staking with periodic 1:1 conversion into GPX and flexible unstaking.
Diagram "Protocol fee routing": GPX transaction fees (Every trade funds the ecosystem) → Protocol fee router → Mines · Pawn · Treasury · GoldPesa; GPO ⇄ Vault ⇄ GPX (1:1 periodic conversion · flexible unstaking)
Stack: Solidity, Tokenomics, Liquidity protocols, Vaults, Fee routing

### Case 04 — INVARIA · Enterprise AI & Trade Infrastructure · invaria.digital
Summary: Decision infrastructure for global commodity trading.
Challenge: Credit and supply-chain decisions depend on counterparties and cargo that can't simply be taken on trust.
Engineered: Entity Risk Calculator — AI scoring of revenue, liquidity, debt and jurisdictional risk into explainable credit decisions. · VOSS — a live operational truth layer from GPS, maritime tracking, IoT and behavioural signals. · Deterministic workflow engine plus on-chain document fingerprinting across procurement, credit and logistics.
Diagram "Six-layer architecture": 06 Enterprise integrations · 05 Blockchain verification · 04 Real-time event infrastructure · 03 AI decision engines · 02 Workflow orchestration · 01 Presentation
Stack: React, TypeScript, Node.js, PostgreSQL, AI/ML, On-chain proofs

### Case 05 — Foreon Network · Protocol Engineering · foreon.network
Summary: A first-of-its-kind Cardano-native prediction market.
Challenge: Order books assume shared mutable state — Cardano's UTxO model doesn't provide it, so trading had to be redesigned from first principles.
Engineered: UTxO-native limit and market orders with partial fills on a fully on-chain order book. · MarketFactory, escrow/treasury validators and OutcomeToken minting policies in Aiken/Plutus. · Oracle resolution with dispute windows, plus transaction builders, event watchers and deployment tooling.
Diagram "On-chain components": MarketFactory · Escrow & treasury validators · OutcomeToken minting policies · On-chain order book · Oracle resolution & disputes
Stack: Cardano, Aiken, Plutus, UTxO, Blockfrost, Ogmios

## 11. Additional work (TECH p15) — "Breadth behind the depth."
| Tag | Name | Line |
|---|---|---|
| NFT-FI | StreamNFT | Staking, rent & loans; ERC-7066 contributor |
| TOKEN LAUNCH | PumpMarketCap | On-chain launch & liquidity mechanics |
| GAMING | Luckify | Provably fair play via Chainlink VRF |
| GAMEFI | Zuraverse | NFT economies & tokenised item trading |
| IDENTITY · DAO | CHOICE | ZK-ready W3C DID identity & reputation |
| WALLETS | BitDEX | Multi-chain wallet & secure key handling |
| COMMERCE | droplinked | NFT commerce with revenue sharing |
| TICKETING | eventflo | On-chain tickets & fraud-resistant access |
| RWA · ESG | Web3Eco | Tokenised plantations & profit cycles |
| RWA | Courtyard | Custody & redemption of collectibles |
| RWA · NDA | PropertyVerse | Fractional real-estate ledgers |
| CREATIVE | ArtanAI | NFT ownership with physical delivery |
PT p12 adds for StreamNFT: "Staking, rent and loan protocols on Solana and Ethereum — and a senior contribution to ERC-7066 lockable NFTs."

## 12. Team (TECH p16) — "The architects you meet are the ones who build."
- **Vidit Galav** — Head of Engineering — Principal architect who has designed and shipped production systems across AI-integrated DeFi, market intelligence, fintech rails, enterprise data and protocols.
- **Haard** — Tech Lead · Cryptography — Specialist in advanced cryptographic systems and secure smart-contract design — resilient protocol mechanics, encryption and auditing of complex systems.
- **Bhargava** — Backend & AI Lead — Full-stack Web3 engineer building end-to-end dApps — Solidity on EVM chains, Rust for high-performance runtimes, scalable backend and AI systems.
- Senior core + specialist bench: Blockchain architects · Protocol designers · AI / ML · DevOps & infra · Data & backend · QA & security
- No photos exist. Use initials avatars (VG, H, B) with gradients: pink→violet, violet, blue→teal.

## 13. Why Hashmark — Engineering (TECH p17) — "Evidence, not adjectives."
01 Protocol-level thinking — On-chain order books, validators and tokenomics — Foreon, Goldpesa.
02 Financial infrastructure — Matching engines and double-entry ledgers — Fincruse / CruseX.
03 Data infrastructure at scale — Multi-terabyte, real-time pipelines — Assymetrix.
04 AI + blockchain convergence — AI risk engines with on-chain verification — INVARIA.
05 Senior engineers from day one — The architects in the first call build the system.
06 Web3-native execution — Shipped on Ethereum, Solana, Cardano, Polygon and more.
07 Security-first engineering — Correctness-first design for cryptography and value-bearing code.
08 Long-term partnership — From architecture to post-launch advisory and scale.

## 14. Engineering engagement (TECH p18) — "Flexible models, scoped to the problem."
01 Dedicated engineering — A senior team embedded in your roadmap for the long run.
02 Project-based delivery — Defined scope from architecture to production launch.
03 Architecture & advisory — System design, technical due diligence and CTO-level guidance.
04 Protocol engineering — Smart contracts, on-chain mechanics and audit readiness.
05 Long-term partnership — Ongoing ownership through scale, maintenance and evolution.
"Commercial terms are scoped after technical discovery — to complexity, delivery requirements and engagement model."
Weekly visibility & direct engineer access · USA · Europe · APAC · Middle East · Lead architect across time zones
Closing: "Let's build what's next." — "Building something technically complex and looking for a team that thinks at the protocol level? Let's discuss the architecture."

---

## 15. PRODUCT & TOKENOMICS practice (PT)
Hero: "From idea to working economy." — "Product strategy, tokenomics and go-to-market architecture for Web3, AI and fintech ventures — designed by the engineers who build protocols."
Position: "Most tokenomics is designed in a spreadsheet. Ours is designed by people who have built the protocols."
- Is blockchain justified? — We validate the use case first. If a token does not serve the business, we will tell you.
- Economies that survive stress — Incentives, emissions and adversarial behaviour modelled before launch.
- Strategy that ships — Every recommendation is buildable — and our engineering team can build it.
Stats title: "Strategy grounded in what actually ships." (70+ Products delivered — Wallets, DeFi, trading, identity, RWA and AI — strategy informed by real builds · 6.5+ Across protocol design, fintech rails and data platforms · 11 Pattern recognition across 11 product categories · 4–5 Senior architects on every advisory engagement)
Problem: "Why Web3 products fail before they scale." (wrong → instead)
01 Tokens without a job — A token added for fundraising, with no utility or value accrual. → Utility and value-accrual design tied to real product usage and revenue.
02 Emissions that fund exits — Incentives attract mercenary capital that leaves when rewards drop. → Emission schedules, sinks and vesting modelled against user behaviour.
03 Roadmaps disconnected from architecture — Promises the chosen chain and stack cannot deliver. → Roadmaps built with architects — sequenced by technical dependency.
04 UX that loses users at the wallet — Onboarding, gas and signing friction kill conversion. → Onboarding designed around account abstraction and embedded wallets.
Services "Strategy from concept to launch.": 01 Product Strategy & Roadmap — Use-case validation, positioning, MVP scope and a sequenced roadmap. 02 Tokenomics & Incentive Design — Utility, supply, emissions, distribution, vesting, sinks and value accrual. 03 Governance & DAO Design — Voting models, treasury policy, delegation and progressive decentralisation. 04 Web3 UX Strategy — Onboarding, wallet flows, account abstraction and conversion design. 05 Architecture & Feasibility — Chain selection, build-vs-integrate decisions and cost-to-build. 06 Launch & GTM Architecture — TGE sequencing, liquidity planning and launch readiness. Also: Technical due diligence / Litepaper & whitepaper input / Fractional CPO
Framework "How we design token economies." (We do / We measure): 01 Utility & value — Define what the token does and how value accrues to holders / Utility map, Value-accrual paths. 02 Supply & emissions — Supply, emission curves and release logic tied to demand / Emission schedule, Inflation profile. 03 Distribution — Allocations, vesting and unlocks across every stakeholder / Allocation table, Unlock calendar. 04 Incentives & sinks — Rewards, fees and sinks that balance participation and pressure / Net emissions, Fee flows. 05 Stress-testing — Scenario and adversarial simulation before anything ships / Scenario outcomes, Failure thresholds. Footnote: "Implemented in production: fee-routing tokenomics for Goldpesa (GPO/GPX liquidity protocols)."
Process "Discover. Validate. Design. Stress-test.": 01 Discover — Business model, market, users, competitors and constraints — absorbed upfront. 02 Validate — Use-case, token and chain decisions tested against the business case. 03 Design — Product roadmap, token economy, governance and architecture blueprint. 04 Stress-test & hand off — Simulation, review and a build-ready specification — or we build it. Rituals: Weekly working sessions / Decision log / Direct architect access
Deliverables "Deliverables, not decks." — Every engagement ends with artefacts your team, investors and engineers can use. Strategy/Product strategy: Strategy memo, MVP scope & roadmap, Competitive positioning. Economy/Token economy: Tokenomics model, Scenario simulations, Token design paper input. Governance: Governance framework, Treasury policy, Decentralisation path. Build/Build readiness: Architecture blueprint, Chain & stack decision, Launch plan.
Who it is for "Where we add the most value.": 01 Pre-token founders — Deciding whether, when and how to launch a token. 02 Protocols redesigning — Fixing emissions, liquidity or governance that is not working. 03 Fintech & enterprises — Evaluating blockchain, stablecoins or tokenisation for a real business case. 04 Investors & funds — Technical and tokenomics due diligence before an investment. Line: "The best time to design an economy is before launch. The second best time is now."
Principles "Advice you can build on.": 0 — Tokens recommended for their own sake. "We are business-first. If a token, a chain or a DAO does not serve your model, our recommendation will say so." A Compliance-aware design — We design alongside your legal counsel. We do not provide legal or securities advice. B Simulate before launch — No economy ships without scenario and adversarial testing. C Buildable by default — Every recommendation is checked against real architecture. D Independent judgement — Our advice is not tied to any chain, exchange or fund.
Team "Architects and strategists, together." — Advisory engagements pair product strategy with protocol engineering — so every decision is both commercially sound and buildable. Engagement lead — Owns the strategy, the decision log and the relationship. Tokenomics designer — Economy design, modelling and scenario simulation. Protocol architect — Chain selection, smart-contract architecture and feasibility. Product & UX strategist — Roadmap, onboarding and conversion design. Growth advisor — Launch, liquidity and GTM sequencing from our Growth practice. Backed by: Led by Vidit Galav, Head of Engineering — with the Hashmark Labs protocol team.
Selected work "Economies and protocols we have built.": Goldpesa (DeFi · Tokenomics), Foreon Network (Protocol · Markets), StreamNFT (NFT-Fi · Standards).
Why "Why founders choose us for strategy.": 01 Designed by builders — Token economies we have implemented run in production. 02 Strategy and build under one roof — From recommendation to shipped protocol. 03 Business-first honesty — We say no to tokens that do not serve the business. 04 Stress-tested economies — Scenario and adversarial modelling before launch. 05 Protocol-level depth — EVM, Solana, Cardano and more. 06 Senior architects only — The people advising you design real systems. 07 GTM-aware design — Pairs with our Growth and BD practices for launch. 08 Long-term partnership — From first design to governance evolution.
Engagement "Flexible models, scoped to the decision.": 01 Strategy sprint — A focused engagement to answer a defined product or token question. 02 Tokenomics engagement — Full economy design, modelling and simulation. 03 Fractional CPO — Senior product leadership embedded in your team. 04 Strategy + build — Advisory that flows directly into Hashmark engineering. "Commercial terms are scoped after discovery — to the decisions, depth and deliverables required."
Closing: "Let's design what lasts." — "Planning a token, redesigning an economy or defining a Web3 product? Let's start with a strategy session."
Part-of line: "Strategy, delivered by the people who build."

## 16. GROWTH & MARKETING practice (GR)
Hero: "Growth for products that are hard to explain." — "Full-funnel marketing, community and brand for Web3, AI and fintech products — led by people who understand how your product actually works."
Position: "Most crypto marketing sells noise. We sell understanding — and the growth that follows it."
- Engineering-literate messaging — We read the whitepaper and the code. Every claim we publish survives technical scrutiny.
- Community before campaigns — Durable holders, users and contributors — not rented attention that leaves after the airdrop.
- Measured, not guessed — Every channel is tied to acquisition, activation and retention — on-chain where possible.
Stats title: "Product literacy is our unfair advantage." (70+ Products delivered — Across DeFi, trading, identity, RWA and AI — we know what makes users adopt · 6.5+ Years in the ecosystem — Across market cycles, narratives and shifting user behaviour · 11 Category context from prediction markets to real-world assets · 4–5 Senior strategists on every account — never a junior-run retainer)
Problem "Why Web3 growth usually stalls.": 01 The narrative outruns the product — Claims the product cannot back up erode trust at the first test. → Positioning built from the product itself — mechanics, differentiation and proof. 02 Rented attention — Paid KOL spikes and airdrop farmers that disappear in weeks. → Community programmes designed for retention, contribution and advocacy. 03 Vanity metrics — Followers and impressions reported while wallets and revenue stay flat. → Reporting on active users, funded wallets, TVL and cost per activated user. 04 Fragmented vendors — Five agencies, five dashboards and nobody who owns the outcome. → One accountable growth partner owning the funnel end to end.
Services "Full-funnel Web3 growth.": 01 Positioning & Narrative — Category design, messaging architecture and a narrative your product can defend. 02 Content & Thought Leadership — Technical explainers, research, founder voice, docs-to-content and SEO. 03 Community Building — Discord, Telegram and X programmes, moderation and ambassador systems. 04 KOL & Influencer Campaigns — Vetted, disclosed and tracked creator partnerships measured on outcomes. 05 PR & Media Relations — Launch, funding and milestone announcements with crypto and tech media. 06 Performance Acquisition — Paid and organic acquisition with on-chain attribution and conversion work. Also: Fractional CMO / Brand identity / Analytics & attribution
Framework "From awareness to on-chain activation.": 01 Awareness — Narrative, PR, KOL and content that earn the first look / Share of voice, Qualified reach. 02 Consideration — Explainers, docs, comparisons and social proof for sceptics / Site engagement, Waitlist sign-ups. 03 Activation — Onboarding flows and incentives that get users to a first transaction / Wallet connects, First transactions. 04 Retention — Community rituals, product updates and loyalty mechanics / D30 retention, Active members. 05 Advocacy — Ambassadors, referrals and contributors who grow the product for you / Referral share, UGC volume. "Every stage has an owner, a metric and a weekly number."
Process "Diagnose. Design. Launch. Compound.": 01 Audit & positioning — Product, market, competitor and community audit — then a positioning your team can repeat. 02 Growth plan — Channel mix, narrative calendar, budget allocation and the metrics we will be judged on. 03 Launch & operate — Campaigns, content and community run weekly by senior operators. 04 Measure & compound — Cut what does not convert, double down on what does, report every week. Rituals: Weekly growth report / Shared dashboard / Direct strategist access
Measure "Outcomes, not impressions." — We agree the scorecard before the first campaign goes live. North star/Product outcomes: Active wallets / users, Funded accounts or TVL, Revenue or fee growth. Acquisition/Efficient growth: CAC by channel, Visit → sign-up conversion, Cost per activated user. Community/Durable community: 30-day member retention, Active contributors, Sentiment and support load. Brand/Earned authority: Share of voice, Search visibility, Tier-1 media coverage.
Launch programmes "Built for the moments that matter.": 01 Token & TGE launch — Narrative, community readiness, KOL sequencing and launch-week operations. 02 Mainnet & product launch — Awareness build-up, onboarding campaigns and post-launch retention. 03 Funding announcement — Story, media outreach and investor-grade narrative around the round. 04 Market expansion — Localised positioning and community for new regions and languages. "Launch moments are won in the six weeks before them — we plan backwards from the date."
Principles "Growth you can defend.": 0 — Bots, fake followers or bought engagement. "Every number we report is real. Artificial metrics damage exchange, investor and user trust — so we never use them." A Compliance-aware communication — We work alongside your legal counsel. No price predictions, no return promises. B Disclosed partnerships — Every KOL and creator collaboration is disclosed and tracked. C Technical accuracy — Content reviewed against the product — our engineers are one message away. D You own the assets — Channels, audiences, data and content stay with you.
Team "A senior growth pod, not a pool." — Every engagement gets a dedicated pod led by a senior growth lead — sized to the stage and scope of your company. Growth lead — Owns the strategy, the scorecard and the relationship. Your single point of accountability. Content & narrative — Research, technical writing, founder voice and editorial calendar. Community lead — Programme design, moderation, ambassadors and community analytics. Performance & analytics — Paid channels, attribution, funnel analysis and weekly reporting. Technical advisor — A Hashmark engineer who validates claims and product narratives. Backed by: Hashmark Labs engineering — 70+ Web3, AI and fintech products delivered.
Selected work: three "Case study in preparation" slots (Growth · Web3; Community · Launch; Content · Brand). "Detailed growth case studies are available on request."
Why "Why teams choose us for growth.": 01 Engineering-literate marketing — We understand the protocol, so the story is accurate and differentiated. 02 One partner for product and growth — Build and growth under one roof — no hand-off gaps. 03 Outcome-based scorecards — Users, wallets and revenue — agreed before we start. 04 Crypto-native, globally delivered — Across USA, Europe, APAC and the Middle East. 05 Senior operators only — The strategist who pitches you runs your account. 06 Trust-first practices — Disclosed partnerships and no artificial engagement. 07 Launch experience — TGE, mainnet, funding and expansion programmes. 08 Long-term partnership — From first launch to category leadership.
Engagement "Flexible models, scoped to your stage.": 01 Growth retainer — An ongoing growth pod owning the full funnel month to month. 02 Launch sprint — A fixed programme built around a TGE, mainnet or funding moment. 03 Fractional CMO — Senior marketing leadership embedded in your team. 04 Growth audit — A diagnostic of positioning, channels and funnel with a 90-day plan. "Commercial terms are scoped after a growth diagnostic — to stage, goals and channel mix."
Closing: "Let's grow what you built." — "Launching, scaling or repositioning a Web3, AI or fintech product? Let's start with a growth diagnostic."
Part-of: "Growth, built by the people who build."

## 17. BD & PARTNERSHIPS practice (BD)
Hero: "The partnerships behind real traction." — "Business development, partnerships and sales for Web3, AI and fintech companies — from the first integration partner to an enterprise pipeline."
Position: "Warm introductions don't scale. A repeatable pipeline does."
- Integration-ready partnerships — We speak the partner's technical language, so deals get integrated — not just announced.
- Pipeline as a system — ICP, sequencing, CRM discipline and forecasting — revenue you can predict.
- Senior-led conversations — Founder-level outreach to decision-makers, not volume-driven SDR spam.
Stats title: "We know what partners ask before they sign." (70+ Products delivered — Integration, security and scale questions answered from real delivery experience · 6.5+ Years in the ecosystem — Across exchanges, wallets, chains, infrastructure and fintech · 11 Buyer and partner maps across 11 verticals · 4–5 Senior BD attention on every account)
Problem "Why business development stalls.": 01 Founder-led sales hits a ceiling — Deals depend on one calendar, and growth stops when the founder is busy. → A documented sales motion the team can run — with senior coverage from day one. 02 Announced, never integrated — Partnership press releases with no product, users or revenue behind them. → Partnerships scoped around integration, co-marketing and shared metrics. 03 No defined ICP — Outreach to everyone, conversion from almost no one. → A sharp ICP and target-account list built from real buying signals. 04 Pipeline lives in inboxes — No CRM, no forecast and no visibility for the board. → A shared CRM, stage definitions and a weekly pipeline review.
Services "Business development, end to end.": 01 Partnership Strategy — Ecosystem mapping, partner prioritisation and deal structures that create value. 02 Ecosystem & Grants — L1/L2 foundations, grant programmes, accelerators and ecosystem funds. 03 Exchange & Listing Readiness — Listing documentation, readiness reviews and exchange outreach. 04 B2B & Enterprise Sales — ICP design, account-based outbound and full-cycle deal management. 05 Sales Enablement — Pitch decks, media kits, case studies, proposals and demo narratives. 06 Investor Communications — Investor updates, data-room narrative and round storytelling support. Also: Fractional Head of BD / CRM setup / Market-entry strategy
Lifecycle "From target list to integrated partner.": 01 Map — Ecosystem map and a prioritised list of partners that move your metrics / Target accounts, Fit score. 02 Engage — Senior outreach, tailored pitch and a clear mutual value case / Reply rate, Meetings booked. 03 Structure — Commercial terms, technical scope and success metrics agreed / Proposals sent, Win rate. 04 Integrate — Technical integration supported by Hashmark engineers / Integrations live, Time to launch. 05 Expand — Co-marketing, joint launches and account growth / Partner-sourced users, Revenue. "Partnerships are measured on users and revenue — not logos on a slide."
Process "Map. Engage. Close. Compound.": 01 Diagnostic — Business model, ICP, current pipeline and partner landscape review. 02 GTM & BD plan — Target accounts, partner priorities, sales motion and quarterly targets. 03 Execute — Outreach, meetings, proposals and deal management run by senior BD leads. 04 Review & scale — Weekly pipeline review, forecast updates and playbooks your team keeps. Rituals: Weekly pipeline report / You own the CRM / Direct BD lead access
Measure "Pipeline you can forecast." — Targets and stage definitions are agreed before outreach begins. Pipeline/Pipeline health: Qualified pipeline value, Opportunities by stage, Cost per opportunity. Conversion/Deal velocity: Meeting → proposal rate, Win rate, Sales cycle length. Partnerships/Partner impact: Integrations live, Partner-sourced users, Co-marketing reach. Revenue/Commercial outcome: New ARR / revenue, Expansion revenue, Forecast accuracy.
Partner universe "Where we open doors.": 01 Exchanges & liquidity — Centralised and decentralised exchanges, market-making and liquidity partners. 02 Chains & ecosystems — L1/L2 foundations, grant programmes and ecosystem funds. 03 Wallets & infrastructure — Wallets, oracles, RPC, custody and on/off-ramp providers. 04 Enterprises & fintech — Banks, payment companies, trade platforms and enterprise buyers. "We prioritise partners by the users and revenue they can move — not by the size of their logo."
Principles "Relationships worth keeping.": 0 — Guaranteed listings or pay-to-play promises. "No credible advisor can guarantee a listing. We prepare you, open the right conversations and represent you honestly." A Compliance-aware — Listings, token and investor communications are reviewed with your counsel. B You own the pipeline — Contacts, CRM data and relationships belong to you. C Transparent reporting — Every week: activity, pipeline movement and what we learned. D Long-term reputation — We protect your name in every conversation we open.
Team "A senior BD pod, not a call centre." — Every engagement is led by a senior business development lead who runs the conversations personally. BD lead — Owns strategy, targets and senior partner conversations. Your single point of accountability. Partnerships manager — Partner pipeline, deal structuring and joint-launch coordination. Sales operations — CRM, sequencing, reporting and forecast hygiene. Enablement & content — Decks, proposals, media kits and case studies. Technical advisor — A Hashmark engineer for integration scoping and technical due diligence. Backed by: Hashmark Labs engineering — 70+ Web3, AI and fintech products delivered.
Selected work: three "Case study in preparation" slots (Partnerships · Web3; Enterprise sales · AI; Ecosystem · Grants). "Detailed BD case studies are available on request."
Why "Why teams choose us for BD.": 01 Technical depth in every deal — Integration questions answered in the room — not after. 02 Deals that ship — Our engineers can scope and support the integration. 03 A system, not a Rolodex — ICP, CRM, sequencing and forecasting you keep. 04 Senior-led outreach — Decision-maker conversations, never mass spam. 05 Crypto-native, globally delivered — Across USA, Europe, APAC and the Middle East. 06 Honest representation — No guaranteed listings, no inflated promises. 07 Full-stack GTM — Pairs with our Growth practice for joint launches. 08 Long-term partnership — From first partner to enterprise pipeline.
Engagement "Flexible models, scoped to your pipeline.": 01 Fractional Head of BD — Senior BD leadership embedded in your team. 02 Partnership sprint — A focused programme to land a defined set of strategic partners. 03 Sales-as-a-service — An ongoing outbound and deal-management retainer. 04 Listing & launch readiness — Documentation, readiness review and exchange outreach. "Commercial terms are scoped after a BD diagnostic — to targets, market and sales motion."
Closing: "Let's open the right doors." — "Building partnerships, preparing for listings or scaling enterprise sales? Let's start with a BD diagnostic."
Part-of: "Partnerships, backed by real engineering."

## 18. Things that DO NOT exist (never fabricate)
- No client testimonials/quotes. No client logos (image files). No awards. No press mentions. No funding/revenue figures of clients. No audit firm partnerships. No office address. No legal entity name. No founding year. No social media URLs. No calendar booking link. No team photos. No surnames for Haard or Bhargava. No growth/BD case studies (explicitly "in preparation"). No pricing.
