import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// ✅ Navbar Data
const navbarData = {
  logo: {
    home: "/logo.png",
    default: "/logo1.png",
    alt: "Gulf Logo",
  },
  links: [
    { label: "Home", href: "/" },
    {
      label: "Projects",
      dropdown: [
        { label: "Project 1", href: "#" },
        { label: "Project 2", href: "#" },
        { label: "Project 3", href: "#" },
      ],
    },
    { label: "Blog", href: "#" },
    { label: "Service", href: "#" },
    { label: "About", href: "/about" },
  ],
  cta: {
    label: "Get Started",
    href: "/contact",
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getstart = () => {
    navigate(navbarData.cta.href);
  };

  // Disable/enable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking on links
  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  // ✅ Logo logic based on path and scroll
  const currentLogo =
    location.pathname === "/"
      ? navbarData.logo.home // Always use home logo on homepage
      : scrolled
      ? navbarData.logo.home // Use home logo when scrolled (navbar with bg)
      : navbarData.logo.default; // Use default logo when transparent

  // ✅ Determine icon color based on page and scroll state
  const getIconColor = () => {
    if (location.pathname === "/") {
      return "text-black"; // Black on homepage
    }
    return "text-white"; // White on all other pages
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500
          ${showNavbar ? "translate-y-0" : "-translate-y-full"} 
          ${scrolled ? "bg-[#eaeaea] shadow-md" : "bg-transparent"}
        `}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-1">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <img
              src={currentLogo}
              alt={navbarData.logo.alt}
              className="h-12 w-auto sm:h-14 md:h-12 lg:h-24 object-contain transition-all duration-500"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center bg-[#636363] rounded-md px-2 py-1 space-x-2">
            {navbarData.links.map((link, index) =>
              link.dropdown ? (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center px-4 py-2 font-medium text-white rounded-md hover:text-light transition duration-300">
                    {link.label}
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transform transition-transform duration-500 ${getIconColor()} ${
                        dropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full mt-2 w-[370px] h-[300px] bg-secondary text-gray-800 rounded-xl shadow-xl z-50 
                      transform transition-all duration-500 ease-out
                      ${
                        dropdownOpen
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 translate-y-6 invisible"
                      }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="block px-6 py-4 text-lg hover:bg-gray-200 hover:text-button transition duration-300"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  className="px-4 py-2 font-medium rounded-md text-white hover:text-light transition duration-300"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={getstart}
              className="relative overflow-hidden px-6 py-2 rounded-md font-medium group bg-button"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-md transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>
              <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
                {navbarData.cta.label}
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-white font-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                {navbarData.cta.label}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-button hover:text-background z-60 relative"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-500 ease-out ${
          isOpen ? 'bg-opacity-50 visible' : 'bg-opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] bg-secondary rounded-l-lg shadow-2xl z-50 transform transition-all duration-500 ease-out md:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{
          transitionTimingFunction: isOpen ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'cubic-bezier(0.55, 0.06, 0.68, 0.19)'
        }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <img
            src={navbarData.logo.home}
            alt={navbarData.logo.alt}
            className="h-8 w-auto object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6 px-6">
            <div className="space-y-2">
              {navbarData.links.map((link, index) =>
                link.dropdown ? (
                  <div key={index} className="space-y-1">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full text-left px-4 py-3 text-gray-800 font-medium hover:bg-gray-100 rounded-lg flex justify-between items-center transition duration-200"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          dropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="pl-4 space-y-1">
                        {link.dropdown.map((item, i) => (
                          <a
                            key={i}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition duration-200"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-gray-800 font-medium hover:bg-gray-100 rounded-lg transition duration-200"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="p-6 border-t border-gray-200">
            <button 
              onClick={() => {
                getstart();
                handleLinkClick();
              }}
              className="w-full bg-button hover:bg-opacity-90 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              {navbarData.cta.label}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;