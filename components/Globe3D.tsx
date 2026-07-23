'use client';

import React, { useEffect, useRef } from 'react';

export const Globe3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = 360);
    const height = (canvas.height = 360);
    const cx = width / 2;
    const cy = height / 2;
    const radius = 130;

    // Generate 3D sphere points
    const points: { x: number; y: number; z: number; originalZ: number }[] = [];
    const count = 180;

    for (let i = 0; i < count; i++) {
      const theta = Math.acos(-1 + (2 * i) / count);
      const phi = Math.sqrt(count * Math.PI) * theta;

      points.push({
        x: radius * Math.cos(phi) * Math.sin(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(theta),
        originalZ: radius * Math.cos(theta),
      });
    }

    let angleX = 0.005;
    let angleY = 0.008;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Rotate points
      points.forEach((p) => {
        // Rotate Y
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y2;
        p.z = z2;

        // Perspective projection
        const scale = 250 / (250 + p.z);
        const px = cx + p.x * scale;
        const py = cy + p.y * scale;
        const alpha = Math.max(0.1, (p.z + radius) / (2 * radius));

        ctx.save();
        ctx.globalAlpha = alpha * 0.85;
        ctx.beginPath();
        ctx.arc(px, py, Math.max(1, 2 * scale), 0, Math.PI * 2);
        
        if (p.z > 0) {
          ctx.fillStyle = '#00F0FF';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#00F0FF';
        } else {
          ctx.fillStyle = '#6366F1';
        }

        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Outer Glow Halo */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <canvas ref={canvasRef} className="block relative z-10 animate-pulse-slow" />
      <div className="absolute text-[11px] font-mono font-semibold uppercase text-cyan-400/80 tracking-widest bottom-2">
        • Live Deployed Globe Nodes •
      </div>
    </div>
  );
};
