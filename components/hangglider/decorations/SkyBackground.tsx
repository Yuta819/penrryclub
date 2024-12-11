"use client";

import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise";
import { useWebGL } from "./WebGLContext";

export default function SkyBackground() {
  const { renderer } = useWebGL();
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  const { cloudTexture, cloudMaterial } = useMemo(() => {
    const texture = generateCloudTexture();
    const material = createCloudMaterial(texture);
    return { cloudTexture: texture, cloudMaterial: material };
  }, []);

  useEffect(() => {
    if (!renderer) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      50
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const clouds = createClouds(cloudMaterial);
    clouds.forEach((cloud) => scene.add(cloud));

    const handleResize = () => {
      if (camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      animateClouds(clouds);
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };
    animate();

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
      clouds.forEach((cloud) => scene.remove(cloud));
    };
  }, [renderer, cloudMaterial]);

  return null;
}

const generateCloudTexture = () => {
  const size = 1024;
  const data = new Uint8Array(size * size * 4);
  const perlin = new ImprovedNoise();
  const z = Math.random() * 100;

  for (let i = 0; i < size * size * 4; i += 4) {
    const x = (i / 4) % size;
    const y = ~~(i / 4 / size);

    let noise = 0;
    noise += perlin.noise(x / 50, y / 50, z) * 0.625;
    noise += perlin.noise(x / 25, y / 25, z) * 0.25;
    noise += perlin.noise(x / 12.5, y / 12.5, z) * 0.125;

    noise = Math.max(0, Math.min(1, (noise * 0.5 + 0.5) * 1.2 - 0.1));
    const alpha = Math.pow(noise, 1.5);

    data[i] = data[i + 1] = data[i + 2] = 255;
    data[i + 3] = Math.floor(alpha * 255);
  }

  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  texture.needsUpdate = true;
  return texture;
};

const createCloudMaterial = (texture: THREE.Texture) => {
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform sampler2D cloudTexture;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(cloudTexture, vUv);
      float distance = length(vUv - vec2(0.5));
      float alpha = smoothstep(0.5, 0.2, distance) * color.a;
      gl_FragColor = vec4(color.rgb, alpha);
    }
  `;

  return new THREE.ShaderMaterial({
    uniforms: {
      cloudTexture: { value: texture },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
  });
};

const createCloudShape = (material: THREE.Material) => {
  const group = new THREE.Group();
  const baseGeometry = new THREE.CircleGeometry(1, 32);

  const createCloudPart = (scale: number, x: number, y: number) => {
    const part = new THREE.Mesh(baseGeometry, material);
    part.scale.set(scale, scale, 1);
    part.position.set(x, y, 0);
    return part;
  };

  group.add(createCloudPart(1, 0, 0));
  group.add(createCloudPart(0.8, 0.8, 0.2));
  group.add(createCloudPart(0.7, -0.5, 0.3));
  group.add(createCloudPart(0.6, 0.3, -0.4));

  return group;
};

const createClouds = (material: THREE.Material) => {
  const clouds: THREE.Group[] = [];

  for (let i = 0; i < 20; i++) {
    const cloud = createCloudShape(material);
    cloud.position.set(
      Math.random() * 30 - 15,
      Math.random() * 15 - 7.5,
      Math.random() * 8 - 10
    );
    cloud.rotation.z = Math.random() * Math.PI;
    const scale = (Math.random() * 0.5 + 0.5) * 2; // 2倍に大きくする
    cloud.scale.set(scale, scale, 1);
    clouds.push(cloud);
  }

  return clouds;
};

const animateClouds = (clouds: THREE.Group[]) => {
  clouds.forEach((cloud, index) => {
    cloud.position.x -= 0.005 + index * 0.0002;
    if (cloud.position.x < -15) cloud.position.x = 15;
    cloud.rotation.z += 0.0001;
  });
};
