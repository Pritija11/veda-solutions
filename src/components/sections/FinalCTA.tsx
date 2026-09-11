import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-[#FFFDF7] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="veda-tile relative overflow-hidden bg-[#24232B] px-8 py-16 sm:px-16 sm:py-20">
            {/* Minimal system diagram — flat modules, no glow/gradient */}
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <Reveal variant="assemble-rotate" delay={80} className="absolute right-[12%] top-10 sm:right-[18%]" style={{ ["--tile-rotate" as string]: "3deg" }}>
                <span className="block h-14 w-14 rounded-2xl border-[1.5px] border-white/15 bg-[#FF7043]/90" />
              </Reveal>
              <Reveal variant="assemble-rotate" delay={220} className="absolute right-[6%] top-28 sm:right-[10%]">
                <span className="pulse-dot block h-9 w-9 rounded-full border-[1.5px] border-white/15 bg-[#28AFA3]/90" />
              </Reveal>
              <Reveal variant="assemble-rotate" delay={360} className="absolute bottom-14 right-[20%] sm:right-[26%]" style={{ ["--tile-rotate" as string]: "-2deg" }}>
                <span className="block h-10 w-10 rounded-xl border-[1.5px] border-white/15 bg-[#4E7BFF]/90" />
              </Reveal>
            </div>

            <div className="relative">
              <h2 className="max-w-2xl font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[1.08] text-white sm:text-6xl">
                Have something worth building?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">Let&apos;s turn the problem into a system.</p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="tile-hover inline-flex items-center gap-2 rounded-xl bg-[#FF7043] px-8 py-4 text-base font-bold text-white"
                >
                  Talk to Veda
                  <span className="arrow-shift">→</span>
                </Link>
                <span className="tech-label text-white/40">AI / SOFTWARE / CLOUD / DATA</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
