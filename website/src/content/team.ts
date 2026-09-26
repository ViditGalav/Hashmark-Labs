// Team. Source: _docs/01-CONTENT-SOURCE-OF-TRUTH.md §12 (TECH p16). No photos or surnames beyond the deck.

export type Person = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  gradient: "pink" | "violet" | "teal";
};

export const team = {
  title: "The people on your first call are the people who build it.",
  people: [
    {
      initials: "VG",
      name: "Vidit Galav",
      role: "Head of Engineering",
      bio: "Principal architect. Vidit has designed and shipped production systems in AI-integrated DeFi, market intelligence, fintech rails, enterprise data and protocols.",
      gradient: "pink",
    },
    {
      initials: "H",
      name: "Haard",
      role: "Tech Lead, Cryptography",
      bio: "Works on advanced cryptographic systems and secure smart-contract design: resilient protocol mechanics, encryption, and auditing complex systems.",
      gradient: "violet",
    },
    {
      initials: "B",
      name: "Bhargava",
      role: "Backend & AI Lead",
      bio: "Full-stack Web3 engineer who builds dApps end to end: Solidity on EVM chains, Rust for high-performance runtimes, and the backend and AI systems around them.",
      gradient: "teal",
    },
  ] satisfies Person[],
  benchLine:
    "Around them is a senior core and a specialist bench: blockchain architects, protocol designers, AI/ML, DevOps and infrastructure, data and backend, and QA and security.",
  bench: ["Blockchain architects", "Protocol designers", "AI / ML", "DevOps & infra", "Data & backend", "QA & security"],
};
