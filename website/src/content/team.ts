// Team. Source: _docs/01-CONTENT-SOURCE-OF-TRUTH.md §12 (TECH p16). No photos or surnames beyond the deck.

export type Person = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  gradient: "pink" | "violet" | "teal";
};

export const team = {
  title: "The architects you meet are the ones who build.",
  people: [
    {
      initials: "VG",
      name: "Vidit Galav",
      role: "Head of Engineering",
      bio: "Principal architect who has designed and shipped production systems across AI-integrated DeFi, market intelligence, fintech rails, enterprise data and protocols.",
      gradient: "pink",
    },
    {
      initials: "H",
      name: "Haard",
      role: "Tech Lead · Cryptography",
      bio: "Specialist in advanced cryptographic systems and secure smart-contract design — resilient protocol mechanics, encryption and auditing of complex systems.",
      gradient: "violet",
    },
    {
      initials: "B",
      name: "Bhargava",
      role: "Backend & AI Lead",
      bio: "Full-stack Web3 engineer building end-to-end dApps — Solidity on EVM chains, Rust for high-performance runtimes, scalable backend and AI systems.",
      gradient: "teal",
    },
  ] satisfies Person[],
  bench: ["Blockchain architects", "Protocol designers", "AI / ML", "DevOps & infra", "Data & backend", "QA & security"],
};
