'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

function DockItem({ item, mouseX, baseItemSize, magnification }) {
  const ref = useRef(null);

  // Calculate the distance from the mouse to the center of the icon
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Transform distance into size based on the magnification prop
  const sizeTransform = useTransform(
    distance, 
    [-150, 0, 150], 
    [baseItemSize, magnification, baseItemSize]
  );
  
  // Add spring physics for fluid bouncing
  const size = useSpring(sizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.button
      ref={ref}
      onClick={item.onClick}
      style={{ width: size, height: size }}
      whileTap={{ scale: 0.85 }}
      className="flex flex-col items-center justify-center bg-white/60 backdrop-blur-md border border-white/60 shadow-sm rounded-2xl text-blue-950 hover:text-orange-500 hover:bg-orange-50 transition-colors relative group focus:outline-none"
    >
      {item.icon}
      <span className="absolute -top-10 bg-blue-950 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
        {item.label}
      </span>
    </motion.button>
  );
}

export default function Dock({ items, panelHeight = 68, baseItemSize = 50, magnification = 70 }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      className="mx-auto flex items-end justify-around gap-2 bg-white/50 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-3xl px-3 py-2 pb-2.5"
      style={{ height: panelHeight }}
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {items.map((item, idx) => (
        <DockItem key={idx} item={item} mouseX={mouseX} baseItemSize={baseItemSize} magnification={magnification} />
      ))}
    </motion.div>
  );
}