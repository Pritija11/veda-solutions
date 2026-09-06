import type { Metadata } from "next";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "About",
  "Learn about Veda Solutions Hub, a technology startup building AI-powered and modern digital solutions across AI, cloud, software, data, and cybersecurity.",
  "/about",
);

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "We explore practical ways to use AI to create smarter products, workflows, and digital experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "We build modern infrastructure and delivery practices that help digital systems remain scalable and reliable.",
  },
  {
    icon: Code2,
    title: "Software",
    description:
      "We engineer modern applications and platforms designed around real requirements and long-term maintainability.",
  },
  {
    icon: Database,
    title: "Data",
    description:
      "We create stronger data foundations that support analytics, intelligent systems, and better decision-making.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "We consider security and resilience as important parts of building dependable digital environments.",
  },
  {
    icon: Sparkles,
    title: "Digital Strategy",
    description:
      "We help turn technology opportunities into practical digital directions and solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#07111F] pb-20 pt-36 sm:pb-24 sm:pt-40">
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              About Veda Solutions Hub
            </p>

            <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              A technology startup built around
              <span className="text-teal-400"> connected ideas.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              Veda Solutions Hub brings together AI, cloud, software, data,
              cybersecurity, and digital strategy to create practical
              solutions for a rapidly changing digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Our approach"
              title="Technology works best when everything connects."
            />

            <div className="space-y-6 text-base leading-8 text-slate-400">
              <p>
                Veda Solutions Hub is a technology startup focused on building
                modern digital solutions that combine different areas of
                technology rather than treating them as isolated disciplines.
              </p>

              <p>
                AI can make software more intelligent. Cloud infrastructure
                can make systems more scalable. Data can make decisions more
                informed. Software engineering can bring those capabilities
                together into products people can actually use.
              </p>

              <p>
                Our goal is to approach technology from that connected
                perspective and turn complex possibilities into solutions that
                are useful, maintainable, and ready to evolve.
              </p>

              <div className="pt-4">
                <Button href="/solutions">
                  Explore our solutions →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#07111F] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we work with"
            title="Capabilities across the modern digital stack."
            description="Our technology capabilities span the areas needed to design, build, secure, and evolve modern digital systems."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7 transition-colors duration-300 hover:border-teal-400/30 hover:bg-[#0F1F32]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-500/10">
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

      {/* Vision / Mission */}
      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-teal-400/20 bg-[#0F1F32] p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-400">
                Our vision
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-dm-serif)] text-3xl leading-tight text-slate-100 sm:text-4xl">
                Make meaningful technology more accessible and useful.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                We envision a digital environment where organizations can use
                emerging technologies thoughtfully to create better products,
                services, and experiences.
              </p>
            </article>

            <article className="rounded-2xl border border-[#1E334A] bg-[#07111F] p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-400">
                Our mission
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-dm-serif)] text-3xl leading-tight text-slate-100 sm:text-4xl">
                Turn complex technology into practical digital solutions.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                We combine engineering, intelligence, infrastructure, and
                strategy to help solve real-world digital challenges.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07111F] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-7 rounded-2xl border border-[#1E334A] bg-[#0B1728] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-400">
                Work with us
              </p>

              <h2 className="mt-3 font-[family-name:var(--font-dm-serif)] text-3xl text-slate-100 sm:text-4xl">
                Have an idea worth building?
              </h2>
            </div>

            <Button href="/contact">Talk to us →</Button>
          </div>
        </div>
      </section>
    </>
  );
}