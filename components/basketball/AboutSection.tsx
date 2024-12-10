"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GeometricFrame } from "./GeometricFrame";

export function AboutSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className="relative min-h-screen flex items-center bg-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <GeometricFrame className="inline-block p-4 md:p-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
              ABOUT US
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              We are a passionate group of basketball enthusiasts dedicated to
              improving our skills and fostering a community of players.
            </p>
          </GeometricFrame>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {aboutItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ scale }}
            >
              <GeometricFrame className="h-full p-4 md:p-6" delay={index * 0.2}>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-black">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {item.description}
                </p>
              </GeometricFrame>
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
      "Our circle is more than just basketball; it's a place to make friends and build lasting relationships.",
  },
  {
    title: "Competitions",
    description:
      "We regularly participate in local and regional tournaments to test our skills and represent our circle.",
  },
];
