import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — KnowledgeFund",
  description: "The philosophy behind KnowledgeFund and why we built it.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            Our philosophy
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#f0f4ff] mb-6 leading-tight">
            Knowledge is a cooperative fund.
          </h1>
          <p className="text-xl text-[#8892a4] leading-relaxed">
            Most organisations know more than they use. KnowledgeFund is built on the
            belief that this is not a technology problem — it is a governance problem.
          </p>
        </div>

        <div className="space-y-10">
          {[
            {
              heading: "Why we built this",
              body: "Organisations are spending heavily on AI tools without building the foundation those tools require. The result is faster movement in an unclear direction — which is not progress, it is acceleration without governance. We built KnowledgeFund to address the root cause: organisations do not have a cared-for, governed, mission-aligned knowledge layer.",
            },
            {
              heading: "What we believe",
              body: "We believe that knowledge, treated as a cooperative fund — contributed to, maintained, and drawn upon collectively — is the primary asset of any organisation. Not its people alone, not its systems alone, but the shared knowledge that allows people and systems to work together effectively.",
            },
            {
              heading: "Who we build for",
              body: "We build for organisations that are serious about AI adoption but refuse to move recklessly. Legal firms, financial services organisations, professional services businesses, government agencies, and any enterprise that needs AI to be genuinely useful, genuinely secure, and genuinely accountable.",
            },
          ].map((section) => (
            <div key={section.heading} className="glass-panel rounded-xl p-8">
              <h2 className="text-xl font-bold text-[#f0f4ff] mb-4">
                {section.heading}
              </h2>
              <p className="text-[#8892a4] leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium transition-all duration-200 text-sm"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </div>
  );
}
