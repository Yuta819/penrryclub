"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { typography } from "@/utils/typography";

const activities = [
  {
    title: "Regular Practice",
    description: "Honing skills through dedicated training sessions",
    image: "/images/a/1",
    angle: -3,
  },
  {
    title: "Tournament Games",
    description: "Competing at the highest university level",
    image: "/images/a/2",
    angle: 3,
  },
  {
    title: "Team Building",
    description: "Strengthening bonds beyond the field",
    image: "/images/a/3",
    angle: -3,
  },
];

export default function ActivitiesSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className={`${typography.subheading} text-slate-500 mb-4`}>
            What we do
          </p>
          <h2
            className={`${typography.heading} ${typography.metallic} text-3xl md:text-4xl`}
          >
            Our Activities
          </h2>
        </motion.div>

        <div className="relative space-y-24">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg shadow-xl"
                style={{
                  transform: `rotate(${activity.angle}deg)`,
                  maxWidth: "1000px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <h3
                    className={`${typography.heading} ${typography.metallic} text-2xl md:text-3xl mb-3`}
                  >
                    {activity.title}
                  </h3>
                  <p
                    className={`${typography.body} text-slate-200 text-lg max-w-xl`}
                  >
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Decorative dots */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-slate-200"
                style={{
                  top: `${15 * i}%`,
                  left: `${10 + 5 * i}%`,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
