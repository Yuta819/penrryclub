"use client";

import { motion } from "framer-motion";
import LightTrailCard from "./Decorations/LightTrailCard";
import CyberFrame from "./Decorations/CyberFrame";
import Image from "next/image";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "National Robotics Champion",
      year: "2023",
      image: "/images/a/4.png",
    },
    {
      title: "Best AI Implementation Award",
      year: "2022",
      image: "/images/a/5.png",
    },
    {
      title: "Innovation in Technology",
      year: "2021",
      image: "/images/a/6.png",
    },
    {
      title: "Outstanding Team Performance",
      year: "2020",
      image: "/images/a/7.png",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-900 relative">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_calc(50%-1px),#1a365d_calc(50%),transparent_calc(50%+1px))] bg-[length:40px_40px] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-blue-400"
        >
          Our Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <LightTrailCard key={index}>
              <CyberFrame className="p-6">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      width={96}
                      height={96}
                      className="rounded object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-300">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400">{achievement.year}</p>
                  </div>
                </div>
              </CyberFrame>
            </LightTrailCard>
          ))}
        </div>
      </div>
    </section>
  );
}
