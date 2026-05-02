import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Use Cases — KnowledgeFund",
  description: "Practical use cases for KnowledgeFund across professional services, financial services, and enterprise operations.",
};

const useCases = [
  { title: "Onboarding workflows", description: "Automate employee and client onboarding with governed, consistent knowledge-driven processes." },
  { title: "Policy acknowledgement", description: "Track and manage policy acknowledgements with audit trails and automated follow-ups." },
  { title: "Client intake & scoping", description: "Streamline client intake processes with structured, knowledge-backed intake workflows." },
  { title: "Contract review summaries", description: "Generate consistent contract summaries grounded in your organisation's specific knowledge and standards." },
  { title: "Report generation", description: "Produce governed, consistent reports that draw on structured organisational knowledge." },
  { title: "Regulatory update tracking", description: "Monitor and integrate regulatory changes into your knowledge base with structured review processes." },
  { title: "Internal knowledge Q&A", description: "Give staff governed, accurate answers to internal questions — drawn from your maintained knowledge layer." },
  { title: "Meeting summarisation", description: "Capture, structure, and file meeting outcomes in a way that feeds back into the knowledge fund." },
  { title: "SOP maintenance", description: "Keep standard operating procedures current, version-controlled, and connected to the automation they govern." },
  { title: "Approval routing", description: "Route approvals through structured processes with clear accountability and audit trails." },
  { title: "Staff offboarding", description: "Capture and retain knowledge from departing staff in a structured, governed way." },
  { title: "Audit preparation", description: "Assemble audit evidence and documentation systematically from your governed knowledge layer." },
];

export default function UseCasesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            Use cases
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#f0f4ff] mb-6 leading-tight">
            The admin layer of the business, made usable.
          </h1>
          <p className="text-xl text-[#8892a4] leading-relaxed max-w-2xl mx-auto">
            The work that consumes time without building capability. KnowledgeFund makes
            it automatable, governable, and trustworthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div key={uc.title} className="glass-panel rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <h2 className="text-base font-semibold text-[#f0f4ff]">{uc.title}</h2>
              </div>
              <p className="text-[#8892a4] text-sm leading-relaxed pl-5">{uc.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium transition-all duration-200 text-sm"
          >
            Talk to us about your use case
          </Link>
        </div>
      </div>
    </div>
  );
}
