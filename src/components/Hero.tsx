import { motion } from "motion/react";
import { ArrowRight, Award, GraduationCap, CheckCircle2, ShieldCheck, Play } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
  onCoursesClick: () => void;
}

export default function Hero({ onContactClick, onCoursesClick }: HeroProps) {
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

          {/* Graphical Right Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[420px]"
            >
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-brand-500/10 rounded-[2.5rem] filter blur-xl transform scale-105" />

              {/* Main Decorative Card */}
              <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl aspect-[4/5] bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Students Studying at Evolution Career Institute"
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay card for active updates */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="bg-amber-100 text-amber-700 p-3 rounded-xl">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Scholarships</span>
                    <span className="block text-sm sm:text-base font-bold text-slate-800">Up to 100% Fee Waiver</span>
                    <span className="block text-[10px] text-brand-600 font-medium mt-0.5">Based on Admission cum Scholarship Test (ACST)</span>
                  </div>
                </div>
              </div>

              {/* Float Card 1: Live Class Alert */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white py-3 px-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Success Guarantee</span>
                  <span className="block text-xs font-bold text-slate-800">IIT-JEE & NEET Aligned</span>
                </div>
              </motion.div>

              {/* Float Card 2: Interactive doubts */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 top-1/3 bg-white py-3 px-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 hidden sm:flex"
              >
                <div className="bg-brand-100 text-brand-700 p-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mentorship</span>
                  <span className="block text-xs font-bold text-slate-800">Personal Doubts Counter</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
