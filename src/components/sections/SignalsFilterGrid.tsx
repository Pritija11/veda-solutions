"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { insights } from "@/data/insights";
import Reveal from "@/components/ui/Reveal";

const categoryColor: Record<string, string> = {
  AI: "var(--powder-blue)",
  CLOUD: "var(--soft-mint)",
  SOFTWARE: "var(--butter-yellow)",
  DATA: "var(--soft-apricot)",
  SYSTEMS: "var(--baby-pink)",
};

const filters = ["ALL", "AI", "CLOUD", "SOFTWARE", "DATA", "SYSTEMS"];

export default function SignalsFilterGrid() {
  const [active, setActive] = useState("ALL");
  const filtered = active === "ALL" ? insights : insights.filter((i) => i.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`chip border-[1.5px] transition-colors ${
              active === f ? "border-[#24232B] bg-[#24232B] text-white" : "border-[#24232B]/20 bg-white text-[#24232B]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {filtered.map((article, i) => (
          <Reveal key={article.slug} delay={i * 70}>
            <Link
              href={`/insights/${article.slug}`}
              className="veda-tile tile-hover group flex h-full flex-col justify-between p-8"
              style={{ backgroundColor: categoryColor[article.category] }}
            >
              <div className="flex items-start justify-between">
                <span className="tech-label text-[#24232B]/60">
                  {article.category} / {article.number}
                </span>
              </div>
              <div className="mt-10">
                <h2 className="font-[family-name:var(--font-sora)] text-2xl font-extrabold leading-tight text-[#24232B]">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#24232B]/75">{article.excerpt}</p>
                <span className="arrow-shift mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#24232B]">
                  Read insight <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
