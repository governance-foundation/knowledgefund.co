"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "border-white/10 bg-[#09090b]/88 backdrop-blur-xl"
          : "border-white/5 bg-[#09090b]/62 backdrop-blur-md"
      }`}
    >
      <div className="kf-container">
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <Link href="/" className="kf-display text-lg font-extrabold uppercase text-white">
            KnowledgeFund
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#8d90a2] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-[#2e62ff] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#2453e8] hover:shadow-[0_0_24px_rgba(46,98,255,0.32)]"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-[#c3c5d8] lg:hidden"
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

      {mobileOpen && (
        <nav id="mobile-navigation" className="border-t border-white/10 bg-[#09090b]/96 lg:hidden">
          <div className="kf-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-sm font-medium text-[#c3c5d8] hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-[#2e62ff] px-4 py-3 text-center text-sm font-semibold text-white"
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
