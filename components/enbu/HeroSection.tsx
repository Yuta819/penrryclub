"use client";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import FireParticles from "./decorations/FireParticles";
import { useRef, useEffect, useState } from "react";
import { THREE } from "@/utils/three";

export default function HeroSection() {
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateCenter = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setCenter({
          x: rect.width / 2,
          y: rect.height / 2,
        });
      }
    };

    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 10, 30], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 10, 15]} intensity={1} />
        <FireParticles center={center} THREE={THREE} />
      </Canvas>
      <div
        className="absolute z-10 text-center px-4"
        style={{
          left: center.x,
          top: center.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
          style={{
            textShadow: "0 0 10px rgba(255, 69, 0, 0.8)",
          }}
        >
          炎舞サークル
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl mb-8 text-gray-300"
        >
          情熱を燃やし、舞を極める
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
        >
          参加する
        </motion.button>
      </div>
    </section>
  );
}
