import type { Metadata } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vedasolutionshub.com"),

  title: {
    default: "Veda Solutions Hub | Technology Startup",
    template: "%s | Veda Solutions Hub",
  },

  description:
    "Veda Solutions Hub is a technology startup building AI-powered and modern digital solutions across AI, cloud, DevOps, software, data, and automation.",

  keywords: [
    "Veda Solutions Hub",
    "Veda Solutions Hub startup",
    "technology startup",
    "AI technology startup",
    "AI solutions",
    "cloud solutions",
    "DevOps",
    "digital solutions",
    "software solutions",
    "data solutions",
    "technology solutions",
  ],

  authors: [{ name: "Veda Solutions Hub" }],
  creator: "Veda Solutions Hub",

  openGraph: {
    title: "Veda Solutions Hub | Technology Startup",
    description:
      "Veda Solutions Hub is a technology startup building AI-powered and modern digital solutions across AI, cloud, DevOps, software, data, and automation.",
    type: "website",
    siteName: "Veda Solutions Hub",
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
        className={`${manrope.variable} ${dmSerif.variable} antialiased`}
      >
        <OrganizationSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}