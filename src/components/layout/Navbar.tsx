"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { mainNavigation } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex h-[74px] max-w-7xl items-center justify-between rounded-2xl border border-[#24232B] bg-[#FFFDF7]/92 px-4 py-3 backdrop-blur-xl sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2.5"
          aria-label="Veda Solutions Hub home"
        >
          <Image src="/images/logo-1.png" alt="Veda Solutions Hub" width={36} height={43} priority className="h-9 w-auto" />

          <span className="font-[family-name:var(--font-sora)] text-base font-bold tracking-tight text-[#24232B]">
            Veda <span className="text-[#4E7BFF]">Solutions Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {mainNavigation.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[15px] font-medium transition-colors duration-200 ${
                  active ? "text-[#4E7BFF]" : "text-[#6B6A72] hover:text-[#24232B]"
                }`}
              >
                {link.label}
                {active && <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#4E7BFF]" />}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={`hidden items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-200 md:flex ${
            pathname === "/contact" ? "bg-[#FF7043] text-white" : "bg-[#24232B] text-white hover:bg-[#FF7043]"
          }`}
        >
          Contact
          <span>↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#24232B] bg-white text-[#24232B] transition-colors hover:bg-[#8FD4F2]/25 md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`mx-4 mt-2 overflow-hidden rounded-2xl border border-[#24232B] bg-white transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col p-3">
          {mainNavigation.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active ? "bg-[#4E7BFF]/10 text-[#4E7BFF]" : "text-[#6B6A72] hover:bg-[#8FD4F2]/20 hover:text-[#24232B]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`mt-2 rounded-xl px-4 py-3 text-center text-sm font-bold text-white transition-colors ${
              pathname === "/contact" ? "bg-[#FF7043]" : "bg-[#24232B] hover:bg-[#FF7043]"
            }`}
          >
            Contact ↗
          </Link>
        </div>
      </div>
    </header>
  );
}
