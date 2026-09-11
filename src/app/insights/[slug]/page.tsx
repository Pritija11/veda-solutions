import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { insights } from "@/data/insights";
import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

const categoryColor: Record<string, string> = {
  AI: "var(--powder-blue)",
  CLOUD: "var(--soft-mint)",
  SOFTWARE: "var(--butter-yellow)",
  DATA: "var(--soft-apricot)",
  SYSTEMS: "var(--baby-pink)",
};

const insightContent: Record<string, { intro: string; sections: { title: string; paragraphs: string[] }[] }> = {
  "where-ai-creates-value": {
    intro:
      "Most AI investments don't move the needle. The ones that do share a pattern: they start from a specific, measurable problem instead of a technology mandate.",
    sections: [
      {
        title: "Start with the bottleneck, not the model",
        paragraphs: [
          "The most useful AI initiatives begin with a clear bottleneck — a decision that takes too long, a process that depends on one overloaded person, a pattern that's too subtle for rules-based automation.",
          "A specific bottleneck makes it possible to define what success actually looks like before a line of code is written.",
        ],
      },
      {
        title: "The foundations matter more than the model",
        paragraphs: [
          "Data quality, integration, and monitoring decide whether an AI feature survives contact with real usage far more than model choice does.",
          "Teams that invest in those foundations end up with systems that keep working. Teams that don't end up with a demo that quietly stops being used.",
        ],
      },
      {
        title: "Measure the outcome, not the technology",
        paragraphs: [
          "Time saved, error rates reduced, and decisions made faster are the real scoreboard — not which model or vendor was used.",
          "Starting with that measure keeps the investment honest.",
        ],
      },
    ],
  },
  "infrastructure-as-product-problem": {
    intro:
      "Cloud architecture decisions eventually surface as user-facing reliability and speed. The line between 'infrastructure' and 'product' is thinner than most teams assume.",
    sections: [
      {
        title: "Users feel infrastructure, they just don't name it",
        paragraphs: [
          "A slow page load, a flaky checkout, a report that times out — these read as product failures, but the root cause usually sits in infrastructure.",
          "Treating infrastructure work as invisible plumbing is how it stays underfunded until it becomes an emergency.",
        ],
      },
      {
        title: "Automate delivery, not just deployment",
        paragraphs: [
          "CI/CD reduces the manual, error-prone parts of shipping software, but its real value is the feedback loop it creates — problems surface in minutes, not in a Friday afternoon release.",
        ],
      },
      {
        title: "Reliability is a continuous practice",
        paragraphs: [
          "Monitoring, logging, and incident response aren't a checklist you finish once — they're an ongoing discipline that scales with how much the business depends on the system.",
        ],
      },
    ],
  },
  "designing-systems-for-growing-businesses": {
    intro:
      "Software built for ten users behaves differently at ten thousand. Designing for the system you'll need avoids a painful rebuild later.",
    sections: [
      {
        title: "Requirements you can't see yet still shape the design",
        paragraphs: [
          "Clear requirements today help teams make better architecture decisions, but the good ones also leave room for the requirements that show up in year two.",
        ],
      },
      {
        title: "Design for change, not just for launch",
        paragraphs: [
          "Modular architecture, clear interfaces, and reliable data models are what make it possible to add a feature in month eighteen without rewriting month one's decisions.",
        ],
      },
      {
        title: "Speed and durability aren't actually opposites",
        paragraphs: [
          "Moving fast without a maintainable foundation just moves the slowdown to later, when it's more expensive to fix.",
        ],
      },
    ],
  },
  "business-data-to-operational-intelligence": {
    intro:
      "Most companies already have more data than they use. The gap is usually pipelines and framing, not a lack of information.",
    sections: [
      {
        title: "Reliable data comes before advanced analytics",
        paragraphs: [
          "Incomplete or inconsistent data limits everything built on top of it. Understanding where data comes from and how it's collected pays off before any dashboard gets built.",
        ],
      },
      {
        title: "Connect the systems, not just the reports",
        paragraphs: [
          "Useful information is usually scattered across tools that don't talk to each other. Pipelines that bring it together in a repeatable way are what turn scattered data into a real asset.",
        ],
      },
      {
        title: "Governance is what keeps it trustworthy",
        paragraphs: [
          "As data systems grow, knowing who can access what — and whether it's still accurate — becomes as important as collecting it in the first place.",
        ],
      },
    ],
  },
  "software-architecture-outlives-v1": {
    intro:
      "The decisions made in week one of a build are the ones teams live with for years. A practical look at designing for change instead of just for launch day.",
    sections: [
      {
        title: "Early decisions carry more weight than they seem to",
        paragraphs: [
          "The data model, the API boundaries, and the deployment shape chosen at the start tend to stay — changing them later usually means a rewrite, not a refactor.",
        ],
      },
      {
        title: "Interfaces outlast implementations",
        paragraphs: [
          "Clear boundaries between systems let the pieces behind them change without breaking everything downstream. That's the difference between an upgrade and an outage.",
        ],
      },
      {
        title: "Plan for the second version while building the first",
        paragraphs: [
          "Teams that assume requirements will change build systems that can absorb that change. Teams that assume v1 is final usually pay for that assumption later.",
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    return createPageMetadata("Insight", "Perspectives from Veda Solutions Hub, a technology startup.", `/insights/${slug}`);
  }

  return createPageMetadata(insight.title, insight.excerpt, `/insights/${insight.slug}`);
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  const content = insightContent[slug];

  if (!insight || !content) {
    notFound();
  }

  const accent = categoryColor[insight.category] ?? "var(--powder-blue)";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF7] pb-16 pt-[150px] sm:pt-[168px]">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-bold text-[#6B6A72] hover:text-[#24232B]">
            <ArrowLeft className="h-4 w-4" />
            Back to Veda Signals
          </Link>

          <Reveal className="mt-8">
            <span className="chip" style={{ backgroundColor: accent }}>
              {insight.category} / {insight.number}
            </span>
            <h1 className="mt-7 max-w-3xl font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-tight text-[#24232B] sm:text-5xl">
              {insight.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6B6A72]">{insight.excerpt}</p>
          </Reveal>
        </div>
      </section>

      {/* Article */}
      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <p className="text-lg leading-9 text-[#24232B]">{content.intro}</p>
            <p className="mt-4 text-sm text-[#6B6A72]">
              Published by Veda Solutions Hub, a technology startup building AI, software, cloud and data systems.
            </p>
          </Reveal>

          <div className="mt-14 space-y-12">
            {content.sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 60}>
                <div className="grid gap-4 sm:grid-cols-[80px_1fr]">
                  <span className="tech-label text-[#4E7BFF]">0{i + 1}</span>
                  <div>
                    <h2 className="font-[family-name:var(--font-sora)] text-2xl font-extrabold text-[#24232B]">{section.title}</h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((p) => (
                        <p key={p} className="text-base leading-8 text-[#6B6A72]">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 border-t border-[#24232B]/10 pt-8">
            <Link href="/insights" className="group inline-flex items-center gap-2 text-sm font-bold text-[#24232B]">
              <ArrowLeft className="h-4 w-4" />
              View all signals
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
