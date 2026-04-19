'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const symbols = ['{ }', '</>', '()', '=>', '0101', '[]', '&&', '||', '!='];
    
    // Generate particles on the client to avoid hydration mismatch
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      text: symbols[Math.floor(Math.random() * symbols.length)],
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      duration: Math.random() * 20 + 15, // 15 to 35 seconds
      delay: Math.random() * 5,
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-blue-900/60 font-mono text-xl md:text-2xl font-bold select-none"
          style={{ left: particle.left, top: particle.top }}
          animate={{
            y: [0, -800], // Float up
            x: [0, Math.random() * 100 - 50, 0], // Slight horizontal drift
            rotate: [0, 360], // Slow rotation
            opacity: [0, 1, 0], // Fade in and out
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        >
          {particle.text}
        </motion.div>
      ))}
    </div>
  );
}