// Authored FAQ. Every answer restates facts from the decks. Logged in _docs/04-ADDED-CONTENT-REGISTER.md (#2).

export type Faq = { q: string; a: string };

export const homeFaq: Faq[] = [
  {
    q: "Who will actually work on our project?",
    a: "Senior engineers. The people who scope your system on the first call are the ones who design and build it, and we don't hand work down to a junior team.",
  },
  {
    q: "Why only 4–5 clients at a time?",
    a: "Because we'd rather do fewer projects properly. Capping the number keeps senior engineers on each engagement and cuts down on context switching.",
  },
  {
    q: "How do you price work?",
    a: "After discovery. Once we understand the complexity, the delivery requirements and which engagement model suits you (a project, a dedicated team or a longer partnership), we scope the commercial terms.",
  },
  {
    q: "Which chains and technologies do you work with?",
    a: "We've shipped on Ethereum, Solana, Cardano, Polygon and others. We also work with Arbitrum, Optimism, Cosmos SDK, Substrate and Polkadot, and Internet Computer canisters. Day to day that means Solidity, Rust, Move, Aiken and Plutus on-chain, and Node.js, TypeScript, Python, Go, PostgreSQL and TimescaleDB around it.",
  },
  {
    q: "Can you help with more than engineering?",
    a: "Yes. Besides engineering we run product and tokenomics, growth and marketing, and BD and partnerships. Some clients use one of these, some combine them.",
  },
  {
    q: "Where are your clients, and how do you handle time zones?",
    a: "We work with teams in the US, Europe, APAC and the Middle East. A lead architect covers your time zone, you get a progress update every week, and you can talk to the engineers directly.",
  },
  {
    q: "How will we know how the project is going?",
    a: "You get a week-by-week plan at the start and something delivered every week after that. Progress is visible as it happens, and you can message the engineers doing the work.",
  },
  {
    q: "Do you give legal or securities advice on tokens?",
    a: "No. We design token economies alongside your legal counsel, and anything to do with listings, tokens or investor communications is reviewed with them.",
  },
];
