import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ZoomIn, Download, PhoneCall, ChevronLeft, ChevronRight, X, FileText } from "lucide-react";

interface OfficialBannersProps {
  onEnquireClick: (courseTitle: string) => void;
}

export default function OfficialBanners({ onEnquireClick }: OfficialBannersProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const flyers = [
    {
      title: "Admissions Prospectus & Key Syllabus Flyer",
      desc: "Detailed overview of coaching methodologies, board/JEE/NEET alignments, and premium physical batches for 2025–26.",
      url: "https://cdn.phototourl.com/free/2026-06-25-eb7638d8-fd75-41ba-896a-9a72e4e7b4ce.jpg",
      badge: "PROSPECTUS BRIEF",
      actionLabel: "Enquire About Batch Slots"
    },
    {
      title: "Official Career Seminar & Special Batches Flyer",
      desc: "Information regarding strategic counseling seminars, direct HOD sessions, scholarship eligibility, and registration steps.",
      url: "https://cdn.phototourl.com/free/2026-06-25-9e76c12b-13e7-414f-8e3d-31b7206bc286.jpg",
      badge: "SEMINAR INFO & FLYER",
      actionLabel: "Book Seminar Seat"
    }
  ];

  const nextFlyer = () => {
    setActiveTab((prev) => (prev + 1) % flyers.length);
  };

  const prevFlyer = () => {
    setActiveTab((prev) => (prev - 1 + flyers.length) % flyers.length);
  };

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative ambient background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-400 font-mono bg-brand-950/80 border border-brand-800/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-brand-400 animate-pulse" />
            OFFICIAL INFORMATION CHANNELS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Official Institute Prospectus & Flyers
          </h2>
          <div className="h-1 w-16 bg-brand-500 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Interact with our high-resolution admission pamphlets, schedules, and program sheets printed directly for the 2025–26 academic session.
          </p>
        </div>

        {/* Double Column Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Description & Selector controls */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest bg-brand-950 px-3 py-1 rounded-lg border border-brand-800/50">
                {flyers[activeTab].badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                {flyers[activeTab].title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {flyers[activeTab].desc}
              </p>
            </div>

            {/* Feature lists for selected flyer */}
            <div className="space-y-4 border-t border-slate-800 pt-6">
              <div className="flex items-start gap-3">
                <div className="bg-brand-950 text-brand-400 p-1.5 rounded-lg border border-brand-800 shrink-0 mt-0.5">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">100% Genuine Printed Content</h4>
                  <p className="text-xs text-slate-400">Authentic materials distributed physically at our counseling tower in Sadat Cantt, Lucknow.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-950 text-brand-400 p-1.5 rounded-lg border border-brand-800 shrink-0 mt-0.5">
                  <ZoomIn className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Interactive Zoom Capability</h4>
                  <p className="text-xs text-slate-400">Click on the card to inspect microscopic course parameters, fee breakdowns, and addresses.</p>
                </div>
              </div>
            </div>

            {/* Toggle tabs and arrows */}
            <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={prevFlyer}
                  className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl transition-all border border-slate-700/60 cursor-pointer focus:outline-none"
                  aria-label="Previous flyer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextFlyer}
                  className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl transition-all border border-slate-700/60 cursor-pointer focus:outline-none"
                  aria-label="Next flyer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex gap-1.5">
                {flyers.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                      activeTab === idx ? "w-8 bg-brand-500" : "w-2 bg-slate-700 hover:bg-slate-600"
                    }`}
                    aria-label={`Go to flyer ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onEnquireClick(flyers[activeTab].title)}
                className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-brand-600/10 hover:shadow-brand-600/25 transition-all flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                <PhoneCall className="h-4 w-4" />
                {flyers[activeTab].actionLabel}
              </button>
              <button
                onClick={() => setIsFullscreen(true)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all border border-slate-700 flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                <ZoomIn className="h-4 w-4" />
                Inspect Full Resolution
              </button>
            </div>

          </div>

          {/* Right: Premium Interactive Visual card with high fidelity reflections */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => setIsFullscreen(true)}
              className="group relative cursor-zoom-in max-w-md w-full aspect-[4/5] rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-black/40 bg-slate-950 group select-none"
            >
              {/* Overlay Glass Reflection Line */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-60 pointer-events-none z-10 transition-opacity group-hover:opacity-100" />
              
              {/* Actual printed flyer image */}
              <img
                src={flyers[activeTab].url}
                alt={flyers[activeTab].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Interactive Prompt Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 pt-16 flex flex-col justify-end z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-400 font-mono">EVOLUTION PUBLISHING</p>
                    <h4 className="text-sm font-bold text-white mt-0.5">{flyers[activeTab].title}</h4>
                  </div>
                  <div className="bg-brand-600 text-white p-2.5 rounded-xl shadow-lg">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Permanent micro tag */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-white px-3 py-1 rounded-xl text-[10px] font-bold tracking-widest border border-slate-800/80 uppercase font-mono z-20">
                ZOOM DETECTED
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* High-fidelity full resolution lightbox */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
            className="fixed inset-0 bg-slate-950/98 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-4 sm:p-8"
          >
            {/* Top Bar inside Fullscreen */}
            <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white z-50 max-w-7xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="bg-brand-600 text-white p-2 rounded-xl">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg leading-tight">{flyers[activeTab].title}</h4>
                  <p className="text-xs text-slate-400">Viewing High-Definition Printed Copy</p>
                </div>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-3 rounded-full transition-all border border-slate-700 cursor-pointer focus:outline-none"
                aria-label="Close fullscreen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Image Stage */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[75vh] sm:max-h-[80vh] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950"
            >
              <img
                src={flyers[activeTab].url}
                alt={flyers[activeTab].title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Bottom Controls */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-white z-50 max-w-2xl text-center">
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevFlyer();
                  }}
                  className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl transition-all border border-slate-700 cursor-pointer focus:outline-none"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="text-xs font-mono font-bold px-3 text-slate-400">
                  {activeTab + 1} / {flyers.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextFlyer();
                  }}
                  className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl transition-all border border-slate-700 cursor-pointer focus:outline-none"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <a
                href={flyers[activeTab].url}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 focus:outline-none"
              >
                <Download className="h-4 w-4" />
                Open In New Tab
              </a>

              <button
                onClick={() => {
                  setIsFullscreen(false);
                  onEnquireClick(flyers[activeTab].title);
                }}
                className="bg-slate-850 hover:bg-slate-800 text-brand-400 border border-brand-900/60 font-bold text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                Query This Flyer Program
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
