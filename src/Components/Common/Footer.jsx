import React from "react";
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

export default function MAFCoFooter() {
  return (<div className="relative w-full h-screen bg-gradient-to-b from-[#f6fafc] via-[#e6f0f5] to-[#14475a] overflow-hidden z-10 flex items-start justify-center">
    {/* Large faint watermark text at the bottom */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center z-0">
  <h1 className="hidden lg:block text-[16vw] leading-none font-extrabold select-none 
                 text-transparent bg-clip-text 
                 bg-gradient-to-t from-white/5 via-white/50 to-white">
    MAF &amp; CO
  </h1>
</div>

  
    {/* Card */}
    <div className="relative z-10 w-4/5 bg-white rounded-3xl shadow-xl px-10 sm:px-14 lg:px-20 py-10 overflow-hidden translate-y-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* Left Side */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Logo1 smaller */}
            <img 
              src="/logo1.png" 
              alt="MAF & Co" 
              className="w-1/3 h-auto"
            />

            {/* Text */}
            <p className="text-base text-gray-600 leading-relaxed max-w-lg">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Is Simply Dummy Text
            </p>

            {/* Social + Email */}
            <div className="flex items-center justify-between flex-wrap gap-8">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {[Facebook, Twitter, Youtube, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-800 hover:text-white transition"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>

              {/* Email */}
              <div>
                <p className="text-lg text-gray-500">Catch us here</p>
                <p className="text-2xl font-medium text-gray-800">
                  info@mafandco.com
                </p>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-base text-gray-500">
              Lorem Ipsum Is Simply Dummy Text
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Links */}
            <div className="grid grid-cols-2 gap-8 flex-1">
              <div>
                <h4 className="text-base font-semibold text-gray-800 mb-5">
                  Essential pages
                </h4>
                <ul className="space-y-3 text-base text-gray-600">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/projects">Projects</a></li>
                  <li><a href="events">Events</a></li>
                </ul>
              </div>
              <div className="pt-10 lg:pt-8">
                <ul className="space-y-3 text-base text-gray-600">
                  <li><a href="/contacts">Contact Us</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
            </div>

            {/* Logo2 inside right section, right-center */}
            <img
              src="/logo2.png"
              alt="MAF & Co Secondary Logo"
              className="h-72 w-auto opacity-80"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-8 gap-6">
          <p className="text-sm text-gray-500">
            Lorem Ipsum Is Simply Dummy Text
          </p>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
