"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/circles/soccer2/soccerPC.png"
          alt="Soccer player kicking ball at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          University Soccer Club
        </h1>
        <p className="text-xl md:text-2xl text-white drop-shadow-lg">
          Kick your way to glory!
        </p>
      </motion.div>
    </section>
  );
}
