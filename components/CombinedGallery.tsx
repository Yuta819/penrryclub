"use client";

import { BinaryCodeBackground } from "./BinaryCodeBackground";
import { ThreeDGallery } from "./ThreeDGallery";

export function CombinedGallery() {
  return (
    <div className="relative w-full h-screen">
      <BinaryCodeBackground />
      <div className="absolute inset-0 z-10">
        <ThreeDGallery />
      </div>
    </div>
  );
}
