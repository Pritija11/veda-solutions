import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { createPageMetadata } from "@/lib/seo";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Contact Veda Solutions Hub, a technology startup building intelligent digital systems across AI, software, cloud and data.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF7] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="dot-grid pointer-events-none absolute -right-6 -top-6 h-72 w-72" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="tech-label text-[#6B6A72]">Contact Veda</div>
            <h1 className="mt-6 font-[family-name:var(--font-sora)] text-5xl font-extrabold leading-[1.05] text-[#24232B] sm:text-6xl">
              Let&apos;s build something useful.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6B6A72]">
              We&apos;re a technology startup, and this is the fastest way to reach us — tell us what you&apos;re
              trying to solve.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + tile */}
      <section className="bg-[#FFFDF7] pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal>
            <div>
              <div className="tech-label text-[#6B6A72]">Get in touch</div>
              <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-extrabold text-[#24232B]">
                Start the conversation.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-[#6B6A72]">
                You don&apos;t need everything figured out before reaching out. Share your goals, challenge, or idea
                and we can explore the right direction together.
              </p>

              <div className="veda-tile mt-10 bg-[#24232B] p-7">
                <p className="tech-label text-white/50">Veda / Contact</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["AI", "SOFTWARE", "CLOUD", "DATA"].map((tag) => (
                    <span key={tag} className="chip border border-white/20 bg-white/5 text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-6 text-white/60">
                  Real contact details will appear here once finalized. For now, the form is the fastest way to
                  reach us.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Explore first */}
      <section className="bg-[#FFFDF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="veda-tile flex flex-col gap-8 bg-[#24232B] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="max-w-2xl">
                <h2 className="font-[family-name:var(--font-sora)] text-3xl font-extrabold text-white sm:text-4xl">
                  Want to understand what we do first?
                </h2>
                <p className="mt-4 text-base leading-7 text-white/60">
                  Explore how AI, software, cloud and data connect as one system.
                </p>
              </div>
              <Link href="/solutions" className="tile-hover inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#24232B]">
                Explore solutions
                <ArrowUpRight className="arrow-shift h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
