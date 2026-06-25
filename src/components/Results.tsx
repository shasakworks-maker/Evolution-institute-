import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RESULTS, BATCH_RESULTS } from "../mockData";
import { Award, Sparkles, TrendingUp, Landmark, BookOpen, GraduationCap } from "lucide-react";

export default function Results() {
  const [activeBatchId, setActiveBatchId] = useState("b12");

  const stats = [
    { label: "JEE Selections", val: "185+", desc: "IITs & NITs Admissions", icon: <TrendingUp className="h-5 w-5 text-emerald-600" /> },
    { label: "NEET Selections", val: "112+", desc: "AIIMS & Top Gov Colleges", icon: <Award className="h-5 w-5 text-rose-600" /> },
    { label: "Class 12 Boards", val: "94.2%", desc: "Batch Average Score", icon: <Landmark className="h-5 w-5 text-blue-600" /> }
  ];

  const activeBatch = BATCH_RESULTS.find(b => b.id === activeBatchId);

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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02, border: "1px solid var(--color-brand-300)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                opacity: { duration: 0.5, delay: idx * 0.08 },
                y: { type: "spring", stiffness: 300, damping: 20, delay: idx * 0.04 }
              }}
              className="bg-slate-50 rounded-3xl border border-slate-200/60 p-5 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 group cursor-pointer"
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

        {/* Batch Achievements Sub-Section */}
        <div className="mt-20 mb-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="h-px bg-slate-100 w-full mb-12" />
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 font-mono bg-brand-50 px-3.5 py-1.5 rounded-full inline-block">
            BATCH-WISE EXCELLENCE
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
            Academic Success: Batch 2025–26
          </h3>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Witness our young prodigies exceeding national board benchmarks in core scientific and literary evaluations.
          </p>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
            {BATCH_RESULTS.map((batch) => (
              <button
                key={batch.id}
                onClick={() => setActiveBatchId(batch.id)}
                className={`relative px-5 py-2.5 rounded-xl font-display font-bold text-sm transition-all focus:outline-none ${
                  activeBatchId === batch.id
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/80"
                }`}
              >
                {activeBatchId === batch.id && (
                  <motion.div
                    layoutId="activeBatchTab"
                    className="absolute inset-0 bg-brand-600 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  {batch.batchName.replace(" Batch (2025–26)", "")}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Batch grid display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBatchId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          >
            {activeBatch?.students.map((student) => {
              const initials = student.name
                .replace(/^(Mohd\.|Mr\.|Mrs\.|Dr\.)\s+/gi, "")
                .split(/\s+/)
                .map(n => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2);

              return (
                <motion.div
                  key={student.name}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="bg-slate-50/50 rounded-2xl border border-slate-200/60 p-5 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-brand-50 to-brand-100/60 border border-brand-200/40 flex items-center justify-center text-brand-700 font-display font-black text-xs shrink-0 group-hover:from-brand-600 group-hover:to-brand-700 group-hover:text-white transition-all duration-300">
                        {initials}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-brand-600 transition-colors">
                          {student.name}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-mono uppercase">
                          STUDENT ACHIEVER
                        </p>
                      </div>
                    </div>

                    {/* Scores Tag Stack */}
                    <div className="space-y-2">
                      {student.scores.map((scoreObj, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100 group-hover:border-brand-100/40 transition-all duration-300"
                        >
                          <span className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                            <BookOpen className="h-3 w-3 text-brand-500 shrink-0" />
                            {scoreObj.subject}
                          </span>
                          <span className="text-xs font-black text-brand-700 bg-brand-50 border border-brand-100/50 px-2 py-0.5 rounded-lg">
                            {scoreObj.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

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

