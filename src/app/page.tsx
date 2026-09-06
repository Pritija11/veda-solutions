import Hero from "@/components/sections/Hero";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import WhyVeda from "@/components/sections/WhyVeda";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import InsightsPreview from "@/components/sections/InsightsPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SolutionsOverview />
      <WhyVeda />
      <CoreCapabilities />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
}