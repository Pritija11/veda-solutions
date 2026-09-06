import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";

import { insights } from "@/data/insights";

type InsightPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const insightContent: Record<
  string,
  {
    introduction: string;
    sections: {
      title: string;
      paragraphs: string[];
    }[];
  }
> = {
  "practical-ai-adoption": {
    introduction:
      "AI adoption does not have to begin with a large transformation project. Organizations can start by identifying specific problems where intelligent systems can provide measurable value, then gradually build the technical foundations needed to support them.",
    sections: [
      {
        title: "Start with the problem",
        paragraphs: [
          "The most useful AI initiatives begin with a clear problem rather than a technology-first objective. Teams should understand where time is being lost, where decisions depend on large amounts of information, or where repetitive work could be improved.",
          "A focused problem makes it easier to define what success looks like and evaluate whether AI is actually the right solution.",
        ],
      },
      {
        title: "Build the right foundations",
        paragraphs: [
          "Useful AI systems depend on more than models. Data quality, application architecture, cloud infrastructure, security, and integration all influence how effectively an AI capability can operate.",
          "Building these foundations alongside the AI initiative helps organizations create systems that can evolve instead of isolated experiments that are difficult to maintain.",
        ],
      },
      {
        title: "Improve continuously",
        paragraphs: [
          "AI adoption should be treated as an evolving process. As teams learn from real usage, they can improve workflows, data, integrations, and system performance.",
          "The goal is not simply to introduce AI, but to create a practical capability that continues to provide value over time.",
        ],
      },
    ],
  },

  "ai-powered-automation": {
    introduction:
      "Traditional automation follows predefined rules. AI can add another layer by helping systems interpret information, recognize patterns, and respond to situations that are harder to describe with fixed rules alone.",
    sections: [
      {
        title: "Beyond fixed workflows",
        paragraphs: [
          "Traditional automation works particularly well when a process is predictable. AI-powered automation becomes useful when workflows involve documents, natural language, classification, recommendations, or changing inputs.",
          "Combining the two approaches can create workflows that retain predictable automation while introducing more flexibility where it is useful.",
        ],
      },
      {
        title: "Keep people involved",
        paragraphs: [
          "Not every automated decision should happen without human oversight. Important workflows may benefit from review points where people can verify results or handle unusual cases.",
          "This creates a balance between efficiency and responsible use of intelligent systems.",
        ],
      },
      {
        title: "Design for measurable value",
        paragraphs: [
          "Automation should have a clear purpose. Time saved, reduced manual effort, improved response times, or better consistency can provide useful measures of whether an initiative is working.",
          "Starting with measurable outcomes helps teams focus their investment on automation that genuinely improves the way work is done.",
        ],
      },
    ],
  },

  "cloud-devops-modern-systems": {
    introduction:
      "Modern applications need infrastructure that can support frequent changes without sacrificing reliability. Cloud and DevOps practices provide the foundation for building, deploying, and operating software more efficiently.",
    sections: [
      {
        title: "Infrastructure as a foundation",
        paragraphs: [
          "Applications depend on infrastructure for computing, networking, storage, security, and other services. A well-designed cloud environment gives teams the flexibility to adapt infrastructure as application requirements change.",
          "The right architecture depends on the application's needs rather than simply adopting technology because it is popular.",
        ],
      },
      {
        title: "Automate delivery",
        paragraphs: [
          "DevOps practices can reduce repetitive manual work across testing, deployment, and infrastructure management. Automated delivery pipelines make changes more consistent and easier to track.",
          "Automation also gives development teams faster feedback, helping them identify problems earlier in the software lifecycle.",
        ],
      },
      {
        title: "Reliability is continuous",
        paragraphs: [
          "Deploying an application is only one part of operating a digital system. Monitoring, logging, security, backups, and performance management all contribute to long-term reliability.",
          "Cloud and DevOps practices work best when these concerns are treated as part of the complete application lifecycle.",
        ],
      },
    ],
  },

  "data-foundations-for-ai": {
    introduction:
      "AI systems depend heavily on the quality and availability of the data behind them. Strong data foundations make it easier to build useful intelligent systems and maintain them as requirements evolve.",
    sections: [
      {
        title: "Reliable data comes first",
        paragraphs: [
          "Poorly structured, incomplete, or inconsistent data can limit the usefulness of an AI system. Before introducing advanced models, organizations should understand where their data comes from and how it is collected, stored, and processed.",
          "Improving these foundations can benefit both AI initiatives and everyday analytics.",
        ],
      },
      {
        title: "Connect data across systems",
        paragraphs: [
          "Organizations often have useful information distributed across multiple applications and platforms. Data pipelines can help bring relevant information together in structured and repeatable ways.",
          "This creates a stronger foundation for analytics, reporting, automation, and AI-powered applications.",
        ],
      },
      {
        title: "Think about the full lifecycle",
        paragraphs: [
          "Data systems need to remain useful as applications and requirements change. Monitoring, governance, security, and maintainability should therefore be considered alongside data collection and processing.",
          "A strong data foundation is an ongoing engineering capability rather than a one-time project.",
        ],
      },
    ],
  },

  "building-digital-solutions": {
    introduction:
      "Digital products become more difficult to maintain as users, features, integrations, and technical requirements grow. Strong engineering foundations help systems evolve without allowing complexity to grow unchecked.",
    sections: [
      {
        title: "Start with clear requirements",
        paragraphs: [
          "Good software begins with understanding what the system actually needs to accomplish. Clear requirements help teams make better decisions about architecture, functionality, and priorities.",
          "This also reduces the risk of building features that add complexity without solving meaningful problems.",
        ],
      },
      {
        title: "Design for change",
        paragraphs: [
          "Modern software rarely stays unchanged. Requirements evolve, integrations are added, and usage patterns develop over time.",
          "Modular architecture, clear interfaces, reliable data models, and appropriate testing can make these changes easier to manage.",
        ],
      },
      {
        title: "Balance speed and quality",
        paragraphs: [
          "Moving quickly is valuable, but speed without maintainability can create technical problems later. Good engineering looks for a practical balance between delivering useful functionality and maintaining a healthy technical foundation.",
          "This allows software to keep evolving as the organization and its users grow.",
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    return {};
  }

  return {
    title: insight.title,
    description: `Veda Solutions Hub, a technology startup, explores ${insight.title.toLowerCase()} and what it means for modern digital systems.`,
    alternates: {
      canonical: `https://vedasolutionshub.com/insights/${insight.slug}`,
    },
    openGraph: {
      title: `${insight.title} | Veda Solutions Hub`,
      description: insight.excerpt,
      url: `https://vedasolutionshub.com/insights/${insight.slug}`,
      siteName: "Veda Solutions Hub",
      type: "article",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function InsightDetailPage({
  params,
}: InsightPageProps) {
  const { slug } = await params;

  const insight = insights.find((item) => item.slug === slug);
  const content = insightContent[slug];

  if (!insight || !content) {
    notFound();
  }

  return (
    <>
      <article className="bg-[#07111F] pt-36 pb-24 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-teal-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to insights
          </Link>

          <div className="mt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-500/5 px-4 py-2">
              <BookOpen className="h-4 w-4 text-teal-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-400">
                {insight.category}
              </span>
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl">
              {insight.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              {content.introduction}
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[#0B1728] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-16">
            {content.sections.map((section, index) => (
              <section key={section.title}>
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-sm font-semibold tracking-widest text-teal-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-slate-400"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111F] py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
            Continue exploring
          </p>

          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
            Interested in putting these ideas into practice?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Explore the technology capabilities behind our work or start a
            conversation about a digital challenge.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-7 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-200 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
            >
              Explore solutions
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1E334A] bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-teal-400/30 hover:bg-teal-500/5 hover:text-teal-400"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}