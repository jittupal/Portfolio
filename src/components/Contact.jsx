import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-14">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-indigo-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-300">Direct Contact</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let's talk about opportunities.</h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Open to entry-level software development, full-stack, and AI evaluation roles.
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <a href={`mailto:${personalData.email}`} className="flex items-center gap-3 text-slate-200 hover:text-white transition">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  {personalData.email}
                </a>
                <a href={`tel:${personalData.phone}`} className="flex items-center gap-3 text-slate-200 hover:text-white transition">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  {personalData.phone}
                </a>
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  India (Open to Remote / Relocation)
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-white/10 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/15 space-y-4 text-xs shadow-inner">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Your Name / Organization</label>
                  <input required type="text" placeholder="Recruiter / Company" className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 text-xs sm:text-sm" />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Your Email</label>
                  <input required type="email" placeholder="email@company.com" className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 text-xs sm:text-sm" />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Message</label>
                  <textarea rows={3} required placeholder="Job details or interview request..." className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 text-xs sm:text-sm"></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-bold text-white shadow-lg transition flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  {sent ? <><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Message Sent</> : <><Send className="w-4 h-4" /> Send Inquiry</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}