"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveMusicNoteProps {
  progress: number;
  isExploded: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  color: string;
  size: number;
}

export function InteractiveMusicNote({
  progress,
  isExploded,
}: InteractiveMusicNoteProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (isExploded) {
      const containerWidth =
        containerRef.current?.clientWidth || window.innerWidth;
      const containerHeight =
        containerRef.current?.clientHeight || window.innerHeight;
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;

      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: centerX,
        y: centerY,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 2 + 100,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: Math.random() * 20 + 20,
      }));
      setParticles(newParticles);

      let startTime = performance.now();

      const animateParticles = (currentTime: number) => {
        const elapsedTime = (currentTime - startTime) / 1000; // 秒単位の経過時間

        setParticles((prevParticles) =>
          prevParticles.map((p) => {
            const newX = p.x + Math.cos(p.angle) * p.speed;
            const newY = p.y + Math.sin(p.angle) * p.speed;
            return {
              ...p,
              x: newX,
              y: newY,
              speed: Math.max(p.speed * 0.99, 0.1), // 徐々に減速
            };
          })
        );

        if (elapsedTime < 10) {
          animationRef.current = requestAnimationFrame(animateParticles);
        } else {
          setParticles([]); // 10秒後にパーティクルをクリア
        }
      };

      animationRef.current = requestAnimationFrame(animateParticles);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isExploded]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl text-white"
        initial={{ scale: 1 }}
        animate={{ scale: isExploded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        ♪
      </motion.div>
      {!isExploded && (
        <>
          <motion.div
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Click here
            </span>
          </motion.div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-200 ease-out rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </>
      )}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            initial={{ x: particle.x, y: particle.y, opacity: 1 }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: [1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 10, ease: "linear" }}
            style={{
              color: particle.color,
              fontSize: `${particle.size}px`,
              filter: "drop-shadow(0 0 5px rgba(0,0,0,0.5))",
            }}
          >
            ♪
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
