import RobotHero from "@/components/robot/HeroSection";
import AboutSection from "@/components/robot/AboutSection";
import ActivitiesSection from "@/components/robot/ActivitiesSection";
import MembersSection from "@/components/robot/MembersSection";
import AchievementsSection from "@/components/robot/AchievementsSection";
import ContactSection from "@/components/robot/ContactSection";
import FloatingNav from "@/components/robot/FloatingNav";

export default function RobotPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <FloatingNav />
      <RobotHero />
      <AboutSection />
      <ActivitiesSection />
      <MembersSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
