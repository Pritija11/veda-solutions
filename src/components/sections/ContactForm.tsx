"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => setSubmitted(false), 2000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <div className="veda-tile bg-white p-6 sm:p-8 lg:p-10">
      <div className="chip bg-[#8FD4F2] text-[#24232B]">Veda / Contact</div>
      <h2 className="mt-5 font-[family-name:var(--font-sora)] text-2xl font-extrabold text-[#24232B] sm:text-3xl">
        Tell us what you&apos;re building
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#6B6A72]">Share a few details and we&apos;ll get back to you.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-bold text-[#24232B]">
              Name <span className="text-[#FF3B30]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl border-[1.5px] border-[#24232B]/20 bg-[#FFFDF7] px-4 py-3.5 text-sm text-[#24232B] outline-none transition-colors placeholder:text-[#6B6A72]/60 focus:border-[#4E7BFF]"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold text-[#24232B]">
              Email <span className="text-[#FF3B30]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border-[1.5px] border-[#24232B]/20 bg-[#FFFDF7] px-4 py-3.5 text-sm text-[#24232B] outline-none transition-colors placeholder:text-[#6B6A72]/60 focus:border-[#4E7BFF]"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-bold text-[#24232B]">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company name"
              className="w-full rounded-xl border-[1.5px] border-[#24232B]/20 bg-[#FFFDF7] px-4 py-3.5 text-sm text-[#24232B] outline-none transition-colors placeholder:text-[#6B6A72]/60 focus:border-[#4E7BFF]"
            />
          </div>

          <div>
            <label htmlFor="area" className="mb-2 block text-sm font-bold text-[#24232B]">
              What are you building?
            </label>
            <select
              id="area"
              name="area"
              defaultValue=""
              className="w-full appearance-none rounded-xl border-[1.5px] border-[#24232B]/20 bg-[#FFFDF7] px-4 py-3.5 text-sm text-[#24232B] outline-none transition-colors focus:border-[#4E7BFF]"
            >
              <option value="" disabled>
                Select an area
              </option>
              <option value="ai">AI & Intelligent Systems</option>
              <option value="cloud">Cloud & DevOps</option>
              <option value="software">Software Engineering</option>
              <option value="data">Data & Digital Intelligence</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-bold text-[#24232B]">
            Message <span className="text-[#FF3B30]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us about your project, challenge, or idea..."
            className="w-full resize-none rounded-xl border-[1.5px] border-[#24232B]/20 bg-[#FFFDF7] px-4 py-3.5 text-sm text-[#24232B] outline-none transition-colors placeholder:text-[#6B6A72]/60 focus:border-[#4E7BFF]"
          />
        </div>

        <button
          type="submit"
          className="tile-hover inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#24232B] px-6 py-3.5 text-sm font-bold text-white"
        >
          Start the conversation
          <ArrowRight className="arrow-shift h-4 w-4" />
        </button>

        {submitted && (
          <div className="rounded-xl border-[1.5px] border-[#24232B] bg-[#8CE8B8] px-5 py-4">
            <p className="text-sm font-bold text-[#24232B]">Message sent.</p>
            <p className="mt-1 text-sm leading-6 text-[#24232B]/70">
              Thanks for reaching out — we&apos;ll be in touch soon.
            </p>
          </div>
        )}

        <p className="text-center text-xs text-[#6B6A72]">
          By submitting this form, you&apos;re asking Veda Solutions Hub to respond to your enquiry.
        </p>
      </form>
    </div>
  );
}
