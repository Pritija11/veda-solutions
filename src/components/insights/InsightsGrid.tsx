import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const insights = [
  {
    number: "01",
    category: "Web Development",
    title: "Why Your Business Needs a Website",
    description:
      "Learn why a website is important for a business and what makes a business website useful for customers.",
    readTime: "4 min read",
    href: "/insights/why-every-business-needs-a-good-website",
  },
  {
    number: "02",
    category: "Cloud & IT",
    title: "What Is Cloud Computing?",
    description:
      "A simple introduction to cloud computing and how businesses use cloud services every day.",
    readTime: "5 min read",
    href: "/insights/what-is-cloud-computing",
  },
  {
    number: "03",
    category: "AI & Automation",
    title: "How AI Can Help Small Businesses",
    description:
      "Explore some simple ways small businesses can use AI to save time and handle routine tasks.",
    readTime: "5 min read",
    href: "/insights/how-ai-can-help-small-businesses",
  },
  {
    number: "04",
    category: "Business Software",
    title: "How to Choose the Right Software for Your Business",
    description:
      "A simple guide to choosing business software based on your needs, budget, team, and future growth.",
    readTime: "5 min read",
    href: "/insights/how-to-choose-the-right-business-software",
  },
];

export default function InsightsGrid() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  From our blog
                </span>

                <span className="h-px w-8 bg-[var(--primary)]" />
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Useful ideas about technology.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              Simple guides and articles about websites, software, AI, cloud
              technology, and other topics businesses often need to understand.
            </p>
          </div>
        </FadeUp>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2">
          {insights.map((insight, index) => (
            <FadeUp key={insight.number} delay={index * 0.06}>
              <Link
                href={insight.href}
                className="group flex h-full flex-col rounded-[1.5rem] border border-[var(--border)] bg-[var(--white)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_20px_45px_rgba(17,20,23,0.07)] sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.14em] text-[var(--primary)]">
                    {insight.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                  />
                </div>

                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                    {insight.category}
                  </p>

                  <h3 className="mt-3 text-lg font-bold leading-6 tracking-tight">
                    {insight.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {insight.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-5">
                  <span className="text-xs font-semibold text-[var(--muted)]">
                    {insight.readTime}
                  </span>

                  <span className="text-xs font-bold">
                    Read article
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}