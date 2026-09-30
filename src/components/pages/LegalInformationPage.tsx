import React from 'react';
import { PageId } from '../../types';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { PolkaDotTexture } from '../PolkaDotTexture';
import { ArrowRight } from 'lucide-react';

interface LegalInformationPageProps {
  onNavigate?: (page: PageId) => void;
}

export interface LegalInformationItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  targetPage?: PageId;
}

export const LEGAL_INFORMATION_ITEMS: LegalInformationItem[] = [
  {
    id: 'health-insurance-claim-rejected',
    category: 'INSURANCE',
    title: 'Health insurance claim rejected? The 5-year moratorium rule and where to complain',
    summary:
      'Why many “pre-existing disease” rejections fail after five years of cover, and the steps from the insurer to the Ombudsman and Consumer Commission.',
    targetPage: 'legal-info-insurance',
  },
  {
    id: 'motor-accident-claims-assam',
    category: 'MOTOR ACCIDENTS',
    title: 'Motor accident claims in Assam: What to do, what to file, what compensation covers',
    summary:
      'The FIR, the six-month limit, the documents, and how tribunals work out compensation.',
    targetPage: 'legal-info-motor-accidents',
  },
  {
    id: 'buying-land-in-assam',
    category: 'LAND AND PROPERTY',
    title: 'Buying land in Assam: Checking the chain of title before you pay',
    summary:
      'Jamabandi, patta and dag explained, and the checks to run before a sale deed.',
    targetPage: 'legal-info-buying-land',
  },
  {
    id: 'flight-cancelled-refund-remedies',
    category: 'CONSUMER',
    title: 'Flight cancelled or refund not received? Your remedies against the airline and the travel portal',
    summary:
      'The DGCA refund timelines, the 48-hour free cancellation window, and when to go to the Consumer Commission.',
    targetPage: 'legal-info-flight-cancelled',
  },
  {
    id: 'cheque-bounced-section-138',
    category: 'CHEQUE DISHONOUR',
    title: 'Cheque bounced: The Section 138 timeline, step by step',
    summary:
      'The 30-day notice, the 15-day payment window, the one-month filing limit, and what the accused can do.',
    targetPage: 'legal-info-cheque-bounced',
  },
  {
    id: 'old-physical-share-certificates',
    category: 'SHARES',
    title: 'Old physical share certificates: Transmission, demat and IEPF claims',
    summary:
      'How to recover shares held in paper form, and how to claim shares and dividends moved to the IEPF.',
    targetPage: 'legal-info-physical-shares',
  },
  {
    id: 'complaint-against-listed-company-sebi-scores',
    category: 'SECURITIES',
    title: 'Complaint against a listed company, broker or RTA: Using SEBI SCORES',
    summary:
      'Who to write to first, the 21-day reply period, and the two levels of review.',
  },
  {
    id: 'wrong-entries-cibil-report',
    category: 'BANKING AND CREDIT',
    title: 'Wrong entries in your CIBIL report: Getting them corrected',
    summary:
      'The 30-day dispute timeline and the ₹100-a-day compensation for delay.',
  },
  {
    id: 'supplied-goods-gem-not-paid',
    category: 'RECOVERY',
    title: 'Supplied goods on GeM but not paid? Options for small suppliers',
    summary:
      'Portal grievances, the MSMED Act’s 45-day rule and interest, and the Facilitation Council.',
  },
  {
    id: 'police-not-registering-fir-bnss',
    category: 'CRIMINAL',
    title: 'Police not registering your FIR? What the BNSS allows you to do',
    summary:
      'Zero FIR and e-FIR, the Superintendent of Police, and the Magistrate under Section 175(3).',
  },
  {
    id: 'received-divorce-petition-maintenance',
    category: 'FAMILY',
    title: 'Received a divorce petition? Maintenance and other rights of the wife',
    summary:
      'Interim maintenance under Section 24, affidavits of assets, and other remedies.',
  },
  {
    id: 'trust-or-society-structure',
    category: 'TRUSTS AND SOCIETIES',
    title: 'Trust or society? Choosing a structure for a puja committee or charitable body',
    summary:
      'How the two differ in control, membership, registration and dealing with land.',
  },
  {
    id: 'rti-in-assam-application-appeals',
    category: 'RTI',
    title: 'RTI in Assam: Filing an application and appeals',
    summary:
      'Who to apply to, the 30-day reply period, and the first and second appeals.',
  },
];

