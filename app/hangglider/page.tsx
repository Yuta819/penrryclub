"use client";

import { useRef, useEffect } from "react";
import Background from "@/components/hangglider/Background";
import Header from "@/components/hangglider/Header";
import HeroSection from "@/components/hangglider/HeroSection";
import AboutSection from "@/components/hangglider/AboutSection";
import ActivitiesSection from "@/components/hangglider/ActivitiesSection";
import MembersSection from "@/components/hangglider/MembersSection";
import AchievementsSection from "@/components/hangglider/AchievementsSection";
import ContactSection from "@/components/hangglider/ContactSection";
import FooterSection from "@/components/hangglider/FooterSection";

export default function HanggliderPage() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sectionsRef.current;
    if (container && typeof window !== "undefined") {
      const handleWheel = (e: WheelEvent) => {
        const { deltaY } = e;
        const { scrollTop, scrollHeight, clientHeight } = container;

        if (
          (scrollTop === 0 && deltaY < 0) ||
          (scrollTop + clientHeight === scrollHeight && deltaY > 0)
        ) {
          return;
        }

        e.preventDefault();

        container.scrollBy({
          top: deltaY,
          behavior: "smooth",
        });
      };

      container.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Background />
      </div>
      <Header />
      <div
        ref={sectionsRef}
        className="absolute inset-0 overflow-y-auto snap-y snap-mandatory z-10 scroll-smooth pt-16"
      >
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <MembersSection />
        <AchievementsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
