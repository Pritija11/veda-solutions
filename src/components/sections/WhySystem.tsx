import Reveal from "@/components/ui/Reveal";

const oldWay = [
  "A different vendor for AI, cloud, software and data",
  "Handoffs between teams that don't talk to each other",
  "Nobody accountable when something breaks between systems",
  "Integration treated as an afterthought",
];

const vedaWay = [
  "One team across AI, software, cloud and data",
  "A single system designed to work together from day one",
  "One point of accountability for how it all runs",
  "Integration built in from the first design decision",
];

export default function WhySystem() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="tech-label text-[#6B6A72]">04 / Why A System</div>
          <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[1.08] text-[#24232B] sm:text-5xl">
            A system beats a pile of vendors.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal variant="assemble-left">
            <div className="veda-tile-soft h-full border-dashed p-8">
              <span className="tech-label text-[#6B6A72]">The old way</span>
              <ul className="mt-6 space-y-4">
                {oldWay.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#6B6A72]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#24232B]/30 text-xs text-[#24232B]/50">
                      ×
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="assemble-right" delay={100}>
            <div className="veda-tile h-full bg-[#8CE8B8] p-8">
              <span className="chip bg-[#24232B] text-white">The Veda way</span>
              <ul className="mt-6 space-y-4">
                {vedaWay.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium leading-6 text-[#24232B]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#24232B] text-xs text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
