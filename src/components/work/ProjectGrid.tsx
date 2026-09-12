import Link from "next/link";
import {
  ArrowUpRight,
  Globe2,
  Smartphone,
  Bot,
  Database,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const projects = [
  {
    number: "01",
    icon: Globe2,
    category: "Web",
    title: "Business websites",
    description:
      "Clear, responsive digital experiences designed to help businesses communicate their value and connect with customers.",
  },
  {
    number: "02",
    icon: Database,
    category: "Software",
    title: "Business management systems",
    description:
      "Custom platforms that bring business data, workflows, and everyday operations into one organized system.",
  },
  {
    number: "03",
    icon: Smartphone,
    category: "Mobile",
    title: "Customer & business apps",
    description:
      "Mobile experiences that make services, information, and business operations more accessible.",
  },
  {
    number: "04",
    icon: Bot,
    category: "AI & Automation",
    title: "Intelligent workflows",
    description:
      "Practical AI and automation features that reduce repetitive work and improve everyday processes.",
  },
];

export default function ProjectGrid() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <FadeUp>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
              <span className="text-xs font-bold uppercase tracking-[0.14em]">
                What we build
              </span>

              <span className="h-px w-8 bg-[var(--primary)]" />

              Digital solutions
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              From digital presence to complete business systems.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              Our work spans the digital products and systems businesses need
              to operate, connect with customers, and grow.
            </p>
          </div>
        </FadeUp>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <FadeUp key={project.number} delay={index * 0.08}>
                <Link
                  href="/contact"
                  className="group block h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--white)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_18px_45px_rgba(17,20,23,0.07)] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[0.14em] text-[var(--primary)]">
                      {project.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        className="text-[var(--primary)]"
                      />
                    </div>
                  </div>

                  <p className="mt-9 text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {project.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5">
                    <span className="text-sm font-bold">
                      Explore
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-[var(--muted)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                    />
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}