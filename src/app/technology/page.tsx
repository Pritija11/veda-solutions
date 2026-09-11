import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "Technology",
  "The technology and engineering ecosystem behind Veda Solutions Hub's AI, software, cloud and data systems.",
  "/technology",
);

const categories = [
  { n: "01", label: "AI", capability: "Intelligence", items: ["Machine Learning", "Generative AI", "Automation", "Model Evaluation"], bg: "var(--powder-blue)" },
  { n: "02", label: "Software", capability: "Engineering", items: ["React", "Next.js", "Node.js", "APIs"], bg: "var(--butter-yellow)" },
  { n: "03", label: "Cloud", capability: "Infrastructure", items: ["AWS", "Infrastructure as Code", "CI/CD", "Containers"], bg: "var(--soft-mint)" },
  { n: "04", label: "Data", capability: "Data", items: ["Databases", "Analytics", "Data Engineering", "Pipelines"], bg: "var(--soft-apricot)" },
  { n: "05", label: "Security", capability: "Architecture", items: ["Access Control", "Infrastructure Hardening", "Monitoring"], bg: "var(--baby-pink)" },
  { n: "06", label: "Integration", capability: "Architecture", items: ["Webhooks", "Third-Party APIs", "Event Pipelines"], bg: "var(--soft-orange)" },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF7] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="dot-grid pointer-events-none absolute -right-6 -top-6 h-72 w-72" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="tech-label text-[#6B6A72]">Technology</div>
            <h1 className="mt-6 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[1.05] text-[#24232B] sm:text-6xl">
              The technology behind the systems.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6B6A72]">
              Not a resume of tools — as a technology startup, this is the actual engineering discipline behind how
              we build AI, software, cloud and data systems that hold up in production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <Reveal key={cat.n} delay={i * 80}>
                <div className="veda-tile tile-hover h-full p-7" style={{ backgroundColor: cat.bg }}>
                  <div className="flex items-start justify-between">
                    <span className="tech-label text-[#24232B]/60">{cat.n}</span>
                    <span className="chip bg-[#24232B] text-white">{cat.capability}</span>
                  </div>
                  <h2 className="mt-6 font-[family-name:var(--font-sora)] text-2xl font-extrabold text-[#24232B]">
                    {cat.label}
                  </h2>
                  <ul className="mt-5 space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-[#24232B]/75">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How the pillars connect */}
      <section className="bg-[#FFDD57] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-[#24232B]/60">How the pillars connect</div>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B] sm:text-4xl">
              Four disciplines, one shared architecture.
            </h2>
          </Reveal>

          <div className="relative mt-14">
            <Reveal delay={150} className="absolute left-[6%] right-[6%] top-9 hidden h-1 w-[88%] md:block">
              <svg viewBox="0 0 1000 4" className="h-1 w-full" preserveAspectRatio="none">
                <line x1="0" y1="2" x2="1000" y2="2" stroke="#24232B" strokeOpacity="0.15" strokeWidth="2" />
                <line x1="0" y1="2" x2="1000" y2="2" stroke="#24232B" strokeWidth="2" className="line-draw" />
              </svg>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
              {[
                { t: "API-first", d: "Every pillar exposes what it does through a documented API — nothing talks to another system through a shared database as a workaround." },
                { t: "One identity layer", d: "Access control lives in a single place, so a permission set in software matches the one enforced in data and infrastructure." },
                { t: "Event-driven data", d: "AI and analytics subscribe to the same event stream software emits — no separate export job quietly going stale." },
                { t: "Shared observability", d: "Logs, metrics and traces land in one place, so a problem in one pillar is visible from the others, not hidden in a different dashboard." },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 100}>
                  <div className="tile-hover flex flex-col items-center text-center">
                    <div className="veda-tile number-badge flex h-[64px] w-[64px] items-center justify-center font-[family-name:var(--font-sora)] text-lg font-extrabold">
                      0{i + 1}
                    </div>
                    <p className="mt-4 font-[family-name:var(--font-sora)] text-base font-extrabold text-[#24232B]">{item.t}</p>
                    <p className="mt-2 text-sm leading-6 text-[#24232B]/70">{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we choose technology */}
      <section className="bg-[#8FD4F2] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-[#24232B]/60">How we choose</div>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B] sm:text-4xl">
              Boring technology, on purpose.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { t: "Proven over novel", d: "We reach for a new framework only when the boring option genuinely can't do the job." },
              { t: "No lock-in without reason", d: "If a vendor decision is hard to reverse, we treat that as a cost, not a convenience." },
              { t: "Security isn't optional", d: "Access control and monitoring are part of the design, not a checklist added at the end." },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 90}>
                <div className="tile-hover veda-tile-soft h-full bg-white p-6">
                  <h3 className="font-[family-name:var(--font-sora)] text-lg font-extrabold text-[#24232B]">{item.t}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6B6A72]">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliberately avoid */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-[#6B6A72]">What we deliberately avoid</div>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B] sm:text-4xl">
              Discipline shows up as much in what we skip.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Unproven frameworks in a production critical path, just because they're new.",
              "AI features shipped without monitoring for drift or failure.",
              "Manual deploys for anything that runs more than once a week.",
              "Vendor lock-in that isn't backed by a real, considered reason.",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 80}>
                <div className="tile-hover veda-tile-soft flex h-full items-start gap-3 p-6">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#24232B]/30 text-xs text-[#24232B]/50">
                    ×
                  </span>
                  <p className="text-sm leading-6 text-[#6B6A72]">{item}</p>
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
                Have a stack you&apos;re already committed to?
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
