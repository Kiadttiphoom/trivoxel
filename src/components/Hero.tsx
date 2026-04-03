"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypewriterText } from "./Typewriter";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 md:pt-20 px-6 lg:px-20 max-w-[1600px] mx-auto z-10 overflow-hidden text-brand-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center w-full">
        
        {/* Content Block: Heading (Order 1 on Mobile) */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 md:gap-[var(--token-space-lg)] items-center lg:items-start text-center lg:text-left order-1"
        >
          <div className="inline-flex items-center gap-[var(--token-space-sm)] px-5 py-2 bg-white/5 rounded-full border border-white/10 w-fit backdrop-blur-md shadow-sm">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 leading-none">Ready to build your digital vision</span>
          </div>
          
          <div className="relative w-full">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[1.1] md:leading-[1] tracking-tighter mb-[var(--token-space-sm)] h-auto min-h-[110px] md:min-h-[400px] w-full text-center lg:text-left">
              Full Stack Developer <br/>
              <span className="text-[var(--token-brand-primary)] opacity-60">&&</span>{' '}
              <TypewriterText texts={["Java Backend Developer", "Java Web Developer"]} />
            </h1> 
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-3/4 bg-gradient-to-b from-[var(--token-brand-primary)] to-transparent rounded-full hidden md:block opacity-30"></div>
          </div>

          {/* Buttons: Desktop Only in this block */}
          <div className="hidden lg:flex flex-wrap items-center justify-start gap-[var(--token-space-md)] mt-[var(--token-space-lg)]">
             <HeroButtons />
          </div>
        </motion.div>

        {/* Visual Block: Mascot (Order 2 on Mobile) */}
        <div className="flex flex-col items-center gap-12 lg:gap-0 order-2">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[280px] sm:h-[400px] md:h-[700px] w-full flex items-center justify-center pointer-events-none"
          >
            {/* Main Glow Background */}
            <div className="absolute w-[240px] h-[240px] md:w-[550px] md:h-[550px] bg-white opacity-5 blur-[80px] rounded-full"></div>
            
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full will-change-transform transform-gpu"
            >
              {/* Optimized Shadow Element */}
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[10%] bg-black/20 blur-[30px] rounded-full"></div>
              
              <Image 
                src="/images/character.png" 
                alt="Hero Avatar" 
                fill 
                priority 
                quality={75}
                className="object-contain" 
              />
            </motion.div>
          </motion.div>

          {/* Buttons: Mobile Only in this block (Order 3 on Mobile) */}
          <div className="lg:hidden flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
             <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for buttons to keep code DRY and maintainable
const HeroButtons = () => (
  <>
    <motion.a 
      href="#projects"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Navigate to Featured Creations"
      className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 bg-[var(--token-brand-primary)] text-white font-black rounded-3xl shadow-[var(--token-shadow-clay-primary)] text-base md:text-lg min-w-[190px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--token-brand-primary)]/50 transition-all text-center leading-none"
    >
      Explore Works
    </motion.a>
    <motion.a 
      href="#contact"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Contact Kiadttiphoom for collaboration"
      className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 bg-white/5 text-white font-black rounded-3xl backdrop-blur-xl border border-white/10 text-base md:text-lg hover:bg-white/10 min-w-[190px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20 transition-all text-center leading-none"
    >
      Let's Connect
    </motion.a>
  </>
);
