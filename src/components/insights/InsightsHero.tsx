import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

const topics = [
  "Web Development",
  "Business Software",
  "AI & Automation",
  "Cloud & IT",
];

export default function InsightsHero() {
  return (
    <section className="overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  Our Blog
                </span>
                <span className="h-px w-8 bg-[var(--primary)]" />
                Technology & business
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Simple ideas about technology for modern businesses.
              </h1>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                Practical articles about websites, software, AI, automation,
                and other technology that can help businesses work better.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#insights"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white hover:-translate-y-0.5 hover:opacity-90"
                >
                  Read our articles
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

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--white)] p-6 shadow-[0_25px_70px_rgba(17,20,23,0.08)] sm:p-8">
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                      From our blog
                    </p>

                    <p className="mt-2 text-lg font-extrabold">
                      Technology made simple
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-soft)]">
                    <BookOpen
                      size={19}
                      className="text-[var(--primary)]"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {topics.map((topic, index) => (
                    <div
                      key={topic}
                      className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-[var(--primary)]">
                          0{index + 1}
                        </span>

                        <span className="text-sm font-semibold">
                          {topic}
                        </span>
                      </div>

                      <ArrowRight
                        size={16}
                        className="text-[var(--muted)]"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[var(--foreground)] p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                    Our approach
                  </p>

                  <p className="mt-3 text-base font-semibold leading-6 text-white/90">
                    Clear information. Useful technology.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[var(--border)] bg-[var(--white)] px-5 py-4 shadow-[0_18px_40px_rgba(17,20,23,0.1)] sm:-left-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

                  <span className="text-xs font-bold">
                    Practical technology
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