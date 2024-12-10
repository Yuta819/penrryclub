"use client";

import { motion } from "framer-motion";
import { GlitchText } from "./GlitchText";
import Image from "next/image";
import { LightStreak } from "./LightStreak";
import { NeonFrame } from "./NeonFrame";

const members = [
  {
    name: "ALEX",
    role: "Breakdancer",
    image: "/images/a/1.png",
  },
  {
    name: "MIKA",
    role: "Popper",
    image: "/images/a/2.png",
  },
  {
    name: "JORDAN",
    role: "Locker",
    image: "/images/a/3.png",
  },
  {
    name: "TAYLOR",
    role: "Hip Hop",
    image: "/images/a/4.png",
  },
];

export function MembersSection() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      <LightStreak
        color="rgba(59, 130, 246, 0.5)"
        angle={-30}
        top="30%"
        left="70%"
        width="40%"
        height="60%"
      />
      <LightStreak
        color="rgba(167, 139, 250, 0.5)"
        angle={45}
        top="60%"
        left="-10%"
        width="50%"
        height="40%"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GlitchText className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            CREW MEMBERS
          </GlitchText>
          <p className="text-lg md:text-xl text-purple-300">
            Meet the talented individuals behind our performances
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <NeonFrame key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                    {member.name}
                  </h3>
                  <p className="text-purple-300">{member.role}</p>
                </div>
              </motion.div>
            </NeonFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
