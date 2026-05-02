"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const outcomes = [
  { label: "Understand", detail: "Every person has access to the knowledge they need to do their job well." },
  { label: "Agree", detail: "The organisation has a shared view of what it is doing, why, and how." },
  { label: "Move in one direction", detail: "Automation, people, and systems are oriented toward the same outcomes." },
];

export default function MissionSection() {
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
            Mission alignment
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#f0f4ff] mb-6 max-w-3xl mx-auto leading-tight">
            Help your organisation understand, agree, and move in one direction.
          </h2>
          <p className="text-[#8892a4] text-lg max-w-2xl mx-auto leading-relaxed">
            These are not aspirational goals. They are structural outcomes that
            follow from caring for organisational knowledge properly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className="glass-panel rounded-xl p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-5">
                <span className="text-blue-400 font-bold text-sm">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-[#f0f4ff] mb-3">
                {outcome.label}
              </h3>
              <p className="text-[#8892a4] text-sm leading-relaxed">
                {outcome.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
