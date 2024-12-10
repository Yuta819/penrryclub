"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import GridBackground from "./decorative/GridBackground";

export default function MembersSection() {
  const members = [
    { role: "代表", name: "山田太郎", image: "/images/a/3.png" },
    { role: "副代表", name: "鈴木花子", image: "/images/a/4.png" },
    { role: "顧問", name: "佐藤先生", image: "/images/a/5.png" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <GridBackground className="opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionTitle title="メンバー紹介" subtitle="私たちの誇り" />

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
              <div className="relative h-96 overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-medium mb-2 text-red-400">
                  {member.role}
                </p>
                <h3 className="text-xl font-japanese text-glow">
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
