"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { typography } from "@/utils/typography";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2
              className={`${typography.heading} ${typography.metallic} text-3xl md:text-4xl mb-6`}
            >
              About Us
            </h2>
            <p className="text-gray-300 mb-6">
              Our baseball club is dedicated to fostering excellence both on and
              off the field. We believe in the power of teamwork, discipline,
              and continuous improvement.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                <span className="text-gray-300">Regular practice sessions</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                <span className="text-gray-300">
                  Experienced coaching staff
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                <span className="text-gray-300">
                  Competitive tournament participation
                </span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/a/1"
              alt="Baseball Team"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
