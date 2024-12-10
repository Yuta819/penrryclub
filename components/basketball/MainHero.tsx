"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function MainHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0 bg-black" style={{ y }}>
        <Image
          src={
            isMobile
              ? "/images/circles/basketball/OSバスケ.png"
              : "/images/circles/basketball/PCバスケ.png"
          }
          alt="Basketball player in motion"
          fill
          className="object-cover mix-blend-luminosity opacity-80"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-2 hidden lg:block"
          >
            <div className="writing-vertical-lr text-[8rem] font-bold text-white opacity-20 transform -rotate-180">
              CIRCLE
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-10 relative px-4 lg:px-8"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-0 top-0 w-full h-full bg-orange-500 opacity-70 origin-right"
              style={{
                clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
              }}
            >
              <div className="p-6 font-mono text-black absolute right-0 top-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-sm"
                >
                  BASKETBALL
                  <br />
                  CIRCLE
                  <br />
                  PRESENTS
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-white mb-6 relative z-10"
            >
              BASKET
              <br />
              BALL
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl text-white font-mono relative z-10"
            >
              ELEVATE YOUR GAME
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="text-white text-sm flex flex-col items-center font-mono">
          <div className="w-px h-16 bg-orange-500 mb-2" />
          <span>SCROLL</span>
        </div>
      </motion.div>
    </section>
  );
}
