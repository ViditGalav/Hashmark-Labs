import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { practices } from "@/content/practices";
import { cases } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, site.url).toString();
  const lastModified = new Date();

  const entries: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    ...practices.map((p) => ({ path: `/services/${p.slug}`, priority: 0.9, changeFrequency: "monthly" as const })),
    { path: "/work", priority: 0.8, changeFrequency: "monthly" },
    ...cases.map((c) => ({ path: `/work/${c.slug}`, priority: 0.7, changeFrequency: "monthly" as const })),
    { path: "/approach", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  ];

  return entries.map((e) => ({ url: url(e.path), lastModified, changeFrequency: e.changeFrequency, priority: e.priority }));
}
