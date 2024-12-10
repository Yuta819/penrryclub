"use client";

import { motion } from "framer-motion";

interface PatternProps {
  className?: string;
}

export default function JapanesePattern({ className = "" }: PatternProps) {
  return (
    <motion.div
      className={`absolute inset-0 opacity-10 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v20H0zm40 0L20 0v20h20zM0 40l20-20v20H0zm40 0l-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
    />
  );
}
