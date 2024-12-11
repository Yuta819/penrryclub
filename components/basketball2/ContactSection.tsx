"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-20 bg-black text-yellow-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_#FFD700]">
          Contact Us
        </h2>
        <div className="max-w-md mx-auto bg-yellow-500 p-8 rounded-lg shadow-lg drop-shadow-[0_0_10px_#FFD700]">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-black font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-black text-yellow-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-black font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-black text-yellow-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-black font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-black text-yellow-500"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-black text-yellow-500 font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
