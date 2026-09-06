import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { insights } from "@/data/insights";

export default function InsightsPreview() {
  const featuredInsights = insights.slice(0, 3);

  return (
    <section className="bg-[#07111F] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              Insights
            </p>

            <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
              Ideas shaping the digital landscape.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
              Explore perspectives on AI, cloud, software, data, and the
              technologies shaping how modern organizations work.
            </p>
          </div>

          <Link
            href="/insights"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-teal-400 transition-colors hover:text-teal-300"
          >
            View all insights
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Insights */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {featuredInsights.map((insight, index) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-[#0F1F32]"
            >
              {/* Top line */}
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-teal-400/20 bg-teal-500/5 px-3 py-1.5 text-xs font-medium text-teal-400">
                  {insight.category}
                </span>

                <span className="text-xs font-semibold tracking-widest text-slate-600">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-semibold leading-8 text-slate-100">
                {insight.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {insight.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors group-hover:text-teal-400">
                Read insight
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-teal-400 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}