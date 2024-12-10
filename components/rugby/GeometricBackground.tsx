"use client";

import { motion } from "framer-motion";

export function GeometricBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Diagonal Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[200%] w-px bg-orange-500 top-0"
            style={{
              left: `${(i + 1) * 10}%`,
              transform: "rotate(45deg)",
            }}
          />
        ))}
      </motion.div>

      {/* Geometric Shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 border border-orange-500/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}
