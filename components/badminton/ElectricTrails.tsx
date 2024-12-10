"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Trail {
  id: number;
  path: string;
  duration: number;
}

export function ElectricTrails() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createTrail = () => {
      if (!containerRef.current) return;

      const { width, height } = containerRef.current.getBoundingClientRect();
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      const endX = Math.random() * width;
      const endY = Math.random() * height;

      const controlPoint1X = startX + (Math.random() - 0.5) * width * 0.5;
      const controlPoint1Y = startY + (Math.random() - 0.5) * height * 0.5;
      const controlPoint2X = endX + (Math.random() - 0.5) * width * 0.5;
      const controlPoint2Y = endY + (Math.random() - 0.5) * height * 0.5;

      const path = `M${startX},${startY} C${controlPoint1X},${controlPoint1Y} ${controlPoint2X},${controlPoint2Y} ${endX},${endY}`;

      const trail: Trail = {
        id: Date.now(),
        path,
        duration: 0.5 + Math.random() * 0.5, // 0.5 to 1 second
      };

      setTrails((prevTrails) => [...prevTrails, trail]);

      setTimeout(() => {
        setTrails((prevTrails) => prevTrails.filter((t) => t.id !== trail.id));
      }, trail.duration * 1000);
    };

    const interval = setInterval(createTrail, 200); // Create a new trail every 200ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10">
      {trails.map((trail) => (
        <motion.svg
          key={trail.id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: trail.duration, times: [0, 0.1, 1] }}
        >
          <motion.path
            d={trail.path}
            stroke="url(#electric-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: trail.duration, ease: "easeOut" }}
          />
        </motion.svg>
      ))}
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="electric-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
