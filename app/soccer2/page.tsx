import HeroSection from "@/components/soccer2/HeroSection";
import AboutSection from "@/components/soccer2/AboutSection";
import ActivitiesSection from "@/components/soccer2/ActivitiesSection";
import MembersSection from "@/components/soccer2/MembersSection";
import AchievementsSection from "@/components/soccer2/AchievementsSection";
import ContactSection from "@/components/soccer2/ContactSection";

export default function SoccerClubPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-600 via-green-500 to-emerald-400 text-white">
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <MembersSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
