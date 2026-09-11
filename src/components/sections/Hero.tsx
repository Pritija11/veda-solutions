import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const tiles = [
  { id: "ai", label: "AI", n: "01", bg: "#8FD4F2", top: "0%", left: "2%", rotate: "-3deg", delay: 120 },
  { id: "cloud", label: "CLOUD", n: "02", bg: "#8CE8B8", top: "4%", left: "58%", rotate: "2deg", delay: 220 },
  { id: "software", label: "SOFTWARE", n: "03", bg: "#FFDD57", top: "56%", left: "0%", rotate: "2deg", delay: 320 },
  { id: "data", label: "DATA", n: "04", bg: "#FFAE72", top: "60%", left: "56%", rotate: "-2deg", delay: 420 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF7] pb-24 pt-[150px] sm:pt-[168px]">
      <div className="dot-grid pointer-events-none absolute -right-6 -top-6 h-72 w-72" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="max-w-2xl">
            <Reveal variant="assemble-left">
              <div className="tech-label text-[#6B6A72]">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#FF7043]" />
                Veda Solutions Hub / Technology Startup
              </div>
            </Reveal>

            <Reveal variant="assemble-left" delay={80}>
              <h1 className="mt-6 font-[family-name:var(--font-sora)] text-6xl font-extrabold leading-[1.02] text-[#24232B] sm:text-7xl">
                Technology, made for what&apos;s next.
              </h1>
            </Reveal>

            <Reveal variant="assemble-left" delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#6B6A72]">
                Veda Solutions Hub builds intelligent digital systems across AI, software, cloud and data — helping
                businesses build, operate and evolve.
              </p>
            </Reveal>

            <Reveal variant="assemble-left" delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/solutions"
                  className="tile-hover inline-flex items-center gap-2 rounded-xl bg-[#24232B] px-7 py-3.5 text-sm font-bold text-white"
                >
                  Explore solutions
                  <span className="arrow-shift">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="tile-hover inline-flex items-center gap-2 rounded-xl border-[1.5px] border-[#24232B] bg-white px-7 py-3.5 text-sm font-bold text-[#24232B]"
                >
                  Talk to Veda
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Modular tile composition */}
          <div className="relative mx-auto h-[420px] w-full max-w-[440px] sm:h-[460px]">
            {/* Connector lines */}
            <Reveal variant="assemble" delay={500} className="pointer-events-none absolute inset-0 h-full w-full">
              <svg viewBox="0 0 440 460" className="h-full w-full overflow-visible">
                <line x1="220" y1="230" x2="95" y2="90" stroke="#24232B" strokeOpacity="0.3" strokeWidth="1.5" className="line-draw" />
                <line x1="220" y1="230" x2="345" y2="110" stroke="#24232B" strokeOpacity="0.3" strokeWidth="1.5" className="line-draw" />
                <line x1="220" y1="230" x2="95" y2="345" stroke="#24232B" strokeOpacity="0.3" strokeWidth="1.5" className="line-draw" />
                <line x1="220" y1="230" x2="345" y2="365" stroke="#24232B" strokeOpacity="0.3" strokeWidth="1.5" className="line-draw" />
              </svg>
            </Reveal>

            {tiles.map((t) => (
              <Reveal
                key={t.id}
                variant="assemble-rotate"
                delay={t.delay}
                className="veda-tile tile-hover absolute flex h-[132px] w-[150px] flex-col justify-between p-4"
                style={{ top: t.top, left: t.left, backgroundColor: t.bg, ["--tile-rotate" as string]: t.rotate }}
              >
                <div className="flex items-start justify-between">
                  <span className="tech-label text-[#24232B]/70">{t.n}</span>
                  <span className="arrow-shift text-sm">↗</span>
                </div>
                <p className="font-[family-name:var(--font-sora)] text-xl font-extrabold text-[#24232B]">{t.label}</p>
              </Reveal>
            ))}

            {/* Central hub tile */}
            <Reveal
              variant="assemble"
              delay={560}
              className="veda-tile tile-hover absolute flex h-[112px] w-[112px] flex-col items-center justify-center gap-1 bg-[#24232B]"
              style={{ top: "38%", left: "38%" }}
            >
              <span className="tech-label text-white/60">System</span>
              <span className="font-[family-name:var(--font-sora)] text-2xl font-extrabold text-white">01</span>
            </Reveal>

            {/* Small orange badge */}
            <Reveal
              variant="assemble"
              delay={680}
              className="chip absolute bg-[#FF7043] text-white"
              style={{ top: "-4px", right: "6%" }}
            >
              System / 01
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
