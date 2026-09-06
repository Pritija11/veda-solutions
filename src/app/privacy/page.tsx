import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "Read the privacy policy for Veda Solutions Hub and learn how information submitted through our website may be handled.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <section className="bg-[#07111F] pt-36 pb-24 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-teal-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-500/5 px-4 py-2">
            <ShieldCheck className="h-4 w-4 text-teal-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
              Privacy
            </span>
          </div>

          <h1 className="mt-7 font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 text-sm text-slate-500">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-14 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              1. Introduction
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              Veda Solutions Hub respects your privacy. This Privacy Policy
              explains how information may be collected and handled when you
              use our website or contact us through the available enquiry
              channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              2. Information you provide
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              If you contact Veda Solutions Hub through our website, you may
              provide information such as your name, email address, company
              name, area of interest, and the details included in your
              message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              3. How information may be used
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              Information submitted through the website may be used to
              understand your enquiry, communicate with you, respond to
              requests, and provide information related to the services or
              solutions you have asked about.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              4. Information security
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              We take reasonable steps to protect information handled through
              our website. However, no method of transmitting or storing
              information online can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              5. Third-party services
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              Our website or future website functionality may use third-party
              services to support hosting, analytics, communication, security,
              or other technical functionality. Those services may process
              information according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              6. Cookies and similar technologies
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              The website may use cookies or similar technologies when needed
              for functionality, security, analytics, or other website
              operations. The specific technologies used may change as the
              website develops.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              7. Your choices
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              You can choose what information you provide when contacting us.
              You should avoid submitting information that is unnecessary for
              your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              8. Changes to this policy
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              This Privacy Policy may be updated as our website, services, or
              information practices change. The updated version will be
              published on this page with a revised update date.
            </p>
          </section>

          <section className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7">
            <h2 className="text-xl font-semibold text-slate-100">
              Questions about privacy?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              If you have a question about information submitted through the
              website, please contact Veda Solutions Hub through our enquiry
              page.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition-colors hover:text-teal-300"
            >
              Contact us
              <span>→</span>
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}