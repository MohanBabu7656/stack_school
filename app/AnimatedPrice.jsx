'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

function AnimatedPriceContent({ from, to, className, dropDelay }) {
  const count = useMotionValue(from);
  const [showConfetti, setShowConfetti] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    // Start the counter roll down right after the physical drop animation finishes
    const controls = animate(count, to, { duration: 1.2, ease: "easeOut", delay: dropDelay + 0.4 });
    
    // Safely update the text content directly
    const unsubscribe = count.on("change", (latest) => {
      if (textRef.current) {
        textRef.current.textContent = `₹${Math.round(latest).toLocaleString('en-IN')}`;
      }
    });

    // Trigger confetti exactly when the counter hits the target
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, (dropDelay + 0.4 + 1.2) * 1000);

    return () => {
      controls.stop();
      unsubscribe();
      clearTimeout(timer);
    };
  }, [count, to, dropDelay]);

  const confettiColors = ['#10b981', '#f97316', '#3b82f6', '#fbbf24'];

  return (
    <motion.span 
      initial={{ opacity: 0, y: -20, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: dropDelay, type: "spring", bounce: 0.6 }}
      style={{ transformOrigin: "top" }}
      className={`relative ${className}`}
    >
      <span ref={textRef}>₹{Math.round(from).toLocaleString('en-IN')}</span>
      
      {showConfetti && [...Array(12)].map((_, i) => {
        const angle = (i * 360) / 12;
        const distance = 40 + Math.random() * 20;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;
        
        return (
          <motion.div key={i} initial={{ x: 0, y: 0, scale: 0, opacity: 1 }} animate={{ x, y, scale: Math.random() * 0.5 + 0.5, opacity: 0, rotate: Math.random() * 360 }} transition={{ duration: 0.8, ease: "easeOut" }} className="absolute left-1/2 top-1/2 w-2.5 h-2.5 rounded-sm pointer-events-none" style={{ backgroundColor: confettiColors[i % confettiColors.length], marginLeft: '-5px', marginTop: '-5px' }} />
        );
      })}
    </motion.span>
  );
}

export default function AnimatedPrice({ from, to, className, dropDelay }) {
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoopKey(prev => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return <AnimatedPriceContent key={loopKey} from={from} to={to} className={className} dropDelay={dropDelay} />;
}