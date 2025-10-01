import React from "react";
import { Home, ArrowLeft } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 text-center">
      
      {/* Main Wrapper */}
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* 404 Text */}
        <h1 className="text-[120px] sm:text-[160px] lg:text-[200px] font-extrabold leading-none 
                       bg-gradient-to-r from-[#4DAEC1] to-[#0A374E] text-transparent bg-clip-text drop-shadow-md">
          404
        </h1>
        
        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-6 mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
          The page you are looking for doesn’t exist or has been moved.  
          Please check the URL or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 bg-primary hover:bg-black text-white px-6 py-3 rounded-full transition-colors duration-200 text-sm sm:text-base font-medium"
          >
            <Home className="w-5 h-5" />
            Go Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-primary hover:text-teal-700 transition-colors duration-200 group text-sm sm:text-base font-medium px-6 py-3"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
