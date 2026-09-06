import {
  Lightbulb,
  Layers3,
  Workflow,
  ShieldCheck,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  {
    icon: Lightbulb,
    title: "Practical innovation",
    description:
      "We focus on technology that solves meaningful problems rather than adding complexity for its own sake.",
  },
  {
    icon: Layers3,
    title: "Connected thinking",
    description:
      "AI, cloud, software, and data work better together. We look at the bigger digital ecosystem behind every solution.",
  },
  {
    icon: Workflow,
    title: "Built to evolve",
    description:
      "Our solutions are designed with maintainability, scalability, and future requirements in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible engineering",
    description:
      "Security, reliability, and thoughtful technology choices are considered throughout the solution lifecycle.",
  },
];

export default function WhyVeda() {
  return (
    <section className="bg-[#07111F] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Heading */}
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Why Veda"
              title="Technology should connect ideas, not create more complexity."
              description="We bring different areas of technology together to create digital solutions that are useful today and ready for tomorrow."
            />

            <div className="mt-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400">
                <span className="h-px w-8 bg-teal-400" />
                Intelligence through connection
              </span>
            </div>
          </div>

          {/* Principles */}
          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="group rounded-2xl border border-[#1E334A] bg-[#0B1728] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-[#0F1F32]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-500/10">
                      <Icon className="h-5 w-5 text-teal-400" />
                    </div>

                    <span className="text-xs font-semibold tracking-widest text-slate-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-slate-100">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}