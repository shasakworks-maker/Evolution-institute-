import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { INITIAL_TESTIMONIALS } from "../mockData";
import { Testimonial } from "../types";
import { Star, MessageSquare, Sparkles, User, Check, AlertCircle } from "lucide-react";

export default function Reviews() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showForm, setShowForm] = useState(false);
  
  // Form State
  const [name, setName] = useState("");
  const [classOrExam, setClassOrExam] = useState("");
  const [achievement, setAchievement] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  
  // Form feedback state
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  // Load reviews from mock data + local storage on component mount
  useEffect(() => {
    const savedReviews = localStorage.getItem("evolution_reviews");
    if (savedReviews) {
      try {
        const parsed = JSON.parse(savedReviews);
        setTestimonials([...parsed, ...INITIAL_TESTIMONIALS]);
      } catch (err) {
        setTestimonials(INITIAL_TESTIMONIALS);
      }
    } else {
      setTestimonials(INITIAL_TESTIMONIALS);
    }
  }, []);

  const handleRatingSelect = (star: number) => {
    setRating(star);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Simple validation
    if (!name.trim()) {
      setFormError("Please enter your name.");
      return;
    }
    if (!classOrExam.trim()) {
      setFormError("Please specify your Class or Target Exam.");
      return;
    }
    if (!comment.trim() || comment.length < 15) {
      setFormError("Please write a constructive testimonial of at least 15 characters.");
      return;
    }

    const newReview: Testimonial = {
      id: `custom-rev-${Date.now()}`,
      name: name.trim(),
      classOrExam: classOrExam.trim(),
      achievement: achievement.trim() ? achievement.trim() : undefined,
      stars: rating,
      comment: comment.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
      })
    };

    // Update list & save custom reviews to local storage
    const currentCustomReviews = testimonials.filter(t => t.id.startsWith("custom-rev-"));
    const updatedCustomReviews = [newReview, ...currentCustomReviews];
    localStorage.setItem("evolution_reviews", JSON.stringify(updatedCustomReviews));

    setTestimonials([newReview, ...testimonials]);
    
    // Reset form
    setFormSuccess(true);
    setName("");
    setClassOrExam("");
    setAchievement("");
    setRating(5);
    setComment("");

    // Auto-hide success banner after 4 seconds
    setTimeout(() => {
      setFormSuccess(false);
      setShowForm(false);
    }, 4000);
  };

  return (
    <section id="reviews" className="py-20 bg-slate-50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 font-mono bg-brand-50 px-3.5 py-1.5 rounded-full">
            STUDENT REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Loved by Students, Trusted by Parents
          </h2>
          <div className="h-1 w-16 bg-brand-600 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Read first-hand reports from alumni and currently enrolled class heads. Submit your own reflection below to join our history registry.
          </p>
        </div>

        {/* Dynamic Add Review Trigger CTA */}
        <div className="flex justify-center mb-12">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-lg shadow-brand-500/10 hover:shadow-brand-500/25 transition-all cursor-pointer focus:outline-none"
              id="write-review-btn"
            >
              <MessageSquare className="h-4.5 w-4.5" /> Write a Testimonial
            </button>
          ) : (
            <button
              onClick={() => {
                setShowForm(false);
                setFormError("");
              }}
              className="flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 font-bold text-sm px-6 py-3.5 rounded-2xl shadow-sm transition-all cursor-pointer focus:outline-none"
            >
              Cancel Form
            </button>
          )}
        </div>

        {/* Testimonial Form Modal/Expansion Card */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-6 sm:p-10 max-w-2xl mx-auto mb-16"
              id="testimonial-form-container"
            >
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-800 mb-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" /> Share Your Learning Experience
              </h3>

              {formSuccess ? (
                <div className="bg-emerald-50 text-emerald-800 border border-emerald-100 p-6 rounded-2xl text-center space-y-3">
                  <div className="bg-emerald-100 text-emerald-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-base">Testimonial Published Successfully!</h4>
                  <p className="text-xs text-emerald-600">
                    Thank you for your valuable response. Your review has been integrated into the feed list.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-6">
                  {formError && (
                    <div className="bg-rose-50 text-rose-800 border border-rose-100 p-4 rounded-xl text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="h-4.5 w-4.5 text-rose-600 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priyanshu Sharma"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Class / Target */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Your Class / Goal *</label>
                      <input
                        type="text"
                        value={classOrExam}
                        onChange={(e) => setClassOrExam(e.target.value)}
                        placeholder="e.g. Class 12 CBSE / JEE Aspirant"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Achievement (Optional) */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Achievement / Score (Optional)</label>
                      <input
                        type="text"
                        value={achievement}
                        onChange={(e) => setAchievement(e.target.value)}
                        placeholder="e.g. 96.2% Boards or AIR 124 NEET"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Star selection */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Star Rating *</label>
                      <div className="flex items-center gap-1.5 py-2.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => handleRatingSelect(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(null)}
                            className="p-1 hover:scale-110 transition-transform cursor-pointer focus:outline-none"
                          >
                            <Star
                              className={`h-6 w-6 ${
                                star <= (hoveredRating ?? rating)
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-slate-200"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Your Testimonial *</label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={4}
                      placeholder="Share detailed thoughts on classrooms, doubt systems, materials, or educators..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-colors resize-none"
                    />
                    <span className="block text-[10px] text-slate-400">Min 15 characters required.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-brand-500/10 hover:shadow-brand-500/25 transition-all cursor-pointer focus:outline-none"
                    id="submit-testimonial-btn"
                  >
                    Submit Testimonial
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {testimonials.map((testimonial) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={testimonial.id}
                className="bg-white rounded-3xl border border-slate-200/50 p-6 sm:p-8 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Star Rating & Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className={`h-4.5 w-4.5 ${
                            sIdx < testimonial.stars
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-100"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono font-medium">
                      {testimonial.date}
                    </span>
                  </div>

                  {/* Quote Paragraph */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                </div>

                {/* Student Avatar Metadata Card */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-slate-100 mt-6">
                  <div className="bg-brand-100 text-brand-700 h-11 w-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 overflow-hidden border border-brand-200">
                    {testimonial.avatarUrl ? (
                      <img
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <User className="h-5 w-5 text-brand-600" />
                    )}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-800 leading-tight">
                      {testimonial.name}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                      {testimonial.classOrExam}
                    </span>
                    {testimonial.achievement && (
                      <span className="inline-block bg-brand-50 text-brand-700 text-[9px] font-extrabold px-2 py-0.5 rounded-md border border-brand-100 mt-1">
                        🏆 {testimonial.achievement}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
