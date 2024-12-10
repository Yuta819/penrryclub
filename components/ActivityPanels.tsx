"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Activity {
  id: number;
  date: string;
  title: string;
  description: string;
  imagePosition: "left" | "right";
}

const activities: Activity[] = [
  {
    id: 1,
    date: "2023.12.15",
    title: "冬のライブフェスティバル",
    description:
      "年末恒例のライブフェスティバルを開催。今年は過去最大の観客動員数を記録し、バンド部の実力と人気の高さを証明しました。新曲のお披露目も行い、会場は熱気に包まれました。",
    imagePosition: "left",
  },
  {
    id: 2,
    date: "2023.09.30",
    title: "学園祭スペシャルライブ",
    description:
      "大学の学園祭メインステージに出演。他大学からのゲストバンドも招き、様々なジャンルの音楽で会場を盛り上げました。照明や音響にもこだわり、プロフェッショナルな演出を実現。",
    imagePosition: "right",
  },
  {
    id: 3,
    date: "2023.07.20",
    title: "夏合宿＆楽曲制作",
    description:
      "一週間の夏合宿を実施。新曲のレコーディングと、upcoming winter festivalに向けた楽曲制作を集中的に行いました。メンバー同士の絆も一層深まりました。",
    imagePosition: "left",
  },
  {
    id: 4,
    date: "2023.05.05",
    title: "新入生歓迎ライブ",
    description:
      "新しく加入した1年生を歓迎するスペシャルライブを開催。先輩から後輩へとバンドの魂を受け継ぐ伝統的なイベントとして、世代を超えた交流の場となりました。",
    imagePosition: "right",
  },
];

export function ActivityPanels() {
  return (
    <div className="relative bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className="relative mb-32 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div
              className={`flex flex-col ${
                activity.imagePosition === "right"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              } gap-8 md:gap-16`}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 aspect-[4/3] px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-x-4 sm:inset-x-6 lg:inset-x-8 inset-y-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-75" />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 border border-white/10" />
                </div>
              </div>

              {/* Content Section */}
              <div className="relative w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="absolute -inset-4 bg-white/5 -skew-y-2" />
                <div className="relative">
                  <div className="text-5xl font-bold text-purple-500 mb-4">
                    {activity.date}
                  </div>
                  <h3 className="text-3xl font-bold mb-6">{activity.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className={`absolute top-0 ${
                activity.imagePosition === "right" ? "left-0" : "right-0"
              } 
                w-32 h-32 border-t-2 border-l-2 border-purple-500 -translate-x-8 -translate-y-8 opacity-50`}
            />
            <div
              className={`absolute bottom-0 ${
                activity.imagePosition === "right" ? "right-0" : "left-0"
              } 
                w-32 h-32 border-b-2 border-r-2 border-blue-500 translate-x-8 translate-y-8 opacity-50`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
