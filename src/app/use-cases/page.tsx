import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Use Cases — KnowledgeFund",
  description: "Practical governed AI use cases across the administrative layer of the business.",
};

const useCases = [
  {
    title: "Knowledge retrieval",
    body: "Give staff governed answers from maintained institutional memory instead of scattered drives and inboxes.",
  },
  {
    title: "Document generation",
    body: "Draft contracts, reports, memos, policies, and client materials from approved organisational knowledge.",
  },
  {
    title: "Pitch and tender prep",
    body: "Synthesize requirements, prior work, proof points, and win themes with traceable source context.",
  },
  {
    title: "Document review",
    body: "Review documents for policy alignment, risks, gaps, inconsistencies, and missing approvals.",
  },
  {
    title: "Workflow creation",
    body: "Orchestrate repeated cross-functional tasks with clear permissions, evidence, and ownership.",
  },
  {
    title: "Reporting",
    body: "Generate consistent internal and external reports from structured knowledge and governed workflows.",
  },
  {
    title: "System updates",
    body: "Keep operational records synchronized across legacy platforms without losing accountability.",
  },
  {
    title: "Process automation",
    body: "Automate repetitive administrative cycles while preserving human oversight for critical work.",
  },
  {
    title: "Audit preparation",
    body: "Assemble evidence, decision history, and source context from the governed knowledge layer.",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <section className="mesh-gradient bg-technical-gradient pt-32 pb-20 lg:pt-40">
        <div className="kf-container max-w-4xl text-center">
          <span className="kf-kicker">Use cases</span>
          <h1 className="kf-display mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            The admin layer of the business, made governable.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            KnowledgeFund focuses on the operational work that consumes time without building
            capability. It makes that work automatable, accountable, and trustworthy.
          </p>
        </div>
      </section>

      <section className="kf-section technical-grid border-y border-white/10 bg-[#0e0e10]">
        <div className="kf-container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article key={useCase.title} className="kf-card p-6 transition-colors hover:bg-white/[0.04]">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#2e62ff] shadow-[0_0_16px_rgba(46,98,255,0.8)]" />
                <h2 className="kf-display text-xl font-semibold text-white">{useCase.title}</h2>
              </div>
              <p className="text-sm leading-6 text-slate-400">{useCase.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kf-section">
        <div className="kf-container">
          <div className="kf-card mx-auto max-w-4xl p-8 text-center md:p-12">
            <span className="kf-kicker">Operational intelligence</span>
            <h2 className="kf-display mt-5 text-3xl font-semibold text-white md:text-4xl">
              Start with one workflow. Build a reusable foundation.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Each use case strengthens the knowledge fund behind it, so automation compounds
              capability instead of creating another disconnected tool.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-md bg-[#2e62ff] px-7 py-3 text-sm font-bold text-white">
              Talk to us about your use case
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
