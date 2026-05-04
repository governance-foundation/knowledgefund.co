import Link from "next/link";

const footerLinks = [
  { href: "/governance", label: "Privacy Policy" },
  { href: "/governance", label: "Terms of Service" },
  { href: "/architecture", label: "Security Architecture" },
  { href: "mailto:knowledgefund@gmail.com", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-white/5 bg-[#09090b] px-4 font-display sm:px-7 lg:px-12"
      style={{ paddingBlock: 64 }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 min-[720px]:flex-row">
        <div className="flex flex-col items-center gap-4 min-[720px]:items-start">
          <Link href="/" className="text-sm font-black uppercase text-slate-100 lg:text-lg">
            Knowledge Fund
          </Link>
          <p className="text-center text-[9px] normal-case text-slate-500 min-[720px]:text-left lg:text-xs">
            © 2026 Knowledge Fund. All sovereign rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-5 text-center text-[8px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:gap-8 lg:text-[10px]">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="opacity-80 transition-colors hover:text-[#2e62ff] hover:opacity-100">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
