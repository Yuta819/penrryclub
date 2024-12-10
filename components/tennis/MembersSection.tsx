"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowingText } from "./GlowingText";

interface Member {
  name: string;
  position: string;
  image: string;
}

const members: Member[] = [
  {
    name: "Akira Tanaka",
    position: "Captain",
    image: "/images/a/1.png",
  },
  {
    name: "Yuki Sato",
    position: "Vice Captain",
    image: "/images/a/2.png",
  },
  {
    name: "Hana Watanabe",
    position: "Manager",
    image: "/images/a/3.png",
  },
  {
    name: "Kenji Nakamura",
    position: "Coach",
    image: "/images/a/4.png",
  },
];

export function MembersSection() {
  return (
    <section id="members" className="relative py-24 overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <GlowingText
            text="OUR TEAM"
            className="text-3xl md:text-5xl font-bold mb-6"
          />
          <p className="text-lg md:text-xl text-green-400/80 max-w-3xl mx-auto">
            Meet the dedicated individuals who make our tennis circle thrive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-green-500/20 hover:border-green-500/50 transition-all"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-green-400 mb-1">
                  {member.name}
                </h3>
                <p className="text-white/80">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
