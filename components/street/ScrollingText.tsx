"use client";

import { motion } from "framer-motion";

export function ScrollingText() {
  const text = "2024.09.25 HIRO10 joins as new member!! ";
  const repeatedText = text.repeat(5);

  return (
    <div className="absolute top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm overflow-hidden h-8">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -1000 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="whitespace-nowrap text-white py-2"
      >
        {repeatedText}
      </motion.div>
    </div>
  );
}
