"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { GeometricFrame } from "./GeometricFrame";

interface SectionTransitionProps {
  direction: "left" | "right";
  isTransitioning: boolean;
}

export function SectionTransition({
  direction,
  isTransitioning,
}: SectionTransitionProps) {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none bg-white bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute top-1/2 -translate-y-1/2"
            initial={{ x: direction === "left" ? "100vw" : "-100vw" }}
            animate={{ x: direction === "left" ? "-100vw" : "100vw" }}
            transition={{ duration: 1.5, ease: "linear" }}
          >
            <GeometricFrame className="w-20 h-20 md:w-40 md:h-40 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white text-xl md:text-3xl font-bold">
                TEAM
              </span>
            </GeometricFrame>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
