// File: components/hangglider/decorations/PointStars.tsx
"use client";

import { useEffect, useState, useMemo } from "react";

const STAR_TIMING = {
  fadeInStart: 45,
  fadeInEnd: 50,
  visibleStart: 50,
  visibleEnd: 75,
  fadeOutStart: 75,
  fadeOutEnd: 80,
};

export default function PointStars() {
  const [progress, setProgress] = useState(0);

  const stars = useMemo(
    () =>
      Array.from({ length: 200 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
      })),
    []
  );

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = (Date.now() - startTime) / 1000;
      setProgress(elapsedTime % 80);
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, []);

  const calculateStarOpacity = (progress) => {
    if (progress < STAR_TIMING.fadeInStart) return 0;
    if (progress < STAR_TIMING.fadeInEnd)
      return (
        (progress - STAR_TIMING.fadeInStart) /
        (STAR_TIMING.fadeInEnd - STAR_TIMING.fadeInStart)
      );
    if (progress < STAR_TIMING.visibleEnd) return 1;
    if (progress < STAR_TIMING.fadeOutEnd)
      return (
        1 -
        (progress - STAR_TIMING.fadeOutStart) /
          (STAR_TIMING.fadeOutEnd - STAR_TIMING.fadeOutStart)
      );
    return 0;
  };

  return (
    <div
      className="fixed inset-0 z-10 pointer-events-none"
      style={{
        background: `radial-gradient(circle, transparent 0%, transparent 100%)`,
      }}
    >
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: calculateStarOpacity(progress),
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      ))}
    </div>
  );
}
