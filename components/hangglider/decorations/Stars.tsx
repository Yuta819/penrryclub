// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import * as THREE from 'three'

// // 星のアニメーションのタイミング（秒単位）
// const STAR_TIMING = {
// fadeInStart: 45,
// fadeInEnd: 50,
// visibleStart: 50,
// visibleEnd: 75,
// fadeOutStart: 75,
// fadeOutEnd: 80,
// }

// export default function Stars() {
// const mountRef = useRef<HTMLDivElement>(null)
// const starsRef = useRef<THREE.Points | null>(null)

// // プログレス状態（0〜1）
// const [progress, setProgress] = useState(0)

// useEffect(() => {
// const interval = setInterval(() => {
// setProgress((prev) => (prev + 1 / 60) % 1) // 1分サイクル
// }, 1000)

// return () => clearInterval(interval)
// }, [])

// useEffect(() => {
// if (!mountRef.current) return

// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// const renderer = new THREE.WebGLRenderer({ alpha: true })

// renderer.setSize(window.innerWidth, window.innerHeight)
// mountRef.current.appendChild(renderer.domElement)

// // 星を作成
// const stars = createStars()
// starsRef.current = stars
// scene.add(stars)

// camera.position.z = 5

// const animate = () => {
// requestAnimationFrame(animate)

// // 星のアニメーション
// if (starsRef.current) {
// starsRef.current.rotation.y += 0.0001 // 回転アニメーション
// const material = starsRef.current.material as THREE.ShaderMaterial
// if (material.uniforms.opacity) {
// material.uniforms.opacity.value = calculateStarOpacity(progress)
// }
// }

// renderer.render(scene, camera)
// }
// animate()

// const handleResize = () => {
// camera.aspect = window.innerWidth / window.innerHeight
// camera.updateProjectionMatrix()
// renderer.setSize(window.innerWidth, window.innerHeight)
// }
// window.addEventListener('resize', handleResize)

// return () => {
// window.removeEventListener('resize', handleResize)
// mountRef.current?.removeChild(renderer.domElement)
// renderer.dispose()
// }
// }, [progress])

// // 星の透明度を計算
// const calculateStarOpacity = (progress: number) => {
// const timeInSeconds = progress * 80
// if (timeInSeconds < STAR_TIMING.fadeInStart) return 0
// if (timeInSeconds < STAR_TIMING.fadeInEnd)
// return (timeInSeconds - STAR_TIMING.fadeInStart) / (STAR_TIMING.fadeInEnd - STAR_TIMING.fadeInStart)
// if (timeInSeconds < STAR_TIMING.visibleEnd) return 1
// if (timeInSeconds < STAR_TIMING.fadeOutEnd)
// return 1 - (timeInSeconds - STAR_TIMING.fadeOutStart) / (STAR_TIMING.fadeOutEnd - STAR_TIMING.fadeOutStart)
// return 0
// }

// return <div ref={mountRef} className="fixed inset-0 z-0" />
// }

// // 星を作成する関数
// function createStars() {
// const geometry = new THREE.BufferGeometry()
// const vertices = []
// const sizes = []

// for (let i = 0; i < 5000; i++) {
// const x = (Math.random() - 0.5) * 2000
// const y = (Math.random() - 0.5) * 2000
// const z = -Math.random() * 2000
// vertices.push(x, y, z)

// sizes.push(Math.random() * 2 + 1)
// }

// geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
// geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))

// const material = new THREE.ShaderMaterial({
// uniforms: {
// color: { value: new THREE.Color(0xffffff) },
// opacity: { value: 0 }, // 初期状態で非表示
// },
// vertexShader: `
// attribute float size;
// varying float vSize;
// void main() {
// vSize = size;
// gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// gl_PointSize = size * (300.0 / -viewMatrix[2].z);
// }
// `,
// fragmentShader: `
// uniform vec3 color;
// uniform float opacity;
// varying float vSize;
// void main() {
// float r = dot(gl_PointCoord - vec2(0.5), gl_PointCoord - vec2(0.5));
// if (r > 0.25) discard;
// gl_FragColor = vec4(color, opacity);
// }
// `,
// blending: THREE.AdditiveBlending,
// depthTest: false,
// transparent: true,
// })

// return new THREE.Points(geometry, material)
// }
