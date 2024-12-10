"use client";

import { Circle, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export function FloatingIcons() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start px-6 pt-4">
      <Link href="/">
        <Circle className="w-12 h-12 text-white hover:text-purple-400 transition-colors duration-300" />
      </Link>
      <div className="flex space-x-4">
        <a
          href="#"
          aria-label="Instagram"
          className="text-white hover:text-purple-400 transition-colors duration-300"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="#"
          aria-label="X (Twitter)"
          className="text-white hover:text-purple-400 transition-colors duration-300"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="text-white hover:text-purple-400 transition-colors duration-300"
        >
          <Youtube className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
