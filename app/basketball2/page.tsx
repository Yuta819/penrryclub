import HeroSection from "@/components/basketball2/HeroSection";
import AboutSection from "@/components/basketball2/AboutSection";
import ActivitiesSection from "@/components/basketball2/ActivitiesSection";
import MembersSection from "@/components/basketball2/MembersSection";
import AchievementsSection from "@/components/basketball2/AchievementsSection";
import ContactSection from "@/components/basketball2/ContactSection";

export default function BasketballClub() {
  return (
    <main className="min-h-screen bg-gray-100">
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <MembersSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
