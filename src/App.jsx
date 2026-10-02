import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecruiterLens from './components/RecruiterLens';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import AmbientBackground from './components/AmbientBackground';

export default function App() {
  const [activeRole, setActiveRole] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      <AmbientBackground />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative z-10">
        <Hero />
        <RecruiterLens activeRole={activeRole} setActiveRole={setActiveRole} />
        <Skills activeRole={activeRole} />
        <Projects />
        <Experience activeRole={activeRole} />
        <Education />
        <Terminal />
        <Contact />
      </main>
      <footer className="relative z-10 py-8 border-t border-slate-200/80 dark:border-slate-800/80 text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Jitendra Kumar. Built with React, Tailwind CSS & Framer Motion.
      </footer>
    </div>
  );
}