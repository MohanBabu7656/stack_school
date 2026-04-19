'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function FloatingParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Initialize the tsparticles engine once
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <Particles
        id="tsparticles"
        className="absolute inset-0 w-full h-full opacity-30"
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#1e3a8a" }, // text-blue-900
            links: { enable: false },
            move: {
              direction: "top",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: 0.6, // Slow, realistic drift
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 15 },
            opacity: {
              value: { min: 0.1, max: 0.5 },
              animation: { enable: true, speed: 0.5, minimumValue: 0.1 },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "random",
              animation: { enable: true, speed: 2 },
            },
            shape: {
              type: "char",
              options: {
                char: [
                  { value: "{ }", font: "monospace", style: "", weight: "bold" },
                  { value: "</>", font: "monospace", style: "", weight: "bold" },
                  { value: "()", font: "monospace", style: "", weight: "bold" },
                  { value: "=>", font: "monospace", style: "", weight: "bold" },
                  { value: "0101", font: "monospace", style: "", weight: "bold" },
                  { value: "[]", font: "monospace", style: "", weight: "bold" }
                ]
              }
            },
            size: {
              value: { min: 14, max: 24 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}