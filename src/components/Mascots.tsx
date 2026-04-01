"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const FixedMascots = () => {
  const { scrollYProgress } = useScroll();
  const mascotOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden text-brand-white">
      {/* Left Peeking Mascot */}
      <motion.div
         style={{ opacity: mascotOpacity }}
         className="absolute -left-[30px] md:-left-[5.7%] top-[20vh] w-[230px] md:w-[350px] lg:w-[450px] h-[230px] md:h-[450px]"
      >
         <Image src="/images/character_left_peeking.png" alt="Left Mascot" fill className="object-contain object-right drop-shadow-[20px_20px_40px_rgba(0,0,0,0.8)]" />
      </motion.div>

      {/* Right Peeking Mascot */}
      <motion.div
         style={{ opacity: mascotOpacity }}
         className="absolute -right-[50px] md:-right-[5.7%] top-[50vh] w-[230px] md:w-[350px] lg:w-[450px] h-[230px] md:h-[450px]"
      >
         <Image src="/images/character_right_peeking.png" alt="Right Mascot" fill className="object-contain object-left drop-shadow-[-20px_20px_40px_rgba(0,0,0,0.8)]" />
      </motion.div>
    </div>
  );
};
