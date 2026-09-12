import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

const projects = [
  {
    category: "Web Platform",
    title: "Digital experiences built around real business needs.",
    description:
      "From customer-facing websites to powerful internal platforms, we create digital products that make everyday business operations simpler.",
    tags: ["Web", "UI/UX", "Development"],
    featured: true,
  },
  {
    category: "Business Software",
    title: "Systems that bring your workflows together.",
    description:
      "Custom software designed to connect teams, information, and business processes in one place.",
    tags: ["Software", "Dashboard"],
    featured: false,
  },
];

export default function FeaturedWork() {
  return (
    <section className="border-y border-[var(--border)] bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <FadeUp className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
              Featured work
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              Ideas become useful technology.
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold hover:text-[var(--primary)]"
          >
            View all work
            <ArrowRight size={17} />
          </Link>
        </FadeUp>

        {/* Projects */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.15}>
              <Link
                href="/work"
                className={`group overflow-hidden rounded-3xl border border-[var(--border)] ${
                  project.featured ? "bg-[#f1f5f5]" : "bg-[var(--foreground)]"
                }`}
              >
              {/* Project visual */}
              <div
                className={`relative overflow-hidden p-5 sm:p-7 ${
                  project.featured ? "min-h-[390px]" : "min-h-[300px]"
                }`}
              >
                {/* Decorative background */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 ${
                    project.featured
                      ? "bg-[radial-gradient(circle_at_80%_20%,var(--primary-soft),transparent_35%)]"
                      : "bg-[radial-gradient(circle_at_50%_0%,rgba(4,146,194,0.20),transparent_45%)]"
                  }`}
                />

                {/* Browser / product mockup */}
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border shadow-[0_20px_60px_rgba(17,20,23,0.12)] transition-transform duration-500 group-hover:-translate-y-1 ${
                    project.featured
                      ? "border-[var(--border)] bg-white"
                      : "border-white/10 bg-[#181c1f]"
                  }`}
                >
                  {/* Browser bar */}
                  <div
                    className={`flex items-center justify-between border-b px-4 py-3 ${
                      project.featured
                        ? "border-[var(--border)]"
                        : "border-white/10"
                    }`}
                  >
                    <div className="flex gap-1.5">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          project.featured
                            ? "bg-[var(--border)]"
                            : "bg-white/20"
                        }`}
                      />
                      <span
                        className={`h-2 w-2 rounded-full ${
                          project.featured
                            ? "bg-[var(--border)]"
                            : "bg-white/20"
                        }`}
                      />
                      <span
                        className={`h-2 w-2 rounded-full ${
                          project.featured
                            ? "bg-[var(--border)]"
                            : "bg-white/20"
                        }`}
                      />
                    </div>

                    <div
                      className={`h-2 w-24 rounded-full ${
                        project.featured
                          ? "bg-[var(--border)]"
                          : "bg-white/10"
                      }`}
                    />
                  </div>

                  {/* Interface */}
                  <div className="grid h-[calc(100%-45px)] grid-cols-[60px_1fr]">
                    {/* Sidebar */}
                    <div
                      className={`border-r p-3 ${
                        project.featured
                          ? "border-[var(--border)]"
                          : "border-white/10"
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-extrabold ${
                          project.featured
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--primary)] text-white"
                        }`}
                      >
                        V
                      </div>

                      <div className="mt-7 space-y-3">
                        <div
                          className={`h-6 rounded-md ${
                            project.featured
                              ? "bg-[var(--primary-soft)]"
                              : "bg-white/10"
                          }`}
                        />
                        <div
                          className={`h-2 rounded-full ${
                            project.featured
                              ? "bg-[var(--border)]"
                              : "bg-white/10"
                          }`}
                        />
                        <div
                          className={`h-2 rounded-full ${
                            project.featured
                              ? "bg-[var(--border)]"
                              : "bg-white/10"
                          }`}
                        />
                        <div
                          className={`h-2 rounded-full ${
                            project.featured
                              ? "bg-[var(--border)]"
                              : "bg-white/10"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Dashboard */}
                    <div className="p-4 sm:p-6">
                      <div className="flex justify-between">
                        <div>
                          <div
                            className={`h-3 w-24 rounded-full ${
                              project.featured
                                ? "bg-[var(--foreground)]"
                                : "bg-white/70"
                            }`}
                          />
                          <div
                            className={`mt-2 h-2 w-32 rounded-full ${
                              project.featured
                                ? "bg-[var(--border)]"
                                : "bg-white/10"
                            }`}
                          />
                        </div>

                        <div className="h-7 w-7 rounded-full bg-[var(--primary-soft)]" />
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className={`h-16 rounded-lg border ${
                              project.featured
                                ? "border-[var(--border)] bg-[#f5f6f5]"
                                : "border-white/10 bg-white/5"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Chart */}
                      <div
                        className={`mt-3 rounded-lg border p-3 ${
                          project.featured
                            ? "border-[var(--border)]"
                            : "border-white/10"
                        }`}
                      >
                        <div className="flex h-24 items-end gap-1.5">
                          {[35, 48, 40, 61, 55, 72, 65, 83, 76, 94].map(
                            (height, item) => (
                              <div
                                key={item}
                                className="flex-1 rounded-t-sm bg-[var(--primary)] opacity-80"
                                style={{ height: `${height}%` }}
                              />
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project information */}
              <div
                className={`border-t p-7 sm:p-8 ${
                  project.featured
                    ? "border-[var(--border)]"
                    : "border-white/10 text-white"
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span
                      className={`text-xs font-bold uppercase tracking-[0.12em] ${
                        project.featured
                          ? "text-[var(--primary)]"
                          : "text-[var(--primary)]"
                      }`}
                    >
                      {project.category}
                    </span>

                    <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight tracking-[-0.035em] sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      project.featured
                        ? "border-[var(--border)] group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]"
                        : "border-white/15 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]"
                    }`}
                  >
                    <ArrowUpRight
                      size={17}
                      className="transition-colors group-hover:text-white"
                    />
                  </div>
                </div>

                <p
                  className={`mt-4 max-w-xl text-sm leading-6 sm:text-base ${
                    project.featured
                      ? "text-[var(--muted)]"
                      : "text-white/55"
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                        project.featured
                          ? "border-[var(--border)] text-[var(--muted)]"
                          : "border-white/10 text-white/55"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Bottom statement */}
        <FadeUp className="mt-12 flex flex-col justify-between gap-5 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
            More projects, products, and digital experiences are coming soon.
          </p>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--primary)]"
          >
            See our approach
            <ExternalLink size={16} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}