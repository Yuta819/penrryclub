import HeroSection from "@/components/magic/HeroSection";
import AboutSection from "@/components/magic/AboutSection";
import MembersSection from "@/components/magic/MembersSection";
import ActivitiesSection from "@/components/magic/ActivitiesSection";
import AchievementsSection from "@/components/magic/AchievementsSection";
import ContactSection from "@/components/magic/ContactSection";
import Header from "@/components/magic/Header";
import { ElectricTrails } from "@/components/magic/decorative/ElectricTrails";

export default function MagicPage() {
  return (
    <main className="relative w-full overflow-hidden bg-neutral-900 text-white px-4 sm:px-6 md:px-8 lg:px-12">
      <ElectricTrails />
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
