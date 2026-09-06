import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { solutions } from "@/data/solutions";
import SectionHeading from "@/components/ui/SectionHeading";
import SolutionCard from "@/components/ui/SolutionCard";

export default function SolutionsOverview() {
  return (
    <section className="bg-[#0B1728] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we build"
          title="Technology solutions connected around real needs."
          description="From intelligent AI systems to cloud infrastructure and software engineering, we bring complementary technologies together to solve practical problems."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.slug}
              number={String(index + 1).padStart(2, "0")}
              title={solution.title}
              description={solution.shortDescription}
              href={solution.href}
              featured={solution.primary}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition-colors hover:text-teal-300"
          >
            View all solutions
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}