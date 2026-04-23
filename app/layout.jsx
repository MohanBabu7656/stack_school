import './globals.css'
import Header from './Header';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';

import MobileAppDock from './MobileAppDock';
import TopBanner from './TopBanner';
import { Geist } from "next/font/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: 'Stack School | Launch Your Tech Career',
  description: 'Master modern web development and accelerate your career.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`font-sans ${geist.variable}`}>
      <body className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-x-hidden selection:bg-orange-500 selection:text-white">
        


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
          <TopBanner />
          <Header />
          <div className="flex-grow pb-24 md:pb-0 flex flex-col">
            {children}
          </div>
          <Footer />
          <MobileAppDock />
        </div>
        <Analytics />
      </body>
    </html>
  )
}