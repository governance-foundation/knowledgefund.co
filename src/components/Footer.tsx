import Link from "next/link";

const footerSections = [
  {
    heading: "Product",
    links: [
      { href: "/model", label: "Model" },
      { href: "/use-cases", label: "Use Cases" },
      { href: "/governance", label: "Governance" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/coordination", label: "Coordination" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Trust",
    links: [
      { href: "/governance", label: "SOC 2 Alignment" },
      { href: "/governance", label: "ISO 27001" },
      { href: "/governance", label: "AI Safety" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b]">
      <div className="kf-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="kf-display block text-lg font-extrabold uppercase text-white">
              KnowledgeFund
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#8d90a2]">
              The governed knowledge foundation for organisations that need AI to be useful,
              secure, accountable, and aligned with the business mission.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.heading}>
              <h2 className="kf-mono text-xs font-semibold uppercase text-white">{section.heading}</h2>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={`${section.heading}-${link.label}`}>
                    <Link href={link.href} className="text-sm text-[#8d90a2] transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-[#8d90a2] md:flex-row md:items-center md:justify-between">
          <p>© 2026 KnowledgeFund. All rights reserved.</p>
          <p>Understand. Agree. Govern. Move in one direction.</p>
        </div>
      </div>
    </footer>
  );
}
