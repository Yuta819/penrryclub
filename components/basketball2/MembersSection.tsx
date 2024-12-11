"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  { name: "John Doe", position: "Point Guard", image: "/images/a/1.png" },
  { name: "Jane Smith", position: "Shooting Guard", image: "/images/a/2.png" },
  { name: "Mike Johnson", position: "Small Forward", image: "/images/a/3.png" },
  {
    name: "Sarah Williams",
    position: "Power Forward",
    image: "/images/a/4.png",
  },
  { name: "Chris Brown", position: "Center", image: "/images/a/5.png" },
];

export default function MembersSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500 drop-shadow-[0_0_10px_#FFD700]">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-yellow-500 rounded-lg shadow-lg overflow-hidden drop-shadow-[0_0_5px_#FFD700]"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {member.name}
                </h3>
                <p className="text-gray-800 mb-4">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
