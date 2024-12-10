"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowingCard } from "./DecorativeElements";

interface Member {
  name: string;
  position: string;
  image: string;
  description: string;
}

const members: Member[] = [
  {
    name: "Akira Tanaka",
    position: "Captain",
    image: "/images/placeholder.svg",
    description:
      "Expert skier with 10 years of experience, leading our team to new heights.",
  },
  {
    name: "Yuki Sato",
    position: "Vice Captain",
    image: "/images/placeholder.svg",
    description:
      "Freestyle specialist, bringing creativity and flair to our slopes.",
  },
  {
    name: "Hana Watanabe",
    position: "Manager",
    image: "/images/placeholder.svg",
    description:
      "Organizational wizard, ensuring smooth operations on and off the mountain.",
  },
  {
    name: "Kenji Nakamura",
    position: "Coach",
    image: "/images/placeholder.svg",
    description:
      "Former Olympic skier, now dedicated to nurturing the next generation of talent.",
  },
];

export function TeamSection() {
  return (
    <section
      id="members"
      className="py-24 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-pink-600">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-sky-800/80 max-w-3xl mx-auto">
            Get to know the dedicated individuals who make our ski circle thrive
            on and off the slopes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GlowingCard className="h-full overflow-hidden">
                <div className="relative h-80 w-full mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-sky-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pink-600 mb-4">{member.position}</p>
                  <p className="text-sky-800/80 text-sm">
                    {member.description}
                  </p>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
