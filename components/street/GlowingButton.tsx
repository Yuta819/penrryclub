"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlowingButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "default" | "outline";
}

export function GlowingButton({
  children,
  href,
  variant = "default",
}: GlowingButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={cn(
          "relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold tracking-wider transition-all duration-500",
          "before:absolute before:inset-0 before:transition-all before:duration-500",
          ...(variant === "default"
            ? [
                "text-black bg-white",
                "before:bg-white/20 before:blur-xl before:scale-150 hover:before:scale-200",
              ]
            : [
                "text-white border border-white/50",
                "before:bg-white/10 before:blur-xl before:scale-150 hover:before:scale-200",
              ])
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
