// components/solutions/SoftwareSolutions.tsx

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Database,
  Settings2,
  Layers3,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

const features = [
  {
    icon: BarChart3,
    title: "Business dashboards",
    description:
      "Turn business data into clear dashboards that help teams understand performance and make better decisions.",
  },
  {
    icon: Settings2,
    title: "Internal tools",
    description:
      "Replace repetitive manual processes with software built around the way your team actually works.",
  },
  {
    icon: Database,
    title: "Connected systems",
    description:
      "Connect databases, APIs, services, and business workflows into one reliable digital system.",
  },
  {
    icon: Layers3,
    title: "SaaS platforms",
    description:
      "Build scalable software products designed for customers, teams, and growing businesses.",
  },
];

export default function SoftwareSolutions() {
  return (
    <section id = "software" className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Heading */}
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs">02</span>
                <span className="h-px w-8 bg-[var(--primary)]" />
                Business Software
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Software designed around how your business works.
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                Off-the-shelf software does not always fit the way a business
                operates. We build custom systems that simplify workflows,
                organize information, and give teams the tools they need to
                work more efficiently.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--foreground)]"
              >
                Discuss your software needs
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </FadeUp>

        {/* Main content */}
        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <FadeUp key={feature.title} delay={index * 0.08}>
                  <div className="group h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--white)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_16px_40px_rgba(17,20,23,0.06)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <h3 className="mt-6 text-lg font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {feature.description}
                    </p>

                    <ArrowUpRight
                      size={17}
                      className="mt-6 text-[var(--muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--primary)]"
                    />
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Dashboard visual */}
          <Reveal delay={0.12}>
            <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[#111417] p-5 sm:p-7">
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative">
                {/* Window header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-xs font-bold text-white">
                      V
                    </div>

                    <div>
                      <div className="h-2 w-24 rounded-full bg-white/70" />
                      <div className="mt-1.5 h-1.5 w-14 rounded-full bg-white/20" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-white/10" />
                    <div className="h-7 w-7 rounded-lg bg-white/10" />
                  </div>
                </div>

                {/* Dashboard */}
                <div className="mt-6 grid gap-4 sm:grid-cols-[0.7fr_1.3fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                    <p className="text-xs text-white/40">Overview</p>

                    <div className="mt-6 space-y-4">
                      {[78, 58, 86, 46].map((width, index) => (
                        <div key={index}>
                          <div className="flex justify-between">
                            <span className="h-1.5 w-14 rounded-full bg-white/20" />
                            <span className="h-1.5 w-7 rounded-full bg-white/10" />
                          </div>

                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-[var(--primary)]"
                              style={{ width: `${width}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-white/40">
                          Monthly activity
                        </p>

                        <p className="mt-2 text-2xl font-bold text-white">
                          12,480
                        </p>
                      </div>

                      <span className="rounded-full bg-[var(--primary)]/15 px-3 py-1 text-[10px] font-semibold text-[var(--primary)]">
                        +24.8%
                      </span>
                    </div>

                    <div className="mt-8 flex h-32 items-end gap-2">
                      {[35, 52, 44, 68, 58, 76, 64, 88, 72, 96, 82, 100].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-md bg-[var(--primary)]/80"
                            style={{ height: `${height}%` }}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom cards */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ["Projects", "28"],
                    ["Users", "1,842"],
                    ["Tasks", "94%"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                    >
                      <p className="text-[10px] text-white/40">{label}</p>
                      <p className="mt-2 text-lg font-bold text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating status */}
              <div className="absolute bottom-6 right-6 rounded-xl border border-white/10 bg-[#1a1e22] px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  <span className="text-xs font-medium text-white">
                    System running smoothly
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