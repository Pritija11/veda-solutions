import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "How to Choose the Right Business Software",
  "A practical guide to knowing when off-the-shelf software is enough and when custom business software creates more value — from Veda Solutions Hub.",
  "/insights/how-to-choose-the-right-business-software",
);

export default function BusinessSoftwareArticle() {
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
            Business Software
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            How to Choose the Right Software for Your Business
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
            The right business software should solve a real problem, fit the
            way your team works, and remain useful as your business grows.
          </p>
        </div>

        <div className="mt-12">
          <section>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Start with the problem
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Before choosing software, understand what problem you are trying
              to solve. It could be managing customers, tracking sales,
              organizing employees, handling inventory, or improving internal
              communication.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Starting with the problem makes it easier to compare different
              software options and avoid paying for features your business does
              not need.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Consider what your team actually needs
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Software should make work easier, not create unnecessary
              complexity. Think about who will use the system and what tasks
              they need to complete.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "What tasks should the software improve?",
                "How many people will use it?",
                "What features are essential?",
                "Does it work well on the devices your team uses?",
                "Can your team learn to use it easily?",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[var(--border)] bg-[var(--white)] px-5 py-4 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Off-the-shelf or custom software?
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Many businesses can use existing software that already provides
              the features they need. This can be a practical choice when the
              business processes are fairly standard.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Custom software can make more sense when a business has specific
              workflows, needs to connect several systems, or cannot find an
              existing product that fits its requirements.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Think about the total cost
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              The price of software is not always limited to the initial
              purchase or subscription. Businesses may also need to consider
              setup, training, integrations, maintenance, storage, and future
              upgrades.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Looking at the total cost can help businesses make a more
              informed decision.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Check whether it can grow with you
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              A system that works today may need to support more users, more
              data, or additional business processes in the future.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Before choosing software, consider whether it can adapt as your
              business changes.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Make the decision based on value
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              The cheapest software is not always the best choice, and the most
              expensive software is not necessarily the best either.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              The better question is whether the software solves the problem
              effectively, saves useful time, supports your team, and provides
              enough value for its cost.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Final thoughts
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Choosing business software should start with understanding the
              business itself. Once the problem, users, budget, and future
              requirements are clear, it becomes much easier to choose the
              right technology.
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