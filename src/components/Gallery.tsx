import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../mockData";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Classroom" | "Activities" | "Students">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Classroom", "Activities", "Students"];

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 font-mono bg-brand-50 px-3.5 py-1.5 rounded-full">
            CAMPUS LIFE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Our Learning Spaces & Activities
          </h2>
          <div className="h-1 w-16 bg-brand-600 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Take a look inside our high-tech smart classrooms, fully equipped science laboratories, student forums, and high-energy celebration functions.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-slate-50 p-1.5 rounded-2xl max-w-md mx-auto border border-slate-100 shadow-inner">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat as any);
                setLightboxIndex(null); // Reset lightbox when category changes
              }}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer focus:outline-none ${
                activeCategory === cat
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/10"
                  : "text-slate-500 hover:text-brand-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-100 shadow-md hover:shadow-xl cursor-pointer"
              >
                {/* Main Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-brand-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white z-10">
                  <div className="flex justify-end">
                    <span className="bg-white/20 backdrop-blur text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/20">
                      {item.category}
                    </span>
                  </div>
                  <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display font-bold text-base leading-tight">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs text-brand-300 font-semibold uppercase tracking-wider">
                      <Maximize2 className="h-3.5 w-3.5" /> View Image
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Popups */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredItems[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer focus:outline-none z-20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer focus:outline-none z-20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Frame */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="relative max-w-4xl max-h-[70vh] w-full flex items-center justify-center z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  className="rounded-2xl max-w-full max-h-[70vh] object-contain shadow-2xl border-4 border-white/10"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Description Footer */}
              <div className="text-center mt-6 text-white max-w-md space-y-2 z-10" onClick={(e) => e.stopPropagation()}>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-brand-400 font-mono">
                  <Sparkles className="h-3.5 w-3.5" /> {filteredItems[lightboxIndex].category}
                </span>
                <h4 className="font-display font-bold text-lg sm:text-xl">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <span className="block text-xs text-slate-400 font-medium">
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
