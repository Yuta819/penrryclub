import { SkiHero } from "@/components/ski/SkiHero";
import { AboutSection } from "@/components/ski/AboutSection";
import { TeamSection } from "@/components/ski/TeamSection";
import { EventsSection } from "@/components/ski/EventsSection";
import { ContactSection } from "@/components/ski/ContactSection";
import { SnowBackground } from "@/components/ski/SnowBackground";
import { FloatingNav } from "@/components/ski/FloatingNav";
import {
  FloatingShapes,
  GradientBlob,
} from "@/components/ski/DecorativeElements";
import { SparklingSnow } from "@/components/ski/SparklingSnow";

export default function SkiPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-sky-100 to-white overflow-hidden">
      <FloatingShapes />
      <GradientBlob />
      <SnowBackground />
      <SparklingSnow />
      <FloatingNav />
      <SkiHero />
      <AboutSection />
      <TeamSection />
      <EventsSection />
      <ContactSection />
    </main>
  );
}
