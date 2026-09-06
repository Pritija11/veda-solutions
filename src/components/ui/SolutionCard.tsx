import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type SolutionCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

export default function SolutionCard({
  number,
  title,
  description,
  href,
  featured = false,
}: SolutionCardProps) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-2xl border p-7 transition-all duration-300 ${
        featured
          ? "border-teal-400/30 bg-[#0F1F32] hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-xl hover:shadow-teal-500/10"
          : "border-[#1E334A] bg-[#0B1728] hover:-translate-y-1 hover:border-teal-400/40 hover:bg-[#0F1F32]"
      }`}
    >
      {/* Decorative hub circle */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full border border-teal-400/10 transition-transform duration-500 group-hover:scale-125" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold ${
              featured
                ? "bg-teal-500/15 text-teal-400"
                : "bg-white/5 text-slate-500"
            }`}
          >
            {number}
          </span>

          <ArrowUpRight className="h-5 w-5 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal-400" />
        </div>

        <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-100">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-teal-400">
          Explore solution
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}