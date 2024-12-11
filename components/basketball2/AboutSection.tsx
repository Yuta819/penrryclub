"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="text-4xl font-bold text-center mb-8 text-yellow-500 drop-shadow-[0_0_10px_#FFD700]"
        >
          About Our Club
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-center max-w-2xl mx-auto text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
        >
          University Basketball Club is dedicated to fostering a love for the
          game, developing skills, and building a community of passionate
          players.
        </motion.p>
      </div>
    </section>
  );
}
