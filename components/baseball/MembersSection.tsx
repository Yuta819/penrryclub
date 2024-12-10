"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { typography } from "@/utils/typography";

export default function MembersSection() {
  const members = [
    { role: "Captain", image: "/images/a/2" },
    { role: "Vice Captain", image: "/images/a/3" },
    { role: "Coach", image: "/images/a/4" },
    // Add more members as needed
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className={`${typography.heading} ${typography.metallic} text-3xl md:text-4xl mb-4`}
          >
            Our Team
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated members who make our baseball club exceptional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.role}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`${typography.metallic} text-xl font-semibold`}>
                  {member.role}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
