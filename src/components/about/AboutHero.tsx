import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

const focusAreas = [
  "Digital Products",
  "Business Software",
  "AI & Automation",
  "Cloud & IT",
];

export default function AboutHero() {
  return (
    <section className="overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Left content */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  About Veda
                </span>
                <span className="h-px w-8 bg-[var(--primary)]" />
                Technology with purpose
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Building technology that makes business better.
              </h1>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                Veda Solutions Hub is a technology startup and IT solutions
                company helping businesses build, modernize, and manage their
                digital systems.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#story"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white hover:-translate-y-0.5 hover:opacity-90"
                >
                  Our story
                  <ArrowDown
                    size={17}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-[var(--white)] px-6 py-3.5 text-sm font-bold hover:-translate-y-0.5 hover:border-[var(--primary)]"
                >
                  Work with us
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
                      What we focus on
                    </p>

                    <p className="mt-2 text-lg font-extrabold">
                      Practical technology
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-soft)] text-sm font-bold text-[var(--primary)]">
                    V
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {focusAreas.map((area, index) => (
                    <Link
                      key={area}
                      href={
                        area === "Digital Products"
                          ? "/solutions#web"
                          : area === "Business Software"
                            ? "/solutions#software"
                            : area === "AI & Automation"
                              ? "/solutions#ai"
                              : "/solutions#cloud"
                      }
                      className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-4 transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary-soft)]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-[var(--primary)]">
                          0{index + 1}
                        </span>

                        <span className="text-sm font-semibold">{area}</span>
                      </div>

                      <ArrowRight
                        size={16}
                        className="text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                      />
                    </Link>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[var(--foreground)] p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                    Our belief
                  </p>

                  <p className="mt-3 text-base font-semibold leading-6 text-white/90">
                    The best technology is technology that solves a real
                    problem.
                  </p>
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
                    Business-first technology
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
