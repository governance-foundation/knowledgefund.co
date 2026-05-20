import type { Metadata } from "next";
import { bookingUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About — KnowledgeFund",
  description: "The philosophy behind KnowledgeFund and why governed knowledge matters for AI adoption.",
};

const pillars = [
  {
    title: "Understand",
    label: "Access to knowledge",
    body: "Break down silos by making institutional memory visible, structured, and usable by the people and systems that need it.",
  },
  {
    title: "Agree",
    label: "Shared view of work",
    body: "Create a common view of what has been decided, what matters, and how the organisation intends to act.",
  },
  {
    title: "Move in one direction",
    label: "Autonomous alignment",
    body: "Enable teams and AI agents to act with confidence because the operating context is governed and maintained.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mesh-gradient bg-technical-gradient pt-32 pb-20 lg:pt-40">
        <div className="kf-container max-w-4xl text-center">
          <span className="kf-kicker">Unified intelligence</span>
          <h1 className="kf-display mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Help your organisation understand, agree, and move in one direction.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            KnowledgeFund is built on a simple belief: most organisations know more than they use.
            The missing layer is not another tool. It is governed knowledge.
          </p>
        </div>
      </section>

      <section className="kf-section">
        <div className="kf-container grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="kf-card flex flex-col p-7">
              <h2 className="kf-display text-3xl font-semibold text-white">{pillar.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-slate-400">{pillar.body}</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="kf-mono text-xs uppercase text-[#b7c4ff]">{pillar.label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0e0e10] py-24">
        <div className="kf-container grid gap-12 lg:grid-cols-2">
          <div>
            <span className="kf-kicker">Why we built this</span>
            <h2 className="kf-display mt-5 text-3xl font-semibold text-white md:text-5xl">
              AI needs more than acceleration.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              Organisations are investing heavily in AI tools before building the foundation those
              tools require. The result is faster movement in an unclear direction.
            </p>
            <p>
              KnowledgeFund addresses the root cause: organisations need a cared-for, governed,
              governed knowledge layer before automation can be trusted.
            </p>
          </div>
        </div>
      </section>

      <section className="kf-section">
        <div className="kf-container text-center">
          <h2 className="kf-display text-3xl font-semibold text-white md:text-4xl">
            Knowledge is a managed business asset.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Contributed to, maintained, and drawn upon collectively, shared knowledge becomes the
            asset that lets people and AI systems work together effectively.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-md bg-[#2e62ff] px-7 py-3 text-sm font-bold text-white"
          >
            Talk to us
          </a>
        </div>
      </section>
    </>
  );
}
