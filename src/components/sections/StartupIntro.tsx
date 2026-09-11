import Reveal from "@/components/ui/Reveal";

const labels = [
  { text: "AI", top: "6%", left: "4%", delay: 100 },
  { text: "CLOUD", top: "14%", right: "6%", delay: 180 },
  { text: "DATA", top: "68%", left: "2%", delay: 260 },
  { text: "SOFTWARE", top: "78%", right: "8%", delay: 340 },
  { text: "SYSTEMS", top: "42%", left: "42%", delay: 420 },
];

export default function StartupIntro() {
  return (
    <section className="relative overflow-hidden bg-[#FFF4DD] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="tech-label text-[#6B6A72]">01 / The Startup</div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal delay={80}>
            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[1.08] text-[#24232B] sm:text-5xl">
                We build digital systems, not just software.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-[#24232B]/70">
                Veda Solutions Hub combines AI, software, cloud and data into practical systems that businesses can
                actually run on — not a pile of disconnected tools bolted together after the fact.
              </p>
            </div>
          </Reveal>

          {/* Oversized VEDA typography with orbiting labels */}
          <div className="relative flex h-[280px] items-center justify-center sm:h-[320px]">
            <Reveal variant="assemble" delay={120}>
              <span className="pointer-events-none select-none font-[family-name:var(--font-sora)] text-[7rem] font-extrabold leading-none text-[#24232B]/[0.06] sm:text-[9rem]">
                VEDA
              </span>
            </Reveal>

            {labels.map((l) => (
              <Reveal
                key={l.text}
                variant="assemble"
                delay={l.delay}
                className="chip absolute border border-[#24232B]/15 bg-white text-[#24232B] transition-transform duration-200 hover:scale-110"
                style={{ top: l.top, left: l.left, right: l.right }}
              >
                {l.text}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
