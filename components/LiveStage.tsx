"use client";

import { useState, useEffect, useRef } from "react";
import { InteractiveMusicNote } from "./InteractiveMusicNote";
import { BandCircleIntro } from "./BandCircleIntro";
import { ActivityPanels } from "./ActivityPanels";
import { ColorfulBubbles } from "./ColorfulBubbles";
import Image from "next/image";
import { Circle, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export function LiveStage() {
  const [clickCount, setClickCount] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (clickCount < 20) {
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    if (clickCount === 20) {
      setIsRevealed(true);
      setCanScroll(true);
    }
  }, [clickCount]);

  useEffect(() => {
    const preventScroll = (e: WheelEvent) => {
      if (!canScroll) {
        e.preventDefault();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", preventScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", preventScroll);
      }
    };
  }, [canScroll]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black"
      onClick={handleClick}
    >
      <div
        className={`relative ${
          canScroll ? "min-h-screen" : "h-screen"
        } overflow-hidden pt-16 md:pt-20`}
      >
        {/* Circle icon and SNS icons */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start px-6 pt-4">
          <Link href="/">
            <Circle className="w-12 h-12 text-white hover:text-purple-500 transition-colors duration-300" />
          </Link>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-purple-500 transition-colors duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-purple-500 transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* モバイル用背景画像 */}
        <Image
          src="/images/circles/live-stage/OS-hero.png"
          alt="Concert background mobile"
          fill
          className="object-cover md:hidden"
          priority
        />
        {/* PC用背景画像 */}
        <Image
          src="/images/circles/live-stage/PC-hero.png"
          alt="Concert background desktop"
          fill
          className="hidden md:block object-cover"
          priority
        />
        {/* オーバーレイグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

        {/* バンドサークル名（モバイル） */}
        <div className="fixed top-0 right-4 bottom-0 md:hidden flex items-center z-10">
          <div className="flex items-center space-x-2 -rotate-90 origin-right">
            <div className="text-white text-2xl font-bold tracking-wider whitespace-nowrap">
              NAMAE LIVE FES
            </div>
          </div>
        </div>

        {/* バンドサークル名（PC） */}
        <div className="hidden md:flex fixed top-24 right-4 items-center z-10">
          <div className="writing-vertical text-white text-4xl font-bold tracking-wider mr-4">
            NAMAE LIVE FES
          </div>
        </div>

        <InteractiveMusicNote
          progress={clickCount / 20}
          isExploded={isRevealed}
        />

        <ColorfulBubbles />
      </div>

      {canScroll && (
        <>
          <div className="bg-black text-white py-16">
            <BandCircleIntro />
          </div>
          <ActivityPanels />
        </>
      )}
    </div>
  );
}
