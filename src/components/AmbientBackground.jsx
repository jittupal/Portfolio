import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Subtle top-left glow */}
      <div 
        className="absolute -top-32 -left-32 w-[35rem] h-[35rem] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[120px]" 
      />
      
      {/* Subtle bottom-right glow */}
      <div 
        className="absolute top-1/2 -right-32 w-[35rem] h-[35rem] rounded-full bg-violet-500/10 dark:bg-violet-600/15 blur-[120px]" 
      />
    </div>
  );
}
