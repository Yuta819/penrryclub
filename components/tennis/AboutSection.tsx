"use client";

import { motion } from "framer-motion";
import { GlowingText } from "./GlowingText";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <GlowingText
            text="ABOUT US"
            className="text-4xl md:text-6xl font-bold mb-6 tracking-wider"
          />
          <p className="text-lg md:text-xl text-green-400/80 max-w-3xl mx-auto">
            We are a passionate group of tennis enthusiasts dedicated to
            improving our skills and fostering a community of players.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                {item.title}
              </h3>
              <p className="text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const aboutItems = [
  {
    title: "Skill Development",
    description:
      "We focus on improving techniques, strategies, and overall gameplay for players of all levels.",
  },
  {
    title: "Community",
    description:
      "Our circle is more than just tennis; it's a place to make friends and build lasting relationships.",
  },
  {
    title: "Competitions",
    description:
      "We regularly participate in local and regional tournaments to test our skills and represent our circle.",
  },
];
