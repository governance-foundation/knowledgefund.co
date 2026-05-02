import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Model — KnowledgeFund",
  description: "How the KnowledgeFund model works: from scattered knowledge to governed AI capability.",
};

const steps = [
  { number: "01", title: "Capture", body: "Bring your organisation's existing knowledge into a single, structured environment. Policies, processes, expertise, decisions — all in one place, not scattered across drives and inboxes." },
  { number: "02", title: "Structure", body: "Organise knowledge so it is findable, usable, and trustworthy. Not a document graveyard — a living knowledge architecture that reflects how the organisation actually works." },
  { number: "03", title: "Govern", body: "Apply access controls, versioning, review cycles, and accountability structures. Knowledge that cannot be governed cannot be trusted — and AI that cannot be trusted cannot be deployed safely." },
  { number: "04", title: "Activate", body: "Deploy AI agents and automation that draw on your governed knowledge to complete real business tasks — accurately, consistently, and safely. The knowledge foundation becomes the capability layer." },
  { number: "05", title: "Improve", body: "Learn from usage, identify gaps, update knowledge, and refine automation over time. The fund grows as the organisation uses it — compounding capability rather than compounding debt." },
];

export default function ModelPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            The model
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#f0f4ff] mb-6 leading-tight">
            From scattered knowledge to governed capability.
          </h1>
          <p className="text-xl text-[#8892a4] leading-relaxed">
            Five steps from where most organisations are — fragmented, at risk, unable to automate
            safely — to where they need to be.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="glass-panel rounded-xl p-8 flex gap-6">
              <div className="text-3xl font-black text-blue-500/20 flex-shrink-0 leading-none">
                {step.number}
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#f0f4ff] mb-3">{step.title}</h2>
                <p className="text-[#8892a4] leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium transition-all duration-200 text-sm"
          >
            Build your KnowledgeFund
          </Link>
        </div>
      </div>
    </div>
  );
}
