import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "About",
  "Veda Solutions Hub is a technology startup building intelligent digital systems across AI, software, cloud and data.",
  "/about",
);

const beliefs = [
  { n: "01", t: "Useful over unnecessary", d: "Technology should solve a real problem, not add complexity for its own sake.", bg: "var(--powder-blue)" },
  { n: "02", t: "Systems over silos", d: "AI, software, cloud and data work better as one connected system.", bg: "var(--soft-mint)" },
  { n: "03", t: "Built to evolve", d: "Every system we build is designed to grow with the business behind it.", bg: "var(--butter-yellow)" },
];

const building = ["AI", "SOFTWARE", "CLOUD", "DATA"];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF7] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="dot-grid pointer-events-none absolute -right-6 -top-6 h-72 w-72" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="tech-label text-[#6B6A72]">About Veda</div>
            <h1 className="mt-6 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[1.05] text-[#24232B] sm:text-6xl">
              We believe technology should make ambitious businesses more capable.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="tech-label text-[#6B6A72]">Our Story</div>
              <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B]">
                Technology works best when it&apos;s connected.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-5 text-base leading-8 text-[#6B6A72]">
                <p>
                  Veda Solutions Hub is a technology startup focused on building intelligent digital systems that
                  combine different areas of technology rather than treating them as isolated disciplines.
                </p>
                <p>
                  AI can make software more intelligent. Cloud infrastructure can make systems more scalable. Data
                  can make decisions more informed. Software engineering brings those capabilities together into
                  products people can actually use.
                </p>
                <p>
                  Cybersecurity and digital consulting sit underneath this work as supporting disciplines — not
                  separate products, but the practices that keep every system we build sound.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-[#FFF4DD] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-[#6B6A72]">What We Believe</div>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B] sm:text-4xl">
              Useful technology over unnecessary complexity.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {beliefs.map((b, i) => (
              <Reveal key={b.n} delay={i * 100}>
                <div className="veda-tile tile-hover h-full p-6" style={{ backgroundColor: b.bg }}>
                  <span className="tech-label text-[#24232B]/60">{b.n}</span>
                  <h3 className="mt-5 font-[family-name:var(--font-sora)] text-lg font-extrabold text-[#24232B]">{b.t}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#24232B]/70">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal>
              <div className="tech-label text-[#6B6A72]">Our Approach</div>
              <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B]">
                Engineering + intelligence + infrastructure.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl text-base leading-8 text-[#6B6A72]">
                We approach every project the same way: understand the problem, design the right combination of
                AI, software, cloud and data, then engineer it into a system that stays reliable once it&apos;s in
                production — not just a demo that worked once.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How we got here */}
      <section className="bg-[#FFF4DD] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-[#6B6A72]">How we got here</div>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B] sm:text-4xl">
              Foundation first, then focus, then scale.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { label: "Foundation", d: "Veda Solutions Hub started with a simple observation: AI, software, cloud and data were being sold as separate products when businesses actually needed them as one system." },
              { label: "Focus", d: "We chose four pillars and said no to becoming a generic IT agency — depth over an unlimited service list." },
              { label: "What's next", d: "Every engagement sharpens how we connect these four disciplines into systems that hold up in production." },
            ].map((stage, i) => (
              <Reveal key={stage.label} delay={i * 100}>
                <div className="tile-hover veda-tile-soft h-full bg-white p-6">
                  <span className="tech-label text-[#4E7BFF]">0{i + 1}</span>
                  <h3 className="mt-4 font-[family-name:var(--font-sora)] text-lg font-extrabold text-[#24232B]">{stage.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6B6A72]">{stage.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="relative overflow-hidden bg-[#FFC58F] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <div className="tech-label text-[#24232B]/60">What We&apos;re Building</div>
                <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B] sm:text-4xl">
                  Veda Solutions Hub, end to end.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-7 text-[#24232B]/75">
                  AI, software, cloud and data systems — built as one connected offering rather than four separate
                  ones.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative flex h-[220px] items-center justify-center">
                <span className="pointer-events-none select-none font-[family-name:var(--font-sora)] text-[5.5rem] font-extrabold leading-none text-[#24232B]/10 sm:text-[6.5rem]">
                  VEDA / 2026
                </span>
                <div className="absolute inset-0 grid grid-cols-4 gap-3 p-2">
                  {building.map((label, i) => (
                    <Reveal
                      key={label}
                      variant="assemble"
                      delay={200 + i * 90}
                      className="veda-tile-soft flex items-center justify-center bg-white/80 px-2 py-2 text-center"
                      style={{ alignSelf: i % 2 === 0 ? "start" : "end" }}
                    >
                      <span className="tech-label text-[#24232B]">{label}</span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Startup Vision */}
      <section className="bg-[#24232B] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="tech-label text-white/50">Startup Vision</div>
              <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl">
                Make meaningful technology more accessible and useful.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                We envision Veda Solutions Hub growing into a technology company known for connecting AI, software,
                cloud and data into systems that businesses can actually depend on — not just impressive demos.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="veda-tile flex flex-col gap-8 bg-[#8FD4F2] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
              <h2 className="max-w-xl font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-tight text-[#24232B] sm:text-4xl">
                Have an idea worth building?
              </h2>
              <Link href="/contact" className="tile-hover inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#24232B] px-7 py-3.5 text-sm font-bold text-white">
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
