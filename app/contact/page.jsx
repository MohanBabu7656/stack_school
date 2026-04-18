'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  // Set up the default details that will be pre-filled in the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Python Fullstack',
    message: 'Hi Stack School Team! I am interested in joining and would love to get more details about the curriculum, upcoming cohorts, and the enrollment process.'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, course, message } = formData;
    
    // Construct the formatted WhatsApp message
    const text = `*New Inquiry from Stack School Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Course Interested:* ${course}\n*Message:* ${message}`;
    
    // Open WhatsApp in a new tab routing to the specific number (assuming country code +91 for India)
    const whatsappUrl = `<https://wa.me/916281865015?text=${encodeURIComponent(text)}>`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="flex-grow px-4 py-16 md:py-24 flex justify-center relative z-10">
      <div className="max-w-3xl w-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Subtle decorative background blur inside the card */}
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="text-center mb-10 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider border mb-4 shadow-sm bg-emerald-100/80 text-emerald-700 border-emerald-200">
            <span className="mr-1.5">💬</span> Chat with us
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4 drop-shadow-sm">Contact Us</h1>
          <p className="text-lg text-slate-700 font-medium">Fill out the form below to instantly reach our team via WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" 
                className="px-5 py-3.5 rounded-xl bg-white/50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium text-slate-800 placeholder-slate-400" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" 
                className="px-5 py-3.5 rounded-xl bg-white/50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium text-slate-800 placeholder-slate-400" 
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" 
              className="px-5 py-3.5 rounded-xl bg-white/50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium text-slate-800 placeholder-slate-400" 
            />
          </div>

          <div className="flex flex-col">
            <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Interested Course</label>
            <select name="course" value={formData.course} onChange={handleChange} 
              className="px-5 py-3.5 rounded-xl bg-white/50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium text-slate-800 cursor-pointer"
            >
              <option value="Python Fullstack">Python Fullstack</option>
              <option value="Java Fullstack">Java Fullstack</option>
              <option value="Undecided / Other">Undecided / Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" 
              className="px-5 py-3.5 rounded-xl bg-white/50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-medium text-slate-800 resize-none" 
            />
          </div>

          <button type="submit" className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-[#25D366] text-white text-lg font-bold rounded-xl shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:-translate-y-0.5 transition-all duration-300 mt-8">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
           <span>Send via WhatsApp</span>
         </button>
       </form>
     </div>
   </main>
 );
}
