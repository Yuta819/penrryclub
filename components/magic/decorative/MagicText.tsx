"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MagicTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "title" | "date" | "regular";
  alignment?: "center" | "left" | "right";
}

export default function MagicText({
  children,
  className = "",
  delay = 0,
  variant = "regular",
  alignment = "center",
}: MagicTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [textBounds, setTextBounds] = useState({ width: 0, height: 0 });
  const { scrollY } = useScroll();

  // Calculate text position and update on resize
  useEffect(() => {
    const updateBounds = () => {
      if (textRef.current) {
        const bounds = textRef.current.getBoundingClientRect();
        setTextBounds({ width: bounds.width, height: bounds.height });
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    window.addEventListener("scroll", updateBounds);
    return () => {
      window.removeEventListener("resize", updateBounds);
      window.removeEventListener("scroll", updateBounds);
    };
  }, [children]);

  // Parallax effect for the glow
  const y = useTransform(
    scrollY,
    [scrollY.get() - 500, scrollY.get() + 500],
    [50, -50]
  );

  const getVariantStyles = () => {
    switch (variant) {
      case "title":
        return "font-cinzel tracking-wider text-[#B8860B]";
      case "date":
        return "font-cinzel text-[#B8860B] tracking-[0.2em]";
      default:
        return "font-japanese";
    }
  };

  return (
    <div className={`relative ${className}`} ref={textRef}>
      {/* Background Effect Layer */}
      <motion.div
        className="absolute z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          width: textBounds.width,
          height: textBounds.height,
          background:
            "linear-gradient(45deg, rgba(128, 0, 128, 0.5), rgba(0, 0, 0, 0))",
          filter: "blur(8px)",
          y,
          left: alignment === "right" ? "auto" : 0,
          right: alignment === "left" ? "auto" : 0,
          transform: alignment === "center" ? "translateX(-50%)" : "none",
        }}
      />

      {/* Text Layer */}
      <motion.div
        className={`relative z-20 ${getVariantStyles()}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
      >
        {children}
      </motion.div>

      {/* Decorative Arrow (for date variant) */}
      {variant === "date" && (
        <motion.div
          className="absolute -right-8 top-1/2 transform -translate-y-1/2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        >
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1L19 6M19 6L14 11M19 6H1"
              stroke="#B8860B"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
