"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, HelpCircle } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[var(--color-bg-base)] text-white p-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[var(--color-primary)] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[var(--color-secondary)] blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-12 md:p-20 bg-[var(--color-bg-card)] rounded-[4rem] shadow-[var(--shadow-clay)] border border-white/5 relative overflow-hidden group"
        >
          {/* Mascot sitting on 404 */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64">
             <motion.div
               animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >
                <Image src="/images/character_sit_and_play.png" alt="Lost Mascot" fill className="object-contain" />
             </motion.div>
          </div>

          <div className="mt-20 md:mt-24">
            <h1 className="text-8xl md:text-9xl font-black tracking-tighter opacity-10 mb-4 select-none italic text-brand-white">404</h1>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-brand-white">Navigator Lost.</h2>
            <p className="text-sm md:text-lg font-bold opacity-50 mb-12 max-w-md mx-auto leading-relaxed text-brand-white">
              The page you are looking for has been moved to a different parallel universe or never existed.
            </p>

            <Link href="/" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-white font-black rounded-3xl shadow-[var(--shadow-clay-primary)] hover:scale-105 transition-all text-sm md:text-base group">
              <MoveLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Base
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center gap-8 text-[10px] font-black uppercase opacity-20 tracking-[0.4em] text-brand-white">
           <div className="flex items-center gap-2 rotate-[-5deg]"><HelpCircle size={14}/><span>Status: Lost</span></div>
           <div className="flex items-center gap-2 rotate-[5deg]"><HelpCircle size={14}/><span>Area: Unmapped</span></div>
        </div>
      </div>
    </main>
  );
}
