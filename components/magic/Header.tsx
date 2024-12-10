"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-2">
        <div className="flex items-center justify-between">
          <Link href="/magic" className="flex items-center space-x-2">
            <Image
              src="/images/placeholder.svg"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white">Magic Circle</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
