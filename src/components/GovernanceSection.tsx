"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const complianceCards = [
  {
    title: "SOC 2 Type II",
    description:
      "Designed to support alignment with SOC 2 Type II requirements for security, availability, and confidentiality of customer data.",
    icon: "🔐",
  },
  {
    title: "ISO 27001",
    description:
      "Built to support alignment with ISO 27001 information security management principles across knowledge handling and AI deployment.",
    icon: "🛡️",
  },
  {
    title: "ISO 42001",
    description:
      "Designed with ISO 42001 AI management system principles in mind — responsible AI deployment with governance, transparency, and accountability.",
    icon: "⚖️",
  },
];

const features = [
  "Role-based access controls",
  "Audit trails and logging",
  "Data residency options",
  "Version control and review cycles",
  "Accountability structures",
  "Policy enforcement",
];

export default function GovernanceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            Security &amp; governance
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#f0f4ff] mb-6">
            Built for governed AI adoption.
          </h2>
          <p className="text-[#8892a4] text-lg max-w-2xl mx-auto leading-relaxed">
            Organisations operating in regulated environments need AI that
            respects their compliance requirements — not just their workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {complianceCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-panel rounded-xl p-8 blue-glow"
            >
              <div className="text-3xl mb-5">{card.icon}</div>
              <h3 className="text-lg font-semibold text-[#f0f4ff] mb-3">
                {card.title}
              </h3>
              <p className="text-[#8892a4] text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel rounded-xl p-8"
        >
          <h3 className="text-base font-semibold text-[#f0f4ff] mb-6">
            Governance capabilities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span className="text-sm text-[#8892a4]">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
