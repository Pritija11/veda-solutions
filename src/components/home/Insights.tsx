"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";
import { motion } from "motion/react";

const insights = [
  {
    category: "Digital Strategy",
    title: "How businesses can choose the right technology for growth",
    description:
      "A practical look at choosing digital solutions based on business needs, users, and long-term goals.",
    href: "/insights",
  },
  {
    category: "Business Software",
    title: "When should a business build custom software?",
    description:
      "Understanding when off-the-shelf tools are enough and when a custom system can create more value.",
    href: "/insights",
  },
  {
    category: "AI & Automation",
    title: "Where AI and automation can improve everyday operations",
    description:
      "Exploring practical ways businesses can use automation to reduce repetitive work and improve efficiency.",
    href: "/insights",
  },
];

export default function Insights() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <FadeUp className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
              Insights
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              Ideas for building better digital businesses.
            </h2>
          </div>

          <Link
            href="/insights"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold hover:text-[var(--primary)]"
          >
            View all insights
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </FadeUp>

        {/* Insight cards */}
        <Stagger className="mt-14 grid border-l border-t border-[var(--border)] md:grid-cols-3">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={insight.href}
                className="group flex min-h-[330px] flex-col border-b border-r border-[var(--border)] p-7 transition-colors hover:bg-white sm:p-8 lg:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[var(--primary-soft)] px-3 py-1.5 text-xs font-bold text-[var(--foreground)]">
                    {insight.category}
                  </span>

                  <span className="text-xs font-bold text-[var(--muted)]">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="max-w-md text-xl font-bold leading-snug tracking-[-0.025em] sm:text-2xl">
                    {insight.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
                    {insight.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-bold">
                    Read insight
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>

        {/* SEO/content note */}
        <FadeUp className="mt-8 flex flex-col gap-4 border-l-2 border-[var(--primary)] pl-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-[var(--muted)]">
            We share practical perspectives on software, digital
            transformation, AI, automation, and technology for businesses.
          </p>

          <Link
            href="/contact"
            className="text-sm font-bold hover:text-[var(--primary)]"
          >
            Work with us →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}