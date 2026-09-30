import React, { useState, useRef, useEffect } from 'react';
import { PageId, LegalArticle } from '../types';
import { ADVOCATE_INFO, PRACTICE_AREAS } from '../data/legalContent';
import { Menu, X, ChevronDown } from 'lucide-react';
import { HeaderSearchBar } from './HeaderSearchBar';
import { AnkitAgarwalLogo } from './AnkitAgarwalLogo';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, practiceArea?: string) => void;
  onOpenArticle: (article: LegalArticle) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenArticle,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [mobilePracticesOpen, setMobilePracticesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'practice-areas', label: 'Practice Areas' },
    { id: 'legal-information', label: 'Legal Information' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPracticeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId, practiceArea?: string) => {
    onNavigate(page, practiceArea);
    setPracticeDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E8E4DD] text-[#1A1A1A] transition-colors duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
        
        {/* Left: Small Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 py-1 cursor-pointer shrink-0"
          aria-label={`${ADVOCATE_INFO.firmName} Home`}
        >
          <AnkitAgarwalLogo size="sm" showText={true} />
        </button>

        {/* Right: Navigation Links + Search Icon */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav 
            aria-label="Main Navigation" 
            className="flex items-center gap-6 lg:gap-8"
          >
            {navLinks.map((link) => {
              if (link.id === 'practice-areas') {
                const isActive =
                  currentPage === 'practice-areas' ||
                  currentPage === 'practice-area-detail';

                return (
                  <div
                    key={link.id}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setPracticeDropdownOpen(true)}
                    onMouseLeave={() => setPracticeDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-1 py-1">
                      <button
                        type="button"
                        onClick={() => handleNavClick('practice-areas')}
                        className={`text-[13px] sm:text-sm font-normal transition-colors relative focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 cursor-pointer ${
                          isActive
                            ? 'text-black'
                            : 'text-neutral-700 hover:text-black'
                        }`}
                      >
                        {link.label}
                      </button>

                      <button
                        type="button"
                        onClick={() => setPracticeDropdownOpen((prev) => !prev)}
                        aria-label="Toggle Practice Areas Dropdown"
                        aria-expanded={practiceDropdownOpen}
                        className="p-0.5 text-neutral-700 hover:text-black focus:outline-none cursor-pointer"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            practiceDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-900" />
                      )}
                    </div>

                    {/* Compact, All-Device-Friendly Dropdown Menu in Normal Text */}
                    {practiceDropdownOpen && (
                      <div className="absolute right-0 lg:left-1/2 lg:-translate-x-1/2 top-full pt-1.5 w-60 sm:w-64 max-w-[calc(100vw-2rem)] z-50">
                        <div className="bg-[#FFFFFF] border border-[#E2DDD5] shadow-lg py-1.5">
                          <div className="max-h-64 sm:max-h-72 overflow-y-auto divide-y divide-[#F2EFE9]">
                            {PRACTICE_AREAS.map((area) => (
                              <button
                                key={area.id}
                                type="button"
                                onClick={() =>
                                  handleNavClick('practice-area-detail', area.id)
                                }
                                className="w-full text-left px-3.5 py-1.5 text-xs font-normal text-neutral-700 hover:text-black hover:bg-[#F6F2EA] transition-colors cursor-pointer leading-snug block"
                              >
                                {area.title}
                              </button>
                            ))}
                          </div>

                          <div className="pt-1.5 mt-1 border-t border-[#E8E4DD] px-3.5 pb-1 flex items-center justify-between bg-[#FAFAF8]">
                            <button
                              type="button"
                              onClick={() => handleNavClick('practice-areas')}
                              className="text-[11px] font-normal text-neutral-600 hover:text-black underline underline-offset-4 cursor-pointer"
                            >
                              View all practice areas
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive =
                currentPage === link.id ||
                (link.id === 'legal-information' &&
                  currentPage.startsWith('legal-info-'));
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[13px] sm:text-sm font-normal transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 cursor-pointer ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-neutral-700 hover:text-black'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-900" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Vertical subtle divider before search icon */}
          <span className="w-[1px] h-4 bg-neutral-300" aria-hidden="true" />

          {/* Right-Side Search Icon (opens spotlight search modal) */}
          <HeaderSearchBar
            onNavigate={onNavigate}
            onOpenArticle={onOpenArticle}
          />
        </div>

        {/* Mobile & Tablet Header Controls: Search Icon + Hamburger Menu */}
        <div className="flex items-center md:hidden gap-1">
          <HeaderSearchBar
            onNavigate={onNavigate}
            onOpenArticle={onOpenArticle}
          />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 hover:text-black hover:bg-neutral-100 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-b border-[#E8E4DD] px-5 py-4 space-y-3 animate-in fade-in duration-150 shadow-lg max-h-[82vh] overflow-y-auto">
          <div className="flex flex-col space-y-1 pt-1">
            {navLinks.map((link) => {
              if (link.id === 'practice-areas') {
                const isActive =
                  currentPage === 'practice-areas' ||
                  currentPage === 'practice-area-detail';
                return (
                  <div key={link.id} className="flex flex-col">
                    <div className="flex items-center justify-between py-2">
                      <button
                        type="button"
                        onClick={() => handleNavClick('practice-areas')}
                        className={`text-left text-sm font-normal transition-colors cursor-pointer ${
                          isActive
                            ? 'text-black pl-2 border-l-2 border-black'
                            : 'text-neutral-700 hover:text-black'
                        }`}
                      >
                        {link.label}
                      </button>

                      <button
                        type="button"
                        onClick={() => setMobilePracticesOpen((prev) => !prev)}
                        aria-label="Toggle Mobile Practice Areas Submenu"
                        className="p-1.5 text-neutral-700 hover:text-black cursor-pointer"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobilePracticesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {mobilePracticesOpen && (
                      <div className="pl-3 pb-1.5 mt-1 max-h-48 overflow-y-auto space-y-0.5 border-l border-[#E2DDD5] ml-2">
                        {PRACTICE_AREAS.map((area) => (
                          <button
                            key={area.id}
                            type="button"
                            onClick={() =>
                              handleNavClick('practice-area-detail', area.id)
                            }
                            className="block w-full text-left py-1 px-2 text-xs font-normal text-neutral-700 hover:text-black hover:bg-[#F6F2EA] transition-colors cursor-pointer leading-snug"
                          >
                            {area.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2 text-sm font-normal transition-colors cursor-pointer ${
                    isActive
                      ? 'text-black font-semibold pl-2 border-l-2 border-black'
                      : 'text-neutral-700 hover:text-black'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-200">
            <HeaderSearchBar
              onNavigate={onNavigate}
              onOpenArticle={onOpenArticle}
              isMobileDrawer={true}
              onCloseMobileMenu={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
};
