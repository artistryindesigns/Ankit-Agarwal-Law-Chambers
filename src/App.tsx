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
import { AboutUsPage } from './components/pages/AboutUsPage';
import { ContactUsPage } from './components/pages/ContactUsPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [preselectedPracticeArea, setPreselectedPracticeArea] = useState<string | undefined>(undefined);
  
  // Disclaimer state: Loads at 00:01s (1000ms) as requested by user
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
  const [showAccessibilityModal, setShowAccessibilityModal] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<LegalArticle | null>(null);

  useEffect(() => {
    // Per user requirement: "a disclaimer as intro when the website loads in 00:01 seconds with a agree button in bottom right that disappears after the user clicks to proceed"
    // Triggers at 00:01s (1000ms) upon loading
    const timer = setTimeout(() => {
      setShowDisclaimer(true);
    }, 1000); // exactly 00:01 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleAgreeDisclaimer = () => {
    setShowDisclaimer(false);
  };

  const handleNavigate = (page: PageId, practiceArea?: string) => {
    const resolvedPage: PageId = page === 'practice-area-detail' ? 'practice-areas' : page;
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
        onClose={() => setSelectedArticle(null)}
        onNavigate={handleNavigate}
      />

      {/* Accessible Horizontal Navigation Header with Quick Search Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenArticle={(article) => setSelectedArticle(article)}
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
