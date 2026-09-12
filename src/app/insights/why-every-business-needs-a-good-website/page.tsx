import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Why Every Business Needs a Good Website",
  "Why a well-built website matters for customer trust and growth — practical advice from Veda Solutions Hub, a technology startup building web solutions.",
  "/insights/why-every-business-needs-a-good-website",
);

export default function WebsiteArticle() {
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

        <div className="mt-12">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
            Web Development
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Why Every Business Needs a Good Website
          </h1>

          <div className="mt-6 flex items-center gap-3 text-sm text-[var(--muted)]">
            <span>Veda Solutions Hub</span>

            <span className="h-1 w-1 rounded-full bg-[var(--border)]" />

            <span className="flex items-center gap-2">
              <Clock3 size={15} />
              4 min read
            </span>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] bg-[var(--foreground)] p-8 text-white sm:p-12">
          <p className="text-lg font-semibold leading-8 text-white/80 sm:text-xl">
            A website is often the first place customers learn about a
            business. It can help people understand what you offer, find
            important information, and contact you easily.
          </p>
        </div>

        <div className="prose mt-12 max-w-none">
          <section>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Your customers are online
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              When people hear about a business, one of the first things they
              often do is search for it online. A website gives your business
              a place where customers can learn about your services, products,
              location, and contact information.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              A website builds trust
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              A clear and well-organized website can make a business look
              professional and trustworthy. It also gives customers useful
              information before they decide to contact or buy from a
              business.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              It makes information easier to find
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Instead of answering the same basic questions again and again,
              businesses can provide important information on their website.
              Services, prices, opening hours, contact details, and frequently
              asked questions can all be available in one place.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              A good website does not need to be complicated
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Not every business needs a large website with dozens of pages.
              What matters is that the website is easy to use, works well on
              phones, loads properly, and gives visitors the information they
              need.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Final thoughts
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              A business website is more than just an online brochure. It is a
              simple way to introduce your business, help customers find you,
              and make it easier for people to get in touch.
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-[var(--border)] pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white hover:opacity-90"
          >
            Need a website?
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}