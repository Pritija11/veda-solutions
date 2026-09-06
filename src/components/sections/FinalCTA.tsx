import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B1728] py-24 sm:py-28">
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="absolute left-[10%] top-1/4 h-32 w-32 rounded-full border border-teal-400/10" />
        <div className="absolute bottom-1/4 right-[10%] h-40 w-40 rounded-full border border-indigo-400/10" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Label */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-500/5 px-4 py-2">
          <Sparkles className="h-4 w-4 text-teal-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-400">
            Let&apos;s build something meaningful
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
          Have a digital challenge
          <span className="block text-teal-400">worth solving?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          Whether you are exploring AI, modernizing infrastructure, building
          software, or looking for a better digital direction, let&apos;s
          start with the problem.
        </p>

        {/* CTA */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-7 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-200 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/solutions"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1E334A] bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-teal-400/30 hover:bg-teal-500/5 hover:text-teal-400"
          >
            Explore our solutions
          </Link>
        </div>
      </div>
    </section>
  );
}