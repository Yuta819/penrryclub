"use client";

import { motion } from "framer-motion";
import { GlitchText } from "./GlitchText";
import { LightStreak } from "./LightStreak";
import { NeonFrame } from "./NeonFrame";

export function AboutSection() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      <LightStreak
        color="rgba(59, 130, 246, 0.5)"
        angle={60}
        top="20%"
        left="-10%"
        width="40%"
        height="60%"
      />
      <LightStreak
        color="rgba(239, 68, 68, 0.5)"
        angle={-45}
        top="50%"
        left="80%"
        width="30%"
        height="50%"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <GlitchText className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            ABOUT US
          </GlitchText>
          <p className="text-lg md:text-xl mb-8 text-white">
            We are a collective of passionate street dancers pushing the
            boundaries of urban dance. Our mission is to inspire, create, and
            innovate through the power of movement.
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
          >
            {["PASSION", "CREATIVITY", "COMMUNITY"].map((item, index) => (
              <NeonFrame key={index}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                    {item}
                  </h3>
                  <p className="text-white">
                    Driving force behind our every move and performance.
                  </p>
                </motion.div>
              </NeonFrame>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
