export type PageId =
  | 'home'
  | 'practice-areas'
  | 'practice-area-detail'
  | 'legal-information'
  | 'legal-info-insurance'
  | 'legal-info-motor-accidents'
  | 'legal-info-buying-land'
  | 'legal-info-flight-cancelled'
  | 'legal-info-cheque-bounced'
  | 'legal-info-physical-shares'
  | 'legal-info-sebi-scores'
  | 'legal-info-cibil-report'
  | 'legal-info-gem-recovery'
  | 'legal-info-fir-bnss'
  | 'legal-info-divorce-maintenance'
  | 'about-us'
  | 'contact-us'
  | 'privacy-policy';

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  summary: string;
  fullDescription: string;
  keyServices: string[];
  applicableForums?: string[];
  statutoryFramework?: string[];
  proceduralSteps?: string[];
  recentMatters?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  quote: string;
  matterType: string;
  image?: string;
}

export interface AdvocateMilestone {
  year: string;
  title: string;
  description: string;
}

export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  practiceArea: string;
  message: string;
  preferredDate?: string;
}

export interface LegalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  practiceAreaId?: string;
}

