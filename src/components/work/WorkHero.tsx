import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

export default function WorkHero() {
  return (
    <section className="overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left content */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  Our work
                </span>
                <span className="h-px w-8 bg-[var(--primary)]" />
                Digital products
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Digital products built to do real work.
              </h1>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                We design and build websites, software, applications, and
                digital systems that help businesses solve real problems and
                move forward.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/work"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white hover:-translate-y-0.5 hover:opacity-90"
                >
                  Explore our work
                  <ArrowDown
                    size={17}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-[var(--white)] px-6 py-3.5 text-sm font-bold hover:-translate-y-0.5 hover:border-[var(--primary)]"
                >
                  Start a project
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.32}>
              <div className="mt-10 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  "Business-focused",
                  "Modern technology",
                  "Built to evolve",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-semibold text-[var(--foreground)]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)]">
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

          {/* Right product visual */}
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--white)] shadow-[0_30px_80px_rgba(17,20,23,0.10)]">
                {/* Browser header */}
                <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                  </div>

                  <div className="hidden h-7 w-44 rounded-md bg-[var(--background)] sm:block" />

                  <div className="h-7 w-7 rounded-full bg-[var(--primary-soft)]" />
                </div>

                {/* Product interface */}
                <div className="grid min-h-[380px] grid-cols-[72px_1fr] sm:min-h-[430px] sm:grid-cols-[88px_1fr]">
                  {/* Sidebar */}
                  <div className="border-r border-[var(--border)] bg-[var(--background)] p-4">
                    <div className="h-8 w-8 rounded-lg bg-[var(--primary)]" />

                    <div className="mt-8 space-y-4">
                      <div className="h-2 w-full rounded-full bg-[var(--primary)] opacity-80" />
                      <div className="h-2 w-4/5 rounded-full bg-[var(--border)]" />
                      <div className="h-2 w-3/5 rounded-full bg-[var(--border)]" />
                      <div className="h-2 w-4/5 rounded-full bg-[var(--border)]" />
                    </div>

                    <div className="mt-12 space-y-4">
                      <div className="h-2 w-full rounded-full bg-[var(--border)]" />
                      <div className="h-2 w-3/5 rounded-full bg-[var(--border)]" />
                    </div>
                  </div>

                  {/* Dashboard */}
                  <div className="p-5 sm:p-7">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <div className="h-3 w-20 rounded-full bg-[var(--primary)] opacity-70" />
                        <div className="mt-3 h-7 w-36 rounded-md bg-[var(--foreground)] sm:w-48" />
                      </div>

                      <div className="hidden h-9 w-24 rounded-full bg-[var(--primary-soft)] sm:block" />
                    </div>

                    {/* Stats */}
                    <div className="mt-7 grid grid-cols-3 gap-3">
                      {[
                        ["84%", "Progress"],
                        ["126", "Projects"],
                        ["24", "Active"],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 sm:p-4"
                        >
                          <div className="text-base font-extrabold sm:text-xl">
                            {value}
                          </div>
                          <div className="mt-1 text-[9px] text-[var(--muted)] sm:text-[10px]">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart */}
                    <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 sm:p-5">
                      <div className="flex items-center justify-between">
                        <div className="h-3 w-24 rounded-full bg-[var(--foreground)]" />
                        <div className="h-2 w-12 rounded-full bg-[var(--primary)]" />
                      </div>

                      <div className="mt-6 flex h-28 items-end gap-2 sm:h-36 sm:gap-3">
                        {[35, 48, 42, 67, 56, 76, 64, 88, 79, 96].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t-md bg-[var(--primary)] opacity-80"
                              style={{ height: `${height}%` }}
                            />
                          )
                        )}
                      </div>
                    </div>

                    {/* Bottom rows */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-[var(--border)] p-4">
                        <div className="h-2 w-16 rounded-full bg-[var(--border)]" />
                        <div className="mt-3 h-3 w-24 rounded-full bg-[var(--foreground)]" />
                      </div>

                      <div className="rounded-xl border border-[var(--border)] p-4">
                        <div className="h-2 w-16 rounded-full bg-[var(--border)]" />
                        <div className="mt-3 h-3 w-20 rounded-full bg-[var(--foreground)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-5 left-5 rounded-2xl border border-[var(--border)] bg-[var(--white)] px-5 py-4 shadow-[0_18px_40px_rgba(17,20,23,0.10)] sm:left-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                  Built for business
                </p>

                <p className="mt-1 text-sm font-bold">
                  Useful. Scalable. Reliable.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}