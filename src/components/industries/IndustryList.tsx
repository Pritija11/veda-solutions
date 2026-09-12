import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Factory,
  TrendingUp,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const industries = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Digital systems that help service businesses manage clients, workflows, communication, and day-to-day operations.",
    solutions: ["Business websites", "Client portals", "Internal systems"],
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Retail & Commerce",
    description:
      "Digital experiences that make it easier for customers to discover products, connect with businesses, and complete purchases.",
    solutions: ["E-commerce", "Product platforms", "Customer experiences"],
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Education",
    description:
      "Technology that supports institutions, educators, and learners through better access to information and digital services.",
    solutions: ["Learning platforms", "Management systems", "Web applications"],
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Clear and reliable digital systems designed to improve information access, communication, and operational workflows.",
    solutions: ["Web platforms", "Appointment systems", "Digital services"],
  },
  {
    number: "05",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Connected software solutions that help businesses organize operations, information, processes, and internal workflows.",
    solutions: ["Business software", "Dashboards", "Connected systems"],
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Growing Businesses",
    description:
      "Flexible digital solutions for businesses ready to improve their systems, reach more customers, and scale their operations.",
    solutions: ["Digital presence", "Custom software", "Automation"],
  },
];

export default function IndustryList() {
  return (
    <section
      id="industries"
      className="border-b border-[var(--border)] bg-[var(--white)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Section heading */}
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  Industries we serve
                </span>

                <span className="h-px w-8 bg-[var(--primary)]" />
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Technology that understands the context.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              We don't believe in forcing every business into the same
              solution. Our technology is shaped around the people, processes,
              and challenges that make each business different.
            </p>
          </div>
        </FadeUp>

        {/* Industry cards */}
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <FadeUp key={industry.number} delay={index * 0.06}>
                <Link
                  id={`industry-${industry.number}`}
                  href="/contact"
                  className="group flex h-full scroll-mt-28 flex-col rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-[var(--white)] hover:shadow-[0_20px_45px_rgba(17,20,23,0.07)] sm:p-7"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[0.14em] text-[var(--primary)]">
                      {industry.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-[var(--primary)]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-9">
                    <h3 className="text-xl font-bold tracking-tight">
                      {industry.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {industry.description}
                    </p>
                  </div>

                  {/* Solutions */}
                  <div className="mt-7 space-y-2 border-t border-[var(--border)] pt-5">
                    {industry.solutions.map((solution) => (
                      <div
                        key={solution}
                        className="flex items-center gap-2 text-xs font-semibold text-[var(--foreground)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                        {solution}
                      </div>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto flex items-center justify-between pt-8">
                    <span className="text-sm font-bold">
                      Explore possibilities
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-[var(--muted)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                    />
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}