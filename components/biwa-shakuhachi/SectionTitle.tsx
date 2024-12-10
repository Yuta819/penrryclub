"use client";

import { motion } from "framer-motion";
import RedAccent from "./decorative/RedAccent";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`text-center mb-16 mx-4 sm:mx-8 md:mx-16 lg:mx-24 ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-decorative text-white mb-6 relative inline-block">
        <span className="relative z-10 text-shadow-elegant text-gray-100">
          {title}
        </span>
      </h2>
      <RedAccent className="max-w-[240px] mx-auto mb-6" />
      {subtitle && <p className="text-white/60 font-japanese">{subtitle}</p>}
    </motion.div>
  );
}
