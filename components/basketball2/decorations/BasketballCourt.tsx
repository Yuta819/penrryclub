import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three";

export default function BasketballCourt() {
  const courtRef = useRef<THREE.Mesh>(null!);

  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const context = canvas.getContext("2d");
    if (context) {
      context.fillStyle = "#FF8C00";
      context.fillRect(0, 0, 1024, 1024);
      context.strokeStyle = "white";
      context.lineWidth = 2;
      for (let i = 0; i <= 10; i++) {
        context.beginPath();
        context.moveTo(i * 102.4, 0);
        context.lineTo(i * 102.4, 1024);
        context.stroke();
        context.beginPath();
        context.moveTo(0, i * 102.4);
        context.lineTo(1024, i * 102.4);
        context.stroke();
      }
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    if (courtRef.current) {
      courtRef.current.rotation.x =
        -Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      courtRef.current.position.y =
        -2 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Plane
      ref={courtRef}
      args={[20, 15]}
      rotation-x={-Math.PI / 2}
      position={[0, -2, 0]}
    >
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </Plane>
  );
}
