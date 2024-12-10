"use client";

import { motion } from "framer-motion";
import { GlowingText } from "./GlowingText";
import Image from "next/image";

interface Activity {
  title: string;
  description: string;
  image: string;
}

const activities: Activity[] = [
  {
    title: "Weekly Practice",
    description:
      "Join us every Tuesday and Thursday for skill-building sessions and friendly matches.",
    image: "/images/a/1.png",
  },
  {
    title: "Monthly Tournament",
    description:
      "Test your skills in our monthly in-circle tournament. Great for both beginners and advanced players!",
    image: "/images/a/2.png",
  },
  {
    title: "Annual Training Camp",
    description:
      "Participate in our intensive summer training camp to dramatically improve your game.",
    image: "/images/a/3.png",
  },
];

export function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="relative py-24 overflow-hidden bg-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <GlowingText
            text="OUR ACTIVITIES"
            className="text-3xl md:text-5xl font-bold mb-6"
          />
          <p className="text-lg md:text-xl text-green-400/80 max-w-3xl mx-auto">
            Explore the exciting events and activities our tennis circle offers
            throughout the year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-green-500/20 hover:border-green-500/50 transition-all"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-2">
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
