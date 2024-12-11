"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const players = [
  { name: "John Doe", position: "Forward", image: "/images/a/1.png" },
  {
    name: "Jane Smith",
    position: "Midfielder",
    image: "/images/a/2.png",
  },
  { name: "Mike Johnson", position: "Defender", image: "/images/a/3.png" },
  { name: "Sarah Williams", position: "Goalkeeper", image: "/images/a/4.png" },
];

export default function MembersSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((player, index) => (
            <PlayerCard key={index} player={player} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayerCard({ player, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-64 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 bg-opacity-10 rounded-lg p-6 flex flex-col justify-center items-center backface-hidden"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold mb-2">{player.name}</h3>
        <p>{player.position}</p>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-400 bg-opacity-10 rounded-lg p-6 flex flex-col justify-center items-center backface-hidden"
        initial={{ rotateY: 180 }}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        transition={{ duration: 0.6 }}
      >
        <p>{player.stats}</p>
      </motion.div>
    </motion.div>
  );
}
