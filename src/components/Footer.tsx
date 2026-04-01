"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail } from "lucide-react"
import { FaLine, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TrendingUp } from "lucide-react";

interface FooterProps {
   sectionProps: any;
}

export const ContactFooter = ({ sectionProps }: FooterProps) => {
   return (
      <footer id="contact" className="relative z-10 py-[var(--token-space-3xl)] px-4 sm:px-6 pt-10 lg:px-20 lg:pt-30 overflow-visible text-brand-white">
         <div className="max-w-[1400px] mx-auto relative z-10">

            {/* New Mascot: Sitting & Playing Laptop */}
            <div className="absolute right-[1%] md:right-[10%] -top-[110px] md:-top-[310px] z-20 pointer-events-none">
               <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[180px] h-[180px] md:w-[500px] md:h-[500px] relative drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
               >
                  {/* Inner floating animation */}
                  <motion.div
                     className="w-full h-full relative"
                  >
                     <Image
                        src="/images/character_sit_and_play.png"
                        alt=""
                        fill
                        className="object-contain"
                     />
                  </motion.div>
               </motion.div>
            </div>

            {/* Main Connect Hub Card */}
            <motion.div
               {...sectionProps}
               className="px-4 py-12 sm:p-12 md:p-20 bg-[var(--token-surface-card)] rounded-[3rem] sm:rounded-[4rem] md:rounded-[5rem] shadow-[var(--token-shadow-clay)] border border-white/5 relative overflow-hidden group"
            >
               {/* Internal Mesh Glow Background */}
               <div className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--token-brand-primary)]/20 via-transparent to-[var(--token-brand-secondary)]/20"></div>
               </div>

               <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                  {/* Left Column: Heading & Social */}
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                     <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter text-brand-white">
                        LETS BUILD THE <br />
                        <span className="text-[var(--token-brand-primary)] italic">FUTURE.</span>
                     </h2>

                     <div className="flex flex-col gap-4 mt-4 w-full">
                        <p className="text-xs md:text-sm font-bold opacity-40 uppercase tracking-[0.3em] mb-4">Connect with me on social</p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-[var(--token-space-lg)]">
                           {[
                              { i: <FaLine size={24} />, name: 'Line', c: 'hover:text-[#00B900]', url: 'https://line.me/ti/p/EDnlnAn7wm' },
                              { i: <FaFacebook size={24} />, name: 'Facebook', c: 'hover:text-[#1877F2]', url: 'https://www.facebook.com/kiadttiphoombooiad' },
                              { i: <FaGithub size={24} />, name: 'GitHub', c: 'hover:text-white', url: 'https://github.com/Kiadttiphoom' },
                              { i: <FaLinkedin size={24} />, name: 'LinkedIn', c: 'hover:text-white', url: 'https://www.linkedin.com/in/kiattiphoom-bu-aid-7aab923ba/' },
                           ].map(s => (
                              <a
                                 key={s.name}
                                 href={s.url}
                                 target="_blank"
                                 rel="noreferrer"
                                 aria-label={`Visit Kiadttiphoom's ${s.name} profile`}
                                 className={`flex flex-col items-center gap-3 group/icon cursor-pointer transition-all rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20 p-2 ${s.c}`}
                              >
                                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/icon:scale-110 group-hover/icon:bg-white/10 group-hover/icon:shadow-lg transition-all">
                                    {s.i}
                                 </div>
                                 <span className="text-[9px] font-black uppercase opacity-30 tracking-[0.2em] group-hover/icon:opacity-100 transition-opacity">{s.name}</span>
                              </a>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Right Column: High-Impact Contact Actions */}
                  <div className="flex flex-col gap-4 sm:gap-6 md:gap-[var(--token-space-lg)] w-full">
                     <motion.a
                        href="tel:063-0907500"
                        whileHover={{ y: -4, scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        aria-label="Call Kiadttiphoom at 063-0907500"
                        className="flex items-center justify-between p-5 sm:p-8 md:p-10 bg-white/5 rounded-[2rem] sm:rounded-[3rem] md:rounded-[3.5rem] border border-white/5 shadow-[var(--token-shadow-inset)] group/btn hover:bg-white/10 transition-all relative overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--token-brand-primary)]/50"
                     >
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                        <div className="flex items-center gap-4 sm:gap-6 relative z-10">
                           <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-[var(--token-brand-primary)]/10 flex items-center justify-center text-[var(--token-brand-primary)] border border-[var(--token-brand-primary)]/20 group-hover/btn:scale-110 transition-transform">
                              <Phone size={24} className="sm:size-7" />
                           </div>
                           <div className="text-left">
                              <div className="text-[9px] sm:text-[10px] font-black uppercase opacity-40 mb-1 tracking-widest">Phone Number</div>
                              <div className="text-[14px] sm:text-2xl md:text-3xl font-black text-brand-white">063-0907500</div>
                           </div>
                        </div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover/btn:opacity-100 transition-all translate-x-4 group-hover/btn:translate-x-0">
                           <TrendingUp size={20} className="sm:size-6 text-[var(--token-brand-primary)] opacity-60" />
                        </div>
                     </motion.a>

                     <motion.a
                        href="mailto:kiadttiphoom29@gmail.com"
                        whileHover={{ y: -4, scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        aria-label="Email Kiadttiphoom at kiadttiphoom29@gmail.com"
                        className="flex items-center justify-between p-5 sm:p-8 md:p-10 bg-white/5 rounded-[2rem] sm:rounded-[3rem] md:rounded-[3.5rem] border border-white/5 shadow-[var(--token-shadow-inset)] group/btn hover:bg-white/10 transition-all relative overflow-hidden text-brand-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--token-brand-secondary)]/50"
                     >
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                        <div className="flex items-center gap-4 sm:gap-6 relative z-10">
                           <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-[var(--token-brand-secondary)]/10 flex items-center justify-center text-[var(--token-brand-secondary)] border border-[var(--token-brand-secondary)]/20 group-hover/btn:scale-110 transition-transform">
                              <Mail size={24} className="sm:size-7" />
                           </div>
                           <div className="text-left">
                              <div className="text-[9px] sm:text-[10px] font-black uppercase opacity-40 mb-1 tracking-widest">Email Address</div>
                              <div className="text-[14px] sm:text-xl md:text-2xl font-black break-all text-brand-white">kiadttiphoom29@gmail.com</div>
                           </div>
                        </div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover/btn:opacity-100 transition-all translate-x-4 group-hover/btn:translate-x-0">
                           <TrendingUp size={20} className="sm:size-6 text-[var(--token-brand-secondary)] opacity-60" />
                        </div>
                     </motion.a>
                  </div>
               </div>
            </motion.div>

            {/* Footer Meta */}
            <div className="mt-20 md:mt-32 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase opacity-20 tracking-[0.5em] gap-8 text-brand-white">
               <div className="hover:opacity-100 transition-opacity">Kiadttiphoom • Portfolio 2026</div>
               <div className="flex gap-6 items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full opacity-30"></span>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"></span>
               </div>
               <div className="hover:opacity-100 transition-opacity uppercase text-center md:text-right">Architecting Digital Experiences</div>
            </div>
         </div>
      </footer>
   );
};


