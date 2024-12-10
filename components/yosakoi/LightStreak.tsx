"use client";

import React from "react";
import { motion } from "framer-motion";

interface LightStreakProps {
  className?: string;
  direction?: "vertical" | "horizontal" | "diagonal-left" | "diagonal-right";
}

export function LightStreak({
  className = "",
  direction = "vertical",
}: LightStreakProps) {
  const getGradient = () => {
    switch (direction) {
      case "horizontal":
        return "bg-gradient-to-r";
      case "diagonal-left":
        return "bg-gradient-to-br";
      case "diagonal-right":
        return "bg-gradient-to-bl";
      default:
        return "bg-gradient-to-b";
    }
  };

  const getDimensions = () => {
    switch (direction) {
      case "horizontal":
        return "h-0.5 w-16 md:w-24";
      case "diagonal-left":
      case "diagonal-right":
        return "h-16 w-0.5 md:h-24";
      default:
        return "h-16 w-0.5 md:h-24";
    }
  };

  return (
    <motion.div
      className={`absolute ${getGradient()} from-transparent via-red-500/50 to-transparent ${getDimensions()} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
  );
}
