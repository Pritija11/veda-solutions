import type { Metadata } from "next";
import {
  Cloud,
  Workflow,
  Server,
  GitBranch,
  ShieldCheck,
  Activity,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Cloud & DevOps",
  "Veda Solutions Hub is a startup that provides cloud and DevOps solutions covering infrastructure, automation, CI/CD, reliability, security, and modern application delivery.",
  "/solutions/cloud-devops",
);

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Designing cloud environments around scalability, reliability, performance, and the specific needs of modern applications.",
  },
  {
    icon: Workflow,
    title: "Infrastructure Automation",
    description:
      "Automating infrastructure and operational processes to create more consistent and manageable environments.",
  },
  {
    icon: GitBranch,
    title: "CI/CD & Delivery",
    description:
      "Building automated delivery pipelines that help teams test, release, and improve applications more efficiently.",
  },
  {
    icon: Server,
    title: "Application Infrastructure",
    description:
      "Creating the infrastructure foundations required to run applications reliably across development and production environments.",
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security",
    description:
      "Applying security-conscious infrastructure practices to reduce risks and protect cloud-based systems.",
  },
  {
    icon: Activity,
    title: "Reliability & Monitoring",
    description:
      "Improving system visibility and operational reliability through monitoring, observability, and proactive practices.",
  },
];

export default function CloudDevOpsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#07111F] pb-20 pt-36 sm:pb-24 sm:pt-40">
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10">
              <Cloud className="h-7 w-7 text-indigo-400" />
            </div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-400">
              Cloud & DevOps
            </p>

            <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              Build infrastructure
              <span className="text-indigo-400"> that moves with you.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              We design modern cloud and DevOps environments that make
              applications easier to deploy, scale, monitor, secure, and
              evolve.
            </p>

            <div className="mt-9">
              <Button href="/contact">
                Discuss your infrastructure →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cloud & DevOps capabilities"
            title="Infrastructure designed for modern software."
            description="We bring infrastructure, automation, security, and software delivery together to create dependable technology environments."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="group rounded-2xl border border-[#1E334A] bg-[#07111F] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-[#0F1F32]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10">
                      <Icon className="h-5 w-5 text-indigo-400" />
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

      {/* Engineering approach */}
      <section className="bg-[#07111F] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Our approach"
              title="Infrastructure should support engineering, not slow it down."
              description="We focus on automation and clear infrastructure practices so teams can spend more time improving their products."
            />

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7">
                <span className="text-sm font-semibold text-indigo-400">
                  01
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Assess
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Understand the existing infrastructure, application
                  requirements, risks, and operational challenges.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7">
                <span className="text-sm font-semibold text-indigo-400">
                  02
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Automate
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Replace repetitive operational work with repeatable
                  infrastructure and delivery processes.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7">
                <span className="text-sm font-semibold text-indigo-400">
                  03
                </span>

                <h2 className="mt-5 text-lg font-semibold text-slate-100">
                  Improve
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Monitor systems, learn from operational data, and
                  continuously improve reliability and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1728] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-indigo-400/20 bg-[#0F1F32] p-8 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-400">
                Modernize your infrastructure
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl leading-tight text-slate-100 sm:text-4xl">
                Building something that needs to scale?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Let&apos;s explore the infrastructure, automation, and
                engineering practices that can support it.
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