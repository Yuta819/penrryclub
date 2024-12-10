import HeroSection from "@/components/baseball/HeroSection";
import AboutSection from "@/components/baseball/AboutSection";
import MembersSection from "@/components/baseball/MembersSection";
import ActivitiesSection from "@/components/baseball/ActivitiesSection";
import AchievementsSection from "@/components/baseball/AchievementsSection";
import ContactSection from "@/components/baseball/ContactSection";
import Header from "@/components/baseball/Header";

export default function BaseballPage() {
  return (
    <main className="relative w-full overflow-hidden bg-slate-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <MembersSection />
      <ActivitiesSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
