import Reveal from "@/components/ui/Reveal";

const stages = [
  { n: "01", label: "Discover" },
  { n: "02", label: "Design" },
  { n: "03", label: "Build" },
  { n: "04", label: "Connect" },
  { n: "05", label: "Evolve" },
];

const tags = ["AI", "SOFTWARE", "CLOUD", "DATA", "SECURITY"];

export default function TheSystem() {
  return (
    <section className="bg-[#8FD4F2] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="tech-label text-[#24232B]/60">03 / The Veda System</div>
          <h2 className="mt-5 max-w-xl font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[1.08] text-[#24232B] sm:text-5xl">
            Everything connects.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <Reveal delay={200} className="absolute left-[8%] right-[8%] top-9 hidden h-1 w-[84%] md:block">
            <svg viewBox="0 0 1000 4" className="h-1 w-full" preserveAspectRatio="none">
              <line x1="0" y1="2" x2="1000" y2="2" stroke="#24232B" strokeOpacity="0.15" strokeWidth="2" />
              <line x1="0" y1="2" x2="1000" y2="2" stroke="#FF7043" strokeWidth="2" className="line-draw" />
            </svg>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-5">
            {stages.map((stage, i) => (
              <Reveal key={stage.n} delay={i * 110}>
                <div className="tile-hover flex flex-col items-center text-center">
                  <div className="veda-tile number-badge flex h-[72px] w-[72px] items-center justify-center font-[family-name:var(--font-sora)] text-xl font-extrabold">
                    {stage.n}
                  </div>
                  <p className="mt-4 font-[family-name:var(--font-sora)] text-lg font-extrabold text-[#24232B]">
                    {stage.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={600}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <span key={tag} className="chip border border-[#24232B]/20 bg-white/70 text-[#24232B]">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
