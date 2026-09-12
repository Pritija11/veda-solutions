import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import InsightsHero from "@/components/insights/InsightsHero";
import FeaturedInsight from "@/components/insights/FeaturedInsight";
import InsightsGrid from "@/components/insights/InsightsGrid";
import InsightTopics from "@/components/insights/InsightTopics";
import InsightsCTA from "@/components/insights/InsightsCTA";

export const metadata: Metadata = createPageMetadata(
  "Insights",
  "Practical articles from Veda Solutions Hub, a technology startup, on websites, business software, AI, automation, and cloud technology for modern businesses.",
  "/insights",
);

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <FeaturedInsight />
      <InsightsGrid />
      <InsightTopics />
      <InsightsCTA />
    </>
  );
}