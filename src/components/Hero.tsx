import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  Users, 
  ZoomIn, 
  X, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play 
} from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
  onCoursesClick: () => void;
}

export default function Hero({ onContactClick, onCoursesClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showLightbox, setShowLightbox] = useState(false);

  const slides = [
    {
      url: "https://cdn.phototourl.com/free/2026-06-25-5b3ca132-2b4c-4960-bc36-6b79406735f7.jpg",
      title: "Evolution Premier Lecture Theater",
      badge: "MODERN INFRASTRUCTURE",
      desc: "Spacious, fully air-conditioned spaces built with superior acoustics and comfortable high-back study seating.",
      icon: <Users className="h-4 w-4 text-emerald-600" />
    },
    {
      url: "https://cdn.phototourl.com/free/2026-06-25-a74a65ad-1369-45ff-b146-2af979017428.jpg",
      title: "High-Fidelity Smart Board Lecture Hall",
      badge: "DIGITAL SMART LABS",
      desc: "Equipped with real-time interactive digital boards and advanced projection models for step-by-step clarity.",
      icon: <GraduationCap className="h-4 w-4 text-brand-600" />
    },
    {
      url: "https://cdn.phototourl.com/free/2026-06-25-ed502732-1730-4cc4-be02-cba06d64e1db.jpg",
      title: "Audio-Visual Smart Classroom",
      badge: "INTERACTIVE SMART BOARDS",
      desc: "Fitted with state-of-the-art multi-media arrays to turn complex sciences into exciting practical demonstrations.",
      icon: <CheckCircle2 className="h-4 w-4 text-sky-600" />
    },
    {
      url: "https://cdn.phototourl.com/free/2026-06-25-ba0c3d8c-3115-456a-8e38-c1aab223204d.jpg",
      title: "Dedicated Physical Batch Study Space",
      badge: "DOUBT SOLVING CHAMBERS",
      desc: "Quiet self-study zones and collaborative tables where HOD mentors sit with students to clarify direct questions.",
      icon: <Award className="h-4 w-4 text-amber-600" />
    },
    {
      url: "https://cdn.phototourl.com/free/2026-06-25-eb7638d8-fd75-41ba-896a-9a72e4e7b4ce.jpg",
      title: "Official Admissions Prospectus & Syllabus",
      badge: "OFFICIAL 2025-26 FLYER",
      desc: "A comprehensive look at our scientific pedagogy, weekly diagnostic tests, and direct batch slot registrations.",
      icon: <FileText className="h-4 w-4 text-rose-600" />
    },
    {
      url: "https://cdn.phototourl.com/free/2026-06-25-9e76c12b-13e7-414f-8e3d-31b7206bc286.jpg",
      title: "Career Seminar & Scholarship Form",
      badge: "BATCH SCHEDULING",
      desc: "Details for our direct admission tests, special scholar batch schedules, and free mentoring invitations.",
      icon: <Calendar className="h-4 w-4 text-indigo-600" />
    }
  ];

  // Auto progression
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const selectedItem = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-28 md:pt-36 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-brand-50 via-white to-transparent"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-200 rounded-full filter blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-sky-200 rounded-full filter blur-3xl -translate-x-1/4 translate-y-1/4" />
        {/* Dot grid */}
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{
            backgroundImage: "radial-gradient(#2563eb 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Left Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 font-semibold px-4 py-2 rounded-full text-xs sm:text-sm tracking-wide border border-brand-200"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-mono text-[11px] sm:text-xs">ADMISSIONS OPEN FOR SESSION 2026 - 2027</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-slate-900 leading-[1.1]"
              >
                Evolve Your Mind, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-800">
                  Empower Your Career
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Join India's premium coaching institute for Class 9-12 academic boards and competitive exam prep like IIT-JEE and NEET. Secure your dream future with expert mentors today.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                id="hero-admission-btn"
              >
                Apply for Admission <ArrowRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={onCoursesClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base px-8 py-4 rounded-2xl border border-slate-200 hover:border-brand-300 shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                id="hero-courses-btn"
              >
                Explore Courses
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-brand-900 font-display">15+</span>
                <span className="block text-[11px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">Years Excellence</span>
              </div>
              <div className="border-x border-slate-100 px-2">
                <span className="block text-2xl sm:text-3xl font-bold text-brand-900 font-display">98%</span>
                <span className="block text-[11px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">Board Pass Rate</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-brand-900 font-display">450+</span>
                <span className="block text-[11px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">JEE/NEET Ranks</span>
              </div>
            </motion.div>
          </div>

          {/* Graphical Right Column with interactive slide templates */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex flex-col items-center w-full">
            
            {/* Header / Caption panel for the slider */}
            <div className="w-full max-w-[420px] mb-3 flex items-center justify-between px-1">
              <span className="text-[10px] font-bold text-brand-600 tracking-wider font-mono uppercase bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-100">
                CAMPUS GALLERY & FLYERS
              </span>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-slate-400 hover:text-slate-700 bg-slate-100/80 p-1.5 rounded-lg border border-slate-200/50 flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase font-mono transition-all focus:outline-none"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-3 w-3" /> Auto
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3" /> Manual
                  </>
                )}
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[420px] group"
            >
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-brand-500/10 rounded-[2.5rem] filter blur-xl transform scale-105" />

              {/* Main Decorative Card Slider */}
              <div 
                onClick={() => setShowLightbox(true)}
                className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl aspect-[4/5] bg-slate-950 cursor-zoom-in"
              >
                {/* Light reflection element */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-60 pointer-events-none z-10" />

                {/* Animated image switch */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {/* Overlay details indicator */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-slate-100 z-20">
                  <div className="bg-brand-50 text-brand-600 p-2.5 rounded-xl border border-brand-100 shrink-0">
                    {selectedItem.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[9px] font-bold text-brand-600 uppercase tracking-widest font-mono">
                      {selectedItem.badge}
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-800 leading-tight truncate">
                      {selectedItem.title}
                    </span>
                    <span className="block text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                      {selectedItem.desc}
                    </span>
                  </div>
                </div>

                {/* Permanent click-to-zoom instruction */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-xl text-[9px] font-bold tracking-widest border border-slate-800 uppercase font-mono z-20">
                  TAP TO ZOOM
                </div>
              </div>

              {/* Float Left Arrow button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                  setIsPlaying(false); // Pause auto-play when user interacts
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white hover:bg-brand-50 text-slate-700 hover:text-brand-600 h-10 w-10 rounded-full shadow-lg border border-slate-100/60 flex items-center justify-center z-30 transition-all active:scale-95 focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Float Right Arrow button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                  setIsPlaying(false); // Pause auto-play when user interacts
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-brand-50 text-slate-700 hover:text-brand-600 h-10 w-10 rounded-full shadow-lg border border-slate-100/60 flex items-center justify-center z-30 transition-all active:scale-95 focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>

            {/* Under-slider dot indicators */}
            <div className="flex items-center gap-2 mt-4 z-20">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setIsPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    currentSlide === idx 
                      ? "w-8 bg-brand-600" 
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Fullscreen interactive image preview */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLightbox(false)}
            className="fixed inset-0 bg-slate-950/98 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-4 sm:p-8"
          >
            {/* Topbar */}
            <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white z-50 max-w-7xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="bg-brand-600 text-white p-2.5 rounded-xl">
                  {selectedItem.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg leading-tight">{selectedItem.title}</h4>
                  <p className="text-xs text-slate-400">{selectedItem.badge} — Evolution Campus Media</p>
                </div>
              </div>
              <button
                onClick={() => setShowLightbox(false)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-3 rounded-full transition-all border border-slate-700 cursor-pointer focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Stage Image */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[75vh] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 mt-12"
            >
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Bottom bar controls */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-white z-50">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="text-xs font-mono font-bold px-3 text-slate-400">
                  {currentSlide + 1} / {slides.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <button
                onClick={() => {
                  setShowLightbox(false);
                  onContactClick();
                }}
                className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Apply / Book Seats Now
              </button>
              
              <a
                href={selectedItem.url}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all border border-slate-700 flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Open Original File
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

