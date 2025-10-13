import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css"; // Keep your hover-slide CSS

const navbarData = {
  logo: { home: "/logo.png", alt: "MAF & Co Properties" },
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Off-Plans", href: "/projects" },
    { label: "Ready to sell", href: "/contact" },

    { label: "Career", href: "/career" },
    { label: "News", href: "/news" },
    { label: "Contact Us", href: "/contact" },
    
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Scroll handler: hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setScrolled(currentScroll > 50);
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <AnimatePresence>
  {showNavbar && !isOpen && (
    <motion.nav

            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // same speed for up & down
            className={`fixed top-0 left-0 w-full z-50 font-lufga-medium transition-all duration-500
              ${scrolled ? "bg-[#215270] py-4 md:py-6 shadow-md text-white" : "bg-transparent py-3 md:py-6 text-white"}`}
          >
            <div className="flex items-center justify-between px-3 sm:px-6 md:px-1 lg:px-20">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={navbarData.logo.home}
                  alt={navbarData.logo.alt}
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex flex-1 justify-center items-center space-x-4 lg:space-x-9 xl:space-x-12 text-sm md:text-xs lg:text-md xl:text-lg">
                {navbarData.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`relative font-lufga-medium ${scrolled ? "text-white" : "text-white"} hover-slide`}
                  >
                    <span className="top">{link.label}</span>
                    <span className="bottom">{link.label}</span>
                  </a>
                ))}
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm lg:text-md xl:text-lg">
                <button
                  onClick={() => navigate("/login")}
                  className="relative overflow-hidden px-5 py-2 rounded-md bg-transparent text-white font-lufga-medium group"
                >
                  <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-[180%]">
                    Join / Log In
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-white font-lufga-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    Join / Log In
                  </span>
                </button>

                <button
                  onClick={() => navigate("/sell")}
                  className={`relative overflow-hidden px-5 py-2 rounded-md border group font-lufga-medium
                    ${scrolled
                      ? "border-black text-white hover:bg-black bg-black hover:text-white"
                      : "border-primary text-white hover:bg-primary bg-primary hover:text-white"
                    }`}
                >
                  <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-[180%]">
                    Sell With Us
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-white font-lufga-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    Sell With Us
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="z-60 relative p-1">
                  {isOpen ? <X size={24} className={scrolled ? "text-white" : "text-white"} /> : <Menu size={24} className={scrolled ? "text-white " : "text-white"} />}
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
     {/* Mobile Overlay with Blur */}
{/* Mobile Overlay with Blur */}
<div
  className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-all duration-500 ease-out ${
    isOpen ? "visible opacity-100" : "invisible opacity-0"
  }`}
  onClick={() => setIsOpen(false)}
/>



      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] bg-primary rounded-l-lg shadow-2xl z-50 transform transition-all duration-500 ease-out md:hidden font-lufga-medium
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img src={navbarData.logo.home} alt={navbarData.logo.alt} className="h-6 w-auto object-contain" />
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-900">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-2">
            {navbarData.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-2 text-white hover:bg-gray-10 rounded-lg transition duration-200 text-sm font-lufga-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 space-y-2 mb-16">
            <button
              onClick={() => {
                navigate("/login");
                handleLinkClick();
              }}
              className="w-full border border-black text-white px-3 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-200 text-sm font-lufga-medium"
            >
              Join / Log In
            </button>
            <button
              onClick={() => {
                navigate("/sell");
                handleLinkClick();
              }}
              className="w-full bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm font-lufga-medium"
            >
              Sell With Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
