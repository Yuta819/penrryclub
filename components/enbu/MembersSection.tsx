"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  {
    name: "炎龍 太郎",
    role: "リーダー",
    image: "/images/a/1.png",
  },
  {
    name: "火華 花子",
    role: "コレオグラファー",
    image: "/images/a/2.png",
  },
  {
    name: "焔 次郎",
    role: "技術指導",
    image: "/images/a/3.png",
  },
  {
    name: "灯 美咲",
    role: "広報担当",
    image: "/images/a/4.png",
  },
];

export default function MembersSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          メンバー紹介
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-red-900 to-orange-700 p-6 rounded-lg text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
