"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import MagicText from "./decorative/MagicText";

export default function ContactSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <MagicText className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Contact Us
        </MagicText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center p-6 border border-purple-500/30 rounded-lg bg-purple-900/20 backdrop-blur-sm"
          >
            <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-purple-200">magic@example.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 border border-purple-500/30 rounded-lg bg-purple-900/20 backdrop-blur-sm"
          >
            <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Location</h3>
            <p className="text-purple-200">魔法学部棟 3階</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center p-6 border border-purple-500/30 rounded-lg bg-purple-900/20 backdrop-blur-sm"
          >
            <Clock className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Meeting Times</h3>
            <p className="text-purple-200">火・金 18:00-20:00</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
