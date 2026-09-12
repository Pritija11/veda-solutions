import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import FeaturedWork from "@/components/home/FeaturedWork";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import Technology from "@/components/home/Technology";
import WhyVeda from "@/components/home/WhyVeda";
import Insights from "@/components/home/Insights";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <FeaturedWork />
      <Process />
      <Industries />
      <Technology />
      <WhyVeda />
      <Insights />
      <CTA />
    </>
  );
}