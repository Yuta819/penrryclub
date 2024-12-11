"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function GlowingCourt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawCourt = () => {
      ctx.strokeStyle = "rgba(255, 165, 0, 0.2)";
      ctx.lineWidth = 2;

      // Draw court outline
      ctx.beginPath();
      ctx.rect(50, 50, canvas.width - 100, canvas.height - 100);
      ctx.stroke();

      // Draw center circle
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
      ctx.stroke();

      // Draw free throw lines
      ctx.beginPath();
      ctx.moveTo(150, 50);
      ctx.lineTo(150, canvas.height - 50);
      ctx.moveTo(canvas.width - 150, 50);
      ctx.lineTo(canvas.width - 150, canvas.height - 50);
      ctx.stroke();
    };

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    drawCourt();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawCourt();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
