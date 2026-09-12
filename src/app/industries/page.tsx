import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryList from "@/components/industries/IndustryList";
import IndustrySolutions from "@/components/industries/IndustrySolutions";
import IndustryApproach from "@/components/industries/IndustryApproach";
import IndustriesCTA from "@/components/industries/IndustriesCTA";

export const metadata: Metadata = createPageMetadata(
  "Industries We Serve",
  "Veda Solutions Hub builds technology shaped around your industry — professional services, retail, education, healthcare, manufacturing and growing businesses.",
  "/industries",
);

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustryList />
      <IndustrySolutions />
      <IndustryApproach />
      <IndustriesCTA />
    </>
  );
}