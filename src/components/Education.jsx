import React from 'react';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-12 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="mb-6">
          <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">Foundation</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Education & Academics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                    {edu.score}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">{edu.degree}</h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">{edu.school} ({edu.year})</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}