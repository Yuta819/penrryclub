"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import * as THREE from "three";
function Trophy() {
  const trophyRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    trophyRef.current.rotation.y += delta;
  });

  return (
    <Box ref={trophyRef} args={[1, 2, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial color="gold" metalness={0.8} roughness={0.2} />
    </Box>
  );
}

export default function SpinningTrophy() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Trophy />
    </Canvas>
  );
}
