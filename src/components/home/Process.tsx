"use client";

import { ArrowRight } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, users, and the problem we're solving.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn requirements into clear user experiences and a practical technical direction.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop the solution with a focus on performance, usability, and reliability.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, refine, deploy, and make sure your solution is ready for real users.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We help maintain, improve, and scale your technology as your business evolves.",
  },
];

export default function Process() {
  return (
    <section className="overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <FadeUp className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
              How we work
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              From an idea to technology that works.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              A straightforward process keeps projects focused, transparent,
              and aligned with the business problem we're trying to solve.
            </p>
          </div>
        </FadeUp>

        {/* Process */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[28px] hidden h-px bg-[var(--border)] lg:block"
          />

          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Number */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-xs font-extrabold text-[var(--foreground)] transition-all duration-300 group-hover:border-[var(--primary)]">
                  <span
                    className={
                      index === 0 ? "text-[var(--primary)]" : undefined
                    }
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold tracking-[-0.025em]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute right-[-17px] top-[22px] hidden lg:block">
                    <ArrowRight
                      size={14}
                      className="text-[var(--border)]"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </Stagger>
        </div>

        {/* Bottom statement */}
        <FadeUp className="mt-16 rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold">Clear process. Better outcomes.</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                We keep communication simple and progress visible throughout
                the project.
              </p>
            </div>

            <div className="h-2 w-full max-w-[220px] overflow-hidden rounded-full bg-[var(--primary-soft)]">
              <div className="h-full w-[72%] rounded-full bg-[var(--primary)]" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}