import { CombinedGallery } from "@/components/CombinedGallery";
import { MainLayout } from "@/components/layout/MainLayout";

export default function XPage() {
  return (
    <MainLayout>
      <div className="h-screen">
        <CombinedGallery />
      </div>
    </MainLayout>
  );
}
