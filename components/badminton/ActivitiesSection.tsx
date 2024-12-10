"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Weekly Practice",
    description:
      "Hone your skills with our regular training sessions, suitable for all levels.",
    image: "/images/placeholder.svg",
  },
  {
    title: "Monthly Tournaments",
    description:
      "Test your abilities in our exciting monthly in-circle competitions.",
    image: "/images/placeholder.svg",
  },
  {
    title: "Skill Workshops",
    description:
      "Learn advanced techniques from experienced players and guest coaches.",
    image: "/images/placeholder.svg",
  },
];

export function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
            OUR ACTIVITIES
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Engage in a variety of events designed to improve your skills and
            foster camaraderie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {activity.title}
                </h3>
                <p className="text-gray-300">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
