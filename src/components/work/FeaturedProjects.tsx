import Link from "next/link";
import { ArrowUpRight, Smartphone, Globe2 } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

const projects = [
  {
    number: "01",
    category: "Web Platform",
    title: "A digital experience built around the customer.",
    description:
      "A modern web platform focused on clear communication, easy navigation, and a stronger digital presence for a growing business.",
    tags: ["Web Development", "UX", "Responsive"],
    type: "web",
  },
  {
    number: "02",
    category: "Mobile Application",
    title: "A mobile experience that keeps customers connected.",
    description:
      "A focused mobile product designed to make everyday services and interactions simpler for customers.",
    tags: ["Mobile", "Product Design", "Cross-platform"],
    type: "mobile",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--white)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Heading */}
        <FadeUp>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  Featured work
                </span>

                <span className="h-px w-8 bg-[var(--primary)]" />

                Selected projects
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Work that starts with a purpose.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                Every digital product should have a reason to exist. We focus
                on creating experiences that make businesses easier to run and
                easier for customers to use.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-2 text-sm font-bold hover:text-[var(--primary)]"
            >
              Start a project
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </FadeUp>

        {/* Featured projects */}
        <div className="mt-14 space-y-8 lg:mt-20">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.1}>
              <article
                className={`overflow-hidden rounded-[2rem] border border-[var(--border)] ${
                  project.type === "mobile"
                    ? "bg-[var(--foreground)] text-white"
                    : "bg-[var(--background)]"
                }`}
              >
                <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                  {/* Project details */}
                  <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold tracking-[0.14em] text-[var(--primary)]">
                          {project.number}
                        </span>

                        <span
                          className={`text-xs font-semibold uppercase tracking-[0.1em] ${
                            project.type === "mobile"
                              ? "text-white/40"
                              : "text-[var(--muted)]"
                          }`}
                        >
                          {project.category}
                        </span>
                      </div>

                      <h3 className="mt-14 max-w-md text-2xl font-extrabold leading-tight tracking-[-0.025em] sm:text-3xl">
                        {project.title}
                      </h3>

                      <p
                        className={`mt-5 max-w-md text-sm leading-6 sm:text-base sm:leading-7 ${
                          project.type === "mobile"
                            ? "text-white/60"
                            : "text-[var(--muted)]"
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                              project.type === "mobile"
                                ? "border border-white/10 bg-white/5 text-white/60"
                                : "border border-[var(--border)] bg-[var(--white)] text-[var(--muted)]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className={`group mt-7 inline-flex items-center gap-2 text-sm font-bold ${
                          project.type === "mobile"
                            ? "text-white hover:text-[var(--primary)]"
                            : "hover:text-[var(--primary)]"
                        }`}
                      >
                        Discuss a similar project
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Visual */}
                  <div
                    className={`relative flex min-h-[380px] items-center justify-center overflow-hidden p-8 sm:min-h-[480px] lg:min-h-[560px] ${
                      project.type === "mobile"
                        ? "bg-[#171b1f]"
                        : "bg-[#edf2f1]"
                    }`}
                  >
                    {project.type === "web" ? (
                      <WebProjectVisual />
                    ) : (
                      <MobileProjectVisual />
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Portfolio note */}
        <FadeUp delay={0.15}>
          <div className="mt-8 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--background)] p-6 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold">
                  More work is on the way.
                </p>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                  We&apos;ll continue adding completed projects and case
                  studies as our portfolio grows.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold hover:text-[var(--primary)]"
              >
                Work with us
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   Web project visual
--------------------------------------------- */

function WebProjectVisual() {
  return (
    <div className="relative w-full max-w-2xl">
      {/* Large website composition */}
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--white)] shadow-[0_30px_70px_rgba(17,20,23,0.12)]">
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />

          <div className="ml-5 h-6 flex-1 rounded-md bg-[var(--background)]" />
        </div>

        {/* Website */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div className="h-5 w-20 rounded bg-[var(--foreground)]" />

            <div className="hidden gap-4 sm:flex">
              <span className="h-2 w-10 rounded-full bg-[var(--border)]" />
              <span className="h-2 w-10 rounded-full bg-[var(--border)]" />
              <span className="h-2 w-10 rounded-full bg-[var(--border)]" />
            </div>

            <div className="h-8 w-20 rounded-full bg-[var(--primary)]" />
          </div>

          {/* Hero area */}
          <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_0.8fr] sm:items-center">
            <div>
              <div className="h-2 w-16 rounded-full bg-[var(--primary)]" />

              <div className="mt-4 space-y-2">
                <div className="h-5 w-full rounded bg-[var(--foreground)]" />
                <div className="h-5 w-4/5 rounded bg-[var(--foreground)]" />
                <div className="h-5 w-3/5 rounded bg-[var(--foreground)]" />
              </div>

              <div className="mt-6 h-9 w-28 rounded-full bg-[var(--foreground)]" />
            </div>

            <div className="relative aspect-square rounded-2xl bg-[var(--primary-soft)]">
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-[12px] border-white sm:h-32 sm:w-32" />

              <div className="absolute bottom-5 left-5 h-10 w-16 rounded-lg bg-white/80" />
              <div className="absolute right-5 top-5 h-14 w-14 rounded-lg bg-[var(--primary)]" />
            </div>
          </div>

          {/* Content blocks */}
          <div className="mt-10 grid grid-cols-3 gap-3">
            <div className="h-20 rounded-xl bg-[var(--background)]" />
            <div className="h-20 rounded-xl bg-[var(--background)]" />
            <div className="h-20 rounded-xl bg-[var(--background)]" />
          </div>
        </div>
      </div>

      {/* Floating label */}
      <div className="absolute -bottom-5 -left-2 rounded-2xl border border-[var(--border)] bg-[var(--white)] px-5 py-4 shadow-[0_18px_40px_rgba(17,20,23,0.1)] sm:-left-5">
        <div className="flex items-center gap-2">
          <Globe2 size={15} className="text-[var(--primary)]" />

          <span className="text-xs font-bold">
            Digital experience
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Mobile project visual
--------------------------------------------- */

function MobileProjectVisual() {
  return (
    <div className="relative flex w-full items-center justify-center">
      {/* Background typography */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[16vw] font-extrabold uppercase leading-none tracking-[-0.08em] text-white/[0.025] lg:text-[10rem]">
        MOBILE
      </div>

      {/* Phone */}
      <div className="relative z-10 w-[190px] rounded-[2.2rem] border-[7px] border-[#2b3136] bg-[#0f1215] p-2 shadow-[0_35px_70px_rgba(0,0,0,0.35)] sm:w-[220px]">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#2b3136]" />

        {/* Screen */}
        <div className="overflow-hidden rounded-[1.7rem] bg-[var(--background)]">
          <div className="px-5 pb-7 pt-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-12 rounded-full bg-[var(--primary)]" />
                <div className="mt-2 h-4 w-20 rounded bg-[var(--foreground)]" />
              </div>

              <div className="h-8 w-8 rounded-full bg-[var(--primary-soft)]" />
            </div>

            <div className="mt-7 rounded-2xl bg-[var(--primary)] p-4">
              <div className="h-2 w-12 rounded-full bg-white/60" />

              <div className="mt-3 h-4 w-24 rounded bg-white" />

              <div className="mt-5 h-16 rounded-xl bg-white/15" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="h-20 rounded-xl bg-white" />
              <div className="h-20 rounded-xl bg-white" />
            </div>

            <div className="mt-5 space-y-3">
              <div className="h-3 w-24 rounded-full bg-[var(--foreground)]" />
              <div className="h-12 rounded-xl bg-white" />
              <div className="h-12 rounded-xl bg-white" />
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="border-t border-[var(--border)] bg-white px-5 py-4">
            <div className="flex justify-between">
              <span className="h-2 w-5 rounded-full bg-[var(--primary)]" />
              <span className="h-2 w-5 rounded-full bg-[var(--border)]" />
              <span className="h-2 w-5 rounded-full bg-[var(--border)]" />
              <span className="h-2 w-5 rounded-full bg-[var(--border)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating icon */}
      <div className="absolute bottom-4 right-[8%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <Smartphone size={19} className="text-[var(--primary)]" />
      </div>
    </div>
  );
}