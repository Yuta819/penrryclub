"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <motion.h2
      className={`relative inline-block ${className}`}
      animate={isGlitching ? { x: [-3, 3, -3, 0], y: [1, -1, 1, 0] } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 w-full h-full text-blue-500"
            style={{ clipPath: "inset(45% 0 55% 0)" }}
            animate={{ x: [-3, 3, -3, 0] }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 w-full h-full text-red-500"
            style={{ clipPath: "inset(55% 0 0 0)" }}
            animate={{ x: [3, -3, 3, 0] }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 w-full h-full text-purple-500"
            style={{ clipPath: "inset(0 0 55% 0)" }}
            animate={{ y: [-2, 2, -2, 0] }}
          >
            {children}
          </motion.span>
        </>
      )}
    </motion.h2>
  );
}
