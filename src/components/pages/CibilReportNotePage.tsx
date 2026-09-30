import React from 'react';
import { PageId } from '../../types';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { PolkaDotTexture } from '../PolkaDotTexture';
import { getCurrentPublishingDate } from '../../utils/dateUtils';

interface CibilReportNotePageProps {
  onNavigate: (page: PageId) => void;
}

const PAPERS_TO_KEEP_READY = [
  'Your credit report, with the wrong entries marked',
  'No-dues certificates or loan closure letters',
  'Bank statements showing repayment',
  'Your dispute reference number and all replies',
];

const CIBIL_TIMELINE_ROWS = [
  {
    who: 'Bank or lender, to respond to the bureau',
    timeAllowed: '21 calendar days',
  },
  {
    who: 'Credit information company, to update',
    timeAllowed: '9 calendar days',
  },
  {
    who: 'Total',
    timeAllowed: '30 calendar days',
  },
];

export const CibilReportNotePage: React.FC<CibilReportNotePageProps> = ({ onNavigate }) => {
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
              BANKING AND CREDIT
            </p>

            {/* Article Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#F5F2EB] leading-[1.16] tracking-tight mb-5"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Wrong entries in your CIBIL report: getting them corrected
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
            
            {/* Left Column (7 cols): Intro + Step 1 + Step 2 */}
            <div className="lg:col-span-7 space-y-8">
              <RevealOnScroll distancePx={18} durationMs={650}>
                <p className="text-[#EAE6DF] leading-[1.8] text-justify">
                  A single wrong entry in a credit report can block a loan or an overdraft renewal. Common errors are accounts that do not belong to you, closed loans still shown as open, wrong overdue amounts, and entries marked &ldquo;written off&rdquo; or &ldquo;settled&rdquo; without basis. These can be disputed, and the law now fixes a time limit for correcting them.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delayMs={60} distancePx={18} durationMs={650}>
                <div className="space-y-3.5">
                  <h2
                    className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Step 1 &mdash; Get the report and mark the errors
                  </h2>
                  <p className="leading-[1.8] text-justify">
                    Download your report from the credit information company (CIBIL or another bureau). Note each wrong entry, with the lender&rsquo;s name and account number as shown.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={90} distancePx={18} durationMs={650}>
                <div className="space-y-3.5">
                  <h2
                    className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Step 2 &mdash; Raise a dispute
                  </h2>
                  <p className="leading-[1.8] text-justify">
                    Raise the dispute online with the credit information company, and also write to the bank or lender concerned. Attach proof: a no-dues certificate, loan closure letter, or bank statement.
                  </p>
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

          {/* FULL-WIDTH SECTIONS BELOW THE SIDEBAR BOX */}
          <div className="space-y-10 pt-2">
            
            {/* The 30-day limit and compensation */}
            <RevealOnScroll delayMs={100} distancePx={18} durationMs={650}>
              <div className="space-y-4">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  The 30-day limit and compensation
                </h2>
                <p className="leading-[1.8]">
                  Under the RBI circular of 26 October 2023, effective 26 April 2024:
                </p>

                {/* Who & Time Allowed Table */}
                <div className="border-t border-b border-neutral-800 overflow-x-auto pt-1">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-800 bg-[#141517]">
                        <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F2EB] w-2/3">
                          Who
                        </th>
                        <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F2EB]">
                          Time allowed
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800/80 text-xs sm:text-[14px]">
                      {CIBIL_TIMELINE_ROWS.map((row) => (
                        <tr key={row.who} className="align-top">
                          <td className="py-3.5 px-4 font-medium text-[#EAE6DF]">
                            {row.who}
                          </td>
                          <td className="py-3.5 px-4 text-[#D8D3CA] leading-relaxed">
                            {row.timeAllowed}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="leading-[1.8] text-justify pt-2">
                  If the dispute is not resolved within 30 days, you are entitled to ₹100 for every day of delay, paid by whichever of them caused it. The compensation is credited to the bank account you give when raising the dispute.
                </p>
              </div>
            </RevealOnScroll>

            {/* Step 3 — If it is still not resolved */}
            <RevealOnScroll delayMs={140} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Step 3 &mdash; If it is still not resolved
                </h2>
                <p className="leading-[1.8] text-justify">
                  Complain to the RBI Ombudsman through the RBI&rsquo;s complaint portal. A legal notice to the bank, and a consumer complaint for the loss caused, are also available.
                </p>
              </div>
            </RevealOnScroll>

            {/* Advocate Sign-off Box (Full Width) */}
            <RevealOnScroll delayMs={180} distancePx={18} durationMs={650}>
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
                    onClick={() => onNavigate('legal-info-sebi-scores')}
                    className="text-xs font-semibold tracking-wide text-[#C5A059] hover:text-[#E2C07D] transition-colors cursor-pointer"
                  >
                    &larr; Previous article
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('legal-information')}
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
