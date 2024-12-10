import { MainLayout } from "@/components/layout/MainLayout";
import { FloatingPanelsSection } from "@/components/hero/FloatingPanelsSection";
import { PreviewWindows } from "@/components/PreviewWindows";

export default function Home() {
  return (
    <MainLayout>
      <FloatingPanelsSection />
      <PreviewWindows />
    </MainLayout>
  );
}
