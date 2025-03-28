import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { initializeSmoothScroll } from "./lib/smoothScroll";

function App() {
  // Initialize smooth scroll
  useEffect(() => {
    initializeSmoothScroll();
  }, []);

  return (
    <div className="bg-dark text-light font-inter overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
