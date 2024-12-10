"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { typography } from "@/utils/typography";

const achievements = [
  {
    year: "2023",
    title: "University League Champions",
    description: "First place in the regional university baseball league",
  },
  {
    year: "2022",
    title: "Best Team Spirit Award",
    description: "Recognized for exceptional teamwork and sportsmanship",
  },
  {
    year: "2021",
    title: "Tournament Runners-up",
    description: "Second place in the national university tournament",
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white relative overflow-hidden">
      {/* Light beam effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-96 bg-white/10"
            style={{
              left: `${20 * i}%`,
              top: "-20%",
              transform: "rotate(45deg)",
            }}
            animate={{
              top: ["120%", "-20%"],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className={`${typography.heading} ${typography.metallic} text-3xl md:text-4xl mb-4`}
          >
            Our Achievements
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Celebrating our success and continuous growth in baseball
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
              <div className="text-sm text-gray-400 mb-2">
                {achievement.year}
              </div>
              <h3
                className={`${typography.metallic} text-xl font-semibold mb-2`}
              >
                {achievement.title}
              </h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
