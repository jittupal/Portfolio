import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorText, setErrorText] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setStatus('loading');
    setErrorText('');

    try {
      // 100% Free FormSubmit Service directed straight to personal email
      const response = await fetch(`https://formsubmit.co/ajax/${personalData.email}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Email send error:', err);
      // Fallback: Open mailto directly if request is blocked by ad-blocker
      setStatus('error');
      setErrorText('Connection error. You can click email link on the left to send directly.');
    }
  };

  return (
    <section id="contact" className="py-14">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-indigo-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-300">Direct Contact</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let's talk about opportunities.</h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Open to entry-level software development, full-stack, and AI evaluation roles. Fill out the form or reach out directly:
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <a href={`mailto:${personalData.email}`} className="flex items-center gap-3 text-slate-200 hover:text-white transition group">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 group-hover:bg-indigo-500/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  {personalData.email}
                </a>

                <a href={`tel:${personalData.phone}`} className="flex items-center gap-3 text-slate-200 hover:text-white transition group">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:bg-emerald-500/30">
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

            {/* Right Form Column */}
            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/15 space-y-4 text-xs shadow-inner">
                
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-white">Message Delivered Successfully!</h4>
                      <p className="text-xs text-emerald-200 mt-0.5">
                        Your inquiry has been sent directly to <strong className="text-white">{personalData.email}</strong>. I will get back to you shortly!
                      </p>
                      <button 
                        type="button" 
                        onClick={() => setStatus('idle')} 
                        className="mt-2 text-[11px] font-bold text-emerald-300 hover:underline"
                      >
                        Send another message →
                      </button>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-200 flex items-center gap-2 text-xs">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{errorText}</span>
                  </div>
                )}

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Your Name / Organization</label>
                  <input 
                    required 
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="Recruiter / Company" 
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 text-xs sm:text-sm disabled:opacity-50" 
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Your Email</label>
                  <input 
                    required 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="email@company.com" 
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 text-xs sm:text-sm disabled:opacity-50" 
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Message</label>
                  <textarea 
                    rows={3} 
                    required 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="Job details or interview request..." 
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 text-xs sm:text-sm disabled:opacity-50"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 font-bold text-white shadow-lg transition flex items-center justify-center gap-2 text-xs sm:text-sm disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-4 h-4 animate-spin text-white" /> Sending to Inbox...</>
                  ) : status === 'success' ? (
                    <><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Sent to Inbox!</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Inquiry to Inbox</>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 pt-1">
                  100% Free Instant Email Delivery • Sends directly to {personalData.email}
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}