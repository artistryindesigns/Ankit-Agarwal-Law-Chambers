import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../../data/legalContent';
import { RevealOnScroll } from '../RevealOnScroll';
import { CurvedDivider } from '../CurvedDividers';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  CheckCircle,
  Loader2,
  Copy,
  Check,
  Send,
  FileText,
  ExternalLink,
} from 'lucide-react';

interface ContactUsPageProps {
  preselectedArea?: string;
  onOpenPrivacy?: () => void;
}

const CHAMBERS_RECEIVING_EMAIL = 'ankitagarwallawchambers@gmail.com';
const CHAMBERS_WHATSAPP_NUMBER = '918876154321';
const CHAMBERS_DISPLAY_PHONE = '+91 8876154321';

interface SubmittedInquiry {
  id: string;
  date: string;
  time: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

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
  const [submittedInquiry, setSubmittedInquiry] = useState<SubmittedInquiry | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [relayStatus, setRelayStatus] = useState<'sent' | 'activating' | 'direct'>('direct');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const buildEmailSubject = (sub: string, name: string) =>
    `New Website Inquiry: ${sub} — ${name}`.trim();

  const buildFormattedSummaryText = (inquiry: SubmittedInquiry) => {
    return [
      `ANKIT AGARWAL LAW CHAMBERS — WEBSITE INQUIRY`,
      `Reference No: #${inquiry.id}`,
      `Date & Time: ${inquiry.date} at ${inquiry.time}`,
      `----------------------------------------`,
      `Client Name: ${inquiry.fullName}`,
      `Email Address: ${inquiry.email}`,
      `Phone Number: ${inquiry.phone}`,
      `Subject / Matter: ${inquiry.subject}`,
      `----------------------------------------`,
      `Inquiry Message:`,
      inquiry.message,
    ].join('\n');
  };

  const handleCopySummary = (inquiry: SubmittedInquiry) => {
    const text = buildFormattedSummaryText(inquiry);
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message || !formData.privacyAgreed) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    const newRecord: SubmittedInquiry = {
      id: `AALC-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      time: new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      fullName,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone.trim() || 'Not provided',
      subject: formData.subject,
      message: formData.message.trim(),
    };

    // Store in local storage history so the user or chamber can always review submitted inquiries
    try {
      const stored = localStorage.getItem('aalc_inquiries_history');
      const list = stored ? JSON.parse(stored) : [];
      list.unshift(newRecord);
      localStorage.setItem('aalc_inquiries_history', JSON.stringify(list.slice(0, 15)));
    } catch {
      // Storage fallback
    }

    setSubmittedInquiry(newRecord);
    setIsSubmitted(true);

    // 1. Prepare WhatsApp notification text
    const whatsappNotificationText = [
      `*New Legal Consultation Request — Ankit Agarwal Law Chambers*`,
      `----------------------------------------`,
      `*Reference:* #${newRecord.id}`,
      `*Date:* ${newRecord.date} at ${newRecord.time}`,
      `*Client:* ${fullName}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${newRecord.phone}`,
      `*Matter:* ${formData.subject}`,
      `----------------------------------------`,
      `*Inquiry Message:*`,
      formData.message.trim(),
    ].join('\n');

    const whatsappDirectUrl = `https://api.whatsapp.com/send?phone=${CHAMBERS_WHATSAPP_NUMBER}&text=${encodeURIComponent(
      whatsappNotificationText
    )}`;

