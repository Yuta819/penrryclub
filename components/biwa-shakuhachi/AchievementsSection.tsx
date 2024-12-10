"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import GridBackground from "./decorative/GridBackground";

const achievements = [
  {
    year: "2023",
    title: "全国学生音楽コンクール",
    description: "優秀賞受賞",
  },
  {
    year: "2022",
    title: "伝統音楽フェスティバル",
    description: "グランプリ受賞",
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
      <GridBackground className="opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionTitle title="受賞歴" subtitle="私たちの誇り" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-6 border border-red-600/30 rounded-lg bg-neutral-900/50 backdrop-blur-sm"
            >
              <div className="text-sm text-red-400 mb-4">
                {achievement.year}
              </div>
              <h3 className="text-xl font-japanese text-white mb-2 text-glow">
                {achievement.title}
              </h3>
              <p className="text-white/80">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
