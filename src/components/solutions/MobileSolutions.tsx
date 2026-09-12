import Link from "next/link";
import {
  ArrowUpRight,
  Smartphone,
  Bell,
  Users,
  Zap,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

const features = [
  {
    icon: Smartphone,
    title: "Customer apps",
    description:
      "Mobile experiences that make it easier for customers to access your products and services.",
  },
  {
    icon: Users,
    title: "Business apps",
    description:
      "Purpose-built mobile tools that help teams stay connected and productive wherever they work.",
  },
  {
    icon: Bell,
    title: "Real-time experiences",
    description:
      "Notifications and connected features that keep customers and teams informed.",
  },
  {
    icon: Zap,
    title: "Cross-platform",
    description:
      "Efficient mobile applications designed to work across modern devices and platforms.",
  },
];

export default function MobileSolutions() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--white)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Heading */}
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs">03</span>
                <span className="h-px w-8 bg-[var(--primary)]" />
                Mobile Applications
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Put your business in your customers&apos; hands.
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                We build mobile applications that turn business ideas into
                useful digital experiences. From customer-facing apps to
                internal business tools, every experience is designed around
                usability and real-world needs.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--foreground)]"
              >
                Discuss a mobile project
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </FadeUp>

        {/* Content */}
        <div className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          {/* Phone visual */}
          <Reveal delay={0.1}>
            <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--background)]">
              {/* Decorative circles */}
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)]" />

              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)]" />

              {/* Phone */}
              <div className="relative z-10 w-[220px] rounded-[2.5rem] border-[7px] border-[#111417] bg-[#111417] p-1 shadow-[0_30px_70px_rgba(17,20,23,0.2)] sm:w-[245px]">
                <div className="overflow-hidden rounded-[2rem] bg-[var(--white)]">
                  {/* Phone top */}
                  <div className="flex justify-center py-3">
                    <div className="h-1.5 w-16 rounded-full bg-[#111417]" />
                  </div>

                  {/* App header */}
                  <div className="px-5 pb-4 pt-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] text-[var(--muted)]">
                          Welcome back
                        </p>

                        <p className="mt-1 text-sm font-bold">
                          Your dashboard
                        </p>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-soft)]">
                        <span className="text-xs font-bold text-[var(--primary)]">
                          V
                        </span>
                      </div>
                    </div>

                    {/* Main card */}
                    <div className="mt-5 rounded-2xl bg-[var(--primary)] p-4 text-white">
                      <p className="text-[9px] opacity-70">
                        Monthly overview
                      </p>

                      <p className="mt-2 text-2xl font-bold">84.6%</p>

                      <div className="mt-4 h-1.5 rounded-full bg-white/20">
                        <div className="h-full w-[84%] rounded-full bg-white" />
                      </div>
                    </div>

                    {/* App actions */}
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {[
                        ["Projects", "12"],
                        ["Tasks", "28"],
                        ["Messages", "08"],
                        ["Updates", "05"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-[var(--border)] p-3"
                        >
                          <p className="text-[8px] text-[var(--muted)]">
                            {label}
                          </p>

                          <p className="mt-1 text-sm font-bold">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Activity */}
                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] font-semibold">
                          Recent activity
                        </p>

                        <span className="text-[8px] text-[var(--primary)]">
                          View all
                        </span>
                      </div>

                      <div className="mt-3 space-y-2">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2"
                          >
                            <div className="h-6 w-6 rounded-full bg-[var(--primary-soft)]" />

                            <div className="flex-1">
                              <div className="h-1.5 w-20 rounded-full bg-[var(--border)]" />
                              <div className="mt-1 h-1 w-12 rounded-full bg-[var(--border)]" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Phone bottom */}
                  <div className="flex justify-center py-3">
                    <div className="h-1 w-12 rounded-full bg-[#111417]" />
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute right-5 top-10 z-20 rounded-2xl border border-[var(--border)] bg-[var(--white)] p-4 shadow-[0_16px_40px_rgba(17,20,23,0.1)] sm:right-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <Bell
                      size={16}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold">New update</p>
                    <p className="mt-1 text-[10px] text-[var(--muted)]">
                      Everything is up to date
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating status */}
              <div className="absolute bottom-10 left-5 z-20 rounded-full border border-[var(--border)] bg-[var(--white)] px-4 py-2.5 text-xs font-semibold shadow-[0_12px_30px_rgba(17,20,23,0.08)] sm:left-10">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--primary)]" />
                Designed for everyday use
              </div>
            </div>
          </Reveal>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <FadeUp key={feature.title} delay={index * 0.08}>
                  <div className="group h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_16px_40px_rgba(17,20,23,0.06)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                      <Icon
                        size={20}
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
        </div>
      </div>
    </section>
  );
}