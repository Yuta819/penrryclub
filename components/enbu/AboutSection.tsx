"use client";

import { motion } from "framer-motion";
import LightFireAnimation from "./decorations/LightFireAnimation";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black to-red-900">
      <LightFireAnimation />
      <div className="container mx-auto px-4 z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-white"
        >
          炎舞サークルについて
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black bg-opacity-50 p-6 rounded-lg"
        >
          <p className="text-lg mb-4 text-gray-300">
            炎舞サークルは、情熱と芸術を融合させた独自の舞を追求するグループです。私たちは火を操る技術と、身体表現の美しさを極めることを目指しています。
          </p>
          <p className="text-lg mb-4 text-gray-300">
            メンバーは互いに切磋琢磨し、日々の練習を通じて技術を磨いています。安全性を最優先しつつ、観客を魅了するパフォーマンスを創造することが私たちの使命です。
          </p>
          <p className="text-lg text-gray-300">
            初心者から経験者まで、火への情熱を持つ全ての人を歓迎します。一緒に炎の世界を探求しましょう。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
