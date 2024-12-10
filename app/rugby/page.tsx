import { RugbyHero } from "@/components/rugby/RugbyHero";
import { AboutSection } from "@/components/rugby/AboutSection";
import { TeamSection } from "@/components/rugby/TeamSection";
import { MatchesSection } from "@/components/rugby/MatchesSection";
import { ContactSection } from "@/components/rugby/ContactSection";
import { GeometricBackground } from "@/components/rugby/GeometricBackground";
import { FloatingNav } from "@/components/rugby/FloatingNav";

export default function RugbyPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <GeometricBackground />
      <FloatingNav />
      <RugbyHero />
      <AboutSection />
      <TeamSection />
      <MatchesSection />
      <ContactSection />
    </main>
  );
}
