import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
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
      <p className="font-medium text-slate-600 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Stack School. All rights reserved.</p>
      <div className="flex space-x-6 font-semibold text-slate-600">
        <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
      </div>
    </footer>
  );
}