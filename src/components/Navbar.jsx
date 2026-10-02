import React, { useState, useEffect } from 'react';
import { Code2, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';

const navItems = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'terminal', label: 'Terminal', hiddenMobile: true },
  { id: 'contact', label: 'Contact', isCta: true }
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'skills', 'projects', 'experience', 'terminal', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 shadow-sm border-b border-slate-200 dark:border-slate-800 py-3' 
        : 'backdrop-blur-md bg-white/75 dark:bg-slate-900/75 border-b border-slate-200/60 dark:border-slate-800/60 py-4'
    }`}>
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {personalData.name}
            </span>
            <span className="hidden sm:inline-flex ml-2.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open for Roles
            </span>
          </div>
        </a>

        <nav className="flex items-center gap-1.5 sm:gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navItems.filter(item => !item.isCta).map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3.5 py-2 rounded-xl transition-all duration-200 ${
                  item.hiddenMobile ? 'hidden md:inline-block' : ''
                } ${
                  isActive 
                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-950/60' 
                    : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2 ml-1 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-200"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>

          <a
            href="#contact"
            className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-600/20 transition-all hover:shadow-indigo-600/30"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}