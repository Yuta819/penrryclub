"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

export function FloatingNav() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-orange-900 bg-opacity-80 text-white"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="#hero"
            className="text-xl font-bold hover:text-orange-300 transition-colors"
          >
            BASKETBALL CIRCLE
          </Link>
          <div className="flex items-center space-x-8">
            <NavLinks />
            <SocialIcons />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLinks() {
  return (
    <div className="flex items-center space-x-4 md:space-x-8">
      <NavLink href="#about">About</NavLink>
      <NavLink href="#members">Members</NavLink>
      <NavLink href="#activities">Activities</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
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
      className="text-sm text-white hover:text-orange-300 transition-colors"
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {children}
    </Link>
  );
}

function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <SocialIcon href="#" icon={Instagram} />
      <SocialIcon href="#" icon={Twitter} />
      <SocialIcon href="#" icon={Youtube} />
    </div>
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
      className="text-white hover:text-orange-300 transition-colors"
    >
      <Icon size={20} />
    </Link>
  );
}
