import React from 'react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills({ activeRole }) {
  return (
    <section id="skills" className="py-12 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="mb-6">
          <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">Proficiencies</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsCategories.map((cat, idx) => {
            const isMatch = activeRole === 'all' || activeRole === cat.tag;
            return (
              <div 
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 bg-white dark:bg-slate-800 shadow-sm ${
                  isMatch 
                    ? 'border-indigo-400 dark:border-indigo-600 ring-2 ring-indigo-500/20' 
                    : 'border-slate-200 dark:border-slate-700'
                }`}
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-3.5 flex items-center justify-between">
                  {cat.title}
                  {isMatch && <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                        isMatch 
                          ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800' 
                          : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}