"use client";

import { motion } from "framer-motion";

interface InkBrushProps {
  className?: string;
}

export default function InkBrush({ className = "" }: InkBrushProps) {
  return (
    <motion.div
      className={`absolute bg-white/10 blur-sm ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
}
