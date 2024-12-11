"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-50" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Our Club
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg max-w-2xl mx-auto text-center"
        >
          Our university soccer club is dedicated to fostering a love for the
          beautiful game, promoting teamwork, and developing skilled players.
          Join us in our journey to excellence!
        </motion.p>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 bg-emerald-200"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 50 + 50}px`,
            }}
            animate={{
              height: [
                `${Math.random() * 50 + 50}px`,
                `${Math.random() * 50 + 100}px`,
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
