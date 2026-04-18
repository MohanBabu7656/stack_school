import React from 'react';

export const metadata = {
  title: 'Terms of Service | Stack School',
  description: 'Terms of Service for Stack School.',
};

export default function TermsPage() {
  return (
    <main className="flex-grow px-4 py-20 md:py-32 flex justify-center relative z-10">
      <div className="max-w-4xl w-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-10 md:p-16 hover:shadow-lg transition-shadow duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-8 drop-shadow-sm">Terms of Service</h1>
        
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 font-medium">
          <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-8">Last updated: {new Date().getFullYear()}</p>
          
          <p className="mb-6">These Terms of Service ("Terms") govern your access to and use of the Stack School website, educational bootcamps, and related services.</p>
          
          <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-8">By accessing or using our services, you agree to be bound by these Terms. If you do not agree to all the terms and conditions, then you may not access the website or use any services.</p>

          <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">2. Educational Content</h2>
          <p className="mb-8">All materials, including but not limited to videos, text, code snippets, and projects provided by Stack School, are for educational purposes only. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said materials for commercial purposes without our express written permission.</p>

          <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">3. User Accounts</h2>
          <p className="mb-8">When you create an account with us or request materials, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.</p>

          <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">4. Limitation of Liability</h2>
          <p className="mb-8">In no event shall Stack School, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          
          <hr className="border-white/60 my-10" />
          <p className="mt-8">If you have any questions about these Terms, please contact us at <a href="mailto:stackschool7@gmail.com" className="text-orange-500 font-bold hover:text-orange-600 transition-colors">stackschool7@gmail.com</a>.</p>
        </div>
      </div>
    </main>
  );
}