import type { MetadataRoute } from "next";

const siteUrl = "https://vedasolutionshub.com";

const solutionPages = [
  "/solutions/ai-solutions",
  "/solutions/cloud-devops",
  "/solutions/software-solutions",
  "/solutions/data-solutions",
  "/solutions/cybersecurity",
  "/solutions/digital-consulting",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = [
    "",
    "/about",
    "/solutions",
    "/insights",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const mainEntries: MetadataRoute.Sitemap = mainPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const solutionEntries: MetadataRoute.Sitemap = solutionPages.map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [...mainEntries, ...solutionEntries];
}