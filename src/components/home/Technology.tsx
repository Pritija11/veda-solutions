"use client";

import Link from "next/link";
import { ArrowUpRight, Layers3, ShieldCheck, Zap, Database } from "lucide-react";

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Cloud",
];

import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";
import { motion } from "motion/react";

const principles = [
  {
    icon: Layers3,
    title: "Built to scale",
    description:
      "We structure systems so they can grow with your users, data, and business.",
  },
  {
    icon: ShieldCheck,
    title: "Built with care",
    description:
      "Security, maintainability, and reliability are considered from the beginning.",
  },
  {
    icon: Zap,
    title: "Built for performance",
    description:
      "Fast, responsive experiences across devices are part of the development process.",
  },
  {
    icon: Database,
    title: "Built around data",
    description:
      "Well-structured databases and APIs provide a strong foundation for digital products.",
  },
];

export default function Technology() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <FadeUp className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
              Technology
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              The right technology for the job.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              We choose technologies based on the product, users, business
              requirements, and long-term needs — not simply because they are
              popular.
            </p>
          </div>
        </FadeUp>

        {/* Technology stack */}
        <FadeUp
          delay={0.1}
          className="mt-16 rounded-3xl border border-[var(--border)] bg-white p-6 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col justify-between gap-5 border-b border-[var(--border)] pb-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold">Our technology stack</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                A modern foundation for digital products and business systems.
              </p>
            </div>

            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--primary)]"
            >
              Our solutions
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology, index) => (
              <div
                key={technology}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  index === 0
                    ? "border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--foreground)]"
                    : "border-[var(--border)] bg-[var(--background)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--foreground)]"
                }`}
              >
                {technology}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Engineering principles */}
        <Stagger className="mt-6 grid border-l border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <motion.div
                key={principle.title}
                className="border-b border-r border-[var(--border)] p-6 sm:p-7"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-soft)]">
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    className="text-[var(--primary)]"
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold tracking-[-0.02em]">
                  {principle.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}