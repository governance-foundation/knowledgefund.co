"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/model", label: "Model" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/governance", label: "Governance" },
  { href: "/coordination", label: "Coordination" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 border-b bg-slate-950/80 shadow-inner-glow backdrop-blur-md transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "border-white-border"
          : "border-white-fade"
      }`}
    >
      <div className="kf-container">
        <div className="flex h-16 max-h-[72px] items-center justify-between gap-6 lg:h-[72px]">
          <Link href="/" className="kf-display text-lg font-extrabold uppercase text-white">
            KnowledgeFund
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-500 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link
              href="/contact"
              className="rounded-md border border-white-border px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5 active:scale-95"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-brand-blue px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#2453e8] hover:shadow-soft-blue active:scale-95"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-md border border-white-border text-slate-400"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation"
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-navigation" className="border-t border-white-border bg-slate-950/95 backdrop-blur-md lg:hidden">
          <div className="kf-container flex flex-col gap-1 py-4">
            <div className="mb-3">
              <ThemeToggle />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-brand-blue px-4 py-3 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
