"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "田中 優希",
    position: "Captain",
    description:
      "全日本学生選手権準優勝。精密なショットコントロールと戦略的な試合運びが持ち味。",
    images: [
      "/images/placeholder.svg?height=800&width=600&text=Yuki+1",
      "/images/placeholder.svg?height=800&width=600&text=Yuki+2",
      "/images/placeholder.svg?height=800&width=600&text=Yuki+3",
    ],
  },
  {
    name: "渡辺 花",
    position: "Vice Captain",
    description:
      "インターハイ出場経験を持つ実力者。後輩の指導にも熱心に取り組む。",
    images: [
      "/images/placeholder.svg?height=800&width=600&text=Hana+1",
      "/images/placeholder.svg?height=800&width=600&text=Hana+2",
      "/images/placeholder.svg?height=800&width=600&text=Hana+3",
    ],
  },
  {
    name: "佐藤 健二",
    position: "Coach",
    description:
      "元ナショナルチームコーチ。豊富な経験を活かした指導で部員たちの成長をサポート。",
    images: [
      "/images/placeholder.svg?height=800&width=600&text=Kenji+1",
      "/images/placeholder.svg?height=800&width=600&text=Kenji+2",
      "/images/placeholder.svg?height=800&width=600&text=Kenji+3",
    ],
  },
];

export function TeamSection() {
  const [currentMember, setCurrentMember] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(
        (prev) => (prev + 1) % teamMembers[currentMember].images.length
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [currentMember]);

  const nextMember = () => {
    setDirection(1);
    setCurrentMember((prev) => (prev + 1) % teamMembers.length);
    setCurrentImage(0);
  };

  const prevMember = () => {
    setDirection(-1);
    setCurrentMember(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
    setCurrentImage(0);
  };

  return (
    <section
      id="team"
      className="min-h-screen bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-12 lg:py-0 lg:h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center lg:text-left"
          >
            <h2 className="text-4xl lg:text-7xl font-bold mb-6 lg:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
              チーム
            </h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMember}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 lg:space-y-6"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {teamMembers[currentMember].name}
                </h3>
                <p className="text-lg lg:text-xl text-blue-400 mb-3 lg:mb-4">
                  {teamMembers[currentMember].position}
                </p>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  {teamMembers[currentMember].description}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center lg:justify-start space-x-4 mt-6 lg:mt-8">
              <button
                onClick={prevMember}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextMember}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>

          {/* Image Carousel */}
          <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentMember}-${currentImage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={teamMembers[currentMember].images[currentImage]}
                  alt={teamMembers[currentMember].name}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-50 rounded-lg" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 flex space-x-2">
              {teamMembers[currentMember].images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentImage === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
