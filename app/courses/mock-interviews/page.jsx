import React from 'react';
import Link from 'next/link';
import TrackedEnrollButton from '../../TrackedEnrollButton';

export const metadata = {
  title: 'Free Mock Interviews | Stack School',
  description: 'Master the Interview, Land the Job with Stack School.',
};

export default function MockInterviewsPage() {
  const mockInterviewUrl = process.env.NEXT_PUBLIC_MOCK_INTERVIEW_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSdczT9ww2ICd9qjDIHTIkitQD1mVcmY7B5BuJyWuyp3b7vfGw/viewform?usp=publish-editor";

  return (
    <main className="flex-grow px-4 md:px-8 py-20 md:py-32 flex justify-center relative z-10">
      <div className="max-w-4xl w-full min-w-0 bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-6 md:p-10 lg:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs md:text-sm font-bold px-6 py-2 rounded-bl-2xl z-10 shadow-md">
          Fee: ₹0 (Limited Slots)
        </div>

        <div className="flex items-center mb-6 min-w-0 mt-4 md:mt-0">
          <span className="text-orange-600 text-2xl mr-4">🎯</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 drop-shadow-sm break-words whitespace-normal min-w-0">Mock Interviews</h1>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-orange-500 font-bold mb-6 tracking-wide uppercase">
          Master the Interview, Land the Job.
        </p>

        <p className="text-sm md:text-base lg:text-lg text-slate-700 font-medium mb-10 leading-relaxed">
          Greetings from Stack School! Struggling with technical rounds or HR screenings? Our standalone Mock Interview program is designed to transform your theoretical knowledge into interview success.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Highlights Card */}
          <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center"><span className="mr-2">🚀</span> Program Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3 mt-0.5">1️⃣</span>
                <div>
                  <strong className="block text-slate-800">Technical Mock Interviews</strong>
                  <span className="text-sm text-slate-600">One-on-one sessions focusing on Java, Python, Data Structures, and System Design.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3 mt-0.5">2️⃣</span>
                <div>
                  <strong className="block text-slate-800">HR & Soft Skills Rounds</strong>
                  <span className="text-sm text-slate-600">Polish your communication, body language, and confidence with industry-standard HR questions.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-3 mt-0.5">3️⃣</span>
                <div>
                  <strong className="block text-slate-800">Live Coding Challenges</strong>
                  <span className="text-sm text-slate-600">Solve real-world, industry-level problems in a timed environment (LeetCode/HackerRank style).</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Details & Schedule Card */}
          <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center"><span className="mr-2">💡</span> What You Get</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start"><span className="text-emerald-500 mr-2 mt-0.5">✓</span> <span className="text-sm text-slate-700"><strong>Detailed Readiness Report:</strong> Personalized feedback on your strengths and areas of improvement.</span></li>
                <li className="flex items-start"><span className="text-emerald-500 mr-2 mt-0.5">✓</span> <span className="text-sm text-slate-700"><strong>Resume Review:</strong> Expert tips to make your CV stand out to recruiters.</span></li>
                <li className="flex items-start"><span className="text-emerald-500 mr-2 mt-0.5">✓</span> <span className="text-sm text-slate-700"><strong>Placement-Style Practice:</strong> Questions sourced from recent 2026 campus placement papers.</span></li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-auto">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center"><span className="mr-2">📅</span> Schedule & Mode</h4>
              <p className="text-sm text-slate-600 mb-1"><strong>Days:</strong> Monday to Friday (Scheduled by Appointment)</p>
              <p className="text-sm text-slate-600"><strong>Mode:</strong> Online (Live Video Session)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center mb-8">
          <TrackedEnrollButton 
            courseName="Mock Interview" 
            href={mockInterviewUrl} 
            className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:bg-orange-400 hover:-translate-y-1 transition-all duration-300 text-center text-lg"
          >
            Book Your Slot Now
          </TrackedEnrollButton>
          <Link href="/courses" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-950 border border-blue-200 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-colors text-center text-lg">
            View Full Courses
          </Link>
        </div>
        
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-start gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-lg">📩</span> <a href="mailto:stackschool7@gmail.com" className="hover:text-orange-500 transition-colors font-medium">stackschool7@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">📞</span> <a href="tel:7075775019" className="hover:text-orange-500 transition-colors font-medium">7075775019</a>
          </div>
        </div>
      </div>
    </main>
  );
}