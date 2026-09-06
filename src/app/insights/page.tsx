import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

import { insights } from "@/data/insights";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Insights",
  "Insights from Veda Solutions Hub, a technology startup exploring AI, cloud, DevOps, software, data, automation, and the technologies shaping modern digital systems.",
  "/insights",
);

export default function InsightsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07111F] pt-36 pb-24 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-24 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-500/5 px-4 py-2">
              <BookOpen className="h-4 w-4 text-teal-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
                Insights
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              Ideas shaping the
              <span className="block text-teal-400">
                digital landscape.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Explore perspectives on AI, cloud, software, data, automation,
              and the technologies changing how modern organizations build and
              operate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-12 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
                Perspectives
              </p>

              <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
                Thinking beyond the technology itself.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              Technology is most useful when it is connected to a real
              problem. Our insights explore that connection.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {insights.map((insight, index) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-[#1E334A] bg-[#07111F] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-[#0F1F32] sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="rounded-full border border-teal-400/20 bg-teal-500/5 px-3 py-1.5 text-xs font-medium text-teal-400">
                    {insight.category}
                  </span>

                  <span className="text-xs font-semibold tracking-widest text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-9 max-w-xl text-2xl font-semibold leading-9 tracking-tight text-slate-100">
                  {insight.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  {insight.excerpt}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors group-hover:text-teal-400">
                  Read insight
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-teal-400 transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111F] py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
            Keep exploring
          </p>

          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
            Looking for a practical technology direction?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Explore how our technology capabilities connect across AI, cloud,
            software, data, cybersecurity, and digital consulting.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-7 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-200 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
            >
              Explore solutions
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1E334A] bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-teal-400/30 hover:bg-teal-500/5 hover:text-teal-400"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}