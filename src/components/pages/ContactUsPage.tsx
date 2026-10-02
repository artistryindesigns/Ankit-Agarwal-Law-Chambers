import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../../data/legalContent';
import { RevealOnScroll } from '../RevealOnScroll';
import { CurvedDivider } from '../CurvedDividers';
import { MapPin, Phone, MessageCircle, Mail, Clock, CheckCircle, Loader2 } from 'lucide-react';

interface ContactUsPageProps {
  preselectedArea?: string;
  onOpenPrivacy?: () => void;
}

const CHAMBERS_RECEIVING_EMAIL = 'ankitagarwallawchambers@gmail.com';
// Public Web3Forms Access Key (can be set via env or directly once generated for ankitagarwallawchambers@gmail.com)
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ preselectedArea, onOpenPrivacy }) => {
  const defaultSubject =
    PRACTICE_AREAS.find((p) => p.id === preselectedArea || p.title === preselectedArea)?.title ||
    PRACTICE_AREAS[0].title;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: defaultSubject,
    message: '',
    privacyAgreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const buildEmailSubject = () =>
    `New Website Inquiry: ${formData.subject} — ${formData.firstName} ${formData.lastName}`.trim();

  const buildEmailBody = () =>
    [
      `Name: ${formData.firstName} ${formData.lastName}`.trim(),
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Subject / Matter: ${formData.subject}`,
      `Privacy Policy Consent: Agreed`,
      '',
      'Message:',
      formData.message,
    ].join('\n');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message || !formData.privacyAgreed) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      // 1. Primary: Web3Forms API (100% uptime, instant delivery to ankitagarwallawchambers@gmail.com)
      if (WEB3FORMS_ACCESS_KEY) {
        const web3Response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: buildEmailSubject(),
            from_name: 'Ankit Agarwal Law Chambers Website',
            name: fullName,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            matter_subject: formData.subject,
            message: formData.message,
            replyto: formData.email,
          }),
        });

        const web3Data = await web3Response.json().catch(() => null);
        if (web3Response.ok && web3Data && web3Data.success) {
          setIsSubmitted(true);
          return;
        }
      }

      // 2. Secondary: FormSubmit AJAX endpoint (strictly verify data.success === true / "true")
      const response = await fetch(`https://formsubmit.co/ajax/${CHAMBERS_RECEIVING_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: fullName,
          First_Name: formData.firstName,
          Last_Name: formData.lastName || '—',
          Email: formData.email,
          Phone: formData.phone || 'Not provided',
          Subject_Matter: formData.subject,
          Message: formData.message,
          Privacy_Consent: 'Agreed to Privacy Policy',
          _replyto: formData.email,
          _subject: buildEmailSubject(),
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (data && typeof data.message === 'string' && data.message.toLowerCase().includes('activat')) {
        setSubmitError(
          `Almost done! FormSubmit has sent a one-time "Activate Form" email to ${CHAMBERS_RECEIVING_EMAIL}. Please open your Gmail inbox (or Spam folder), click "Activate Form", and then submit again.`
        );
        return;
      }

      if (!response.ok || !data || (data.success !== true && data.success !== 'true')) {
        throw new Error(data?.message || 'Form email relay service unavailable');
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        'Automatic email relay is temporarily unavailable. You can send your filled message directly below with one click:'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mapQueryAddress = 'Bordoloi Nagar, Bhaben Gogoi Path, Near Namghar Road, Tinsukia, Assam 786125';
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapQueryAddress
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const googleMapsExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapQueryAddress
  )}`;

  return (
    <div className="w-full">
      {/* Contact Page Section on #F4F4F4 Background */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 bg-[#F4F4F4] text-[#181715] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          
          {/* Top Split Header: "CONTACT" on Left, Subtitle on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-12 sm:mb-14">
            <div className="lg:col-span-7">
              <RevealOnScroll distancePx={24} durationMs={750}>
                <h1
                  className="text-4xl sm:text-5xl lg:text-[64px] uppercase tracking-[0.04em] font-normal text-[#181715] leading-none"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  CONTACT
                </h1>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5">
              <RevealOnScroll delayMs={100} distancePx={18} durationMs={700}>
                <p className="text-xs sm:text-sm text-[#2B2927] leading-relaxed font-normal text-justify">
                  Chamber address, phone, and hours of Ankit Agarwal Law Chambers.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          {/* Main 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (7 cols): "Send a Message" Form Card on (#E1E1E1) */}
            <div className="lg:col-span-7">
              <RevealOnScroll distancePx={24} durationMs={750}>
                <div className="bg-[#E1E1E1] p-7 sm:p-10 lg:p-11 border border-[#B8AFA3]">
                  <h2
                    className="text-2xl sm:text-[28px] text-[#181715] font-normal mb-3"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Send a Message
                  </h2>
                  <p className="text-xs sm:text-[13px] text-[#2B2927] leading-relaxed mb-7 text-justify">
                    Please do not send confidential documents or details through this form. Sending a message does not create an advocate-client relationship.
                  </p>

                  {isSubmitted ? (
                    <div className="py-12 px-6 text-center space-y-4 bg-white border border-[#9E958A] animate-in fade-in">
                      <div className="w-11 h-11 rounded-full bg-[#141413] text-white mx-auto flex items-center justify-center">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <h3
                        className="text-2xl text-[#181715] font-normal"
                        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                      >
                        Message Sent
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2B2927] max-w-md mx-auto leading-relaxed text-justify">
                        Thank you, <span className="font-semibold text-[#181715]">{formData.firstName} {formData.lastName}</span>. Your message regarding <span className="font-semibold text-[#181715]">{formData.subject}</span> has been received by Ankit Agarwal Law Chambers.
                      </p>
                      <div className="pt-3">
                        <button
                          type="button"
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                              firstName: '',
                              lastName: '',
                              email: '',
                              phone: '',
                              subject: PRACTICE_AREAS[0].title,
                              message: '',
                              privacyAgreed: false,
                            });
                          }}
                          className="px-6 py-2.5 bg-[#141413] hover:bg-[#2A2826] text-xs uppercase tracking-widest text-white cursor-pointer transition-colors"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Row 1: First Name & Last Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="contact-first-name"
                            className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#181715] mb-2"
                          >
                            FIRST NAME *
                          </label>
                          <input
                            id="contact-first-name"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#FDFDFD] border border-[#9E9589] text-[#181715] text-sm focus:outline-none focus:border-[#141413] transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-last-name"
                            className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#181715] mb-2"
                          >
                            LAST NAME
                          </label>
                          <input
                            id="contact-last-name"
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#FDFDFD] border border-[#9E9589] text-[#181715] text-sm focus:outline-none focus:border-[#141413] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Row 2: Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#181715] mb-2"
                          >
                            EMAIL *
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#FDFDFD] border border-[#9E9589] text-[#181715] text-sm focus:outline-none focus:border-[#141413] transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-phone"
                            className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#181715] mb-2"
                          >
                            PHONE
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#FDFDFD] border border-[#9E9589] text-[#181715] text-sm focus:outline-none focus:border-[#141413] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Row 3: Subject */}
                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#181715] mb-2"
                        >
                          SUBJECT
                        </label>
                        <select
                          id="contact-subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FDFDFD] border border-[#9E9589] text-[#181715] text-sm focus:outline-none focus:border-[#141413] transition-colors cursor-pointer"
                        >
                          {PRACTICE_AREAS.map((area) => (
                            <option key={area.id} value={area.title} className="bg-[#FDFDFD] text-[#181715]">
                              {area.title}
                            </option>
                          ))}
                          <option value="General Inquiry" className="bg-[#FDFDFD] text-[#181715]">
                            Other / General Inquiry
                          </option>
                        </select>
                      </div>

                      {/* Row 4: Message */}
                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#181715] mb-2"
                        >
                          MESSAGE *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FDFDFD] border border-[#9E9589] text-[#181715] text-sm focus:outline-none focus:border-[#141413] transition-colors resize-y"
                        />
                      </div>

                      {/* Row 5: Consent Checkbox */}
                      <div className="flex items-start gap-2.5 pt-1 text-xs text-[#2B2927]">
                        <input
                          id="contact-privacy-consent"
                          type="checkbox"
                          required
                          checked={formData.privacyAgreed}
                          onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                          className="mt-0.5 w-4 h-4 accent-[#141413] bg-white border border-[#8F867B] rounded-none cursor-pointer shrink-0"
                        />
                        <label htmlFor="contact-privacy-consent" className="cursor-pointer select-none leading-relaxed text-justify">
                          I agree that the details I have entered may be used by Ankit Agarwal Law Chambers only to reply to this message, as described in the{' '}
                          {onOpenPrivacy ? (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                onOpenPrivacy();
                              }}
                              className="font-bold text-[#181715] hover:underline cursor-pointer"
                            >
                              Privacy Policy
                            </button>
                          ) : (
                            <strong className="font-bold text-[#181715]">Privacy Policy</strong>
                          )}
                          .
                        </label>
                      </div>

                      {/* Error Banner (if network error occurs) */}
                      {submitError && (
                        <div className="p-4 bg-white border border-[#141413] text-xs text-[#181715] space-y-3">
                          <p className="leading-relaxed">{submitError}</p>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <a
                              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                                CHAMBERS_RECEIVING_EMAIL
                              )}&su=${encodeURIComponent(buildEmailSubject())}&body=${encodeURIComponent(
                                buildEmailBody()
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-[#141413] hover:bg-[#292826] text-white text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors"
                            >
                              Send via Gmail &rarr;
                            </a>
                            <a
                              href={`mailto:${CHAMBERS_RECEIVING_EMAIL}?subject=${encodeURIComponent(
                                buildEmailSubject()
                              )}&body=${encodeURIComponent(buildEmailBody())}`}
                              className="px-4 py-2 bg-white hover:bg-neutral-100 text-[#141413] border border-[#141413] text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors"
                            >
                              Open Email App &rarr;
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Row 6: Send Button */}
                      <div className="pt-1">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 bg-[#141413] hover:bg-[#292826] disabled:opacity-60 text-white font-semibold text-xs uppercase tracking-[0.16em] transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>SENDING...</span>
                            </>
                          ) : (
                            <span>SEND</span>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column (5 cols): Black "Chambers" Card + Interactive Draggable Google Map */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Top Card: Chambers Details */}
              <RevealOnScroll delayMs={120} distancePx={24} durationMs={750}>
                <div className="bg-[#141413] text-white p-8 sm:p-9 border border-[#141413]">
                  <h2
                    className="text-2xl sm:text-[26px] text-[#F3EFEA] font-normal mb-6"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Chambers
                  </h2>

                  <div className="space-y-5">
                    {/* ADDRESS */}
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-4 h-4 text-[#9E9689] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.16em] text-[#8E887E] font-medium mb-0.5">
                          ADDRESS
                        </div>
                        <div className="text-xs sm:text-[13.5px] text-[#EAE6DF] leading-relaxed text-justify">
                          Bordoloi Nagar, Bhaben Gogoi Path, Near Namghar Road, Tinsukia, Assam – 786125
                        </div>
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-start gap-3.5">
                      <Phone className="w-4 h-4 text-[#9E9689] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.16em] text-[#8E887E] font-medium mb-0.5">
                          PHONE
                        </div>
                        <div className="text-xs sm:text-[13.5px] text-[#EAE6DF] leading-relaxed">
                          [PHONE]
                        </div>
                      </div>
                    </div>

                    {/* WHATSAPP */}
                    <div className="flex items-start gap-3.5">
                      <MessageCircle className="w-4 h-4 text-[#9E9689] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.16em] text-[#8E887E] font-medium mb-0.5">
                          WHATSAPP
                        </div>
                        <div className="text-xs sm:text-[13.5px] text-[#EAE6DF] leading-relaxed">
                          [WHATSAPP NUMBER]
                        </div>
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="flex items-start gap-3.5">
                      <Mail className="w-4 h-4 text-[#9E9689] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.16em] text-[#8E887E] font-medium mb-0.5">
                          EMAIL
                        </div>
                        <div className="text-xs sm:text-[13.5px] text-[#EAE6DF] leading-relaxed">
                          [EMAIL]
                        </div>
                      </div>
                    </div>

                    {/* CHAMBER HOURS */}
                    <div className="flex items-start gap-3.5">
                      <Clock className="w-4 h-4 text-[#9E9689] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.16em] text-[#8E887E] font-medium mb-0.5">
                          CHAMBER HOURS
                        </div>
                        <div className="text-xs sm:text-[13.5px] text-[#EAE6DF] leading-relaxed">
                          [DAYS AND HOURS]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Bottom Card: Interactive & Draggable Google Map */}
              <RevealOnScroll delayMs={200} distancePx={20} durationMs={700}>
                <div className="border border-[#E1E1E1] bg-white overflow-hidden">
                  <div className="w-full h-[270px] sm:h-[300px] relative">
                    <iframe
                      title="Ankit Agarwal Law Chambers Location - Bordoloi Nagar, Bhaben Gogoi Path, Near Namghar Road, Tinsukia, Assam 786125"
                      src={googleMapsEmbedUrl}
                      className="w-full h-full border-0 pointer-events-auto"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="px-4 py-2.5 bg-[#EBE7E0] border-t border-[#D5CEC3] flex items-center justify-between text-[11px] text-[#3A3632]">
                    <span>Drag or zoom map to explore Tinsukia</span>
                    <a
                      href={googleMapsExternalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#181715] hover:underline"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>
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