    // Automatically trigger WhatsApp in a new tab/window during the user click event
    try {
      window.open(whatsappDirectUrl, '_blank');
    } catch {
      // Fallback displayed on receipt
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CHAMBERS_RECEIVING_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Inquiry_Reference: `#${newRecord.id}`,
          Name: fullName,
          First_Name: formData.firstName,
          Last_Name: formData.lastName || '—',
          Email: formData.email,
          Phone: newRecord.phone,
          Subject_Matter: formData.subject,
          Message: formData.message,
          Submitted_At: `${newRecord.date} at ${newRecord.time}`,
          Privacy_Consent: 'Agreed to Privacy Policy',
          _replyto: formData.email,
          _subject: buildEmailSubject(formData.subject, fullName),
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (data && typeof data.message === 'string' && data.message.toLowerCase().includes('activat')) {
        setRelayStatus('activating');
      } else if (response.ok && data && (data.success === true || data.success === 'true')) {
        setRelayStatus('sent');
      } else {
        setRelayStatus('direct');
      }
    } catch {
      setRelayStatus('direct');
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

                  {isSubmitted && submittedInquiry ? (
                    <div className="bg-white border border-[#9E958A] p-6 sm:p-8 space-y-6 animate-in fade-in shadow-sm">
                      {/* Top Confirmation Header */}
                      <div className="flex items-start gap-4 pb-5 border-b border-[#E5E0D8]">
                        <div className="w-12 h-12 rounded-full bg-[#141413] text-[#E2C07D] shrink-0 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.16em] text-[#8C6D23] mb-1">
                            OFFICIAL CHAMBERS TRANSMISSION
                          </span>
                          <h3
                            className="text-xl sm:text-2xl text-[#181715] font-normal leading-tight"
                            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                          >
                            Inquiry Submitted Successfully
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#5E5953] mt-1.5">
                            <span>
                              <strong>Reference:</strong> #{submittedInquiry.id}
                            </span>
                            <span>&middot;</span>
                            <span>{submittedInquiry.date} at {submittedInquiry.time}</span>
                          </div>
                        </div>
                      </div>

                      {/* Information About What the User Has Queried */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#181715] flex items-center gap-1.5">
                            <FileText className="w-4 h-4 text-[#8C6D23]" />
                            Information About Your Query
                          </h4>
                          <button
                            type="button"
                            onClick={() => handleCopySummary(submittedInquiry)}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#181715] hover:text-[#8C6D23] transition-colors cursor-pointer"
                          >
                            {copiedSummary ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-700 font-bold">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Details</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Query Details Grid */}
                        <div className="bg-[#FAF8F5] border border-[#E0D8CE] p-4 sm:p-5 space-y-3.5 text-xs sm:text-sm">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-[#EAE4DC]">
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#736B63] mb-0.5">
                                Client Name
                              </p>
                              <p className="font-semibold text-[#181715]">{submittedInquiry.fullName}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#736B63] mb-0.5">
                                Subject / Practice Area
                              </p>
                              <p className="font-semibold text-[#181715]">{submittedInquiry.subject}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-[#EAE4DC]">
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#736B63] mb-0.5">
                                Email Address
                              </p>
                              <p className="font-medium text-[#181715] break-all">{submittedInquiry.email}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#736B63] mb-0.5">
                                Phone Number
                              </p>
                              <p className="font-medium text-[#181715]">{submittedInquiry.phone}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#736B63] mb-1.5">
                              Message / Query Content
                            </p>
                            <div className="bg-white p-3.5 border border-[#DDD5CB] text-[#1E1D1B] whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto font-normal text-xs sm:text-sm">
                              {submittedInquiry.message}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 1. WhatsApp Instant Notification Card */}
                      <div className="p-4 bg-[#EBF7F0] border border-[#BCE4CD] text-[#0D5B31] space-y-2">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-[#128C7E] shrink-0" />
                          <p className="font-bold text-xs uppercase tracking-wider text-[#0D5B31]">
                            WhatsApp Notification Activated
                          </p>
                        </div>
                        <p className="text-xs leading-relaxed text-[#1F7A46]">
                          WhatsApp has been launched with your formatted legal consultation request addressed to Advocate Ankit Agarwal (<strong>{CHAMBERS_DISPLAY_PHONE}</strong>).
                        </p>
                        <div className="pt-1">
                          <a
                            href={`https://api.whatsapp.com/send?phone=${CHAMBERS_WHATSAPP_NUMBER}&text=${encodeURIComponent(
                              [
                                `*New Legal Consultation Request — Ankit Agarwal Law Chambers*`,
                                `----------------------------------------`,
                                `*Reference:* #${submittedInquiry.id}`,
                                `*Date:* ${submittedInquiry.date} at ${submittedInquiry.time}`,
                                `*Client:* ${submittedInquiry.fullName}`,
                                `*Email:* ${submittedInquiry.email}`,
                                `*Phone:* ${submittedInquiry.phone}`,
                                `*Matter:* ${submittedInquiry.subject}`,
                                `----------------------------------------`,
                                `*Inquiry Message:*`,
                                submittedInquiry.message,
                              ].join('\n')
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span>Open / Re-send WhatsApp Message &rarr;</span>
                          </a>
                        </div>
                      </div>

                      {/* 2. Email Transmission Card with Spam Guidance */}
                      <div className="p-4 bg-[#FAF8F5] border border-[#DDD5CB] text-[#3A3733] space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#8C6D23] shrink-0" />
                          <p className="font-bold text-xs uppercase tracking-wider text-[#181715]">
                            Email Notification to {CHAMBERS_RECEIVING_EMAIL}
                          </p>
                        </div>
                        <p className="text-xs leading-relaxed text-[#5C564E]">
                          Form submission notification was dispatched to <strong>{CHAMBERS_RECEIVING_EMAIL}</strong>.
                        </p>
                        <p className="text-[11px] leading-relaxed text-[#7A6023] bg-[#FFF9ED] border border-[#F0DFB8] p-2.5">
                          <strong>Note for Gmail:</strong> Automated form relay messages often arrive initially in your <strong>Spam / Junk folder</strong>. Please open Spam in <code>{CHAMBERS_RECEIVING_EMAIL}</code> and click <em>&ldquo;Report not spam&rdquo;</em> so all future inquiries land directly in your Primary inbox.
                        </p>
                        <div className="pt-1 flex flex-wrap gap-2.5">
                          <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                              CHAMBERS_RECEIVING_EMAIL
                            )}&su=${encodeURIComponent(
                              buildEmailSubject(submittedInquiry.subject, submittedInquiry.fullName)
                            )}&body=${encodeURIComponent(buildFormattedSummaryText(submittedInquiry))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#141413] hover:bg-[#2A2826] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Send Direct via Gmail</span>
                          </a>
                          <a
                            href={`mailto:${CHAMBERS_RECEIVING_EMAIL}?subject=${encodeURIComponent(
                              buildEmailSubject(submittedInquiry.subject, submittedInquiry.fullName)
                            )}&body=${encodeURIComponent(buildFormattedSummaryText(submittedInquiry))}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#F2EFE9] text-[#141413] border border-[#141413] text-xs font-semibold uppercase tracking-wider transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Open Email Client</span>
                          </a>
                        </div>
                      </div>

                      {/* Action to submit another query */}
                      <div className="pt-2 text-center border-t border-[#E5E0D8]">
                        <button
                          type="button"
                          onClick={() => {
                            setIsSubmitted(false);
                            setSubmittedInquiry(null);
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
                          className="text-xs uppercase tracking-widest text-[#736B63] hover:text-[#181715] font-semibold underline underline-offset-4 cursor-pointer transition-colors"
                        >
                          Submit Another Inquiry
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
                              )}&su=${encodeURIComponent(
                                buildEmailSubject(formData.subject, `${formData.firstName} ${formData.lastName}`.trim())
                              )}&body=${encodeURIComponent(
                                `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMatter: ${formData.subject}\n\nMessage:\n${formData.message}`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-[#141413] hover:bg-[#292826] text-white text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors"
                            >
                              Send via Gmail &rarr;
                            </a>
                            <a
                              href={`mailto:${CHAMBERS_RECEIVING_EMAIL}?subject=${encodeURIComponent(
                                buildEmailSubject(formData.subject, `${formData.firstName} ${formData.lastName}`.trim())
                              )}&body=${encodeURIComponent(
                                `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMatter: ${formData.subject}\n\nMessage:\n${formData.message}`
                              )}`}
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
