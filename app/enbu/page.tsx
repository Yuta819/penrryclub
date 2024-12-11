import HeroSection from "@/components/enbu/HeroSection";
import AboutSection from "@/components/enbu/AboutSection";
import ActivitiesSection from "@/components/enbu/ActivitiesSection";
import MembersSection from "@/components/enbu/MembersSection";
import AchievementsSection from "@/components/enbu/AchievementsSection";
import ContactSection from "@/components/enbu/ContactSection";
import Header from "@/components/enbu/Header";

export default function EnbuPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <MembersSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
