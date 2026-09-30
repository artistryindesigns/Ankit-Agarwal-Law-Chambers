import React from 'react';
import { PageId } from '../../types';
import { PRACTICE_AREAS, ADVOCATE_INFO } from '../../data/legalContent';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { PolkaDotTexture } from '../PolkaDotTexture';
import { ContourTexture } from '../ContourTexture';
import { ArrowLeft, ArrowRight, Scale, Gavel, BookOpen, CheckCircle2, FileText } from 'lucide-react';

interface PracticeAreaDetailPageProps {
  practiceAreaId?: string;
  onNavigate: (page: PageId, practiceArea?: string) => void;
}

export const PracticeAreaDetailPage: React.FC<PracticeAreaDetailPageProps> = ({
  practiceAreaId,
  onNavigate,
}) => {
  const currentIndex = Math.max(
    0,
    PRACTICE_AREAS.findIndex((pa) => pa.id === practiceAreaId || pa.title === practiceAreaId)
  );
  const area = PRACTICE_AREAS[currentIndex] || PRACTICE_AREAS[0];

  const prevArea =
    currentIndex > 0
      ? PRACTICE_AREAS[currentIndex - 1]
      : PRACTICE_AREAS[PRACTICE_AREAS.length - 1];
  const nextArea =
    currentIndex < PRACTICE_AREAS.length - 1
      ? PRACTICE_AREAS[currentIndex + 1]
      : PRACTICE_AREAS[0];

  return (
    <div className="w-full">
      {/* 1. UPPER HERO SECTION: Warm Sand / Stone Background (#C8C0B5) */}
      <section className="relative pt-14 sm:pt-20 pb-16 sm:pb-20 bg-[#C8C0B5] text-[#111111] overflow-hidden">
        <PolkaDotTexture variant="continuous-flanks" opacity={0.20} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back Link */}
          <RevealOnScroll distancePx={16} durationMs={600}>
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#B3AAA0]">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3D3830]">
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-black underline-offset-4 hover:underline cursor-pointer"
                >
                  Home
                </button>
                <span aria-hidden="true">/</span>
                <button
                  type="button"
                  onClick={() => onNavigate('practice-areas')}
                  className="hover:text-black underline-offset-4 hover:underline cursor-pointer"
                >
                  Practice Areas
                </button>
                <span aria-hidden="true">/</span>
                <span className="text-[#111111] font-medium">{area.title}</span>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('practice-areas')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#141414] hover:opacity-75 transition-opacity cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Practice Areas</span>
              </button>
            </div>
          </RevealOnScroll>

          {/* Main Area Header */}
          <div className="pt-10 sm:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-7 space-y-4">
              <RevealOnScroll delayMs={60} distancePx={20} durationMs={700}>
                <div className="flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#4A4336] font-medium">
                  <span>AREA OF PRACTICE {area.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>TINSUKIA, DIBRUGARH &amp; GUWAHATI</span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={120} distancePx={24} durationMs={750}>
                <h1
                  className="text-3xl sm:text-5xl lg:text-[52px] text-[#111111] font-normal leading-tight tracking-tight"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {area.title}
                </h1>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5 space-y-6 lg:pt-6">
              <RevealOnScroll delayMs={180} distancePx={20} durationMs={750}>
                <p
                  className="text-base sm:text-lg text-[#22201D] leading-relaxed font-normal"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {area.summary}
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE CURVED DIVIDER: Sand (#C8C0B5) into Deep Black (#0A0B0C) */}
      <CurvedDivider
        fillColor="#0A0B0C"
        bgColor="#C8C0B5"
        className="w-full"
        inverted={true}
      />

      {/* 3. DETAILED PRACTICE AREA CONTENT ON DEEP BLACK (#0A0B0C) */}
      <section className="relative pt-10 pb-24 bg-[#0A0B0C] text-white overflow-hidden">
        <ContourTexture opacity={0.08} strokeColor="rgba(255, 255, 255, 0.75)" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          {/* Top Overview & Key Services Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Overview & Practice Note */}
            <div className="lg:col-span-6 space-y-8">
              <RevealOnScroll distancePx={24} durationMs={750}>
                <div className="space-y-4">
                  <h2
                    className="text-2xl sm:text-3xl text-white font-normal tracking-wide"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Overview of Practice
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                    {area.fullDescription}
                  </p>
                </div>
              </RevealOnScroll>

              {area.recentMatters && (
                <RevealOnScroll delayMs={120} distancePx={20} durationMs={700}>
                  <div className="border-l-2 border-[#C8C0B5] pl-5 py-2 space-y-2">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8C0B5]">
                      <Scale className="w-4 h-4" />
                      <span>Chamber Representation &amp; Experience</span>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light italic">
                      {area.recentMatters}
                    </p>
                    <p className="text-xs text-neutral-400 pt-1">
                      — {ADVOCATE_INFO.advocateName}, Advocate
                    </p>
                  </div>
                </RevealOnScroll>
              )}
            </div>

            {/* Right: Scope of Work / Matters Handled */}
            <div className="lg:col-span-6">
              <RevealOnScroll delayMs={100} distancePx={24} durationMs={750}>
                <div className="bg-[#121315] border border-neutral-800 p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
                    <Gavel className="w-5 h-5 text-[#C8C0B5]" />
                    <h3
                      className="text-xl sm:text-2xl text-white font-normal"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      Scope of Representation
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {area.keyServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-3.5 text-sm sm:text-base text-neutral-200 font-light leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#C8C0B5] shrink-0 mt-1" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Middle 3-Column Details: Forums, Statutes, Procedural Approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-800">
            {/* Column 1: Courts & Forums */}
            {area.applicableForums && (
              <RevealOnScroll delayMs={50} distancePx={20} durationMs={700}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-[#C8C0B5]">
                    <Scale className="w-4 h-4" />
                    <h3 className="text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold">
                      Courts &amp; Forums Appeared Before
                    </h3>
                  </div>
                  <ul className="space-y-3 border-l border-neutral-800 pl-4">
                    {area.applicableForums.map((forum, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                        {forum}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            )}

            {/* Column 2: Statutory Framework */}
            {area.statutoryFramework && (
              <RevealOnScroll delayMs={150} distancePx={20} durationMs={700}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-[#C8C0B5]">
                    <BookOpen className="w-4 h-4" />
                    <h3 className="text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold">
                      Governing Laws &amp; Statutes
                    </h3>
                  </div>
                  <ul className="space-y-3 border-l border-neutral-800 pl-4">
                    {area.statutoryFramework.map((law, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                        {law}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            )}

            {/* Column 3: Procedural Steps */}
            {area.proceduralSteps && (
              <RevealOnScroll delayMs={250} distancePx={20} durationMs={700}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-[#C8C0B5]">
                    <FileText className="w-4 h-4" />
                    <h3 className="text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold">
                      Procedural Stages &amp; Preparation
                    </h3>
                  </div>
                  <ol className="space-y-3 border-l border-neutral-800 pl-4">
                    {area.proceduralSteps.map((step, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                        <span className="text-[#C8C0B5] font-medium mr-1.5">0{idx + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </RevealOnScroll>
            )}
          </div>

          {/* Previous / Next Practice Area Navigation */}
          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => onNavigate('practice-area-detail', prevArea.id)}
              className="group flex items-center gap-3 text-left p-4 border border-neutral-800 hover:border-neutral-600 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:-translate-x-1 transition-all shrink-0" />
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-neutral-500">
                  Previous Area ({prevArea.number})
                </span>
                <span
                  className="text-sm sm:text-base text-neutral-200 group-hover:text-white"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {prevArea.title}
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('practice-area-detail', nextArea.id)}
              className="group flex items-center justify-end gap-3 text-right p-4 border border-neutral-800 hover:border-neutral-600 transition-colors cursor-pointer"
            >
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-neutral-500">
                  Next Area ({nextArea.number})
                </span>
                <span
                  className="text-sm sm:text-base text-neutral-200 group-hover:text-white"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {nextArea.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
