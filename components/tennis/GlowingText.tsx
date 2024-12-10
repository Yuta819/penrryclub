"use client";

import { motion } from "framer-motion";

interface GlowingTextProps {
  text: string;
  className?: string;
}

export function GlowingText({ text, className = "" }: GlowingTextProps) {
  return (
    <motion.h1
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow effect */}
      <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-green-400 to-green-600 opacity-75" />

      {/* Light streak */}
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute top-1/2 left-0 w-full h-px bg-green-500 animate-[streak_2s_ease-in-out_infinite]" />
      </span>

      {/* Text with gradient */}
      <span className="relative bg-gradient-to-r from-green-300 via-green-400 to-green-200 text-transparent bg-clip-text font-extrabold">
        {text}
      </span>
    </motion.h1>
  );
}
