import React from 'react';
import { PageId } from '../../types';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { PolkaDotTexture } from '../PolkaDotTexture';
import { getCurrentPublishingDate } from '../../utils/dateUtils';

interface MotorAccidentNotePageProps {
  onNavigate: (page: PageId) => void;
}

const PAPERS_TO_KEEP_READY = [
  'FIR, charge-sheet and police reports (when available)',
  'Medical records, bills, discharge summary, disability certificate',
  'Post-mortem report and death certificate (in a death case)',
  'Age proof and income proof of the injured or deceased',
  'Identity and relationship proof of the claimants',
  'Vehicle number and, if available, its registration and insurance details',
];

export const MotorAccidentNotePage: React.FC<MotorAccidentNotePageProps> = ({ onNavigate }) => {
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
              MOTOR ACCIDENTS
            </p>

            {/* Article Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#F5F2EB] leading-[1.16] tracking-tight mb-5"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Motor accident claims in Assam: What to do, what to file, what compensation covers
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
            
            {/* Left Column (7 cols): Intro + Right after the accident */}
            <div className="lg:col-span-7 space-y-8">
              <RevealOnScroll distancePx={18} durationMs={650}>
                <p className="text-[#EAE6DF] leading-[1.8] text-justify">
                  If you or a family member is injured or killed in a road accident, compensation is claimed before the Motor Accident Claims Tribunal (MACT) of the district. The claim is paid mainly by the insurer of the vehicle at fault. What you do in the first few weeks decides how strong the claim will be.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delayMs={60} distancePx={18} durationMs={650}>
                <div className="space-y-4">
                  <h2
                    className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Right after the accident
                  </h2>
                  <ul className="list-disc pl-5 space-y-3 text-[#D8D3CA]">
                    <li className="pl-1 leading-[1.75] text-justify">
                      Get the injured person to hospital. Under the Cashless Treatment Scheme, 2025, a road accident victim is entitled to cashless treatment up to &#8377;1.5 lakh for up to 7 days in designated hospitals.
                    </li>
                    <li className="pl-1 leading-[1.75] text-justify">
                      Make sure an FIR is registered at the police station of the place of accident. Note the FIR number.
                    </li>
                    <li className="pl-1 leading-[1.75] text-justify">
                      Note the vehicle number, and if possible get a photo of the vehicle and the spot.
                    </li>
                    <li className="pl-1 leading-[1.75] text-justify">
                      Keep every medical paper and bill from the first day.
                    </li>
                  </ul>
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
            
            {/* What the police must do */}
            <RevealOnScroll delayMs={100} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  What the police must do
                </h2>
                <p className="leading-[1.8] text-justify">
                  Under the Central Motor Vehicles Rules as amended in 2022, the investigating officer must inform the Claims Tribunal and the insurer by filing a First Accident Report within 48 hours. The police later send a detailed report to the Tribunal. These reports carry weight in the claim, so check that the vehicle number and the facts are recorded correctly.
                </p>
              </div>
            </RevealOnScroll>

            {/* The six-month limit */}
            <RevealOnScroll delayMs={140} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  The six-month limit
                </h2>
                <p className="leading-[1.8] text-justify">
                  Section 166(3) of the Motor Vehicles Act, 1988 (in force from 1 April 2022) says a claim must be filed within six months of the accident. Its validity is under challenge. By an interim order dated 4 November 2025 in <em className="italic text-[#EAE6DF]">Bhagirathi Dash v. Union of India</em>, the Supreme Court directed that claims should not be dismissed as time-barred under this provision while the case is pending. Even so, it is safest to file within six months.
                </p>
              </div>
            </RevealOnScroll>

            {/* Who can claim */}
            <RevealOnScroll delayMs={180} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Who can claim
                </h2>
                <ul className="list-disc pl-5 space-y-2.5 text-[#D8D3CA]">
                  <li className="pl-1">
                    The injured person.
                  </li>
                  <li className="pl-1">
                    In a death case, the legal representatives: Spouse, children, parents and other dependants.
                  </li>
                  <li className="pl-1">
                    The owner of damaged property.
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* What compensation covers */}
            <RevealOnScroll delayMs={220} distancePx={18} durationMs={650}>
              <div className="space-y-4">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  What compensation covers
                </h2>
                <p className="leading-[1.8] text-justify">
                  <em className="italic text-[#F5F2EB]">Death:</em> Loss of the income the family depended on (calculated from age, income and future prospects, using a multiplier), plus fixed amounts for loss of consortium, loss of estate and funeral expenses.
                </p>
                <p className="leading-[1.8] text-justify">
                  <em className="italic text-[#F5F2EB]">Injury:</em> Medical expenses, loss of earnings during treatment, loss of future earning capacity for permanent disability, attendant charges, and pain and suffering.
                </p>
                <p className="leading-[1.8] text-justify">
                  Proof of income matters. Salary slips, income-tax returns, or business records make a real difference to the amount.
                </p>
              </div>
            </RevealOnScroll>

            {/* Hit and run */}
            <RevealOnScroll delayMs={260} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Hit and run
                </h2>
                <p className="leading-[1.8] text-justify">
                  If the vehicle cannot be traced, the Compensation to Victims of Hit and Run Motor Accidents Scheme, 2022 provides &#8377;2 lakh for death and &#8377;50,000 for grievous hurt. The application goes to the Claims Enquiry Officer (usually the Sub-Divisional Officer) of the area.
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

                {/* Bottom Divider + Previous/Next Article Links */}
                <div className="mt-8 pt-5 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate('legal-info-insurance')}
                    className="text-xs font-semibold tracking-wide text-[#C5A059] hover:text-[#E2C07D] transition-colors cursor-pointer"
                  >
                    &larr; Previous article
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('legal-info-buying-land')}
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
