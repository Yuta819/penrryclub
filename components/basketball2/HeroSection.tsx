"use client";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import BouncingBasketball from "./decorations/BouncingBasketball";
import BasketballCourt from "./decorations/BasketballCourt";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const FloatingBasketball = ({
  position,
}: {
  position: [number, number, number];
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    meshRef.current.rotation.x = state.clock.elapsedTime;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="#FFD700" roughness={0.8} metalness={0.5} />
    </mesh>
  );
};

export default function HeroSection() {
  return (
    <section className="h-screen relative overflow-hidden bg-black">
      <Canvas className="absolute inset-0">
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.1}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <BouncingBasketball />
          <BasketballCourt />
          <FloatingBasketball position={[-4, 2, -2]} />
          <FloatingBasketball position={[4, 3, -1]} />
          <FloatingBasketball position={[0, 4, -3]} />
          <FloatingBasketball position={[-2, 5, -4]} />
          <FloatingBasketball position={[2, 1, -5]} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-yellow-500 mb-4 text-center drop-shadow-[0_0_10px_#FFD700]"
        >
          〇〇〇 University
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl font-bold text-white mb-8 text-center drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
        >
          Basketball Club
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300 drop-shadow-[0_0_5px_#FFD700]"
          >
            Join Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
