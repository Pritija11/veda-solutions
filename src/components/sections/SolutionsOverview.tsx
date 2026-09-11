import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { solutions } from "@/data/solutions";

function MiniVisual({ slug }: { slug: string }) {
  if (slug === "ai") {
    return (
      <div className="flex items-center gap-2">
        <span className="h-8 w-8 rounded-full border-[1.5px] border-[#24232B] bg-white" />
        <span className="h-5 w-5 rounded-full bg-[#24232B]" />
        <span className="h-8 w-8 rounded-full border-[1.5px] border-[#24232B] bg-white" />
      </div>
    );
  }
  if (slug === "cloud") {
    return (
      <div className="flex flex-col gap-1.5">
        <span className="h-3 w-20 rounded-full border-[1.5px] border-[#24232B] bg-white" />
        <span className="h-3 w-14 rounded-full border-[1.5px] border-[#24232B] bg-white" />
        <span className="h-3 w-24 rounded-full border-[1.5px] border-[#24232B] bg-white" />
      </div>
    );
  }
  if (slug === "software") {
    return (
      <div className="w-28 rounded-lg border-[1.5px] border-[#24232B] bg-white">
        <div className="flex items-center gap-1 border-b-[1.5px] border-[#24232B] px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#24232B]/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#24232B]/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#24232B]/40" />
        </div>
        <div className="space-y-1 p-2">
          <span className="block h-1.5 w-full rounded-full bg-[#24232B]/15" />
          <span className="block h-1.5 w-3/4 rounded-full bg-[#24232B]/15" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-end gap-1.5">
      <span className="h-6 w-3 rounded-sm border-[1.5px] border-[#24232B] bg-white" />
      <span className="h-10 w-3 rounded-sm border-[1.5px] border-[#24232B] bg-white" />
      <span className="h-4 w-3 rounded-sm border-[1.5px] border-[#24232B] bg-white" />
      <span className="h-8 w-3 rounded-sm border-[1.5px] border-[#24232B] bg-white" />
    </div>
  );
}

export default function SolutionsOverview() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="tech-label text-[#6B6A72]">02 / Solutions</div>
          <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[1.08] text-[#24232B] sm:text-5xl">
            Four technologies. One connected system.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <Reveal key={solution.slug} delay={i * 90}>
                <Link
                  href={solution.href}
                  className="veda-tile tile-hover group flex h-full flex-col justify-between p-7 sm:p-8"
                  style={{ backgroundColor: `var(--${solution.pastel})` }}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border-[1.5px] border-[#24232B] bg-white">
                      <Icon className="h-5 w-5 text-[#24232B]" />
                    </span>
                    <span className="tech-label text-[#24232B]/60">
                      {solution.tag} / {solution.number}
                    </span>
                  </div>

                  <div className="tile-inner-shift my-8 flex min-h-16 items-center">
                    <MiniVisual slug={solution.slug} />
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-sora)] text-2xl font-extrabold text-[#24232B]">
                      {solution.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#24232B]/70">{solution.shortDescription}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#24232B]">
                      Explore
                      <ArrowUpRight className="arrow-shift h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
