import React from 'react';
import { Mail, ArrowRight, Sparkles, Code, CheckCircle, Award, Briefcase, Cpu } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const highlights = [
    { icon: Award, label: 'Degree & Score', val: 'B.Tech CSE (7.92 CGPA)' },
    { icon: Briefcase, label: 'Core Expertise', val: 'React, Node.js & REST APIs' },
    { icon: Cpu, label: 'Specialized Role', val: 'AI Model Evaluation Analyst' },
    { icon: CheckCircle, label: 'Availability', val: 'Immediate Joiner / Remote' }
  ];

  return (
    <section id="hero" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Full-Time Entry-Level Engineering Roles
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-300">
                {personalData.name}
              </span>.
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 block mt-2">
                {personalData.role}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {personalData.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5"
              >
                Explore Projects <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm transition shadow-xs hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-indigo-500" /> Let's Connect
              </a>

              <div className="flex items-center gap-2.5 ml-1">
                <a 
                  href={personalData.github}
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub"
                  className="p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition shadow-xs hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a 
                  href={personalData.linkedin}
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-[#0077b5] transition shadow-xs hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-700 shadow-xl">
                <div className="h-72 sm:h-80 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
                  <img 
                    src="/profile.png" 
                    alt="Jitendra Kumar"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent text-white">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold flex items-center gap-1.5 text-sm">
                        <Code className="w-4 h-4 text-indigo-400" /> {personalData.name}
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <Sparkles className="w-3.5 h-3.5" /> Full Stack & AI Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Recruiter Quick Snapshot Ribbon spanning full width */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white/80 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xs flex items-center gap-3.5 hover:border-indigo-300 dark:hover:border-indigo-700 transition duration-200"
              >
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{item.label}</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white mt-0.5">{item.val}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}