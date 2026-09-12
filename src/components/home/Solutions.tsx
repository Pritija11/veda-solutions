"use client";

import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";
import { motion } from "motion/react";

import {
  ArrowUpRight,
  Globe2,
  Code2,
  Smartphone,
  BrainCircuit,
  Cloud,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: Globe2,
    title: "Web & Digital Experiences",
    description:
      "Business websites, e-commerce platforms, customer portals, and digital experiences designed around your goals.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Business Software",
    description:
      "Custom applications, dashboards, internal tools, and software systems built around how your business operates.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Customer-facing and business mobile applications that make your services accessible wherever your users are.",
  },
  {
    number: "04",
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Practical AI integrations and automated workflows that help teams reduce repetitive work and make better decisions.",
  },
  {
    number: "05",
    icon: Cloud,
    title: "Cloud & IT Solutions",
    description:
      "Cloud deployment, APIs, databases, integrations, and technical infrastructure for reliable digital operations.",
  },
];

export default function Solutions() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeUp>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
              What we do
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              Technology built around the way you do business.
            </h2>
          </FadeUp>

          <div className="flex items-end">
            <FadeUp delay={0.1}>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                From a focused website to a complete business platform, we
                combine design, engineering, and technology to create
                solutions that solve real problems.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Solutions list */}
        <Stagger className="mt-16 border-y border-[var(--border)]">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.number}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/solutions"
                  className="group grid gap-5 border-b border-[var(--border)] py-8 last:border-b-0 sm:grid-cols-[60px_55px_1fr_40px] sm:items-center sm:gap-5 lg:py-9"
                >
                  {/* Number */}
                  <span className="text-xs font-bold tracking-[0.08em] text-[var(--primary)]">
                    {solution.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)] transition-transform duration-300 group-hover:scale-105">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.025em] sm:text-2xl">
                      {solution.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                      {solution.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] sm:flex">
                    <ArrowUpRight
                      size={17}
                      className="transition-colors group-hover:text-white"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>

        {/* Bottom link */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--primary)]"
          >
            Explore all solutions
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}