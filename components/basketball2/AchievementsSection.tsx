"use client";

import { motion } from "framer-motion";
import SpinningTrophy from "./decorations/SpinningTrophy";

const achievements = [
  "University League Champions 2023",
  "State Tournament Runners-up 2022",
  "Most Valuable Player Award - John Doe",
  "Best Defensive Team 2023",
  "Highest Scoring Average in League History",
];

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-black text-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <SpinningTrophy />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_#FFD700]">
          Our Achievements
        </h2>
        <ul className="max-w-2xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4 flex items-center"
            >
              <svg
                className="w-6 h-6 text-yellow-500 mr-2 drop-shadow-[0_0_5px_#FFD700]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                {achievement}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
