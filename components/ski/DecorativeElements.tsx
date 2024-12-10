"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function FloatingShapes() {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateViewport = () => {
        setViewport({ width: window.innerWidth, height: window.innerHeight });
      };

      updateViewport(); // 初回実行
      window.addEventListener("resize", updateViewport);

      return () => window.removeEventListener("resize", updateViewport);
    }
  }, []);

  if (viewport.width === 0 || viewport.height === 0) {
    return null; // 初期ロード中の回避
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * viewport.width,
            y: Math.random() * viewport.height,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            x: Math.random() * viewport.width,
            y: Math.random() * viewport.height,
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          <div
            className={`${
              i % 3 === 0
                ? "w-4 h-4 rounded-full bg-pink-200/20"
                : i % 3 === 1
                ? "w-6 h-6 rotate-45 bg-sky-200/20"
                : "w-8 h-8 rounded-full border border-white/20"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

export function GradientBlob() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-300/30 to-sky-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sky-300/30 to-pink-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function ShimmerButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold rounded-full group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 group-hover:rotate-180 bg-gradient-to-br from-pink-500 via-sky-500 to-pink-500"></span>
      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90"></span>
      <span className="relative text-white">{children}</span>
    </motion.button>
  );
}

export function GlowingCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative rounded-xl overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-sky-500/20 animate-gradient-xy" />
      <div className="absolute inset-[1px] bg-white rounded-xl" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
