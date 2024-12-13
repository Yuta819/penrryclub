"use client";

import { useEffect, useRef } from "react";

interface Firework {
  x: number;
  y: number;
  targetY: number;
  size: number;
  speed: number;
  color: string;
  alpha: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
}

export default function Animation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const canvas = canvasRef.current;
      if (!canvas) return; // canvasがnullの場合、何も実行しない

      const ctx = canvas.getContext("2d");
      if (!ctx) return; // ctxがnullの場合、何も実行しない

      const setCanvasSize = () => {
        if (!canvas) return; // 再確認が必要
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      setCanvasSize();
      window.addEventListener("resize", setCanvasSize);

      const fireworks: Firework[] = [];
      const particles: Particle[] = [];
      const colorSets = [
        ["#FF69B4", "#FFB6C1", "#FFC0CB"], // ピンク系
        ["#FFD700", "#FFA500", "#FFB347"], // 金系
        ["#7FFF00", "#98FB98", "#90EE90"], // 緑系
        ["#00BFFF", "#87CEEB", "#87CEFA"], // 青系
        ["#FF6347", "#FF4500", "#FF7F50"], // 赤
      ];

      function getRandomColorSet() {
        return colorSets[Math.floor(Math.random() * colorSets.length)];
      }

      function createFirework(): Firework {
        return {
          x: Math.random() * (canvas?.width || 0),
          y: canvas?.height || 0,
          targetY:
            Math.random() * (canvas?.height || 0) * 0.6 +
            (canvas?.height || 0) * 0.2,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 4 + 3,
          color: getRandomColorSet()[0],
          alpha: 1,
        };
      }

      function createExplosion(x: number, y: number, color: string) {
        const particleCount = 30;
        const colorSet = getRandomColorSet();

        for (let i = 0; i < particleCount; i++) {
          const angle = (Math.PI * 2 * i) / particleCount;
          const speed = 2 + Math.random() * 2;
          particles.push({
            x,
            y,
            size: 2 + Math.random() * 2,
            speedX: Math.cos(angle) * speed,
            speedY: Math.sin(angle) * speed,
            color: colorSet[Math.floor(Math.random() * colorSet.length)],
            alpha: 1,
          });
        }
      }

      function drawFirework(firework: Firework) {
        if (!ctx) return;

        ctx.beginPath();
        ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
        ctx.fillStyle = firework.color;
        ctx.globalAlpha = firework.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.beginPath();
        ctx.moveTo(firework.x, firework.y);
        ctx.lineTo(firework.x, firework.y + 10);
        ctx.strokeStyle = firework.color;
        ctx.lineWidth = firework.size;
        ctx.globalAlpha = firework.alpha;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      function drawParticle(particle: Particle) {
        if (!ctx) return;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      function updateFireworks() {
        for (let i = fireworks.length - 1; i >= 0; i--) {
          const firework = fireworks[i];
          firework.y -= firework.speed;
          firework.alpha -= 0.01;

          if (firework.y <= firework.targetY) {
            createExplosion(firework.x, firework.y, firework.color);
            fireworks.splice(i, 1);
          } else {
            drawFirework(firework);
          }
        }
      }

      function updateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
          const particle = particles[i];
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.speedY += 0.05; // gravity
          particle.alpha -= 0.01;
          particle.size *= 0.96;

          if (particle.alpha <= 0) {
            particles.splice(i, 1);
          } else {
            drawParticle(particle);
          }
        }
      }

      function drawTrail() {
        if (!ctx || !canvas) return; // ctxまたはcanvasがnullの場合は終了

        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      function animate() {
        if (!ctx || !canvas) return; // ctxまたはcanvasがnullの場合は終了

        drawTrail();

        if (Math.random() < 0.05) {
          fireworks.push(createFirework());
        }

        updateFireworks();
        updateParticles();

        requestAnimationFrame(animate);
      }

      animate();

      return () => {
        window.removeEventListener("resize", setCanvasSize);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
