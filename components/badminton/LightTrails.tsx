"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Trail {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export function LightTrails() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // クライアントサイドでのみ viewport サイズを設定
    if (typeof window !== "undefined") {
      setViewport({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setViewport({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (viewport.width === 0 || viewport.height === 0) return;

    const createTrail = () => {
      const trail = {
        id: Date.now(),
        x: Math.random() * viewport.width,
        y: Math.random() * viewport.height,
        rotation: Math.random() * 360,
      };
      setTrails((prev) => [...prev, trail]);
      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== trail.id));
      }, 2000);
    };

    const interval = setInterval(createTrail, 3000);
    return () => clearInterval(interval);
  }, [viewport]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className="absolute w-40 h-1"
          style={{
            left: trail.x,
            top: trail.y,
            rotate: trail.rotation,
            background:
              "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5), rgba(239, 68, 68, 0.5), transparent)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 2, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
