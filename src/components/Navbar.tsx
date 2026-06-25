import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, GraduationCap, Phone, Sparkles } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Teachers", href: "#teachers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Results", href: "#results" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      setIsScrolled(window.scrollY > 20);

      // Active section finder
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3 shadow-md"
            : "bg-white/90 md:bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#home");
              }}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative h-12 w-12 rounded-xl overflow-hidden shadow-md shadow-brand-500/20 group-hover:scale-105 transition-all duration-300 border border-brand-100 bg-white flex items-center justify-center shrink-0">
                <img
                  src="https://cdn.phototourl.com/free/2026-06-25-82bae43a-8f92-4ade-9e90-b636f5ee4df9.jpg"
                  alt="Evolution Career Institute Logo"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-brand-900 flex items-center gap-1.5 leading-none">
                  EVOLUTION
                </span>
                <span className="block font-sans text-[10px] md:text-xs font-semibold tracking-wider text-brand-600 uppercase mt-0.5">
                  CAREER INSTITUTE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`font-sans text-sm font-medium tracking-wide transition-colors relative py-2 focus:outline-none ${
                      isActive
                        ? "text-brand-600 font-semibold"
                        : "text-slate-600 hover:text-brand-600"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-200 animate-pulse-subtle">
                <Sparkles className="h-3 w-3 text-amber-500" /> Admissions Open
              </span>
              <button
                onClick={onContactClick}
                className="flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-4.5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-200"
                id="nav-enroll-btn"
              >
                <Phone className="h-4 w-4" /> Enquire Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                Admissions Open
              </span>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="h-10 w-10 rounded-lg overflow-hidden shadow-sm border border-slate-200 bg-white flex items-center justify-center shrink-0">
                      <img
                        src="https://cdn.phototourl.com/free/2026-06-25-82bae43a-8f92-4ade-9e90-b636f5ee4df9.jpg"
                        alt="Evolution Career Institute Logo"
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="font-display font-bold text-lg text-brand-900 tracking-tight">
                      Evolution Institute
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 focus:outline-none"
                    id="mobile-drawer-close"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-4 py-8">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }}
                        className={`text-base font-semibold tracking-wide py-2 transition-colors ${
                          isActive
                            ? "text-brand-600 pl-2 border-l-4 border-brand-600"
                            : "text-slate-600 hover:text-brand-600"
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                <div className="flex items-center justify-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-semibold p-3 rounded-xl border border-amber-200">
                  <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
                  Academic Session 2026-27 Open!
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onContactClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brand-500/10 focus:outline-none"
                  id="mobile-drawer-cta"
                >
                  <Phone className="h-5 w-5" /> Quick Inquiry
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
