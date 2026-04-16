'use client'
import { useEffect, useState } from 'react';

// Custom Cursor Component
const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    
    const moveCursor = (e) => {
      if (cursor && ring) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div id="cursor" className="cursor fixed w-3 h-3 bg-[#FF0022] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(255,0,34,0.6)]" />
      <div id="cursorRing" className="cursor-ring fixed w-9 h-9 border border-[rgba(255,0,34,0.5)] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-150" />
    </>
  );
};

export default function HellxPage() {
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-[#F0EDE8] font-sans selection:bg-[#FF0022] selection:text-white min-h-screen overflow-x-hidden">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[1000] flex justify-between items-center px-6 md:px-12 py-6 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-[#FF0022]/10">
        <div className="text-2xl font-bold tracking-tighter text-[#FF0022] uppercase">
          HELL<span className="text-white">X</span>
        </div>
        <div className="hidden md:flex gap-10 font-mono text-[10px] tracking-widest uppercase">
          <a href="#" className="hover:text-[#FF0022] transition-colors">Services</a>
          <a href="#" className="hover:text-[#FF0022] transition-colors">Arsenal</a>
          <a href="#" className="hover:text-[#FF0022] transition-colors">Contact</a>
        </div>
        <button className="px-5 py-2 border border-[#FF0022] text-[#FF0022] text-[10px] tracking-widest uppercase hover:bg-[#FF0022] hover:text-black transition-all">
          Initiate
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FF0022_1px,transparent_1px)] [background-size:40px_40px]" />
        
        <div className="relative z-10 text-center">
          <p className="text-[#FF0022] font-mono text-[10px] tracking-[0.5em] mb-6 uppercase">
            // Digital Destruction & Reconstruction
          </p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
            WE BUILD<br />
            <span className="text-[#FF0022]">WHAT OTHERS</span><br />
            FEAR
          </h1>
          <div className="flex flex-col md:flex-row gap-5 justify-center mt-10">
            <button className="bg-[#FF0022] text-black px-12 py-4 font-bold text-[10px] tracking-[0.3em] uppercase hover:shadow-[0_0_30px_rgba(255,0,34,0.5)] transition-all">
              Launch Project
            </button>
            <button className="border border-white/20 px-12 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-white/5 transition-all">
              View Intel
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-y border-white/5 bg-[#0D0D0D]">
        {[
          { label: 'PROJECTS DEPLOYED', val: '150+' },
          { label: 'CLIENT RETENTION', val: '98%' },
          { label: 'OPERATIVES', val: '24' },
          { label: 'COUNTRIES', val: '12' }
        ].map((stat, i) => (
          <div key={i} className="p-10 border-r border-white/5 text-center">
            <div className="text-3xl font-bold mb-2">{stat.val}</div>
            <div className="text-[#888888] text-[9px] tracking-widest uppercase font-mono">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-12 flex flex-col md:row justify-between items-center gap-6 border-t border-white/5">
        <div className="text-[#FF0022] font-bold text-xl tracking-tighter">HELLX STUDIO</div>
        <div className="text-[10px] text-[#444] font-mono tracking-widest">
          SYSTEM STATUS: OPTIMAL // © 2026
        </div>
      </footer>
    </div>
  );
}
