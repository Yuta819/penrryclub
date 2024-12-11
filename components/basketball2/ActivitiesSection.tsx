"use client";

import { motion } from "framer-motion";
import GlowingCourt from "./decorations/GlowingCourt";

export default function ActivitiesSection() {
  const activities = [
    { date: "2023-11-15", event: "Practice Session" },
    { date: "2023-11-20", event: "Friendly Match vs State University" },
    { date: "2023-12-01", event: "Tournament Qualifier" },
  ];

  return (
    <section className="py-20 bg-black text-yellow-500 relative overflow-hidden">
      <GlowingCourt />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_#FFD700]">
          Upcoming Activities
        </h2>
        <div className="max-w-2xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6 flex items-center"
            >
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 drop-shadow-[0_0_5px_#FFD700]">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                  {activity.date}
                </p>
                <p className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                  {activity.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
