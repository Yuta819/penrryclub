"use client";

import { motion } from "framer-motion";

export default function GradientOverlay() {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-600/50 to-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
