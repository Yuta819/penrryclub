"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

export function FloatingNav() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-white/10 backdrop-blur-sm"
    >
      <Link
        href="/"
        className="text-xl font-bold text-white hover:text-sky-200 transition-colors"
      >
        SKI CIRCLE
      </Link>
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#team">Team</NavLink>
          <NavLink href="#events">Events</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <div className="flex space-x-4">
          <SocialIcon href="#" icon={Instagram} />
          <SocialIcon href="#" icon={Twitter} />
          <SocialIcon href="#" icon={Youtube} />
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-white/80 hover:text-pink-300 transition-colors"
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ElementType;
}) {
  return (
    <Link
      href={href}
      className="text-white/80 hover:text-pink-300 transition-colors"
    >
      <Icon size={20} />
    </Link>
  );
}
