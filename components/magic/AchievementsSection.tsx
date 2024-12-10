"use client";

import { motion } from "framer-motion";
import MagicText from "./decorative/MagicText";

const achievements = [
  {
    year: "2023",
    title: "全国大学マジックコンテスト",
    description: "グランプリ受賞",
  },
  {
    year: "2022",
    title: "イリュージョン創造コンペティション",
    description: "最優秀賞受賞",
  },
  {
    year: "2021",
    title: "地域文化振興賞",
    description: "特別賞受賞",
  },
];

export default function AchievementsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <MagicText className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Magical Achievements
        </MagicText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-6 border border-purple-500/30 rounded-lg bg-purple-900/20 backdrop-blur-sm"
            >
              <div className="text-sm text-purple-300 mb-4">
                {achievement.year}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-purple-200">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
