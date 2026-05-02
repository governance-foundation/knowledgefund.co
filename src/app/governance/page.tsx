import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Governance — KnowledgeFund",
  description: "Security, compliance, and governance in KnowledgeFund — built for regulated environments.",
};

export default function GovernancePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            Security &amp; governance
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#f0f4ff] mb-6 leading-tight">
            Built for governed AI adoption.
          </h1>
          <p className="text-xl text-[#8892a4] leading-relaxed">
            Governance cannot be added after deployment. It must be built in from the beginning.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "SOC 2 Type II alignment",
              body: "KnowledgeFund is designed to support alignment with SOC 2 Type II requirements for security, availability, and confidentiality. Our knowledge layer and access controls are built with these requirements in mind — not retrofitted to meet them.",
            },
            {
              title: "ISO 27001 alignment",
              body: "Our information security approach is designed to support alignment with ISO 27001 principles across knowledge handling, access management, and AI deployment. We treat information security as a structural concern, not a compliance exercise.",
            },
            {
              title: "ISO 42001 alignment",
              body: "As AI management systems become a regulatory expectation, KnowledgeFund is built with ISO 42001 principles in mind — responsible AI deployment with governance, transparency, human oversight, and accountability built into the architecture.",
            },
            {
              title: "Access controls & permissions",
              body: "Role-based access controls ensure that knowledge is accessible to those who need it and protected from those who do not. Permissions can be structured at the document, category, workflow, and agent level.",
            },
            {
              title: "Audit trails & accountability",
              body: "Every action taken by AI agents and every change to the knowledge layer is logged. Audit trails provide the evidence needed for internal governance and external compliance requirements.",
            },
            {
              title: "Data residency",
              body: "For organisations with data residency requirements, KnowledgeFund offers options that allow you to maintain control over where your organisation's knowledge is stored and processed.",
            },
          ].map((section) => (
            <div key={section.title} className="glass-panel rounded-xl p-8">
              <h2 className="text-xl font-bold text-[#f0f4ff] mb-4">{section.title}</h2>
              <p className="text-[#8892a4] leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium transition-all duration-200 text-sm"
          >
            Discuss your governance requirements
          </Link>
        </div>
      </div>
    </div>
  );
}
