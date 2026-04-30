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
          <a 
            href="https://www.instagram.com/stack.school?igsh=dmptMDlsZzY5cDk5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-orange-500 transition-colors mt-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span>@stack.school</span>
          </a>
          <a 
            href="https://chat.whatsapp.com/GtHCxt09o0pELkSas7qBAO" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 text-emerald-600 hover:text-emerald-700 font-bold transition-colors mt-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
            <span>Community Group</span>
          </a>
          <a 
            href="https://whatsapp.com/channel/0029Vb7VqJz2phHOL3Qvw02i" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 text-teal-600 hover:text-teal-700 font-bold transition-colors mt-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
            <span>Job Updates Channel</span>
          </a>
        </div>
      </div>
      <p className="font-medium text-slate-600 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Stack School. All rights reserved.</p>
      <div className="flex space-x-6 font-semibold text-slate-600">
        <a href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
        <a href="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</a>
      </div>
    </footer>
  );
}