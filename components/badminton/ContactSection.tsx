"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
            JOIN OUR CIRCLE
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your badminton game to the next level? Get in touch
            with us!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors rounded-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white px-8 py-4 text-lg font-bold tracking-wider hover:from-blue-600 hover:via-purple-600 hover:to-red-600 transition-colors duration-300 rounded-md"
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
