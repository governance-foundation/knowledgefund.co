"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Fragmented knowledge",
    description:
      "Knowledge sits in silos — scattered across documents, inboxes, and individual minds. AI cannot act on what it cannot access or trust.",
  },
  {
    title: "Uncoordinated automation",
    description:
      "Automation deployed without shared context leads to inconsistency, duplication, and decisions that contradict the organisation's actual direction.",
  },
  {
    title: "No governed change",
    description:
      "Without a governed foundation, AI adoption accelerates the problem it was meant to solve — moving faster in the wrong direction.",
  },
];

export default function CoordinationProblem() {
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
            The core challenge
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#f0f4ff] max-w-3xl mx-auto leading-tight mb-6">
            AI makes coordination the business problem that can no longer be
            ignored.
          </h2>
          <p className="text-[#8892a4] text-lg max-w-2xl mx-auto leading-relaxed">
            Organisations are deploying AI tools without the governed foundation
            those tools require. The result is faster movement in an unclear
            direction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-panel rounded-xl p-8 hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5 text-blue-400 text-lg font-bold">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-[#f0f4ff] mb-3">
                {card.title}
              </h3>
              <p className="text-[#8892a4] text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
