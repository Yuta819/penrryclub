"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const previews = [
  {
    title: "Robotic",
    path: "/robot",
    image: "/images/preview-windows/robot-window.png",
    description: "Explore our tech journey",
  },
  {
    title: "Magic circle",
    path: "/magic",
    image: "/images/preview-windows/robot-window.png",
    description: "Experience the magic",
  },
  {
    title: "Baseball circle",
    path: "/baseball",
    image: "/images/preview-windows/baseball-window.png",
    description: "Play the game",
  },
  {
    title: "Wa-shakuhachi",
    path: "/biwa-shakuhachi",
    image: "/images/preview-windows/biwa-shakuhachi-window.png",
    description: "Feel the Traditional",
  },
  {
    title: "Live Stage",
    path: "/live-stage",
    image: "/images/preview-windows/live-stage-window.png",
    description: "Experience the rhythm",
  },
  {
    title: "Street Dance",
    path: "/street",
    image: "/images/preview-windows/street-window.png",
    description: "Break the limits",
  },
  {
    title: "Soccer Circle",
    path: "/soccer",
    image: "/images/preview-windows/soccer-window.png",
    description: "Unleash your potential",
  },
  {
    title: "Rugby Circle",
    path: "/rugby",
    image: "/images/preview-windows/rugby-window.png",
    description: "Join the legacy",
  },
  {
    title: "Ski Circle",
    path: "/ski",
    image: "/images/preview-windows/ski-window.png",
    description: "Experience winter adventure",
  },
  {
    title: "Badminton Circle",
    path: "/badminton",
    image: "/images/preview-windows/badminton-window.png",
    description: "Feel the rush",
  },
  {
    title: "Tennis Circle",
    path: "/tennis",
    image: "/images/preview-windows/tennis-window.png",
    description: "Unleash your potential",
  },
  {
    title: "Basketball Circle",
    path: "/basketball",
    image: "/images/preview-windows/basketball-window.png",
    description: "Elevate your game",
  },
  {
    title: "Yosakoi",
    path: "/yosakoi",
    image: "/images/preview-windows/yosakoi-window.png",
    description: "Join our dance circle",
  },
];

export function PreviewWindows() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
            Explore Our World
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {previews.map((preview, index) => (
            <motion.div
              key={preview.path}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <Link href={preview.path} className="block">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-white/10 shadow-xl">
                  <Image
                    src={preview.image}
                    alt={`Preview of ${preview.title}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                      {preview.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {preview.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 transition-all duration-500 group-hover:ring-2 group-hover:ring-purple-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
