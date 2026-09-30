import React, { useEffect } from 'react';
import { LegalArticle, PageId } from '../types';
import { X, Clock, Calendar, Bookmark, ArrowRight, ShieldCheck } from 'lucide-react';

interface ArticleModalProps {
  article: LegalArticle | null;
  onClose: () => void;
  onNavigate: (page: PageId, practiceArea?: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#FFFFFF] text-[#111111] border border-neutral-300 rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-neutral-200 bg-[#FAFAF8]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider bg-neutral-900 text-white rounded-sm">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-black hover:bg-neutral-200 rounded transition-colors cursor-pointer"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-7 space-y-6">
          
          <h1
            id="article-modal-title"
            className="text-2xl sm:text-3xl lg:text-[32px] font-normal leading-snug text-black"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {article.title}
          </h1>

          <p
            className="text-base sm:text-lg text-neutral-700 leading-relaxed font-light italic border-l-2 border-neutral-800 pl-4 py-1"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {article.summary}
          </p>

          {/* Key Takeaways Box */}
          <div className="p-5 bg-[#F6F4F0] border border-[#E6E1D8] rounded-md space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3D3830]">
              <Bookmark className="w-4 h-4 text-neutral-800" />
              <span>Strategic Key Takeaways</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-800 leading-relaxed list-disc pl-5">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx}>{takeaway}</li>
              ))}
            </ul>
          </div>

          {/* Article Analysis Paragraphs */}
          <div
            className="space-y-4 text-sm sm:text-base text-neutral-800 leading-relaxed"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Statutory Note */}
          <div className="pt-4 pb-2 border-t border-neutral-200 flex items-start gap-2.5 text-xs text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-neutral-700 shrink-0 mt-0.5" />
            <span>
              Published for general informational awareness only pursuant to Bar Council standards. This advisory does not constitute formal legal opinion or establish an attorney-client relationship.
            </span>
          </div>

        </div>

        {/* Footer Bar: Explore Related Practice Area & Close */}
        <div className="px-6 sm:px-8 py-4 bg-[#FAFAF8] border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          {article.practiceAreaId ? (
            <button
              onClick={() => {
                onClose();
                onNavigate('practice-areas', article.practiceAreaId);
              }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-black hover:text-neutral-600 transition-colors cursor-pointer"
            >
              <span>Explore Associated Practice Area</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-neutral-900 hover:bg-black text-white text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
};
