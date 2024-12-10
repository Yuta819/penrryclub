"use client";

import { motion } from "framer-motion";
import CyberFrame from "./Decorations/CyberFrame";

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-800 relative">
      {/* 背景の斜めグリッド */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_calc(50%-1px),#1a365d_calc(50%),transparent_calc(50%+1px))] bg-[length:40px_40px] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center text-blue-400"
        >
          Contact Us
        </motion.h2>
        <CyberFrame className="max-w-lg mx-auto p-8">
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </CyberFrame>
      </div>
    </section>
  );
}
