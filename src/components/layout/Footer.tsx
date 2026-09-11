import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { companyNavigation, legalNavigation, solutionNavigation } from "@/data/navigation";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer className="bg-[#24232B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <Reveal variant="assemble-left" className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Veda Solutions Hub home">
              <Image src="/images/logo-1.png" alt="Veda Solutions Hub" width={36} height={43} className="h-9 w-auto" />
              <span className="font-[family-name:var(--font-sora)] text-lg font-bold tracking-tight text-white">
                Veda <span className="text-[#8FD4F2]">Solutions Hub</span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Veda Solutions Hub is a technology startup building intelligent digital systems across AI, software,
              cloud and data.
            </p>

            
          </Reveal>

          {/* Solutions */}
          <Reveal delay={80}>
            <h3 className="tech-label text-white/50">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#28AFA3]" />
              Solutions
            </h3>
            <ul className="mt-5 space-y-3">
              {solutionNavigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-[#8FD4F2]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Company */}
          <Reveal delay={140}>
            <h3 className="tech-label text-white/50">Company</h3>
            <ul className="mt-5 space-y-3">
              {companyNavigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-[#8FD4F2]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Get in touch */}
          <Reveal variant="assemble-right" delay={200}>
            <h3 className="tech-label text-white/50">Get in touch</h3>
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/60">
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-white/40" />
                Baneshwor, Kathmandu
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-white/40" />
                01-4123456
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-white/40" />
                hello@vedasolutionshub.com
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span
                aria-label="LinkedIn"
                title="LinkedIn"
                className="tile-hover flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-xs font-bold text-white/70"
              >
                in
              </span>
              <span
                aria-label="X"
                title="X"
                className="tile-hover flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-sm text-white/70"
              >
                𝕏
              </span>
              <span
                aria-label="Facebook"
                title="Facebook"
                className="tile-hover flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-xs font-bold text-white/70"
              >
                f
              </span>
            </div>
          </Reveal>
        </div>

        {/* Bottom */}
        <Reveal delay={260}>
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p className="tech-label text-white/40">VEDA SOLUTIONS HUB / TECHNOLOGY STARTUP</p>
            <div className="flex gap-5">
              {legalNavigation.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
