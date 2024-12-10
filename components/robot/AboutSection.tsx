"use client";

import { motion } from "framer-motion";
import LightTrailCard from "./Decorations/LightTrailCard";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center text-blue-400"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-300 mb-6 text-center max-w-3xl mx-auto"
        >
          Penrry Robotics is at the forefront of innovation, pushing the
          boundaries of what's possible in robotics and AI. Our team of
          passionate engineers and creators work tirelessly to bring
          cutting-edge robotic solutions to life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {["Innovation", "Teamwork", "Excellence"].map((value, index) => (
            <LightTrailCard
              key={index}
              className="bg-gray-700 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                {value}
              </h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </LightTrailCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
