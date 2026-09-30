import React, { useState, useRef, useEffect, useMemo } from 'react';
import { PageId, LegalArticle, PracticeArea } from '../types';
import { PRACTICE_AREAS, LEGAL_INSIGHTS_ARTICLES } from '../data/legalContent';
import { Search, X, BookOpen, Briefcase, ChevronRight, FileText, ArrowUpRight } from 'lucide-react';

interface HeaderSearchBarProps {
  onNavigate: (page: PageId, practiceAreaId?: string) => void;
  onOpenArticle: (article: LegalArticle) => void;
  isMobileDrawer?: boolean;
  onCloseMobileMenu?: () => void;
}

export const HeaderSearchBar: React.FC<HeaderSearchBarProps> = ({
  onNavigate,
  onOpenArticle,
  isMobileDrawer = false,
  onCloseMobileMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input automatically whenever search modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Global keyboard shortcut: Cmd+K / Ctrl+K and Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Filter search results in real time
  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return {
        practiceAreas: [] as PracticeArea[],
        articles: [] as LegalArticle[],
        totalCount: 0,
      };
    }

    const matchedPracticeAreas = PRACTICE_AREAS.filter((pa) => {
      return (
        pa.title.toLowerCase().includes(trimmed) ||
        pa.summary.toLowerCase().includes(trimmed) ||
        pa.fullDescription.toLowerCase().includes(trimmed) ||
        pa.keyServices.some((s) => s.toLowerCase().includes(trimmed)) ||
        (pa.recentMatters && pa.recentMatters.toLowerCase().includes(trimmed))
      );
    });

    const matchedArticles = LEGAL_INSIGHTS_ARTICLES.filter((art) => {
      return (
        art.title.toLowerCase().includes(trimmed) ||
        art.summary.toLowerCase().includes(trimmed) ||
        art.category.toLowerCase().includes(trimmed) ||
        art.keyTakeaways.some((k) => k.toLowerCase().includes(trimmed)) ||
        art.content.some((c) => c.toLowerCase().includes(trimmed))
      );
    });

    return {
      practiceAreas: matchedPracticeAreas,
      articles: matchedArticles,
      totalCount: matchedPracticeAreas.length + matchedArticles.length,
    };
  }, [query]);

  const handleSelectPracticeArea = (paId: string) => {
    onNavigate('practice-area-detail', paId);
    setIsOpen(false);
    setQuery('');
    if (onCloseMobileMenu) onCloseMobileMenu();
  };

  const handleSelectArticle = (article: LegalArticle) => {
    onOpenArticle(article);
    setIsOpen(false);
    setQuery('');
    if (onCloseMobileMenu) onCloseMobileMenu();
  };

  const popularSuggestions = [
    { label: 'Health Insurance Claims', type: 'practice', id: 'health-insurance-claims' },
    { label: 'Consumer Disputes', type: 'practice', id: 'consumer-disputes' },
    { label: 'Motor Accident Claims', type: 'practice', id: 'motor-accident-claims' },
    { label: 'Criminal Matters', type: 'practice', id: 'criminal-matters' },
    { label: 'Land Disputes', type: 'practice', id: 'land-disputes' },
  ];

  return (
    <>
      {/* 
        Clean Search Icon on the right side of the header.
        Per user instruction: "I don't want to show a button form instead show a search icon on the right side."
      */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`p-2 rounded-full text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 cursor-pointer flex items-center gap-2 group ${
          isMobileDrawer ? 'w-full justify-start px-3 py-2.5 bg-neutral-100 rounded-md' : ''
        }`}
        aria-label="Search chambers practice areas and legal insights"
        title="Search (⌘K)"
      >
        <Search className="w-4 h-4 stroke-[1.8] group-hover:scale-105 transition-transform" />
        {isMobileDrawer && (
          <span className="text-sm font-normal text-neutral-700">Search Chambers...</span>
        )}
      </button>

      {/* Spotlight Search Modal Overlay */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-dialog-title"
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
              setQuery('');
            }
          }}
        >
          <div className="relative w-full max-w-2xl bg-white border border-neutral-300 rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 text-[#111111]">
            
            {/* Search Input Bar */}
            <div className="flex items-center px-4 sm:px-6 py-4 border-b border-neutral-200 gap-3 bg-[#FAFAF8]">
              <Search className="w-5 h-5 text-neutral-400 shrink-0" />
              <input
                ref={inputRef}
                id="search-dialog-title"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search practice areas, dispute matters, legal insights..."
                className="w-full text-sm sm:text-base bg-transparent border-none text-black placeholder:text-neutral-400 focus:outline-none"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    inputRef.current?.focus();
                  }}
                  className="p-1 text-neutral-400 hover:text-black rounded transition-colors"
                  aria-label="Clear query"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono text-neutral-400 bg-neutral-200/80 rounded border border-neutral-300">
                  ESC
                </kbd>
              )}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setQuery('');
                }}
                className="sm:hidden p-1 text-neutral-500 hover:text-black"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results / Suggestions Container */}
            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
              {!query.trim() ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                    <span>Quick Recommendations</span>
                    <span className="text-[10px] text-neutral-400 font-mono">Press ⌘K or ESC</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSuggestions.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          if (item.type === 'practice') {
                            handleSelectPracticeArea(item.id);
                          } else {
                            const art = LEGAL_INSIGHTS_ARTICLES.find((a) => a.id === item.id);
                            if (art) handleSelectArticle(art);
                          }
                        }}
                        className="text-xs px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-full transition-colors cursor-pointer text-left inline-flex items-center gap-1.5"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-neutral-400 pt-2 border-t border-neutral-100">
                    Search across all legal domains, tribunal proceedings, courtroom judgments, and compliance frameworks.
                  </p>
                </div>
              ) : results.totalCount === 0 ? (
                <div className="py-10 text-center text-neutral-500 space-y-1.5">
                  <p className="text-base font-normal text-neutral-800">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                  <p className="text-xs text-neutral-400">
                    Try searching for &ldquo;litigation&rdquo;, &ldquo;arbitration&rdquo;, &ldquo;intellectual property&rdquo;, or &ldquo;mergers&rdquo;
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Practice Areas Group */}
                  {results.practiceAreas.length > 0 && (
                    <div>
                      <div className="px-2 py-1 flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-neutral-400">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>Practice Areas ({results.practiceAreas.length})</span>
                      </div>
                      <div className="mt-1 space-y-1">
                        {results.practiceAreas.map((pa) => (
                          <button
                            key={pa.id}
                            type="button"
                            onClick={() => handleSelectPracticeArea(pa.id)}
                            className="w-full text-left p-3 rounded-lg hover:bg-neutral-100 transition-colors flex items-start justify-between gap-3 group cursor-pointer"
                          >
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-black group-hover:text-black">
                                {pa.title}
                              </p>
                              <p className="text-xs text-neutral-500 line-clamp-1">
                                {pa.summary}
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-black shrink-0 mt-1" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Legal Articles & Insights Group */}
                  {results.articles.length > 0 && (
                    <div className="border-t border-neutral-100 pt-3">
                      <div className="px-2 py-1 flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-neutral-400">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Legal Articles &amp; Insights ({results.articles.length})</span>
                      </div>
                      <div className="mt-1 space-y-1">
                        {results.articles.map((article) => (
                          <button
                            key={article.id}
                            type="button"
                            onClick={() => handleSelectArticle(article)}
                            className="w-full text-left p-3 rounded-lg hover:bg-neutral-100 transition-colors flex items-start justify-between gap-3 group cursor-pointer"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase tracking-wider bg-neutral-200 text-neutral-700 px-1.5 py-0.5 rounded-sm">
                                  {article.category}
                                </span>
                                <span className="text-[10px] text-neutral-400 font-mono">
                                  {article.readTime}
                                </span>
                              </div>
                              <p className="text-sm font-medium text-black group-hover:text-black">
                                {article.title}
                              </p>
                              <p className="text-xs text-neutral-500 line-clamp-1">
                                {article.summary}
                              </p>
                            </div>
                            <FileText className="w-4 h-4 text-neutral-400 group-hover:text-black shrink-0 mt-1" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-[#FAFAF8] border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
              <span className="font-serif italic">Ankit Agarwal Law Chambers</span>
              <span className="text-[11px] text-neutral-400">Press ESC to dismiss</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
