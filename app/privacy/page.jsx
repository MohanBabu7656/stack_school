import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Stack School',
  description: 'Privacy Policy for Stack School.',
};

export default function PrivacyPage() {
  return (
    <main className="flex-grow px-4 py-20 md:py-32 flex justify-center relative z-10">
      <div className="max-w-4xl w-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-10 md:p-16 hover:shadow-lg transition-shadow duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-8 drop-shadow-sm">Privacy Policy</h1>
        
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 font-medium">
          <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-8">Last updated: {new Date().getFullYear()}</p>
          
          <p className="mb-6">At Stack School, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          
          <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong className="text-blue-950">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
            <li><strong className="text-blue-950">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">2. Use of Your Information</h2>
          <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Administer promotions, emails, and educational courses.</li>
            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            <li>Deliver targeted advertising, newsletters, and other information regarding promotions and the Site to you.</li>
            <li>Email you regarding your course inquiry or roadmap request.</li>
          </ul>
          
          <hr className="border-white/60 my-10" />
          <p className="mt-8">If you have questions or comments about this Privacy Policy, please contact us at <a href="mailto:stackschool7@gmail.com" className="text-orange-500 font-bold hover:text-orange-600 transition-colors">stackschool7@gmail.com</a>.</p>
        </div>
      </div>
    </main>
  );
}