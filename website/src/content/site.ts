// Global identity & contact. Source: _docs/01-CONTENT-SOURCE-OF-TRUTH.md §1–5.

export const site = {
  name: "Hashmark Labs",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hashmarklabs.com",
  tagline: "Engineering the systems others can't.",
  description:
    "Senior engineers who design and build AI, blockchain and fintech systems for startups, protocols and enterprises in the US, Europe, APAC and the Middle East.",
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
  { label: "How we work", href: "/approach" },
  { label: "About", href: "/about" },
];

export type Stat = { value: string; label: string; body: string };

export const stats: Stat[] = [
  {
    value: "70+",
    label: "systems delivered",
    body: "Wallets, DeFi protocols, trading systems, identity, RWA platforms and infrastructure, for clients around the world.",
  },
  {
    value: "6.5+",
    label: "years of senior leadership",
    body: "Across AI-integrated DeFi, cross-chain protocols, fintech rails and data platforms.",
  },
  {
    value: "11",
    label: "industry verticals",
    body: "Anything from prediction markets to real-world asset custody.",
  },
  {
    value: "4–5",
    label: "clients at a time, at most",
    body: "We keep the number low on purpose, so every client gets senior attention.",
  },
];

export const position = {
  title:
    "We don't rent out developers. You get senior engineers who make the architecture calls and then build the system themselves.",
  points: [
    {
      title: "We come in early",
      body: "The most useful time to bring us in is before the architecture is settled, while the technical choices still shape everything that follows.",
    },
    {
      title: "We own the delivery",
      body: "Architecture, engineering, testing, deployment and scaling are ours to get right, and we stay accountable for all of it.",
    },
    {
      title: "The people you meet build it",
      body: "The architects on your first call are the engineers who write the code. Nothing gets handed off to a junior team.",
    },
  ],
};

export const whoWeAre = {
  title: "We build financial, decentralised and AI systems where mistakes are expensive.",
  body: [
    "Hashmark Labs is an engineering consultancy. Our work covers AI-integrated systems, blockchain protocols, financial infrastructure, data intelligence and high-performance backends.",
    "We usually start at the first architecture decision and stay through production, mainnet and scale. Once the system is live, we're still accountable for how it performs.",
  ],
  lifecycle: ["Architecture", "MVP", "Production", "Scale"],
  audiences: [
    "Funded startups and founders",
    "Protocols and DAOs",
    "Fintech and financial platforms",
    "AI and data companies",
    "Enterprises and trade platforms",
  ],
};
