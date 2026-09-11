import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata = createPageMetadata(
  "Terms of Use",
  "Read the terms of use for the Veda Solutions Hub website and understand the general conditions for using our website and its content.",
  "/terms",
);

const sections = [
  { title: "1. Acceptance of these terms", body: "By accessing or using the Veda Solutions Hub website, you agree to use the website responsibly and in accordance with these Terms of Use. If you do not agree with these terms, please do not use the website." },
  { title: "2. Website content", body: "The content published on this website is provided for general informational purposes. We aim to keep information useful and accurate, but website content may change as our solutions and business develop." },
  { title: "3. Intellectual property", body: "Unless otherwise stated, content created for and published on this website, including text, branding, graphics, and other materials, belongs to or is used by Veda Solutions Hub and should not be reproduced, distributed, or modified without appropriate permission." },
  { title: "4. Acceptable use", body: "You agree not to use the website in a way that could damage, disrupt, overload, or interfere with the website or its infrastructure. You should not attempt to gain unauthorized access to systems, data, or functionality that is not intended for public use." },
  { title: "5. External services and links", body: "The website may reference or eventually integrate third-party services. Veda Solutions Hub is not responsible for the content, availability, security, or policies of external websites or services that are outside our control." },
  { title: "6. No guarantee of uninterrupted availability", body: "We aim to keep the website available and functional, but we do not guarantee that it will always be uninterrupted, error-free, or available at every time." },
  { title: "7. Information submitted through the website", body: "Information submitted through our contact or enquiry forms should be accurate and relevant to your request. Please do not submit confidential information that is not necessary for us to understand or respond to your enquiry." },
  { title: "8. Changes to these terms", body: "These Terms of Use may be updated when our website, solutions, or business practices change. Any updated version will be published on this page with a revised update date." },
];

export default function TermsPage() {
  return (
    <section className="bg-[#FFFDF7] pb-24 pt-[150px] sm:pt-[168px]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#6B6A72] hover:text-[#24232B]">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Reveal className="mt-8">
          <div className="tech-label text-[#6B6A72]">Legal</div>
          <h1 className="mt-6 font-[family-name:var(--font-sora)] text-4xl font-extrabold text-[#24232B] sm:text-5xl">Terms of Use</h1>
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
              <h2 className="font-[family-name:var(--font-sora)] text-xl font-extrabold text-[#24232B]">Questions about these terms?</h2>
              <p className="mt-3 text-sm leading-7 text-[#6B6A72]">
                If you have questions about these Terms of Use or how they apply to the website, please contact
                Veda Solutions Hub.
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
