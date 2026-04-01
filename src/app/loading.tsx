"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-bg-base)]">
      <div className="relative w-32 h-32 md:w-48 md:h-48">
        {/* Animated Glow Rings */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-emerald-500 rounded-full blur-[40px]"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute inset-x-[-20%] inset-y-[-20%] bg-blue-500 rounded-full blur-[60px]"
        />
        
        {/* Central 3D Pulse Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border-t-2 border-r-2 border-emerald-500/30 border-l-2 border-l-transparent border-b-2 border-b-transparent shadow-[var(--shadow-clay)]"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
           <motion.div 
             animate={{ scale: [1, 0.9, 1] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl border border-white/10 shadow-[var(--shadow-clay-card)] flex items-center justify-center backdrop-blur-xl"
           >
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
           </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-[10px] md:text-sm font-black uppercase tracking-[0.5em] text-brand-white"
      >
        Synchronizing Reality
      </motion.div>
    </div>
  );
}
