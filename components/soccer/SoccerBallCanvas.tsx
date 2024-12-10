"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

function SoccerBall() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.8}
        roughness={0.2}
        envMapIntensity={0.5}
      />
    </Sphere>
  );
}

export function SoccerBallCanvas() {
  return (
    <div className="w-32 h-32 md:w-48 md:h-48">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SoccerBall />
      </Canvas>
    </div>
  );
}
