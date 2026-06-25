import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, MapPin, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactProps {
  preselectedCourse: string;
  setPreselectedCourse: (course: string) => void;
}

export default function Contact({ preselectedCourse, setPreselectedCourse }: ContactProps) {
  // Form fields state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  // Form handling states
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  // Sync state when preselectedCourse is updated by parent component
  useEffect(() => {
    if (preselectedCourse) {
      setCourse(preselectedCourse);
    }
  }, [preselectedCourse]);

  const validatePhone = (p: string) => {
    const cleaned = p.replace(/\D/g, "");
    return cleaned.length === 10;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name.trim()) {
      setFormError("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(phone)) {
      setFormError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!course) {
      setFormError("Please select an academic or competitive program of interest.");
      return;
    }

    setIsLoading(true);

    // Simulate standard server latency
    setTimeout(() => {
      setIsLoading(false);
      setFormSuccess(true);
      
      // Clear fields
      setName("");
      setEmail("");
      setPhone("");
      setCourse("");
      setMessage("");
      setPreselectedCourse(""); // Reset preselected context
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 font-mono bg-brand-50 px-3.5 py-1.5 rounded-full">
            ADMISSIONS OPEN
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Schedule a Free Diagnostic Session
          </h2>
          <div className="h-1 w-16 bg-brand-600 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Have questions about fees, scholarship tests (ACST), batches, or courses? Walk into our counseling center or query us online today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Quick Contact info & Google Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Direct Inquiry Center
              </h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Connect with our dedicated relationship managers. We reply to all digital inquiries within 2 business hours.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              
              {/* Phone Contacts */}
              <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-100 flex items-start gap-4">
                <div className="bg-brand-100 text-brand-700 p-3 rounded-xl shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-400">PHONE ENQUIRIES</span>
                  <a href="tel:+916390247880" className="block text-base font-extrabold text-slate-800 hover:text-brand-600 transition-colors">
                    +91 63902 47880
                  </a>
                  <span className="text-xs text-slate-400 mt-0.5 block">(Toll-Free Helpline) Support: 8 AM - 8 PM</span>
                </div>
              </div>

              {/* WhatsApp direct */}
              <div className="bg-emerald-50/50 p-4.5 rounded-2xl border border-emerald-100 flex items-start gap-4">
                <div className="bg-emerald-100 text-emerald-700 p-3 rounded-xl shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="flex-grow">
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-emerald-600">WHATSAPP CHAT</span>
                  <span className="block text-base font-bold text-slate-800">Direct Chat with Counselors</span>
                  <a
                    href="https://wa.me/916390247880?text=Hi%20Evolution%20Career%20Institute,%20I%20am%20interested%20in%20learning%20more%20about%20your%20coaching%20classes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl mt-2 transition-colors focus:outline-none"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Physical Address */}
              <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-100 flex items-start gap-4">
                <div className="bg-teal-100 text-teal-700 p-3 rounded-xl shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-400">VISITING ADDRESS</span>
                  <address className="not-italic text-sm font-bold text-slate-700 leading-snug">
                    Evolution Career Institute, <br />
                    Neelkanth complex, near sainik bhojnalaya, <br />
                    Sadat Cantt, Lucknow, Uttar Pradesh
                  </address>
                </div>
              </div>

            </div>

            {/* Google Map Iframe Integration */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg aspect-video w-full relative bg-slate-100">
              <iframe
                title="Evolution Career Institute Campus Location"
                src="https://maps.google.com/maps?q=Neelkanth%20complex,near%20sainik%20bhojnalaya%20sadat%20cantt,lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Admission Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xl">
              <h3 className="font-display font-extrabold text-2xl text-slate-800 mb-2">
                Online Enrolment Inquiry
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-8 font-medium">
                Complete this secure registry form. Our academic director will contact you to align target slots.
              </p>

              {formSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl text-center space-y-4"
                >
                  <div className="bg-emerald-100 text-emerald-700 h-14 w-14 rounded-full flex items-center justify-center mx-auto shadow">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-emerald-800">Inquiry Received Successfully!</h4>
                  <p className="text-xs sm:text-sm text-emerald-600 leading-relaxed max-w-md mx-auto">
                    Thank you! Your slot reservation inquiry has been securely stored in our dashboard. Our senior educational counselor will call you within the next 2 hours.
                  </p>
                  <button
                    onClick={() => setFormSuccess(false)}
                    className="bg-white hover:bg-slate-100 text-slate-600 font-bold text-xs py-2 px-5 rounded-xl border border-slate-200 transition-all cursor-pointer focus:outline-none"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  {formError && (
                    <div className="bg-rose-50 border border-rose-100 text-rose-800 p-4 rounded-xl text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="h-4.5 w-4.5 text-rose-600 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Full Student Name *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Yash Vardhan"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Active Email Address *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. yash@gmail.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone (10 digits) */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">10-Digit Mobile Number *</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold border-r border-slate-200 pr-2.5">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="6390247880"
                          className="w-full bg-white border border-slate-200 rounded-xl pl-16 pr-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Class selection */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Academic Program Of Interest *</label>
                      <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors appearance-none cursor-pointer"
                        style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg fill='%2364748b' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\")", backgroundPosition: "right 12px center", backgroundRepeat: "no-repeat" }}
                      >
                        <option value="">-- Choose Program --</option>
                        <option value="Class 9 - Foundation">Class 9 (Foundation)</option>
                        <option value="Class 10 - Board Elite">Class 10 (Board Prep)</option>
                        <option value="Class 11 - Prime (Science)">Class 11 (JEE / NEET Foundations)</option>
                        <option value="Class 12 - Zenith (Science & Boards)">Class 12 (Board + Rank Boosters)</option>
                        <option value="Competitive Exam Specialists">JEE Mains & Advanced Specialist</option>
                        <option value="Competitive Exam Specialists">NEET-UG Medical Entrance Prep</option>
                        <option value="Other / General counseling">General Career Counselling Session</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Queries / Message (Optional)</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="Share your current scores, goals, or schedule a physical visit..."
                      className="w-full bg-white border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-brand-500/10 hover:shadow-brand-500/25 transition-all cursor-pointer focus:outline-none"
                    id="contact-form-submit"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing Slot...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="h-4.5 w-4.5" /> Send Admission Query
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
