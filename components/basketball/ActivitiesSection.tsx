"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GeometricFrame } from "./GeometricFrame";

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
    image: "/images/placeholder.svg",
  },
  {
    title: "Monthly Tournament",
    description:
      "Test your skills in our monthly in-circle tournament. Great for both beginners and advanced players!",
    image: "/images/placeholder.svg",
  },
  {
    title: "Annual Training Camp",
    description:
      "Participate in our intensive summer training camp to dramatically improve your game.",
    image: "/images/placeholder.svg",
  },
];

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GeometricFrame className="inline-block p-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              OUR ACTIVITIES
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the exciting events and activities our basketball circle
              offers throughout the year.
            </p>
          </GeometricFrame>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GeometricFrame className="h-full" delay={index * 0.2}>
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </GeometricFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
