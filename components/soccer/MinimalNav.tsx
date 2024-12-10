"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MinimalNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6">
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-tighter"
        >
          SOCCER CIRCLE
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white z-50 hover:opacity-75 transition-opacity"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center"
      >
        <div className="flex flex-col items-center space-y-8">
          {["About", "Team", "Matches", "Contact"].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl font-light hover:font-normal transition-all"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
