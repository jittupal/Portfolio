import React, { useState } from 'react';
import { CornerDownLeft, Terminal as TerminalIcon } from 'lucide-react';
import { personalData, skillsCategories } from '../data/portfolioData';

export default function Terminal() {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState([
    { cmd: 'help', res: 'Commands: about, skills, contact, clear' }
  ]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cleanCmd = command.trim().toLowerCase();
    if (!cleanCmd) return;
    if (cleanCmd === 'clear') {
      setHistory([]);
      setCommand('');
      return;
    }
    let res = `Command not found: "${cleanCmd}". Type "help".`;
    if (cleanCmd === 'help') res = 'Commands: about, skills, contact, clear';
    if (cleanCmd === 'about') res = `${personalData.name} - B.Tech CSE (7.92 CGPA). Entry-Level Software Developer.`;
    if (cleanCmd === 'skills') res = skillsCategories.map(c => c.skills.join(', ')).join(' | ');
    if (cleanCmd === 'contact') res = `Email: ${personalData.email} | Phone: ${personalData.phone}`;

    setHistory(prev => [...prev, { cmd: command, res }]);
    setCommand('');
  };

  return (
    <section id="terminal" className="py-12 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
          <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-400 font-semibold text-[11px]">jitendra@devbox:~</span>
            </div>
            <div className="flex gap-2">
              {['about', 'skills', 'contact'].map(c => (
                <button 
                  key={c} 
                  onClick={() => setCommand(c)} 
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-indigo-300 text-[10px] transition"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 sm:p-6 space-y-2.5 max-h-60 overflow-y-auto">
            {history.map((item, i) => (
              <div key={i}>
                <div className="text-emerald-400 font-semibold">❯ {item.cmd}</div>
                <div className="text-slate-300 pl-4">{item.res}</div>
              </div>
            ))}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1 text-emerald-400">
              <span className="font-semibold">❯</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="type a command..."
                className="flex-1 bg-transparent text-slate-100 focus:outline-none"
              />
              <button type="submit" aria-label="Submit command" className="text-slate-400 hover:text-emerald-400">
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}