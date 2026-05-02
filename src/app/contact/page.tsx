import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — KnowledgeFund",
  description: "Get early access to KnowledgeFund or talk to us about governed AI adoption.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            Get in touch
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#f0f4ff] mb-6 leading-tight">
            Build your KnowledgeFund.
          </h1>
          <p className="text-lg text-[#8892a4] leading-relaxed">
            We work with a small number of organisations at a time. If you are
            serious about governed AI adoption, we would like to hear from you.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-8 lg:p-10">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-[#8892a4] uppercase tracking-wider mb-2">
                  First name
                </label>
                <input
                  type="text"
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-lg px-4 py-3 text-[#f0f4ff] text-sm placeholder-[#8892a4]/50 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#8892a4] uppercase tracking-wider mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-lg px-4 py-3 text-[#f0f4ff] text-sm placeholder-[#8892a4]/50 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#8892a4] uppercase tracking-wider mb-2">
                Work email
              </label>
              <input
                type="email"
                className="w-full bg-[#0a0f1e] border border-white/10 rounded-lg px-4 py-3 text-[#f0f4ff] text-sm placeholder-[#8892a4]/50 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="jane@organisation.com"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#8892a4] uppercase tracking-wider mb-2">
                Organisation
              </label>
              <input
                type="text"
                className="w-full bg-[#0a0f1e] border border-white/10 rounded-lg px-4 py-3 text-[#f0f4ff] text-sm placeholder-[#8892a4]/50 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="Organisation name"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#8892a4] uppercase tracking-wider mb-2">
                What are you looking to solve?
              </label>
              <textarea
                rows={4}
                className="w-full bg-[#0a0f1e] border border-white/10 rounded-lg px-4 py-3 text-[#f0f4ff] text-sm placeholder-[#8892a4]/50 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                placeholder="Briefly describe your knowledge or AI governance challenge..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-sm"
            >
              Send message
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-[#8892a4] mt-6">
          We respond to all enquiries within two business days.
        </p>
      </div>
    </div>
  );
}
