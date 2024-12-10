"use client";

import { motion } from "framer-motion";
import { DiagonalStripes } from "./DiagonalStripes";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gray-900 py-24 md:py-32 relative overflow-hidden"
    >
      <DiagonalStripes className="absolute bottom-0 left-0 h-32 w-32 text-orange-500 opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              JOIN OUR RANKS
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-gray-400">
              Ready to become part of our rugby family? Get in touch with us!
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition-colors"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-black px-8 py-4 text-lg font-bold tracking-wider hover:bg-orange-400 transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
