// File: components/hangglider/decorations/SkyColors.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skyColors = [
  "#e87ea1", // Sunrise
  "#ffc37d", // Morning
  "#87ceeb", // Daytime
  "#f4a460", // Teatime
  "#ff6347", // Sunset
  "#191970", // Night
  "#000080", // Midnight
  "#4b3c8e", // Dawn
];

const TRANSITION_DURATION = 10; // seconds

export default function Background() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [nextColorIndex, setNextColorIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % skyColors.length);
      setNextColorIndex((prevIndex) => (prevIndex + 1) % skyColors.length);
    }, TRANSITION_DURATION * 1000);

    return () => clearInterval(interval);
  }, []);

  const currentColor = skyColors[currentColorIndex];
  const nextColor = skyColors[nextColorIndex];

  return (
    <div className="fixed inset-0 z-0">
      <AnimatePresence>
        <motion.div
          key={currentColorIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: TRANSITION_DURATION }}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${currentColor}, ${nextColor})`,
          }}
        />
      </AnimatePresence>
    </div>
  );
}
