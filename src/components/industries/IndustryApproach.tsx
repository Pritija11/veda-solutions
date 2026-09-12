import {
  Search,
  Layers3,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We learn how your business operates, who your customers are, and where technology can make the biggest difference.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Shape",
    description:
      "We define the right features, workflows, and technology around your actual business requirements.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "We turn the plan into a practical digital solution that is designed for real users and everyday use.",
  },
];

export default function IndustryApproach() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--white)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Heading */}
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-sm font-semibold text-[var(--primary)]">
              <span className="h-px w-8 bg-[var(--primary)]" />

              <span className="text-xs font-bold uppercase tracking-[0.14em]">
                Our approach
              </span>

              <span className="h-px w-8 bg-[var(--primary)]" />
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Your industry is the context. Your business is the focus.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              We combine industry context with a close understanding of your
              specific business so the technology fits the way you actually
              work.
            </p>
          </div>
        </FadeUp>

        {/* Steps */}
        <Stagger className="relative mt-14 grid gap-4 md:grid-cols-3 lg:mt-20">
          {/* Connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-[var(--border)] md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeUp key={step.number} delay={index * 0.1}>
                <div className="relative h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6 sm:p-7">
                  {/* Number / icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--white)] shadow-sm">
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <span className="text-xs font-bold tracking-[0.14em] text-[var(--primary)]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-bold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </Stagger>

        {/* Bottom statement */}
        <FadeUp delay={0.2}>
          <div className="mt-8 flex flex-col gap-5 rounded-[1.5rem] bg-[var(--foreground)] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                The result
              </p>

              <p className="mt-3 text-base font-semibold leading-7 text-white/85 sm:text-lg">
                Technology that fits your business instead of forcing your
                business to fit the technology.
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
              <ArrowUpRight
                size={19}
                className="text-[var(--primary)]"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}