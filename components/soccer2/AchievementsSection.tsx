"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import SpinningTrophy from "./decorations/SpinningTrophy";
import * as THREE from "three";

const achievements = [
  { title: "University League Champions", year: "2023" },
  { title: "Regional Tournament Runners-up", year: "2022" },
  { title: "Most Improved Team Award", year: "2021" },
  { title: "Fair Play Award", year: "2020" },
];

export default function AchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = containerRef.current;
      if (container) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          container.clientWidth / container.clientHeight,
          0.1,
          1000
        );
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const spinningTrophy = new SpinningTrophy();
        scene.add(spinningTrophy.mesh);

        camera.position.z = 5;

        const animate = () => {
          requestAnimationFrame(animate);
          spinningTrophy.update();
          renderer.render(scene, camera);
        };
        animate();

        return () => {
          container.removeChild(renderer.domElement);
        };
      }
    }
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">
                {achievement.title}
              </h3>
              <p>{achievement.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
