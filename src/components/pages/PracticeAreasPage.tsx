import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { PRACTICE_AREAS } from '../../data/legalContent';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { PolkaDotTexture } from '../PolkaDotTexture';

interface PracticeAreasPageProps {
  selectedPracticeAreaId?: string;
  onNavigate?: (page: PageId, preselectedPracticeArea?: string) => void;
}

export const PracticeAreasPage: React.FC<PracticeAreasPageProps> = ({
  selectedPracticeAreaId,
}) => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(() => {
    if (selectedPracticeAreaId) {
      return { [selectedPracticeAreaId]: true };
    }
    return {};
  });

  useEffect(() => {
    if (selectedPracticeAreaId) {
      setExpandedIds((prev) => ({
        ...prev,
        [selectedPracticeAreaId]: true,
      }));

      const timer = setTimeout(() => {
        const el = document.getElementById(`practice-area-${selectedPracticeAreaId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 120);

      return () => clearTimeout(timer);
    }
  }, [selectedPracticeAreaId]);

  const toggleDetails = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const firstEight = PRACTICE_AREAS.slice(0, 8);
  const lastEight = PRACTICE_AREAS.slice(8, 16);

  return (
    <div className="w-full">
      {/* 1. UPPER SECTION: Background (#E1E1E1) */}
      <section className="relative pt-20 pb-16 bg-[#E1E1E1] text-[#111111] overflow-hidden">
        <PolkaDotTexture variant="continuous-flanks" opacity={0.20} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row: Title on Left, Intro text on Right */}
          <RevealOnScroll distancePx={24} durationMs={750}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-14 border-b border-[#ABA297] items-start">
              <div className="lg:col-span-5">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#4A4336] font-medium mb-3">
                  WHAT MR. AGARWAL HANDLES
                </p>
                <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#111111] uppercase tracking-wide font-normal">
                  Areas of Practice
                </h1>
              </div>

              <div className="lg:col-span-7 text-sm sm:text-base text-[#222222] leading-relaxed font-light lg:pt-6 text-justify">
                Ankit Agarwal, Advocate, handles the following kinds of matters before courts and fora within the jurisdiction of Tinsukia, Dibrugarh and Guwahati, including the Gauhati High Court. Each entry below describes the work in general terms.
              </div>
            </div>
          </RevealOnScroll>

          {/* Practice Areas 1 - 8 on Warm Sand */}
          <div className="divide-y divide-[#ABA297]">
            {firstEight.map((item, idx) => {
              const isExpanded = !!expandedIds[item.id];

              return (
                <RevealOnScroll key={item.id} delayMs={idx * 40} distancePx={18} durationMs={600}>
                  <div
                    id={`practice-area-${item.id}`}
                    className="py-10 scroll-mt-28"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-baseline">
                      {/* Left Column: Title */}
                      <div className="lg:col-span-5 flex items-baseline">
                        <h2
                          onClick={() => toggleDetails(item.id)}
                          className="text-left text-2xl sm:text-[28px] text-[#111111] font-normal leading-snug cursor-pointer"
                          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                        >
                          {item.title}
                        </h2>
                      </div>

                      {/* Right Column: Summary, Expandable Left-Bordered Detail Paragraph, and Toggle Link */}
                      <div className="lg:col-span-7 space-y-4">
                        <p className="text-sm sm:text-[15px] text-[#181818] leading-relaxed font-normal text-justify">
                          {item.summary}
                        </p>

                        {isExpanded && (
                          <div className="border-l-2 border-[#5C4938] pl-4 py-0.5">
                            <p className="text-xs sm:text-[14px] text-[#2B2927] leading-relaxed font-normal text-justify">
                              {item.fullDescription}
                            </p>
                          </div>
                        )}

                        <div className="pt-0.5">
                          <button
                            type="button"
                            onClick={() => toggleDetails(item.id)}
                            className="text-xs font-bold tracking-wide text-[#4A3B2C] hover:text-black transition-colors cursor-pointer"
                          >
                            {isExpanded ? 'Less details' : 'More details'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE CURVED ARCH DIVIDER: (#E1E1E1) into Deep Black (#0A0B0C) */}
      <CurvedDivider
        fillColor="#0A0B0C"
        bgColor="#E1E1E1"
        className="w-full"
        inverted={true}
      />

      {/* 3. LOWER SECTION: Deep Black Background (#0A0B0C) for Practice Areas 9 - 16 */}
      <section className="pt-8 bg-[#0A0B0C] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="divide-y divide-neutral-800">
            {lastEight.map((item, index) => {
              const isExpanded = !!expandedIds[item.id];

              return (
                <RevealOnScroll key={item.id} delayMs={index * 40} distancePx={18} durationMs={600}>
                  <div
                    id={`practice-area-${item.id}`}
                    className="py-10 scroll-mt-28"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-baseline">
                      {/* Left Column: Title */}
                      <div className="lg:col-span-5 flex items-baseline">
                        <h2
                          onClick={() => toggleDetails(item.id)}
                          className="text-left text-2xl sm:text-[28px] text-white font-normal leading-snug cursor-pointer"
                          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                        >
                          {item.title}
                        </h2>
                      </div>

                      {/* Right Column: Summary, Expandable Left-Bordered Detail Paragraph, and Toggle Link */}
                      <div className="lg:col-span-7 space-y-4">
                        <p className="text-sm sm:text-[15px] text-neutral-200 leading-relaxed font-normal text-justify">
                          {item.summary}
                        </p>

                        {isExpanded && (
                          <div className="border-l-2 border-[#E1E1E1] pl-4 py-0.5">
                            <p className="text-xs sm:text-[14px] text-neutral-300 leading-relaxed font-normal text-justify">
                              {item.fullDescription}
                            </p>
                          </div>
                        )}

                        <div className="pt-0.5">
                          <button
                            type="button"
                            onClick={() => toggleDetails(item.id)}
                            className="text-xs font-bold tracking-wide text-[#E1E1E1] hover:text-white transition-colors cursor-pointer"
                          >
                            {isExpanded ? 'Less details' : 'More details'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
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
