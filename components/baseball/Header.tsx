"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import { typography } from "@/utils/typography";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/baseball"
            className={`text-2xl ${typography.heading} ${typography.metallic}`}
          >
            Baseball Club
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5 metallic-icon" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5 metallic-icon" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5 metallic-icon" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
