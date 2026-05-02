"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-panel rounded-2xl p-12 lg:p-16 blue-glow">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#f0f4ff] mb-6 leading-tight">
              Build the fund your business already depends on.
            </h2>
            <p className="text-[#8892a4] text-lg mb-10 leading-relaxed">
              Your organisation already has a knowledge fund. The question is
              whether it is tended, governed, and capable of powering the next
              stage of your operations — or whether it is scattered, at risk, and
              holding you back.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-sm"
              >
                Start building your KnowledgeFund
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg border border-white/10 hover:border-white/20 text-[#f0f4ff] font-medium transition-all duration-200 hover:bg-white/5 text-sm"
              >
                Talk to us about governed AI adoption
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
