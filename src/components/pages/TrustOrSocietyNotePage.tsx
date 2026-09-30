import React from 'react';
import { PageId } from '../../types';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { PolkaDotTexture } from '../PolkaDotTexture';
import { getCurrentPublishingDate } from '../../utils/dateUtils';

interface TrustOrSocietyNotePageProps {
  onNavigate: (page: PageId) => void;
}

const PAPERS_TO_KEEP_READY = [
  'Land documents: jamabandi, deed and map',
  'Identity and address proof of every settlor, trustee or member',
  'Draft purpose and rules for the body',
];

const COMPARISON_ROWS = [
  {
    feature: 'Formed by',
    trust: 'A settlor dedicating property by a trust deed',
    society: 'A group of members signing a memorandum',
  },
  {
    feature: 'Controlled by',
    trust: 'Trustees named in the deed, with succession rules',
    society: 'An elected managing committee',
  },
  {
    feature: 'Membership',
    trust: 'Closed; no general membership',
    society: 'Open to members as per bye-laws',
  },
  {
    feature: 'Registration',
    trust: 'Deed registered with the Sub-Registrar',
    society: 'Registered with the Registrar of Societies',
  },
  {
    feature: 'Ongoing formalities',
    trust: 'Few',
    society: 'Annual meetings, returns, periodic renewal in Assam',
  },
  {
    feature: 'Best suited for',
    trust: 'Dedicating land for a fixed purpose, with control kept close',
    society: 'Membership bodies with elected office-bearers',
  },
];

export const TrustOrSocietyNotePage: React.FC<TrustOrSocietyNotePageProps> = ({ onNavigate }) => {
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
              TRUSTS AND SOCIETIES
            </p>

            {/* Article Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#F5F2EB] leading-[1.16] tracking-tight mb-5"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Trust or society? Choosing a structure for a puja committee or charitable body
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
            
            {/* Left Column (7 cols): Intro + How they differ */}
            <div className="lg:col-span-7 space-y-8">
              <RevealOnScroll distancePx={18} durationMs={650}>
                <p className="text-[#EAE6DF] leading-[1.8] text-justify">
                  When a family wants to give land for a Durga Puja or a temple, or a local group wants to formalise its work, the first question is whether to form a trust or a society. The choice decides who controls the property and how the body is run for years to come.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delayMs={60} distancePx={18} durationMs={650}>
                <div className="space-y-4">
                  <h2
                    className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    How they differ
                  </h2>

                  {/* Trust vs Society Table */}
                  <div className="border-t border-b border-neutral-800 overflow-x-auto pt-1">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-800 bg-[#141517]">
                          <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F2EB] w-1/4">
                            <span className="sr-only">Feature</span>
                          </th>
                          <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F2EB] w-[37.5%]">
                            Trust
                          </th>
                          <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F2EB] w-[37.5%]">
                            Society
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800/80 text-xs sm:text-[14px]">
                        {COMPARISON_ROWS.map((row) => (
                          <tr key={row.feature} className="align-top">
                            <td className="py-3.5 px-4 font-medium text-[#EAE6DF]">
                              {row.feature}
                            </td>
                            <td className="py-3.5 px-4 text-[#D8D3CA] leading-relaxed">
                              {row.trust}
                            </td>
                            <td className="py-3.5 px-4 text-[#D8D3CA] leading-relaxed">
                              {row.society}
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

          {/* FULL-WIDTH SECTIONS BELOW THE SIDEBAR BOX */}
          <div className="space-y-10 pt-2">
            
            {/* Points to settle before drafting */}
            <RevealOnScroll delayMs={100} distancePx={18} durationMs={650}>
              <div className="space-y-4">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Points to settle before drafting
                </h2>
                <ul className="list-disc pl-5 space-y-2.5 text-[#D8D3CA]">
                  <li className="pl-1 leading-[1.75]">
                    <strong className="font-semibold text-[#F5F2EB]">Who owns the land.</strong> Every co-owner must join as a settlor, or the gift of the land is incomplete.
                  </li>
                  <li className="pl-1 leading-[1.75]">
                    <strong className="font-semibold text-[#F5F2EB]">The purpose.</strong> State it precisely &mdash; for example, holding the annual Durga Puja and maintaining the mandir &mdash; so the property cannot be diverted later.
                  </li>
                  <li className="pl-1 leading-[1.75]">
                    <strong className="font-semibold text-[#F5F2EB]">Trustees and succession.</strong> Name the first trustees and set how vacancies are filled.
                  </li>
                  <li className="pl-1 leading-[1.75]">
                    <strong className="font-semibold text-[#F5F2EB]">Tax.</strong> Both trusts and societies must separately register with the Income Tax Department for tax exemption and for donors&rsquo; tax deduction.
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Registration */}
            <RevealOnScroll delayMs={140} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Registration
                </h2>
                <p className="leading-[1.8] text-justify">
                  A trust deed dedicating land must be registered with the Sub-Registrar, with stamp duty paid. A society in Assam is registered with the Registrar of Societies, with its memorandum and bye-laws, and must stay compliant to keep its registration valid.
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
                    onClick={() => onNavigate('legal-info-divorce-maintenance')}
                    className="text-xs font-semibold tracking-wide text-[#C5A059] hover:text-[#E2C07D] transition-colors cursor-pointer"
                  >
                    &larr; Previous article
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('legal-info-rti-assam')}
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
