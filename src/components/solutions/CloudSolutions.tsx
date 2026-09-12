import Link from "next/link";
import {
  ArrowUpRight,
  Cloud,
  Server,
  Database,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

const features = [
  {
    icon: Cloud,
    title: "Cloud deployment",
    description:
      "Deploy digital products on reliable cloud infrastructure that can grow alongside your business.",
  },
  {
    icon: Server,
    title: "APIs & integrations",
    description:
      "Connect your applications and third-party services so information can move smoothly between systems.",
  },
  {
    icon: Database,
    title: "Data & databases",
    description:
      "Organize and manage business data with systems designed for reliability, accessibility, and growth.",
  },
  {
    icon: ShieldCheck,
    title: "Security & reliability",
    description:
      "Build systems with sensible security practices, dependable infrastructure, and maintainable technology.",
  },
];

export default function CloudSolutions() {
  return (
    <section id = "cloud" className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Heading */}
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs">05</span>
                <span className="h-px w-8 bg-[var(--primary)]" />
                Cloud & IT
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                The technology behind reliable digital systems.
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                A great digital product needs dependable technology behind it.
                We help businesses connect systems, manage data, deploy
                applications, and maintain the infrastructure their digital
                operations depend on.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--foreground)]"
              >
                Discuss your infrastructure
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </FadeUp>

        {/* Main content */}
        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-[1fr_1.1fr]">
          {/* Infrastructure visual */}
          <Reveal delay={0.1}>
            <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--white)] p-6 sm:p-8">
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[var(--primary-soft)]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[var(--muted)]">
                      Infrastructure
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      Connected systems
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <Cloud
                      size={20}
                      className="text-[var(--primary)]"
                    />
                  </div>
                </div>

                {/* System diagram */}
                <div className="relative mt-10 min-h-[250px]">
                  {/* Connecting lines */}
                  <div className="absolute left-1/2 top-[68px] hidden h-px w-[58%] -translate-x-1/2 bg-[var(--border)] sm:block" />

                  <div className="absolute left-1/2 top-[68px] hidden h-[120px] w-px -translate-x-1/2 bg-[var(--border)] sm:block" />

                  {/* Top node */}
                  <div className="relative mx-auto w-fit rounded-2xl border border-[var(--border)] bg-[var(--background)] px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                        <Server
                          size={17}
                          className="text-[var(--primary)]"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-bold">Applications</p>
                        <p className="mt-1 text-[10px] text-[var(--muted)]">
                          Web & mobile
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom nodes */}
                  <div className="mt-6 grid gap-3 sm:absolute sm:inset-x-0 sm:bottom-0 sm:mt-0 sm:grid-cols-3">
                    {[
                      {
                        icon: Database,
                        title: "Data",
                        subtitle: "Databases",
                      },
                      {
                        icon: Cloud,
                        title: "Cloud",
                        subtitle: "Infrastructure",
                      },
                      {
                        icon: ShieldCheck,
                        title: "Security",
                        subtitle: "Protection",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--white)]">
                            <Icon
                              size={16}
                              className="text-[var(--primary)]"
                            />
                          </div>

                          <p className="mt-3 text-xs font-bold">
                            {item.title}
                          </p>

                          <p className="mt-1 text-[10px] text-[var(--muted)]">
                            {item.subtitle}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Status */}
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

                    <span className="text-xs font-semibold">
                      Systems connected
                    </span>
                  </div>

                  <RefreshCw
                    size={15}
                    className="text-[var(--muted)]"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <FadeUp key={feature.title} delay={index * 0.08}>
                  <div className="group h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--white)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_16px_40px_rgba(17,20,23,0.06)] sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          className="text-[var(--primary)]"
                        />
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="text-[var(--muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--primary)]"
                      />
                    </div>

                    <h3 className="mt-6 text-lg font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {feature.description}
                    </p>
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