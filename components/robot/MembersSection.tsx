"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LightTrailCard from "./Decorations/LightTrailCard";
import CyberFrame from "./Decorations/CyberFrame";

export default function MembersSection() {
  const members = [
    { name: "John Doe", role: "Team Lead", image: "/images/placeholder.svg" },
    {
      name: "Jane Smith",
      role: "AI Specialist",
      image: "/images/placeholder.svg",
    },
    {
      name: "Mike Johnson",
      role: "Hardware Engineer",
      image: "/images/placeholder.svg",
    },
    {
      name: "Emily Brown",
      role: "Software Developer",
      image: "/images/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-800 relative">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_calc(50%-1px),#1a365d_calc(50%),transparent_calc(50%+1px))] bg-[length:40px_40px] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-blue-400"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <LightTrailCard key={index}>
              <CyberFrame>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1 text-blue-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </CyberFrame>
            </LightTrailCard>
          ))}
        </div>
      </div>
    </section>
  );
}
