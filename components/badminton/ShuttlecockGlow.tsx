"use client";

import { motion } from "framer-motion";

interface ShuttlecockGlowProps {
  className?: string;
}

export function ShuttlecockGlow({ className = "" }: ShuttlecockGlowProps) {
  return (
    <div className={`relative w-24 h-24 ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-16 h-16"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            d="M12 2L8 6l4 4-4 4 4 4-4 4 4 4"
            className="stroke-current text-white/80"
          />
        </svg>
      </motion.div>
    </div>
  );
}
