"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LightTrailCard from "./Decorations/LightTrailCard";
import CyberFrame from "./Decorations/CyberFrame";

export default function ActivitiesSection() {
  const activities = [
    { title: "Robot Design", image: "/images/a/1.png" },
    { title: "AI Development", image: "/images/a/2.png" },
    { title: "Competitions", image: "/images/a/3.png" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-blue-400"
        >
          Our Activities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <LightTrailCard key={index} className="bg-gray-800">
              <CyberFrame>
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">
                    {activity.title}
                  </h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </CyberFrame>
            </LightTrailCard>
          ))}
        </div>
      </div>
    </section>
  );
}
