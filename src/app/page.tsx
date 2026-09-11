import Hero from "@/components/sections/Hero";
import StartupIntro from "@/components/sections/StartupIntro";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import TheSystem from "@/components/sections/TheSystem";
import WhySystem from "@/components/sections/WhySystem";
import TechnologyPreview from "@/components/sections/TechnologyPreview";
import Industries from "@/components/sections/Industries";
import Principles from "@/components/sections/Principles";
import SignalsPreview from "@/components/sections/SignalsPreview";
import AboutIdentity from "@/components/sections/AboutIdentity";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StartupIntro />
      <SolutionsOverview />
      <TheSystem />
      <WhySystem />
      <TechnologyPreview />
      <Industries />
      <Principles />
      <SignalsPreview />
      <AboutIdentity />
      <FinalCTA />
    </>
  );
}
