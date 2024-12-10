"use client";

import { motion } from "framer-motion";

interface DiagonalTextProps {
  text: string;
  className?: string;
}

export default function DiagonalText({
  text,
  className = "",
}: DiagonalTextProps) {
  return (
    <motion.div
      className={`absolute transform -rotate-90 origin-left whitespace-nowrap text-white font-bold ${className}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {text}
    </motion.div>
  );
}
