"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ShuttlecockGlow } from "./ShuttlecockGlow";

export function BadmintonHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Image
          src={
            isMobile
              ? "/images/circles/badminton/badmintonOS.png"
              : "/images/circles/badminton/badmintonPC.png"
          }
          alt="Badminton shuttlecock with dramatic lighting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <ShuttlecockGlow className="mx-auto mb-8" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
              BADMINTON
            </span>
            <span className="block text-white">CIRCLE</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Experience the speed. Feel the rush. Join our dynamic community.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-0 right-0 mx-auto text-center"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
          />
          <span className="mt-4 text-sm uppercase tracking-wider text-blue-400">
            Scroll to explore
          </span>
        </div>
      </motion.div>
    </section>
  );
}
