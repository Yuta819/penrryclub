import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { THREE } from "@/utils/three";

interface FireParticlesProps {
  center: { x: number; y: number };
  THREE: typeof import("three");
}

export default function FireParticles({ center, THREE }: FireParticlesProps) {
  const particlesRef = useRef<THREE.Points>(null!);

  const particlesCount = 4000;
  const radius = 60; // 半径
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = Math.random() * radius;
      pos[i * 3] = r * Math.cos(theta);
      pos[i * 3 + 1] = Math.random() * 10 - 5; // Y軸
      pos[i * 3 + 2] = r * Math.sin(theta);
    }
    return pos;
  }, [particlesCount]);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      const rotationSpeed = 0.2;
      particlesRef.current.rotation.y += delta * rotationSpeed; // Y軸回転
      particlesRef.current.rotation.x += delta * rotationSpeed * 0.5; // X軸も追加
      particlesRef.current.rotation.z += delta * rotationSpeed * 0.003; // Z軸も追加

      const positions = particlesRef.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const idx = i * 3;
        positions[idx + 1] += (Math.random() - 0.5) * 0.1; // Y軸の動き
        if (positions[idx + 1] > 5) positions[idx + 1] = -5;
        if (positions[idx + 1] < -5) positions[idx + 1] = 5;

        // X軸とZ軸の位置を中心に引き寄せる
        positions[idx] += (0 - positions[idx]) * 0.0001;
        positions[idx + 2] += (0 - positions[idx + 2]) * 0.0001;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        color={new THREE.Color(0xff4500)}
        sizeAttenuation
        transparent
        opacity={0.9}
      />
    </points>
  );
}
