"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FloatingPanel } from "./FloatingPanel";
import { Bubble } from "./Bubble";
import { previews } from "@/components/PreviewWindows";

const PANEL_COUNT = 5;
const BUBBLE_COUNT = 45;
const PANEL_SIZE_RATIO = 0.2;
const PANEL_ANIMATION_DURATION = 8; // 8秒間のアニメーション
const BUBBLE_SIZE_RANGE = { min: 10, max: 100 };
const BUBBLE_SPEED_RANGE = { min: 8, max: 25 };

interface PanelData {
  id: string;
  title: string;
  path: string;
  src?: string;
  image: string;
  description: string;
  uniqueKey: string;
  startX: number;
  delay: number;
  color: string;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
}

interface BubbleData {
  uniqueKey: string;
  size: number;
  color: string;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function getRandomRotation() {
  return Math.random() * 720 - 360;
}

function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function useShuffledPreviews() {
  const [shuffledPreviews, setShuffledPreviews] = useState(() =>
    [...previews].sort(() => Math.random() - 0.5)
  );

  const reshufflePreviews = useCallback(() => {
    setShuffledPreviews([...previews].sort(() => Math.random() - 0.5));
  }, []);

  return { shuffledPreviews, reshufflePreviews };
}

export function FloatingPanelsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [panels, setPanels] = useState<PanelData[]>([]);
  const [bubbles, setBubbles] = useState<BubbleData[]>([]);
  const { shuffledPreviews, reshufflePreviews } = useShuffledPreviews();
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateSize = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setContainerSize({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (containerSize.height === 0) return;

    const panelSize = containerSize.height * PANEL_SIZE_RATIO;

    const createPanel = (delay: number = 0): PanelData => {
      const preview = shuffledPreviews[currentPreviewIndex];
      const startX = Math.random() * (containerSize.width - panelSize);
      return {
        id: `panel-${preview.path}-${Date.now()}`,
        ...preview,
        uniqueKey: `panel-${preview.path}-${Date.now()}-${Math.random()
          .toString(36)
          .substr(2, 9)}`,
        startX,
        delay: delay,
        color: getRandomColor(),
        rotationX: getRandomRotation(),
        rotationY: getRandomRotation(),
        rotationZ: getRandomRotation(),
      };
    };

    const createBubble = (): BubbleData => {
      const size = getRandomNumber(
        BUBBLE_SIZE_RANGE.min,
        BUBBLE_SIZE_RANGE.max
      );
      const startX = Math.random() * containerSize.width;
      const startY = containerSize.height + size;
      const speed = getRandomNumber(
        BUBBLE_SPEED_RANGE.min,
        BUBBLE_SPEED_RANGE.max
      );
      const duration = (containerSize.height + size) / speed;
      return {
        uniqueKey: `bubble-${Date.now()}-${Math.random()
          .toString(36)
          .substr(2, 9)}`,
        size,
        color: getRandomColor(),
        startX,
        startY,
        duration,
        delay: Math.random() * duration,
      };
    };

    if (panels.length === 0) {
      const initialPanels = Array.from({ length: PANEL_COUNT }, (_, i) =>
        createPanel((i * PANEL_ANIMATION_DURATION) / PANEL_COUNT)
      );
      setPanels(initialPanels);
      setCurrentPreviewIndex(PANEL_COUNT % shuffledPreviews.length);
    }

    if (bubbles.length === 0) {
      const initialBubbles = Array.from({ length: BUBBLE_COUNT }, () =>
        createBubble()
      );
      setBubbles(initialBubbles);
    }

    const panelIntervalId = setInterval(() => {
      setPanels((prevPanels) => {
        const newPanel = createPanel();
        setCurrentPreviewIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % shuffledPreviews.length;
          if (nextIndex === 0) {
            reshufflePreviews();
          }
          return nextIndex;
        });
        return [...prevPanels.slice(1), newPanel];
      });
    }, (PANEL_ANIMATION_DURATION * 1000) / PANEL_COUNT);

    const bubbleIntervalId = setInterval(() => {
      setBubbles((prevBubbles) => {
        const newBubble = createBubble();
        return [...prevBubbles.slice(1), newBubble];
      });
    }, 1000);

    return () => {
      clearInterval(panelIntervalId);
      clearInterval(bubbleIntervalId);
    };
  }, [containerSize, shuffledPreviews, currentPreviewIndex, reshufflePreviews]);

  const panelSize = containerSize.height * PANEL_SIZE_RATIO;

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"
        animate={{
          background: [
            "linear-gradient(to bottom right, #1e3a8a, #7e22ce)",
            "linear-gradient(to bottom right, #3b82f6, #8b5cf6)",
            "linear-gradient(to bottom right, #2563eb, #7c3aed)",
            "linear-gradient(to bottom right, #1e3a8a, #7e22ce)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.uniqueKey}
          {...bubble}
          containerHeight={containerSize.height}
        />
      ))}
      {panels.map((panel, index) => (
        <motion.div
          key={panel.uniqueKey}
          className="absolute"
          initial={{
            x: panel.startX,
            y: containerSize.height,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          }}
          animate={{
            y: -panelSize,
            rotateX: panel.rotationX,
            rotateY: panel.rotationY,
            rotateZ: panel.rotationZ,
          }}
          transition={{
            duration: PANEL_ANIMATION_DURATION,
            delay: panel.delay,
            repeat: 0,
            repeatDelay: 0,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          style={{
            width: panelSize,
            height: panelSize,
            transformStyle: "preserve-3d",
            zIndex: PANEL_COUNT - index,
          }}
        >
          <FloatingPanel {...panel} size={panelSize} />
        </motion.div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white text-center z-50 px-4">
          Your Potential.
          <br />
          Ignite it.
        </h1>
      </div>
    </div>
  );
}
