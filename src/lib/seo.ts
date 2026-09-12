import type { Metadata } from "next";

const siteName = "Veda Solutions Hub";
const siteUrl = "https://vedasolutionshub.com";

const ogImage = {
  url: `${siteUrl}/images/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Veda Solutions Hub — AI + Software + Cloud + Data, working as one digital system",
};

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
      images: [ogImage],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [ogImage.url],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
