import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { solutions } from "@/data/solutions";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Solutions",
  "Veda Solutions Hub is a technology startup building intelligent digital systems across AI, software, cloud and data.",
  "/solutions",
);

const steps = [
  { n: "01", label: "Discover", d: "We understand the problem, the users, and the constraints behind it." },
  { n: "02", label: "Design", d: "We shape the right combination of AI, software, cloud and data." },
  { n: "03", label: "Build", d: "We engineer it into a system that stays reliable in production." },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF7] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="dot-grid pointer-events-none absolute -right-6 -top-6 h-72 w-72" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="tech-label text-[#6B6A72]">Solutions</div>
            <h1 className="mt-6 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[1.05] text-[#24232B] sm:text-6xl">
              Technology built around the problem.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6B6A72]">
              As a technology startup, Veda Solutions Hub brings AI, software, cloud and data together as one
              connected system — not a sprawling menu of unrelated IT services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solution tiles */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <Reveal key={solution.slug} delay={i * 90}>
                  <Link
                    href={solution.href}
                    className="veda-tile tile-hover group flex h-full flex-col justify-between p-8"
                    style={{ backgroundColor: `var(--${solution.pastel})` }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border-[1.5px] border-[#24232B] bg-white">
                        <Icon className="h-5 w-5 text-[#24232B]" />
                      </span>
                      <span className="tech-label text-[#24232B]/60">
                        {solution.tag} / {solution.number}
                      </span>
                    </div>

                    <div>
                      <h2 className="mt-9 font-[family-name:var(--font-sora)] text-2xl font-extrabold text-[#24232B]">
                        {solution.title}
                      </h2>
                      <p className="mt-3 max-w-md text-sm leading-6 text-[#24232B]/70">{solution.shortDescription}</p>
                      <span className="arrow-shift mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#24232B]">
                        Explore solution
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#24232B] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-xl">
              <div className="tech-label text-white/50">Our approach</div>
              <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl">
                Start with the problem. Choose the technology around it.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="veda-tile-soft h-full border-white/15 bg-white/5 p-6">
                  <span className="tech-label text-[#FF7043]">{step.n}</span>
                  <h3 className="mt-5 font-[family-name:var(--font-sora)] text-lg font-extrabold text-white">
                    {step.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="veda-tile flex flex-col gap-8 bg-[#FFDD57] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
              <div className="max-w-2xl">
                <div className="tech-label text-[#24232B]/60">Have a challenge?</div>
                <h2 className="mt-3 font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-tight text-[#24232B] sm:text-4xl">
                  Let&apos;s find the right technology for it.
                </h2>
                <p className="mt-4 text-sm leading-6 text-[#24232B]/70">
                  Tell us what you are trying to build, improve, or solve.
                </p>
              </div>
              <Link
                href="/contact"
                className="tile-hover inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#24232B] px-7 py-3.5 text-sm font-bold text-white"
              >
                Start a conversation
                <span className="arrow-shift">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
