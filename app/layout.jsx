import './globals.css'
import Header from './Header';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';

import MobileAppDock from './MobileAppDock';
import TopBanner from './TopBanner';
import FloatingNav from './FloatingNav';
import { Geist } from "next/font/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: 'Stack School | Best Python & Java Fullstack Coding Bootcamp | 100% Placement Support',
  description: 'Join Stack School, the premier coding bootcamp for Python Data/Web and Java Fullstack development. Get 1-on-1 mentorship, lifetime career support, and job-ready skills in 8-12 weeks.',
  metadataBase: new URL('https://stackschool.in'),
  icons: {
    icon: '/stack_school.png',
    apple: '/stack_school.png',
  },
  keywords: ['coding bootcamp', 'python course', 'java fullstack', 'web development', 'career transition', 'tech jobs india', 'mentorship'],
  openGraph: {
    title: 'Stack School | Best Python & Java Fullstack Coding Bootcamp',
    description: 'Master modern web development and accelerate your career with our intensive tracks.',
    url: '/',
    siteName: 'Stack School',
    images: [
      {
        url: '/stack_school.png',
        width: 1200,
        height: 630,
        alt: 'Stack School - Launch Your Tech Career'
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stack School | Launch Your Tech Career',
    description: 'Master modern web development and accelerate your career.',
    images: ['/stack_school.png'],
  },
  verification: {
    google: 'Yu1irs11PRwVHunKoUf8nxD4153i4MU2_KRjzNjr7yk',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`font-sans ${geist.variable}`}>
      <body className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-x-clip selection:bg-orange-500 selection:text-white">
        


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
          <FloatingNav />
        </div>
        
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Stack School",
              "url": "https://stackschool.in",
              "logo": "https://stackschool.in/stack_school.png",
              "sameAs": [
                "https://www.instagram.com/stack.school"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7075775019",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "tel", "hi"]
              }
            })
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}