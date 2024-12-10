"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MinimalNav } from "./MinimalNav";

export function SoccerHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const textY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <MinimalNav />

      <motion.div className="absolute inset-0" style={{ opacity, scale }}>
        <Image
          src="/images/soccer/PCサッカー.png"
          alt="Soccer ball in dramatic lighting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <motion.div
        className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-white/70 text-xl md:text-2xl font-light mb-4 tracking-wider">
            UNIVERSITY SOCCER CIRCLE
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
            UNLEASH YOUR
            <br />
            POTENTIAL
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl">
            Join a community of passionate players who push boundaries and
            strive for excellence. Experience the thrill of competitive soccer
            in a supportive environment.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-[1px] bg-white/50" />
          <span className="text-white/50 text-sm tracking-wider">
            SCROLL TO EXPLORE
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"
        style={{ opacity }}
      />
    </section>
  );
}
