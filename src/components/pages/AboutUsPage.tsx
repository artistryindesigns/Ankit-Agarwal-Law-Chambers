import React from 'react';
import { PageId } from '../../types';
import { IMAGES } from '../../data/legalContent';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { ContourTexture } from '../ContourTexture';

interface AboutUsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      
      {/* 1. TOP SPLIT SECTION: Vertical Rectangle Portrait on Left, "ABOUT THE CHAMBERS" Draft on Right */}
      <section className="relative bg-[#0A0B0C] text-white overflow-hidden">
        {/* Minimal Contour Curve Texture Overlay (10% visibility, extending all the way to the black curve edge) */}
        <ContourTexture opacity={0.10} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center">
            
            {/* Left: Vertical Rectangle Advocate Portrait Container (Left on Tablet & Desktop, Stacked on Mobile) */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <RevealOnScroll distancePx={28} durationMs={800} className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-full lg:max-w-[400px]">
                <div className="w-full aspect-[3/4] overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 group">
                  <img
                    src={IMAGES.advocatePortrait}
                    alt="Ankit Agarwal, Advocate"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </RevealOnScroll>
            </div>

            {/* Right: About the Chambers Draft (Right on Tablet & Desktop) */}
            <div className="md:col-span-7 space-y-6">
              <RevealOnScroll delayMs={100} distancePx={24} durationMs={750}>
                <div className="space-y-3">
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#B8B0A4] font-medium">
                    ABOUT THE CHAMBERS
                  </p>
                  <h1
                    className="text-3xl sm:text-4xl md:text-[38px] lg:text-[54px] tracking-tight font-normal text-[#F3EFEA] leading-tight"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Ankit Agarwal, Advocate
                  </h1>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={200} distancePx={20} durationMs={700}>
                <div className="space-y-5 text-sm sm:text-base text-[#D8D3CA] leading-relaxed font-normal pt-1 text-justify">
                  <p>
                    Ankit Agarwal Law Chambers is the practice of Ankit Agarwal, Advocate, at Tinsukia, Assam. A native of Tinsukia, Mr. Agarwal has practised here since [YEAR].
                  </p>
                  <p>
                    Mr. Agarwal&apos;s work covers civil, criminal, consumer, motor accident, property, documentation and investor matters. Much of it involves the practical side of local law: land records and revenue procedure in Assam, insurance claims, share and investor claims, and the courts and fora of Tinsukia, Dibrugarh and Guwahati.
                  </p>
                  <p>
                    Every matter at the Chambers is handled by Mr. Agarwal personally.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={300} distancePx={16} durationMs={650}>
                <div className="pt-5 border-t border-[#3A3733] flex items-center justify-between text-xs sm:text-sm text-[#A39E96]">
                  <span>Ankit Agarwal, Advocate</span>
                  <span className="text-right">Tinsukia, Assam</span>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>

        {/* 2. SIGNATURE ARCHITECTURAL CURVE DIVIDER: Inside the dark section so ContourTexture lines touch the exact curve edge */}
        <CurvedDivider
          fillColor="#0A0B0C"
          bgColor="#e2e2e2"
          className="w-full relative z-10"
          inverted={false}
          transparentArch={true}
        />
      </section>

      {/* 3. PROFESSIONAL DETAILS SECTION on #e2e2e2 (No Polka Dots, Curved White Boxes with Thin Black Border) */}
      <section className="relative pt-10 pb-24 bg-[#e2e2e2] text-[#181715]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-14">
            <RevealOnScroll distancePx={24} durationMs={750}>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.12em] font-normal text-[#181715]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                PROFESSIONAL DETAILS
              </h2>
            </RevealOnScroll>
          </div>

          {/* Two Curved Outer Boxes: Qualifications & Courts and Fora */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Box: Qualifications */}
            <RevealOnScroll delayMs={0} distancePx={20} durationMs={700} className="h-full">
              <div className="h-full p-8 sm:p-10 bg-white border border-black rounded-xl flex flex-col justify-center space-y-3">
                <h3
                  className="text-xl sm:text-2xl text-[#181715] font-normal"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Qualifications
                </h3>
                <p className="text-sm sm:text-base font-bold text-[#181715] tracking-wide">
                  B.Com., LL.B.
                </p>
              </div>
            </RevealOnScroll>

            {/* Right Box: Courts and Fora */}
            <RevealOnScroll delayMs={120} distancePx={20} durationMs={700} className="h-full">
              <div className="h-full p-8 sm:p-10 bg-white border border-black rounded-xl flex flex-col justify-center space-y-3">
                <h3
                  className="text-xl sm:text-2xl text-[#181715] font-normal"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Courts and Fora
                </h3>
                <p className="text-xs sm:text-sm text-[#2B2927] leading-relaxed font-normal text-justify">
                  Courts and fora within the jurisdiction of Tinsukia, Dibrugarh and Guwahati, including all district courts and the Gauhati High Court.
                </p>
              </div>
            </RevealOnScroll>

          </div>

        </div>
      </section>

      {/* 4. "How matters are handled" Section on Black (#0A0B0C) with Contour Curve Texture */}
      <section className="relative bg-[#0A0B0C] text-white overflow-hidden">
        {/* Minimal Contour Curve Texture Overlay (10% visibility) */}
        <ContourTexture opacity={0.10} />

        {/* Top Curve Divider integrated inside the dark section */}
        <CurvedDivider
          fillColor="#0A0B0C"
          bgColor="#e2e2e2"
          className="w-full relative z-10"
          inverted={true}
          transparentArch={true}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-5">
              <RevealOnScroll distancePx={24} durationMs={750}>
                <h2
                  className="text-3xl sm:text-4xl lg:text-[42px] text-[#F3EFEA] font-normal leading-[1.15] tracking-tight text-left"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  How Matters Are
                  <br />
                  Handled
                </h2>
              </RevealOnScroll>
            </div>

            {/* Right Column: Numbered Items (01, 02, 03) + Contact Page Note */}
            <div className="lg:col-span-7">
              <div className="border-t border-b border-neutral-800 divide-y divide-neutral-800">
                
                {/* 01 */}
                <RevealOnScroll delayMs={60} distancePx={18} durationMs={700}>
                  <div className="py-6 flex items-baseline gap-6 sm:gap-8">
                    <span
                      className="text-base sm:text-lg text-[#E1E1E1] font-normal tabular-nums shrink-0 w-7 text-left"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      01
                    </span>
                    <p className="text-sm sm:text-[15px] text-neutral-200 leading-relaxed font-normal text-justify flex-1">
                      <strong className="font-semibold text-white">Documents first.</strong> Every matter starts with reading the papers — policy, FIR, jamabandi, deed or notice — before any view is given.
                    </p>
                  </div>
                </RevealOnScroll>

                {/* 02 */}
                <RevealOnScroll delayMs={120} distancePx={18} durationMs={700}>
                  <div className="py-6 flex items-baseline gap-6 sm:gap-8">
                    <span
                      className="text-base sm:text-lg text-[#E1E1E1] font-normal tabular-nums shrink-0 w-7 text-left"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      02
                    </span>
                    <p className="text-sm sm:text-[15px] text-neutral-200 leading-relaxed font-normal text-justify flex-1">
                      Clear advice on the options, the time limits and the likely costs.
                    </p>
                  </div>
                </RevealOnScroll>

                {/* 03 */}
                <RevealOnScroll delayMs={180} distancePx={18} durationMs={700}>
                  <div className="py-6 flex items-baseline gap-6 sm:gap-8">
                    <span
                      className="text-base sm:text-lg text-[#E1E1E1] font-normal tabular-nums shrink-0 w-7 text-left"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      03
                    </span>
                    <p className="text-sm sm:text-[15px] text-neutral-200 leading-relaxed font-normal text-justify flex-1">
                      Regular updates on each hearing date and what happened.
                    </p>
                  </div>
                </RevealOnScroll>

              </div>

              {/* Footer line linking to Contact page */}
              <RevealOnScroll delayMs={240} distancePx={16} durationMs={650}>
                <p className="pt-6 text-xs sm:text-[13.5px] text-neutral-400 text-left">
                  Chamber address, phone and hours are on the{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('contact-us')}
                    className="font-semibold text-[#D8D3CA] hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    Contact page
                  </button>
                  .
                </p>
              </RevealOnScroll>
            </div>

          </div>
        </div>

        {/* Downward Curve Divider into Footer (#181715) */}
        <CurvedDivider
          fillColor="#181715"
          bgColor="transparent"
          className="w-full relative z-10"
          downwardArch={true}
        />
      </section>

    </div>
  );
};
