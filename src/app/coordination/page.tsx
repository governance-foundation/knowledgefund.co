import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Coordination Problem — KnowledgeFund",
  description: "Why AI makes coordination the business problem that can no longer be ignored.",
};

const sections = [
  {
    title: "Communication",
    body: "The organisation can exchange information. People and systems can speak, request, update, and respond.",
  },
  {
    title: "Collaboration",
    body: "The organisation can work together around shared tasks, shared resources, and shared deliverables.",
  },
  {
    title: "Coordination",
    body: "The organisation can align decisions, timing, responsibilities, dependencies, and outcomes so the whole system moves in one direction.",
  },
];

const stakes = [
  "Human misalignment is bounded by human capacity.",
  "AI misalignment scales at machine speed.",
  "Governed knowledge gives automation a reliable source of truth.",
  "Coordination turns automation from local productivity into organisational capability.",
];

export default function CoordinationPage() {
  return (
    <>
      <section className="mesh-gradient pt-32 pb-20 lg:pt-40">
        <div className="kf-container max-w-4xl">
          <span className="kf-kicker">The coordination problem</span>
          <h1 className="kf-display mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            AI makes coordination the business problem that can no longer be ignored.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c3c5d8]">
            Organisations have always struggled with coordination. AI does not automatically solve
            this problem. Without a governed foundation, it accelerates it.
          </p>
        </div>
      </section>

      <section className="kf-section">
        <div className="kf-container grid gap-5 md:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="kf-card p-7">
              <h2 className="kf-display text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 leading-7 text-[#c3c5d8]">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="technical-grid border-y border-white/10 bg-[#0e0e10] py-24">
        <div className="kf-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="kf-kicker">Why AI changes the stakes</span>
            <h2 className="kf-display mt-5 text-3xl font-semibold text-white md:text-5xl">
              Faster movement in an unclear direction is not progress.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#c3c5d8]">
              An AI agent acting on fragmented or ungoverned knowledge can produce inconsistency,
              error, and compliance risk at scale. The coordination problem becomes a governance
              problem.
            </p>
          </div>

          <div className="space-y-4">
            {stakes.map((stake, index) => (
              <div key={stake} className="kf-card flex items-start gap-4 p-5">
                <span className="kf-mono text-sm text-[#b7c4ff]">0{index + 1}</span>
                <p className="leading-7 text-[#c3c5d8]">{stake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kf-section">
        <div className="kf-container">
          <div className="kf-card mx-auto max-w-4xl p-8 text-center md:p-12">
            <h2 className="kf-display text-3xl font-semibold text-white md:text-4xl">
              The solution is a governed knowledge foundation.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#c3c5d8]">
              A single maintained layer for what the organisation knows, what it has decided, and
              how it intends to act. From there, communication becomes clear, collaboration becomes
              effective, and coordination becomes achievable.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-md bg-[#2e62ff] px-7 py-3 text-sm font-bold text-white">
              Build your governed foundation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
