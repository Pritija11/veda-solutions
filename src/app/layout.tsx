import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vedasolutionshub.com"),

  title: {
    default:
      "Veda Solutions Hub | Technology & Software Solutions for Businesses",
    template: "%s | Veda Solutions Hub",
  },

  description:
    "Veda Solutions Hub is a technology startup and IT solutions company building software, websites, mobile applications, AI solutions, and digital systems for modern businesses.",

  keywords: [
    "Veda Solutions Hub",
    "IT solutions company",
    "software development company",
    "technology startup",
    "software solutions",
    "web development",
    "mobile app development",
    "AI solutions",
    "business software",
    "digital solutions",
  ],

  authors: [
    {
      name: "Veda Solutions Hub",
    },
  ],

  creator: "Veda Solutions Hub",
  publisher: "Veda Solutions Hub",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vedasolutionshub.com",
    siteName: "Veda Solutions Hub",
    title:
      "Veda Solutions Hub | Technology & Software Solutions for Businesses",
    description:
      "Veda Solutions Hub is a technology startup building software, digital products, AI solutions, and technology systems for modern businesses.",
  },

 

  alternates: {
    canonical: "https://vedasolutionshub.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.variable}>
        <OrganizationSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}