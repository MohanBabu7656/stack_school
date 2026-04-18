'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function StackSchoolLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-hidden selection:bg-orange-500 selection:text-white">
      
      {/* Background Gradients & Textures for Glassmorphism Context */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-pulse"></div>
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-orange-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle Binary Texture */}
        <div className="absolute inset-0 opacity-[0.03] text-justify font-mono text-xs overflow-hidden break-all leading-tight text-blue-900" aria-hidden="true">
          {Array(500).fill('01011010 01111001 01101100 00110101 ').join('')}
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-white/60 backdrop-blur-md border-b border-white/40 shadow-sm transition-all">
        <div className="flex items-center">
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
        </div>
        
        <nav className="hidden md:flex space-x-8 font-medium text-blue-950">
          <a href="#courses" className="hover:text-orange-500 transition-colors">Courses</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">About Us</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </nav>

        <a href="mailto:stackschool7@gmail.com?subject=Course%20Inquiry&body=Hello%20Stack%20School%20Team,%0D%0A%0D%0AI%20would%20like%20to%20get%20more%20information.%0D%0A%0D%0AName:%20%0D%0ACourse%20Interested:%20%0D%0AMobile%20Number:%20%0D%0A%0D%0A" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-blue-950 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:bg-blue-900 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300">
          Enroll Now
        </a>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden p-2 ml-auto text-blue-950 hover:text-orange-500 focus:outline-none transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-white/40 shadow-sm px-4 py-5 space-y-4 absolute top-full left-0 w-full z-40">
            <nav className="flex flex-col space-y-4 font-medium text-blue-950">
              <a href="#courses" className="block hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Courses</a>
              <a href="#about" className="block hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
              <a href="#contact" className="block hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </nav>
            <a href="mailto:stackschool7@gmail.com?subject=Course%20Inquiry&body=Hello%20Stack%20School%20Team,%0D%0A%0D%0AI%20would%20like%20to%20get%20more%20information.%0D%0A%0D%0AName:%20%0D%0ACourse%20Interested:%20%0D%0AMobile%20Number:%20%0D%0A%0D%0A" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center justify-center px-5 py-3 bg-blue-950 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:bg-blue-900 transition-colors">
              Enroll Now
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
        <div className="max-w-4xl w-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Subtle inner reflection */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-sm text-blue-950">
            Launch Your Tech Career <br/> with <span className="text-orange-500">Stack</span> <span className="text-blue-950">School</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-emerald-600 font-bold mb-8 tracking-widest uppercase drop-shadow-sm">
            Learn. Code. Succeed.
          </p>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Master modern web development, build real-world projects, and accelerate your career with our industry-leading coding bootcamps.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center relative z-10">
            <a href="#courses" className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-950 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:bg-blue-900 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300">
              View Courses
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-white/70 backdrop-blur-md text-orange-600 border border-orange-200 font-semibold rounded-xl shadow-sm hover:bg-white hover:border-orange-400 hover:-translate-y-1 transition-all duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </main>

      {/* Core Methodology */}
      <section id="about" className="px-4 py-12 flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Method 1: Structured Path */}
          <div className="bg-white/40 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-3">Structured Path</h3>
            <p className="text-slate-700 font-medium">Follow a highly organized, step-by-step curriculum designed to take you from beginner to job-ready developer.</p>
          </div>

          {/* Method 2: Real-World Experience */}
          <div className="bg-white/40 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 group relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-300/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-light">{"{ }"}</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-3">Real-World Experience</h3>
            <p className="text-slate-700 font-medium">Build practical, portfolio-ready projects that solve actual industry problems, not just tutorial exercises.</p>
          </div>

          {/* Method 3: Career Ready */}
          <div className="bg-white/40 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 group relative">
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-300/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-3">Accelerate Your Future</h3>
            <p className="text-slate-700 font-medium">Gain access to expert mentorship, interview preparation, and a vast network of hiring partners.</p>
          </div>

        </div>
      </section>

      {/* Course Showcase */}
      <section id="courses" className="px-4 py-16 flex justify-center">
        <div className="max-w-5xl w-full bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] rounded-3xl p-8 md:p-12 relative overflow-hidden">
           <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-orange-300/20 blur-3xl rounded-full pointer-events-none"></div>
           <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-emerald-300/20 blur-3xl rounded-full pointer-events-none"></div>

          <h3 className="text-4xl font-extrabold text-center text-blue-950 mb-12 drop-shadow-sm">Featured Stacks</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Python Card */}
            <div className="bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-2xl p-8 hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-3xl font-bold text-blue-950">Python Fullstack</h4>
                <span className="text-emerald-600 font-mono font-bold bg-emerald-100/80 px-3 py-1 rounded-lg">{'< py >'}</span>
              </div>
              <p className="text-orange-600 font-bold mb-5 text-lg">Data-Driven Web Applications</p>
              <ul className="text-slate-700 font-medium space-y-3 mb-8">
                <li className="flex items-center"><span className="mr-3 text-emerald-500 font-bold">✓</span> Django & FastAPI</li>
                <li className="flex items-center"><span className="mr-3 text-emerald-500 font-bold">✓</span> React & Modern Frontend</li>
                <li className="flex items-center"><span className="mr-3 text-emerald-500 font-bold">✓</span> Cloud Deployment & CI/CD</li>
              </ul>
              <button className="w-full py-3.5 bg-white/80 border-2 border-blue-950 text-blue-950 font-bold rounded-xl hover:bg-blue-950 hover:text-white transition-colors duration-300 shadow-sm">
                Explore Python Stack
              </button>
            </div>

            {/* Java Card */}
            <div className="bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-2xl p-8 hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-3xl font-bold text-blue-950">Java Fullstack</h4>
                <span className="text-orange-600 font-mono font-bold bg-orange-100/80 px-3 py-1 rounded-lg">{'< java >'}</span>
              </div>
              <p className="text-orange-600 font-bold mb-5 text-lg">Enterprise-Grade Architecture</p>
              <ul className="text-slate-700 font-medium space-y-3 mb-8">
                <li className="flex items-center"><span className="mr-3 text-orange-500 font-bold">✓</span> Spring Boot & Microservices</li>
                <li className="flex items-center"><span className="mr-3 text-orange-500 font-bold">✓</span> Angular & Scalable UI</li>
                <li className="flex items-center"><span className="mr-3 text-orange-500 font-bold">✓</span> Advanced Database Design</li>
              </ul>
              <button className="w-full py-3.5 bg-white/80 border-2 border-blue-950 text-blue-950 font-bold rounded-xl hover:bg-blue-950 hover:text-white transition-colors duration-300 shadow-sm">
                Explore Java Stack
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Mentors */}
      <section id="mentors" className="px-4 py-16 flex justify-center relative z-10 bg-white/20 backdrop-blur-md border-y border-white/40">
        <div className="max-w-5xl w-full">
          <h3 className="text-4xl font-extrabold text-center text-blue-950 mb-12 drop-shadow-sm">Meet Your Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-blue-200 shrink-0 overflow-hidden border-4 border-white shadow-sm flex items-center justify-center">
                 <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-2xl font-bold text-blue-950">Sarah Jenkins</h4>
                <p className="text-orange-600 font-bold text-sm mb-3">Former Senior Java Developer at Amazon</p>
                <p className="text-slate-700 font-medium text-sm leading-relaxed">Brings 10+ years of enterprise architecture experience to help you master Spring Boot and cloud-native backend systems.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-emerald-200 shrink-0 overflow-hidden border-4 border-white shadow-sm flex items-center justify-center">
                 <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-2xl font-bold text-blue-950">David Chen</h4>
                <p className="text-emerald-600 font-bold text-sm mb-3">Lead Python Engineer at Stripe</p>
                <p className="text-slate-700 font-medium text-sm leading-relaxed">Expert in data-driven backends and scalable integrations using Django, FastAPI, and robust AWS infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="px-4 py-20 flex justify-center relative z-10">
        <div className="max-w-4xl w-full text-center bg-blue-950 rounded-3xl p-10 md:p-16 shadow-2xl shadow-blue-900/40 relative overflow-hidden border border-blue-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10 drop-shadow-md">Kickstart Your Tech Career</h3>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10 font-medium">
            Download our <span className="text-orange-400 font-bold">Free Python vs. Java Career Roadmap</span> and discover the path that aligns with your goals.
          </p>
          
          <form className="flex flex-col sm:flex-row max-w-xl mx-auto relative z-10 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium"
              required
            />
            <button type="submit" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/40 hover:bg-orange-400 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
              Get My Roadmap
            </button>
          </form>
        </div>
      </section>

      {/* Extended Footer */}
      <footer className="mt-auto relative z-10 w-full bg-white/40 backdrop-blur-lg border-t border-white/50 text-blue-950 py-10 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between shadow-[0_-4px_32px_0_rgba(31,38,135,0.02)]">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="flex items-center mb-2">
            <Image 
              src="/stack_school.png" 
              alt="Stack School Logo" 
              width={120} 
              height={32} 
              className="h-8 w-auto mr-3 opacity-90 drop-shadow-sm" 
            />
            <span className="font-bold text-xl">Stack School</span>
          </div>
          <div className="flex flex-col text-center md:text-left text-slate-600 font-medium mt-1">
            <a href="mailto:stackschool7@gmail.com" className="hover:text-orange-500 transition-colors">stackschool7@gmail.com</a>
            <a href="tel:7075775019" className="hover:text-orange-500 transition-colors mt-1">+91 7075775019</a>
          </div>
        </div>
        
        <p className="font-medium text-slate-600 mb-4 md:mb-0">&copy; 2026 Stack School. All rights reserved.</p>
        
        <div className="flex space-x-6 font-semibold text-slate-600">
          <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Careers</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
        </div>
      </footer>

      </div>
      
    </div>
  );
}
