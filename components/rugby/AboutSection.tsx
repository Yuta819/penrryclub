"use client";

import { motion } from "framer-motion";
import { DiagonalStripes } from "./DiagonalStripes";

const features = [
  {
    title: "STRENGTH",
    description:
      "Build physical and mental toughness through intensive training and challenging matches.",
  },
  {
    title: "TEAMWORK",
    description:
      "Foster unbreakable bonds with teammates as you work together towards victory.",
  },
  {
    title: "DISCIPLINE",
    description:
      "Develop self-control and dedication both on and off the field.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-black py-24 md:py-32 relative overflow-hidden"
    >
      <DiagonalStripes className="absolute top-0 right-0 h-32 w-32 text-orange-500 opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            FORGE YOUR LEGACY
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Join our rugby circle and become part of a tradition of excellence,
            camaraderie, and unwavering determination.
          </p>
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
              <h3 className="text-2xl font-bold mb-4 tracking-widest text-orange-500">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
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
            className="inline-block bg-orange-500 text-black px-8 py-4 text-lg font-bold tracking-wider hover:bg-orange-400 transition-colors duration-300"
          >
            JOIN OUR RANKS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
