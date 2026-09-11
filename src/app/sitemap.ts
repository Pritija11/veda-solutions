import type { MetadataRoute } from "next";

import { solutions } from "@/data/solutions";
import { insights } from "@/data/insights";

const siteUrl = "https://vedasolutionshub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/how-we-work", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/technology", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/careers", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const mainEntries: MetadataRoute.Sitemap = mainPages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));

  const solutionEntries: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: `${siteUrl}${solution.href}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const insightEntries: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${siteUrl}/insights/${insight.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...mainEntries, ...solutionEntries, ...insightEntries];
}
