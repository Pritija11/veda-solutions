import Reveal from "@/components/ui/Reveal";

const labels = ["AI", "SOFTWARE", "CLOUD", "DATA", "BUILD"];

export default function AboutIdentity() {
  return (
    <section className="relative overflow-hidden bg-[#FFC58F] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <div className="tech-label text-[#24232B]/60">09 / Veda Solutions Hub</div>
              <h2 className="mt-5 font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[1.08] text-[#24232B] sm:text-5xl">
                A technology startup building for what&apos;s next.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-[#24232B]/75">
                Veda Solutions Hub is a technology startup building intelligent digital systems across AI, software,
                cloud and data. We&apos;re not chasing an unlimited list of IT services — we bring these four
                disciplines together as one connected system for every business we work with.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative flex h-[260px] items-center justify-center">
              <span className="pointer-events-none select-none font-[family-name:var(--font-sora)] text-[6rem] font-extrabold leading-none text-[#24232B]/10 sm:text-[7.5rem]">
                VEDA
              </span>
              <span className="tech-label absolute bottom-2 right-2 text-[#24232B]/50">2026</span>

              <div className="absolute inset-0 grid grid-cols-3 gap-3 p-2 sm:grid-cols-5">
                {labels.map((label, i) => (
                  <Reveal
                    key={label}
                    variant="assemble"
                    delay={200 + i * 90}
                    className="veda-tile-soft flex items-center justify-center bg-white/80 px-2 py-2 text-center"
                    style={{ gridColumn: i + 1, alignSelf: i % 2 === 0 ? "start" : "end" }}
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
  );
}
