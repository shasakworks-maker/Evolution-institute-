import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/WhyChooseUs";
import Results from "./components/Results";
import Teachers from "./components/Teachers";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [preselectedCourse, setPreselectedCourse] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // account for sticky navbar height
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

  // Callback when user clicks "Enquire Course" on any card
  const handleCourseEnquiry = (courseTitle: string) => {
    setPreselectedCourse(courseTitle);
    scrollToSection("contact");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-brand-600 selection:text-white relative">
      
      {/* Sticky Top Navigation */}
      <Navbar onContactClick={() => scrollToSection("contact")} />

      {/* Main Structural Page Flow */}
      <main className="flex-grow">
        
        {/* 1. Hero Landing Page */}
        <Hero
          onContactClick={() => scrollToSection("contact")}
          onCoursesClick={() => scrollToSection("courses")}
        />

        {/* 2. Why Choose Us (Bento Features) */}
        <WhyChooseUs />

        {/* 3. About Institute (Mission, Vision, Certified Stats) */}
        <About />

        {/* 4. Courses Catalog (Classes 9, 10, 11, 12, competitive options) */}
        <Courses onEnquireClick={handleCourseEnquiry} />

        {/* 5. Toppers Results Hall of Fame */}
        <Results />

        {/* 6. Professional Faculty HODs */}
        <Teachers />

        {/* 7. Gallery Lightbox Grid */}
        <Gallery />

        {/* 8. Interactive Student Testimonial Reviews System */}
        <Reviews />

        {/* 9. Contact Center & Interactive Admissions Form */}
        <Contact
          preselectedCourse={preselectedCourse}
          setPreselectedCourse={setPreselectedCourse}
        />

      </main>

      {/* 10. Information Footer Panel */}
      <Footer />

      {/* Premium Assistive Floating WhatsApp Link widget */}
      <FloatingWhatsApp />

    </div>
  );
}
