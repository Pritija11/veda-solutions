import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

export default function InsightsCTA() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--foreground)] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                Have a question?
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Need help with a technology project?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                If you have an idea, a problem, or simply want to know what
                technology could work for your business, talk to our team.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white hover:-translate-y-0.5 hover:brightness-105"
              >
                Talk to our team
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-[var(--primary)]/15" />

            <div className="pointer-events-none absolute -bottom-24 right-24 h-48 w-48 rounded-full border-[24px] border-white/5" />

            <div className="pointer-events-none absolute bottom-8 right-8 hidden h-3 w-3 rounded-full bg-[var(--primary)] sm:block" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}