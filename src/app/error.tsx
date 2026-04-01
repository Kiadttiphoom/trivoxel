"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[var(--color-bg-base)] text-white p-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-red-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-orange-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-12 md:p-20 bg-[var(--color-bg-card)] rounded-[4rem] shadow-[var(--shadow-clay)] border border-white/5 relative overflow-hidden group"
        >
          {/* Mascot in trouble */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64">
             <motion.div
               animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 0.95, 1] }}
               transition={{ duration: 0.5, repeat: 3, repeatType: "mirror" }}
             >
                <Image src="/images/character_left_peeking.png" alt="Ouch Mascot" fill className="object-contain" />
             </motion.div>
          </div>

          <div className="mt-20 md:mt-24">
            <h1 className="text-xl font-black tracking-[0.5em] opacity-30 mb-8 uppercase italic text-brand-white">System Error</h1>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-brand-white">Core Instability.</h2>
            <p className="text-sm md:text-lg font-bold opacity-50 mb-12 max-w-md mx-auto leading-relaxed text-brand-white">
              Something went wrong in the digital weave. We've notified the mechanics.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => reset()}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-white font-black rounded-3xl shadow-[var(--shadow-clay-primary)] hover:scale-105 transition-all text-sm md:text-base group w-full sm:w-auto"
              >
                <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
                Retry System
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-white font-black rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm md:text-base w-full sm:w-auto"
              >
                <Home size={20} />
                Emergency Exit
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
