"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GeometricFrame } from "./GeometricFrame";

interface Member {
  name: string;
  position: string;
  image: string;
}

const members: Member[] = [
  {
    name: "Kenji Tanaka",
    position: "Captain",
    image: "/images/placeholder.svg",
  },
  {
    name: "Yuki Sato",
    position: "Vice Captain",
    image: "/images/placeholder.svg",
  },
  {
    name: "Hana Watanabe",
    position: "Manager",
    image: "/images/placeholder.svg",
  },
  {
    name: "Takeshi Nakamura",
    position: "Coach",
    image: "/images/placeholder.svg",
  },
];

export function MembersSection() {
  return (
    <section id="members" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GeometricFrame className="inline-block p-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              OUR TEAM
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who make our basketball circle
              thrive.
            </p>
          </GeometricFrame>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <GeometricFrame className="h-full" delay={index * 0.2}>
                <div className="relative aspect-[3/4] mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </GeometricFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
