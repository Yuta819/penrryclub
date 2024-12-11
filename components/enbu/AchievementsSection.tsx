"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { THREE } from "@/utils/three";

function FireTrophy() {
  const trophyRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    trophyRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={trophyRef}>
      <cylinderGeometry args={[0.5, 1, 2, 32]} />
      <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      <pointLight position={[0, 2, 0]} color="#FF4500" intensity={2} />
    </mesh>
  );
}

const achievements = [
  { title: "全国炎舞コンテスト優勝", icon: FaTrophy },
  { title: "地域文化振興賞受賞", icon: FaMedal },
  { title: "安全パフォーマンス認定", icon: FaAward },
];

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-red-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          実績
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black bg-opacity-50 p-6 rounded-lg text-center"
            >
              <achievement.icon className="text-5xl mb-4 text-yellow-400 mx-auto" />
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
            </motion.div>
          ))}
        </div>
        <div className="h-64 w-full">
          <Canvas>
            <ambientLight intensity={0.5} />
            <FireTrophy />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
