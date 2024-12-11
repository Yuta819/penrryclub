// File: components/Background.tsx
'use client'

import { WebGLProvider } from './hangglider/decorations/WebGLContext'
import SkyBackground from './hangglider/decorations/SkyBackground'
import SkyColors from './hangglider/decorations/SkyColors'
import PointStars from './hangglider/decorations/PointStars'

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
  )
}

