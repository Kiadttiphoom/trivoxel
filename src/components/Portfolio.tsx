"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

interface PortfolioProps {
  sectionProps: any;
}

const projects = [
  { n: 'Prakaidoaw', s: ['Next.js', 'Tailwind', 'Supabase'], c: 'from-blue-500 to-cyan-500', u: 'https://prakaidoaw-hair-nail-design-demo.vercel.app/' },
  { n: 'Ranlap', s: ['Next.js', 'Tailwind', 'Supabase'], c: 'from-purple-500 to-pink-500', u: 'https://ranlap.vercel.app/' },
  { n: 'Fin Samunphrai', s: ['Next.js', 'Tailwind'], c: 'from-orange-500 to-red-500', u: 'https://fin-samunphrai.vercel.app/' },
  { n: 'Sealand Smart Wash', s: ['Next.js', 'Tailwind'], c: 'from-emerald-500 to-teal-500', u: 'https://sealand-smart-wash.vercel.app/' },
  { n: 'Resume', s: ['Next.js', 'Tailwind'], c: 'from-emerald-500 to-teal-500', u: 'https://kiadttiphoom-ux-ui-resume.vercel.app/' }
];

export const ProjectGallery = ({ sectionProps }: PortfolioProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.offsetWidth;
      // Precision calculation for snap-start: Step = Card Width (70vw) + Gap (32px)
      const cardStep = (containerWidth * 0.7) + 32;
      const newIndex = Math.round(scrollPosition / cardStep);
      
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section id="projects" className="relative z-10 py-[var(--token-space-2xl)] md:py-[var(--token-space-3xl)] px-6 lg:px-20 max-w-[1600px] mx-auto text-brand-white">
      
      {/* Dynamic Header with Mascot Integration */}
      <div className="relative text-center mb-24 md:mb-32 pt-16">
        
        {/* Mascot: Sleeping Cat on Title */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-[120px] md:-top-[220px] z-20 pointer-events-none">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[280px] h-[240px] md:w-[480px] md:h-[400px] relative drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
          >
             <Image 
               src="/images/cat.png" 
               alt="" 
               fill 
               className="object-contain"
             />
          </motion.div>
        </div>

        {/* Text Layers */}
        <div className="relative z-10">
           <h2 className="text-7xl md:text-[12rem] font-black opacity-[0.03] uppercase select-none leading-none tracking-tighter text-brand-white">
             Portfolio
           </h2>
           <h3 className="text-4xl md:text-7xl font-black relative z-10 leading-none mt-[-40px] md:mt-[-80px] text-brand-white">
             Featured <span className="text-[var(--token-brand-primary)] italic">Creations.</span>
           </h3>
        </div>
      </div>

      {/* Portfolio Grid/Carousel Container */}
      <motion.div 
        className="relative"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-12 gap-8 md:gap-10 pb-10 scroll-pl-6"
        >
          {projects.map((proj, i) => (
            <motion.div 
               key={proj.n} 
               variants={{
                 initial: { y: 40, opacity: 0 },
                 animate: { 
                   y: 0, 
                   opacity: 1, 
                   transition: { 
                     duration: 0.8, 
                     delay: i * 0.1,
                     ease: [0.16, 1, 0.3, 1] 
                   } 
                 }
               }}
               className={`flex-shrink-0 w-[70vw] md:w-auto snap-start md:snap-align-none ${i < 2 ? 'md:col-span-6' : 'md:col-span-4'}`}
            >
              <div className="bg-[var(--token-surface-card)] rounded-[4rem] p-5 transition-all duration-500 hover:shadow-[var(--token-shadow-clay)] border border-white/5 relative overflow-hidden h-[540px] flex flex-col group/card">
                
                {/* Internal Polish: Subtle Mesh Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Project Preview Image */}
                <div className="h-[280px] rounded-[3rem] bg-[var(--token-surface-elevated)] mb-8 flex items-center justify-center relative overflow-hidden border border-white/5 shadow-inner">
                   <a 
                      href={proj.u} 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label={`View ${proj.n} project live`}
                      className="w-full h-full block relative z-10 overflow-hidden"
                   >
                     <img 
                        src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(proj.u)}?w=800`} 
                        alt={proj.n}
                        className="w-full h-full object-cover object-top opacity-90 group-hover/card:scale-110 group-hover/card:opacity-100 transition-all duration-700"
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors duration-500"></div>
                   </a>
                </div>

                {/* Project Info Section */}
                <div className="flex-1 px-4 pb-4 flex flex-col justify-between">
                   <div>
                      <div className="flex items-center justify-between mb-6">
                         <h5 className="text-2xl md:text-3xl font-black text-brand-white italic tracking-tighter leading-none group-hover/card:text-[var(--token-brand-primary)] transition-colors">{proj.n}</h5>
                         <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_#10b981]"></span>
                         </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2.5 mb-8">
                         {proj.s.map(tag => (
                            <span key={tag} className="text-[10px] font-black uppercase px-4 py-1.5 bg-black/20 rounded-xl border border-white/5 text-white/50 tracking-[0.1em] group-hover/card:border-[var(--token-brand-primary)]/20 group-hover/card:text-white transition-all">
                               {tag}
                            </span>
                         ))}
                      </div>
                   </div>

                   {/* Action Bar */}
                   <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex gap-4">
                         <div className="flex items-center gap-2 group-hover/card:gap-3 transition-all">
                            <span className="text-[9px] font-black px-4 py-2 bg-[var(--token-brand-primary)]/10 text-[var(--token-brand-primary)] rounded-full border border-[var(--token-brand-primary)]/20 uppercase tracking-widest leading-none">Live View</span>
                            <span className="text-[9px] font-black px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 uppercase italic tracking-widest leading-none">Vercel</span>
                         </div>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center bg-white/5 group-hover/card:bg-[var(--token-brand-primary)] group-hover/card:text-black transition-all">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Cue: Scroll Indicator Dots (Mobile Only) */}
        <div className="flex md:hidden justify-center gap-3 mt-4">
          {projects.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 opacity-100 bg-[var(--token-brand-primary)]' : 'w-1.5 opacity-20 bg-white'}`}
            ></div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};