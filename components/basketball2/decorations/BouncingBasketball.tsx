import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function BouncingBasketball() {
  const ballRef = useRef<THREE.Mesh>(null!);
  const velocity = useRef(0);
  const gravity = -9.81;
  const damping = 0.8;
  const floorY = -2;

  useFrame((state, delta) => {
    if (ballRef.current) {
      let position = ballRef.current.position.y;
      velocity.current += gravity * delta;
      position += velocity.current * delta;

      if (position <= floorY) {
        position = floorY;
        velocity.current *= -damping;
      }

      ballRef.current.position.y = position;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere ref={ballRef} args={[0.5, 32, 32]} position={[0, 3, 0]}>
        <meshStandardMaterial color="orange" />
      </Sphere>
    </>
  );
}
