import React from 'react';
import { PageId } from '../../types';
import { CurvedDivider } from '../CurvedDividers';
import { RevealOnScroll } from '../RevealOnScroll';
import { PolkaDotTexture } from '../PolkaDotTexture';
import { getCurrentPublishingDate } from '../../utils/dateUtils';

interface BuyingLandNotePageProps {
  onNavigate: (page: PageId) => void;
}

const PAPERS_TO_KEEP_READY = [
  'Certified jamabandi and the village map extract',
  'All previous deeds in the chain',
  'Non-Encumbrance Certificate',
  'Land revenue receipts',
  'Seller’s identity documents, and legal heirs’ consent where the land was inherited',
];

const LAND_TERMS = [
  {
    term: 'Jamabandi',
    meaning: 'The record of rights: Owner’s name, patta and dag numbers, area, land class',
  },
  {
    term: 'Patta',
    meaning:
      'The document of the holding. Periodic (myadi) patta is long-term, heritable settlement. Annual (eksonia) patta is a yearly settlement with weaker rights.',
  },
  {
    term: 'Dag',
    meaning: 'The plot number within the village map',
  },
  {
    term: 'Mouza',
    meaning: 'The revenue area in which the village falls',
  },
  {
    term: 'Mutation (namjari)',
    meaning: 'Entering the new owner’s name in the records after a transfer',
  },
];

export const BuyingLandNotePage: React.FC<BuyingLandNotePageProps> = ({ onNavigate }) => {
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
              LAND AND PROPERTY
            </p>

            {/* Article Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#F5F2EB] leading-[1.16] tracking-tight mb-5"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Buying land in Assam: Checking the chain of title before you pay
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
            
            {/* Left Column (7 cols): Intro + The words you will see table */}
            <div className="lg:col-span-7 space-y-8">
              <RevealOnScroll distancePx={18} durationMs={650}>
                <p className="text-[#EAE6DF] leading-[1.8] text-justify">
                  Most land disputes in Assam start with a purchase made on a sale deed alone, without checking the revenue records behind it. A registered deed does not prove that the seller had good title. Before paying any advance, check the records below.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delayMs={60} distancePx={18} durationMs={650}>
                <div className="space-y-4">
                  <h2
                    className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    The words you will see
                  </h2>

                  {/* Term & Meaning Table */}
                  <div className="border-t border-b border-neutral-800 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-800 bg-[#141517]">
                          <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F2EB] w-1/3">
                            Term
                          </th>
                          <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F2EB]">
                            Meaning
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800/80 text-xs sm:text-[14px]">
                        {LAND_TERMS.map((row) => (
                          <tr key={row.term} className="align-top">
                            <td className="py-3.5 px-4 font-medium text-[#EAE6DF] whitespace-nowrap sm:whitespace-normal">
                              {row.term}
                            </td>
                            <td className="py-3.5 px-4 text-[#D8D3CA] leading-relaxed">
                              {row.meaning}
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
            
            {/* Step 1 — Read the jamabandi */}
            <RevealOnScroll delayMs={100} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Step 1 &mdash; Read the jamabandi
                </h2>
                <p className="leading-[1.8]">
                  You can view it on the Dharitree portal (ilrms.assam.gov.in). A certified copy for legal use is applied for separately. Check:
                </p>
                <ul className="list-disc pl-5 space-y-2.5 text-[#D8D3CA]">
                  <li className="pl-1">
                    The seller&rsquo;s name is recorded against the exact dag you are buying;
                  </li>
                  <li className="pl-1">
                    The area in the jamabandi matches the area in the deed;
                  </li>
                  <li className="pl-1">
                    Whether the patta is periodic or annual;
                  </li>
                  <li className="pl-1">
                    The land class (for example agricultural or homestead).
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Step 2 — Trace the chain of title */}
            <RevealOnScroll delayMs={140} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Step 2 &mdash; Trace the chain of title
                </h2>
                <p className="leading-[1.8] text-justify">
                  Collect every earlier deed by which the land passed to the seller: Sale, gift, partition or inheritance. Each link should match the mutation entries in the records. Banks commonly look at 30 years of title. A gap &mdash; a deed with no mutation, or a mutation with no deed &mdash; needs an explanation before you proceed.
                </p>
              </div>
            </RevealOnScroll>

            {/* Step 3 — Check for charges and cases */}
            <RevealOnScroll delayMs={180} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Step 3 &mdash; Check for charges and cases
                </h2>
                <ul className="list-disc pl-5 space-y-2.5 text-[#D8D3CA]">
                  <li className="pl-1">
                    Non-Encumbrance Certificate (applied for through Sewa Setu) for registered mortgages or transfers.
                  </li>
                  <li className="pl-1">
                    Ask whether the land is mortgaged to a bank or has any loan against it.
                  </li>
                  <li className="pl-1">
                    Search for pending suits or revenue cases on the dag.
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Step 4 — Check restrictions on transfer */}
            <RevealOnScroll delayMs={220} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Step 4 &mdash; Check restrictions on transfer
                </h2>
                <ul className="list-disc pl-5 space-y-2.5 text-[#D8D3CA]">
                  <li className="pl-1">
                    Land in tribal belts and blocks can be transferred only to persons of the protected classes.
                  </li>
                  <li className="pl-1">
                    Government land, ceiling-surplus land and land settled to tea estates cannot be freely sold.
                  </li>
                  <li className="pl-1 leading-[1.75] text-justify">
                    A No Objection Certificate for the sale is generally required and is applied for online through Sewa Setu. Since the Assam government notification of 9 September 2025, sales between persons of different religions go through an additional verification before the Deputy Commissioner.
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Step 5 — Walk the land */}
            <RevealOnScroll delayMs={260} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Step 5 &mdash; Walk the land
                </h2>
                <p className="leading-[1.8] text-justify">
                  The land you are shown on the ground must be the dag in the records. Get the boundaries matched with the village map by the revenue staff (lat mandal) before registration. Mismatches between the paper plot and the plot in possession are common.
                </p>
              </div>
            </RevealOnScroll>

            {/* After registration */}
            <RevealOnScroll delayMs={280} distancePx={18} durationMs={650}>
              <div className="space-y-3.5">
                <h2
                  className="text-2xl sm:text-[28px] font-normal text-[#F5F2EB] leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  After registration
                </h2>
                <p className="leading-[1.8] text-justify">
                  Apply for mutation in your name at once. Until mutation is done, the records still show the seller.
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
                    onClick={() => onNavigate('legal-info-motor-accidents')}
                    className="text-xs font-semibold tracking-wide text-[#C5A059] hover:text-[#E2C07D] transition-colors cursor-pointer"
                  >
                    &larr; Previous article
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('legal-info-flight-cancelled')}
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
