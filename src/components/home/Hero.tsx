import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[var(--primary-soft)] opacity-70 blur-3xl"
      />

      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1280px] items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-24">
        {/* Left — Content */}
        <FadeUp className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
            Technology solutions for business
          </div>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Technology that works{" "}
            <span className="text-[var(--primary)]">for your business.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            We build practical digital solutions that help businesses work
            smarter, connect with customers, and grow with confidence.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white hover:-translate-y-0.5 hover:opacity-90"
            >
              Start a project
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-3.5 text-sm font-bold text-[var(--foreground)] hover:border-[var(--foreground)]"
            >
              Explore solutions
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
            {[
              "Business-focused",
              "Scalable solutions",
              "Long-term support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-[var(--muted)]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary-soft)]">
                  <Check
                    size={12}
                    strokeWidth={3}
                    className="text-[var(--primary)]"
                  />
                </span>

                {item}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Right — Product Visual */}
        <Reveal delay={0.15} className="relative z-10">
          {/* Decorative grid */}
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 grid grid-cols-6 gap-2 opacity-40"
          >
            {Array.from({ length: 36 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
              />
            ))}
          </div>

          {/* Main visual */}
          <div className="relative rounded-[28px] border border-[var(--border)] bg-white p-3 shadow-[0_30px_90px_rgba(17,20,23,0.10)] sm:p-4">
            {/* Browser top */}
            <div className="flex items-center justify-between rounded-t-2xl border-b border-[var(--border)] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
              </div>

              <div className="h-2 w-24 rounded-full bg-[var(--border)] sm:w-36" />

              <div className="h-7 w-7 rounded-full bg-[var(--primary-soft)]" />
            </div>

            {/* Product interface */}
            <div className="grid grid-cols-[64px_1fr] overflow-hidden rounded-b-2xl bg-[#f4f6f5] sm:grid-cols-[76px_1fr]">
              {/* Sidebar */}
              <div className="border-r border-[var(--border)] bg-white p-3 sm:p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)] text-xs font-extrabold text-white">
                  V
                </div>

                <div className="mt-8 space-y-5">
                  <div className="h-7 rounded-lg bg-[var(--primary-soft)]" />
                  <div className="h-2 rounded-full bg-[var(--border)]" />
                  <div className="h-2 rounded-full bg-[var(--border)]" />
                  <div className="h-2 rounded-full bg-[var(--border)]" />
                  <div className="h-2 rounded-full bg-[var(--border)]" />
                </div>

                <div className="mt-20 h-8 rounded-lg bg-[#f1f3f2]" />
              </div>

              {/* Main */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-3 w-24 rounded-full bg-[var(--foreground)]" />
                    <div className="mt-2 h-2 w-32 rounded-full bg-[var(--border)]" />
                  </div>

                  <div className="h-8 w-20 rounded-lg bg-[var(--foreground)]" />
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-2.5">
                  {[
                    ["Revenue", "$84.2K"],
                    ["Projects", "128"],
                    ["Growth", "+24%"],
                  ].map(([label, value], index) => (
                    <div
                      key={label}
                      className="rounded-xl border border-[var(--border)] bg-white p-3"
                    >
                      <p className="text-[9px] font-semibold text-[var(--muted)] sm:text-[10px]">
                        {label}
                      </p>

                      <p
                        className={`mt-2 text-sm font-extrabold sm:text-base ${
                          index === 2 ? "text-[var(--primary)]" : ""
                        }`}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="mt-3 rounded-xl border border-[var(--border)] bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2.5 w-20 rounded-full bg-[var(--foreground)]" />
                      <div className="mt-1.5 h-2 w-14 rounded-full bg-[var(--border)]" />
                    </div>

                    <span className="text-[10px] font-bold text-[var(--primary)]">
                      +24.8%
                    </span>
                  </div>

                  <div className="mt-6 flex h-28 items-end gap-1.5">
                    {[32, 45, 38, 56, 49, 66, 59, 73, 68, 84, 76, 94].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm bg-[var(--primary)] opacity-80"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>

                {/* Bottom cards */}
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl border border-[var(--border)] bg-white p-3">
                    <div className="h-2 w-14 rounded-full bg-[var(--border)]" />
                    <div className="mt-3 h-2.5 w-20 rounded-full bg-[var(--foreground)]" />
                    <div className="mt-2 h-2 w-12 rounded-full bg-[var(--primary)]" />
                  </div>

                  <div className="rounded-xl border border-[var(--border)] bg-white p-3">
                    <div className="h-2 w-16 rounded-full bg-[var(--border)]" />
                    <div className="mt-3 h-2.5 w-16 rounded-full bg-[var(--foreground)]" />
                    <div className="mt-2 h-2 w-20 rounded-full bg-[var(--border)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-[var(--border)] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(17,20,23,0.10)] sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-soft)]">
                <Check
                  size={18}
                  strokeWidth={2.5}
                  className="text-[var(--primary)]"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-[var(--muted)]">
                  Built for business
                </p>
                <p className="mt-0.5 text-sm font-bold">
                  Simple. Scalable. Reliable.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}