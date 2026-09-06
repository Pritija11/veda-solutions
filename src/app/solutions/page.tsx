import type { Metadata } from "next";

import SectionHeading from "@/components/ui/SectionHeading";
import SolutionCard from "@/components/ui/SolutionCard";
import Button from "@/components/ui/Button";
import { solutions } from "@/data/solutions";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Solutions",
  "Explore Veda Solutions Hub technology solutions across AI, cloud, DevOps, software, data, cybersecurity, and digital consulting.",
  "/solutions",
);

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#07111F] pb-20 pt-36 sm:pb-24 sm:pt-40">
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              Our solutions
            </p>

            <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              Technology capabilities,
              <span className="text-teal-400"> connected.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              We combine AI, cloud, software, data, security, and digital
              strategy to create solutions around the challenges that matter
              to your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Explore our capabilities"
            title="From intelligent systems to digital infrastructure."
            description="Choose a focused capability or combine multiple disciplines to build a solution around your specific requirements."
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
        </div>
      </section>

      {/* How we work */}
      <section className="bg-[#07111F] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="How we approach solutions"
              title="Start with the problem. Choose the technology around it."
            />

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-6">
                <span className="text-sm font-semibold text-teal-400">
                  01
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Understand
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  We first understand the goals, constraints, users, and
                  problems behind the requirement.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-6">
                <span className="text-sm font-semibold text-teal-400">
                  02
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Design
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  We identify the right combination of technologies,
                  architecture, and engineering practices.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-6">
                <span className="text-sm font-semibold text-teal-400">
                  03
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Build
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  We turn the solution into a maintainable digital system that
                  can evolve with changing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1728] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-teal-400/20 bg-[#0F1F32] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-400">
                Have a challenge?
              </p>

              <h2 className="mt-3 font-[family-name:var(--font-dm-serif)] text-3xl leading-tight text-slate-100 sm:text-4xl">
                Let&apos;s find the right technology for it.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Tell us what you are trying to build, improve, or solve.
              </p>
            </div>

            <div className="mt-7 lg:mt-0">
              <Button href="/contact">Start a conversation →</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}