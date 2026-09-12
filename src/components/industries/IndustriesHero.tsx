"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

function scrollToId(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

const industries = [
  "Professional Services",
  "Retail & Commerce",
  "Education",
  "Healthcare",
  "Manufacturing",
  "Growing Businesses",
];

export default function IndustriesHero() {
  return (
    <section className="overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Left content */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  Industries
                </span>

                <span className="h-px w-8 bg-[var(--primary)]" />

                Solutions with context
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Technology shaped around the way your industry works.
              </h1>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                Different businesses have different challenges. We build
                practical digital solutions around your workflows, customers,
                and goals.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#industries"
                  onClick={(e) => scrollToId(e, "industries")}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white hover:-translate-y-0.5 hover:opacity-90"
                >
                  Explore industries

                  <ArrowDown
                    size={17}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-[var(--white)] px-6 py-3.5 text-sm font-bold hover:-translate-y-0.5 hover:border-[var(--primary)]"
                >
                  Talk to our team

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right visual */}
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--white)] p-6 shadow-[0_25px_70px_rgba(17,20,23,0.08)] sm:p-8">
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                      Across industries
                    </p>

                    <p className="mt-2 text-lg font-extrabold">
                      One technology partner
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-soft)] text-sm font-bold text-[var(--primary)]">
                    06
                  </div>
                </div>

                <div className="mt-6 grid gap-2">
                  {industries.map((industry, index) => (
                    <Link
                      key={industry}
                      href={`#industry-0${index + 1}`}
                      onClick={(e) => scrollToId(e, `industry-0${index + 1}`)}
                      className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-4 transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary-soft)]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-[var(--primary)]">
                          0{index + 1}
                        </span>

                        <span className="text-sm font-semibold">
                          {industry}
                        </span>
                      </div>

                      <ArrowRight
                        size={16}
                        className="text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                      />
                    </Link>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[var(--foreground)] p-4 text-white">
                    <div className="text-xl font-extrabold">01</div>

                    <p className="mt-1 text-xs text-white/50">
                      Understand the business
                    </p>
                  </div>

                  <div className="rounded-xl bg-[var(--primary-soft)] p-4">
                    <div className="text-xl font-extrabold text-[var(--primary)]">
                      02
                    </div>

                    <p className="mt-1 text-xs text-[var(--muted)]">
                      Build around its needs
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating note */}
              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[var(--border)] bg-[var(--white)] px-5 py-4 shadow-[0_18px_40px_rgba(17,20,23,0.1)] sm:-left-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary-soft)]">
                    <Check
                      size={12}
                      strokeWidth={2.5}
                      className="text-[var(--primary)]"
                    />
                  </span>

                  <span className="text-xs font-bold">
                    Business-first approach
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}