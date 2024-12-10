'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface LightTrailCardProps {
  children: React.ReactNode
  className?: string
}

export default function LightTrailCard({ children, className = '' }: LightTrailCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden bg-gray-800 rounded-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovered && (
        <>
          <motion.div
            className="absolute pointer-events-none"
            animate={{
              x: mousePosition.x - 50,
              y: mousePosition.y - 50,
              scale: [1, 1.2, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-xl" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-400 to-cyan-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-blue-400 to-cyan-400"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

