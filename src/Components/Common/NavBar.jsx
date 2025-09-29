import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navbarData = {
  logo: {
    home: "/logo.png",
    alt: "MAF & Co Properties",
  },
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Events", href: "/events" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-lufga font-medium
        ${showNavbar ? "translate-y-0" : "-translate-y-full"} 
        ${scrolled ? "bg-[#215270] py-4 md:py-6 shadow-md text-black" : "bg-transparent py-3 md:py-6 text-white"}
        `}
      >
        <div className="flex items-center justify-between px-3 sm:px-6 md:px-10 lg:px-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={navbarData.logo.home}
              alt={navbarData.logo.alt}
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-4 lg:space-x-14 text-sm lg:text-md xl:text-lg">
            {navbarData.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`relative transition duration-300 font-semibold
                  ${scrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"}
                  ${
                    location.pathname === link.href
                      ? "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:bottom-[-8px] after:left-0"
                      : ""
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm lg:text-md xl:text-lg">
            <button
              onClick={() => navigate("/login")}
              className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 border font-semibold rounded-md transition duration-300
                ${scrolled
                  ? "border-hidden text-black hover:bg-black hover:text-white"
                  : "border-hidden text-white hover:bg-white hover:text-black"
                }`}
            >
              Join / Log In
            </button>
            <button
              onClick={() => navigate("/sell")}
              className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-[#215270] text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
            >
              Sell With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="z-60 relative p-1">
              {isOpen ? (
                <X size={24} className={scrolled ? "text-black" : "text-white"} />
              ) : (
                <Menu size={24} className={scrolled ? "text-black" : "text-white"} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-500 ease-out ${
          isOpen ? "bg-opacity-50 visible" : "bg-opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] bg-white rounded-l-lg shadow-2xl z-50 transform transition-all duration-500 ease-out md:hidden font-lufga font-medium ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img
            src={navbarData.logo.home}
            alt={navbarData.logo.alt}
            className="h-6 w-auto object-contain"
          />
          <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
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
                className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-lg transition duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 space-y-2">
            <button
              onClick={() => {
                navigate("/login");
                handleLinkClick();
              }}
              className="w-full border border-black text-black px-3 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-200 text-sm"
            >
              Join / Log In
            </button>
            <button
              onClick={() => {
                navigate("/sell");
                handleLinkClick();
              }}
              className="w-full bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm"
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
