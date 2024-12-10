import { SoccerHero } from "@/components/soccer/SoccerHero";
import { AboutSection } from "@/components/soccer/AboutSection";
import { TeamSection } from "@/components/soccer/TeamSection";
import { MatchesSection } from "@/components/soccer/MatchesSection";
import { ContactSection } from "@/components/soccer/ContactSection";

export default function SoccerPage() {
  return (
    <main className="bg-black">
      <SoccerHero />
      <AboutSection />
      <TeamSection />
      <MatchesSection />
      <ContactSection />
    </main>
  );
}
