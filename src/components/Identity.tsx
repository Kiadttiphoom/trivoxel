"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, MapPin, Calendar, Server, Database, Terminal, Briefcase } from "lucide-react";

interface IdentityProps {
  sectionProps: any;
}

export const IdentityWorkspace = ({ sectionProps }: IdentityProps) => {
  return (
    <section className="relative z-10 py-[var(--token-space-2xl)] md:py-[var(--token-space-3xl)] px-6 lg:px-20 max-w-[1600px] mx-auto text-brand-white">
      {/* Section-based Mascot: Peeking Left */}
      <div className="absolute -left-12 top-1/4 z-0 pointer-events-none hidden lg:block opacity-100">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[200px] h-[200px] relative"
        >
          <Image 
            src="/images/character_left_peeking.png" 
            alt="" 
            fill 
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="flex flex-col gap-[var(--token-space-sm)] mb-12 md:mb-20 items-center lg:items-start">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase italic opacity-20">Identity</h2>
        <h3 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tighter mt-[-1.5rem]">Profile & Expertise</h3>
      </div>

      <motion.div 
        {...sectionProps}
        style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-[var(--token-space-md)] md:gap-[var(--token-space-lg)]"
      >
        
        {/* Profile Data Card */}
        <div className="md:col-span-4 p-8 md:p-10 bg-[var(--token-surface-card)] rounded-[3rem] shadow-[var(--token-shadow-clay)] border border-white/5 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--token-brand-primary)] opacity-5 blur-[100px] pointer-events-none"></div>
          <div>
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-white/10">
               <User className="text-[var(--token-brand-primary)]" size={28}/>
            </div>
            <h4 className="text-2xl font-black uppercase mb-6 italic tracking-tight">Core Identity</h4>
            <div className="space-y-5 font-bold text-brand-white/70 text-sm">
               <div className="flex justify-between border-b border-white/5 pb-2"><span>Nationality</span> <span className="text-white">Thai</span></div>
               <div className="flex justify-between border-b border-white/5 pb-2"><span>Born</span> <span className="text-white">Mar 29, 2000 (25y)</span></div>
               <div className="flex justify-between border-b border-white/5 pb-2"><span>Location</span> <span className="text-white">Hat Yai, TH</span></div>
               <div className="flex justify-between border-b border-white/5 pb-2"><span>Military</span> <span className="text-white">Cleared</span></div>
            </div>
          </div>
          <div className="mt-12 space-y-3">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <Calendar size={18} className="text-[var(--token-brand-primary)]"/>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Ready to start</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[var(--token-space-md)] md:gap-[var(--token-space-lg)]">
          {/* Main Highlights */}
          <div className="md:col-span-2 p-8 md:p-12 bg-gradient-to-br from-[var(--token-brand-primary)] to-[var(--primitive-emerald-700)] text-white rounded-[3rem] shadow-[var(--token-shadow-clay-primary)] flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group hover:scale-[1.01] transition-all">
            <div className="flex-1">
              <h4 className="text-2xl md:text-4xl font-black mb-4 uppercase italic">Visionary Mindset</h4>
              <div className="flex flex-wrap gap-3 mt-6">
                 <div className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/20">
                    <div className="text-[8px] font-black uppercase opacity-60 mb-1">Methodology</div>
                    <div className="font-black text-[12px]">Agile / MVC / Scalable Design</div>
                 </div>
                 <div className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/20">
                    <div className="text-[8px] font-black uppercase opacity-60 mb-1">Communication</div>
                    <div className="font-black text-[12px]">Thai & English (Proficient)</div>
                 </div>
              </div>
            </div>
            <div className="w-px h-32 bg-white/20 hidden md:block"></div>
            <div className="flex-1 text-sm md:text-base font-bold leading-relaxed opacity-90">
                <p>Driving growth through powerful Full-Stack solutions. My focus is writing clean, maintainable code that solves real-world enterprise problems with high adaptability.</p>
            </div>
          </div>

          {/* Skill Blocks */}
          <div className="p-8 bg-[var(--token-surface-card)] rounded-[3rem] shadow-[var(--token-shadow-clay)] border border-white/5 group hover:bg-[var(--token-brand-primary)]/10 transition-all duration-500">
             <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Server className="text-[var(--token-brand-primary)]" size={28}/>
             </div>
             <h4 className="font-black text-xl mb-6 uppercase italic">Back-End Core</h4>
             <div className="space-y-4">
                {[
                  { n: 'Java Servlet', l: 5 },
                  { n: 'Apache Tomcat', l: 5 },
                  { n: 'RESTful API', l: 5 }
                ].map(s => (
                  <div key={s.n} className="flex items-center justify-between group/item">
                     <span className="text-[10px] font-black uppercase opacity-60 group-hover:opacity-100">{s.n}</span>
                     <div className="flex gap-1.5">
                        {[1,2,3,4,5].map(dot => (
                          <div key={dot} className={`w-2 h-2 rounded-full ${dot <= s.l ? 'bg-[var(--token-brand-primary)] shadow-[0_0_8px_var(--token-brand-primary)]' : 'bg-white/10'}`}></div>
                        ))}
                     </div>
                  </div>
                ))}
             </div>
           </div>

          <div className="p-8 bg-[var(--token-surface-card)] rounded-[3rem] shadow-[var(--token-shadow-clay)] border border-white/5 group hover:bg-[var(--token-brand-secondary)]/10 transition-all duration-500">
             <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Database className="text-[var(--token-brand-secondary)]" size={28}/>
             </div>
             <h4 className="font-black text-xl mb-6 uppercase italic">Modern Stack</h4>
             <div className="space-y-4">
                {[
                  { n: 'Spring Boot', l: 4 },
                  { n: 'Next.js 15', l: 4 },
                  { n: 'SQL Server', l: 5 },
                  { n: 'TypeScript', l: 3 }
                ].map(s => (
                  <div key={s.n} className="flex items-center justify-between">
                     <span className="text-[10px] font-black uppercase opacity-60 group-hover:opacity-100">{s.n}</span>
                     <div className="flex gap-1.5">
                        {[1,2,3,4,5].map(dot => (
                          <div key={dot} className={`w-2 h-2 rounded-full ${dot <= s.l ? 'bg-[var(--token-brand-secondary)] shadow-[0_0_8px_var(--token-brand-secondary)]' : 'bg-white/10'}`}></div>
                        ))}
                     </div>
                  </div>
                ))}
             </div>
           </div>

          <div className="md:col-span-2 p-10 bg-[var(--token-surface-card)] rounded-[3rem] shadow-[var(--token-shadow-clay)] border border-white/5 flex flex-col md:flex-row justify-between items-center relative overflow-hidden group">
             <div className="relative z-10 w-full">
                <h4 className="text-xl md:text-2xl font-black mb-8 uppercase italic flex items-center gap-4">
                   <Terminal size={32} className="text-[var(--token-brand-secondary)]" /> 
                   Full Arsenal
                </h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {['Java EE', 'Spring Boot', 'Next.js', 'Postman', 'SQL Server', 'Git', 'VB.NET'].map(t => (
                    <span key={t} className="px-5 py-2.5 bg-white/5 rounded-2xl text-[10px] font-black shadow-sm border border-white/10 hover:border-[var(--token-brand-primary)]/30 hover:bg-white/1 transition-all cursor-default uppercase">
                      {t}
                    </span>
                  ))}
                </div>
             </div>
           </div>
        </div>
      </motion.div>
    </section>
  );
};
