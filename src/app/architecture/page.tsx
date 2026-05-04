import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Governance & Trust Architecture — KnowledgeFund",
  description:
    "KnowledgeFund trust architecture for sovereign intelligence, compliance, security, audit trails, and data sovereignty.",
};

const complianceCards = [
  {
    icon: "verified_user",
    label: "EST. PROTOCOL",
    title: "ISO 42001",
    body: "The first global standard for AI Management Systems. We implement rigorous ethical safeguards and risk management for every model in our orbit.",
  },
  {
    icon: "policy",
    label: "TRUST SERVICES",
    title: "SOC 2 Type II",
    body: "Continuous operational monitoring ensuring data security, availability, and processing integrity. Verified by independent institutional audits.",
  },
  {
    icon: "enhanced_encryption",
    label: "ISMS STANDARD",
    title: "ISO 27001",
    body: "Comprehensive information security management. Our technical perimeter is fortified by enterprise-grade cryptographic controls.",
  },
];

const securityItems = [
  {
    icon: "terminal",
    title: "Immutable Audit Trails",
    body: "Every interaction with our intelligence layers is cryptographically hashed and logged to a private ledge, ensuring a tamper-proof history of operations.",
  },
  {
    icon: "shield_with_heart",
    title: "Zero-Trust Interaction",
    body: "Identity is verified at every hop. We operate on the principle of least privilege, minimizing attack surfaces across the network.",
  },
  {
    icon: "data_thresholding",
    title: "Continuous Threat Synthesis",
    body: "Real-time monitoring using adversarial AI to detect and neutralize potential vulnerabilities before they manifest as threats.",
  },
];

