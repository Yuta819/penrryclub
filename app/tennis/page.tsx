import { MainLayout } from "@/components/layout/MainLayout";
import { MainHero } from "@/components/tennis/MainHero";
import { AboutSection } from "@/components/tennis/AboutSection";
import { MembersSection } from "@/components/tennis/MembersSection";
import { ActivitiesSection } from "@/components/tennis/ActivitiesSection";
import { ContactSection } from "@/components/tennis/ContactSection";
import { FloatingNav } from "@/components/tennis/FloatingNav";

export default function TennisPage() {
  return (
    <MainLayout>
      <FloatingNav />
      <MainHero />
      <AboutSection />
      <MembersSection />
      <ActivitiesSection />
      <ContactSection />
    </MainLayout>
  );
}
