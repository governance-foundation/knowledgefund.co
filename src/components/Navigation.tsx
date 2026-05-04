"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Platform" },
  { href: "/governance", label: "Governance" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/about", label: "Company" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-10 border-b border-white/10 bg-[#09090b]/80 font-display backdrop-blur-xl lg:h-16">
      <div className="flex h-full w-full items-center justify-between" style={{ paddingInline: 32 }}>
        <div className="flex min-w-0 items-center gap-5 sm:gap-8">
          <Link href="/" className="shrink-0 text-xs font-bold uppercase text-slate-50 lg:text-xl">
            Knowledge Fund
          </Link>

          <nav className="hidden items-center gap-6 min-[720px]:flex">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[8px] font-semibold transition-colors lg:text-xs ${
                    isActive ? "text-[#2e62ff]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="mailto:knowledgefund@gmail.com"
            className="hidden text-xs font-medium text-slate-400 transition-colors hover:text-white sm:inline-flex"
          >
            Sign In
          </Link>
          <Link
            href="mailto:knowledgefund@gmail.com"
            className="stitch-nav-action"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
