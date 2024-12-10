"use client";

import { motion } from "framer-motion";
import { GlitchText } from "./GlitchText";
import { GlowingButton } from "./GlowingButton";
import { LightStreak } from "./LightStreak";
import { NeonFrame } from "./NeonFrame";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      <LightStreak
        color="rgba(239, 68, 68, 0.5)"
        angle={60}
        top="20%"
        left="-10%"
        width="50%"
        height="40%"
      />
      <LightStreak
        color="rgba(59, 130, 246, 0.5)"
        angle={-45}
        top="50%"
        left="70%"
        width="40%"
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
            GET IN TOUCH
          </GlitchText>
          <p className="text-lg md:text-xl mb-12 text-purple-300">
            Want to collaborate, book a performance, or join our crew? We'd love
            to hear from you!
          </p>
          <NeonFrame>
            <form className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-lg">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-white/10 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/50 text-purple-300 placeholder-purple-400/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-white/10 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/50 text-purple-300 placeholder-purple-400/50"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 bg-white/10 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/50 text-purple-300 placeholder-purple-400/50"
              ></textarea>
              <div className="flex justify-center">
                <GlowingButton href="#" variant="default">
                  SEND MESSAGE
                </GlowingButton>
              </div>
            </form>
          </NeonFrame>
        </motion.div>
      </div>
    </section>
  );
}
