import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import Reveal from "@/components/animations/Reveal";

export default function CTA() {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-[var(--primary)] px-7 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/20" />

          <div className="pointer-events-none absolute -bottom-32 -right-5 h-72 w-72 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute right-16 top-16 hidden h-3 w-3 rounded-full bg-white/50 lg:block" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/70">
                Let&apos;s build something useful
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Have a business idea or a problem to solve?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Tell us what you&apos;re working on. We&apos;ll help you
                understand the possibilities and find a practical way forward.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--foreground)] transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s talk
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Bottom line */}
          <div className="relative z-10 mt-12 flex flex-col gap-3 border-t border-white/20 pt-5 text-xs font-semibold text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <span>Veda Solutions Hub</span>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              Start a conversation
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}