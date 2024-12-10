"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagicText from "./decorative/MagicText";

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-24">
        <MagicText className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Our Circle
        </MagicText>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-purple-200 leading-relaxed">
              Magic Circleは、魔法と幻想の世界を探求する大学サークルです。
              私たちは、マジックの技術を磨きながら、想像力と創造性を育む場を提供しています。
            </p>
            <ul className="space-y-4 text-purple-300">
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                <span>マジックショーの企画と開催</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                <span>魔法の歴史と理論の学習</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                <span>創造的なイリュージョンの開発</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/a/2"
              alt="Magic Performance"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-purple-900/30 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
