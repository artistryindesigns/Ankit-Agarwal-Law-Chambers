import React, { useState, useEffect } from 'react';
import { PageId, LegalArticle } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LegalDisclaimerModal } from './components/LegalDisclaimerModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { AccessibilityModal } from './components/AccessibilityModal';
import { ArticleModal } from './components/ArticleModal';
import { HomePage } from './components/pages/HomePage';
import { PracticeAreasPage } from './components/pages/PracticeAreasPage';
import { LegalInformationPage } from './components/pages/LegalInformationPage';
import { InsuranceNotePage } from './components/pages/InsuranceNotePage';
import { MotorAccidentNotePage } from './components/pages/MotorAccidentNotePage';
import { BuyingLandNotePage } from './components/pages/BuyingLandNotePage';
import { FlightCancelledNotePage } from './components/pages/FlightCancelledNotePage';
import { ChequeBouncedNotePage } from './components/pages/ChequeBouncedNotePage';
import { PhysicalSharesNotePage } from './components/pages/PhysicalSharesNotePage';
import { SebiScoresNotePage } from './components/pages/SebiScoresNotePage';
import { CibilReportNotePage } from './components/pages/CibilReportNotePage';
import { GemRecoveryNotePage } from './components/pages/GemRecoveryNotePage';
import { FirBnssNotePage } from './components/pages/FirBnssNotePage';
import { DivorceMaintenanceNotePage } from './components/pages/DivorceMaintenanceNotePage';
import { TrustOrSocietyNotePage } from './components/pages/TrustOrSocietyNotePage';
import { RtiAssamNotePage } from './components/pages/RtiAssamNotePage';
import { AboutUsPage } from './components/pages/AboutUsPage';
import { ContactUsPage } from './components/pages/ContactUsPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';

const VALID_PAGES: PageId[] = [
  'home',
  'practice-areas',
  'practice-area-detail',
  'legal-information',
  'legal-info-insurance',
  'legal-info-motor-accidents',
  'legal-info-buying-land',
  'legal-info-flight-cancelled',
  'legal-info-cheque-bounced',
  'legal-info-physical-shares',
  'legal-info-sebi-scores',
  'legal-info-cibil-report',
  'legal-info-gem-recovery',
  'legal-info-fir-bnss',
  'legal-info-divorce-maintenance',
  'legal-info-trust-or-society',
  'legal-info-rti-assam',
  'about-us',
  'contact-us',
  'privacy-policy',
];

interface AppHistoryState {
  page: PageId;
  practiceArea?: string;
  article?: LegalArticle | null;
  privacyModal?: boolean;
  accessibilityModal?: boolean;
}

