import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Cloud,
  Database,
  Lightbulb,
  Users,
} from "lucide-react";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Careers",
  "Join Veda Solutions Hub, a technology startup building modern solutions across AI, cloud, DevOps, software, data, and automation.",
  "/careers",
);

const areas = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Build web applications, APIs, platforms, and reliable software systems.",
  },
  {
    icon: Lightbulb,
    title: "AI & Intelligent Systems",
    description:
      "Explore practical applications of AI, automation, and intelligent technologies.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Work with modern infrastructure, automation, deployment, and cloud technologies.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Work with data foundations, pipelines, analytics, and systems that turn information into insight.",
  },
];

const principles = [
  {
    number: "01",
    title: "Keep learning",
    description:
      "Technology changes quickly. We value curiosity, continuous learning, and the willingness to explore better ways of solving problems.",
  },
  {
    number: "02",
    title: "Build with purpose",
    description:
      "We focus on understanding the problem first and choosing technology that creates meaningful value.",
  },
  {
    number: "03",
    title: "Think across disciplines",
    description:
      "Our work connects AI, software, cloud, data, and automation. We value people who are interested in how these areas work together.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07111F] pt-36 pb-24 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-20 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-500/5 px-4 py-2">
              <BriefcaseBusiness className="h-4 w-4 text-teal-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
                Careers
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              Build technology.
              <span className="block text-teal-400">
                Keep growing.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              We are building Veda Solutions Hub around people who enjoy
              solving problems, learning new technologies, and creating
              practical digital solutions.
            </p>

            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-200 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
                Why Veda
              </p>

              <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
                A place to work across technology.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                Veda Solutions Hub brings different technology disciplines
                together. That means there is room to develop deep technical
                skills while also understanding how different systems connect.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {areas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="rounded-2xl border border-[#1E334A] bg-[#07111F] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-[#0F1F32]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-500/10">
                      <Icon className="h-5 w-5 text-teal-400" />
                    </div>

                    <h3 className="mt-7 text-lg font-semibold text-slate-100">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07111F] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
                How we think
              </p>

              <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
                Curiosity matters as much as experience.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">
                We value people who are willing to learn, question existing
                approaches, and contribute thoughtfully to the problems we are
                trying to solve.
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
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-500/10">
              <Users className="h-6 w-6 text-teal-400" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              Opportunities
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
              Interested in building with us?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              We are growing our technology capabilities across AI, cloud,
              software, data, and digital solutions. If you think your skills
              could contribute, we would like to hear from you.
            </p>

            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-7 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-200 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
              >
                Contact Veda Solutions Hub
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}