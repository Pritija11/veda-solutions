import Link from "next/link";
import { ArrowRight, Brain, Cloud, Database, Code2, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07111F] pt-32">
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-16 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Content */}
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-500/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
              Technology Startup
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
            Building smarter
            <span className="block text-teal-400">
              solutions
            </span>
            for a digital world.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Veda Solutions Hub is a technology startup combining AI, cloud,
            software, data, and automation to build practical digital
            solutions for a changing world.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-200 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
            >
              Explore solutions
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1E334A] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-teal-400/40 hover:bg-teal-500/5 hover:text-teal-400"
            >
              Talk to us
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              AI-powered solutions
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Cloud & DevOps
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Digital engineering
            </div>
          </div>
        </div>

        {/* Hub Visual */}
        <div className="relative mx-auto flex h-[480px] w-full max-w-[520px] items-center justify-center">
          {/* Outer rings */}
          <div className="absolute h-[380px] w-[380px] rounded-full border border-teal-400/10" />
          <div className="absolute h-[290px] w-[290px] rounded-full border border-indigo-400/10" />
          <div className="absolute h-[200px] w-[200px] rounded-full border border-teal-400/10" />

          {/* Connection lines */}
          <div className="absolute h-px w-[340px] rotate-[25deg] bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
          <div className="absolute h-px w-[340px] -rotate-[25deg] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
          <div className="absolute h-[300px] w-px rotate-[35deg] bg-gradient-to-b from-transparent via-teal-400/20 to-transparent" />
          <div className="absolute h-[300px] w-px -rotate-[35deg] bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent" />

          {/* Central hub */}
          <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-teal-400/40 bg-[#0F1F32] shadow-2xl shadow-teal-500/10">
            <div className="absolute inset-3 rounded-full border border-teal-400/20" />

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10">
              <div className="h-5 w-5 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50" />
            </div>
          </div>

          {/* AI */}
          <div className="absolute left-2 top-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-400/20 bg-[#0F1F32] shadow-xl">
            <Brain className="h-7 w-7 text-teal-400" />
          </div>

          {/* Cloud */}
          <div className="absolute right-4 top-16 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/20 bg-[#0F1F32] shadow-xl">
            <Cloud className="h-7 w-7 text-indigo-400" />
          </div>

          {/* Data */}
          <div className="absolute bottom-16 left-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/20 bg-[#0F1F32] shadow-xl">
            <Database className="h-7 w-7 text-indigo-400" />
          </div>

          {/* Software */}
          <div className="absolute bottom-12 right-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-400/20 bg-[#0F1F32] shadow-xl">
            <Code2 className="h-7 w-7 text-teal-400" />
          </div>

          {/* Security */}
          <div className="absolute bottom-1/2 right-[-10px] flex h-14 w-14 translate-y-1/2 items-center justify-center rounded-2xl border border-indigo-400/20 bg-[#0F1F32] shadow-xl">
            <ShieldCheck className="h-6 w-6 text-indigo-400" />
          </div>

          {/* Floating dots */}
          <span className="absolute left-1/4 top-6 h-2 w-2 rounded-full bg-teal-400/60" />
          <span className="absolute right-1/4 bottom-5 h-2 w-2 rounded-full bg-indigo-400/60" />
          <span className="absolute bottom-1/3 left-0 h-1.5 w-1.5 rounded-full bg-teal-400/40" />
        </div>
      </div>
    </section>
  );
}