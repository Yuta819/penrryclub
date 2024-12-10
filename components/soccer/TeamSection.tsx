"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Takeshi Yamada",
    position: "Captain",
    story:
      "Started playing at age 6, led the team to 3 consecutive championships",
    image: "/images/placeholder.svg",
    personalImage: "/images/placeholder.svg",
  },
  {
    name: "Yuki Sato",
    position: "Vice Captain",
    story:
      "Discovered soccer through street football, now mentoring young players",
    image: "/images/placeholder.svg?height=600&width=400&text=Yuki",
    personalImage: "/images/placeholder.svg",
  },
  {
    name: "Hana Tanaka",
    position: "Manager",
    story: "Former national youth player bringing professional experience",
    image: "/images/placeholder.svg?height=600&width=400&text=Hana",
    personalImage: "/images/placeholder.svg",
  },
  {
    name: "Kenji Nakamura",
    position: "Coach",
    story: "20 years of coaching experience developing future stars",
    image: "/images/placeholder.svg",
    personalImage: "/images/placeholder.svg",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            OUR TEAM
          </h2>
          <div className="w-24 h-1 bg-white" />
          <p className="mt-8 text-xl text-white/70 max-w-3xl">
            Every member brings their unique story and passion to our circle,
            creating a team that's more than just players – we're a family
            united by our love for soccer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-30" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-white/70">{member.position}</p>
                </div>
              </div>

              <div className="mt-6 opacity-0 transform translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-white/80 leading-relaxed">{member.story}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
