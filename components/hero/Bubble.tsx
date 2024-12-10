"use client";

import { motion } from "framer-motion";

interface BubbleProps {
  size: number;
  color: string;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
  containerHeight: number;
}

export function Bubble({
  size,
  color,
  startX,
  startY,
  duration,
  delay,
  containerHeight,
}: BubbleProps) {
  const rgbaColor = color.replace("rgb", "rgba").replace(")", ", 0.6)");
  const rgbaColorLighter = color.replace("rgb", "rgba").replace(")", ", 0.3)");

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), ${rgbaColorLighter} 30%, ${rgbaColor} 70%, ${color}90)`,
        boxShadow: `0 0 0 2px ${rgbaColorLighter}, 
                    inset 0 0 6px ${rgbaColor}, 
                    0 0 15px ${rgbaColorLighter}`,
        border: `1px solid ${rgbaColor.replace("0.6", "0.3")}`,
        overflow: "hidden",
      }}
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        y: -size,
        opacity: [0, 0.4, 0.7, 1, 0.7, 0.4, 0],
        scale: [0.8, 1, 1, 0.9, 0.8],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 0,
        ease: [0.43, 0.13, 0.23, 0.96], // カスタムイージング関数
      }}
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.9), transparent 70%)",
          filter: "blur(1px)",
        }}
        initial={{ top: "10%", left: "10%" }}
        animate={{
          top: ["10%", "40%", "10%"],
          left: ["10%", "40%", "70%"],
        }}
        transition={{
          duration: duration,
          delay: delay,
          repeat: Infinity,
          repeatDelay: 0,
          ease: [0.43, 0.13, 0.23, 0.96], // カスタムイージング関数
        }}
      />
    </motion.div>
  );
}
