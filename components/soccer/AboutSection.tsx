"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "EXCELLENCE",
    description:
      "Push your limits and develop your skills through intensive training and competitive matches.",
  },
  {
    title: "COMMUNITY",
    description:
      "Be part of a tight-knit team that supports and motivates each other to achieve greatness.",
  },
  {
    title: "PASSION",
    description:
      "Share your love for the beautiful game with players who live and breathe soccer.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              THE SPIRIT OF THE GAME
            </h2>
            <div className="w-24 h-1 bg-black mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold mb-4 tracking-widest">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 md:mt-24 text-center"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-black text-white text-sm tracking-wider hover:bg-gray-900 transition-colors"
            >
              JOIN THE TEAM
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
