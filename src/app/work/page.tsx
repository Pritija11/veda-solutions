import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import WorkHero from "@/components/work/WorkHero";
import FeaturedProjects from "@/components/work/FeaturedProjects";
import ProjectGrid from "@/components/work/ProjectGrid";
import Capabilities from "@/components/work/Capabilities";
import WorkCTA from "@/components/work/WorkCTA";

export const metadata: Metadata = createPageMetadata(
  "Our Work",
  "See the digital products, websites, and business software Veda Solutions Hub, a technology startup, has built for businesses.",
  "/work",
);

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <FeaturedProjects />
      <ProjectGrid />
      <Capabilities />
      <WorkCTA />
    </>
  );
}