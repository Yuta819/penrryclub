import { StreetHero } from "@/components/street/StreetHero";
import { AboutSection } from "@/components/street/AboutSection";
import { PerformancesSection } from "@/components/street/PerformancesSection";
import { MembersSection } from "@/components/street/MembersSection";
import { ContactSection } from "@/components/street/ContactSection";

export default function StreetPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <StreetHero />
      <AboutSection />
      <PerformancesSection />
      <MembersSection />
      <ContactSection />
    </main>
  );
}
