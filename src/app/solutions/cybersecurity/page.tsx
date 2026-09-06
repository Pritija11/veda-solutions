import Link from "next/link";
import {
  ArrowRight,
  Eye,
  KeyRound,
  LockKeyhole,
  Network,
  ShieldCheck,
  Siren,
} from "lucide-react";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Cybersecurity",
  "Veda Solutions Hub is a technology startup helping organizations strengthen digital security through practical cybersecurity strategies, infrastructure protection, risk assessment, and security-aware engineering.",
  "/solutions/cybersecurity",
);

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Security Assessment",
    description:
      "Identifying security weaknesses, risks, and areas where digital systems can be strengthened.",
  },
  {
    icon: LockKeyhole,
    title: "Application Security",
    description:
      "Applying security-aware engineering practices across applications, APIs, and digital platforms.",
  },
  {
    icon: Network,
    title: "Infrastructure Security",
    description:
      "Helping protect cloud and digital infrastructure through appropriate access controls, configuration, and security practices.",
  },
  {
    icon: KeyRound,
    title: "Identity & Access",
    description:
      "Designing practical approaches to authentication, authorization, permissions, and controlled access to digital resources.",
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description:
      "Improving visibility into digital environments so unusual activity and potential risks can be identified more effectively.",
  },
  {
    icon: Siren,
    title: "Risk & Resilience",
    description:
      "Helping organizations understand technology risks and build systems that are better prepared to handle disruptions.",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand the environment",
    description:
      "We look at the systems, infrastructure, applications, users, and data involved before recommending security improvements.",
  },
  {
    number: "02",
    title: "Reduce meaningful risk",
    description:
      "Security priorities are based on practical risks and business context rather than adding unnecessary controls.",
  },
  {
    number: "03",
    title: "Build security into systems",
    description:
      "Security should be considered throughout development, deployment, infrastructure, and ongoing operation.",
  },
];

export default function CybersecurityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07111F] pt-36 pb-24 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-24 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />

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

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/5 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-indigo-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                Cybersecurity
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              Build digital systems
              <span className="block text-teal-400">
                with security in mind.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Security is part of responsible digital engineering. We help
              organizations identify risks, strengthen applications and
              infrastructure, and build security into the way their systems
              operate.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-200 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
              >
                Discuss your security needs
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/solutions/cloud-devops"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1E334A] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-teal-400/40 hover:bg-teal-500/5 hover:text-teal-400"
              >
                Explore Cloud & DevOps
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              What we focus on
            </p>

            <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
              Security across the digital environment.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              We take a practical approach to cybersecurity, considering
              applications, infrastructure, identities, data, and operational
              processes as connected parts of the same environment.
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
                Security that supports the way systems actually work.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">
                Effective security is not only about adding controls. It is
                about understanding how technology is used and protecting the
                areas that matter most.
              </p>
            </div>

            <div className="divide-y divide-white/10 rounded-2xl border border-[#1E334A] bg-[#0B1728]">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-5 p-7 sm:grid-cols-[70px_1fr] sm:p-8"
                >
                  <span className="text-sm font-semibold tracking-widest text-teal-400">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {principle.description}
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
              Security by design
            </p>

            <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
              Build with security from the beginning, not as an afterthought.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              From application development to cloud infrastructure, security
              considerations can become part of the engineering process from
              the start.
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