"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TypewriterText = ({ texts, delay = 2500 }: { texts: string[], delay?: number }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = texts[currentTextIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        timer = setTimeout(() => {}, 500);
      } else {
        timer = setTimeout(() => setCurrentText(fullText.substring(0, currentText.length - 1)), 50);
      }
    } else {
      if (currentText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), delay);
      } else {
        timer = setTimeout(() => setCurrentText(fullText.substring(0, currentText.length + 1)), 100);
      }
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, delay]);

  return (
    <>
      <span className="inline-block">{/* Empty space helper if needed, but standard text is better */}</span>
      {currentText}
      <motion.span 
        animate={{ opacity: [1, 0, 1] }} 
        transition={{ duration: 0.8, repeat: Infinity }} 
        className="inline-block w-[4px] md:w-[8px] h-[0.85em] bg-[var(--color-primary)] ml-2 align-baseline translate-y-[2px]"
      />
    </>
  );
};
