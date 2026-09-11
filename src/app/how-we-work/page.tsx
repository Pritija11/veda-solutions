import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "How We Work",
  "How Veda Solutions Hub, a technology startup, takes an idea from problem to working system — understand, design, build, launch, evolve.",
  "/how-we-work",
);

const stages = [
  {
    n: "01",
    label: "Understand",
    objective: "Get to the real problem before touching any technology.",
    activities: "Stakeholder conversations, current-state review, constraints and goals.",
    output: "A clear problem statement everyone agrees on.",
    bg: "var(--powder-blue)",
  },
  {
    n: "02",
    label: "Design",
    objective: "Decide which combination of AI, software, cloud and data actually fits.",
    activities: "Architecture, system design, technology selection.",
    output: "A system design ready to build against.",
    bg: "var(--soft-mint)",
  },
  {
    n: "03",
    label: "Build",
    objective: "Engineer the system properly, not just prototype it.",
    activities: "Development, data pipelines, infrastructure, integration.",
    output: "A working system, tested against real conditions.",
    bg: "var(--butter-yellow)",
  },
  {
    n: "04",
    label: "Launch",
    objective: "Ship into production, not just a staging environment.",
    activities: "Deployment, monitoring setup, handover.",
    output: "A live system with visibility into how it's performing.",
    bg: "var(--soft-apricot)",
  },
  {
    n: "05",
    label: "Evolve",
    objective: "Keep the system improving as the business changes.",
    activities: "Monitoring, iteration, scaling, new capabilities.",
    output: "A system that keeps getting better instead of falling behind.",
    bg: "var(--baby-pink)",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF7] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="dot-grid pointer-events-none absolute -right-6 -top-6 h-72 w-72" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="tech-label text-[#6B6A72]">How We Work</div>
            <h1 className="mt-6 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[1.05] text-[#24232B] sm:text-6xl">
              Good technology starts with understanding the problem.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6B6A72]">
              As a technology startup, this five-stage process is how we take a problem from a first conversation
              to a system running in production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial timeline */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {stages.map((stage, i) => (
              <Reveal key={stage.n} delay={i * 90}>
                <div className="grid gap-6 rounded-[20px] border-[1.5px] border-[#24232B] p-7 sm:grid-cols-[150px_1fr] sm:p-9" style={{ backgroundColor: stage.bg }}>
                  <div>
                    <span className="tech-label text-[#24232B]/60">{stage.n}</span>
                    <h2 className="mt-3 break-words font-[family-name:var(--font-sora)] text-2xl font-extrabold text-[#24232B]">
                      {stage.label}
                    </h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="tech-label text-[#24232B]/50">Objective</p>
                      <p className="mt-2 text-sm leading-6 text-[#24232B]/80">{stage.objective}</p>
                    </div>
                    <div>
                      <p className="tech-label text-[#24232B]/50">Activities</p>
                      <p className="mt-2 text-sm leading-6 text-[#24232B]/80">{stage.activities}</p>
                    </div>
                    <div>
                      <p className="tech-label text-[#24232B]/50">Output</p>
                      <p className="mt-2 text-sm leading-6 text-[#24232B]/80">{stage.output}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement shapes */}
      <section className="bg-[#8CE8B8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-[#24232B]/60">How this actually starts</div>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B] sm:text-4xl">
              Three shapes this process usually takes.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                t: "Full system build",
                d: "You need two or more pillars working together from the start — an AI feature that needs its own data pipeline and cloud infrastructure, for example. We run all five stages end to end.",
              },
              {
                t: "Single-pillar sprint",
                d: "You know exactly what you need — just the software, just the data pipeline. We move faster through Understand and Design since the scope is already narrow.",
              },
              {
                t: "Ongoing Evolve partnership",
                d: "The system already exists — ours or someone else's. We step in at stage five and keep it monitored, maintained, and improving.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 100}>
                <div className="tile-hover veda-tile h-full bg-white p-7">
                  <span className="number-badge flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-sora)] text-lg font-extrabold text-[#24232B]">{item.t}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6B6A72]">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What stays constant */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-[#6B6A72]">What stays constant</div>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B] sm:text-4xl">
              Whichever shape it takes, these don&apos;t change.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "You always know which stage the project is in and what happens next.",
              "Nothing moves to Build until the Design stage has been reviewed with you.",
              "Monitoring and handover documentation ship with the system, not after it.",
              "One team stays accountable across all five stages — no handoffs between vendors.",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 80}>
                <div className="tile-hover veda-tile-soft flex h-full items-start gap-3 p-6">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#24232B] text-xs text-white">
                    ✓
                  </span>
                  <p className="text-sm leading-6 text-[#24232B]/80">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FFF4DD] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-[#6B6A72]">Common questions</div>
            <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B] sm:text-4xl">
              Before you reach out.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {[
              {
                q: "Do we always go through all five stages?",
                a: "Not always. If the problem is already well understood, we can move straight into Design. We won't stretch out discovery just to fill a stage.",
              },
              {
                q: "What if we only need one of the four pillars?",
                a: "That's normal. Most engagements start with one — AI, cloud, software, or data — and the others come in only if the problem actually needs them.",
              },
              {
                q: "Who owns the system once it's live?",
                a: "That's agreed before Launch, not after. Some teams want us to keep operating Evolve, others take it fully in-house once it's stable.",
              },
            ].map((item, i) => (
              <Reveal key={item.q} delay={i * 90}>
                <div className="veda-tile-soft p-6">
                  <h3 className="font-[family-name:var(--font-sora)] text-lg font-extrabold text-[#24232B]">{item.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6B6A72]">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="veda-tile flex flex-col gap-8 bg-[#24232B] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <h2 className="max-w-xl font-[family-name:var(--font-sora)] text-3xl font-extrabold text-white sm:text-4xl">
                Curious where your project fits in this process?
              </h2>
              <Link href="/contact" className="tile-hover inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#FF7043] px-7 py-3.5 text-sm font-bold text-white">
                Talk to Veda
                <span className="arrow-shift">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
