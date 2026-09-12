import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "How AI Can Help Small Businesses",
  "Practical ways small businesses can use AI and automation to reduce repetitive work and improve efficiency — from Veda Solutions Hub, a technology startup.",
  "/insights/how-ai-can-help-small-businesses",
);

export default function AISmallBusinessArticle() {
  return (
    <article className="bg-[var(--background)]">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-24 lg:py-28">
        <Link
          href="/insights"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] hover:text-[var(--primary)]"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Insights
        </Link>

        <header className="mt-12">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
            AI & Automation
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            How AI Can Help Small Businesses
          </h1>

          <div className="mt-6 flex items-center gap-3 text-sm text-[var(--muted)]">
            <span>Veda Solutions Hub</span>

            <span className="h-1 w-1 rounded-full bg-[var(--border)]" />

            <span className="flex items-center gap-2">
              <Clock3 size={15} />
              5 min read
            </span>
          </div>
        </header>

        <div className="mt-12 rounded-[2rem] bg-[var(--foreground)] p-8 text-white sm:p-12">
          <p className="text-lg font-semibold leading-8 text-white/80 sm:text-xl">
            AI does not have to completely change a business. Small businesses
            can start with simple AI tools that save time, organize information,
            and make everyday work easier.
          </p>
        </div>

        <div className="mt-12">
          <section>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              What can AI do for a small business?
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Artificial intelligence can help businesses with tasks that
              involve processing information, generating content, answering
              common questions, and identifying patterns in data.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              The goal is not to use AI simply because it is popular. The
              technology should solve a real business problem and provide
              useful results.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              1. Automating repetitive tasks
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Businesses often spend time on repetitive tasks such as sorting
              information, preparing simple reports, responding to common
              questions, or organizing customer requests.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              AI and automation can help reduce some of this manual work,
              allowing employees to spend more time on tasks that require
              human judgment.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              2. Improving customer support
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              AI assistants can help answer frequently asked questions and
              provide basic information to customers. This can be useful when
              customers need quick answers outside normal working hours.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Businesses should still make it easy for customers to reach a
              real person when a question requires human attention.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              3. Helping with content
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              AI tools can help businesses create first drafts for emails,
              product descriptions, social media ideas, documents, and other
              everyday content.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Human review is still important. AI-generated content should be
              checked for accuracy, clarity, and whether it matches the
              business.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              4. Understanding business data
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Businesses collect information from sales, customers, websites,
              and other systems. AI can help identify patterns or summarize
              large amounts of information.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              These insights can support better decisions, but businesses
              should make sure their data is accurate and handled responsibly.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Start with a real problem
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              The best way to introduce AI is to start with a specific
              problem. For example, a business might spend too much time
              answering the same customer questions or preparing repetitive
              reports.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Once the problem is clear, the business can decide whether AI or
              another type of automation is actually the right solution.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Final thoughts
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              AI can be useful for businesses of many sizes, but it does not
              need to be complicated. Starting with one practical problem can
              be a better approach than trying to add AI everywhere.
            </p>
          </section>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/insights"
            className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--primary)]"
          >
            ← More articles
          </Link>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white hover:opacity-90"
          >
            Talk to our team

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}