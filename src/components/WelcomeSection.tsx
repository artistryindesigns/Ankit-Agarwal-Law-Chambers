import React from 'react';
import { PageId } from '../types';
import { RevealOnScroll } from './RevealOnScroll';
import { Scale } from 'lucide-react';

interface WelcomeSectionProps {
  onNavigate: (page: PageId) => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#f9f7f7] text-[#111111] overflow-hidden">
      
      {/* Background Scales of Justice Watermark on the left side (matching reference video frame 00:01) */}
      <div className="absolute -left-16 sm:-left-8 top-1/2 -translate-y-1/2 w-80 sm:w-[450px] lg:w-[540px] h-[540px] pointer-events-none opacity-[0.07] select-none text-black">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current" aria-hidden="true">
          {/* Top Beam */}
          <rect x="18" y="32" width="64" height="2" rx="1" />
          {/* Vertical Pillar */}
          <rect x="49" y="16" width="2" height="60" rx="1" />
          {/* Top Finial Ring */}
          <circle cx="50" cy="16" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
          {/* Pedestal Base */}
          <rect x="34" y="76" width="32" height="3" rx="1.5" />
          <rect x="40" y="73" width="20" height="3" rx="1" />
          {/* Left Scale Pan & Cords */}
          <line x1="24" y1="34" x2="15" y2="52" stroke="currentColor" strokeWidth="1.2" />
          <line x1="24" y1="34" x2="33" y2="52" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 12 52 Q 24 61 36 52 Z" fill="currentColor" />
          {/* Right Scale Pan & Cords */}
          <line x1="76" y1="34" x2="67" y2="52" stroke="currentColor" strokeWidth="1.2" />
          <line x1="76" y1="34" x2="85" y2="52" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 64 52 Q 76 61 88 52 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Welcome Heading, Body Paragraph, Read More link */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-8 pr-0 lg:pr-6">
            
            <RevealOnScroll distancePx={28} durationMs={750}>
              <h2
                className="text-3xl sm:text-5xl lg:text-[54px] font-normal leading-tight tracking-tight text-[#111111]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Welcome to Ankit Agarwal Law Chambers
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delayMs={120} distancePx={20} durationMs={750}>
              <p
                className="text-base sm:text-lg lg:text-[19px] text-[#2D2A26] leading-relaxed font-light text-justify"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Ankit Agarwal Law Chambers is the practice of Ankit Agarwal, Advocate, based in Tinsukia, Assam. Mr. Agarwal handles civil, criminal, consumer, motor accident, property, documentation and investor matters. Mr. Agarwal appears before courts and fora within the jurisdiction of Tinsukia, Dibrugarh and Guwahati, including the Guwahati High Court.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delayMs={240} distancePx={16} durationMs={650}>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about-us')}
                  className="group inline-flex items-center gap-2 text-base sm:text-lg text-black font-normal underline underline-offset-8 decoration-neutral-800 hover:decoration-black hover:text-neutral-700 transition-all cursor-pointer"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  <span>Read more</span>
                </button>
              </div>
            </RevealOnScroll>

          </div>

          {/* Right Column: Animated Floating Circles Cluster & Rotating Path */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <RevealOnScroll delayMs={150} distancePx={32} durationMs={850}>
              <div className="relative w-[340px] sm:w-[420px] md:w-[460px] h-[340px] sm:h-[420px] md:h-[460px] flex items-center justify-center select-none">
                
                {/* 1. Large Circular Rotating Text Path (matching reference video frame 00:02 - 00:05) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    className="w-full h-full animate-spin-slow opacity-35"
                    viewBox="0 0 500 500"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="circleTextPath"
                        d="M 250, 250 m -185, 0 a 185,185 0 1,1 370,0 a 185,185 0 1,1 -370,0"
                        fill="none"
                      />
                    </defs>
                    <text
                      className="text-[13.5px] uppercase tracking-[0.25em] fill-[#1A1916] font-normal"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      <textPath href="#circleTextPath" startOffset="0%">
                        • 8+ YEARS OF EXCELLENCE • DEDICATED ADVOCACY • TRUSTED COUNSEL • 8+ YEARS OF EXCELLENCE •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Small Decorative Scales Emblem on Orbit (as in video frame 00:05) */}
                <div className="absolute top-2 sm:top-4 right-16 sm:right-24 z-20 w-8 h-8 rounded-full bg-white/95 border border-[#443E38]/30 shadow-md flex items-center justify-center text-[#2A2621]">
                  <Scale className="w-4 h-4 stroke-[1.4]" />
                </div>

                {/* 2. Top Circle: 8+ Years of experience */}
                <div className="absolute top-4 sm:top-6 left-6 sm:left-10 z-20 animate-float-1">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#1C1B18] text-white flex flex-col items-center justify-center text-center p-4 shadow-2xl border border-neutral-800 transition-transform duration-500 hover:scale-105 cursor-default">
                    <span
                      className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      8+
                    </span>
                    <span className="text-xs sm:text-[13px] font-light text-neutral-300 tracking-wide mt-2 leading-tight">
                      Years of<br />experience
                    </span>
                  </div>
                </div>

                {/* 3. Middle-Right Circle: LANGUAGES Assamese • Hindi • English */}
                <div className="absolute top-20 sm:top-24 right-2 sm:right-4 z-10 animate-float-2">
                  <div className="w-34 h-34 sm:w-42 sm:h-42 rounded-full bg-[#2A2824] text-white flex flex-col items-center justify-center text-center p-3 sm:p-4 shadow-xl border border-neutral-700/60 transition-transform duration-500 hover:scale-105 cursor-default">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#D8D0C5] mb-2">
                      LANGUAGES
                    </span>
                    <p
                      className="text-xs sm:text-[13.5px] font-normal text-white tracking-wide leading-tight sm:leading-snug"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      Assamese<br />
                      Hindi • English
                    </p>
                  </div>
                </div>

                {/* 4. Bottom Circle: 100+ Litigated Cases */}
                <div className="absolute bottom-4 sm:bottom-6 left-16 sm:left-24 z-30 animate-float-3">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#181715] text-white flex flex-col items-center justify-center text-center p-4 shadow-2xl border border-neutral-800 transition-transform duration-500 hover:scale-105 cursor-default">
                    <span
                      className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-none"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      100+
                    </span>
                    <span className="text-xs sm:text-[13px] font-light text-neutral-300 tracking-wide mt-2 leading-tight">
                      Litigated<br />Cases
                    </span>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>

    </section>
  );
};
