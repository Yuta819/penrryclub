"use client";

import { motion } from "framer-motion";

interface DiagonalStripesProps {
  className?: string;
}

export function DiagonalStripes({ className = "" }: DiagonalStripesProps) {
  return (
    <div className={`relative ${className} p-4 sm:p-6 md:p-8 lg:p-10`}>
      <motion.div
        initial={{ x: "100%", y: "-100%" }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-full bg-current transform -rotate-45"
            style={{ top: `${i * 8}px` }}
          />
        ))}
      </motion.div>
    </div>
  );
}
