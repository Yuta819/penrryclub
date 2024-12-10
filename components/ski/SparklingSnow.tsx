"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export function SparklingSnow() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const createSparkle = () => {
      const sparkle: Sparkle = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
      };
      setSparkles((prev) => [...prev, sparkle]);
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
      }, 1500);
    };

    const interval = setInterval(createSparkle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
