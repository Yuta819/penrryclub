"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

interface Panel {
  id: number;
  title: string;
  image: string;
}

const samplePanels: Panel[] = [
  {
    id: 1,
    title: "C++",
    image: "/images/circles/binary3D/1.png",
  },
  {
    id: 2,
    title: "React",
    image: "/images/circles/binary3D/2.png",
  },
  {
    id: 3,
    title: "Django",
    image: "/images/circles/binary3D/3.png",
  },
  {
    id: 4,
    title: "Python",
    image: "/images/circles/binary3D/4.png",
  },
  {
    id: 5,
    title: "Node.js",
    image: "/images/circles/binary3D/5.png",
  },
  {
    id: 6,
    title: "JavaScript",
    image: "/images/circles/binary3D/6.png",
  },
  {
    id: 7,
    title: "Java",
    image: "/images/circles/binary3D/7.png",
  },
  {
    id: 8,
    title: "PHP",
    image: "/images/circles/binary3D/8.png",
  },
  {
    id: 9,
    title: "MySQL",
    image: "/images/circles/binary3D/9.png",
  },
  {
    id: 10,
    title: "VS Code",
    image: "/images/circles/binary3D/10.png",
  },
  {
    id: 11,
    title: "Kotlin",
    image: "/images/circles/binary3D/11.png",
  },
  {
    id: 12,
    title: "PostgreSQL",
    image: "/images/circles/binary3D/12.png",
  },
];

function Panel({
  panel,
  position,
  rotationY,
  scale,
}: {
  panel: Panel;
  position: { x: number; y: number; z: number };
  rotationY: number;
  scale: number;
}) {
  return (
    <div
      className="panel absolute"
      style={{
        transform: `rotateY(${rotationY + 90}deg) translate3d(${
          position.x
        }px, ${position.y}px, ${position.z}px) scale(${scale})`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative w-[350px] h-[262px] shadow-2xl">
        <Image
          src={panel.image}
          alt={panel.title}
          fill
          className="object-cover rounded-lg"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>
    </div>
  );
}

export function ThreeDGallery() {
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const autoRotationSpeed = 0.1;
  const manualRotationSpeed = 0.3;
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (sceneRef.current) {
        setContainerSize({
          width: sceneRef.current.offsetWidth,
          height: sceneRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isRotating) {
        const sensitivity = manualRotationSpeed;
        const deltaX = e.movementX * sensitivity;
        setRotation((prevRotation) => (prevRotation + deltaX) % 360);
      }
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: -(e.clientY / window.innerHeight - 0.5) * 10,
      });
    },
    [isRotating]
  );

  useEffect(() => {
    let animationFrameId: number;

    const autoRotate = () => {
      if (isAutoRotating && !isRotating && !isHovering) {
        setRotation((prevRotation) => (prevRotation + autoRotationSpeed) % 360);
      }
      animationFrameId = requestAnimationFrame(autoRotate);
    };

    autoRotate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoRotating, isRotating, isHovering]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", () => setIsRotating(true));
    window.addEventListener("mouseup", () => setIsRotating(false));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", () => setIsRotating(true));
      window.removeEventListener("mouseup", () => setIsRotating(false));
    };
  }, [handleMouseMove]);

  const calculatePanelPosition = (index: number, total: number) => {
    const angle = (index * 2 * Math.PI) / total + (rotation * Math.PI) / 180;
    const minDimension = Math.min(containerSize.width, containerSize.height);
    const baseRadius = minDimension * 0.9; // Updated baseRadius calculation
    const radius = baseRadius + Math.sin(angle * 2) * (minDimension * 0.05);

    const verticalAmplitude = minDimension * 0.2;
    const verticalOffset = Math.sin(angle * 3) * verticalAmplitude;

    const x = radius * Math.sin(angle);
    const z = radius * Math.cos(angle) - baseRadius;

    const randomOffset = Math.sin(index * 1000) * (minDimension * 0.02);

    return {
      x: x + randomOffset,
      y: verticalOffset,
      z: z + randomOffset,
    };
  };

  const scale = Math.min(containerSize.width, containerSize.height) / 700;

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-transparent"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={sceneRef}
        className="absolute w-full h-full scene"
        style={{
          perspective: `${
            Math.max(containerSize.width, containerSize.height) * 1.2
          }px`,
          perspectiveOrigin: "50% 50%", // 中心に戻す
        }}
      >
        <div
          className="gallery"
          style={{
            transform: `rotateX(${mousePosition.y}deg) rotateY(${
              mousePosition.x
            }deg) translateZ(${
              -Math.min(containerSize.width, containerSize.height) * 1
            }px)`, // Updated translateZ value
            transformStyle: "preserve-3d",
            position: "absolute",
            left: "20%", // 50%から10%に変更
            top: "30%", // 50%から30%に変更
            width: "1px",
            height: "1px",
            zIndex: 1,
          }}
        >
          {samplePanels.map((panel, index) => (
            <Panel
              key={panel.id}
              panel={panel}
              position={calculatePanelPosition(index, samplePanels.length)}
              rotationY={(360 / samplePanels.length) * index + rotation}
              scale={scale}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
        onClick={() => setIsAutoRotating(!isAutoRotating)}
      >
        {isAutoRotating ? "自動回転停止" : "自動回転開始"}
      </button>
    </div>
  );
}
