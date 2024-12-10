"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { DiagonalStripes } from "./DiagonalStripes";

export function RugbyHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <Image
          src={
            isMobile
              ? "/images/circles/rugby/rugbyOS.png"
              : "/images/circles/rugby/rugbyPC.png"
          }
          alt="Rugby player in dramatic lighting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <DiagonalStripes className="absolute -left-8 top-0 h-24 w-24 text-orange-500" />
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
              <span className="block text-orange-500">RUGBY</span>
              <span className="block">CIRCLE</span>
            </h1>
            <div className="h-1 w-24 bg-orange-500 mb-6" />
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Join the legacy. Experience the power of unity and determination
              on the field.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
          >
            <a
              href="#contact"
              className="inline-block bg-orange-500 text-black px-8 py-4 text-lg font-bold tracking-wider hover:bg-orange-400 transition-colors duration-300"
            >
              JOIN THE TEAM
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-0 right-0 mx-auto w-full text-center"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-transparent via-orange-500 to-transparent"
          />
          <span className="mt-4 text-sm uppercase tracking-wider text-orange-500">
            Scroll to explore
          </span>
        </div>
      </motion.div>
    </section>
  );
}
