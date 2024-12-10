"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface FloatingPanelProps {
  id: string;
  title: string;
  path: string;
  image: string;
  description: string;
  size: number;
  color: string;
}

export function FloatingPanel({
  id,
  title,
  path,
  image,
  description,
  size,
  color,
}: FloatingPanelProps) {
  return (
    <Link href={path}>
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full rounded-lg overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Back side */}
        <div
          className="absolute w-full h-full rounded-lg overflow-hidden flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: color,
          }}
        >
          <p className="text-white text-center font-bold p-4">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
