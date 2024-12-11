"use client";

import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";

const activities = [
  { name: "週間練習", description: "基本技術の習得と向上" },
  { name: "パフォーマンス創作", description: "新しい炎舞ルーティンの開発" },
  { name: "安全講習", description: "火の取り扱いと安全対策" },
  { name: "イベント出演", description: "学園祭やローカルイベントでの公演" },
  { name: "ワークショップ", description: "一般向け炎舞体験会の開催" },
  { name: "合宿", description: "集中練習と技術交流" },
];

export default function ActivitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-red-900 to-orange-700">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          活動内容
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black bg-opacity-30 p-6 rounded-lg"
            >
              <FaFire className="text-4xl mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
              <p>{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
