"use client";

import { useEffect, useRef } from "react";

type TrailPoint = { x: number; y: number; life: number };

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<TrailPoint[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      points.current.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (points.current.length > 24) points.current.shift();
    };
    window.addEventListener("mousemove", onMove);

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const style = getComputedStyle(document.documentElement);
      const ember = style.getPropertyValue("--color-ember").trim() || "#C98B6B";
      const rose = style.getPropertyValue("--color-grey-rose").trim() || "#C9A3A0";

      points.current.forEach((p, i) => {
        p.life -= 0.035;
        if (p.life <= 0) return;
        const r = 8 + i * 0.6;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        g.addColorStop(0, ember);
        g.addColorStop(1, rose);
        ctx.globalAlpha = p.life * 0.45;
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      points.current = points.current.filter((p) => p.life > 0);
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-multiply"
    />
  );
}
