import React from "react";
import { GraduationCap, Phone, Mail, MapPin, Clock, Facebook, Youtube, Twitter, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-brand-950 text-slate-300 border-t border-brand-900/60 font-sans">
      
      {/* Upper Footer: Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-3 group focus:outline-none">
              <div className="h-12 w-12 rounded-xl overflow-hidden shadow-md border border-brand-800 bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
                <img
                  src="https://cdn.phototourl.com/free/2026-06-25-82bae43a-8f92-4ade-9e90-b636f5ee4df9.jpg"
                  alt="Evolution Career Institute Logo"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white flex items-center leading-none">
                  EVOLUTION
                </span>
                <span className="block font-sans text-[10px] font-semibold tracking-wider text-brand-400 uppercase mt-0.5">
                  CAREER INSTITUTE
                </span>
              </div>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Evolution Career Institute is Delhi's premium tutoring institution. We guide science, engineering, and medical aspirants toward deep logical clarity and outstanding ranks.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-900 hover:bg-brand-800 text-slate-300 hover:text-white p-2.5 rounded-xl border border-brand-800 transition-colors focus:outline-none"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-900 hover:bg-brand-800 text-slate-300 hover:text-white p-2.5 rounded-xl border border-brand-800 transition-colors focus:outline-none"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-900 hover:bg-brand-800 text-slate-300 hover:text-white p-2.5 rounded-xl border border-brand-800 transition-colors focus:outline-none"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-brand-400 transition-colors">
                  About Institute
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleLinkClick(e, "#courses")} className="hover:text-brand-400 transition-colors">
                  Programs & Fees
                </a>
              </li>
              <li>
                <a href="#teachers" onClick={(e) => handleLinkClick(e, "#teachers")} className="hover:text-brand-400 transition-colors">
                  Our Faculty HODs
                </a>
              </li>
              <li>
                <a href="#results" onClick={(e) => handleLinkClick(e, "#results")} className="hover:text-brand-400 transition-colors">
                  Topper Ranks
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleLinkClick(e, "#reviews")} className="hover:text-brand-400 transition-colors">
                  Student Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Our Key Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                Class 9 - Foundation
              </li>
              <li>
                Class 10 - Board Elite
              </li>
              <li>
                Class 11 - JEE & NEET Foundations
              </li>
              <li>
                Class 12 - Zenith (Board + CBT)
              </li>
              <li>
                IIT-JEE & NEET-UG Specialist
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Support */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Help Desk Contact
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <Phone className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919876543210" className="block text-slate-300 hover:text-white font-semibold">
                    +91 98765 43210
                  </a>
                  <span className="text-[10px] block">Corporate Counselling Helpline</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Mail className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@evolutioninstitute.com" className="block text-slate-300 hover:text-white font-semibold truncate">
                    info@evolutioninstitute.com
                  </a>
                  <span className="text-[10px] block">Official Email Address</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Clock className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300 font-semibold">
                    8:00 AM - 8:00 PM
                  </span>
                  <span className="text-[10px] block">Open Monday to Sunday</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer: Copyright and certification */}
      <div className="border-t border-brand-900/40 bg-brand-950/80 text-xs text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <span className="block font-medium">
              &copy; {currentYear} Evolution Career Institute. All Rights Reserved.
            </span>
            <span className="block text-[10px] text-slate-500">
              Developed & maintained for elite CBSE, IIT-JEE and NEET-UG coaching excellence.
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-slate-500 border border-brand-900/50 py-1.5 px-3 rounded-lg bg-brand-950/40">
            <ShieldCheck className="h-4.5 w-4.5 text-brand-500 shrink-0" />
            <span>Secured SSL Certified Client Application</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
