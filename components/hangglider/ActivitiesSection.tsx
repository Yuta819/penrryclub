// File: components/hangglider/ActivitiesSection.tsx
import { motion } from "framer-motion";

const activities = [
  {
    title: "週末練習",
    description: "毎週末、近郊の丘陵地帯で練習飛行を行っています。",
  },
  {
    title: "合宿",
    description: "年2回、長期休暇を利用して集中的な練習合宿を実施しています。",
  },
  {
    title: "大会参加",
    description:
      "地域や全国規模の大会に積極的に参加し、技術向上を図っています。",
  },
  {
    title: "安全講習",
    description: "定期的に安全講習会を開催し、最新の安全知識を学んでいます。",
  },
];

export default function ActivitiesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center snap-start py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white text-shadow-lg"
        >
          活動内容
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white text-shadow-md">
                {activity.title}
              </h3>
              <p className="text-sm sm:text-base text-white text-shadow-sm">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
