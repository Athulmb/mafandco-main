import React from "react";
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

export default function MAFCoFooter() {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#f3f3f3] via-[#e6f0f5] to-[#14475a] overflow-hidden z-10 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-20">

      {/* Large faint watermark text at the bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center z-0">
        <h1 className="text-[18vw]  md:text-[14vw] xl:text-[16vw] leading-none font-extrabold select-none 
                       text-transparent bg-clip-text 
                       bg-gradient-to-t from-white/5 via-white/50 to-white">
          MAF &amp; CO
        </h1>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full  bg-white rounded-3xl shadow-xl 
                      px-4 sm:px-8 lg:px-12 xl:px-20 py-10 overflow-hidden mb-32 lg:mb-52 ">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">

          {/* Left Side */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            {/* Logo1 */}
            <img 
              src="/logo1.png" 
              alt="MAF & Co" 
              className="w-2/3 sm:w-1/3 lg:w-1/4 h-auto"
            />

            {/* Text */}
            <p className="text-base text-gray-600 leading-relaxed max-w-sm lg:max-w-md">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Is Simply Dummy Text
            </p>

            {/* Social + Email */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between gap-4 sm:gap-6 w-full">
              {/* Social Icons */}
              <div className="flex items-center gap-3 sm:gap-4">
                {[Facebook, Twitter, Youtube, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-800 hover:text-white transition"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Email */}
              <div>
                <p className="text-base sm:text-lg text-gray-500">Catch us here</p>
                <p className="text-lg sm:text-2xl font-medium text-gray-800">
                  info@mafandco.com
                </p>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm sm:text-base text-gray-500 mt-4 sm:mt-0">
              Lorem Ipsum Is Simply Dummy Text
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-10 text-center lg:text-left">

            {/* Links */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 flex-1">
              <div>
                <h4 className="text-base font-semibold text-gray-800 mb-2 sm:mb-5">
                  Essential pages
                </h4>
                <ul className="space-y-2 text-base text-gray-600">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/projects">Projects</a></li>
                  <li><a href="/events">Events</a></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-base text-gray-600">
                  <li><a href="/contacts">Contact Us</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
            </div>

            {/* Logo2 */}
            <img
              src="/logo2.png"
              alt="MAF & Co Secondary Logo"
              className="h-28 sm:h-40 lg:h-40 xl:h-56 w-auto opacity-80 mt-4 lg:mt-0"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 lg:mt-14 flex flex-col sm:flex-row justify-center lg:justify-between items-center border-t border-gray-200 pt-6 gap-4 lg:gap-6 text-center lg:text-left">
          <p className="text-sm text-gray-500">
            Lorem Ipsum Is Simply Dummy Text
          </p>
          <div className="flex gap-4 lg:gap-8 text-sm text-gray-600 justify-center lg:justify-start flex-wrap">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>

      </div>
    </div>
  );
}
