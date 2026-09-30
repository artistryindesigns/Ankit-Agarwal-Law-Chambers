import React from 'react';
import { PageId } from '../../types';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { PolkaDotTexture } from '../PolkaDotTexture';
import { getCurrentPublishingDate } from '../../utils/dateUtils';

interface ChequeBouncedNotePageProps {
  onNavigate: (page: PageId) => void;
}

const PAPERS_TO_KEEP_READY = [
  'The original cheque and the bank’s return memo',
  'Copy of the demand notice, with postal receipt and tracking or delivery proof',
  'Proof of the debt: Bills, agreement, ledger or messages',
];

const SECTION_138_TIMELINE = [
  {
    step: 'Present the cheque to the bank',
    limit: 'Within its validity (3 months from its date)',
  },
  {
    step: 'Send a written demand notice to the drawer',
    limit: 'Within 30 days of learning of the dishonour',
  },
  {
    step: 'Drawer’s time to pay',
    limit: '15 days from receiving the notice',
  },
  {
    step: 'File the complaint in court',
    limit: 'Within 1 month after those 15 days end',
  },
];

export const ChequeBouncedNotePage: React.FC<ChequeBouncedNotePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#0A0B0C] text-[#EAE6DF]">
      {/* Main Black Section with Golden-Toned Mild Visible Polka Dots (Very Light Visibility) */}
      <section className="relative pt-14 sm:pt-20 pb-16 sm:pb-24 bg-[#0A0B0C] text-[#EAE6DF] overflow-hidden">
        {/* Golden-toned very light visibility polka dots */}
        <PolkaDotTexture
          variant="continuous-flanks"
          dotColor="#C5A059"
          opacity={0.12}
        />

        {/* Top Header Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12">
          <RevealOnScroll distancePx={18} durationMs={650}>
            {/* Back Link */}
            <button
              type="button"
              onClick={() => onNavigate('legal-information')}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C5A059] hover:text-[#E2C07D] transition-colors cursor-pointer mb-5"
            >
              <span>&larr; LEGAL INFORMATION</span>
            </button>

            {/* Category Kicker */}
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B8B0A4] mb-4">
              CHEQUE DISHONOUR
            </p>

            {/* Article Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#F5F2EB] leading-[1.16] tracking-tight mb-5"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Cheque bounced: The Section 138 timeline, step by step
            </h1>

            {/* Publish Date & Advocate Byline */}
            <p className="text-xs sm:text-[13px] text-[#9E9689] font-normal">
              {getCurrentPublishingDate()} &middot; Ankit Agarwal, Advocate, Tinsukia
            </p>
          </RevealOnScroll>
        </div>

        {/* Full-Width Subtle Divider Line */}
        <div className="relative z-10 border-t border-neutral-800/90" />

        {/* Article Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-10 text-sm sm:text-[15.5px] text-[#D8D3CA] leading-relaxed font-normal">
          
          {/* TOP SPLIT BLOCK: Left Content alongside Right "KEEP THESE PAPERS READY" Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (7 cols): Intro + The timeline table */}
            <div className="lg:col-span-7 space-y-8">
              <RevealOnScroll distancePx={18} durationMs={650}>
                <p className="text-[#EAE6DF] leading-[1.8] text-justify">
                  A dishonoured cheque given for a debt is a criminal offence under Section 138 of the Negotiable Instruments Act, 1881. The case stands or falls on strict time limits, so each step must be taken on time.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delayMs={60} distancePx={18} durationMs={650}>
                <div className="space-y-4">
                  <h2
                    className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    The timeline
                  </h2>

                  {/* Step & Time Limit Table */}
                  <div className="border-t border-b border-neutral-800 overflow-x-auto pt-1">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-800 bg-[#141517]">
                          <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F2EB] w-1/2">
                            Step
                          </th>
                          <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F2EB]">
                            Time limit
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800/80 text-xs sm:text-[14px]">
                        {SECTION_138_TIMELINE.map((row) => (
                          <tr key={row.step} className="align-top">
                            <td className="py-3.5 px-4 font-medium text-[#EAE6DF]">
                              {row.step}
                            </td>
                            <td className="py-3.5 px-4 text-[#D8D3CA] leading-relaxed">
                              {row.limit}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column (5 cols): "KEEP THESE PAPERS READY" Card */}
            <div className="lg:col-span-5">
              <RevealOnScroll delayMs={100} distancePx={20} durationMs={700}>
                <aside className="bg-[#151618] border border-[#2A2823] p-6 sm:p-8">
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C5A059] mb-4">
                    KEEP THESE PAPERS READY
                  </h2>

                  <ul className="divide-y divide-neutral-800 text-xs sm:text-[14px] text-[#D8D3CA] leading-relaxed">
                    {PAPERS_TO_KEEP_READY.map((paper, index) => (
                      <li key={index} className="py-3.5 first:pt-1 last:pb-1">
                        {paper}
                      </li>
                    ))}
                  </ul>
                </aside>
              </RevealOnScroll>
            </div>

          </div>

          {/* FULL-WIDTH SECTIONS BELOW THE SIDEBAR BOX (No empty right-hand space) */}
          <div className="space-y-10 pt-2">
            
            {/* Note below timeline table */}
            <RevealOnScroll delayMs={80} distancePx={18} durationMs={650}>
              <p className="leading-[1.8]">
                A late complaint can be admitted only if the court accepts a sufficient reason for the delay.
              </p>
            </RevealOnScroll>

            {/* Where to file */}
            <RevealOnScroll delayMs={120} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Where to file
                </h2>
                <p className="leading-[1.8]">
                  The complaint is filed in the court having jurisdiction over the bank branch where the payee presented the cheque for collection.
                </p>
              </div>
            </RevealOnScroll>

            {/* What the court can do */}
            <RevealOnScroll delayMs={160} distancePx={18} durationMs={650}>
              <div className="space-y-4">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  What the court can do
                </h2>
                <ul className="list-disc pl-5 space-y-2.5 text-[#D8D3CA]">
                  <li className="pl-1 leading-[1.75]">
                    Punishment of up to two years&rsquo; imprisonment, or a fine of up to twice the cheque amount, or both.
                  </li>
                  <li className="pl-1 leading-[1.75]">
                    Interim compensation of up to 20% of the cheque amount during the trial.
                  </li>
                  <li className="pl-1 leading-[1.75]">
                    If the accused appeals a conviction, the appeal court can require a deposit of at least 20% of the fine or compensation.
                  </li>
                </ul>
                <p className="leading-[1.8]">
                  The offence is compoundable, so the parties can settle at any stage.
                </p>
              </div>
            </RevealOnScroll>

            {/* If you are the accused */}
            <RevealOnScroll delayMs={200} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  If you are the accused
                </h2>
                <p className="leading-[1.8] text-justify">
                  Reply to the notice within time, with your version. In court, an application can be made for exemption from personal appearance, allowing an advocate to appear on your behalf on routine dates.
                </p>
              </div>
            </RevealOnScroll>

            {/* Advocate Sign-off Box (Full Width) */}
            <RevealOnScroll delayMs={240} distancePx={18} durationMs={650}>
              <div className="pt-4">
                <div className="border border-neutral-800 bg-[#121315]/90 p-6 sm:p-8 space-y-2.5">
                  <h3
                    className="text-lg sm:text-xl font-normal text-[#F5F2EB]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Ankit Agarwal, Advocate
                  </h3>
                  <p className="text-xs text-[#9E9689]">
                    Tinsukia, Assam
                  </p>
                  <p className="text-xs sm:text-[13.5px] text-[#B8B0A4] leading-relaxed pt-1">
                    This note is general information on the law as on its date and is not legal advice. Chamber details are on the{' '}
                    <button
                      type="button"
                      onClick={() => onNavigate('contact-us')}
                      className="underline underline-offset-4 text-[#EAE6DF] hover:text-[#C5A059] transition-colors cursor-pointer"
                    >
                      Contact page
                    </button>
                    .
                  </p>
                </div>

                {/* Bottom Divider + Previous/Next Article Links */}
                <div className="mt-8 pt-5 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate('legal-info-flight-cancelled')}
                    className="text-xs font-semibold tracking-wide text-[#C5A059] hover:text-[#E2C07D] transition-colors cursor-pointer"
                  >
                    &larr; Previous article
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('legal-info-physical-shares')}
                    className="text-xs font-semibold tracking-wide text-[#C5A059] hover:text-[#E2C07D] transition-colors cursor-pointer"
                  >
                    Next article &rarr;
                  </button>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* Downward Curve Divider into Footer (#181715) */}
      <CurvedDivider
        fillColor="#181715"
        bgColor="#0A0B0C"
        className="w-full relative z-10"
        downwardArch={true}
      />
    </div>
  );
};
