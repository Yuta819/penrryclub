import { BadmintonHero } from "@/components/badminton/BadmintonHero";
import { AboutSection } from "@/components/badminton/AboutSection";
import { TeamSection } from "@/components/badminton/TeamSection";
import { ActivitiesSection } from "@/components/badminton/ActivitiesSection";
import { ContactSection } from "@/components/badminton/ContactSection";
import { LightTrails } from "@/components/badminton/LightTrails";
import { FloatingNav } from "@/components/badminton/FloatingNav";
import { ElectricTrails } from "@/components/badminton/ElectricTrails";

export default function BadmintonPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <LightTrails />
      <ElectricTrails />
      <FloatingNav />
      <BadmintonHero />
      <AboutSection />
      <TeamSection />
      <ActivitiesSection />
      <ContactSection />
    </main>
  );
}
