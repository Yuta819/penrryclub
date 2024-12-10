"use client";

import { motion } from "framer-motion";
import { GlowingCard } from "./DecorativeElements";

const features = [
  {
    title: "Beginner Friendly",
    description:
      "Whether you're strapping on skis for the first time or looking to perfect your technique, our supportive community welcomes all skill levels.",
    icon: "🎿",
  },
  {
    title: "Winter Trips",
    description:
      "Regular trips to Japan's best ski resorts, where powder snow and breathtaking mountain views create unforgettable experiences.",
    icon: "⛰️",
  },
  {
    title: "Skill Development",
    description:
      "Professional instruction and peer learning opportunities to help you progress from pizza to parallel and beyond.",
    icon: "📈",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-sky-50 relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-pink-600">
            Welcome to Our Snow Paradise
          </h2>
          <p className="text-lg text-sky-800/80 max-w-2xl mx-auto">
            Join us for exciting winter adventures and create lasting memories
            with fellow ski enthusiasts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GlowingCard className="h-full p-6">
                <div className="text-4xl mb-4 animate-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-sky-900">
                  {feature.title}
                </h3>
                <p className="text-sky-700/80">{feature.description}</p>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
