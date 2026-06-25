import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COURSES } from "../mockData";
import { BookOpen, Target, Calendar, Sparkles, CheckCircle2 } from "lucide-react";

interface CoursesProps {
  onEnquireClick: (courseTitle: string) => void;
}

export default function Courses({ onEnquireClick }: CoursesProps) {
  const [selectedFilter, setSelectedFilter] = useState<"All" | "Secondary" | "Higher Secondary" | "Competitive Prep">("All");

  const levels = [
    { label: "All Curriculums", value: "All" },
    { label: "Secondary (9th-10th)", value: "Secondary" },
    { label: "Higher Secondary (11th-12th)", value: "Higher Secondary" },
    { label: "Competitive Exams", value: "Competitive Prep" },
  ];

  const filteredCourses = selectedFilter === "All"
    ? COURSES
    : COURSES.filter(course => course.level === selectedFilter);

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-slate-50 to-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 font-mono bg-brand-50 px-3.5 py-1.5 rounded-full">
            OUR CURRICULUMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Academic & Competitive Flagship Programs
          </h2>
          <div className="h-1 w-16 bg-brand-600 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Explore carefully structured programs designed to guide students from foundational subjects up to advanced competitive ranks.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-slate-100 p-1.5 rounded-2xl max-w-2xl mx-auto border border-slate-200">
          {levels.map((level) => (
            <button
              key={level.value}
              onClick={() => setSelectedFilter(level.value as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer focus:outline-none ${
                selectedFilter === level.value
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/10"
                  : "text-slate-600 hover:text-brand-600"
              }`}
            >
              {level.label}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={course.id}
                className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-brand-500/5 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Upper Color Header Accent */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${
                  course.level === "Competitive Prep"
                    ? "from-rose-500 to-amber-500"
                    : course.level === "Higher Secondary"
                    ? "from-brand-600 to-sky-500"
                    : "from-teal-600 to-brand-500"
                }`} />

                <div className="p-6 sm:p-8 flex-grow space-y-6">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                      course.level === "Competitive Prep"
                        ? "bg-rose-50 text-rose-700 border border-rose-100"
                        : "bg-brand-50 text-brand-700 border border-brand-100"
                    }`}>
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                      <Calendar className="h-3.5 w-3.5" /> 1-Year Program
                    </span>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-800 leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed min-h-[50px]">
                      {course.description}
                    </p>
                  </div>

                  {/* Target Exams */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <Target className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-400">TARGETS</span>
                      <span className="text-xs font-bold text-slate-700">{course.target}</span>
                    </div>
                  </div>

                  {/* Syllabus / Subjects Covered */}
                  <div className="space-y-2">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      SUBJECTS COVERED
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.subjects.map((sub) => (
                        <span
                          key={sub}
                          className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-lg font-medium"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      PROGRAM HIGHLIGHTS
                    </span>
                    <ul className="space-y-2">
                      {course.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-600 mt-0.5 shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 border-t border-slate-50 bg-slate-50/50">
                  <button
                    onClick={() => onEnquireClick(course.title)}
                    className="w-full flex items-center justify-center gap-1.5 bg-white hover:bg-brand-600 text-brand-600 hover:text-white border border-brand-200 hover:border-brand-600 text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    <BookOpen className="h-4 w-4" /> Enquire For {course.title.split(" ")[0] || "Course"}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
