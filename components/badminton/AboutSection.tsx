"use client";

import { motion } from "framer-motion";
import { ShuttlecockGlow } from "./ShuttlecockGlow";

const features = [
  {
    title: "SPEED",
    description:
      "Experience the fastest racquet sport, with shuttlecocks reaching speeds over 300 mph.",
  },
  {
    title: "AGILITY",
    description:
      "Develop lightning-fast reflexes and improve your overall agility on the court.",
  },
  {
    title: "COMMUNITY",
    description:
      "Join a vibrant community of players, from beginners to advanced competitors.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
            ABOUT OUR CIRCLE
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Dive into the fast-paced world of badminton with our passionate
            community of players.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <ShuttlecockGlow className="mb-4" />
              <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
