"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LightStreak } from "./LightStreak";

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

const members: Member[] = [
  {
    id: 1,
    name: "山田 太郎",
    role: "リーダー / 振付師",
    image: "/images/a/1.png",
    description: "2019年よりリーダーを務める。独創的な振付で多くの賞を受賞。",
  },
  {
    id: 2,
    name: "佐藤 花子",
    role: "サブリーダー / 音響担当",
    image: "/images/a/2.png",
    description: "音楽制作の経験を活かし、楽曲アレンジも手がける。",
  },
  {
    id: 3,
    name: "鈴木 一郎",
    role: "演舞リーダー",
    image: "/images/a/3.png",
    description: "15年の よさこい 経験を持つ。指導者としても活躍。",
  },
];

export function MemberProfiles() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="relative bg-gradient-to-b from-black to-red-950 py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          MEMBERS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredId(member.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-400 mb-4">{member.role}</p>
                  <p
                    className={`text-gray-300 transform transition-all duration-500 ${
                      hoveredId === member.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add light streaks */}
        <LightStreak className="top-0 left-1/4" direction="diagonal-right" />
        <LightStreak className="top-1/3 right-1/4" />
        <LightStreak className="bottom-1/4 left-1/2" direction="horizontal" />
        <LightStreak className="top-2/3 right-1/3" direction="diagonal-left" />
      </div>
    </div>
  );
}
