"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ScrollingText } from "./ScrollingText";
import { GlowingButton } from "./GlowingButton";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { LightStreak } from "./LightStreak";
import { GlitchText } from "./GlitchText";
import { FloatingIcons } from "./FloatingIcons";

export function StreetHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative bg-black overflow-hidden h-screen">
      <ScrollingText />
      <FloatingIcons />

      <LightStreak
        color="rgba(59, 130, 246, 0.5)"
        angle={45}
        top="10%"
        left="-10%"
        width="50%"
        height="50%"
      />
      <LightStreak
        color="rgba(239, 68, 68, 0.5)"
        angle={-30}
        top="60%"
        left="70%"
        width="40%"
        height="40%"
      />
      <LightStreak
        color="rgba(167, 139, 250, 0.5)"
        angle={0}
        top="40%"
        left="30%"
        width="60%"
        height="20%"
      />

      <div className="sticky top-0 h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50" />

        <AnimatePresence>
          {isLoaded && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={
                  isMobile
                    ? "/images/circles/street/OS-hero.png"
                    : "/images/circles/street/PC-hero.png"
                }
                alt="Street dancer"
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center justify-center px-4 flex-grow"
          >
            <GlitchText className="text-6xl md:text-8xl font-bold text-white text-center mb-6 tracking-tighter">
              BREAK
            </GlitchText>
            <GlitchText className="text-6xl md:text-8xl font-bold text-center mb-6 tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              THE LIMITS
            </GlitchText>
            <p className="text-xl md:text-2xl text-white/80 mb-8 text-center max-w-2xl">
              Push boundaries. Create movements. Define your style.
            </p>
            <div className="flex gap-4">
              <GlowingButton href="#performances">PERFORMANCES</GlowingButton>
              <GlowingButton href="#contact" variant="outline">
                CONTACT
              </GlowingButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="px-6 flex justify-between items-end"
          >
            <div className="text-white/60 text-sm">© 2024 STREET DANCE</div>
            <div className="text-white text-xl font-mono">2×77</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
