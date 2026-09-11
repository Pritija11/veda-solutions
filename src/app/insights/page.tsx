import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";
import SignalsFilterGrid from "@/components/sections/SignalsFilterGrid";

export const metadata: Metadata = createPageMetadata(
  "Veda Signals",
  "Veda Signals — ideas, experiments and perspectives from Veda Solutions Hub, a technology startup building across AI, software, cloud and data.",
  "/insights",
);

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF7] pb-16 pt-[150px] sm:pt-[168px]">
        <div className="dot-grid pointer-events-none absolute -right-6 -top-6 h-72 w-72" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="tech-label text-[#6B6A72]">Veda Signals</div>
            <h1 className="mt-6 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[1.05] text-[#24232B] sm:text-6xl">
              Ideas, experiments and perspectives from Veda.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6B6A72]">
              Veda Solutions Hub is a technology startup, and this is where we think out loud — about AI, cloud,
              software and data, and about what actually holds up once a system is running in production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters + article cards */}
      <section className="bg-[#FFFDF7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SignalsFilterGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="veda-tile flex flex-col gap-8 bg-[#24232B] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <h2 className="max-w-xl font-[family-name:var(--font-sora)] text-3xl font-extrabold text-white sm:text-4xl">
                Looking for a practical technology direction?
              </h2>
              <Link href="/solutions" className="tile-hover inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#24232B]">
                Explore solutions
                <ArrowUpRight className="arrow-shift h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
