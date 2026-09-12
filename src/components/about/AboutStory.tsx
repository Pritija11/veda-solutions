import { Target, Lightbulb, Users, ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const principles = [
  {
    icon: Target,
    title: "Purpose first",
    description:
      "We start by understanding the business problem before deciding what technology should be used.",
  },
  {
    icon: Lightbulb,
    title: "Practical innovation",
    description:
      "We use modern technology where it creates real value, not simply because something is new.",
  },
  {
    icon: Users,
    title: "People focused",
    description:
      "Digital systems should be easy for the people who use them, from customers to internal teams.",
  },
];

export default function AboutStory() {
  return (
    <section
      id="story"
      className="border-b border-[var(--border)] bg-[var(--white)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Intro */}
          <FadeUp>
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  Our story
                </span>

                <span className="h-px w-8 bg-[var(--primary)]" />

                Why Veda exists
              </div>

              <h2 className="mt-5 max-w-md text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl">
                Technology should make progress easier.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">
                Businesses often know what they want to improve, but finding
                the right technology to get there can be difficult. Veda
                Solutions Hub exists to make that process simpler.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-bold">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-soft)]">
                  <ArrowUpRight
                    size={17}
                    className="text-[var(--primary)]"
                  />
                </span>

                <span>From idea to useful technology</span>
              </div>
            </div>
          </FadeUp>

          {/* Story */}
          <FadeUp delay={0.1}>
            <div>
              <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
                <p>
                  Veda Solutions Hub is built around a simple idea: technology
                  should support the way a business works, rather than create
                  unnecessary complexity.
                </p>

                <p>
                  We bring together design, software development, data, cloud
                  technology, and AI to create digital solutions that are
                  useful in the real world.
                </p>

                <p>
                  Whether a business needs a stronger digital presence, a
                  custom internal system, a mobile application, or better
                  automation, we focus on understanding the need first and
                  choosing the right solution from there.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[var(--background)] p-5">
                  <p className="text-2xl font-extrabold text-[var(--primary)]">
                    01
                  </p>

                  <p className="mt-2 text-sm font-bold">
                    Understand
                  </p>
                </div>

                <div className="rounded-2xl bg-[var(--background)] p-5">
                  <p className="text-2xl font-extrabold text-[var(--primary)]">
                    02
                  </p>

                  <p className="mt-2 text-sm font-bold">
                    Build
                  </p>
                </div>

                <div className="rounded-2xl bg-[var(--background)] p-5">
                  <p className="text-2xl font-extrabold text-[var(--primary)]">
                    03
                  </p>

                  <p className="mt-2 text-sm font-bold">
                    Improve
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Principles */}
        <Stagger className="mt-14 grid gap-4 border-t border-[var(--border)] pt-14 md:grid-cols-3 lg:mt-20 lg:pt-20">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <FadeUp key={principle.title} delay={index * 0.08}>
                <div className="h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  <h3 className="mt-7 text-lg font-bold">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {principle.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}