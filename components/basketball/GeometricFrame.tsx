"use client";

import { motion } from "framer-motion";

interface GeometricFrameProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GeometricFrame({
  children,
  className = "",
  delay = 0,
}: GeometricFrameProps) {
  return (
    <motion.div
      className={`relative mx-4 sm:mx-6 lg:mx-8 my-4 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Top left corner */}
      <motion.div
        className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-orange-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      />

      {/* Top right corner */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-orange-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      />

      {/* Bottom left corner */}
      <motion.div
        className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-orange-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
      />

      {/* Bottom right corner */}
      <motion.div
        className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-orange-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.8 }}
      />

      {children}
    </motion.div>
  );
}
