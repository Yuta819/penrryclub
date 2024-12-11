// File: components/Background.tsx
"use client";

import { WebGLProvider } from "./decorations/WebGLContext";
import SkyBackground from "./decorations/SkyBackground";
import SkyColors from "./decorations/SkyColors";
import PointStars from "./decorations/PointStars";

export default function Background() {
  return (
    <WebGLProvider>
      <div className="relative w-full h-full">
        <SkyColors />
        <div className="z-10 relative">
          <PointStars />
        </div>
        <div className="z-20 relative">
          <SkyBackground />
        </div>
      </div>
    </WebGLProvider>
  );
}
