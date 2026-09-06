import type { Metadata } from "next";
import {
  Code2,
  Globe,
  Server,
  Smartphone,
  Layers3,
  Gauge,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Software Solutions",
  "Veda Solutions Hub is a startup that builds modern software solutions including web applications, APIs, platforms, scalable architectures, and digital products.",
  "/solutions/software-solutions",
);

const capabilities = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Modern, responsive web applications designed around user needs, business requirements, and long-term maintainability.",
  },
  {
    icon: Server,
    title: "APIs & Backend Systems",
    description:
      "Reliable APIs and backend services that connect applications, data, users, and external systems.",
  },
  {
    icon: Layers3,
    title: "Digital Platforms",
    description:
      "Flexible software platforms that bring multiple workflows, users, and capabilities together in one digital environment.",
  },
  {
    icon: Smartphone,
    title: "Digital Experiences",
    description:
      "User-focused digital experiences that make products and services easier to access and interact with.",
  },
  {
    icon: Gauge,
    title: "Scalable Architecture",
    description:
      "Software architectures designed to remain maintainable as applications, requirements, and users grow.",
  },
  {
    icon: Code2,
    title: "Software Modernization",
    description:
      "Improving existing software through better architecture, engineering practices, performance, and maintainability.",
  },
];

export default function SoftwareSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#07111F] pb-20 pt-36 sm:pb-24 sm:pt-40">
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-500/10">
              <Code2 className="h-7 w-7 text-teal-400" />
            </div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              Software Solutions
            </p>

            <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              Software built around
              <span className="text-teal-400"> real requirements.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              Veda Solutions Hub is a startup that designs and builds modern software applications, APIs, and
              digital platforms that are reliable, maintainable, and ready to
              evolve.
            </p>

            <div className="mt-9">
              <Button href="/contact">Discuss your software idea →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Software capabilities"
            title="From application interfaces to backend infrastructure."
            description="We approach software as a complete system, considering users, architecture, data, performance, security, and future growth."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <article
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

                  <h2 className="mt-7 text-lg font-semibold text-slate-100">
                    {capability.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering principles */}
      <section className="bg-[#07111F] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Engineering principles"
              title="Good software is designed for change."
              description="Requirements evolve. Users grow. Systems become more complex. We keep those realities in mind from the beginning."
            />

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7">
                <span className="text-sm font-semibold text-teal-400">
                  01
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Clear architecture
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Structure systems so their components and responsibilities
                  remain understandable as complexity grows.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7">
                <span className="text-sm font-semibold text-teal-400">
                  02
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Reliable foundations
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Build around sound data, APIs, security, testing, and
                  operational practices.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7">
                <span className="text-sm font-semibold text-teal-400">
                  03
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Continuous improvement
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Treat software as an evolving product that can improve as
                  users, technology, and business needs change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1728] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-teal-400/20 bg-[#0F1F32] p-8 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-400">
                Build your next product
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl leading-tight text-slate-100 sm:text-4xl">
                Have a software idea or an existing system to improve?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Tell us what you are trying to build or improve and let&apos;s
                explore the right technical approach.
              </p>

              <div className="mt-7">
                <Button href="/contact">Start a conversation →</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}