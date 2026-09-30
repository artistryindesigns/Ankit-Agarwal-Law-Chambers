import React from 'react';
import { PageId } from '../../types';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { PolkaDotTexture } from '../PolkaDotTexture';
import { getCurrentPublishingDate } from '../../utils/dateUtils';

interface FlightCancelledNotePageProps {
  onNavigate: (page: PageId) => void;
}

const PAPERS_TO_KEEP_READY = [
  'Ticket and booking confirmation',
  'Proof of payment',
  'Cancellation or rescheduling message',
  'All emails, chats and refund requests',
];

const REFUND_TIMELINES = [
  {
    method: 'Credit card',
    timeline: 'Within 7 days, to the card',
  },
  {
    method: 'Cash',
    timeline: 'Immediately, at the airline office where bought',
  },
  {
    method: 'Through a travel agent or portal',
    timeline: 'Within 14 working days; the airline stays responsible',
  },
];

export const FlightCancelledNotePage: React.FC<FlightCancelledNotePageProps> = ({ onNavigate }) => {
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
              CONSUMER
            </p>

            {/* Article Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#F5F2EB] leading-[1.16] tracking-tight mb-5"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Flight cancelled or refund not received? Your remedies against the airline and the travel portal
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
            
            {/* Left Column (7 cols): Intro + Refund timelines under the DGCA rules */}
            <div className="lg:col-span-7 space-y-8">
              <RevealOnScroll distancePx={18} durationMs={650}>
                <p className="text-[#EAE6DF] leading-[1.8] text-justify">
                  Airlines and booking portals often delay refunds, push passengers into a &ldquo;credit shell&rdquo;, or blame each other. The rules on refunds were tightened by the Directorate General of Civil Aviation (DGCA) in 2026, and a consumer complaint remains available when the rules are not followed.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delayMs={60} distancePx={18} durationMs={650}>
                <div className="space-y-4">
                  <h2
                    className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Refund timelines under the DGCA rules
                  </h2>
                  <p className="leading-[1.8] text-justify">
                    The DGCA&rsquo;s revised Civil Aviation Requirements on refunds were issued on 24 February 2026 and apply from 26 March 2026.
                  </p>

                  {/* Refund Timelines Table */}
                  <div className="border-t border-b border-neutral-800 overflow-x-auto pt-1">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-800 bg-[#141517]">
                          <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F2EB] w-5/12">
                            How the ticket was paid
                          </th>
                          <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F2EB]">
                            Refund due
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800/80 text-xs sm:text-[14px]">
                        {REFUND_TIMELINES.map((row) => (
                          <tr key={row.method} className="align-top">
                            <td className="py-3.5 px-4 font-medium text-[#EAE6DF]">
                              {row.method}
                            </td>
                            <td className="py-3.5 px-4 text-[#D8D3CA] leading-relaxed">
                              {row.timeline}
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
            
            {/* Statutory taxes and credit shell paragraph */}
            <RevealOnScroll delayMs={80} distancePx={18} durationMs={650}>
              <p className="leading-[1.8] text-justify">
                Statutory taxes and airport fees (User Development Fee, Airport Development Fee, Passenger Service Fee) must be refunded on every fare type. You cannot be put into a credit shell by default &mdash; it is your choice.
              </p>
            </RevealOnScroll>

            {/* The 48-hour free cancellation window */}
            <RevealOnScroll delayMs={120} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  The 48-hour free cancellation window
                </h2>
                <p className="leading-[1.8] text-justify">
                  A ticket can be cancelled or changed without extra charge within 48 hours of booking. The window does not apply where a domestic flight departs within 7 days of booking, or an international flight within 15 days.
                </p>
              </div>
            </RevealOnScroll>

            {/* If the refund does not come */}
            <RevealOnScroll delayMs={160} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  If the refund does not come
                </h2>
                <ol className="list-decimal pl-5 space-y-2.5 text-[#D8D3CA]">
                  <li className="pl-1 leading-[1.75]">
                    Write to the airline and the portal, quoting the PNR, and keep the emails.
                  </li>
                  <li className="pl-1 leading-[1.75]">
                    Register a grievance on the government&rsquo;s AirSewa portal.
                  </li>
                  <li className="pl-1 leading-[1.75] text-justify">
                    File a consumer complaint before the District Consumer Commission. You can file where you live, and join both the airline and the portal. The limit is generally two years from the cause of action. The Commission can order the refund with interest, compensation and costs.
                  </li>
                </ol>
              </div>
            </RevealOnScroll>

            {/* Advocate Sign-off Box (Full Width) */}
            <RevealOnScroll delayMs={200} distancePx={18} durationMs={650}>
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
                    onClick={() => onNavigate('legal-info-buying-land')}
                    className="text-xs font-semibold tracking-wide text-[#C5A059] hover:text-[#E2C07D] transition-colors cursor-pointer"
                  >
                    &larr; Previous article
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('legal-info-cheque-bounced')}
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
