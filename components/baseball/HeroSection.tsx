"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { typography } from "@/utils/typography";

export default function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* Mobile Hero Image */}
      <div className="block md:hidden w-full h-full">
        <Image
          src="/images/circles/baseball/baseballOS.png"
          alt="Baseball Hero Mobile"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Desktop Hero Image */}
      <div className="hidden md:block w-full h-full">
        <Image
          src="/images/circles/baseball/baseballPC.png"
          alt="Baseball Hero Desktop"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl space-y-8">
          <motion.p
            className={`${typography.subheading} text-slate-200 mb-2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to
          </motion.p>
          <motion.h1
            className={`${typography.heading} ${typography.metallic} text-5xl md:text-7xl mb-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Baseball Club
          </motion.h1>
          <motion.div
            className="h-px w-32 bg-slate-400"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.6 }}
          />
          <motion.p
            className={`${typography.body} text-xl md:text-2xl text-slate-200 max-w-xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Experience the thrill of the game through dedication and teamwork
          </motion.p>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </section>
  );
}
