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
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#07111F]/85 px-4 py-3 backdrop-blur-xl sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
          aria-label="Veda Solutions Hub home"
        >
          <Image
            src="/images/logo.png"
            alt="Veda Solutions Hub"
            width={150}
            height={40}
            priority
            className="h-15 w-auto"
          />

          <span className="text-lg font-semibold tracking-tight">
            <span className="text-slate-100">Veda</span>{" "}
            <span className="text-teal-400">Solutions Hub</span>
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
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-teal-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}

                {active && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-teal-400" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={`hidden items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 md:flex ${
            pathname === "/contact"
              ? "bg-teal-400 text-[#07111F] shadow-lg shadow-teal-500/20"
              : "bg-teal-500 text-[#07111F] hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
          }`}
        >
          Talk to us
          <span>→</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#07111F]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
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
                  active
                    ? "bg-teal-500/10 text-teal-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors ${
              pathname === "/contact"
                ? "bg-teal-400 text-[#07111F]"
                : "bg-teal-500 text-[#07111F] hover:bg-teal-400"
            }`}
          >
            Talk to us →
          </Link>
        </div>
      </div>
    </header>
  );
}