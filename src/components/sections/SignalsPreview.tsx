import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { insights } from "@/data/insights";

const categoryColor: Record<string, string> = {
  AI: "var(--powder-blue)",
  CLOUD: "var(--soft-mint)",
  SOFTWARE: "var(--butter-yellow)",
  DATA: "var(--soft-apricot)",
  SYSTEMS: "var(--baby-pink)",
};

export default function SignalsPreview() {
  const [featured, ...rest] = insights;

  return (
    <section className="bg-[#FFFDF7] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="tech-label text-[#6B6A72]">08 / Veda Signals</div>
              <h2 className="mt-5 font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[1.08] text-[#24232B] sm:text-5xl">
                Ideas we&apos;re exploring.
              </h2>
            </div>
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-bold text-[#24232B]">
              All signals
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <Link
              href={`/insights/${featured.slug}`}
              className="veda-tile tile-hover group flex h-full flex-col justify-between p-9"
              style={{ backgroundColor: categoryColor[featured.category] }}
            >
              <div className="flex items-start justify-between">
                <span className="tech-label text-[#24232B]/60">{featured.category} / {featured.number}</span>
                <span className="font-[family-name:var(--font-sora)] text-5xl font-extrabold text-[#24232B]/20">01</span>
              </div>
              <div className="mt-10">
                <h3 className="font-[family-name:var(--font-sora)] text-3xl font-extrabold leading-tight text-[#24232B]">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#24232B]/75">{featured.excerpt}</p>
                <span className="arrow-shift mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#24232B]">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-3">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={i * 80}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="tile-hover group flex items-center gap-4 rounded-2xl border-[1.5px] border-[#24232B] bg-white p-5"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-[#24232B]"
                    style={{ backgroundColor: categoryColor[article.category] }}
                  >
                    {article.number}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-[#24232B]">{article.title}</p>
                    <span className="tech-label text-[#6B6A72]">{article.category}</span>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#6B6A72] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
