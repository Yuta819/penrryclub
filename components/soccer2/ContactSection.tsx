"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import GlowingNet from "./decorations/GlowingNet";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 bg-white bg-opacity-10 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-white bg-opacity-10 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 bg-white bg-opacity-10 rounded"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-white text-green-900 px-6 py-3 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
