"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import GlowingNet from "./decorations/GlowingNet";

const activities = [
  { title: "Weekly Practice", date: "Every Tuesday & Thursday", side: "left" },
  { title: "Friendly Matches", date: "Monthly", side: "right" },
  { title: "University Tournament", date: "Annually in May", side: "left" },
  { title: "Summer Training Camp", date: "July - August", side: "right" },
];

export default function ActivitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Activities</h2>
        <div className="relative">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className={`flex mb-8 ${
                activity.side === "left" ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, x: activity.side === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg max-w-md">
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-300">{activity.date}</p>
              </div>
            </motion.div>
          ))}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white bg-opacity-20" />
        </div>
      </div>
    </section>
  );
}
