import React from 'react';
import { Calendar, Briefcase, Building2, ChevronRight, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ activeRole }) {
  return (
    <section id="experience" className="py-14 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 border-b border-slate-200/60 dark:border-slate-800/60 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-xs font-extrabold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">Career Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Work Experience & Technical Roles
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 max-w-md">
            Hands-on roles spanning AI model evaluation, Linux automation, and systematic application workflows.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => {
            const isMatch = activeRole === 'all' || activeRole === exp.tag || exp.tag === 'all';
            
            return (
              <div 
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 bg-white dark:bg-slate-800/90 shadow-sm ${
                  isMatch 
                    ? 'border-indigo-300 dark:border-indigo-700/80 ring-1 ring-indigo-500/20' 
                    : 'border-slate-200 dark:border-slate-700/80'
                }`}
              >
                {/* Header row: Role title, company, date */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 border-b border-slate-100 dark:border-slate-700/50 pb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {isMatch && activeRole !== 'all' && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800">
                          <CheckCircle2 className="w-3 h-3 text-indigo-600 dark:text-indigo-400" /> Match for selected lens
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      <Building2 className="w-4 h-4 text-indigo-500" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-mono font-semibold self-start md:self-auto border border-slate-200 dark:border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Key Achievements Bullet points */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 flex items-start gap-3 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}