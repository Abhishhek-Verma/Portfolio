import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      // Check if page is scrolled for navbar styling
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white shadow-md py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center mr-3">
            <span className="font-poppins font-bold text-white text-lg">A</span>
          </div>
          <h1 className={`text-xl font-merriweather font-bold ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            Abhishek Verma
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link font-inter font-medium text-sm relative px-1 py-2 ${
                scrolled 
                  ? activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary" 
                  : activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-gray-800 hover:text-primary"
              }`}
            >
              {item.name}
              <span className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${
                activeSection === item.href.slice(1) ? "w-full" : "w-0"
              }`}></span>
            </a>
          ))}
        </motion.div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            className={`focus:outline-none ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-white shadow-lg ${mobileMenuOpen ? "block" : "hidden"}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-2 px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-inter font-medium py-2 text-sm transition-colors duration-300 ${
                activeSection === item.href.slice(1) ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
