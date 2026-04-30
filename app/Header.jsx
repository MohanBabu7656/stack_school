'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { track } from '@vercel/analytics';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesExpanded, setIsCoursesExpanded] = useState(false);
  const pathname = usePathname();
  const isCareerTools = pathname.startsWith('/career-tools');

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
        {!isCareerTools ? (
          <>
            <Link href="/" className={`transition-colors ${pathname === '/' ? 'text-orange-500 font-bold' : 'hover:text-orange-500'}`}>Home</Link>
            <Link href="/courses" className={`transition-colors ${pathname.startsWith('/courses') ? 'text-orange-500 font-bold' : 'hover:text-orange-500'}`}>Courses</Link>
            <Link href="/placements" className={`transition-colors ${pathname.startsWith('/placements') ? 'text-orange-500 font-bold' : 'hover:text-orange-500'}`}>Placements</Link>
            <Link href="/about" className={`transition-colors ${pathname === '/about' ? 'text-orange-500 font-bold' : 'hover:text-orange-500'}`}>About Us</Link>
            <Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-orange-500 font-bold' : 'hover:text-orange-500'}`}>Contact</Link>
          </>
        ) : (
          <span className="text-orange-500 font-bold tracking-wide">Career Tools</span>
        )}
      </nav>

      <div className="hidden md:flex items-center space-x-6">
        <a 
          href="https://www.instagram.com/stack.school?igsh=dmptMDlsZzY5cDk5" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-950 hover:text-orange-500 transition-all duration-300 hover:scale-110 active:scale-95"
          title="Follow us on Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <Link 
          href={!isCareerTools ? "/career-tools" : "/"} 
          className="text-blue-950 font-semibold hover:text-orange-500 transition-colors"
        >
          {!isCareerTools ? 'Career Tools' : 'Back to Home'}
        </Link>
        {!isCareerTools && (
          <Link 
            href="/apply" 
            className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-950 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:bg-blue-900 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300"
            onClick={() => track('Apply Hub Clicked', { location: 'Desktop Header' })}
          >
            Apply Now
          </Link>
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
            {!isCareerTools && (
              <>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`block transition-colors ${pathname === '/' ? 'text-orange-500 font-bold' : 'hover:text-orange-500'}`}>Home</Link>
                
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link href="/courses" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${pathname === '/courses' ? 'text-orange-500 font-bold' : 'hover:text-orange-500'}`}>Courses</Link>
                    <button onClick={() => setIsCoursesExpanded(!isCoursesExpanded)} className="p-1 text-slate-400 hover:text-orange-500 focus:outline-none">
                      <svg className={`w-5 h-5 transition-transform duration-300 ${isCoursesExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                  </div>
                  {isCoursesExpanded && (
                    <div className="flex flex-col pl-4 mt-3 space-y-3 border-l-2 border-orange-100 animate-[fadeIn_0.3s_ease-in-out]">
                      <Link href="/courses/python" onClick={() => setIsMobileMenuOpen(false)} className={`block transition-colors text-sm ${pathname === '/courses/python' ? 'text-emerald-500 font-bold' : 'text-slate-600 hover:text-emerald-500'}`}>🐍 Python Fast-Track</Link>
                      <Link href="/courses/java" onClick={() => setIsMobileMenuOpen(false)} className={`block transition-colors text-sm ${pathname === '/courses/java' ? 'text-orange-500 font-bold' : 'text-slate-600 hover:text-orange-500'}`}>☕ Java Fullstack</Link>
                      <Link href="/courses/mock-interviews" onClick={() => setIsMobileMenuOpen(false)} className={`block transition-colors text-sm ${pathname === '/courses/mock-interviews' ? 'text-blue-500 font-bold' : 'text-slate-600 hover:text-blue-500'}`}>🎯 Mock Interviews</Link>
                    </div>
                  )}
                </div>

                <Link href="/placements" onClick={() => setIsMobileMenuOpen(false)} className={`block transition-colors ${pathname.startsWith('/placements') ? 'text-orange-500 font-bold' : 'hover:text-orange-500'}`}>Placements</Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block transition-colors ${pathname === '/about' ? 'text-orange-500 font-bold' : 'hover:text-orange-500'}`}>About Us</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block transition-colors ${pathname === '/contact' ? 'text-orange-500 font-bold' : 'hover:text-orange-500'}`}>Contact</Link>
                
                <a 
                  href="https://www.instagram.com/stack.school?igsh=dmptMDlsZzY5cDk5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 hover:text-orange-500 transition-colors py-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <span className="text-sm font-semibold tracking-wide">Instagram</span>
                </a>

                <a 
                  href="https://chat.whatsapp.com/GtHCxt09o0pELkSas7qBAO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 hover:text-[#25D366] transition-colors py-1"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  <span className="text-sm font-semibold tracking-wide">Community Group</span>
                </a>

                <a 
                  href="https://whatsapp.com/channel/0029Vb7VqJz2phHOL3Qvw02i" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 hover:text-[#128C7E] transition-colors py-1"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  <span className="text-sm font-semibold tracking-wide">Job Updates Channel</span>
                </a>

                <hr className="border-slate-200 border-dashed" />
              </>
            )}
            <Link href={!isCareerTools ? "/career-tools" : "/"} onClick={() => setIsMobileMenuOpen(false)} className="block text-left hover:text-orange-500 transition-colors font-bold">{!isCareerTools ? 'Career Tools' : 'Back to Home'}</Link>
            {!isCareerTools && <Link 
              href="/apply" 
              onClick={() => { setIsMobileMenuOpen(false); track('Apply Hub Clicked', { location: 'Mobile Menu' }); }} 
              className="w-full flex items-center justify-center px-5 py-3 bg-blue-950 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:bg-blue-900 transition-colors"
            >Apply Now</Link>}
          </nav>
        </div>
      )}
    </header>
  );
}