export default function ArchitecturePage() {
  return (
    <div className="bg-[#09090b] text-[#e5e1e4]" style={{ paddingTop: 112, paddingBottom: 192 }}>
      <div className="stitch-container">
        <section style={{ marginBottom: 48 }}>
          <div className="max-w-4xl">
            <span className="mb-4 block font-mono text-[10px] font-medium uppercase leading-none tracking-[0.08em] text-[#2e62ff] lg:text-[13px]">
              Institutional Trust Architecture
            </span>
            <h1 className="font-display text-[32px] font-semibold leading-[1.1] text-white lg:text-[48px]">
              Governance for Sovereign Intelligence.
            </h1>
            <p className="mt-8 max-w-2xl font-body text-sm leading-[1.6] text-[#c3c5d8] lg:text-lg">
              Ensuring the integrity of autonomous systems through a multi-layered compliance
              framework and immutable audit trails. Knowledge Fund builds on the bedrock of absolute
              data sovereignty.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <div className="mb-12 flex items-center gap-4" style={{ marginBottom: 48 }}>
            <div className="h-px flex-1 bg-white/5" />
            <h2 className="whitespace-nowrap font-display text-base font-medium leading-[1.3] text-white lg:text-2xl">
              Compliance Framework
            </h2>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {complianceCards.map((card) => (
              <article
                key={card.title}
                className="mechanical-border glow-hover rounded-lg bg-[#0e0e10] p-8 transition-all"
                style={{ minHeight: 180, padding: 32 }}
              >
                <div className="flex items-start justify-between" style={{ marginBottom: 48 }}>
                  <span className="material-symbols-outlined text-2xl text-[#2e62ff] lg:text-4xl">
                    {card.icon}
                  </span>
                  <span className="font-mono text-[8px] text-[#8d90a2] opacity-50 lg:text-xs">{card.label}</span>
                </div>
                <h3 className="font-display text-lg font-medium leading-[1.3] text-white lg:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 font-body text-xs leading-[1.5] text-[#c3c5d8] lg:text-[15px]">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 items-center gap-12 min-[720px]:grid-cols-2" style={{ marginBottom: 48 }}>
          <div>
            <span className="mb-6 block font-mono text-[10px] font-medium uppercase leading-none tracking-[0.08em] text-[#2e62ff] lg:text-[13px]">
              Defense-in-Depth
            </span>
            <h2 className="font-display text-[32px] font-semibold leading-[1.1] text-white lg:text-[48px]">
              Security Architecture
            </h2>

            <div className="mt-8 space-y-8 lg:space-y-12">
              {securityItems.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="mt-1">
                    <span className="material-symbols-outlined text-[#b7c4ff]">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-medium text-white lg:text-lg">{item.title}</h3>
                    <p className="mt-2 font-body text-xs leading-[1.5] text-[#c3c5d8] lg:text-[15px]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 rounded-full bg-[#2e62ff]/10 opacity-20 blur-3xl" />
            <div
              className="mechanical-border relative overflow-hidden rounded-2xl bg-[#0e0e10]"
              style={{ aspectRatio: "16 / 10" }}
            >
              <Image
                src="/stitch-redesign/high-tech-concept-wide.png"
                alt="Sovereign intelligence globe showing a secure technical trust network."
                width={1344}
                height={768}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
              />
              <div className="glass-panel mechanical-border absolute bottom-5 left-5 right-5 rounded-lg p-4 lg:bottom-8 lg:left-8 lg:right-8 lg:p-6">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#2e62ff] shadow-[0_0_10px_#2e62ff]" />
                  <span className="font-mono text-[10px] font-medium uppercase leading-none tracking-[0.05em] text-white lg:text-[13px]">
                    System Status: Optimized
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <div style={{ marginBottom: 48 }}>
            <h2 className="font-display text-2xl font-medium leading-[1.2] text-white lg:text-[32px]">
              Data Sovereignty
            </h2>
            <p className="mt-4 max-w-xl font-body text-xs leading-[1.5] text-[#c3c5d8] lg:text-[15px]">
              Decoupling intelligence from infrastructure. Your data remains your asset, always
              encrypted and geographically governed according to your jurisdiction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <article className="mechanical-border relative overflow-hidden rounded-lg bg-[#2a2a2c] md:col-span-2" style={{ padding: 48 }}>
              <Image
                src="/stitch-redesign/governed.png"
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                style={{ opacity: 0.18 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2c] via-[#2a2a2c]/92 to-[#2a2a2c]/45" />
              <div className="relative z-10">
                <h3 className="font-display text-lg font-medium text-white lg:text-2xl">Jurisdictional Control</h3>
                <p className="mt-6 max-w-xl font-body text-xs leading-[1.5] text-[#c3c5d8] lg:text-[15px]">
                  Select the precise legal jurisdiction for your data residency. Knowledge Fund
                  adheres to G7 and EU data protection mandates natively.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <span className="rounded bg-white/5 px-3 py-1 font-mono text-[11px] text-[#8d90a2]">
                    REGION: EU-WEST-1
                  </span>
                  <span className="rounded bg-white/5 px-3 py-1 font-mono text-[11px] text-[#8d90a2]">
                    REGION: US-EAST-1
                  </span>
                </div>
              </div>
            </article>

            <article
              className="mechanical-border flex flex-col items-center justify-center rounded-lg bg-[#0e0e10] text-center"
              style={{ padding: 32 }}
            >
              <span className="material-symbols-outlined text-4xl text-[#2e62ff]" style={{ marginBottom: 16 }}>
                encrypted
              </span>
              <h3 className="font-mono text-[11px] font-medium uppercase text-white lg:text-[13px]">End-to-End</h3>
              <p className="mt-2 text-xs text-[#c3c5d8]">AES-256 at rest & in transit.</p>
            </article>

            <article
              className="mechanical-border flex flex-col items-center justify-center rounded-lg bg-[#0e0e10] text-center"
              style={{ padding: 32 }}
            >
              <span className="material-symbols-outlined text-4xl text-[#2e62ff]" style={{ marginBottom: 16 }}>
                key
              </span>
              <h3 className="font-mono text-[11px] font-medium uppercase text-white lg:text-[13px]">BYOK</h3>
              <p className="mt-2 text-xs text-[#c3c5d8]">Bring your own keys capability.</p>
            </article>
          </div>
        </section>

        <section style={{ marginTop: 64 }}>
          <div
            className="mechanical-border relative overflow-hidden rounded-2xl bg-[#0f172a] text-center"
            style={{ padding: 64 }}
          >
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#2e62ff]/5 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl font-medium leading-[1.2] text-white lg:text-[32px]">
                Engineer Your Trust Layer
              </h2>
              <p className="mx-auto mt-6 max-w-2xl font-body text-xs leading-[1.5] text-[#c3c5d8] lg:text-[15px]">
                Discuss our governance architecture with a technical architect. We provide complete
                transparency documentation for institutional partners.
              </p>
              <Link
                href="mailto:knowledgefund@gmail.com"
                className="stitch-button-primary"
                style={{ marginTop: 40 }}
              >
                <span className="material-symbols-outlined">mail</span>
                Contact Architecture Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
