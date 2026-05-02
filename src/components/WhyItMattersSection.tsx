"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const points = [
  {
    heading: "AI reflects the knowledge it is given",
    body: "A model is only as reliable as its inputs. If the knowledge foundation is fragmented, inconsistent, or ungoverned, the AI will amplify those problems at scale.",
  },
  {
    heading: "Trust cannot be retrofitted",
    body: "Governance cannot be added after deployment. It must be built into the knowledge layer before automation is switched on. Retrofitting trust is expensive and often impossible.",
  },
  {
    heading: "Alignment is a structural problem",
    body: "Organisations do not become aligned by telling people to align. They align when the knowledge, processes, and systems that govern behaviour are coherent and maintained.",
  },
];

export default function WhyItMattersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            Why it matters
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#f0f4ff] max-w-2xl leading-tight">
            AI is only as useful as the knowledge it can trust.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={point.heading}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className="border-t border-blue-500/20 pt-8"
            >
              <h3 className="text-lg font-semibold text-[#f0f4ff] mb-4">
                {point.heading}
              </h3>
              <p className="text-[#8892a4] text-sm leading-relaxed">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
