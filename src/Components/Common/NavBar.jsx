import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// ✅ Navbar Data
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

    // Disable/enable body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Scroll behavior for hide/show navbar + solid bg
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

    // Close mobile menu when clicking link
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full py-6 z-50 transition-all duration-500
          ${showNavbar ? "translate-y-0" : "-translate-y-full"} 
          ${scrolled ? "bg-[#215270] py-8 shadow-md text-black" : "bg-transparent text-white"}
        `}
            >
                <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-3">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src={navbarData.logo.home}
                            alt={navbarData.logo.alt}
                            className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 justify-center items-center space-x-4 md:space-x-5 lg:space-x-9">
                        {navbarData.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={`relative font-medium text-xs md:text-sm lg:text-[15px] transition duration-300
        ${scrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"}
        ${location.pathname === link.href
                                        ? "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:bottom-[-6px] after:left-0"
                                        : ""
                                    }
      `}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                        <button
                            onClick={() => navigate("/login")}
                            className={`px-3 py-1 md:px-3.5 md:py-1.5 lg:px-5 lg:py-2 text-xs md:text-sm lg:text-base border rounded-md transition duration-300 ${scrolled
                                ? "border-hidden text-black hover:bg-black hover:text-white"
                                : "border-hidden text-white hover:bg-white hover:text-black"
                                }`}
                        >
                            Join / Log In
                        </button>
                        <button
                            onClick={() => navigate("/sell")}
                            className="px-3 py-1 md:px-3.5 md:py-1.5 lg:px-5 lg:py-2 text-xs md:text-sm lg:text-base bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
                        >
                            Sell With Us
                        </button>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="z-60 relative"
                        >
                            {isOpen ? (
                                <X size={28} className={scrolled ? "text-black" : "text-white"} />
                            ) : (
                                <Menu size={28} className={scrolled ? "text-black" : "text-white"} />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-500 ease-out ${isOpen ? "bg-opacity-50 visible" : "bg-opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] bg-white rounded-l-lg shadow-2xl z-50 transform transition-all duration-500 ease-out md:hidden ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
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
                            {navbarData.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className="block px-4 py-3 text-gray-800 font-medium hover:bg-gray-100 rounded-lg transition duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile CTA Buttons */}
                    <div className="p-6 border-t border-gray-200 space-y-3">
                        <button
                            onClick={() => {
                                navigate("/login");
                                handleLinkClick();
                            }}
                            className="w-full border border-black text-black px-4 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-200"
                        >
                            Join / Log In
                        </button>
                        <button
                            onClick={() => {
                                navigate("/sell");
                                handleLinkClick();
                            }}
                            className="w-full bg-black text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200"
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
