"use client";

import { useRef } from "react";
import { BinaryCodeBackground } from "./Decorations/BinaryCodeBackground";
import CyberFrame from "./Decorations/CyberFrame";

const CircuitLines: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full z-0"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Circuit Design Background"
  >
    <pattern
      id="circuit-pattern"
      x="0"
      y="0"
      width="100"
      height="100"
      patternUnits="userSpaceOnUse"
    >
      <path
        d="M10 10 L90 10 L90 90 L10 90 Z"
        fill="none"
        stroke="rgba(0,255,255,0.2)"
        strokeWidth="1"
      />
      <circle cx="10" cy="10" r="2" fill="rgba(0,255,255,0.5)" />
      <circle cx="90" cy="90" r="2" fill="rgba(0,255,255,0.5)" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
  </svg>
);

export default function RobotHero() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-900"
    >
      <BinaryCodeBackground />
      <CircuitLines />
      <CyberFrame
        className="w-full h-full absolute inset-0 z-10"
        alwaysVisible={true}
      >
        {/* 必要に応じて子要素をここに配置 */}
        {/* 例: 空の要素 */}
        <></>
      </CyberFrame>
      <div className="relative z-50 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 text-blue-400 tracking-wider"
            style={{ textShadow: "0 0 10px rgba(0, 123, 255, 0.5)" }}
          >
            Circle ROBOTICS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Innovating the Future, One Robot at a Time
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <svg
          className="animate-bounce w-6 h-6 text-white"
          fill="none"
          role="img"
          aria-label="Scroll Down Icon"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
