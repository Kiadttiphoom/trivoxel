"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Database, Cpu, Code, ShieldCheck, Globe, MapPin, TrendingUp } from "lucide-react";

interface ArchitectureProps {
  sectionProps: any;
}

export const SystemDesign = ({ sectionProps }: ArchitectureProps) => {
  return (
    <section id="architecture" className="relative z-10 py-[var(--token-space-2xl)] md:py-[var(--token-space-3xl)] px-6 pt-40 lg:px-20 max-w-[1600px] mx-auto text-brand-white">
      <div className="absolute left-1/2 -translate-x-1/2 -top-[70px] md:-top-[250px] pointer-events-none z-0 opacity-100">
        <motion.div 
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-[230px] h-[230px] md:w-[450px] md:h-[450px] relative drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
           <Image src="/images/character_center.png" alt="" fill className="object-contain" />
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
         <div className="flex flex-col gap-[var(--token-space-sm)]">
            <h2 className="text-xl font-black text-[var(--token-brand-primary)] uppercase tracking-[0.4em] mb-4 italic">Architectural Thinking</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">System Design</h3>
         </div>
         <p className="max-w-md font-bold opacity-40 text-sm leading-relaxed">
            Architecting systems designed not just for today, but engineered to scale and handle complex data at an Enterprise level.
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--token-space-lg)]">
        <motion.div {...sectionProps} className="p-8 md:p-10 bg-[var(--token-surface-card)] rounded-[3rem] md:rounded-[4rem] shadow-[var(--token-shadow-clay)] border border-white/5 relative overflow-hidden group hover:scale-[1.01] transition-all duration-500">
           <div className="relative z-10">
              <div className="h-32 md:h-48 mb-10 flex items-center justify-center bg-white/5 rounded-[2.5rem] border border-white/10 relative shadow-inner">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/30 text-blue-500"><Database size={20} /></div>
                    <div className="w-12 h-px border-t border-dashed border-white/20 relative">
                       <motion.div 
                         animate={{ x: [0, 48, 0] }}
                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                         className="absolute -top-[3.5px] left-0 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"
                       />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 text-emerald-500"><Cpu size={20} /></div>
                    <div className="w-12 h-px border-t border-dashed border-white/20 relative">
                       <motion.div 
                         animate={{ x: [0, 48, 0] }}
                         transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                         className="absolute -top-[3.5px] left-0 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"
                       />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/30 text-purple-500"><Code size={20} /></div>
                 </div>
                 <div className="absolute bottom-4 flex gap-4 text-[8px] font-black uppercase opacity-40">
                    <span>SQL Server</span>
                    <span className="w-1 h-1 bg-white/40 rounded-full translate-y-1"></span>
                    <span>MVC Logic</span>
                 </div>
              </div>
              <h4 className="text-xl md:text-2xl font-black mb-4 uppercase italic">Retail Core Engine</h4>
              <div className="space-y-4 mb-10">
                 <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></span> <span className="text-[10px] font-black uppercase opacity-60">MVC Architecture Design</span></div>
                 <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></span> <span className="text-[10px] font-black uppercase opacity-60">CRUD Module Development</span></div>
                 <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]"></span> <span className="text-[10px] font-black uppercase opacity-60">High Availability DB Setup</span></div>
              </div>
              <p className="text-sm font-bold opacity-40 leading-relaxed italic border-t border-white/5 pt-6">
                "Engineered robust retail backbones with a focus on data integrity and highly scalable MVC patterns."
              </p>
           </div>
        </motion.div>

        <motion.div {...sectionProps} transition={{delay: 0.2}} className="p-8 md:p-10 bg-[var(--token-surface-card)] rounded-[3rem] md:rounded-[4rem] shadow-[var(--token-shadow-clay)] border border-white/5 relative overflow-hidden group hover:scale-[1.01] transition-all duration-500">
           <div className="relative z-10 text-brand-white">
              <div className="h-32 md:h-48 mb-10 flex items-center justify-center bg-white/5 rounded-[2.5rem] border border-white/10 relative shadow-inner">
                 <div className="relative flex flex-col items-center">
                    <div className="flex items-center gap-10">
                       <ShieldCheck className="text-cyan-500" size={32} />
                       <div className="w-24 h-24 rounded-full border border-dashed border-cyan-500/30 flex items-center justify-center relative">
                          <motion.div 
                             animate={{ rotate: 360 }}
                             transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                             className="absolute inset-0 border-t-2 border-cyan-400 rounded-full opacity-60"
                          />
                          <div className="bg-[var(--token-surface-elevated)] p-4 rounded-full border border-white/10 shadow-xl ring-8 ring-white/5"><Globe size={24} className="text-cyan-500" /></div>
                       </div>
                       <MapPin className="text-pink-500" size={32}/>
                    </div>
                    <div className="mt-4 flex gap-3">
                       <div className="px-3 py-1 bg-cyan-500/10 rounded-lg text-[9px] font-black uppercase border border-cyan-500/20 text-cyan-400">JWT Security</div>
                       <div className="px-3 py-1 bg-pink-500/10 rounded-lg text-[9px] font-black uppercase border border-pink-500/20 text-pink-400">Banking API</div>
                    </div>
                 </div>
              </div>
              <h4 className="text-xl md:text-2xl font-black mb-4 uppercase italic">Secure API Gateway</h4>
              <div className="space-y-4 mb-10">
                 <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_#06b6d4]"></span> <span className="text-[10px] font-black uppercase opacity-60">RESTful API Design</span></div>
                 <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_8px_#ec4899]"></span> <span className="text-[10px] font-black uppercase opacity-60">Multi-layer Authorization</span></div>
                 <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-[0_0_8px_#eab308]"></span> <span className="text-[10px] font-black uppercase opacity-60">Real-time Hook Testing</span></div>
              </div>
              <p className="text-sm font-bold opacity-40 leading-relaxed italic border-t border-white/5 pt-6">
                "Developing secure, encrypted communication bridges for reliable enterprise-grade financial transactions."
              </p>
           </div>
        </motion.div>

        <motion.div {...sectionProps} transition={{delay: 0.4}} className="p-8 md:p-10 bg-[var(--token-surface-card)] rounded-[3rem] md:rounded-[4rem] shadow-[var(--token-shadow-clay)] border border-white/5 relative overflow-hidden group hover:scale-[1.01] transition-all duration-500">
           <div className="relative z-10 text-brand-white">
              <div className="h-32 md:h-48 mb-10 flex items-center justify-center bg-white/5 rounded-[2.5rem] border border-white/10 relative shadow-inner">
                 <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                       <div className="text-[9px] font-black uppercase text-slate-500 italic">Desktop / VB</div>
                       <TrendingUp size={18} className="text-brand-primary animate-pulse" />
                       <div className="text-[9px] font-black uppercase text-emerald-400 italic">Web Ecosystem</div>
                    </div>
                    <motion.div 
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="flex gap-3"
                    >
                       <div className="px-3 py-1 bg-orange-500/10 rounded-lg text-[9px] font-black uppercase border border-orange-500/20 text-orange-400">Migration</div>
                       <div className="px-3 py-1 bg-blue-500/10 rounded-lg text-[9px] font-black uppercase border border-blue-500/20 text-blue-400">Reports</div>
                    </motion.div>
                 </div>
              </div>
              <h4 className="text-xl md:text-2xl font-black mb-4 uppercase italic text-wrap">Enterprise Solutions</h4>
              <div className="space-y-4 mb-10">
                 <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"></span> <span className="text-[10px] font-black uppercase opacity-60">Legacy Translation Layer</span></div>
                 <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></span> <span className="text-[10px] font-black uppercase opacity-60">Modern Web Interfaces</span></div>
                 <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> <span className="text-[10px] font-black uppercase opacity-60">Automated Pipeline Ops</span></div>
              </div>
              <p className="text-sm font-bold opacity-40 leading-relaxed italic border-t border-white/5 pt-6">
                "Modernizing enterprise workflows by bridging legacy desktop power with modern web flexibility."
              </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
