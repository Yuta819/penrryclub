"use client";

import { motion } from "framer-motion";
import { GlowingCard, ShimmerButton } from "./DecorativeElements";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-pink-600">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-sky-800/80 max-w-3xl mx-auto">
            Interested in joining our ski circle? Have questions? We'd love to
            hear from you!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <GlowingCard>
            <form className="space-y-6 p-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-sky-900 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-white/50 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-sky-900 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-white/50 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-sky-900 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/50 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                ></textarea>
              </div>
              <div>
                <ShimmerButton>Send Message</ShimmerButton>
              </div>
            </form>
          </GlowingCard>
        </div>
      </div>
    </section>
  );
}
