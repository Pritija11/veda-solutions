"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Factory,
  BriefcaseBusiness,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";
import { motion } from "motion/react";

const industries = [
  {
    icon: Building2,
    title: "Professional Services",
    description:
      "Digital systems and platforms that help service businesses manage clients, teams, and operations.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commerce",
    description:
      "E-commerce experiences and business tools that make it easier to sell and serve customers.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Digital platforms that make learning, administration, and communication more accessible.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "User-focused digital solutions that help simplify information, services, and everyday workflows.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Technology that helps teams connect processes, information, and operational data.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Growing Businesses",
    description:
      "Flexible technology solutions for companies building their digital foundation and scaling up.",
  },
];

export default function Industries() {
  return (
    <section className="border-y border-[var(--border)] bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <FadeUp className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
              Industries
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              Technology that adapts to your industry.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[var(--muted)]">
            Every business has different challenges. We focus on understanding
            the context first, then building technology around it.
          </p>
        </FadeUp>

        {/* Industry grid */}
        <Stagger className="mt-14 grid border-l border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/contact"
                  className="group block min-h-[245px] border-b border-r border-[var(--border)] p-7 transition-colors duration-300 hover:bg-[var(--primary-soft)] sm:p-8 lg:p-9"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white transition-all duration-300 group-hover:border-[var(--primary)]">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                    />
                  </div>

                  <h3 className="mt-10 text-xl font-bold tracking-[-0.025em]">
                    {industry.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
                    {industry.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>

        {/* Bottom CTA */}
        <FadeUp className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--muted)]">
            Don&apos;t see your industry? We work across many different
            business models.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--primary)]"
          >
            Talk to our team
            <ArrowUpRight size={17} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}