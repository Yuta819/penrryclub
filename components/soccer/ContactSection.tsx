"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                JOIN OUR TEAM
              </h2>
              <div className="w-24 h-1 bg-white mb-8" />
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Whether you're an experienced player or just starting out, if
                you share our passion for soccer, we want to hear from you. Take
                the first step towards being part of something extraordinary.
              </p>
              <div className="space-y-4 text-white/60">
                <p>Training Hours: Mon/Wed/Fri 18:00-20:00</p>
                <p>Location: University Main Ground</p>
                <p>Email: soccer.circle@university.edu</p>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-white/60 mb-2 tracking-wider">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2 tracking-wider">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2 tracking-wider">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-black text-sm tracking-wider hover:bg-white/90 transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
