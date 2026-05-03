import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — KnowledgeFund",
  description: "Get early access to KnowledgeFund or talk to us about governed AI adoption.",
};

const inputClass =
  "mt-2 w-full rounded-md border border-white/10 bg-[#09090b] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#2e62ff] focus:outline-none";

export default function ContactPage() {
  return (
    <section className="mesh-gradient bg-technical-gradient pt-32 pb-24 lg:pt-40">
      <div className="kf-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="kf-kicker">Get in touch</span>
          <h1 className="kf-display mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Build your KnowledgeFund.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            We work with a small number of organisations at a time. If you are serious about
            governed AI adoption, we would like to hear from you.
          </p>
          <div className="mt-8 rounded-md border border-white/10 bg-white/[0.03] p-5">
            <p className="kf-mono text-xs uppercase text-slate-500">Direct email</p>
            <a className="mt-2 block text-lg font-semibold text-white" href="mailto:knowledgefund@gmail.com">
              knowledgefund@gmail.com
            </a>
          </div>
        </div>

        <div className="kf-card p-6 md:p-8">
          <form action="mailto:knowledgefund@gmail.com" method="post" encType="text/plain" className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="kf-mono text-xs uppercase text-slate-400">
                  First name
                </label>
                <input id="first-name" name="firstName" type="text" required className={inputClass} placeholder="Jane" />
              </div>
              <div>
                <label htmlFor="last-name" className="kf-mono text-xs uppercase text-slate-400">
                  Last name
                </label>
                <input id="last-name" name="lastName" type="text" required className={inputClass} placeholder="Smith" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="kf-mono text-xs uppercase text-slate-400">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="jane@organisation.com"
              />
            </div>

            <div>
              <label htmlFor="organisation" className="kf-mono text-xs uppercase text-slate-400">
                Organisation
              </label>
              <input
                id="organisation"
                name="organisation"
                type="text"
                required
                className={inputClass}
                placeholder="Organisation name"
              />
            </div>

            <div>
              <label htmlFor="challenge" className="kf-mono text-xs uppercase text-slate-400">
                What are you looking to solve?
              </label>
              <textarea
                id="challenge"
                name="challenge"
                rows={5}
                required
                className={`${inputClass} resize-none`}
                placeholder="Briefly describe your knowledge or AI governance challenge..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#2e62ff] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#2453e8] hover:shadow-[0_0_24px_rgba(46,98,255,0.35)]"
            >
              Send message
            </button>
          </form>
          <p className="mt-5 text-center text-xs leading-5 text-slate-500">
            This opens your email client with the enquiry details. We respond to enquiries within two
            business days.
          </p>
        </div>
      </div>
    </section>
  );
}
