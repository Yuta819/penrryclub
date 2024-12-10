"use client";
import React from "react";
import dynamic from "next/dynamic";
import { VideoGallery } from "./VideoGallery";
import { MemberProfiles } from "./MemberProfiles";
import { SocialLinks } from "./SocialLinks";
import { Circle, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const YosakaiAsciiArt3D = dynamic(() => import("./YosakaiAsciiArt3D"), {
  ssr: false,
});

export function YosakaiHero() {
  return (
    <div className="relative w-full bg-black">
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start px-6 pt-4">
        <Link href="/">
          <Circle className="w-12 h-12 text-white hover:text-red-500 transition-colors duration-300" />
        </Link>
        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="X (Twitter)"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <YosakaiAsciiArt3D />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <h1 className="mb-4 text-6xl md:text-8xl font-extrabold tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
              YOSAKOI
            </span>
            <span className="block text-white">CIRCLE</span>
          </h1>
          <p className="text-xl md:text-3xl text-red-400 font-light italic tracking-wide">
            Igniting passion, Unleashing rhythm
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-white/60">
            <div className="w-0.5 h-16 bg-gradient-to-b from-transparent to-red-500/50 animate-pulse" />
            <span className="mt-2 text-sm uppercase tracking-wider">
              Scroll
            </span>
          </div>
        </div>
      </div>

      <VideoGallery />
      <MemberProfiles />
      <SocialLinks />
    </div>
  );
}
