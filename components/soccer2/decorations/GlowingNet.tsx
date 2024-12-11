"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlowingNet({ containerRef, className }) {
  const netRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      containerRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.PlaneGeometry(10, 5, 20, 10);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          varying vec2 vUv;
          void main() {
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(vUv, center);
            float alpha = sin(dist * 10.0 - time) * 0.5 + 0.5;
            gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * 0.5);
          }
        `,
        transparent: true,
      });

      const net = new THREE.Mesh(geometry, material);
      scene.add(net);
      netRef.current = net;

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        if (netRef.current) {
          const material = netRef.current.material as THREE.ShaderMaterial;
          material.uniforms.time.value += 0.05;
        }
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        containerRef.current?.removeChild(renderer.domElement);
      };
    }
  }, [containerRef]);

  return <div className={className} />;
}
