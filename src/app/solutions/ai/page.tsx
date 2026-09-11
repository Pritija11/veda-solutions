import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "AI & Intelligent Systems",
  "Veda Solutions Hub, a technology startup, builds intelligent workflows, automation, generative AI and AI-powered applications.",
  "/solutions/ai",
);

const capabilities = [
  { n: "01", t: "Generative AI", d: "LLM-powered features built around your product's actual data and workflows." },
  { n: "02", t: "Intelligent Automation", d: "Automating decisions and processes that used to need a person at every step." },
  { n: "03", t: "AI-Powered Applications", d: "Product features that reason over data instead of just displaying it." },
  { n: "04", t: "Predictive Models", d: "Forecasting demand, risk, or failure before it happens, not after." },
  { n: "05", t: "Recommendation Systems", d: "Surfacing the right item, action, or answer for each user." },
  { n: "06", t: "Decision Support", d: "Systems that help people make faster, better-informed calls." },
];

export default function AISolutionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#8FD4F2] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="max-w-2xl">
              <div className="chip bg-[#24232B] text-white">AI / 01</div>
              <h1 className="mt-6 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[1.05] text-[#24232B] sm:text-6xl">
                AI & Intelligent Systems
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#24232B]/75">
                Intelligent workflows, automation, generative AI and AI-powered applications — built into the
                product you already ship, not bolted on as a separate feature. It&apos;s the pillar most people
                mean when they think of a technology startup building AI.
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
                <Sparkles className="h-10 w-10 text-[#24232B]" />
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
              From automation to applications that reason.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.n} delay={i * 70}>
                <div className="veda-tile-soft tile-hover h-full p-6">
                  <span className="tech-label text-[#4E7BFF]">{c.n}</span>
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
              "You're duplicating the same manual decision across teams every day.",
              "Customers expect personalization you can't hand-build at this scale.",
              "Your team spends more time reviewing than actually deciding.",
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
            <Link href="/solutions/data" className="veda-tile tile-hover group flex flex-col justify-between gap-6 bg-[#FFAE72] p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <p className="tech-label text-[#24232B]/60">Related solution</p>
                <h2 className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-extrabold text-[#24232B] sm:text-3xl">Data & Digital Intelligence</h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#24232B]/75">Every AI system is only as good as the data underneath it.</p>
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
                Have an AI idea worth building?
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
