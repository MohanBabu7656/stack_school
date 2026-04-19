'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Dock from './Dock';
import { motion } from 'framer-motion';

export default function MobileAppDock() {
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    { 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>, 
      label: 'Home', 
      onClick: () => router.push('/'),
      isActive: pathname === '/'
    },
    { 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>, 
      label: 'Courses', 
      onClick: () => router.push('/courses'),
      isActive: pathname.startsWith('/courses')
    },
    { 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>, 
      label: 'Placements', 
      onClick: () => router.push('/placements'),
      isActive: pathname.startsWith('/placements')
    },
    { 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, 
      label: 'About', 
      onClick: () => router.push('/about'),
      isActive: pathname === '/about'
    },
    { 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>, 
      label: 'Contact', 
      onClick: () => router.push('/contact'),
      isActive: pathname === '/contact'
    },
  ];

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed bottom-6 inset-x-0 z-[100] flex justify-center px-3 md:hidden pointer-events-none"
    >
      <Dock items={items} panelHeight={58} baseItemSize={42} magnification={56} />
    </motion.div>
  );
}