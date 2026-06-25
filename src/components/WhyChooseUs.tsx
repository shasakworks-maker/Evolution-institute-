import { motion } from "motion/react";
import { Users, UserCheck, Award, Clock, Star, BookOpen, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: <Users className="h-7 w-7 text-blue-600" />,
      title: "Experienced Teachers",
      subtitle: "Alumni of IITs & AIIMS",
      description: "Learn under highly certified HODs and academic authors. Our professors bring over a decade of core classroom experience coaching top-tier engineering & medical ranks.",
      color: "bg-blue-50 border-blue-100 text-blue-800"
    },
    {
      icon: <UserCheck className="h-7 w-7 text-emerald-600" />,
      title: "Small Batch Size",
      subtitle: "Max 35 Students per Batch",
      description: "We strictly enforce a limit on students per classroom. This ensures that every individual gets active board presentation time and tailored interactive support.",
      color: "bg-emerald-50 border-emerald-100 text-emerald-800"
    },
    {
      icon: <BookOpen className="h-7 w-7 text-purple-600" />,
      title: "Regular Tests & Analytics",
      subtitle: "Weekly Diagnostic Quizzes",
      description: "Our weekly tests follow exact CBSE board, JEE, and NEET patterns. Parents receive fully automated progress summaries and detail-rich mistake analysis maps.",
      color: "bg-purple-50 border-purple-100 text-purple-800"
    },
    {
      icon: <Clock className="h-7 w-7 text-rose-600" />,
      title: "Personal Guidance Counters",
      subtitle: "1:1 Dedicated Doubt Hours",
      description: "Students never carry doubts home. Our specialized offline doubt solving counters are manned by primary HODs before and after scheduled core batch timings.",
      color: "bg-rose-50 border-rose-100 text-rose-800"
    },
    {
      icon: <Award className="h-7 w-7 text-amber-600" />,
      title: "Proven Best Results",
      subtitle: "Consistent State Rankers",
      description: "Year-on-year, we deliver unmatched conversion rates in medical entry seats and board placements. Our proven syllabus cycle yields elite analytical confidence.",
      color: "bg-amber-50 border-amber-100 text-amber-800"
    }
  ];

  return (
    <section className="py-20 bg-brand-950 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-700/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-700/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-400 font-mono">
            WHY EVOLUTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            The Evolution Competitive Edge
          </h2>
          <div className="h-1 w-16 bg-brand-500 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-brand-200/70 max-w-2xl mx-auto">
            Discover why hundreds of families trust us year after year to cultivate academic capability and build legendary competitive temperaments.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Main Hero block inside grid */}
          <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-brand-900 to-brand-800 text-white rounded-3xl p-8 border border-brand-700 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
              <ShieldCheck className="h-48 w-48" />
            </div>
            
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-brand-700 text-brand-200 text-xs font-semibold py-1 px-3 rounded-full">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> Premium Quality Education
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight">
                No Compromise on Concept Clarity
              </h3>
              <p className="text-sm text-brand-200 leading-relaxed">
                Commercial institutions push thousands of kids into massive auditoriums. At Evolution, we prioritize your student's unique identity. Our mentors mapping ensures no child goes unheard.
              </p>
            </div>

            <div className="pt-8 space-y-3">
              <div className="flex items-center gap-2 text-xs text-brand-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Personalized Daily Study Plans
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Digital Student Attendance Monitors
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Printed Study Materials & Revision Notes
              </div>
            </div>
          </div>

          {/* Grid Blocks */}
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-900/40 hover:bg-brand-900/60 backdrop-blur rounded-3xl p-8 border border-brand-800/80 hover:border-brand-700/80 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className={`p-4 rounded-2xl w-14 h-14 flex items-center justify-center ${item.color} shadow-lg shadow-black/10`}>
                  {item.icon}
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] tracking-wider uppercase font-bold text-brand-400 font-mono">
                    {item.subtitle}
                  </span>
                  <h4 className="text-xl font-bold font-display text-white group-hover:text-brand-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-200/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
