"use client";

export const BackgroundDecoration = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40 overflow-hidden text-brand-white">
      <div className="absolute top-[-5%] right-[-5%] md:top-[-10%] md:right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-primary)] blur-[100px] md:blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-5%] left-[-5%] md:bottom-[-10%] md:left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-secondary)] blur-[100px] md:blur-[150px] rounded-full"></div>
    </div>
  );
};
