"use client";

import { motion } from "framer-motion";
import { RefreshCw, TriangleAlert } from "lucide-react";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen bg-[var(--color-bg-base)] text-white font-sans flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-12 md:p-24 bg-[var(--color-bg-card)] rounded-[4rem] shadow-[var(--shadow-clay)] border border-white/5 relative overflow-hidden"
          >
            <div className="flex justify-center mb-10">
               <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.2)]">
                  <TriangleAlert size={48} className="text-red-500" />
               </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-brand-white">CRITICAL FAILURE.</h1>
            <p className="text-sm md:text-lg font-bold opacity-40 mb-12 max-w-sm mx-auto leading-relaxed text-brand-white">
              The root layout system has encountered a fatal error. Attempting a core reset.
            </p>

            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-4 px-12 py-5 bg-white/5 text-white font-black rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-base group"
            >
              <RefreshCw size={24} className="group-hover:rotate-180 transition-transform duration-1000" />
              Re-initialize Core
            </button>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
