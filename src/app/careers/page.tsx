import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "Careers",
  "Careers at Veda Solutions Hub, a technology startup building intelligent digital systems across AI, software, cloud and data.",
  "/careers",
);

const areas = [
  { n: "01", label: "Software Engineering", d: "Build the web applications, APIs and platforms behind every system.", bg: "var(--butter-yellow)" },
  { n: "02", label: "AI & Intelligent Systems", d: "Turn AI from a demo into a feature that actually ships.", bg: "var(--powder-blue)" },
  { n: "03", label: "Cloud & DevOps", d: "Keep infrastructure reliable as systems and traffic grow.", bg: "var(--soft-mint)" },
  { n: "04", label: "Data & Analytics", d: "Build the pipelines and foundations everything else depends on.", bg: "var(--soft-apricot)" },
];

const culture = ["Curious", "Practical", "Ambitious"];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF7] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="dot-grid pointer-events-none absolute -right-6 -top-6 h-72 w-72" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="tech-label text-[#6B6A72]">Careers</div>
            <h1 className="mt-6 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[1.05] text-[#24232B] sm:text-6xl">
              Build technology that matters.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6B6A72]">
              We&apos;re a technology startup building Veda Solutions Hub around people who enjoy solving problems,
              learning new technologies, and creating systems that connect AI, software, cloud and data.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-[#6B6A72]">Where you could contribute</div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {areas.map((area, i) => (
              <Reveal key={area.n} delay={i * 90}>
                <div className="veda-tile tile-hover h-full p-7" style={{ backgroundColor: area.bg }}>
                  <span className="tech-label text-[#24232B]/60">Engineering / {area.n}</span>
                  <h2 className="mt-5 font-[family-name:var(--font-sora)] text-xl font-extrabold text-[#24232B]">{area.label}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#24232B]/70">{area.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="veda-tile-soft mt-8 p-6">
              <p className="text-sm leading-6 text-[#6B6A72]">
                We don&apos;t have open roles listed yet — as Veda Solutions Hub grows, specific openings will be
                posted here. If one of these areas sounds like you, reach out anyway.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-[#F8C9D8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="tech-label text-[#24232B]/60">How we think</div>
            <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-[1.1] text-[#24232B] sm:text-4xl">
              Curious. Practical. Ambitious.
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-4">
            {culture.map((word, i) => (
              <Reveal key={word} delay={i * 90}>
                <span className="veda-tile tile-hover inline-block bg-white px-7 py-4 font-[family-name:var(--font-sora)] text-xl font-extrabold text-[#24232B]">
                  {word}
                </span>
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
                Interested in building with us?
              </h2>
              <Link href="/contact" className="tile-hover inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#FF7043] px-7 py-3.5 text-sm font-bold text-white">
                Get in touch
                <span className="arrow-shift">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
