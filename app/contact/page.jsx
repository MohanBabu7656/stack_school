'use client';

import React, { useState } from 'react';
import { track } from '@vercel/analytics';

export default function ContactPage() {
  // Set up the default details that will be pre-filled in the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Python Fast-Track',
    message: 'Hi Stack School Team! I am interested in the Python Fast-Track program and would love to get more details about the curriculum, upcoming cohorts, and the enrollment process.'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'course') {
      const defaultMessages = {
        'Python Fast-Track': 'Hi Stack School Team! I am interested in the Python Fast-Track program and would love to get more details about the curriculum, upcoming cohorts, and the enrollment process.',
        'Java Fullstack': 'Hi Stack School Team! I am interested in the Java Fullstack program and would love to get more details about the curriculum, upcoming cohorts, and the enrollment process.',
        'Undecided / Other': 'Hi Stack School Team! I am interested in your programs and would love to get more details about the curriculum, upcoming cohorts, and the enrollment process.'
      };
      
      // Update both the course and the message dynamically
      setFormData({ ...formData, course: value, message: defaultMessages[value] || defaultMessages['Undecided / Other'] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, course, message } = formData;

    // Track the event before redirecting
    track('Contact Form Submitted', {
      courseInterest: course,
    });
    
    // Construct the formatted WhatsApp message
    const text = `*New Inquiry from Stack School Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Course Interested:* ${course}\n*Message:* ${message}`;
    
    // Open WhatsApp in a new tab routing to the specific number (assuming country code +91 for India)
    const whatsappUrl = `https://wa.me/916281865015?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="flex-grow px-4 md:px-8 py-16 md:py-24 flex justify-center relative z-10">
      <div className="max-w-3xl w-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-4 md:p-8 lg:p-12 relative overflow-hidden">
        {/* Subtle decorative background blur inside the card */}
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="text-center mb-10 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider border mb-4 shadow-sm bg-emerald-100/80 text-emerald-700 border-emerald-200">
            <span className="mr-1.5">💬</span> Chat with us
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-4 drop-shadow-sm">Contact Us</h1>
          <p className="text-sm md:text-base lg:text-lg text-slate-700 font-medium">Fill out the form below to instantly reach our team via WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" 
                className="w-full text-base px-5 py-3.5 rounded-xl bg-white/50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium text-slate-800 placeholder-slate-400" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" 
                className="w-full text-base px-5 py-3.5 rounded-xl bg-white/50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium text-slate-800 placeholder-slate-400" 
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" 
              className="w-full text-base px-5 py-3.5 rounded-xl bg-white/50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium text-slate-800 placeholder-slate-400" 
            />
          </div>

          <div className="flex flex-col">
            <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Interested Course</label>
            <select name="course" value={formData.course} onChange={handleChange} 
              className="w-full text-base px-5 py-3.5 rounded-xl bg-white/50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium text-slate-800 cursor-pointer"
            >
              <option value="Python Fast-Track">Python Fast-Track</option>
              <option value="Java Fullstack">Java Fullstack</option>
              <option value="Undecided / Other">Undecided / Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" 
              className="w-full text-base px-5 py-3.5 rounded-xl bg-white/50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium text-slate-800 resize-none" 
            />
          </div>

          <button type="submit" className="w-full sm:w-auto min-h-[44px] min-w-[44px] flex items-center justify-center space-x-2 px-8 py-4 bg-[#25D366] text-white text-base md:text-lg font-bold rounded-xl shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:-translate-y-0.5 transition-all duration-300 mt-8">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            <span>Send via WhatsApp</span>
          </button>
        </form>

        <div className="mt-12 flex flex-col items-center sm:items-start relative z-10">
          <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">Follow Our Journey</p>
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <a 
              href="https://www.instagram.com/stack.school?igsh=dmptMDlsZzY5cDk5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 group flex items-center gap-4 bg-white/40 hover:bg-white/60 border border-white/60 px-5 py-3 rounded-2xl transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 shrink-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <div className="min-w-0">
                <p className="text-blue-950 font-bold text-sm truncate">Instagram</p>
                <p className="text-slate-500 text-xs font-medium truncate">@stack.school</p>
              </div>
            </a>
            <a 
              href="https://chat.whatsapp.com/GtHCxt09o0pELkSas7qBAO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 group flex items-center gap-4 bg-white/40 hover:bg-white/60 border border-white/60 px-5 py-3 rounded-2xl transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 shrink-0 bg-[#25D366] rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </div>
              <div className="min-w-0">
                <p className="text-blue-950 font-bold text-sm truncate">Community</p>
                <p className="text-slate-500 text-xs font-medium truncate">WhatsApp Group</p>
              </div>
            </a>
            <a 
              href="https://whatsapp.com/channel/0029Vb7VqJz2phHOL3Qvw02i" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 group flex items-center gap-4 bg-white/40 hover:bg-white/60 border border-white/60 px-5 py-3 rounded-2xl transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 shrink-0 bg-[#128C7E] rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </div>
              <div className="min-w-0">
                <p className="text-blue-950 font-bold text-sm truncate">Job Updates</p>
                <p className="text-slate-500 text-xs font-medium truncate">WhatsApp Channel</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
