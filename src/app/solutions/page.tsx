import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import WebSolutions from "@/components/solutions/WebSolutions";
import SoftwareSolutions from "@/components/solutions/SoftwareSolutions";
import MobileSolutions from "@/components/solutions/MobileSolutions";
import AISolutions from "@/components/solutions/AISolutions";
import CloudSolutions from "@/components/solutions/CloudSolutions";
import SolutionApproach from "@/components/solutions/SolutionApproach";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export const metadata: Metadata = createPageMetadata(
  "Solutions",
  "Digital solutions built around your business from Veda Solutions Hub — websites, business software, mobile apps, AI & automation, and cloud & IT infrastructure.",
  "/solutions",
);

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <WebSolutions />
      <SoftwareSolutions />
      <MobileSolutions />
      <AISolutions />
      <CloudSolutions />
      <SolutionApproach />
      <SolutionsCTA />
    </>
  );
}