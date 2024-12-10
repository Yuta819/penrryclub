"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface Bubble {
  id: number;
  x: number;
  size: number;
  color: string;
  delay: number;
}

export function ColorfulBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const colors = ["#9333ea", "#818cf8", "#4f46e5", "#6366f1", "#7c3aed"];
    const generateBubble = (): Bubble => ({
      id: Math.random(),
      x: Math.random() * 100,
      size: Math.random() * 100 + 100, // 100px to 200px
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
    });

    // Initial set of bubbles
    setBubbles(Array.from({ length: 10 }, generateBubble));

    // Generate new bubbles periodically
    const interval = setInterval(() => {
      setBubbles((prevBubbles) =>
        [...prevBubbles, generateBubble()].slice(-20)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <BubbleAnimation key={bubble.id} bubble={bubble} />
      ))}
    </div>
  );
}

function BubbleAnimation({ bubble }: { bubble: Bubble }) {
  const controls = useAnimation();
  const [viewportHeight, setViewportHeight] = useState(1000); // デフォルト値

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportHeight(window.innerHeight); //windowをサーバーに認識させない処理
    }

    controls.start({
      y: [viewportHeight, -bubble.size],
      x: [
        `${bubble.x}%`,
        `${bubble.x + (Math.random() - 0.5) * 30}%`,
        `${bubble.x + (Math.random() - 0.5) * 30}%`,
        `${bubble.x + (Math.random() - 0.5) * 30}%`,
      ],
      transition: {
        duration: 8 - bubble.size / 50, // Faster for smaller bubbles
        ease: "easeOut",
        delay: bubble.delay,
        times: [0, 0.3, 0.6, 1],
      },
    });
  }, [bubble, controls, viewportHeight]);

  return (
    <motion.div
      className="absolute"
      style={{
        width: bubble.size,
        height: bubble.size,
        opacity: 0.6,
      }}
      animate={controls}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d={`M50 0 Q60 40 80 50 Q60 60 50 100 Q40 60 20 50 Q40 40 50 0`}
          fill={bubble.color}
        />
      </svg>
    </motion.div>
  );
}
