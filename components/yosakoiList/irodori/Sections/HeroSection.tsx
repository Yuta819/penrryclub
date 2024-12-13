"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { asciiArt } from "../Decorations/AsciiArt";

const styles = `
  .ascii-art {
    background-size: 100%;
    background-repeat: repeat;
  }
`;

export default function HeroSection() {
  // 初期値を`null`ではなく数値型で設定するか、型定義を明確化
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style jsx>{styles}</style>
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500"
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-40">
          <pre
            className="text-[0.3rem] leading-[0.3rem] whitespace-pre font-mono ascii-art text-center bg-clip-text text-transparent bg-gradient-to-br from-white via-yellow-300 to-orange-500"
            style={{
              transform: `scale(${Math.min(
                windowSize.width / 400,
                windowSize.height / 400
              )})`,
              maxWidth: "400vw",
              maxHeight: "400vh",
              WebkitBackgroundClip: "text",
            }}
          >
            {asciiArt
              .split("")
              .map((char, index) =>
                char === "彩" ? <span key={index}>{char}</span> : char
              )}
          </pre>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg brush-font">
            彩
          </h1>
          <p className="text-xl md:text-3xl text-orange-300 mb-8 drop-shadow brush-font">
            金沢大学よさこいサークル
          </p>
          <motion.a
            href="#movie"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-red-600 hover:to-orange-600 transition duration-300 shadow-lg"
          >
            演舞を見る
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
