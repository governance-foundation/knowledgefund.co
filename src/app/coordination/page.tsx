import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Coordination Problem — KnowledgeFund",
  description: "Why coordination is the business problem that AI makes impossible to ignore.",
};

export default function CoordinationPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            The coordination problem
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#f0f4ff] mb-6 leading-tight">
            AI makes coordination the business problem that can no longer be ignored.
          </h1>
          <p className="text-xl text-[#8892a4] leading-relaxed">
            Organisations have always struggled with coordination. AI does not solve this problem.
            Without a governed foundation, it accelerates it.
          </p>
        </div>

        <div className="space-y-10">
          {[
            {
              heading: "What coordination actually means",
              body: "Coordination is not about communication tools or collaboration platforms. It is about whether the organisation moves in one direction — whether individuals, teams, and systems are actually oriented toward the same outcomes. Most organisations achieve communication. Fewer achieve collaboration. Very few achieve genuine coordination.",
            },
            {
              heading: "Why AI changes the stakes",
              body: "When humans operate without coordination, the damage is bounded by human capacity. When AI systems operate without coordination, the damage scales with the speed and volume of automation. An AI agent acting on fragmented or ungoverned knowledge can produce inconsistency, error, and compliance risk at machine speed.",
            },
            {
              heading: "The governed foundation",
              body: "The solution to the coordination problem is not more tools. It is a governed knowledge foundation — a single source of truth about what the organisation knows, what it has decided, and how it intends to act. From this foundation, communication becomes clear, collaboration becomes effective, and coordination becomes achievable.",
            },
            {
              heading: "What this means for AI adoption",
              body: "Organisations that build the governed foundation first will be able to deploy AI that is genuinely useful, genuinely safe, and genuinely aligned with their mission. Organisations that skip this step will deploy AI that is faster, louder, and more expensive than the problems it was meant to solve.",
            },
          ].map((section) => (
            <div key={section.heading} className="glass-panel rounded-xl p-8">
              <h2 className="text-xl font-bold text-[#f0f4ff] mb-4">{section.heading}</h2>
              <p className="text-[#8892a4] leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium transition-all duration-200 text-sm"
          >
            Build your governed foundation
          </Link>
        </div>
      </div>
    </div>
  );
}
