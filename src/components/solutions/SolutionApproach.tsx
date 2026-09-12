// components/solutions/SolutionApproach.tsx

import {
  ArrowRight,
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We start by understanding your business, your users, and the problem you want technology to solve.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Plan",
    description:
      "We shape the right solution, define priorities, and choose technology based on what the project actually needs.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "We turn the plan into a reliable digital product with a focus on usability, performance, and maintainability.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Grow",
    description:
      "After launch, we can improve, maintain, and scale the solution as your business and requirements evolve.",
  },
];

export default function SolutionApproach() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--white)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Heading */}
        <FadeUp>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
              <span className="text-xs">HOW WE WORK</span>
              <span className="h-px w-8 bg-[var(--primary)]" />
              Our approach
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Start with the problem. Build the right solution.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              Good technology starts with understanding what a business
              actually needs. Our approach keeps the focus on useful
              outcomes rather than technology for its own sake.
            </p>
          </div>
        </FadeUp>

        {/* Process */}
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeUp key={step.number} delay={index * 0.08}>
                <div className="group relative h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_16px_40px_rgba(17,20,23,0.06)] sm:p-7">
                  {/* Number */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[0.12em] text-[var(--primary)]">
                      {step.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--white)]">
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        className="text-[var(--primary)]"
                      />
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {step.description}
                  </p>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--white)]">
                        <ArrowRight
                          size={12}
                          className="text-[var(--muted)]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </Stagger>

        {/* Bottom statement */}
        <FadeUp delay={0.2}>
          <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[var(--foreground)] p-7 text-[var(--white)] sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
                  Business first
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Technology should make your business simpler, not more
                  complicated.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                  Whether you need a new digital product or want to improve
                  an existing system, we focus on creating technology that
                  people can actually use.
                </p>
              </div>

              <div className="hidden h-20 w-20 items-center justify-center rounded-full border border-white/10 lg:flex">
                <ArrowRight
                  size={24}
                  className="text-[var(--primary)]"
                />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}