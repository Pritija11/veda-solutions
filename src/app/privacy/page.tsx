import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "Read the privacy policy for Veda Solutions Hub and learn how information submitted through our website may be handled.",
  "/privacy",
);

const sections = [
  { title: "1. Introduction", body: "Veda Solutions Hub respects your privacy. This Privacy Policy explains how information may be collected and handled when you use our website or contact us through the available enquiry channels." },
  { title: "2. Information you provide", body: "If you contact Veda Solutions Hub through our website, you may provide information such as your name, email address, company name, area of interest, and the details included in your message." },
  { title: "3. How information may be used", body: "Information submitted through the website may be used to understand your enquiry, communicate with you, respond to requests, and provide information related to the solutions you have asked about." },
  { title: "4. Information security", body: "We take reasonable steps to protect information handled through our website. However, no method of transmitting or storing information online can be guaranteed to be completely secure." },
  { title: "5. Third-party services", body: "Our website may use third-party services to support hosting, analytics, communication, security, or other technical functionality. Those services may process information according to their own privacy policies." },
  { title: "6. Cookies and similar technologies", body: "The website may use cookies or similar technologies when needed for functionality, security, analytics, or other website operations. The specific technologies used may change as the website develops." },
  { title: "7. Your choices", body: "You can choose what information you provide when contacting us. You should avoid submitting information that is unnecessary for your enquiry." },
  { title: "8. Changes to this policy", body: "This Privacy Policy may be updated as our website, solutions, or information practices change. The updated version will be published on this page with a revised update date." },
];

export default function PrivacyPage() {
  return (
    <section className="bg-[#FFFDF7] pb-24 pt-[150px] sm:pt-[168px]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#6B6A72] hover:text-[#24232B]">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Reveal className="mt-8">
          <div className="tech-label text-[#6B6A72]">Legal</div>
          <h1 className="mt-6 font-[family-name:var(--font-sora)] text-4xl font-extrabold text-[#24232B] sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-sm text-[#6B6A72]">Last updated: September 2026</p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 30, 200)}>
              <section>
                <h2 className="font-[family-name:var(--font-sora)] text-2xl font-extrabold text-[#24232B]">{s.title}</h2>
                <p className="mt-4 leading-8 text-[#6B6A72]">{s.body}</p>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <section className="veda-tile-soft p-7">
              <h2 className="font-[family-name:var(--font-sora)] text-xl font-extrabold text-[#24232B]">Questions about privacy?</h2>
              <p className="mt-3 text-sm leading-7 text-[#6B6A72]">
                If you have a question about information submitted through the website, please contact Veda
                Solutions Hub through our enquiry page.
              </p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#4E7BFF]">
                Contact us →
              </Link>
            </section>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
