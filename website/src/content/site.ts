// Global identity & contact. Source: _docs/01-CONTENT-SOURCE-OF-TRUTH.md §1–5.

export const site = {
  name: "Hashmark Labs",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hashmarklabs.com",
  tagline: "Engineering the systems others can't.",
  description:
    "Senior-led AI, blockchain and full-stack engineering — architecting intelligent decentralised systems, built for scale, designed for trust, delivered globally.",
  focus: "AI · Blockchain · FinTech",
  model: "Senior-led consultancy",
  regions: ["USA", "Europe", "APAC", "Middle East"],
  regionsShort: "USA · EU · APAC · ME",
} as const;

export const contact = {
  email: "hashmarklabs@gmail.com",
  whatsappDisplay: "+91 63671 46698",
  whatsappHref: "https://wa.me/916367146698",
  principal: {
    name: "Vidit Galav",
    role: "Head of Engineering",
    email: "geekviditweb3@gmail.com",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
];

export type Stat = { value: string; label: string; body: string; count?: { to: number; decimals?: number; suffix?: string } };

export const stats: Stat[] = [
  {
    value: "70+",
    label: "Systems delivered",
    body: "Across wallets, DeFi, trading, identity, RWA and infrastructure — for clients worldwide.",
    count: { to: 70, suffix: "+" },
  },
  {
    value: "6.5+",
    label: "Years of senior leadership",
    body: "Across AI-integrated DeFi, cross-chain protocols, fintech rails and data platforms.",
    count: { to: 6.5, decimals: 1, suffix: "+" },
  },
  {
    value: "11",
    label: "Industry verticals",
    body: "Production systems from prediction markets to real-world asset custody.",
    count: { to: 11 },
  },
  {
    value: "4–5",
    label: "Clients at a time, max",
    body: "A deliberate ceiling, so every client gets dedicated senior attention.",
  },
];

export const position = {
  eyebrow: "Our position",
  title: "We don't sell developers. We sell architecture, protocol expertise and senior execution.",
  points: [
    {
      title: "Before decisions, not after",
      body: "We join at the architecture and decision stage, where technical choices determine everything that follows.",
    },
    {
      title: "Accountable end to end",
      body: "We own technical delivery across architecture, engineering, testing, deployment and scale.",
    },
    {
      title: "Senior hands only",
      body: "The architects you meet are the engineers who build. No hand-offs to junior teams.",
    },
  ],
};

export const whoWeAre = {
  title: "A senior technical partner for complex financial, decentralised and intelligent systems.",
  body: [
    "Hashmark Labs is a deep-technical engineering consultancy across AI-integrated systems, blockchain protocol engineering, financial infrastructure, data intelligence and high-performance backends.",
    "We partner with ambitious teams from the first architecture decision to production, mainnet and scale — and stay accountable for how the system performs.",
  ],
  lifecycle: ["Architecture", "MVP", "Production", "Scale"],
  audiences: [
    "Funded startups & founders",
    "Protocols & DAOs",
    "FinTech & financial platforms",
    "AI & data companies",
    "Enterprises & trade platforms",
  ],
};
