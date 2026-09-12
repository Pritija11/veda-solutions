import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "What Is Cloud Computing?",
  "A clear, practical explanation of cloud computing and why it matters for businesses — from Veda Solutions Hub, a technology startup building cloud & IT solutions.",
  "/insights/what-is-cloud-computing",
);

export default function CloudComputingArticle() {
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
            Cloud & IT
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            What Is Cloud Computing?
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
            Cloud computing means using computing services over the internet
            instead of depending only on computers and servers in your own
            office.
          </p>
        </div>

        <div className="mt-12">
          <section>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              What does the cloud mean?
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              When people talk about "the cloud," they are usually talking
              about computers and servers that are available through the
              internet. These systems can store data, run applications, and
              provide other computing services.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Instead of buying and maintaining all the hardware yourself, a
              business can use services provided by cloud companies.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              How businesses use cloud computing
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Many businesses use cloud services without even thinking about
              it. Email, online file storage, business applications, databases,
              website hosting, and backups can all use cloud infrastructure.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Store and back up business data",
                "Host websites and web applications",
                "Run databases and APIs",
                "Share files and collaborate online",
                "Scale systems when the business grows",
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
              Why businesses use the cloud
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              One of the main benefits of cloud computing is flexibility.
              Businesses can use the resources they need without having to
              purchase and manage every server themselves.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Cloud services can also make it easier to access systems from
              different locations and increase resources as the number of users
              or amount of data grows.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Is cloud computing right for every business?
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Not every business needs the same cloud setup. The right choice
              depends on the type of business, the amount of data, security
              requirements, budget, and the systems being used.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              A business should first understand its needs and then choose the
              cloud services that actually solve those needs.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Final thoughts
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Cloud computing is simply a way of using computing resources
              through the internet. For many businesses, it can make systems
              easier to manage, access, and scale.
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