"use client";

import { motion } from "framer-motion";
import { GlowingText } from "./GlowingText";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <GlowingText
            text="CONTACT US"
            className="text-3xl md:text-5xl font-bold mb-6"
          />
          <p className="text-lg md:text-xl text-green-400/80 max-w-3xl mx-auto">
            Interested in joining our tennis circle? Get in touch with us!
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-green-400 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-black/50 border border-green-500/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-green-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-black/50 border border-green-500/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-green-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-black/50 border border-green-500/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
