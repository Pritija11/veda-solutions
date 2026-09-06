import type { Metadata } from "next";
import {
  BrainCircuit,
  Bot,
  Workflow,
  BarChart3,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "AI Solutions",
  "Veda Solutions Hub is a startup that builds practical AI solutions including intelligent applications, AI automation, data-driven systems, and AI-powered digital experiences.",
  "/solutions/ai-solutions",
);

const capabilities = [
  {
    icon: Bot,
    title: "AI Applications",
    description:
      "AI-powered applications that help users interact with information, products, and digital services in more intelligent ways.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Intelligent workflows that combine AI with automation to reduce repetitive work and improve operational efficiency.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Analytics",
    description:
      "Data-driven systems that help turn large amounts of information into useful insights and better decisions.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Modern generative AI capabilities for content, knowledge retrieval, assistants, and other practical business use cases.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Integrating AI capabilities into existing software, platforms, and digital workflows without rebuilding everything from scratch.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    description:
      "Thoughtful AI engineering that considers reliability, security, privacy, transparency, and appropriate use.",
  },
];

export default function AISolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#07111F] pb-20 pt-36 sm:pb-24 sm:pt-40">
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-500/10">
              <BrainCircuit className="h-7 w-7 text-teal-400" />
            </div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              AI Solutions
            </p>

            <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              Make technology
              <span className="text-teal-400"> more intelligent.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              We build practical AI-powered solutions that help organizations
              improve products, automate workflows, understand data, and
              create smarter digital experiences.
            </p>

            <div className="mt-9">
              <Button href="/contact">Discuss an AI solution →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="AI capabilities"
            title="From AI ideas to useful digital systems."
            description="We focus on practical applications of AI that can fit into real products, workflows, and technology environments."
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

      {/* Approach */}
      <section className="bg-[#07111F] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Our AI approach"
              title="Start with a useful problem, not just a new model."
              description="The right AI solution depends on the problem, the available data, the users, and the environment in which it needs to operate."
            />

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7">
                <span className="text-sm font-semibold text-teal-400">
                  01
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Identify
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Find the tasks or decisions where intelligence can create
                  meaningful value.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7">
                <span className="text-sm font-semibold text-teal-400">
                  02
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Design
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Select the appropriate models, data architecture, interfaces,
                  and supporting technology.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7">
                <span className="text-sm font-semibold text-teal-400">
                  03
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Integrate
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Connect the AI capability to a reliable product or workflow
                  where people can actually use it.
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
                Explore what AI can do
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl leading-tight text-slate-100 sm:text-4xl">
                Have an AI use case in mind?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Tell us about the problem you want to solve and we can explore
                where AI could fit into the solution.
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