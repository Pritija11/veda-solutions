"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const services = [
  "AI Solutions",
  "Cloud & DevOps",
  "Software Solutions",
  "Data Solutions",
  "Cybersecurity",
  "Digital Consulting",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[560px] items-center justify-center rounded-3xl border border-teal-400/20 bg-[#07111F] p-8 text-center sm:p-12">
        <div className="max-w-md">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-500/10">
            <CheckCircle2 className="h-8 w-8 text-teal-400" />
          </div>

          <h2 className="mt-7 text-2xl font-semibold text-slate-100">
            Thanks for reaching out.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Your enquiry has been received. We&apos;ll review the details and
            get back to you as soon as possible.
          </p>

          <button
            type="button"
            onClick={() => {
              setForm(initialForm);
              setSubmitted(false);
            }}
            className="mt-8 inline-flex items-center justify-center rounded-xl border border-[#1E334A] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-teal-400/30 hover:bg-teal-500/5 hover:text-teal-400"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#1E334A] bg-[#07111F] p-6 sm:p-8 lg:p-10"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
          Send us a message
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Share a few details about what you&apos;re looking for.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Name <span className="text-teal-400">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-[#1E334A] bg-[#0B1728] px-4 py-3.5 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/20"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Email <span className="text-teal-400">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[#1E334A] bg-[#0B1728] px-4 py-3.5 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/20"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Company
          </label>

          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            autoComplete="organization"
            placeholder="Company name"
            className="w-full rounded-xl border border-[#1E334A] bg-[#0B1728] px-4 py-3.5 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/20"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Area of interest
          </label>

          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full appearance-none rounded-xl border border-[#1E334A] bg-[#0B1728] px-4 py-3.5 text-sm text-slate-100 outline-none transition-colors focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/20"
          >
            <option value="" className="bg-[#0B1728]">
              Select an area
            </option>

            {services.map((service) => (
              <option
                key={service}
                value={service}
                className="bg-[#0B1728]"
              >
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Message <span className="text-teal-400">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={7}
          placeholder="Tell us about your project, challenge, or idea..."
          className="w-full resize-none rounded-xl border border-[#1E334A] bg-[#0B1728] px-4 py-3.5 text-sm leading-7 text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/20"
        />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-slate-600">
          By submitting this form, you are asking Veda Solutions Hub to
          respond to your enquiry.
        </p>

        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-500 px-7 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-200 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
        >
          Send enquiry
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}