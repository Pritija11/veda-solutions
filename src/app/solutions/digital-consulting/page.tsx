import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Lightbulb,
  Map,
  Search,
  Settings2,
  Workflow,
} from "lucide-react";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Digital Consulting",
  "Veda Solutions Hub is a technology startup helping organizations make better technology decisions through digital strategy, technology assessment, architecture, and practical transformation planning.",
  "/solutions/digital-consulting",
);

const capabilities = [
  {
    icon: Compass,
    title: "Digital Strategy",
    description:
      "Helping organizations define practical technology directions that align digital initiatives with real business and operational needs.",
  },
  {
    icon: Search,
    title: "Technology Assessment",
    description:
      "Reviewing existing applications, infrastructure, workflows, and technology choices to identify opportunities for improvement.",
  },
  {
    icon: Map,
    title: "Technology Roadmaps",
    description:
      "Creating clear, practical roadmaps that help teams prioritize technology initiatives and move forward with greater confidence.",
  },
  {
    icon: Settings2,
    title: "Solution Architecture",
    description:
      "Designing technology architectures that connect applications, infrastructure, data, security, and operational requirements.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description:
      "Helping organizations modernize processes and technology through structured, achievable digital transformation initiatives.",
  },
  {
    icon: Lightbulb,
    title: "Technology Advisory",
    description:
      "Providing practical guidance around technology choices, implementation priorities, and the opportunities created by emerging technologies.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "We first understand your current technology environment, challenges, goals, and constraints before recommending a direction.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We identify priorities, opportunities, and practical technology options that can address the most meaningful challenges.",
  },
  {
    number: "03",
    title: "Move forward",
    description:
      "We turn recommendations into an actionable roadmap that can guide implementation, modernization, or future technology decisions.",
  },
];

export default function DigitalConsultingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07111F] pt-36 pb-24 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-20 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/solutions"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-teal-400"
            >
              ← All solutions
            </Link>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-500/5 px-4 py-2">
              <Compass className="h-4 w-4 text-teal-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
                Digital Consulting
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              Make better technology
              <span className="block text-teal-400">
                decisions with clarity.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Technology decisions become easier when they are connected to
              clear goals. We help organizations understand their digital
              environment, identify opportunities, and create practical paths
              forward.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-200 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
              >
                Discuss your technology needs
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1E334A] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-teal-400/40 hover:bg-teal-500/5 hover:text-teal-400"
              >
                Explore our solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              What we do
            </p>

            <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
              Turn technology questions into practical direction.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Our consulting approach connects strategy with engineering. We
              consider the wider technology environment rather than treating
              individual systems as isolated decisions.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="group rounded-2xl border border-[#1E334A] bg-[#07111F] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-[#0F1F32]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-500/10">
                      <Icon className="h-5 w-5 text-teal-400" />
                    </div>

                    <span className="text-xs font-semibold tracking-widest text-slate-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-slate-100">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#07111F] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
                Our approach
              </p>

              <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
                Strategy grounded in real technology.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">
                Good technology advice needs to account for what already
                exists, what needs to change, and what an organization can
                realistically implement.
              </p>
            </div>

            <div className="divide-y divide-white/10 rounded-2xl border border-[#1E334A] bg-[#0B1728]">
              {approach.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 p-7 sm:grid-cols-[70px_1fr] sm:p-8"
                >
                  <span className="text-sm font-semibold tracking-widest text-teal-400">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-teal-400/15 bg-[#07111F] px-6 py-16 text-center sm:px-10">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/5 blur-3xl" />

          <div className="relative">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              Start with the challenge
            </p>

            <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
              Not sure which technology direction makes sense?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Start by telling us what you are trying to achieve. We can help
              you think through the technology options and identify a practical
              path forward.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-7 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-200 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
              >
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1E334A] bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-teal-400/30 hover:bg-teal-500/5 hover:text-teal-400"
              >
                View all solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}