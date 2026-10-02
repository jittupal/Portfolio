import React, { useState } from 'react';
import { Sparkles, Music, Send } from 'lucide-react';

function MuseTuneSimulator() {
  const [mood, setMood] = useState('focused');
  const tracks = {
    energetic: { title: "Synthwave Horizon", vibe: "⚡ High Energy Beats" },
    focused: { title: "Deep Lo-Fi Terminal", vibe: "🧠 Deep Flow State" },
    chill: { title: "Warm Sunset Groove", vibe: "☕ Relaxed Afternoon" }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 my-3">
      <div className="flex items-center justify-between text-xs mb-2.5">
        <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Interactive Mood Demo
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">Simulated</span>
      </div>
      <div className="flex gap-2 mb-3">
        {Object.keys(tracks).map(m => (
          <button
            key={m}
            onClick={() => setMood(m)}
            className={`text-xs px-3 py-1 rounded-lg capitalize transition-colors ${
              mood === m 
                ? 'bg-indigo-600 text-white font-medium shadow-xs' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300'
            }`}
          >
            {m}
          </button>
        ))}
      </div>
      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs shadow-xs">
        <div className="flex items-center gap-2">
          <Music className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span className="font-medium text-slate-800 dark:text-slate-200">{tracks[mood].title}</span>
        </div>
        <span className="text-emerald-600 dark:text-emerald-400 font-medium text-[11px]">{tracks[mood].vibe}</span>
      </div>
    </div>
  );
}

function ChatSimulator() {
  const [messages, setMessages] = useState([
    { sender: 'recruiter', text: 'Hi Jitendra! We are reviewing entry-level developers.' },
    { sender: 'me', text: 'Hello! I am ready to build and debug with React and Node.js.' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const send = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setMessages(prev => [...prev, { sender: 'recruiter', text: inputVal }]);
    setInputVal('');
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'me', text: 'Low-latency Socket.io response delivered!' }]);
    }, 400);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 my-3">
      <div className="flex items-center justify-between text-xs mb-2.5">
        <span className="font-semibold text-slate-700 dark:text-slate-300">Socket.io Demo Feed</span>
        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Connected
        </span>
      </div>
      <div className="space-y-2 h-24 overflow-y-auto mb-2 text-xs p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <span className={`px-2.5 py-1 rounded-lg max-w-[85%] ${m.sender === 'me' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200'}`}>
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={send} className="flex gap-2">
        <input 
          type="text" 
          placeholder="Send test message..." 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 text-xs px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <button type="submit" className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition" aria-label="Send">
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-12 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="mb-6">
          <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">Featured Builds</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Deployed Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700 transition duration-200">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">AI Vision & React</span>
                <span className="text-xs text-slate-400 font-mono">React • Tailwind • Vercel</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                MuseTune AI - Emotion Song Recommender
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Analyzes facial expressions and photo backgrounds to recommend matching music tracks using integrated vision recognition APIs.
              </p>
              <MuseTuneSimulator />
            </div>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 pt-3 hover:translate-x-1 transition-transform">
              Discuss Architecture →
            </a>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col justify-between hover:border-emerald-300 dark:hover:border-emerald-700 transition duration-200">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Full-Stack MERN</span>
                <span className="text-xs text-slate-400 font-mono">Node.js • Socket.io • Express</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Real-Time Messaging Application
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Full-stack bidirectional chat web app using Socket.io and Node.js for low-latency messaging with authenticated endpoints.
              </p>
              <ChatSimulator />
            </div>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 pt-3 hover:translate-x-1 transition-transform">
              Discuss Architecture →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}