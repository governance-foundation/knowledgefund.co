import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Governance — KnowledgeFund",
  description: "Security, compliance, and governance infrastructure for safe AI adoption.",
};

const capabilities = [
  {
    title: "Role-based access",
    body: "Granular permission controls so only authorised people and agents can access sensitive knowledge.",
  },
  {
    title: "Audit trails",
    body: "Every material interaction, change, and automated action can be logged for accountability.",
  },
  {
    title: "Change history",
    body: "Version control for organisational knowledge, decisions, and policy updates.",
  },
  {
    title: "Source trust and ownership",
    body: "Trust levels, ownership, and attribution keep AI outputs grounded in approved knowledge.",
    wide: true,
  },
  {
    title: "Human-in-the-loop",
    body: "Critical outputs and high-risk workflows can require expert review before action.",
  },
];

const standards = ["SOC 2 Type II alignment", "ISO 27001 alignment", "ISO 42001 principles"];

export default function GovernancePage() {
  return (
    <>
      <section className="mesh-gradient pt-32 pb-20 lg:pt-40">
        <div className="kf-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="kf-kicker">Institutional trust</span>
            <h1 className="kf-display mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Built for governed AI adoption.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c3c5d8]">
              Governance cannot be added after deployment. KnowledgeFund is designed for
              organisations that need AI to be useful, secure, accountable, and ready for regulated
              environments from the beginning.
            </p>
          </div>

          <div className="kf-card blue-glow p-5">
            <div className="rounded-lg border border-white/10 bg-[#09090b]/85 p-5">
              <p className="kf-mono text-xs uppercase text-[#8d90a2]">Trust architecture</p>
              <div className="mt-5 grid gap-3">
                {standards.map((standard) => (
                  <div key={standard} className="flex items-center justify-between rounded-md bg-white/[0.03] p-4">
                    <span className="text-sm font-semibold text-white">{standard}</span>
                    <span className="rounded-full bg-[#2e62ff]/15 px-3 py-1 text-xs text-[#b7c4ff]">Designed in</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kf-section">
        <div className="kf-container">
          <span className="kf-kicker">Core capabilities</span>
          <h2 className="kf-display mt-5 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
            Precision governance infrastructure.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className={`kf-card p-7 ${capability.wide ? "md:col-span-2" : ""}`}
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-md bg-[#2e62ff]/10 text-sm font-bold text-[#b7c4ff]">
                  KF
                </div>
                <h3 className="kf-display text-2xl font-semibold text-white">{capability.title}</h3>
                <p className="mt-4 leading-7 text-[#c3c5d8]">{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0e0e10] py-24">
        <div className="kf-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="kf-kicker">System verification</span>
            <h2 className="kf-display mt-5 text-3xl font-semibold text-white md:text-5xl">
              Automated evidence capture.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#c3c5d8]">
              Audit readiness depends on evidence, not promises. KnowledgeFund is shaped around
              capturing the context, knowledge state, review path, and accountability record behind
              AI-assisted work.
            </p>
          </div>

          <div className="kf-card p-6">
            <div className="space-y-4">
              {["Context captured", "Knowledge source linked", "Reviewer recorded", "Decision trace retained"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.03] p-4">
                    <div className="grid h-9 w-9 place-items-center rounded bg-[#2e62ff]/15 text-xs font-bold text-[#b7c4ff]">
                      {index + 1}
                    </div>
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="kf-section text-center">
        <div className="kf-container">
          <h2 className="kf-display text-3xl font-semibold text-white md:text-4xl">
            Formalise your AI governance before automation scales.
          </h2>
          <Link href="/contact" className="mt-8 inline-flex rounded-md bg-[#2e62ff] px-7 py-3 text-sm font-bold text-white">
            Discuss governance requirements
          </Link>
        </div>
      </section>
    </>
  );
}
