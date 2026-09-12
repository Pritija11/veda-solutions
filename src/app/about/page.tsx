import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutCapabilities from "@/components/about/AboutCapabilities";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = createPageMetadata(
  "About Us",
  "Veda Solutions Hub is a technology startup and IT solutions company building practical software, websites, mobile apps, AI and cloud systems for modern businesses.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCapabilities />
      <AboutCTA />
    </>
  );
}