import type { Metadata } from "next";

const siteName = "Veda Solutions Hub";
const siteUrl = "https://vedasolutionshub.com";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}