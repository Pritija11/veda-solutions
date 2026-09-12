import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

export default function WorkCTA() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--foreground)] px-7 py-12 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            {/* Decorative elements */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

            <div className="absolute -bottom-32 right-24 h-80 w-80 rounded-full border border-white/5" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <FadeUp>
                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                    Start something new
                  </p>

                  <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                    Have an idea that needs the right technology?
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                    Whether you&apos;re starting from scratch or improving an
                    existing system, let&apos;s talk about what you want to
                    build.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.12}>
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-bold text-white hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
                >
                  Let&apos;s talk
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </FadeUp>
            </div>

            <FadeUp delay={0.18}>
              <div className="relative mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
                <span>Veda Solutions Hub</span>

                <span className="flex items-center gap-2">
                  Start a project
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </FadeUp>
          </div>
        </Reveal>
      </div>
    </section>
  );
}