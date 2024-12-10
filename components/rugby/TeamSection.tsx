"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Takeshi Yamada",
    position: "Captain",
    image: "/images/placeholder.svg",
  },
  {
    name: "Hiroshi Tanaka",
    position: "Vice Captain",
    image: "/images/placeholder.svg",
  },
  {
    name: "Yuki Sato",
    position: "Fly-half",
    image: "/images/placeholder.svg",
  },
  {
    name: "Kenji Nakamura",
    position: "Coach",
    image: "/images/placeholder.svg",
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="bg-gray-900 py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            OUR WARRIORS
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the dedicated individuals who embody the spirit of our rugby
            circle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-30" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-500">{member.position}</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
