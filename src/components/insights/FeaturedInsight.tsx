import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

export default function FeaturedInsight() {
  return (
    <section
      id="insights"
      className="border-b border-[var(--border)] bg-[var(--white)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <FadeUp>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  Featured article
                </span>

                <span className="h-px w-8 bg-[var(--primary)]" />
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Why Every Business Needs a Good Website
              </h2>
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
              Web Development
            </span>
          </div>
        </FadeUp>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--background)] lg:mt-16">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              
              {/* Featured Article */}
              <Link
                href="/insights/why-every-business-needs-a-good-website"
                className="group relative block min-h-[360px] overflow-hidden bg-[var(--foreground)] p-7 text-white sm:p-10 lg:min-h-[440px] lg:p-12"
              >
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-[var(--primary)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                        Featured
                      </span>

                      <span className="text-xs text-white/50">
                        4 min read
                      </span>
                    </div>

                    <h3 className="mt-8 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl">
                      Why Every Business Needs a Good Website
                    </h3>

                    <p className="mt-5 max-w-lg text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                      A website is often the first place customers learn about
                      a business. Learn what makes a business website useful,
                      trustworthy, and easy to use.
                    </p>
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-semibold text-white/50">
                      Veda Solutions Hub
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="text-[var(--primary)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>

              {/* Veda Perspective */}
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                    The Veda perspective
                  </p>

                  <p className="mt-5 text-xl font-bold leading-8 tracking-tight sm:text-2xl sm:leading-9">
                    Start with the business problem. Choose the technology
                    second.
                  </p>

                  <p className="mt-5 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                    The best digital solution isn't always the newest
                    technology. It is the one that makes a measurable
                    difference to the people and processes that matter.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="group mt-10 inline-flex w-fit items-center gap-3 text-sm font-bold"
                >
                  Discuss your technology needs

                  <ArrowRight
                    size={17}
                    className="text-[var(--primary)] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}