"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import GridBackground from "./decorative/GridBackground";

const activities = [
  {
    title: "定期練習",
    description: "週に2回の練習を通じて技術を磨きます",
    image: "/images/a/6",
  },
  {
    title: "演奏会",
    description: "年に数回、公演を開催しています",
    image: "/images/a/7",
  },
  {
    title: "交流会",
    description: "他大学との合同演奏会も実施",
    image: "/images/a/8",
  },
];

export default function ActivitiesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <GridBackground />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionTitle title="活動内容" subtitle="音楽を通じた成長" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-japanese text-white mb-2 text-glow">
                  {activity.title}
                </h3>
                <p className="text-white/80">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
