import { motion } from "motion/react";
import { RESULTS } from "../mockData";
import { Award, ShieldAlert, Sparkles, TrendingUp, Landmark } from "lucide-react";

export default function Results() {
  const stats = [
    { label: "JEE Selections", val: "185+", desc: "IITs & NITs Admissions", icon: <TrendingUp className="h-5 w-5 text-emerald-600" /> },
    { label: "NEET Selections", val: "112+", desc: "AIIMS & Top Gov Colleges", icon: <Award className="h-5 w-5 text-rose-600" /> },
    { label: "Class 12 Boards", val: "94.2%", desc: "Batch Average Score", icon: <Landmark className="h-5 w-5 text-blue-600" /> }
  ];

  return (
    <section id="results" className="py-20 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 font-mono bg-brand-50 px-3.5 py-1.5 rounded-full">
            OUR CHAMPIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Hall of Fame: Our Toppers of 2025
          </h2>
          <div className="h-1 w-16 bg-brand-600 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Hard work meets precise mentoring. Celebrate our top performers who conquered the toughest competitive and board hurdles under expert guidance.
          </p>
        </div>

        {/* High-Impact Stat Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4 hover:border-brand-100 transition-colors"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm shrink-0">
                {stat.icon}
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">{stat.val}</span>
                <span className="block text-xs font-bold text-slate-700">{stat.label}</span>
                <span className="block text-[11px] text-slate-400">{stat.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESULTS.map((record, idx) => (
            <motion.div
              key={record.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl border border-slate-200/60 p-5 flex flex-col justify-between hover:shadow-xl hover:shadow-brand-500/5 hover:border-brand-200 transition-all duration-300 group"
            >
              {/* Image with decorative border */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-5 border-2 border-white shadow bg-slate-200">
                <img
                  src={record.imageUrl}
                  alt={record.studentName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Winner ribbon badge overlay */}
                <div className="absolute top-3 right-3 bg-brand-600 text-white p-1.5 rounded-xl shadow-md">
                  <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-12 text-white">
                  <span className="block text-[10px] tracking-wider uppercase font-bold text-brand-300 font-mono">
                    {record.exam}
                  </span>
                  <span className="block text-base font-bold font-display leading-tight mt-0.5">
                    {record.studentName}
                  </span>
                </div>
              </div>

              {/* Achievement Badge Content */}
              <div className="space-y-3">
                <div className="bg-brand-50 hover:bg-brand-100 border border-brand-100 px-3.5 py-2.5 rounded-xl text-center transition-colors">
                  <span className="block text-[9px] uppercase font-bold text-brand-500 tracking-wider">RESULT ACHIEVEMENT</span>
                  <span className="block text-sm font-extrabold text-brand-800 font-display mt-0.5">
                    {record.score}
                  </span>
                </div>
                
                <span className="block text-center text-[10px] text-slate-400 font-mono">
                  Batch Year: Class of {record.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Celebrating message block */}
        <div className="mt-12 bg-gradient-to-r from-brand-50 to-sky-50 rounded-2xl border border-brand-100/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2.5 rounded-xl shadow-sm text-brand-600 hidden sm:block">
              <Sparkles className="h-6 w-6 text-brand-500" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-800 font-display">Are you ready to join our league of rankers?</h4>
              <p className="text-xs text-slate-500">Every topper's journey started with a single step. Claim your career diagnostic test today.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-brand-500/10 hover:shadow-brand-500/25 transition-all text-center shrink-0 w-full sm:w-auto focus:outline-none"
          >
            Claim Free Trial Class
          </a>
        </div>

      </div>
    </section>
  );
}
