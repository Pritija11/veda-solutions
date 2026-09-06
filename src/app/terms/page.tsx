import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Terms of Use",
  "Read the terms of use for the Veda Solutions Hub website and understand the general conditions for using our website and its content.",
  "/terms",
);

export default function TermsPage() {
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
            <FileText className="h-4 w-4 text-teal-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
              Legal
            </span>
          </div>

          <h1 className="mt-7 font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl">
            Terms of Use
          </h1>

          <p className="mt-6 text-sm text-slate-500">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-14 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              1. Acceptance of these terms
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              By accessing or using the Veda Solutions Hub website, you agree
              to use the website responsibly and in accordance with these
              Terms of Use. If you do not agree with these terms, please do not
              use the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              2. Website content
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              The content published on this website is provided for general
              informational purposes. We aim to keep information useful and
              accurate, but website content may change as our services,
              capabilities, and business develop.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              3. Intellectual property
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              Unless otherwise stated, content created for and published on
              this website, including text, branding, graphics, and other
              materials, belongs to or is used by Veda Solutions Hub and
              should not be reproduced, distributed, or modified without
              appropriate permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              4. Acceptable use
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              You agree not to use the website in a way that could damage,
              disrupt, overload, or interfere with the website or its
              infrastructure. You should not attempt to gain unauthorized
              access to systems, data, or functionality that is not intended
              for public use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              5. External services and links
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              The website may reference or eventually integrate third-party
              services. Veda Solutions Hub is not responsible for the content,
              availability, security, or policies of external websites or
              services that are outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              6. No guarantee of uninterrupted availability
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              We aim to keep the website available and functional, but we do
              not guarantee that it will always be uninterrupted, error-free,
              or available at every time. Maintenance, technical issues, or
              circumstances outside our control may affect availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              7. Information submitted through the website
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              Information submitted through our contact or enquiry forms
              should be accurate and relevant to your request. Please do not
              submit confidential information that is not necessary for us to
              understand or respond to your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100">
              8. Changes to these terms
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              These Terms of Use may be updated when our website, services, or
              business practices change. Any updated version will be published
              on this page with a revised update date.
            </p>
          </section>

          <section className="rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7">
            <h2 className="text-xl font-semibold text-slate-100">
              Questions about these terms?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              If you have questions about these Terms of Use or how they apply
              to the website, please contact Veda Solutions Hub.
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