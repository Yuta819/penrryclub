"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import * as THREE from "three";

interface WebGLContextType {
  renderer: THREE.WebGLRenderer | null;
  setRenderer: (renderer: THREE.WebGLRenderer) => void;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const WebGLContext = createContext<WebGLContextType | null>(null);

export const useWebGL = () => {
  const context = useContext(WebGLContext);
  if (!context) {
    throw new Error("useWebGL must be used within a WebGLProvider");
  }
  return context;
};

export const WebGLProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [renderer, setRendererState] = useState<THREE.WebGLRenderer | null>(
    null
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const setRenderer = (newRenderer: THREE.WebGLRenderer) => {
    setRendererState(newRenderer);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const newRenderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    if (typeof window !== "undefined") {
      newRenderer.setSize(window.innerWidth, window.innerHeight);
      newRenderer.setPixelRatio(window.devicePixelRatio);
    }

    setRenderer(newRenderer);

    const handleResize = () => {
      if (newRenderer && typeof window !== "undefined") {
        newRenderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
      newRenderer.dispose();
    };
  }, []);

  return (
    <WebGLContext.Provider value={{ renderer, setRenderer, canvasRef }}>
      <canvas ref={canvasRef} className="fixed inset-0 z-30" />
      {children}
    </WebGLContext.Provider>
  );
};
