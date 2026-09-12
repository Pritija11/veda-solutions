"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Compass,
  Handshake,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";
import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    icon: Compass,
    title: "Business-first thinking",
    description:
      "We start with the problem your business needs to solve, then choose the technology that fits.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Practical solutions",
    description:
      "We focus on useful digital systems that make everyday operations simpler, faster, and more effective.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Clear collaboration",
    description:
      "You stay involved throughout the process with clear communication, milestones, and expectations.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Built for the long term",
    description:
      "Our solutions are designed with maintainability, security, performance, and future growth in mind.",
  },
];

const commitments = [
  "Clear project communication",
  "Modern and maintainable technology",
  "Responsive digital experiences",
  "Solutions aligned with business goals",
];

export default function WhyVeda() {
  return (
    <section className="bg-[#111417] py-24 text-white sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Intro */}
        <FadeUp className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
              Why Veda
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Technology should solve problems, not create them.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              We combine business understanding, thoughtful design, and
              dependable engineering to create digital solutions that people
              can actually use.
            </p>
          </div>
        </FadeUp>

        {/* Reasons */}
        <Stagger className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                className="group border-b border-r border-white/10 p-7 transition-colors hover:bg-white/[0.03] sm:p-9 lg:p-10"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  <span className="text-xs font-bold tracking-[0.12em] text-white/30">
                    {reason.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                  {reason.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/55 sm:text-base">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </Stagger>

        {/* Commitment */}
        <FadeUp className="mt-6 grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div>
            <p className="text-sm font-bold text-white/40">
              What you can expect
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
              A better way to build digital systems.
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {commitments.map((commitment) => (
              <div key={commitment} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]">
                  <Check size={12} strokeWidth={3} />
                </span>

                <span className="text-sm leading-6 text-white/70">
                  {commitment}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-6 text-white/40">
            Have a business challenge or a digital idea? Let&apos;s discuss
            what you need and find the right way forward.
          </p>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#111417] hover:bg-[var(--primary)] hover:text-white"
          >
            Start a conversation
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}