export const LegalInformationPage: React.FC<LegalInformationPageProps> = ({ onNavigate }) => {
  const firstSeven = LEGAL_INFORMATION_ITEMS.slice(0, 7);
  const lastSix = LEGAL_INFORMATION_ITEMS.slice(7);

  return (
    <div className="w-full">
      {/* 1. UPPER SECTION: Background (#E1E1E1) with mild visible Polka Dots */}
      <section className="relative pt-20 pb-16 bg-[#E1E1E1] text-[#111111] overflow-hidden">
        <PolkaDotTexture variant="continuous-flanks" opacity={0.20} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row: Title on Left, Intro text on Right */}
          <RevealOnScroll distancePx={24} durationMs={750}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-14 border-b border-[#ABA297] items-start">
              <div className="lg:col-span-5">
                <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#111111] uppercase tracking-wide font-normal leading-[1.08]">
                  Legal
                  <br />
                  Information
                </h1>
              </div>

              <div className="lg:col-span-7 text-sm sm:text-base text-[#222222] leading-relaxed font-light lg:pt-2 text-justify">
                Plain-language notes on common legal questions in Assam — what the law says, what to do first, and which papers to keep ready. These notes are general information, not legal advice on any particular case.
              </div>
            </div>
          </RevealOnScroll>

          {/* Legal Information Notes 1 - 7 on #E1E1E1 */}
          <div className="divide-y divide-[#ABA297]">
            {firstSeven.map((item, idx) => (
              <RevealOnScroll key={item.id} delayMs={idx * 40} distancePx={18} durationMs={600}>
                <div
                  id={`legal-info-${item.id}`}
                  onClick={() => item.targetPage && onNavigate?.(item.targetPage)}
                  className={`py-10 scroll-mt-28 group ${item.targetPage ? 'cursor-pointer' : ''}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-start">
                    {/* Left Column: Category Kicker */}
                    <div className="lg:col-span-2 lg:pt-2">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#5C4938] block">
                        {item.category}
                      </span>
                    </div>

                    {/* Middle Column: Serif Title */}
                    <div className="lg:col-span-5">
                      <h2
                        className="text-left text-2xl sm:text-[26px] text-[#111111] font-normal leading-snug"
                        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                      >
                        {item.title}
                      </h2>
                    </div>

                    {/* Right Column: Summary + Arrow Icon Button */}
                    <div className="lg:col-span-5 flex items-start justify-between gap-6 lg:pt-1">
                      <p className="text-sm sm:text-[14.5px] text-[#2B2927] leading-relaxed font-normal flex-1">
                        {item.summary}
                      </p>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.targetPage) onNavigate?.(item.targetPage);
                        }}
                        aria-label={`Read note: ${item.title}`}
                        className="p-1 text-[#181715] hover:text-black transition-transform duration-200 group-hover:translate-x-1 shrink-0 cursor-pointer mt-0.5"
                      >
                        <ArrowRight className="w-4 h-4 stroke-[1.6]" />
                      </button>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
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

      {/* 3. LOWER SECTION: Deep Black Background (#0A0B0C) for Legal Information Notes 8 - 13 */}
      <section className="pt-8 bg-[#0A0B0C] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="divide-y divide-neutral-800">
            {lastSix.map((item, idx) => (
              <RevealOnScroll key={item.id} delayMs={idx * 40} distancePx={18} durationMs={600}>
                <div
                  id={`legal-info-${item.id}`}
                  className="py-10 scroll-mt-28 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-start">
                    {/* Left Column: Category Kicker */}
                    <div className="lg:col-span-2 lg:pt-2">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8B0A4] block">
                        {item.category}
                      </span>
                    </div>

                    {/* Middle Column: Serif Title */}
                    <div className="lg:col-span-5">
                      <h2
                        className="text-left text-2xl sm:text-[26px] text-white font-normal leading-snug"
                        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                      >
                        {item.title}
                      </h2>
                    </div>

                    {/* Right Column: Summary + Arrow Icon Button */}
                    <div className="lg:col-span-5 flex items-start justify-between gap-6 lg:pt-1">
                      <p className="text-sm sm:text-[14.5px] text-neutral-300 leading-relaxed font-normal flex-1">
                        {item.summary}
                      </p>

                      <button
                        type="button"
                        aria-label={`Read note: ${item.title}`}
                        className="p-1 text-[#E1E1E1] hover:text-white transition-transform duration-200 group-hover:translate-x-1 shrink-0 cursor-pointer mt-0.5"
                      >
                        <ArrowRight className="w-4 h-4 stroke-[1.6]" />
                      </button>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
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
