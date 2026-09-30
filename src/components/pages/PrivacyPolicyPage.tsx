import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { CurvedDivider } from '../CurvedDividers';
import { PolkaDotTexture } from '../PolkaDotTexture';

const PRIVACY_ITEMS = [
  {
    number: '1.',
    label: 'What we collect:',
    text: 'Only what you type into the contact form — name, email, phone and message.',
  },
  {
    number: '2.',
    label: 'Why:',
    text: 'Only to reply to your message.',
  },
  {
    number: '3.',
    label: 'Consent:',
    text: 'Used only after you tick the consent box; withdraw it any time by writing to [EMAIL].',
  },
  {
    number: '4.',
    label: 'Sharing:',
    text: 'Not sold or shared, except with the website and email host, or where the law requires.',
  },
  {
    number: '5.',
    label: 'How long:',
    text: 'Messages that do not lead to an engagement are deleted within [PERIOD].',
  },
  {
    number: '6.',
    label: 'Your rights:',
    text: 'Ask to see, correct or delete your details at [EMAIL]; you may approach the Data Protection Board of India under the Digital Personal Data Protection Act, 2023.',
  },
];

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-full font-sans-body">
      <section className="relative pt-16 sm:pt-20 lg:pt-24 bg-[#F9F7F7] text-[#181715] overflow-hidden min-h-[65vh] flex flex-col justify-between">
        {/* Polka Dot Texture in the background */}
        <PolkaDotTexture variant="continuous-flanks" opacity={0.15} />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Privacy Policy Heading */}
            <div className="lg:col-span-5">
              <RevealOnScroll distancePx={18} durationMs={650}>
                <h1
                  className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#141413] leading-tight tracking-tight"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Privacy Policy
                </h1>
              </RevealOnScroll>
            </div>

            {/* Right Column: Numbered Privacy Policy Points 1 - 6 */}
            <div className="lg:col-span-7">
              <RevealOnScroll delayMs={100} distancePx={18} durationMs={650}>
                <ol className="space-y-4 text-sm sm:text-[15px] text-[#181715] leading-relaxed">
                  {PRIVACY_ITEMS.map((item) => (
                    <li key={item.number} className="flex items-baseline gap-1.5">
                      <span className="shrink-0 font-normal">{item.number}</span>
                      <p>
                        <strong className="font-bold text-[#141413]">{item.label}</strong>{' '}
                        <span>{item.text}</span>
                      </p>
                    </li>
                  ))}
                </ol>
              </RevealOnScroll>
            </div>
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