function getPageFromHash(): PageId {
  if (typeof window === 'undefined') return 'home';
  const rawHash = window.location.hash.replace(/^#/, '').trim();
  if (VALID_PAGES.includes(rawHash as PageId)) {
    return rawHash === 'practice-area-detail' ? 'practice-areas' : (rawHash as PageId);
  }
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined' && window.history.state?.page) {
      return window.history.state.page as PageId;
    }
    return getPageFromHash();
  });
  const [preselectedPracticeArea, setPreselectedPracticeArea] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined' && window.history.state?.practiceArea) {
      return window.history.state.practiceArea as string;
    }
    return undefined;
  });
  
  // Disclaimer state: Loads at 00:01s (1000ms) as requested by user (once per session)
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
  const [showAccessibilityModal, setShowAccessibilityModal] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<LegalArticle | null>(null);

  useEffect(() => {
    // Only show mandatory intro disclaimer if not already agreed in this browser session
    const alreadyAgreed =
      typeof window !== 'undefined' &&
      window.sessionStorage.getItem('aalc_disclaimer_agreed') === 'true';
    if (alreadyAgreed) return;

    const timer = setTimeout(() => {
      setShowDisclaimer(true);
    }, 1000); // exactly 00:01 seconds

    return () => clearTimeout(timer);
  }, []);

  // Synchronize with Browser History API so mobile/desktop Back & Forward buttons navigate previous pages
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Ensure initial entry has structured state
    if (!window.history.state || !window.history.state.page) {
      const initialPage = getPageFromHash();
      const initialState: AppHistoryState = {
        page: initialPage,
        practiceArea: undefined,
        article: null,
        privacyModal: false,
        accessibilityModal: false,
      };
      const initialUrl =
        initialPage === 'home'
          ? window.location.pathname + window.location.search
          : `#${initialPage}`;
      window.history.replaceState(initialState, '', initialUrl);
    }

    const handlePopState = (event: PopStateEvent) => {
      const state = event.state as AppHistoryState | null;
      const targetPage: PageId = state?.page || getPageFromHash() || 'home';
      const targetArea = state?.practiceArea;

      setCurrentPage(targetPage);
      setPreselectedPracticeArea(targetArea);
      setSelectedArticle(state?.article || null);
      setShowPrivacyModal(Boolean(state?.privacyModal));
      setShowAccessibilityModal(Boolean(state?.accessibilityModal));

      if (targetArea) {
        setTimeout(() => {
          const el = document.getElementById(`practice-area-${targetArea}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else if (!state?.article && !state?.privacyModal && !state?.accessibilityModal) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleAgreeDisclaimer = () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('aalc_disclaimer_agreed', 'true');
    }
    setShowDisclaimer(false);
  };

  const handleNavigate = (page: PageId, practiceArea?: string) => {
    const resolvedPage: PageId = page === 'practice-area-detail' ? 'practice-areas' : page;

    // Push state to browser history so clicking Back returns to the previous page
    if (
      typeof window !== 'undefined' &&
      (resolvedPage !== currentPage ||
        practiceArea !== preselectedPracticeArea ||
        selectedArticle !== null ||
        showPrivacyModal ||
        showAccessibilityModal)
    ) {
      const nextState: AppHistoryState = {
        page: resolvedPage,
        practiceArea,
        article: null,
        privacyModal: false,
        accessibilityModal: false,
      };
      const nextUrl =
        resolvedPage === 'home'
          ? window.location.pathname + window.location.search
          : `#${resolvedPage}`;
      window.history.pushState(nextState, '', nextUrl);
    }

    setSelectedArticle(null);
    setShowPrivacyModal(false);
    setShowAccessibilityModal(false);
    setCurrentPage(resolvedPage);

    if (practiceArea) {
      setPreselectedPracticeArea(practiceArea);
      setTimeout(() => {
        const el = document.getElementById(`practice-area-${practiceArea}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      setPreselectedPracticeArea(undefined);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenArticle = (article: LegalArticle) => {
    if (typeof window !== 'undefined') {
      const nextState: AppHistoryState = {
        page: currentPage,
        practiceArea: preselectedPracticeArea,
        article,
        privacyModal: false,
        accessibilityModal: false,
      };
      window.history.pushState(nextState, '', `#${currentPage}`);
    }
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    if (typeof window !== 'undefined' && window.history.state?.article) {
      window.history.back();
    } else {
      setSelectedArticle(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-[#EAEAEA] antialiased">
      {/* 2026 Legal Practice Compliance Disclaimer Intro Modal (Disappears when agreed) */}
      <LegalDisclaimerModal
        isOpen={showDisclaimer}
        onAgree={handleAgreeDisclaimer}
        isMandatoryIntro={true}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
      />

      {/* Accessibility Statement Modal */}
      <AccessibilityModal
        isOpen={showAccessibilityModal}
        onClose={() => setShowAccessibilityModal(false)}
      />

      {/* Legal Insights / Informational Article Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={handleCloseArticle}
        onNavigate={handleNavigate}
      />

      {/* Accessible Horizontal Navigation Header with Quick Search Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenArticle={handleOpenArticle}
      />

      {/* Main Content Area Routing */}
      <main className="flex-1 w-full" id="main-content">
        {currentPage === 'home' && (
          <HomePage onNavigate={(page, practiceArea) => handleNavigate(page, practiceArea)} />
        )}

        {(currentPage === 'practice-areas' || currentPage === 'practice-area-detail') && (
          <PracticeAreasPage
            selectedPracticeAreaId={preselectedPracticeArea}
            onNavigate={(page, practiceArea) => handleNavigate(page, practiceArea)}
          />
        )}

        {currentPage === 'legal-information' && (
          <LegalInformationPage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-insurance' && (
          <InsuranceNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-motor-accidents' && (
          <MotorAccidentNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-buying-land' && (
          <BuyingLandNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-flight-cancelled' && (
          <FlightCancelledNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-cheque-bounced' && (
          <ChequeBouncedNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-physical-shares' && (
          <PhysicalSharesNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-sebi-scores' && (
          <SebiScoresNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-cibil-report' && (
          <CibilReportNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-gem-recovery' && (
          <GemRecoveryNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-fir-bnss' && (
          <FirBnssNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-divorce-maintenance' && (
          <DivorceMaintenanceNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-trust-or-society' && (
          <TrustOrSocietyNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'legal-info-rti-assam' && (
          <RtiAssamNotePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'about-us' && (
          <AboutUsPage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'contact-us' && (
          <ContactUsPage
            preselectedArea={preselectedPracticeArea}
            onOpenPrivacy={() => handleNavigate('privacy-policy')}
          />
        )}

        {currentPage === 'privacy-policy' && (
          <PrivacyPolicyPage />
        )}
      </main>

      {/* Footer with Copyright and No Social Media */}
      <Footer
        onNavigate={(page) => handleNavigate(page)}
        onOpenDisclaimer={() => setShowDisclaimer(true)}
        onOpenPrivacy={() => handleNavigate('privacy-policy')}
        onOpenAccessibility={() => setShowAccessibilityModal(true)}
      />
    </div>
  );
}
