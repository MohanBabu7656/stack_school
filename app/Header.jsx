'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === '/';

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-white/60 backdrop-blur-md border-b border-white/40 shadow-sm transition-all">
      <Link 
        href="/"
        className="flex items-center cursor-pointer hover:opacity-80 transition-opacity" 
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <Image 
          src="/stack_school.png" 
          alt="Stack School Logo" 
          width={150}
          height={40}
          className="h-10 w-auto mr-3 drop-shadow-sm" 
        />
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="text-blue-950">Stack</span> <span className="text-orange-500">School</span>
        </h1>
      </Link>
      
      <nav className="hidden md:flex items-center space-x-8 font-medium text-blue-950">
        {isLanding ? (
          <>
            <a href="#courses" className="hover:text-orange-500 transition-colors">Courses</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">About Us</a>
            <a href="#mentors" className="hover:text-orange-500 transition-colors">Mentors</a>
          </>
        ) : (
          <span className="text-orange-500 font-bold tracking-wide">Student Dashboard</span>
        )}
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <Link 
          href={isLanding ? "/dashboard" : "/"} 
          className="text-blue-950 font-semibold hover:text-orange-500 transition-colors"
        >
          {isLanding ? 'Go to Dashboard' : 'Back to Home'}
        </Link>
        {isLanding && (
          <a href="#courses" className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-950 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:bg-blue-900 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300">
            Enroll Now
          </a>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2 ml-auto text-blue-950 hover:text-orange-500 focus:outline-none transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-white/40 shadow-sm px-4 py-5 space-y-4 absolute top-full left-0 w-full z-40">
          <nav className="flex flex-col space-y-4 font-medium text-blue-950">
            <Link href={isLanding ? "/dashboard" : "/"} onClick={() => setIsMobileMenuOpen(false)} className="block text-left hover:text-orange-500 transition-colors font-bold">{isLanding ? 'Go to Dashboard' : 'Back to Home'}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}