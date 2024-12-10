"use client";

import { motion } from "framer-motion";

interface RedAccentProps {
  className?: string;
}

export default function RedAccent({ className = "" }: RedAccentProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <motion.div
        className="h-px bg-red-600 flex-1"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="w-4 h-4 rotate-45 border-2 border-red-600"
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: 45 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <motion.div
        className="h-px bg-red-600 flex-1"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
