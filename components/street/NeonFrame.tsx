"use client";

import { motion } from "framer-motion";

interface NeonFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function NeonFrame({ children, className = "" }: NeonFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Top-left corner */}
      <div className="absolute -top-2 -left-2 w-8 h-8">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent" />
      </div>

      {/* Top-right corner */}
      <div className="absolute -top-2 -right-2 w-8 h-8">
        <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-purple-500 to-transparent" />
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent" />
      </div>

      {/* Bottom-left corner */}
      <div className="absolute -bottom-2 -left-2 w-8 h-8">
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-purple-500 to-transparent" />
      </div>

      {/* Bottom-right corner */}
      <div className="absolute -bottom-2 -right-2 w-8 h-8">
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-purple-500 to-transparent" />
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-purple-500 to-transparent" />
      </div>

      {/* Fluorescent border effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: "linear-gradient(90deg, #8B5CF6, #6366F1)",
          opacity: 0.2,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {children}
    </div>
  );
}
