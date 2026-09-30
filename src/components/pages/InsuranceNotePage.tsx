import React from 'react';
import { PageId } from '../../types';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { PolkaDotTexture } from '../PolkaDotTexture';
import { getCurrentPublishingDate } from '../../utils/dateUtils';

interface InsuranceNotePageProps {
  onNavigate: (page: PageId) => void;
}

const PAPERS_TO_KEEP_READY = [
  'All policy schedules from the first year to now, including any ported or earlier policy',
  'The proposal form, if you have a copy',
  'Claim form, hospital bills, discharge summary, investigation reports',
  'The rejection or deduction letter',
  'Your grievance letter and every reply from the insurer',
];

export const InsuranceNotePage: React.FC<InsuranceNotePageProps> = ({ onNavigate }) => {
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
              INSURANCE
            </p>

            {/* Article Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#F5F2EB] leading-[1.16] tracking-tight mb-5"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Health insurance claim rejected? The 5-year moratorium rule and where to complain
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
            
            {/* Left Column (7 cols): Intro + The moratorium period: 60 months */}
            <div className="lg:col-span-7 space-y-8">
              <RevealOnScroll distancePx={18} durationMs={650}>
                <p className="text-[#EAE6DF] leading-[1.8] text-justify">
                  A common reason health insurers give for rejecting a claim is &ldquo;pre-existing disease&rdquo; or &ldquo;non-disclosure at the time of proposal&rdquo;. If your policy has run without a break for five years or more, that reason usually cannot be used against you. This note explains why, and what to do next.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delayMs={60} distancePx={18} durationMs={650}>
                <div className="space-y-4">
                  <h2
                    className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    The moratorium period: 60 months
                  </h2>
                  <p className="leading-[1.8] text-justify">
                    The IRDAI Master Circular on Health Insurance Business dated 29 May 2024 reduced the moratorium period from eight years to five years (60 months).
                  </p>
                  <p className="leading-[1.8] text-justify">
                    Once a policy has been renewed continuously for 60 months, the insurer cannot contest the policy or a claim on the ground of non-disclosure or misrepresentation. The only exception is fraud that the insurer can establish. Normal policy limits, sub-limits, co-payment and deductibles still apply.
                  </p>
                  <p className="leading-[1.8] text-justify">
                    The 60 months usually count from the first policy, including earlier policies that were ported or migrated without a break.
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

          {/* FULL-WIDTH SECTIONS BELOW THE SIDEBAR BOX (No empty right-hand space) */}
          <div className="space-y-10 pt-2">
            
            {/* Waiting periods: At most 3 years for pre-existing disease */}
            <RevealOnScroll delayMs={100} distancePx={18} durationMs={650}>
              <div className="space-y-4">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Waiting periods: At most 3 years for pre-existing disease
                </h2>
                <p className="leading-[1.8]">
                  A waiting period is different from the moratorium. It is the time after buying a policy during which certain illnesses are not covered.
                </p>
                <ul className="list-disc pl-5 space-y-2.5 text-[#D8D3CA]">
                  <li className="pl-1">
                    Pre-existing diseases: Waiting period capped at 36 months.
                  </li>
                  <li className="pl-1">
                    Specific illnesses (for example cataract, hernia, kidney stones): As stated in the policy, commonly 24 to 36 months.
                  </li>
                </ul>
                <p className="leading-[1.8]">
                  If the waiting period for your illness is over, a rejection for &ldquo;waiting period&rdquo; is open to challenge.
                </p>
              </div>
            </RevealOnScroll>

            {/* Step 1 */}
            <RevealOnScroll delayMs={140} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Step 1 &mdash; Complain to the insurer in writing
                </h2>
                <p className="leading-[1.8] text-justify">
                  Write to the insurer&rsquo;s grievance officer. Quote the policy number, claim number and rejection letter, and give your reasons. Keep the acknowledgement. The insurer must acknowledge the grievance and give a decision within about two weeks.
                </p>
              </div>
            </RevealOnScroll>

            {/* Step 2 */}
            <RevealOnScroll delayMs={180} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Step 2 &mdash; IRDAI Bima Bharosa portal
                </h2>
                <p className="leading-[1.8] text-justify">
                  If there is no reply, or the reply is unsatisfactory, register the complaint on the IRDAI Bima Bharosa portal. This keeps an official record and pushes the insurer to respond.
                </p>
              </div>
            </RevealOnScroll>

            {/* Step 3 */}
            <RevealOnScroll delayMs={220} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Step 3 &mdash; Insurance Ombudsman
                </h2>
                <ul className="list-disc pl-5 space-y-2.5 text-[#D8D3CA]">
                  <li className="pl-1">
                    File within one year of the insurer&rsquo;s rejection of your complaint, or of the insurer&rsquo;s failure to reply within one month.
                  </li>
                  <li className="pl-1">
                    Claims up to &#8377;50 lakh.
                  </li>
                  <li className="pl-1">
                    No fee.
                  </li>
                  <li className="pl-1">
                    Not available if the same matter is already before a court or consumer commission.
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Step 4 */}
            <RevealOnScroll delayMs={260} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Step 4 &mdash; Consumer Commission
                </h2>
                <p className="leading-[1.8] text-justify">
                  A complaint can also be filed before the District Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019, generally within two years of the cause of action. The Commission can also award compensation for harassment and litigation costs. Choose between the Ombudsman and the Commission carefully &mdash; you cannot pursue both on the same matter.
                </p>
              </div>
            </RevealOnScroll>

            {/* Advocate Sign-off Box (Full Width) */}
            <RevealOnScroll delayMs={300} distancePx={18} durationMs={650}>
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

                {/* Bottom Divider + Next Article Link */}
                <div className="mt-8 pt-5 border-t border-neutral-800 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => onNavigate('legal-info-motor-accidents')}
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
