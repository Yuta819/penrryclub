"use client";

import { motion } from "framer-motion";

interface LightStreakProps {
  color: string;
  angle: number;
  top: string;
  left: string;
  width: string;
  height: string;
}

export function LightStreak({
  color,
  angle,
  top,
  left,
  width,
  height,
}: LightStreakProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width,
        height,
        background: `linear-gradient(${angle}deg, ${color}, transparent)`,
        opacity: 0.5,
        filter: "blur(20px)",
      }}
      animate={{
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
