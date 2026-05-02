"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const threeCs = [
  {
    letter: "C",
    word: "Communication",
    description:
      "Communication is how an organisation shares what it knows. It moves information from one person to another — through documents, meetings, messages, and systems. Good communication is necessary, but on its own it cannot produce alignment. People can understand the same facts and still act differently.",
    detail:
      "Without a shared foundation, communication creates noise as much as clarity.",
  },
  {
    letter: "C",
    word: "Collaboration",
    description:
      "Collaboration is how people work together toward a shared goal. It requires trust, shared context, and agreed ways of working. Collaboration improves outcomes when people are genuinely aligned — but it cannot compensate for an organisation that has not yet agreed on what it is doing and why.",
    detail:
      "Collaboration amplifies alignment. It cannot substitute for it.",
  },
  {
    letter: "C",
    word: "Coordination",
    description:
      "Coordination is how an organisation moves in one direction. It is the hardest of the three to achieve, and the most consequential. It requires that individuals, teams, and systems are not just informed and cooperative, but actually oriented toward the same outcomes — and that this orientation is visible, maintained, and governable.",
    detail:
      "Coordination is what makes an organisation act like one entity, not a collection of individuals.",
  },
];

export default function ThreeCsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#1a2035]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            The framework
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#f0f4ff] mb-6">
            Communication. Collaboration. Coordination.
          </h2>
          <p className="text-[#8892a4] text-lg max-w-2xl mx-auto leading-relaxed">
            Three distinct capabilities. Most organisations have invested in the
            first two. The third is where AI changes everything.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {threeCs.map((c, i) => (
            <motion.div
              key={c.word}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="glass-panel rounded-xl p-8"
            >
              <div className="text-5xl font-black text-blue-500/20 mb-4 leading-none">
                {c.letter}
              </div>
              <h3 className="text-xl font-bold text-[#f0f4ff] mb-4">
                {c.word}
              </h3>
              <p className="text-[#8892a4] text-sm leading-relaxed mb-5">
                {c.description}
              </p>
              <p className="text-blue-400/80 text-xs italic border-t border-white/5 pt-4">
                {c.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass-panel rounded-xl p-10">
            <div className="text-3xl text-blue-400/30 font-serif mb-4">&ldquo;</div>
            <p className="text-lg lg:text-xl font-medium text-[#f0f4ff] leading-relaxed">
              Communication helps people understand. Collaboration helps people
              work together. Coordination helps the organisation move in one
              direction.
            </p>
            <div className="text-3xl text-blue-400/30 font-serif mt-4 block text-right">&rdquo;</div>
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
