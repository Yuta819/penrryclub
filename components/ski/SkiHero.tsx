"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ShimmerButton } from "./DecorativeElements";

export function SkiHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Image
          src={
            isMobile
              ? "/images/circles/ski/skiOS.png"
              : "/images/circles/ski/skiPC.png"
          }
          alt="Skier performing jump trick"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 to-sky-900/60 backdrop-blur-[2px]" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [0.9, 1.1, 1] }}
            transition={{ duration: 1, delay: 1 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-white animate-gradient-xy">
                  Ski Circle
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-200 animate-gradient-xy">
                  Winter Adventure
                </span>
              </h1>
              <div className="absolute -inset-4 bg-white/20 blur-xl opacity-50 rounded-full" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-sky-100 mb-12 font-light"
          >
            Experience the thrill of winter sports with our passionate community
          </motion.p>

          <ShimmerButton>Join Our Circle</ShimmerButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-0 right-0 mx-auto w-full text-white text-center"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent"
          />
          <span className="mt-4 text-sm uppercase tracking-wider font-light">
            Scroll to explore
          </span>
        </div>
      </motion.div>
    </section>
  );
}
