"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { GlowingText } from "./GlowingText";
import { ParticleBackground } from "./ParticleBackground";

export function MainHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <ParticleBackground />

      {/* Tennis ball image */}
      <motion.div
        className="relative w-full h-full"
        style={{ opacity, scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={
            isMobile
              ? "/images/circles/tennis/tennis-OS-hero.png"
              : "/images/circles/tennis/tennis-PC-hero.png"
          }
          alt="Tennis ball with particle effects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      </motion.div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <GlowingText
            text="TENNIS CIRCLE"
            className="text-4xl md:text-7xl font-bold mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-green-400/80"
          >
            Unleash Your Potential
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 mx-auto w-full flex justify-center items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="flex flex-col items-center text-green-400/60">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-green-400/50 to-transparent" />
          <span className="mt-2 text-sm uppercase tracking-wider">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}
