'use client'

import { motion } from 'framer-motion'
import CyberFrame from './CyberFrame'

const FloatingCyberFrames = () => {
  const frames = [
    { size: 300, delay: 0 },
    { size: 200, delay: 2 },
    { size: 250, delay: 4 },
  ]

  return (
    <>
      {frames.map((frame, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            delay: frame.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <CyberFrame className={`w-${frame.size} h-${frame.size} opacity-30`}>
            <div className="w-full h-full"></div>
          </CyberFrame>
        </motion.div>
      ))}
    </>
  )
}

export default FloatingCyberFrames

