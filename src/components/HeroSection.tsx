"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function AbstractVisual() {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="300" cy="250" r="200" stroke="rgba(59,130,246,0.06)" strokeWidth="1" />
        <circle cx="300" cy="250" r="150" stroke="rgba(59,130,246,0.08)" strokeWidth="1" />
        <circle cx="300" cy="250" r="100" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />

        <circle cx="300" cy="250" r="18" fill="rgba(59,130,246,0.2)" />
        <circle cx="300" cy="250" r="10" fill="#3b82f6" />

        {[
          { cx: 180, cy: 160 },
          { cx: 420, cy: 160 },
          { cx: 160, cy: 320 },
          { cx: 440, cy: 320 },
          { cx: 300, cy: 100 },
          { cx: 300, cy: 400 },
        ].map((node, i) => (
          <g key={i}>
            <line
              x1="300" y1="250"
              x2={node.cx} y2={node.cy}
              stroke="rgba(59,130,246,0.15)"
              strokeWidth="1"
            />
            <circle cx={node.cx} cy={node.cy} r="12" fill="rgba(26,32,53,0.8)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
            <circle cx={node.cx} cy={node.cy} r="5" fill="rgba(96,165,250,0.6)" />
          </g>
        ))}

        {[
          { cx: 100, cy: 100, from: { x: 180, y: 160 } },
          { cx: 500, cy: 100, from: { x: 420, y: 160 } },
          { cx: 80, cy: 380, from: { x: 160, y: 320 } },
          { cx: 520, cy: 380, from: { x: 440, y: 320 } },
        ].map((node, i) => (
          <g key={i}>
            <line
              x1={node.from.x} y1={node.from.y}
              x2={node.cx} y2={node.cy}
              stroke="rgba(59,130,246,0.08)"
              strokeWidth="1"
            />
            <circle cx={node.cx} cy={node.cy} r="7" fill="rgba(26,32,53,0.8)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
            <circle cx={node.cx} cy={node.cy} r="3" fill="rgba(96,165,250,0.4)" />
          </g>
        ))}

        <rect x="220" y="210" width="160" height="80" rx="8" fill="rgba(26,32,53,0.4)" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
        <rect x="230" y="225" width="90" height="6" rx="3" fill="rgba(96,165,250,0.3)" />
        <rect x="230" y="238" width="60" height="4" rx="2" fill="rgba(96,165,250,0.15)" />
        <rect x="230" y="249" width="75" height="4" rx="2" fill="rgba(96,165,250,0.15)" />
        <rect x="230" y="260" width="50" height="4" rx="2" fill="rgba(96,165,250,0.1)" />

        {[
          { x: 360, y: 140 }, { x: 210, y: 380 }, { x: 480, y: 240 }, { x: 120, y: 220 },
        ].map((pt, i) => (
          <circle key={i} cx={pt.x} cy={pt.y} r="3" fill="rgba(96,165,250,0.25)" />
        ))}
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1629] to-[#0a0f1e]" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                Governed AI for organisations
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#f0f4ff] mb-6"
            >
              Turn organisational knowledge into{" "}
              <span className="gradient-text">
                secure, governed, mission-aligned action.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#8892a4] leading-relaxed mb-6"
            >
              KnowledgeFund helps organisations care for their shared knowledge,
              align their people, and safely automate the work that keeps the
              business moving.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm font-medium text-blue-400 mb-8 tracking-wide"
            >
              Understand. Agree. Govern. Move in one direction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-sm"
              >
                Build your KnowledgeFund
              </Link>
              <Link
                href="/model"
                className="px-7 py-3.5 rounded-lg border border-white/10 hover:border-white/20 text-[#f0f4ff] font-medium transition-all duration-200 hover:bg-white/5 text-sm"
              >
                Explore the model
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs text-[#8892a4] leading-relaxed max-w-md"
            >
              Built for organisations that need AI to be useful, secure,
              governed, and aligned with the business mission.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-panel rounded-2xl p-8 blue-glow">
              <AbstractVisual />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
