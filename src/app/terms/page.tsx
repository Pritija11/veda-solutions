import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Terms of Service",
  "Read the terms of service for Veda Solutions Hub, a technology startup and IT solutions company.",
  "/terms",
);

export default function TermsPage() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-24 lg:py-28">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] hover:text-[var(--primary)]"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to home
        </Link>

        <div className="mt-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-sm text-[var(--muted)]">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">
              1. Introduction
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              These Terms & Conditions govern your use of the Veda Solutions
              Hub website. By using this website, you agree to follow these
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              2. Our Services
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Veda Solutions Hub provides technology and IT solutions including
              web development, business software, mobile applications, AI and
              automation, and cloud and IT services.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Specific project services, requirements, timelines, and pricing
              may be agreed separately with each client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              3. Website Use
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              You agree to use this website only for lawful purposes. You must
              not attempt to interfere with the website, gain unauthorized
              access, or use the website in a way that could damage its
              operation or security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              4. Intellectual Property
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Unless otherwise stated, the content, branding, design, text,
              graphics, and other materials on this website belong to Veda
              Solutions Hub or are used with appropriate permission.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Website content may not be copied, reproduced, or redistributed
              without appropriate permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              5. Project Agreements
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Client projects may have separate agreements covering scope,
              deliverables, payment, ownership, maintenance, timelines, and
              other project-specific requirements.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Where a separate agreement exists, its terms will apply to the
              relevant project.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              6. Third-Party Services
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Some projects may depend on third-party platforms, APIs,
              hosting providers, software, or other services. Their
              availability and terms are controlled by the respective
              providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              7. Information on This Website
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              We aim to keep the information on this website useful and
              accurate. However, website content may change over time and
              should not be considered a guarantee of specific project
              outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              8. Limitation of Liability
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              To the extent permitted by applicable law, Veda Solutions Hub is
              not responsible for losses resulting from the use or inability to
              use this website or from reliance on general information
              provided through the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              9. Changes to These Terms
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              We may update these Terms & Conditions when necessary. Updated
              terms will be published on this page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              10. Contact Us
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              If you have questions about these Terms & Conditions, contact
              Veda Solutions Hub at{" "}
              <a
                href="mailto:hello.vedasolutionshub@gmail.com"
                className="font-semibold text-[var(--foreground)] hover:text-[var(--primary)]"
              >
                hello.vedasolutionshub@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}