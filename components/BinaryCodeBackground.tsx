"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

function BinaryText({
  position,
  rotationAxis,
}: {
  position: [number, number, number];
  rotationAxis: THREE.Vector3;
}) {
  const textRef = useRef<THREE.Mesh>(null); // 型を明示

  const binaryString = useMemo(() => {
    const options = ["0", "1", "01", "10"];
    return options[Math.floor(Math.random() * options.length)];
  }, []);

  useFrame(() => {
    if (textRef.current) {
      textRef.current.position.applyAxisAngle(rotationAxis, 0.002);
      textRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <Text
      ref={textRef} // ref に型指定した useRef を渡す
      position={position}
      fontSize={0.5}
      color="green"
    >
      {binaryString}
    </Text>
  );
}

function BinaryCloud() {
  const binaryTexts = useMemo(() => {
    const texts: JSX.Element[] = []; // 型を明示的に指定
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 10 + Math.random() * 5;
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

  return <>{binaryTexts}</>; // 明示的に型を指定した要素を返す
}

export function BinaryCodeBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.5} />
        <BinaryCloud />
      </Canvas>
    </div>
  );
}
