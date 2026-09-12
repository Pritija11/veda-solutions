import {
  Globe2,
  Workflow,
  Smartphone,
  Bot,
  Cloud,
  Database,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const solutions = [
  {
    icon: Globe2,
    label: "Digital presence",
    title: "Help customers find and understand your business.",
    description:
      "Modern websites and digital experiences that communicate your value clearly and make it easier for customers to connect with you.",
  },
  {
    icon: Workflow,
    label: "Business operations",
    title: "Bring everyday work into one connected system.",
    description:
      "Custom software can organize workflows, information, approvals, and internal processes so teams can work more efficiently.",
  },
  {
    icon: Smartphone,
    label: "Customer experiences",
    title: "Make your services easier to access.",
    description:
      "Web and mobile applications that give customers simpler ways to discover services, interact with your business, and get things done.",
  },
  {
    icon: Bot,
    label: "Automation",
    title: "Reduce repetitive work with smarter technology.",
    description:
      "AI integrations and automated workflows can handle repetitive tasks while helping teams focus on higher-value work.",
  },
  {
    icon: Cloud,
    label: "Connected technology",
    title: "Connect the systems your business already uses.",
    description:
      "APIs, cloud services, databases, and third-party integrations can work together as a more reliable digital ecosystem.",
  },
  {
    icon: Database,
    label: "Data & information",
    title: "Turn business information into something useful.",
    description:
      "Structured data systems and practical dashboards help businesses organize information and make better day-to-day decisions.",
  },
];

export default function IndustrySolutions() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Intro */}
          <FadeUp>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  What we solve
                </span>

                <span className="h-px w-8 bg-[var(--primary)]" />
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl">
                Technology should solve a business problem.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">
                Industry knowledge matters, but the right solution starts with
                understanding what your business actually needs to improve.
              </p>

              <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--white)] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                  Our principle
                </p>

                <p className="mt-3 text-sm font-semibold leading-6">
                  Start with the problem. Choose the technology that solves
                  it.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Solutions */}
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <FadeUp key={solution.label} delay={index * 0.07}>
                  <div className="group h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--white)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_20px_45px_rgba(17,20,23,0.07)] sm:p-7">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          className="text-[var(--primary)]"
                        />
                      </div>

                      <span className="text-xs font-bold tracking-[0.12em] text-[var(--border)]">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-7 text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                      {solution.label}
                    </p>

                    <h3 className="mt-3 text-lg font-bold leading-6 tracking-tight">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {solution.description}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}