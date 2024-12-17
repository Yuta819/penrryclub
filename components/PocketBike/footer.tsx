"use client";
import React from "react";
import { FiTwitter, FiInstagram, FiFacebook, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Top Section with CTA */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          バイクのある生活を、
          <br />
          始めてみませんか？
        </h2>
        <div className="relative inline-block">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative">
            <button
              className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() =>
                (window.location.href = "https://line.me/R/ti/p/@273smptm")
              }
            >
              LINEで申し込む
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="container mx-auto px-4 py-8 border-t border-neutral-800">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            PocketBike
          </Link>

          {/* Navigation */}

          {/* Contact and Social */}
          <div className="flex items-center gap-6">
            <a
              href="tel:070-2164-3618"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <FiPhone className="w-5 h-5" />
              <span>070-2164-3618</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-6 border-t border-neutral-800">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
          <p>© 2024 PocketBike. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-purple-400 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
