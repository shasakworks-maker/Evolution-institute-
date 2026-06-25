import { motion } from "motion/react";
import { TEACHERS } from "../mockData";
import { Award, GraduationCap, Clock, CheckCircle } from "lucide-react";

export default function Teachers() {
  return (
    <section id="teachers" className="py-20 bg-slate-50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 font-mono bg-brand-50 px-3.5 py-1.5 rounded-full">
            OUR MENTORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Learn from India's Finest Faculty HODs
          </h2>
          <div className="h-1 w-16 bg-brand-600 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Our teachers aren't just lecturers; they are authors, national rankers, and passionate mentors committed to unlocking your analytical potential.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEACHERS.map((teacher, idx) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02, borderColor: "var(--color-brand-200)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                opacity: { duration: 0.5, delay: idx * 0.08 },
                y: { type: "spring", stiffness: 300, damping: 20, delay: idx * 0.04 }
              }}
              className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-500/5 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Elegant Initials Badge instead of Photo */}
                <div className="relative p-6 pb-2 flex items-center justify-between">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-tr from-brand-50 to-brand-100/80 text-brand-700 font-display font-black text-lg border border-brand-200/50 shadow-sm group-hover:from-brand-600 group-hover:to-brand-700 group-hover:text-white transition-all duration-300">
                    {teacher.name
                      .replace(/^(Er\.|Mr\.|Mrs\.|Dr\.|Md\.)\s+/gi, "")
                      .replace(/\./g, "")
                      .split(/\s+/)
                      .filter(Boolean)
                      .map(n => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2) || "TR"}
                  </div>
                  
                  {/* Specialized Label */}
                  <div className="bg-slate-100 text-slate-700 border border-slate-200/50 px-3 py-1 rounded-xl text-[10px] font-bold tracking-wider uppercase font-mono group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-200/60 transition-colors duration-300">
                    {teacher.subject}
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-slate-800 leading-tight group-hover:text-brand-600 transition-colors">
                      {teacher.name}
                    </h3>
                    <span className="block text-xs font-semibold text-brand-600 mt-0.5">
                      {teacher.role}
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-slate-50 border border-slate-100 p-2 rounded-xl flex items-center gap-1.5">
                      <GraduationCap className="h-3.5 w-3.5 text-brand-600 shrink-0" />
                      <span className="text-slate-500 font-medium truncate" title={teacher.education}>
                        {teacher.education.split(",")[0] || teacher.education}
                      </span>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 p-2 rounded-xl flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-teal-600 shrink-0" />
                      <span className="text-slate-500 font-semibold">{teacher.experience} Exp</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-500 leading-relaxed min-h-[64px]">
                    {teacher.bio}
                  </p>
                </div>
              </div>

              {/* Verified Badge Footer */}
              <div className="px-6 py-4 border-t border-slate-50 bg-slate-50/50 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Verified Educator</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
