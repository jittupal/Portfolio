import React from 'react';
import { Target, Layers, Terminal, Sparkles, Filter } from 'lucide-react';

export default function RecruiterLens({ activeRole, setActiveRole }) {
  const roles = [
    { id: 'all', label: 'All-Rounder Profile', icon: Layers, desc: 'Show complete portfolio' },
    { id: 'frontend', label: 'Frontend & Full-Stack', icon: Sparkles, desc: 'React, Tailwind & UI' },
    { id: 'backend', label: 'Backend & Linux Dev', icon: Terminal, desc: 'Node.js, REST APIs, Bash' },
    { id: 'ai', label: 'AI Evaluation Analyst', icon: Target, desc: 'Model evaluation & quality workflows' }
  ];

  return (
    <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 my-8">
      <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700/80 shadow-xs relative overflow-hidden">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
            <Filter className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">Recruiter Quick-Match Lens</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Select your hiring requirement to spotlight relevant strengths:</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {roles.map(role => {
            const Icon = role.icon;
            const isSelected = activeRole === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`p-3.5 rounded-xl text-left border transition-all duration-150 ${
                  isSelected 
                    ? 'bg-indigo-50/90 dark:bg-indigo-950/70 border-indigo-400 dark:border-indigo-500 shadow-xs ring-2 ring-indigo-500/20' 
                    : 'bg-slate-50/70 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-indigo-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}`} />
                  <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-indigo-950 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                    {role.label}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{role.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}