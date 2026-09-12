import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Privacy Policy",
  "Read the privacy policy for Veda Solutions Hub, a technology startup and IT solutions company.",
  "/privacy",
);

export default function PrivacyPage() {
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
            Privacy Policy
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
              Veda Solutions Hub respects your privacy and is committed to
              protecting the information you provide when using our website
              and services. This Privacy Policy explains what information we
              may collect and how we may use it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              2. Information We Collect
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              When you contact us through our website, we may receive
              information such as your name, email address, company name, and
              the information included in your message.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              We may also collect basic technical information such as browser
              type, device information, and general website usage information
              when necessary to operate and improve our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              3. How We Use Information
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Information submitted through our website may be used to respond
              to inquiries, understand project requirements, communicate with
              you, and improve our services and website.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              We do not use personal information for purposes unrelated to the
              reason it was provided without appropriate notice or consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              4. Information Sharing
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              We do not sell personal information. Information may be shared
              with trusted service providers when necessary to operate our
              website, provide services, or communicate with customers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              5. Data Security
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              We take reasonable steps to protect information from unauthorized
              access, misuse, alteration, or disclosure. However, no method of
              transmitting or storing information online can be guaranteed to
              be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              6. Third-Party Services
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Our website may use third-party services for hosting, analytics,
              communication, or other website functionality. These services
              may process information according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              7. Your Choices
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              You may contact us if you have questions about information you
              have provided to Veda Solutions Hub or would like to understand
              how it is being used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              8. Changes to This Policy
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              9. Contact Us
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              If you have questions about this Privacy Policy, you can contact
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