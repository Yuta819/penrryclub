"use client";

import { motion } from "framer-motion";
import { GlitchText } from "./GlitchText";
import Image from "next/image";
import { LightStreak } from "./LightStreak";
import { NeonFrame } from "./NeonFrame";

const performances = [
  {
    title: "URBAN FUSION",
    date: "2024.07.15",
    image: "/images/s/5.png",
  },
  {
    title: "STREET BEATS",
    date: "2024.08.22",
    image: "/images/s/6.png",
  },
  {
    title: "RHYTHM REVOLUTION",
    date: "2024.09.30",
    image: "/images/s/7.png",
  },
];

export function PerformancesSection() {
  return (
    <section
      id="performances"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      <LightStreak
        color="rgba(167, 139, 250, 0.5)"
        angle={30}
        top="10%"
        left="60%"
        width="50%"
        height="40%"
      />
      <LightStreak
        color="rgba(239, 68, 68, 0.5)"
        angle={-60}
        top="70%"
        left="-10%"
        width="40%"
        height="50%"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GlitchText className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            PERFORMANCES
          </GlitchText>
          <p className="text-lg md:text-xl text-purple-300">
            Experience the energy of our upcoming shows
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {performances.map((performance, index) => (
            <NeonFrame key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={performance.image}
                  alt={performance.title}
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                    {performance.title}
                  </h3>
                  <p className="text-purple-300">{performance.date}</p>
                </div>
              </motion.div>
            </NeonFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
