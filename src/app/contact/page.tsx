import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { createPageMetadata } from "@/lib/seo";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = createPageMetadata(
  "Contact",
  "Contact Veda Solutions Hub, a technology startup in Kathmandu building AI, cloud, software, data, cybersecurity, and digital solutions.",
  "/contact",
);

const contactDetails = [
  {
    icon: MapPin,
    label: "Location",
    value: "Sankhamul, Kathmandu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "016643210",
    href: "tel:016643210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Contact us through the enquiry form",
  },
  {
    icon: Clock3,
    label: "Enquiries",
    value: "We will respond to your enquiry as soon as possible.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07111F] pt-36 pb-24 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-20 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-500/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
                Contact Veda
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              Let&apos;s talk about
              <span className="block text-teal-400">
                what you&apos;re building.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Have a digital challenge, an idea you want to explore, or a
              technology problem that needs a clearer direction? Tell us about
              it and we&apos;ll start from there.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1728] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              Start a conversation
            </p>

            <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
              Tell us what you need.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">
              You don&apos;t need to have everything figured out before
              reaching out. Share your goals, challenge, or idea and we can
              explore the right direction together.
            </p>

            <div className="mt-10 space-y-6">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                const content = (
                  <>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-500/10">
                      <Icon className="h-5 w-5 text-teal-400" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {detail.label}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {detail.value}
                      </p>
                    </div>
                  </>
                );

                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="flex gap-4 rounded-xl transition-colors hover:text-teal-400"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={detail.label} className="flex gap-4">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-[#1E334A] bg-[#07111F] p-6">
              <p className="text-sm font-semibold text-slate-200">
                What can we discuss?
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "AI",
                  "Cloud & DevOps",
                  "Software",
                  "Data",
                  "Cybersecurity",
                  "Digital Consulting",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-[#07111F] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
            Explore first
          </p>

          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl">
            Want to understand what we do?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Explore our technology capabilities before starting a conversation.
          </p>

          <Link
            href="/solutions"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-[#1E334A] bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-teal-400/30 hover:bg-teal-500/5 hover:text-teal-400"
          >
            Explore our solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}