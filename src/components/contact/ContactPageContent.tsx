"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    event.currentTarget.reset();
  };

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [submitted]);

  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Hero */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
              <span className="text-xs font-bold uppercase tracking-[0.14em]">
                Contact
              </span>

              <span className="h-px w-8 bg-[var(--primary)]" />

              Let's talk
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Have a project in mind?
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              Tell us what you are working on, what problem you want to solve,
              or what kind of technology support you need.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--white)] p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                  <MapPin size={19} className="text-[var(--primary)]" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Office
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Imadole, Lalitpur, Nepal
                  </p>
                </div>
              </div>

              <a
                href="tel:015912345"
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--white)] p-5 hover:border-[var(--primary)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                  <Phone size={19} className="text-[var(--primary)]" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-semibold group-hover:text-[var(--primary)]">
                    01-5912345
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello.vedasolutionshub@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--white)] p-5 hover:border-[var(--primary)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                  <Mail size={19} className="text-[var(--primary)]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold group-hover:text-[var(--primary)]">
                    hello@vedasolutionshub.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--white)] p-7 sm:p-10 lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                Start a conversation
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">
                Tell us about your project
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-bold"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-bold"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--primary)]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="text-sm font-bold"
                >
                  Company
                  <span className="ml-2 font-medium text-[var(--muted)]">
                    Optional
                  </span>
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--primary)]"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="text-sm font-bold"
                >
                  What do you need help with?
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--primary)]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="web">Web Development</option>
                  <option value="software">Business Software</option>
                  <option value="mobile">Mobile Application</option>
                  <option value="ai">AI & Automation</option>
                  <option value="cloud">Cloud & IT</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-bold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about your project..."
                  className="mt-2 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--primary)]"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-6 py-4 text-sm font-bold text-white hover:opacity-90"
              >
                Send message

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="flex items-center gap-3 rounded-xl border border-[var(--primary)] bg-[var(--primary-soft)] px-4 py-3.5 text-sm font-semibold text-[var(--foreground)]">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[var(--primary)]"
                  />

                  Thanks! Your message has been submitted.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 border-t border-[var(--border)] pt-10 sm:mt-24">
          <p className="max-w-3xl text-2xl font-bold leading-9 tracking-tight sm:text-3xl sm:leading-10">
            Good technology starts with a clear understanding of the problem.
          </p>
        </div>
      </div>
    </section>
  );
}
