import Link from "next/link";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { href: "/model", label: "The Model" },
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
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="text-xl font-bold gradient-text block mb-4">KnowledgeFund</span>
            <p className="text-[#8892a4] text-sm leading-relaxed max-w-sm">
              Helping organisations care for their shared knowledge, align their
              people, and safely automate business work through secure, governed,
              mission-aligned AI.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8892a4] mb-4">
                {section.heading}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#8892a4] hover:text-[#f0f4ff] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8892a4]">
            © {new Date().getFullYear()} KnowledgeFund. All rights reserved.
          </p>
          <p className="text-xs text-[#8892a4]">
            Understand. Agree. Govern. Move in one direction.
          </p>
        </div>
      </div>
    </footer>
  );
}
