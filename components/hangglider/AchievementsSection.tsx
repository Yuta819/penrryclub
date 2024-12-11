// File: components/hangglider/AchievementsSection.tsx
import { motion } from "framer-motion";

const achievements = [
  { year: "2023", title: "全国大学ハングライダー選手権 団体3位" },
  { year: "2022", title: "関東学生ハングライダー大会 個人優勝" },
  { year: "2021", title: "日本学生ハングライダー連盟 技術賞受賞" },
  { year: "2020", title: "大学対抗ハングライダー距離飛行 準優勝" },
];

export default function AchievementsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center snap-start py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white text-shadow-lg"
        >
          実績
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6 bg-white bg-opacity-20 p-4 sm:p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-0 sm:mr-4 text-shadow-md">
                  {achievement.year}
                </div>
                <div className="text-base sm:text-xl text-white text-center sm:text-left text-shadow-sm">
                  {achievement.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
