import dynamic from "next/dynamic";
import HeroSection from "@/components/biwa-shakuhachi/HeroSection";
import AboutSection from "@/components/biwa-shakuhachi/AboutSection";
import MembersSection from "@/components/biwa-shakuhachi/MembersSection";
import ActivitiesSection from "@/components/biwa-shakuhachi/ActivitiesSection";
import AchievementsSection from "@/components/biwa-shakuhachi/AchievementsSection";
import ContactSection from "@/components/biwa-shakuhachi/ContactSection";
import Header from "@/components/biwa-shakuhachi/Header";

const DynamicBackground = dynamic(
  () => import("@/components/biwa-shakuhachi/decorative/DynamicBackground"),
  {
    ssr: false,
  }
);

export default function BiwaShakuhachiPage() {
  return (
    <main className="relative w-full overflow-hidden">
      <DynamicBackground />
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
