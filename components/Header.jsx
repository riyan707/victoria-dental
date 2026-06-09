"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-[#F4F1FA] flex items-center transition-all ${scrolled ? "shadow-md h-[70px]" : "shadow-sm h-20"}`}>
      <div className="flex justify-between items-center px-6 lg:px-12 mx-auto w-full max-w-[1400px]">
        <div className="flex flex-col">
          <span className="font-display font-bold text-2xl leading-none text-[#1E1B2E]">Victoria Dental Centre</span>
          <span className="font-body text-[12px] text-[#432587] opacity-80 uppercase tracking-widest">Opposite Victoria Station</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:02078346161" className="hidden md:flex items-center gap-2 text-[#432587] font-bold">
            <span className="material-symbols-outlined">call</span>
            020 7834 6161
          </a>
          <button className="bg-[#5b3fa0] text-white min-h-[48px] px-8 rounded-full font-semibold btn-hover">
            Book Online
          </button>
        </div>
      </div>
    </header>
  );
}
