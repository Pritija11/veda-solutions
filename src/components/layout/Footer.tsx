import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

// lucide-react dropped brand/logo icons, so LinkedIn and Facebook are inlined here.
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-8.14h2.73l.41-3.17h-3.14V7.71c0-.92.25-1.54 1.57-1.54h1.68V3.34C16.46 3.24 15.44 3.15 14.24 3.15c-2.5 0-4.21 1.53-4.21 4.33v2.41H7.29v3.17h2.74V21h3.47z" />
    </svg>
  );
}

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Work", href: "/work" },
      { label: "Industries", href: "/industries" },
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--foreground)] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center"
              aria-label="Veda Solutions Hub home"
            >
              <Image
                src="/images/logo.png"
                alt="Veda Solutions Hub"
                width={140}
                height={48}
                className="h-9 w-auto"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              Technology solutions for modern businesses. We build practical
              digital systems that help businesses grow, operate, and connect.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-white"
            >
              <span className="border-b border-transparent transition-colors group-hover:border-white">
                Start a conversation
              </span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Navigation */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold text-white">
                {group.title}
              </h2>

              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex text-sm text-white/55"
                    >
                      <span className="border-b border-transparent transition-all duration-300 group-hover:translate-x-1 group-hover:border-white/55">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h2 className="text-sm font-bold text-white">Contact</h2>

            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin size={15} className="mt-0.5 shrink-0 text-white/40" />
                Imadole, Lalitpur, Nepal
              </li>

              <li>
                <a
                  href="tel:015912345"
                  className="group flex items-center gap-2.5 text-sm text-white/55"
                >
                  <Phone size={15} className="shrink-0 text-white/40" />
                  <span className="border-b border-transparent transition-all duration-300 group-hover:translate-x-1 group-hover:border-white/55">
                    01-5912345
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello.vedasolutionshub@gmail.com"
                  className="group flex items-center gap-2.5 text-sm text-white/55"
                >
                  <Mail size={15} className="shrink-0 text-white/40" />
                  <span className="border-b border-transparent transition-all duration-300 group-hover:translate-x-1 group-hover:border-white/55">
                    hello@vedasolutionshub.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} Veda Solutions Hub. All rights
            reserved.
          </div>

          <div className="flex items-center gap-3">
            {/* Replace these hrefs with the real company profiles later */}
            <a
              href="#"
              aria-label="Veda Solutions Hub on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href="#"
              aria-label="Veda Solutions Hub on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <FacebookIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}