import {
  Code2,
  Palette,
  Database,
  Cloud,
  Bot,
  Smartphone,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const capabilities = [
  {
    icon: Code2,
    number: "01",
    title: "Web & Software",
    description:
      "Websites, web applications, business platforms, dashboards, and custom software built around real business needs.",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile Applications",
    description:
      "Customer and business applications designed to make digital services accessible wherever people use them.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Digital Experiences",
    description:
      "Clear, responsive interfaces that help businesses communicate better and give customers easier digital experiences.",
  },
  {
    icon: Bot,
    number: "04",
    title: "AI & Automation",
    description:
      "Practical AI integrations and automated workflows that reduce repetitive work and improve everyday processes.",
  },
  {
    icon: Database,
    number: "05",
    title: "Data & Systems",
    description:
      "Databases, APIs, integrations, and connected systems that keep important business information organized.",
  },
  {
    icon: Cloud,
    number: "06",
    title: "Cloud & Infrastructure",
    description:
      "Cloud deployment and technical foundations designed for reliable, maintainable, and scalable digital products.",
  },
];

export default function AboutCapabilities() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--white)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Heading */}
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  What we bring
                </span>

                <span className="h-px w-8 bg-[var(--primary)]" />
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                One team for the digital journey.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              From a first website to a connected business platform, we bring
              together the capabilities needed to design, build, and improve
              digital solutions.
            </p>
          </div>
        </FadeUp>

        {/* Capabilities */}
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <FadeUp key={capability.number} delay={index * 0.06}>
                <div className="group h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-[var(--white)] hover:shadow-[0_20px_45px_rgba(17,20,23,0.07)] sm:p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <span className="text-xs font-bold tracking-[0.14em] text-[var(--border)]">
                      {capability.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-bold tracking-tight">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {capability.description}
                  </p>

                  <div className="mt-7 h-px w-10 bg-[var(--primary)] opacity-60 transition-all duration-300 group-hover:w-16" />
                </div>
              </FadeUp>
            );
          })}
        </Stagger>

        {/* Bottom note */}
        <FadeUp delay={0.18}>
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-sm font-bold">
                Technology is only part of the solution.
              </p>

              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                We combine technology with business understanding, thoughtful
                design, and clear communication.
              </p>
            </div>

            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
              Business + Technology
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}