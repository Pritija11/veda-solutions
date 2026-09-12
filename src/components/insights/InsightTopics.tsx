import {
  Globe2,
  Code2,
  Bot,
  Cloud,
  BriefcaseBusiness,
  Lightbulb,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const topics = [
  {
    icon: Globe2,
    title: "Digital Products",
    description:
      "Ideas about websites, digital experiences, and products that help businesses connect with their customers.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Technology",
    description:
      "Practical perspectives on using technology to improve workflows, operations, and everyday business processes.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Explore practical ways AI and automation can reduce repetitive work and create meaningful business value.",
  },
  {
    icon: Cloud,
    title: "Cloud & IT",
    description:
      "Thoughts on cloud platforms, connected systems, APIs, databases, and reliable technical foundations.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Practical ideas about building maintainable, scalable, and useful software for real-world needs.",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    description:
      "Guidance for businesses looking to modernize their technology without unnecessary complexity.",
  },
];

export default function InsightTopics() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--white)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-sm font-semibold text-[var(--primary)]">
              <span className="h-px w-8 bg-[var(--primary)]" />

              <span className="text-xs font-bold uppercase tracking-[0.14em]">
                Explore topics
              </span>

              <span className="h-px w-8 bg-[var(--primary)]" />
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              What we&apos;re thinking about.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              Our insights cover the technology decisions, ideas, and trends
              that matter to modern businesses.
            </p>
          </div>
        </FadeUp>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {topics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <FadeUp key={topic.title} delay={index * 0.06}>
                <div className="group h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-[var(--white)] hover:shadow-[0_20px_45px_rgba(17,20,23,0.07)] sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  <h3 className="mt-7 text-lg font-bold tracking-tight">
                    {topic.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {topic.description}
                  </p>

                  <div className="mt-7 h-px w-10 bg-[var(--primary)] opacity-60 transition-all duration-300 group-hover:w-16" />
                </div>
              </FadeUp>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}