import Reveal from "@/components/ui/Reveal";

function FinanceGlyph() {
  return (
    <div className="flex items-end gap-1.5">
      <span className="h-5 w-3 rounded-sm bg-[#24232B]" />
      <span className="h-8 w-3 rounded-sm bg-[#24232B]" />
      <span className="h-4 w-3 rounded-sm bg-[#24232B]" />
      <span className="h-10 w-3 rounded-sm bg-[#24232B]" />
    </div>
  );
}

function RetailGlyph() {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} className="h-3 w-3 rounded-[3px] bg-[#24232B]" />
      ))}
    </div>
  );
}

function HealthcareGlyph() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <span className="absolute h-10 w-3 rounded-sm bg-[#24232B]" />
      <span className="absolute h-3 w-10 rounded-sm bg-[#24232B]" />
    </div>
  );
}

function EducationGlyph() {
  return (
    <div className="flex gap-1.5">
      <span className="h-11 w-7 rounded-sm border-2 border-[#24232B]" />
      <span className="h-11 w-7 rounded-sm bg-[#24232B]" />
    </div>
  );
}

function LogisticsGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10">
      <path d="M4 32 L20 8 L36 32" fill="none" stroke="#24232B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="8" r="3" fill="#24232B" />
    </svg>
  );
}

function ProfessionalGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10">
      <circle cx="10" cy="10" r="4" fill="#24232B" />
      <circle cx="30" cy="10" r="4" fill="#24232B" />
      <circle cx="20" cy="30" r="4" fill="#24232B" />
      <line x1="10" y1="10" x2="30" y2="10" stroke="#24232B" strokeWidth="2" />
      <line x1="10" y1="10" x2="20" y2="30" stroke="#24232B" strokeWidth="2" />
      <line x1="30" y1="10" x2="20" y2="30" stroke="#24232B" strokeWidth="2" />
    </svg>
  );
}

const industries = [
  { label: "Financial Services", glyph: FinanceGlyph, bg: "var(--powder-blue)" },
  { label: "Retail", glyph: RetailGlyph, bg: "var(--soft-mint)" },
  { label: "Healthcare", glyph: HealthcareGlyph, bg: "var(--baby-pink)" },
  { label: "Education", glyph: EducationGlyph, bg: "var(--butter-yellow)" },
  { label: "Logistics", glyph: LogisticsGlyph, bg: "var(--soft-apricot)" },
  { label: "Professional Services", glyph: ProfessionalGlyph, bg: "var(--soft-orange)" },
];

export default function Industries() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="tech-label text-[#6B6A72]">06 / Where We Build</div>
          <h2 className="mt-5 max-w-xl font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[1.08] text-[#24232B] sm:text-5xl">
            Technology should adapt to the business.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Glyph = industry.glyph;
            return (
              <Reveal key={industry.label} delay={i * 80}>
                <div className="veda-tile tile-hover flex h-full flex-col justify-between gap-8 p-7" style={{ backgroundColor: industry.bg }}>
                  <div className="tile-inner-shift flex h-10 items-center">
                    <Glyph />
                  </div>
                  <h3 className="font-[family-name:var(--font-sora)] text-xl font-extrabold text-[#24232B]">
                    {industry.label}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
