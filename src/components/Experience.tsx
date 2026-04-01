"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Target, TrendingUp, Cpu } from "lucide-react";

interface ExperienceProps {
  sectionProps: any;
}

export const ProfessionalPath = ({ sectionProps }: ExperienceProps) => {
  return (
    <section className="relative z-10 py-[var(--token-space-2xl)] md:py-[var(--token-space-3xl)] px-6 lg:px-20 max-w-[1600px] mx-auto text-brand-white">
      {/* Section-based Mascot: Peeking Right */}
      <div className="absolute -right-10 top-1/3 z-0 pointer-events-none hidden lg:block opacity-100">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[200px] h-[200px] relative"
        >
          <Image 
            src="/images/character_right_peeking.png" 
            alt="Mascot Peeking" 
            fill 
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <motion.div {...sectionProps}>
           <div className="flex items-center gap-[var(--token-space-md)] mb-10 md:mb-16">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[var(--token-surface-card)] rounded-3xl md:rounded-[2.5rem] shadow-[var(--token-shadow-clay)] flex items-center justify-center text-[var(--token-brand-primary)] border border-white/5">
                 <Briefcase size={28}/>
              </div>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase italic opacity-20">Path</h2>
              <h3 className="text-2xl md:text-5xl font-black tracking-tighter mt-[-1rem] ml-[-4rem]">Experience</h3>
           </div>
           
           <div className="space-y-12 relative pl-8 border-l border-white/5">
              <div className="absolute top-0 left-[-1.5px] w-0.5 h-full bg-gradient-to-b from-[var(--token-brand-primary)] to-transparent"></div>
              <div className="relative group">
                 <div className="absolute -left-[37px] top-6 w-3.5 h-3.5 bg-[var(--token-brand-primary)] rounded-full shadow-[0_0_15px_var(--token-brand-primary)] z-10"></div>
                 <div className="p-8 md:p-10 bg-[var(--token-surface-card)] rounded-[3rem] shadow-[var(--token-shadow-clay)] group-hover:scale-[1.01] transition-all duration-500 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--token-brand-primary)] opacity-5 blur-[60px] pointer-events-none"></div>
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4 relative z-10">
                       <div>
                          <h4 className="text-xl md:text-2xl font-black text-[var(--token-brand-primary)] uppercase italic leading-tight mb-2">Baan Suzuki Co., Ltd.</h4>
                          <p className="font-bold opacity-80 text-sm flex items-center gap-2">
                             Full Stack Developer <span className="w-1 h-1 bg-white/20 rounded-full"></span> 
                             <span className="text-[var(--token-brand-primary)] opacity-100">Java Specialist</span>
                          </p>
                       </div>
                       <span className="px-5 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase border border-white/10 text-white/50 whitespace-nowrap">2023 - Present</span>
                    </div>
                    <ul className="space-y-4 text-sm font-bold opacity-70 leading-relaxed tracking-tight relative z-10">
                       {[
                         "Architected enterprise Web Apps using Java (Servlet/Spring Boot) and Next.js 15.",
                         "Modernized Legacy systems (VB.NET) into high-performance web solutions.",
                         "Engineered robust RESTful APIs with advanced JWT security & Auth protocols.",
                         "Optimized MS SQL Server database schemas for high-concurrency environments.",
                         "Integrated critical banking & transaction services with real-time sync.",
                         "Spearheaded deployment strategies on Apache Tomcat & Cloud environments."
                       ].map((item, idx) => (
                         <li key={idx} className="flex gap-4 items-start group/li">
                           <span className="text-[var(--token-brand-primary)] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0 group-hover/li:scale-150 transition-transform shadow-[0_0_8px_var(--token-brand-primary)]"></span> 
                           <span className="group-hover/li:text-white transition-colors">{item}</span>
                         </li>
                       ))}
                       <li className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                          {['Spring Boot', 'Next.js', 'SQL Server', 'Tomcat', 'JWT', 'REST API'].map(t => (
                            <span key={t} className="px-3 py-1 bg-[var(--token-brand-primary)]/10 text-[var(--token-brand-primary)] rounded-lg text-[9px] font-black border border-[var(--token-brand-primary)]/20 uppercase">
                              {t}
                            </span>
                          ))}
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </motion.div>

        <motion.div {...sectionProps} transition={{delay: 0.3}}>
           <div className="flex items-center gap-[var(--token-space-md)] mb-10 md:mb-16">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[var(--token-surface-card)] rounded-3xl md:rounded-[2.5rem] shadow-[var(--token-shadow-clay)] flex items-center justify-center text-[var(--token-brand-secondary)] border border-white/5">
                 <Target size={28}/>
              </div>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase italic opacity-20">Goals</h2>
              <h3 className="text-2xl md:text-5xl font-black tracking-tighter mt-[-1rem] ml-[-4rem]">Impact</h3>
           </div>
           
           <div className="p-8 md:p-12 bg-[var(--token-surface-card)] rounded-[3rem] md:rounded-[4rem] shadow-[var(--token-shadow-inset)] relative overflow-hidden border border-white/5">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--token-brand-secondary)] opacity-5 blur-[100px] pointer-events-none"></div>
              
              <h4 className="text-2xl font-black mb-10 italic uppercase border-b border-white/5 pb-4 inline-block">Professional Value</h4>
              
              <div className="space-y-8 relative z-10">
                 <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 flex gap-6 items-start group hover:bg-white/10 transition-all duration-500 shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--token-brand-secondary)]/10 flex items-center justify-center shrink-0 border border-[var(--token-brand-secondary)]/20 text-[var(--token-brand-secondary)] group-hover:scale-110 group-hover:bg-[var(--token-brand-secondary)]/20 transition-all">
                       <TrendingUp size={24} />
                    </div>
                    <div>
                         <h5 className="font-black text-lg uppercase mb-2 tracking-tight text-brand-white">Full-Stack Ownership</h5>
                         <p className="text-sm font-bold opacity-60 leading-relaxed max-w-[400px]">Leading the entire lifecycle from DB architecture and API design to pixel-perfect UI implementation.</p>
                    </div>
                 </div>

                 <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 flex gap-6 items-start group hover:bg-white/10 transition-all duration-500 shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--token-brand-primary)]/10 flex items-center justify-center shrink-0 border border-[var(--token-brand-primary)]/20 text-[var(--token-brand-primary)] group-hover:scale-110 group-hover:bg-[var(--token-brand-primary)]/20 transition-all">
                       <Cpu size={24} />
                    </div>
                    <div>
                         <h5 className="font-black text-lg uppercase mb-2 tracking-tight text-brand-white">Enterprise Scalability</h5>
                         <p className="text-sm font-bold opacity-60 leading-relaxed max-w-[400px]">Strategic focus on maintainable, secure, and production-ready code that scales with business growth.</p>
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
