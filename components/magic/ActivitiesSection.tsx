"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagicText from "./decorative/MagicText";

const activities = [
  {
    title: "マジックショー",
    description: "定期的に開催する驚きと感動のパフォーマンス",
    image: "/images/a/6.png",
  },
  {
    title: "魔法学習会",
    description: "歴史から最新技術まで、魔法の知識を深める",
    image: "/images/a/7.png",
  },
  {
    title: "創造ワークショップ",
    description: "新しいイリュージョンを共に開発する場",
    image: "/images/a/8.png",
  },
];

export default function ActivitiesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <MagicText className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Magical Activities
        </MagicText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-purple-200">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
