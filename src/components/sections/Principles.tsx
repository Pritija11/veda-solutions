import Reveal from "@/components/ui/Reveal";

const principles = [
  { n: "01", label: "Useful", d: "Technology should solve a real problem." },
  { n: "02", label: "Adaptable", d: "Systems should evolve with the business." },
  { n: "03", label: "Intelligent", d: "Automation and AI should create meaningful value." },
];

export default function Principles() {
  return (
    <section className="bg-[#F8C9D8] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="tech-label text-[#24232B]/60">07 / How We Think</div>
          <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[1.08] text-[#24232B] sm:text-5xl">
            Build useful. Build adaptable. Build intelligently.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6 sm:flex-row">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 110} className="flex-1" style={{ marginTop: i % 2 === 1 ? "1.5rem" : "0" }}>
              <div className="veda-tile tile-hover relative h-full bg-white p-8">
                <span className="chip absolute -top-4 left-7 bg-[#FF7043] text-white">{p.n}</span>
                <p className="font-[family-name:var(--font-sora)] text-3xl font-extrabold text-[#24232B] sm:text-4xl">
                  {p.label}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#24232B]/70">{p.d}</p>
                <span className="arrow-shift mt-6 inline-block text-lg text-[#FF7043]">→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
