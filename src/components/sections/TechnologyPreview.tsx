import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const stacks = [
  { n: "01", label: "AI", items: ["Machine Learning", "Generative AI", "Automation"] },
  { n: "02", label: "Cloud", items: ["AWS", "Infrastructure", "DevOps"] },
  { n: "03", label: "Software", items: ["React", "Next.js", "Node.js", "APIs"] },
  { n: "04", label: "Data", items: ["Databases", "Analytics", "Data Engineering"] },
];

export default function TechnologyPreview() {
  return (
    <section className="bg-[#8CE8B8] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <div className="tech-label text-[#24232B]/60">05 / Technology</div>
              <h2 className="mt-5 font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[1.08] text-[#24232B] sm:text-5xl">
                Built with the tools that move the web forward.
              </h2>
            </div>
            <Link href="/technology" className="inline-flex items-center gap-2 text-sm font-bold text-[#24232B]">
              Full stack
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stacks.map((stack, i) => (
            <Reveal key={stack.n} delay={i * 90}>
              <div className="veda-tile-soft tile-hover h-full p-6">
                <span className="tech-label text-[#24232B]/50">Stack / {stack.n}</span>
                <h3 className="mt-4 font-[family-name:var(--font-sora)] text-xl font-extrabold text-[#24232B]">
                  {stack.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-sm text-[#24232B]/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
