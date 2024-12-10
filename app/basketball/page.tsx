"use client";

import { useState, useEffect, useRef } from "react";
import { MainHero } from "@/components/basketball/MainHero";
import { AboutSection } from "@/components/basketball/AboutSection";
import { MembersSection } from "@/components/basketball/MembersSection";
import { ActivitiesSection } from "@/components/basketball/ActivitiesSection";
import { ContactSection } from "@/components/basketball/ContactSection";
import { FloatingNav } from "@/components/basketball/FloatingNav";
import { SectionTransition } from "@/components/basketball/SectionTransition";

const sections = [
  { id: "hero", Component: MainHero },
  { id: "about", Component: AboutSection },
  { id: "members", Component: MembersSection },
  { id: "activities", Component: ActivitiesSection },
  { id: "contact", Component: ContactSection },
];

export default function BasketballPage() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const newIndex = sectionRefs.current.findIndex((ref, index) => {
        if (!ref) return false;
        const nextRef = sectionRefs.current[index + 1];
        return (
          scrollPosition >= ref.offsetTop &&
          (!nextRef || scrollPosition < nextRef.offsetTop)
        );
      });

      if (newIndex !== -1 && newIndex !== currentSectionIndex) {
        setDirection(newIndex > currentSectionIndex ? "right" : "left");
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSectionIndex(newIndex);
          setIsTransitioning(false);
        }, 1000); // Transition duration
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSectionIndex]);

  return (
    <main className="bg-white text-black">
      <FloatingNav />
      {sections.map(({ id, Component }, index) => (
        <section
          key={id}
          id={id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="min-h-screen"
        >
          <Component />
        </section>
      ))}
      <SectionTransition
        direction={direction}
        isTransitioning={isTransitioning}
      />
    </main>
  );
}
