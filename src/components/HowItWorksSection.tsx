"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    word: "Capture",
    description:
      "Bring your organisation's existing knowledge into a single, structured environment. Policies, processes, expertise, decisions — all in one place.",
  },
  {
    number: "02",
    word: "Structure",
    description:
      "Organise knowledge so it is findable, usable, and trustworthy. Not a document graveyard — a living knowledge architecture.",
  },
  {
    number: "03",
    word: "Govern",
    description:
      "Apply access controls, versioning, review cycles, and accountability structures. Knowledge that cannot be governed cannot be trusted.",
  },
  {
    number: "04",
    word: "Activate",
    description:
      "Deploy AI agents and automation that draw on your governed knowledge to complete real business tasks — accurately, consistently, and safely.",
  },
  {
    number: "05",
    word: "Improve",
    description:
      "Learn from usage, identify gaps, update knowledge, and refine automation over time. The fund grows as the organisation uses it.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#1a2035]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            How it works
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#f0f4ff] mb-6">
            From scattered knowledge to governed capability.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="relative text-center lg:text-left"
              >
                <div className="flex lg:flex-col lg:items-start items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a2035] border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-blue-400">
                      {i + 1}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
                  )}
                </div>
                <div className="text-2xl font-bold text-[#f0f4ff] mb-2">
                  {step.word}
                </div>
                <p className="text-[#8892a4] text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
