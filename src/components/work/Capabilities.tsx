import {
  Code2,
  Layers3,
  ShieldCheck,
  Gauge,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const capabilities = [
  {
    icon: Code2,
    title: "Modern development",
    description:
      "We use current technologies and development practices to create maintainable digital products.",
  },
  {
    icon: Layers3,
    title: "Connected systems",
    description:
      "Websites, applications, APIs, databases, and third-party services can work together as one system.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable foundations",
    description:
      "Security, data handling, performance, and maintainability are considered from the beginning.",
  },
  {
    icon: Gauge,
    title: "Built to evolve",
    description:
      "We create solutions that can adapt as your users, business, and requirements change.",
  },
];

export default function Capabilities() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--white)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <FadeUp>
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  Our capabilities
                </span>

                <span className="h-px w-8 bg-[var(--primary)]" />
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                Good work starts with a solid foundation.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">
                We combine design, development, data, and technology to
                create digital solutions that are useful today and ready for
                what comes next.
              </p>
            </div>
          </FadeUp>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <FadeUp key={capability.title} delay={index * 0.08}>
                  <div className="group h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] sm:p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <h3 className="mt-7 text-lg font-bold">
                      {capability.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {capability.description}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}