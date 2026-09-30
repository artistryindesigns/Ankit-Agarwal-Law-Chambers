import React, { useState } from 'react';
import { PageId } from '../../types';
import { ADVOCATE_INFO, IMAGES, PRACTICE_AREAS } from '../../data/legalContent';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { WelcomeSection } from '../WelcomeSection';
import { ContourTexture } from '../ContourTexture';
import { PolkaDotTexture } from '../PolkaDotTexture';
import { ArrowRight, CheckCircle2, FileCheck } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, practiceArea?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [quickForm, setQuickForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.firstName || !quickForm.email || !quickForm.message) return;
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FFFFFF]">
      
      {/* 1. HERO SECTION
          Hero image as darkened background overlay with bold serif heading, subtitle & CTA */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center bg-[#0B0C0D] text-white overflow-hidden">
        {/* Darkened Hero Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <img
            src={IMAGES.heroDesk}
            alt="Ankit Agarwal Law Chambers"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-105 scale-105"
          />
          {/* Deep dark gradient overlay for crystal clear typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0D]/80 via-[#0B0C0D]/60 to-[#0B0C0D]/90" />
        </div>

        {/* Hero Text Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 text-center">
          <RevealOnScroll delayMs={50} distancePx={24} durationMs={800}>
            <p className="font-sans font-normal text-xs sm:text-sm uppercase tracking-[0.22em] text-neutral-200 mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              ADVOCATE . TINSUKIA, ASSAM
            </p>
            <h1 className="font-sans font-extrabold text-[clamp(1.15rem,4vw,2.75rem)] uppercase tracking-wider text-white whitespace-nowrap leading-tight mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              KNOW WHERE YOU STAND
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delayMs={180} distancePx={20} durationMs={800}>
            <p className="font-serif-heading italic text-sm sm:text-base md:text-lg lg:text-xl text-neutral-100 font-normal tracking-wide mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-3xl mx-auto leading-relaxed sm:leading-loose">
              Every legal matter calls for a clear understanding of the law,<br />
              careful consideration of its circumstances, and a measured approach.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delayMs={300} distancePx={16} durationMs={700}>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('practice-areas')}
                className="px-8 py-3 bg-transparent hover:bg-white text-white hover:text-black border border-white text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
              >
                ABOUT THE CHAMBER
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. WELCOME SECTION (Replaces generated About Us with video reference layout) */}
      <WelcomeSection onNavigate={onNavigate} />

      {/* 3. SIGNATURE ARCHITECTURAL CURVE DIVIDER
          Curves gracefully from the light Welcome section (#f9f7f7) into Areas of Practice (#E1E1E1) without any video circle */}
      <CurvedDivider
        fillColor="#f9f7f7"
        bgColor="#E1E1E1"
        className="w-full"
        inverted={false}
      />

      {/* 4. AREAS OF PRACTICE SECTION
          Background (#E1E1E1), 16 clickable practice areas in a 2-column editorial grid */}
      <section className="relative pt-8 pb-20 sm:pb-28 bg-[#E1E1E1] text-[#111111] overflow-hidden">
        {/* Continuous polka dot layout: 20% visibility flowing down both right and left flanks */}
        <PolkaDotTexture variant="continuous-flanks" opacity={0.20} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header Row: Kicker + Title on Left, 'View practice areas' link on Right */}
          <RevealOnScroll distancePx={24} durationMs={750}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 sm:pb-10 border-b border-[#B3ABA0]">
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#4A4336] font-medium mb-3">
                  WHAT MR. AGARWAL HANDLES
                </p>
                <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-[56px] uppercase tracking-wide font-normal text-[#141414] leading-none">
                  AREAS OF PRACTICE
                </h2>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('practice-areas')}
                className="self-start sm:self-auto text-xs sm:text-sm font-semibold text-[#141414] border-b border-[#141414] pb-0.5 hover:opacity-70 transition-opacity cursor-pointer"
              >
                View practice areas
              </button>
            </div>
          </RevealOnScroll>

          {/* 16 Practice Areas Grid (2 Columns on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
            {PRACTICE_AREAS.map((area, index) => {
              const borderClass =
                index < 14
                  ? 'border-b border-[#B3ABA0]'
                  : index === 14
                  ? 'border-b md:border-b-0 border-[#B3ABA0]'
                  : '';

              return (
                <RevealOnScroll
                  key={area.id}
                  delayMs={(index % 2) * 60}
                  distancePx={16}
                  durationMs={600}
                >
                  <button
                    type="button"
                    onClick={() => onNavigate('practice-area-detail', area.id)}
                    className={`w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left group cursor-pointer transition-colors hover:bg-[#D7D7D7] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#141414] ${borderClass}`}
                  >
                    <div className="flex items-baseline min-w-0">
                      <span
                        className="text-base sm:text-lg lg:text-[19.5px] text-[#141414] font-normal leading-snug group-hover:text-black transition-colors"
                        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                      >
                        {area.title}
                      </span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#5A534A] group-hover:text-[#141414] group-hover:translate-x-1 transition-all shrink-0 stroke-[1.5]" />
                  </button>
                </RevealOnScroll>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. QUOTE BANNER SECTION (Frames 00:33 - 00:35)
          Deep black background with minimal contour line art texture overlay at 10% visibility extending all the way to both top and bottom curves */}
      <section className="relative bg-[#0A0B0C] text-white text-center overflow-hidden">
        {/* Minimal Contour Lines Texture Overlay (10% visibility) */}
        <ContourTexture opacity={0.10} />

        {/* Top Curve Divider (Transitions from #E1E1E1 into Deep Black #0A0B0C with curved polka dots) */}
        <CurvedDivider
          fillColor="#0A0B0C"
          bgColor="#E1E1E1"
          className="w-full relative z-10"
          inverted={true}
          withPolkaDots={true}
          transparentArch={true}
        />

        <div className="relative z-10 max-w-5xl mx-auto py-14 sm:py-20 px-3 sm:px-6 lg:px-8 space-y-5">
          <RevealOnScroll distancePx={24} durationMs={800}>
            <blockquote className="font-serif-heading text-[11px] min-[360px]:text-[12.5px] min-[400px]:text-[14px] sm:text-[17px] md:text-xl lg:text-2xl font-normal leading-relaxed tracking-normal sm:tracking-wide text-[#FFFFFF]">
              &ldquo;Every matter has its own circumstances. Understanding the law is only the beginning;<br />
              what follows requires careful thought, clarity and considered judgment.&rdquo;
            </blockquote>
          </RevealOnScroll>

          <RevealOnScroll delayMs={150} distancePx={16} durationMs={700}>
            <div className="pt-2">
              <p className="font-serif-heading text-xs sm:text-sm md:text-base text-neutral-300">
                Ankit Agarwal, Advocate
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Bottom Curve Divider (Black #0A0B0C into #E1E1E1) */}
        <CurvedDivider
          fillColor="#0A0B0C"
          bgColor="#E1E1E1"
          className="w-full relative z-10"
          inverted={false}
          transparentArch={true}
        />
      </section>

      {/* 8. CONTACT US SECTION
          Background (#E1E1E1) with 10% visible polka dots and normal curve into footer */}
      <section className="relative pt-8 bg-[#E1E1E1] text-[#111111] overflow-hidden">
        <PolkaDotTexture variant="continuous-flanks" opacity={0.10} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          
          <div className="text-center mb-12">
            <RevealOnScroll distancePx={20} durationMs={700}>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide font-normal text-[#111111] mb-4">
                CONTACT US
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delayMs={100} distancePx={16} durationMs={700}>
              <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed max-w-xl mx-auto font-light">
                For inquiries, legal advice, or case evaluations, feel free to reach out to us anytime. We are here to assist you with your legal needs.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delayMs={150} distancePx={28} durationMs={750}>
            {formSubmitted ? (
              <div className="p-8 bg-[#FDFDFD] border border-[#9E958A] text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#111111] text-white mx-auto flex items-center justify-center">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif-heading text-2xl text-[#111111]">
                  Message Transmitted Privileged &amp; Confidential
                </h3>
                <p className="text-xs sm:text-sm text-[#222222] max-w-md mx-auto">
                  Thank you for contacting Ankit Agarwal Law Chambers. Ankit Agarwal, Advocate, will review your matter and respond promptly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setQuickForm({ firstName: '', lastName: '', email: '', message: '' });
                  }}
                  className="px-6 py-2 bg-[#111111] hover:bg-[#2A2826] text-xs uppercase tracking-wider text-white cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="hp-first-name" className="block text-xs uppercase tracking-wider text-[#222222] mb-2">
                      First name *
                    </label>
                    <input
                      id="hp-first-name"
                      type="text"
                      required
                      value={quickForm.firstName}
                      onChange={(e) => setQuickForm({ ...quickForm, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FDFDFD] border border-[#8F867B] text-[#111111] text-sm focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="hp-last-name" className="block text-xs uppercase tracking-wider text-[#222222] mb-2">
                      Last name
                    </label>
                    <input
                      id="hp-last-name"
                      type="text"
                      value={quickForm.lastName}
                      onChange={(e) => setQuickForm({ ...quickForm, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FDFDFD] border border-[#8F867B] text-[#111111] text-sm focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hp-email" className="block text-xs uppercase tracking-wider text-[#222222] mb-2">
                    Email *
                  </label>
                  <input
                    id="hp-email"
                    type="email"
                    required
                    value={quickForm.email}
                    onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FDFDFD] border border-[#8F867B] text-[#111111] text-sm focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="hp-message" className="block text-xs uppercase tracking-wider text-[#222222] mb-2">
                    Message
                  </label>
                  <textarea
                    id="hp-message"
                    required
                    rows={4}
                    value={quickForm.message}
                    onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FDFDFD] border border-[#8F867B] text-[#111111] text-sm focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#111111] hover:bg-[#2A2826] text-white font-normal text-xs uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </RevealOnScroll>

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
