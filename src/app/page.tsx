import Link from "next/link";

const trustItems = ["SOC 2 alignment", "ISO 27001", "ISO 42001 principles"];

const coordinationCards = [
  {
    title: "Communication",
    body: "A shared language for people, teams, and AI agents so knowledge moves without distortion.",
    span: "md:col-span-2",
  },
  {
    title: "Collaboration",
    body: "Structured work around common outcomes, with less friction and fewer hidden dependencies.",
    span: "",
  },
  {
    title: "Coordination",
    body: "The operating layer that turns shared knowledge into aligned timing, accountability, and action.",
    span: "",
  },
  {
    title: "How Organisations Work",
    body: "KnowledgeFund turns chaotic inputs into governed capability so every automated action can be traced back to the business mission.",
    span: "md:col-span-2",
  },
];

function InterfacePreview() {
  return (
    <div className="kf-card blue-glow relative overflow-hidden p-5">
      <div className="absolute inset-0 mesh-gradient opacity-80" />
      <div className="relative rounded-lg border border-white/10 bg-[#09090b]/80 p-5">
        <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="kf-mono text-[10px] uppercase text-slate-500">Network state</p>
            <p className="mt-1 text-sm font-semibold text-white">Mission alignment active</p>
          </div>
          <div className="rounded-full bg-[#2e62ff]/15 px-3 py-1 text-xs font-semibold text-[#b7c4ff]">
            Governed
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            {["Knowledge graph", "Policy layer", "Workflow agents", "Audit evidence"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-white/5 bg-white/[0.03] p-3">
                <div className="grid h-8 w-8 place-items-center rounded bg-[#2e62ff]/10 text-xs font-bold text-[#b7c4ff]">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{item}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-[#2e62ff]" style={{ width: `${76 - index * 9}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative min-h-64 rounded-lg border border-white/10 bg-[#0f172a]/70 p-4">
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2e62ff]/25" />
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2e62ff]/10" />
            {[
              ["left-[44%] top-[44%]", "K"],
              ["left-[44%] top-[10%]", "G"],
              ["right-[12%] top-[32%]", "A"],
              ["right-[18%] bottom-[18%]", "C"],
              ["left-[20%] bottom-[16%]", "S"],
              ["left-[12%] top-[32%]", "P"],
            ].map(([position, label]) => (
              <div
                key={label}
                className={`absolute ${position} grid h-10 w-10 place-items-center rounded-full border border-[#2e62ff]/35 bg-[#09090b] text-xs font-bold text-[#b7c4ff] shadow-[0_0_24px_rgba(46,98,255,0.22)]`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="mesh-gradient bg-technical-gradient pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="kf-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="kf-kicker">Sovereign intelligence engine</span>
            <h1 className="kf-display mt-7 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Turn organisational knowledge into{" "}
              <span className="kf-text-gradient">secure, governed, mission-aligned action.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              KnowledgeFund helps organisations care for their shared knowledge, align their people,
              and safely automate the work that keeps the business moving.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-[#2e62ff] px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-[#2453e8] hover:shadow-[0_0_24px_rgba(46,98,255,0.35)]"
              >
                Start building your KnowledgeFund
              </Link>
              <Link
                href="/model"
                className="rounded-md border border-white/10 bg-white/[0.03] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/[0.07]"
              >
                Explore the model
              </Link>
            </div>
          </div>

          <InterfacePreview />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#09090b] py-8">
        <div className="kf-container flex flex-col gap-5 text-slate-500 md:flex-row md:items-center md:justify-between">
          <p className="kf-mono text-xs uppercase">Designed for institutions requiring</p>
          <div className="flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-400">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="kf-section">
        <div className="kf-container">
          <div className="max-w-2xl">
            <span className="kf-kicker">Strategic framework</span>
            <h2 className="kf-display mt-5 text-3xl font-semibold text-white md:text-5xl">
              The Coordination Problem
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              AI makes coordination the business problem that can no longer be ignored. As automation
              accelerates work, alignment becomes the difference between capability and risk.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {coordinationCards.map((card) => (
              <article key={card.title} className={`kf-card p-7 ${card.span}`}>
                <h3 className="kf-display text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0e0e10] py-24">
        <div className="kf-container text-center">
          <h2 className="kf-display text-3xl font-semibold text-white md:text-5xl">
            Knowledge is a cooperative fund.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            When organisational knowledge is siloed, its value depreciates. When it is pooled,
            governed, maintained, and accessible to secure AI agents, it becomes an asset the whole
            organisation can draw from.
          </p>
        </div>
      </section>

      <section className="kf-section">
        <div className="kf-container">
          <div className="kf-card blue-glow mx-auto max-w-5xl p-8 text-center md:p-14">
            <h2 className="kf-display text-3xl font-semibold text-white md:text-4xl">
              Ready to govern your future?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Build a foundation of secure, mission-aligned organisational intelligence before
              automation scales the work.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-md bg-[#2e62ff] px-7 py-3 text-sm font-bold text-white">
                Start building your KnowledgeFund
              </Link>
              <Link href="/governance" className="rounded-md border border-white/10 px-7 py-3 text-sm font-bold text-white">
                View governance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
