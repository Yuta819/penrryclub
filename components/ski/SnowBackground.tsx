"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export function SnowBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    // Create initial snowflakes
    snowflakesRef.current = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
    }));

    const animate = () => {
      snowflakesRef.current = snowflakesRef.current.map((flake) => ({
        ...flake,
        y: flake.y + flake.speed,
        x: flake.x + Math.sin(flake.y * 0.01) * 0.5,
      }));

      // Reset snowflakes that have fallen below the screen
      snowflakesRef.current = snowflakesRef.current.map((flake) =>
        flake.y > height
          ? { ...flake, y: -10, x: Math.random() * width }
          : flake
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {snowflakesRef.current.map((flake, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          animate={{
            y: [flake.y, flake.y + 1000],
            x: [flake.x, flake.x + Math.sin(flake.y * 0.01) * 50],
          }}
          transition={{
            duration: (1000 - flake.y) / (flake.speed * 50),
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
          }}
        />
      ))}
    </div>
  );
}
