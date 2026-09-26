// Case studies. Source: _docs/01-CONTENT-SOURCE-OF-TRUTH.md §10–11 (TECH p9–15). No metrics beyond the decks.

export type Diagram =
  | { kind: "flow"; title: string; nodes: { title: string; body?: string }[]; tail?: { title: string; items: string[] } }
  | { kind: "layers"; title: string; layers: string[] }
  | { kind: "components"; title: string; items: string[] }
  | { kind: "fee-router"; title: string };

export type CaseStudy = {
  slug: string;
  index: string;
  name: string;
  category: string;
  practices: ("engineering" | "product-tokenomics")[];
  domains: { label: string; href: string }[];
  summary: string;
  challenge: string;
  engineered: string[];
  diagram: Diagram;
  stack: string[];
  status: "Live in production";
};

export const cases: CaseStudy[] = [
  {
    slug: "assymetrix",
    index: "01",
    name: "Assymetrix",
    category: "AI & Data Intelligence",
    practices: ["engineering"],
    domains: [
      { label: "assymetrix.com", href: "https://assymetrix.com" },
      { label: "data.assymetrix.com", href: "https://data.assymetrix.com" },
    ],
    summary: "A multi-venue prediction-market intelligence platform.",
    challenge:
      "Every venue speaks a different market, trade and outcome model — and the edge lives in comparing them in real time.",
    engineered: [
      "Canonical schema unifying Polymarket, Kalshi, Limitless and 5+ venues into one multi-terabyte dataset.",
      "Cross-market AI engines surfacing arbitrage spreads, probability mispricings and yield strategies.",
      "TimescaleDB hypertables, compression and tiered retention; real-time sync with automated recovery.",
    ],
    diagram: {
      kind: "flow",
      title: "System architecture",
      nodes: [
        { title: "Source ingestion", body: "Polymarket · Kalshi · Limitless · 5+ venues" },
        { title: "Canonical normalisation", body: "One schema for markets, trades & outcomes" },
        { title: "AI intelligence layer", body: "Arbitrage, mispricing & yield signals" },
      ],
    },
    stack: ["Node.js", "TypeScript", "PostgreSQL", "TimescaleDB", "Event-driven"],
    status: "Live in production",
  },
  {
    slug: "fincruse-crusex",
    index: "02",
    name: "Fincruse / CruseX",
    category: "Financial & Trading Infrastructure",
    practices: ["engineering"],
    domains: [{ label: "fincruse.com", href: "https://fincruse.com" }],
    summary: "One system for banking, trading, wallets and payments.",
    challenge:
      "Deliver exchange-grade execution and bank-grade money movement, without reconciliation gaps between them.",
    engineered: [
      "Internal matching engine with hybrid routing — user-to-user first, external venues for residual liquidity.",
      "Double-entry ledger and atomic transactions for deposits, withdrawals and wallet reconciliation.",
      "Transak on/off-ramp and Square payments; CruseX HFT terminal with spot and demo trading.",
    ],
    diagram: {
      kind: "flow",
      title: "Order flow & settlement",
      nodes: [
        { title: "Internal matching engine", body: "User-to-user matching first" },
        { title: "External venue routing", body: "Binance · Coinbase · Bybit · B2broker" },
        { title: "Double-entry ledger", body: "Atomic settlement & reconciliation" },
      ],
    },
    stack: ["Matching engine", "Double-entry ledger", "Transak", "Fireblocks-ready"],
    status: "Live in production",
  },
  {
    slug: "goldpesa",
    index: "03",
    name: "Goldpesa",
    category: "DeFi & Tokenomics",
    practices: ["engineering", "product-tokenomics"],
    domains: [
      { label: "goldpesa.com", href: "https://goldpesa.com" },
      { label: "gpmines.com", href: "https://gpmines.com" },
    ],
    summary: "A multi-protocol DeFi ecosystem with fee-driven tokenomics.",
    challenge:
      "Design rewards funded by real protocol activity — not inflationary emissions — across several interlocking protocols.",
    engineered: [
      "Gamified staking “Mines”: users stake USDC, advance through levels and earn protocol-driven rewards.",
      "GPO and GPX liquidity protocols (100M tokens each) with demand-driven release and fee routing.",
      "GoldPesa Vault: GPO staking with periodic 1:1 conversion into GPX and flexible unstaking.",
    ],
    diagram: { kind: "fee-router", title: "Protocol fee routing" },
    stack: ["Solidity", "Tokenomics", "Liquidity protocols", "Vaults", "Fee routing"],
    status: "Live in production",
  },
  {
    slug: "invaria",
    index: "04",
    name: "INVARIA",
    category: "Enterprise AI & Trade Infrastructure",
    practices: ["engineering"],
    domains: [{ label: "invaria.digital", href: "https://invaria.digital" }],
    summary: "Decision infrastructure for global commodity trading.",
    challenge:
      "Credit and supply-chain decisions depend on counterparties and cargo that can't simply be taken on trust.",
    engineered: [
      "Entity Risk Calculator — AI scoring of revenue, liquidity, debt and jurisdictional risk into explainable credit decisions.",
      "VOSS — a live operational truth layer from GPS, maritime tracking, IoT and behavioural signals.",
      "Deterministic workflow engine plus on-chain document fingerprinting across procurement, credit and logistics.",
    ],
    diagram: {
      kind: "layers",
      title: "Six-layer architecture",
      layers: [
        "Enterprise integrations",
        "Blockchain verification",
        "Real-time event infrastructure",
        "AI decision engines",
        "Workflow orchestration",
        "Presentation",
      ],
    },
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AI/ML", "On-chain proofs"],
    status: "Live in production",
  },
  {
    slug: "foreon-network",
    index: "05",
    name: "Foreon Network",
    category: "Protocol Engineering",
    practices: ["engineering", "product-tokenomics"],
    domains: [{ label: "foreon.network", href: "https://foreon.network" }],
    summary: "A first-of-its-kind Cardano-native prediction market.",
    challenge:
      "Order books assume shared mutable state — Cardano's UTxO model doesn't provide it, so trading had to be redesigned from first principles.",
    engineered: [
      "UTxO-native limit and market orders with partial fills on a fully on-chain order book.",
      "MarketFactory, escrow/treasury validators and OutcomeToken minting policies in Aiken/Plutus.",
      "Oracle resolution with dispute windows, plus transaction builders, event watchers and deployment tooling.",
    ],
    diagram: {
      kind: "components",
      title: "On-chain components",
      items: [
        "MarketFactory",
        "Escrow & treasury validators",
        "OutcomeToken minting policies",
        "On-chain order book",
        "Oracle resolution & disputes",
      ],
    },
    stack: ["Cardano", "Aiken", "Plutus", "UTxO", "Blockfrost", "Ogmios"],
    status: "Live in production",
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);

export type AdditionalWork = { tag: string; name: string; line: string; tone: "pink" | "violet" | "teal" };

export const additionalWork: AdditionalWork[] = [
  { tag: "NFT-Fi", name: "StreamNFT", line: "Staking, rent & loans; ERC-7066 contributor", tone: "pink" },
  { tag: "Token launch", name: "PumpMarketCap", line: "On-chain launch & liquidity mechanics", tone: "pink" },
  { tag: "Gaming", name: "Luckify", line: "Provably fair play via Chainlink VRF", tone: "pink" },
  { tag: "GameFi", name: "Zuraverse", line: "NFT economies & tokenised item trading", tone: "pink" },
  { tag: "Identity · DAO", name: "CHOICE", line: "ZK-ready W3C DID identity & reputation", tone: "violet" },
  { tag: "Wallets", name: "BitDEX", line: "Multi-chain wallet & secure key handling", tone: "violet" },
  { tag: "Commerce", name: "droplinked", line: "NFT commerce with revenue sharing", tone: "violet" },
  { tag: "Ticketing", name: "eventflo", line: "On-chain tickets & fraud-resistant access", tone: "violet" },
  { tag: "RWA · ESG", name: "Web3Eco", line: "Tokenised plantations & profit cycles", tone: "teal" },
  { tag: "RWA", name: "Courtyard", line: "Custody & redemption of collectibles", tone: "teal" },
  { tag: "RWA · NDA", name: "PropertyVerse", line: "Fractional real-estate ledgers", tone: "teal" },
  { tag: "Creative", name: "ArtanAI", line: "NFT ownership with physical delivery", tone: "teal" },
];

/** All client names from the decks, for the wordmark marquee (text only — no logos exist). */
export const clientNames = [
  ...cases.map((c) => c.name),
  ...additionalWork.map((w) => w.name),
];
