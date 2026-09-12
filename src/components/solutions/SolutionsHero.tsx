// components/solutions/SolutionsHero.tsx

import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

export default function SolutionsHero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left */}
          <div>
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--white)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                Our solutions
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Digital solutions built around your business.
              </h1>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                From websites and business software to mobile applications,
                AI, and cloud infrastructure, we build practical technology
                that helps businesses operate, connect, and grow.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-[var(--white)] hover:opacity-90"
                >
                  Discuss a project
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--white)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--foreground)]"
                >
                  Explore solutions
                  <ArrowDown size={16} />
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Business-focused",
                  "Scalable technology",
                  "Long-term support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-[var(--muted)]"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary-soft)]">
                      <Check
                        size={12}
                        strokeWidth={2.5}
                        className="text-[var(--primary)]"
                      />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right visual */}
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--white)] shadow-[0_24px_80px_rgba(17,20,23,0.08)]">
                {/* Browser header */}
                <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                  </div>

                  <div className="h-2 w-20 rounded-full bg-[var(--border)]" />
                </div>

                {/* Dashboard */}
                <div className="p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-[var(--muted)]">
                        Business overview
                      </p>

                      <p className="mt-2 text-2xl font-bold tracking-tight">
                        Digital operations
                      </p>
                    </div>

                    <div className="rounded-xl bg-[var(--primary-soft)] px-3 py-2 text-xs font-semibold text-[var(--primary)]">
                      Connected
                    </div>
                  </div>

                  {/* Graph */}
                  <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-[var(--muted)]">
                          Performance
                        </p>

                        <p className="mt-1 text-2xl font-bold">84.6%</p>
                      </div>

                      <span className="text-xs font-semibold text-[var(--primary)]">
                        +18.4%
                      </span>
                    </div>

                    <div className="relative mt-7 h-32">
                      <div className="absolute inset-x-0 top-0 border-t border-dashed border-[var(--border)]" />
                      <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-[var(--border)]" />
                      <div className="absolute inset-x-0 bottom-0 border-t border-dashed border-[var(--border)]" />

                      <svg
                        viewBox="0 0 500 130"
                        className="absolute inset-0 h-full w-full"
                        fill="none"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 108 C55 102 65 82 115 88 C165 94 168 62 218 68 C270 74 282 42 328 50 C372 58 386 22 430 30 C456 34 475 18 500 12"
                          stroke="var(--primary)"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />

                        <path
                          d="M0 108 C55 102 65 82 115 88 C165 94 168 62 218 68 C270 74 282 42 328 50 C372 58 386 22 430 30 C456 34 475 18 500 12 V130 H0 Z"
                          fill="var(--primary-soft)"
                          opacity="0.65"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Solution blocks */}
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      ["Web", "Digital"],
                      ["Software", "Systems"],
                      ["AI", "Automation"],
                    ].map(([title, subtitle]) => (
                      <div
                        key={title}
                        className="rounded-xl border border-[var(--border)] bg-[var(--white)] p-3"
                      >
                        <div className="h-2 w-8 rounded-full bg-[var(--primary)]" />

                        <p className="mt-3 text-xs font-bold">{title}</p>

                        <p className="mt-1 text-[10px] text-[var(--muted)]">
                          {subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-[var(--border)] bg-[var(--white)] px-5 py-4 shadow-[0_16px_40px_rgba(17,20,23,0.08)] sm:block lg:-left-8">
                <p className="text-xs font-medium text-[var(--muted)]">
                  One technology partner
                </p>

                <p className="mt-1 text-sm font-bold">
                  From idea to launch
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}