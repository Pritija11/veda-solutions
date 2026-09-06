import Link from "next/link";
import {
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "AI-powered applications, intelligent workflows, automation, and data-driven experiences.",
    href: "/solutions/ai-solutions",
  },
  {
    icon: CloudCog,
    title: "Cloud & DevOps",
    description:
      "Cloud architecture, infrastructure automation, deployment pipelines, and reliable digital platforms.",
    href: "/solutions/cloud-devops",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Modern web applications, APIs, platforms, and scalable software systems built around real requirements.",
    href: "/solutions/software-solutions",
  },
  {
    icon: Database,
    title: "Data & Intelligence",
    description:
      "Data pipelines, analytics, structured data foundations, and systems that turn information into insight.",
    href: "/solutions/data-solutions",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="bg-[#0B1728] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Intro */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              Core capabilities
            </p>

            <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
              One hub. Multiple technology disciplines.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400">
            Our capabilities are designed to work independently or together,
            depending on the problem your organization needs to solve.
          </p>
        </div>

        {/* Capabilities */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#1E334A] bg-[#1E334A] sm:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <Link
                key={capability.title}
                href={capability.href}
                className="group relative bg-[#0B1728] p-8 transition-colors duration-300 hover:bg-[#0F1F32] lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-500/10">
                    <Icon className="h-5 w-5 text-teal-400" />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-slate-100">
                  {capability.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                  {capability.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors group-hover:text-teal-400">
                  Explore
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-teal-400 transition-all duration-500 group-hover:w-full" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}