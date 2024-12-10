"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagicText from "./decorative/MagicText";

const members = [
  { name: "星野 魔法", role: "会長", image: "/images/a/3" },
  { name: "月川 幻想", role: "副会長", image: "/images/a/4" },
  { name: "森田 奇術", role: "イベント企画", image: "/images/a/5" },
];

export default function MembersSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <MagicText className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Our Magical Members
        </MagicText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-80 overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-medium mb-2 text-purple-300">
                  {member.role}
                </p>
                <h3 className="text-xl font-bold">{member.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
