"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagicText from "./decorative/MagicText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          >
            <MagicText className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
              Magic Circle
            </MagicText>
            <p className="text-xl sm:text-2xl text-purple-300 mb-8">
              魔法の世界へようこそ
            </p>
            <motion.button
              className="px-8 py-3 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Magic
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <Image
              src="/images/circles/magic/magicPC.png"
              alt="Magic Circle Hero"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl hidden md:block"
            />
            <Image
              src="/images/circles/magic/magicOS.png"
              alt="Magic Circle Hero"
              width={300}
              height={200}
              className="rounded-lg shadow-2xl md:hidden"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
