import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, ArrowUpRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Cloud & DevOps",
  "Veda Solutions Hub, a technology startup, builds cloud infrastructure, deployment, scalability and reliable digital operations.",
  "/solutions/cloud",
);

const capabilities = [
  { n: "01", t: "Cloud Architecture", d: "Infrastructure designed for the scale you're actually heading toward." },
  { n: "02", t: "Infrastructure as Code", d: "Environments defined in code, not clicked together by hand." },
  { n: "03", t: "CI/CD Pipelines", d: "Shipping changes safely and often, not in a quarterly release event." },
  { n: "04", t: "Container Orchestration", d: "Services that scale and recover without a person on call at 2am." },
  { n: "05", t: "Monitoring & Observability", d: "Knowing something broke before your customers tell you." },
  { n: "06", t: "Cost Optimization", d: "Infrastructure that scales with usage, not with waste." },
];

export default function CloudSolutionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#8CE8B8] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="max-w-2xl">
              <div className="chip bg-[#24232B] text-white">Cloud / 02</div>
              <h1 className="mt-6 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[1.05] text-[#24232B] sm:text-6xl">
                Cloud & DevOps
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#24232B]/75">
                Cloud infrastructure, deployment, scalability and reliable digital operations — the foundation
                everything else in the system runs on. As a technology startup, we build this the same way we&apos;d
                want it built for our own systems.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="tile-hover inline-flex items-center gap-2 rounded-xl bg-[#24232B] px-7 py-3.5 text-sm font-bold text-white">
                  Talk to Veda
                  <span className="arrow-shift">→</span>
                </Link>
                <Link href="/technology" className="tile-hover inline-flex items-center gap-2 rounded-xl border-[1.5px] border-[#24232B] bg-white px-7 py-3.5 text-sm font-bold text-[#24232B]">
                  See the tech stack
                </Link>
              </div>
            </Reveal>

            <Reveal variant="assemble" delay={150}>
              <div className="veda-tile flex h-56 w-56 flex-col items-center justify-center gap-3 bg-white sm:mx-auto">
                <Cloud className="h-10 w-10 text-[#24232B]" />
                <span className="tech-label text-[#24232B]/60"><span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#28AFA3]" />System / Active</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-[#6B6A72]">What it covers</div>
            <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B] sm:text-4xl">
              Infrastructure that doesn&apos;t page you at 2am.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.n} delay={i * 70}>
                <div className="veda-tile-soft tile-hover h-full p-6">
                  <span className="tech-label text-[#28AFA3]">{c.n}</span>
                  <h3 className="mt-5 font-[family-name:var(--font-sora)] text-lg font-extrabold text-[#24232B]">{c.t}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6B6A72]">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signals */}
      <section className="bg-[#24232B] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-white/50">Signs you need this</div>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl">
              This is usually the right time to talk to us.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Deploys are risky enough that nobody wants to be the one who pushes them.",
              "Infrastructure cost is growing faster than actual usage.",
              "An outage takes longer to diagnose than it should.",
            ].map((signal, i) => (
              <Reveal key={signal} delay={i * 90}>
                <div className="tile-hover h-full rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="text-sm leading-6 text-white/80">{signal}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#FFFDF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Link href="/solutions/software" className="veda-tile tile-hover group flex flex-col justify-between gap-6 bg-[#FFDD57] p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <p className="tech-label text-[#24232B]/60">Related solution</p>
                <h2 className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-extrabold text-[#24232B] sm:text-3xl">Software Engineering</h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#24232B]/75">Infrastructure only matters once there&apos;s a product running on it.</p>
              </div>
              <span className="arrow-shift inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-[#24232B] px-6 py-3 text-sm font-bold text-white">
                Explore <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="veda-tile bg-[#24232B] px-8 py-14 text-center sm:px-16 sm:py-16">
              <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Have an infrastructure problem worth solving?
              </h2>
              <Link href="/contact" className="tile-hover mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FF7043] px-7 py-3.5 text-sm font-bold text-white">
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
