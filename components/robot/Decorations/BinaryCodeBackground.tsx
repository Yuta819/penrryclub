"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import type { Vector3 } from "three";

function BinaryText({
  position,
  rotationAxis,
}: {
  position: [number, number, number];
  rotationAxis: Vector3;
}) {
  const textRef = useRef<THREE.Mesh>(null);
  const [scale] = useState(() => 0.1 + Math.random() * 0.9);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.applyAxisAngle(rotationAxis, 0.002);
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.5 * scale}
      color={
        new THREE.Color(0.5 + Math.random() * 0.5, 0.5 + Math.random() * 0.5, 1)
      }
      anchorX="center"
      anchorY="middle"
    >
      {Math.random() > 0.5 ? "0" : "1"}
    </Text>
  );
}

function BinaryCloud() {
  const binaryTexts = useMemo(() => {
    const texts: JSX.Element[] = [];
    for (let i = 0; i < 1000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 5 + Math.random() * 15;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      const rotationAxis = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize();
      texts.push(
        <BinaryText key={i} position={[x, y, z]} rotationAxis={rotationAxis} />
      );
    }
    return texts;
  }, []);

  return <>{binaryTexts}</>;
}

export function BinaryCodeBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }} gl={{ alpha: false }}>
        <color attach="background" args={["#000"]} />
        <fog attach="fog" args={["#000", 5, 30]} />
        <ambientLight intensity={0.5} />
        <BinaryCloud />
      </Canvas>
    </div>
  );
}
