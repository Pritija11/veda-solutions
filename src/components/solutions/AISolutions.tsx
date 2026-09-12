import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Workflow,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

const features = [
  {
    icon: Bot,
    title: "AI integrations",
    description:
      "Add useful AI capabilities to existing products and business systems without rebuilding everything from scratch.",
  },
  {
    icon: Workflow,
    title: "Workflow automation",
    description:
      "Automate repetitive tasks and connect everyday business processes to save time and reduce manual work.",
  },
  {
    icon: MessageSquare,
    title: "AI assistants",
    description:
      "Build helpful conversational experiences that allow customers and teams to access information more easily.",
  },
  {
    icon: Sparkles,
    title: "Intelligent features",
    description:
      "Introduce practical AI-powered features where they can improve productivity, decisions, or customer experiences.",
  },
];

export default function AISolutions() {
  return (
    <section id="ai" className="border-b border-[var(--border)] bg-[var(--white)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Heading */}
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs">04</span>
                <span className="h-px w-8 bg-[var(--primary)]" />
                AI & Automation
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Make everyday business processes smarter.
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                AI is most valuable when it solves a real problem. We help
                businesses introduce automation and intelligent features where
                they can reduce repetitive work, improve experiences, and
                create measurable value.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--foreground)]"
              >
                Explore an AI solution
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </FadeUp>

        {/* Main visual */}
        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.1}>
            <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#111417] p-6 sm:p-8">
              {/* Decorative glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--primary)] opacity-10 blur-3xl" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-white/40">
                      Automation workspace
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      Smarter workflows
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                    <span className="text-[10px] font-medium text-white/70">
                      Active
                    </span>
                  </div>
                </div>

                {/* Workflow */}
                <div className="mt-10">
                  <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
                    {/* Step 1 */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <MessageSquare
                          size={18}
                          className="text-white/70"
                        />
                      </div>

                      <p className="mt-4 text-sm font-semibold text-white">
                        Customer request
                      </p>

                      <p className="mt-2 text-xs leading-5 text-white/40">
                        New information enters the system.
                      </p>
                    </div>

                    <div className="hidden text-white/30 sm:block">
                      →
                    </div>

                    {/* Step 2 */}
                    <div className="rounded-2xl border border-[var(--primary)]/40 bg-[var(--primary)]/10 p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/20">
                        <Bot
                          size={18}
                          className="text-[var(--primary)]"
                        />
                      </div>

                      <p className="mt-4 text-sm font-semibold text-white">
                        AI processing
                      </p>

                      <p className="mt-2 text-xs leading-5 text-white/40">
                        Information is analyzed and organized.
                      </p>
                    </div>

                    <div className="hidden text-white/30 sm:block">
                      →
                    </div>

                    {/* Step 3 */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <Workflow
                          size={18}
                          className="text-white/70"
                        />
                      </div>

                      <p className="mt-4 text-sm font-semibold text-white">
                        Action
                      </p>

                      <p className="mt-2 text-xs leading-5 text-white/40">
                        The right workflow is triggered automatically.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Activity panel */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-white">
                      Recent automation
                    </p>

                    <span className="text-[10px] text-white/30">
                      Today
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      ["Customer inquiry", "Processed"],
                      ["Report generation", "Completed"],
                      ["Follow-up workflow", "Triggered"],
                    ].map(([title, status]) => (
                      <div
                        key={title}
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-[var(--primary)]" />

                          <span className="text-xs text-white/60">
                            {title}
                          </span>
                        </div>

                        <span className="text-[10px] font-medium text-white/30">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating AI label */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-[#1b1f23] px-4 py-2.5 shadow-xl">
                <Sparkles
                  size={14}
                  className="text-[var(--primary)]"
                />

                <span className="text-xs font-medium text-white">
                  AI where it matters
                </span>
              </div>
            </div>
          </Reveal>

          {/* Feature list */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <FadeUp key={feature.title} delay={index * 0.08}>
                  <div className="group flex h-full gap-5 rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_16px_40px_rgba(17,20,23,0.06)]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-bold">
                          {feature.title}
                        </h3>

                        <ArrowUpRight
                          size={16}
                          className="shrink-0 text-[var(--muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--primary)]"
                        />
                      </div>

                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}