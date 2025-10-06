import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🎥 Local video list
const videos = [
  "/Introducing Grand Polo Club & Resort by Emaar.mp4",
  "/Introducing Grand Polo Club & Resort by Emaar.mp4",
  "/Introducing Grand Polo Club & Resort by Emaar.mp4",
];

// 🧮 Mortgage Calculator Component
const MortgageCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(1200000);
  const [loanTerm, setLoanTerm] = useState(25);
  const [downPayment, setDownPayment] = useState(180000);
  const [interestRate, setInterestRate] = useState(3.75);
  
  // Calculate mortgage
  const loanAmount = propertyValue - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="relative -mt-44 w-full z-10 px-3 sm:px-6 md:px-8 lg:px-20">
      <motion.div
        className="bg-white rounded-[60px]  py-10 px-28"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-xl font-bold mb-8 text-left">Mortgage Calculator</h2>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)_1px_minmax(0,1fr)] gap-8 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Property Value */}
            <div>
              <label className="block text-xs font-semibold mb-3 text-gray-600 tracking-wide">PROPERTY VALUE (AED)</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3C78]"
                />
                <button 
                  onClick={() => setPropertyValue(prev => Math.min(prev + 50000, 200000000))}
                  className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-lg font-bold transition"
                >
                  +
                </button>
                <button 
                  onClick={() => setPropertyValue(prev => Math.max(prev - 50000, 300000))}
                  className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-lg font-bold transition"
                >
                  −
                </button>
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                <span>300000 AED</span>
                <span>200000000 AED</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <label className="block text-xs font-semibold mb-3 text-gray-600 tracking-wide">DOWN PAYMENT (AED)</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3C78]"
                />
                <button 
                  onClick={() => setDownPayment(prev => Math.min(prev + 10000, 1000000))}
                  className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-lg font-bold transition"
                >
                  +
                </button>
                <button 
                  onClick={() => setDownPayment(prev => Math.max(prev - 10000, 0))}
                  className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-lg font-bold transition"
                >
                  −
                </button>
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                <span>0 AED</span>
                <span>1,200,000 AED</span>
              </div>
            </div>
          </div>

          {/* VERTICAL DIVIDER LINE 1 */}
          <div className="hidden md:block w-px bg-gray-300 h-full"></div>

          {/* MIDDLE COLUMN */}
          <div className="space-y-8">
            {/* Loan Term */}
            <div>
              <label className="block text-xs font-semibold mb-3 text-gray-600 tracking-wide">LOAN TERM (YEAR)</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3C78]"
                />
                <button 
                  onClick={() => setLoanTerm(prev => Math.min(prev + 1, 50))}
                  className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-lg font-bold transition"
                >
                  +
                </button>
                <button 
                  onClick={() => setLoanTerm(prev => Math.max(prev - 1, 1))}
                  className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-lg font-bold transition"
                >
                  −
                </button>
              </div>
              <div className="text-center text-[10px] text-gray-400 mt-2">
                <span>1 year</span>
                <span className="mx-16"></span>
                <span>25 years</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-xs font-semibold mb-3 text-gray-600 tracking-wide">INTEREST RATE (%) ⓘ</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3C78] bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* VERTICAL DIVIDER LINE 2 */}
          <div className="hidden md:block w-px bg-gray-300 h-full"></div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Monthly Payment */}
            <div>
              <label className="block text-xs font-semibold mb-3 text-gray-600 tracking-wide">MONTHLY (AED)</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  readOnly
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700"
                />
              </div>
              <div className="text-center text-[10px] text-gray-400 mt-2">
                <span>Monthly payment</span>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-sm text-gray-700 space-y-2">
                <p className="font-semibold">Loan Amount: <span className="font-normal">AED {loanAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></p>
                <p className="font-semibold">Total Payment: <span className="font-normal">AED {totalPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></p>
                <p className="font-semibold">Total Interest: <span className="font-normal">AED {totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const HomeHero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const videoRef = useRef(null);

  // 🎞 Handle smooth fade between videos
  const handleVideoEnd = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setTransitioning(false);
    }, 1500);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch(() => console.log("Autoplay blocked"));
    }
  }, [currentVideo]);

  return (
    <div className="relative w-full bg-backgound">
      {/* 🎬 Hero Section */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Video */}
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            ref={videoRef}
            src={videos[currentVideo]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black"
          animate={{ opacity: transitioning ? 0.7 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

        {/* Hero Text */}
        <motion.div
          className="relative z-10 max-w-5xl px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p className="text-white text-xs tracking-wider mb-3 uppercase">
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING
          </p>
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug drop-shadow-lg">
            Find A Home That Suits <br /> Your Lifestyle.
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="bg-[#0C3C78] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#092d5c] transition">
              Schedule A Visit
            </button>
            <button className="bg-white text-gray-800 px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-200 transition">
              Call Us Now
            </button>
          </div>
        </motion.div>
      </section>

      {/* 🧮 Mortgage Calculator */}
      <MortgageCalculator />
    </div>
  );
};

export default HomeHero;