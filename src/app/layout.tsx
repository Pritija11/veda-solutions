import type { Metadata } from "next";
import { Sora, Inter, Space_Mono } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vedasolutionshub.com"),

  title: {
    default: "Veda Solutions Hub | Technology Startup Building Digital Systems",
    template: "%s | Veda Solutions Hub",
  },

  description:
    "Veda Solutions Hub is a technology startup building intelligent digital systems across AI, software, cloud and data.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Veda Solutions Hub",
    "Veda Solutions Hub technology startup",
    "digital systems startup",
    "AI software cloud data",
    "intelligent digital systems",
    "software engineering",
    "cloud and DevOps",
    "data and digital intelligence",
  ],

  authors: [{ name: "Veda Solutions Hub" }],
  creator: "Veda Solutions Hub",

  openGraph: {
    title: "Veda Solutions Hub | Technology Startup Building Digital Systems",
    description:
      "Veda Solutions Hub is a technology startup building intelligent digital systems across AI, software, cloud and data.",
    type: "website",
    siteName: "Veda Solutions Hub",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Veda Solutions Hub — AI + Software + Cloud + Data, working as one digital system",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Veda Solutions Hub | Technology Startup Building Digital Systems",
    description:
      "Veda Solutions Hub is a technology startup building intelligent digital systems across AI, software, cloud and data.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} ${spaceMono.variable} antialiased`}
      >
        <OrganizationSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
