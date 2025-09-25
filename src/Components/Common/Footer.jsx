import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

// Custom "X" icon
const XIcon = ({ size = 28, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    <path
      d="M4 4L20 20M20 4L4 20"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

const Footer = () => {
  const [animateLetters, setAnimateLetters] = useState(false);

  useEffect(() => {
    setAnimateLetters(true);
  }, []);

  const navigationLinks = [
    { title: "Home", href: "/", active: true },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Projects", href: "/project" },
  ];
  const secondaryLinks = [
    { title: "Project Single", href: "/single-page" },
    { title: "Blog Single", href: "blog-single" },
    { title: "Contact", href: "/contact" },
    { title: "404", href: "*" },
    { title: "Privacy Policy", href: "/privacy-policy" },
  ];
  const legalLinks = [
    { title: "Term & Condition", href: "#" },
    { title: "Licence", href: "#" },
    { title: "Changelog", href: "#" },
    { title: "Instructions", href: "#" },
    { title: "Style Guide", href: "#" },
  ];

  // Colors
  const bgTint = "#F6F4EC";
  const tileTint = "#F2F0E9";
  const darkInk = "#24342E";
  const accent = "#961c1f";

  return (
    <footer className="py-12 sm:py-16" style={{ backgroundColor: bgTint }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">

        



        {/* 🔹 Middle Section */}
        <div className="mb-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Link block - Left half */}
            <div
              className="rounded-xl p-6 sm:p-8 h-full"
              style={{ backgroundColor: tileTint }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 text-sm sm:text-base">
                {/* Primary */}
                <div className="space-y-2 sm:space-y-3">
                  {navigationLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className={`block ${link.active ? "font-medium" : "hover:opacity-80"
                        }`}
                      style={{ color: link.active ? accent : darkInk }}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {secondaryLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="block hover:opacity-80"
                      style={{ color: darkInk }}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
                {/* Legal */}
                <div className="space-y-2 sm:space-y-3">
                  {legalLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="block hover:opacity-80"
                      style={{ color: darkInk }}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social tiles - Right half */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 h-full">
              {[
                { key: "fb", node: <Facebook size={32} />, href: "#" },
                { key: "ig", node: <Instagram size={32} />, href: "#" },
                { key: "li", node: <Linkedin size={32} />, href: "#" },
                { key: "x", node: <XIcon size={32} />, href: "#" },
              ].map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="rounded-xl flex items-center justify-center h-full py-6 transition-colors duration-300"
                  style={{ 
                    backgroundColor: tileTint, 
                    color: darkInk 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = darkInk;
                  }}
                >
                  {item.node}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Bottom Section */}
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm sm:text-base">
            <div style={{ color: `${darkInk}B3` }}>
              Copyright 2025 Gulf. All rights reserved.
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;