import Link from "next/link";
import { ArrowUpRight, Globe2, Monitor, ShoppingCart, LayoutDashboard } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const features = [
  {
    icon: Monitor,
    title: "Business websites",
    description:
      "Professional websites that communicate your brand clearly and help customers find and trust your business.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Online stores designed to make browsing, purchasing, and managing products simple.",
  },
  {
    icon: LayoutDashboard,
    title: "Customer portals",
    description:
      "Secure digital spaces where customers can access services, information, and business tools.",
  },
];

export default function WebSolutions() {
  return (
    <section
      id="web"
      className="border-b border-[var(--border)] bg-[var(--white)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Section heading */}
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <span className="text-xs">01</span>
                <span className="h-px w-8 bg-[var(--primary)]" />
                Web & Digital
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Digital experiences that represent your business.
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                Your website is often the first interaction customers have
                with your business. We create fast, responsive, and purposeful
                digital experiences that look professional and work smoothly
                across every device.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--foreground)]"
              >
                Discuss your website
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </FadeUp>

        {/* Main visual + features */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:mt-20">
          {/* Website preview */}
          <FadeUp delay={0.1}>
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--background)] p-5 sm:p-7">
              <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[var(--primary-soft)]" />

              <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--white)] shadow-[0_20px_60px_rgba(17,20,23,0.07)]">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                  </div>

                  <div className="hidden h-2 w-28 rounded-full bg-[var(--border)] sm:block" />
                </div>

                {/* Website UI */}
                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--primary)] text-xs font-bold text-[var(--white)]">
                        V
                      </div>

                      <div className="h-2 w-20 rounded-full bg-[var(--foreground)] opacity-80" />
                    </div>

                    <div className="hidden gap-4 sm:flex">
                      <span className="h-1.5 w-10 rounded-full bg-[var(--border)]" />
                      <span className="h-1.5 w-10 rounded-full bg-[var(--border)]" />
                      <span className="h-1.5 w-10 rounded-full bg-[var(--border)]" />
                    </div>

                    <div className="h-7 w-16 rounded-full bg-[var(--foreground)]" />
                  </div>

                  <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_0.8fr] sm:items-center">
                    <div>
                      <div className="h-3 w-24 rounded-full bg-[var(--primary-soft)]" />

                      <div className="mt-4 h-7 w-full max-w-[260px] rounded-md bg-[var(--foreground)] opacity-90" />

                      <div className="mt-2 h-7 w-4/5 max-w-[210px] rounded-md bg-[var(--foreground)] opacity-90" />

                      <div className="mt-5 h-3 w-full max-w-[230px] rounded-full bg-[var(--border)]" />
                      <div className="mt-2 h-3 w-4/5 max-w-[190px] rounded-full bg-[var(--border)]" />

                      <div className="mt-6 h-9 w-28 rounded-full bg-[var(--primary)]" />
                    </div>

                    <div className="relative mx-auto h-40 w-full max-w-[230px] overflow-hidden rounded-2xl bg-[var(--primary-soft)]">
                      <div className="absolute bottom-5 left-5 h-24 w-24 rounded-full border-[14px] border-[var(--primary)]" />

                      <div className="absolute right-5 top-5 h-12 w-20 rounded-xl bg-[var(--white)] shadow-sm" />

                      <div className="absolute bottom-4 right-8 h-16 w-8 rounded-t-full bg-[var(--primary)] opacity-80" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--white)] px-4 py-2 text-xs font-semibold shadow-sm sm:bottom-7 sm:left-7">
                <Globe2 size={14} className="text-[var(--primary)]" />
                Responsive by default
              </div>
            </div>
          </FadeUp>

          {/* Features */}
          <Stagger className="grid gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <FadeUp key={feature.title}>
                  <div className="group h-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_16px_40px_rgba(17,20,23,0.06)] sm:p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                          className="text-[var(--primary)]"
                        />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--primary)]"
                      />
                    </div>

                    <h3 className="mt-6 text-lg font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {feature.description}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}