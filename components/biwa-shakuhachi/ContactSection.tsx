"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import SectionTitle from "./SectionTitle";
import GridBackground from "./decorative/GridBackground";

export default function ContactSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <GridBackground />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionTitle title="お問い合わせ" subtitle="お気軽にご連絡ください" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center p-6 border border-red-600/30 rounded-lg bg-neutral-900/50 backdrop-blur-sm"
          >
            <Mail className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-japanese text-white mb-2 text-glow">
              メール
            </h3>
            <p className="text-white/80">contact@example.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 border border-red-600/30 rounded-lg bg-neutral-900/50 backdrop-blur-sm"
          >
            <MapPin className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-japanese text-white mb-2 text-glow">
              練習場所
            </h3>
            <p className="text-white/80">音楽棟 3階</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center p-6 border border-red-600/30 rounded-lg bg-neutral-900/50 backdrop-blur-sm"
          >
            <Clock className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-japanese text-white mb-2 text-glow">
              練習時間
            </h3>
            <p className="text-white/80">火・金 18:00-20:00</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
