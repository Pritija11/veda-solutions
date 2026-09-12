import {
  ShieldCheck,
  Sparkles,
  Handshake,
  TrendingUp,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const values = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Reliability",
    description:
      "We build with care, considering security, performance, maintainability, and the long-term needs of the business.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Useful innovation",
    description:
      "We embrace new technology when it creates meaningful value and improves the way people work.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Clear collaboration",
    description:
      "Good products come from good communication. We keep ideas, decisions, and progress clear throughout the process.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Long-term thinking",
    description:
      "We aim to create solutions that can grow and adapt as your business, customers, and requirements evolve.",
  },
];

export default function AboutValues() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Heading */}
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  What guides us
                </span>

                <span className="h-px w-8 bg-[var(--primary)]" />
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                The principles behind our work.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              Technology changes quickly. The way we approach our work should
              remain grounded in principles that create lasting value for
              businesses and the people who use their products.
            </p>
          </div>
        </FadeUp>

        {/* Values */}
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <FadeUp key={value.number} delay={index * 0.08}>
                <div className="group h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--white)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_20px_45px_rgba(17,20,23,0.07)] sm:p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <span className="text-xs font-bold tracking-[0.14em] text-[var(--border)]">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-bold tracking-tight">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {value.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </Stagger>

        {/* Statement */}
        <FadeUp delay={0.18}>
          <div className="mt-8 rounded-[1.5rem] border border-[var(--border)] bg-[var(--foreground)] px-7 py-8 text-white sm:px-9 sm:py-9">
            <p className="max-w-4xl text-xl font-bold leading-8 tracking-tight sm:text-2xl sm:leading-9">
              “Build technology that people can rely on, understand, and
              actually use.”
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}