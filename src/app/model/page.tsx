import type { Metadata } from "next";
import { bookingUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "The Model — KnowledgeFund",
  description: "How KnowledgeFund turns scattered knowledge into governed AI capability.",
};

const steps = [
  {
    title: "Capture",
    body: "Bring policies, processes, expertise, decisions, emails, documents, and operational knowledge into a unified knowledge vault.",
  },
  {
    title: "Structure",
    body: "Apply semantic organisation so knowledge becomes findable, usable, trustworthy, and ready for both people and AI systems.",
  },
  {
    title: "Govern",
    body: "Add access control, review cycles, ownership, versioning, and accountability before automation touches business work.",
    featured: true,
  },
  {
    title: "Activate",
    body: "Deploy AI agents and workflows that draw from governed knowledge to complete real administrative and operational tasks.",
  },
  {
    title: "Improve",
    body: "Use feedback, audit trails, and changing business context to keep the fund alive as the organisation learns.",
  },
];

const adminCapabilities = [
  "Knowledge retrieval",
  "Document generation",
  "Pitch and tender prep",
  "Document review",
  "Workflow creation",
  "Reporting",
  "System updates",
  "Process automation",
];

export default function ModelPage() {
  return (
    <>
      <section className="mesh-gradient bg-technical-gradient pt-32 pb-20 lg:pt-40">
        <div className="kf-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="kf-kicker">The model</span>
            <h1 className="kf-display mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              From scattered knowledge to governed capability.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              KnowledgeFund gives organisations a repeatable lifecycle for turning scattered information
              into governed business capability without losing control.
            </p>
          </div>

          <div className="kf-card blue-glow p-5">
            <div className="rounded-lg border border-white/10 bg-[#09090b]/80 p-5">
              <p className="kf-mono text-xs uppercase text-slate-500">Governance lifecycle</p>
              <div className="mt-5 space-y-3">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex items-center gap-4">
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded border text-sm font-bold ${
                        step.featured
                          ? "border-[#2e62ff] bg-[#2e62ff] text-white"
                          : "border-white/10 bg-white/[0.03] text-[#b7c4ff]"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-white">{step.title}</p>
                      <div className="mt-2 h-px bg-white/10" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kf-section">
        <div className="kf-container">
          <div className="text-center">
            <span className="kf-kicker">Methodology</span>
            <h2 className="kf-display mt-5 text-3xl font-semibold text-white md:text-5xl">
              Five steps, one governed foundation.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className={`kf-card p-6 ${step.featured ? "border-[#2e62ff]/60 bg-[#2e62ff]/10" : ""}`}
              >
                <p className="kf-mono text-xs uppercase text-slate-500">0{index + 1}</p>
                <h3 className="kf-display mt-5 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="technical-grid border-y border-white/10 bg-[#0e0e10] py-24">
        <div className="kf-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="kf-kicker">Admin layer</span>
            <h2 className="kf-display mt-5 text-3xl font-semibold text-white md:text-5xl">
              The admin layer of the business.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              The model is not abstract. It makes the repeated administrative work of the business
              automatable, governable, and accountable.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {adminCapabilities.map((capability) => (
              <article key={capability} className="kf-card-soft p-5 transition-colors hover:bg-white/[0.05]">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-[#2e62ff]/10 text-sm font-bold text-[#b7c4ff]">
                  KF
                </div>
                <h3 className="kf-display text-xl font-semibold text-white">{capability}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Governed workflows backed by maintained organisational knowledge.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="kf-section">
        <div className="kf-container text-center">
          <h2 className="kf-display text-3xl font-semibold text-white md:text-4xl">
            Build the fund your business already depends on.
          </h2>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-md bg-[#2e62ff] px-7 py-3 text-sm font-bold text-white"
          >
            Request a technical briefing
          </a>
        </div>
      </section>
    </>
  );
}
