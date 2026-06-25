import { motion } from "motion/react";
import { Compass, Target, HeartHandshake, ShieldCheck } from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: <Target className="h-6 w-6 text-brand-600" />,
      title: "Our Mission",
      description: "To deliver rigorous, concept-driven academic education that bridges the gap between high school learning and advanced competitive testing, empowering students to secure top ranks.",
    },
    {
      icon: <Compass className="h-6 w-6 text-teal-600" />,
      title: "Our Vision",
      description: "To become India's most trusted learning ecosystem, known for conceptual clarity, highly ethical teaching practices, individual growth mapping, and transformative career building.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-rose-600" />,
      title: "Our Values",
      description: "Empathetic mentoring, transparency in feedback, absolute commitment to standard curriculum delivery, and inclusive progress metrics for students of all learning speeds.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Visual Collage */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-100 rounded-2xl z-0" />
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80"
                alt="Students learning in library"
                className="rounded-3xl shadow-xl w-full h-[360px] object-cover relative z-10 border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg relative z-20 flex items-center gap-4 -mt-8 mx-4 sm:mx-8"
            >
              <div className="bg-brand-800 text-brand-100 p-3 rounded-xl">
                <ShieldCheck className="h-6 w-6 text-brand-400" />
              </div>
              <div>
                <span className="block text-xl font-bold font-display">100% Verified</span>
                <span className="block text-xs text-brand-200">ISO 9001:2015 Certified Coaching Quality Standards</span>
              </div>
            </motion.div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-brand-600 font-mono">
                ABOUT THE INSTITUTE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
                Shaping the Future of Classroom Education
              </h2>
              <div className="h-1 w-16 bg-brand-600 rounded-full mt-2" />
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Established with the singular vision of making premium quality education accessible and highly effective, **Evolution Career Institute** has pioneered standard board & competitive preparations. Our pedagogical ecosystem is built on simple core fundamentals: pristine conceptual clarity, continuous diagnostic monitoring, and empathetic support.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We understand that every aspirant has a unique learning arc. That's why we maintain optimal teacher-to-student ratios, avoiding overcrowded commercial classrooms. Our classrooms are centers of curiosity where complex science theories are broken down into digestible real-world applications.
            </p>

            {/* Values Grid */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)" }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-brand-100 hover:bg-brand-50 transition-colors duration-300"
                >
                  <div className="mb-3 bg-white p-2.5 rounded-xl inline-block shadow-sm">
                    {val.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-800 mb-1">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
