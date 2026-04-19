'use client';

import React, { useEffect, useRef } from 'react';

export default function DotField({
  dotRadius = 1.5,
  dotSpacing = 14,
  bulgeStrength = 67,
  glowRadius = 160,
  sparkle = false,
  waveAmplitude = 0,
  cursorRadius = 500,
  cursorForce = 0.1,
  bulgeOnly = true,
  gradientFrom = "#172554",
  gradientTo = "#f97316",
  glowColor = "#f8fafc",
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let mouseX = -1000;
    let mouseY = -1000;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        // Use devicePixelRatio for crisp rendering on retina/high-res displays
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    // Track mouse movements on the parent window for better tracking coverage
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Helper to safely convert hex strings into RGB color objects
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 255, g: 255, b: 255 };
    };

    const cFrom = hexToRgb(gradientFrom);
    const cTo = hexToRgb(gradientTo);
    const cGlow = hexToRgb(glowColor);

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);
      time += 0.05;

      const rows = Math.ceil(height / dotSpacing) + 2;
      const cols = Math.ceil(width / dotSpacing) + 2;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          let x = j * dotSpacing;
          let y = i * dotSpacing;

          let dx = x - mouseX;
          let dy = y - mouseY;
          let dist = Math.sqrt(dx * dx + dy * dy);

          let currentRadius = dotRadius;
          let offsetX = 0;
          let offsetY = 0;

          if (dist < cursorRadius) {
            const force = (cursorRadius - dist) / cursorRadius;
            
            if (bulgeOnly) {
              currentRadius += force * (bulgeStrength / 10);
            } else {
              offsetX = dx * force * cursorForce;
              offsetY = dy * force * cursorForce;
              currentRadius += force * (bulgeStrength / 10);
            }
          }

          if (waveAmplitude > 0) {
            offsetY += Math.sin(time + x * 0.05) * waveAmplitude;
          }

          let alpha = 1;
          if (sparkle) {
            alpha = 0.3 + Math.random() * 0.7;
          }

          const progress = Math.min(Math.max(x / width, 0), 1);
          const r = Math.round(cFrom.r + (cTo.r - cFrom.r) * progress);
          const g = Math.round(cFrom.g + (cTo.g - cFrom.g) * progress);
          const b = Math.round(cFrom.b + (cTo.b - cFrom.b) * progress);

          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.fill();

          if (dist < glowRadius) {
            const glowIntensity = (glowRadius - dist) / glowRadius;
            ctx.beginPath();
            ctx.arc(x + offsetX, y + offsetY, currentRadius * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${cGlow.r}, ${cGlow.g}, ${cGlow.b}, ${glowIntensity * 0.15})`;
            ctx.fill();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotRadius, dotSpacing, bulgeStrength, glowRadius, sparkle, waveAmplitude, cursorRadius, cursorForce, bulgeOnly, gradientFrom, gradientTo, glowColor]);

  return <canvas ref={canvasRef} className={`block w-full h-full pointer-events-auto ${className}`} />;
}