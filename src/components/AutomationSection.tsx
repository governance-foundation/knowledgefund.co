"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const useCases = [
  "Onboarding workflows",
  "Policy acknowledgement & compliance",
  "Client intake & scoping",
  "Contract review summaries",
  "Report generation",
  "Regulatory update tracking",
  "Internal knowledge Q&A",
  "Meeting summarisation",
  "SOP maintenance",
  "Approval routing",
  "Staff offboarding",
  "Audit preparation",
];

export default function AutomationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#1a2035]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            What it automates
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#f0f4ff] mb-6">
            The admin layer of the business, made usable.
          </h2>
          <p className="text-[#8892a4] text-lg max-w-2xl mx-auto leading-relaxed">
            The work that consumes time without building capability. KnowledgeFund
            makes it automatable, governable, and trustworthy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {useCases.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.05 * i }}
              className="glass-panel rounded-lg px-5 py-4 hover:border-blue-500/20 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400/60 flex-shrink-0" />
                <span className="text-sm text-[#f0f4ff]">{item}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
