import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  "/Introducing Grand Polo Club & Resort by Emaar.mp4",
  "/Introducing Grand Polo Club & Resort by Emaar.mp4",
  "/Introducing Grand Polo Club & Resort by Emaar.mp4",
];

const MortgageCalculator = () => {
  // 🧮 Centralized state object
  const [calculatorData, setCalculatorData] = useState({
    propertyValue: 1200000,
    loanTerm: 25,
    downPayment: 180000,
    interestRate: 3.75,
  });

  // 🧩 Derived values
  const loanAmount = calculatorData.propertyValue - calculatorData.downPayment;
  const monthlyRate = calculatorData.interestRate / 100 / 12;
  const numberOfPayments = calculatorData.loanTerm * 12;
  const monthlyPayment =
    loanAmount *
    ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1));
  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - loanAmount;

  // 🔄 Update helper
  const updateValue = (key, value) => {
    setCalculatorData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="relative -mt-20 sm:-mt-32 md:-mt-44 w-full z-10 px-3 sm:px-6 md:px-8 lg:px-20">
      <motion.div
        className="bg-white rounded-3xl sm:rounded-[40px] md:rounded-[60px] py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 lg:px-20 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-left">
          Mortgage Calculator
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)_1px_minmax(0,1fr)] gap-8 md:gap-6 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-6 sm:space-y-8">
            {/* Property Value */}
            <div>
              <label className="block text-xs font-semibold mb-3 text-gray-600 tracking-wide">
                PROPERTY VALUE (AED)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={calculatorData.propertyValue}
                  onChange={(e) =>
                    updateValue("propertyValue", Number(e.target.value))
                  }
                  className="flex-1 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3C78]"
                />
                <button
                  onClick={() =>
                    updateValue(
                      "propertyValue",
                      Math.min(calculatorData.propertyValue + 50000, 200000000)
                    )
                  }
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-base sm:text-lg font-bold transition"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    updateValue(
                      "propertyValue",
                      Math.max(calculatorData.propertyValue - 50000, 300000)
                    )
                  }
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-base sm:text-lg font-bold transition"
                >
                  −
                </button>
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                <span>300,000 AED</span>
                <span>200,000,000 AED</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <label className="block text-xs font-semibold mb-3 text-gray-600 tracking-wide">
                DOWN PAYMENT (AED)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={calculatorData.downPayment}
                  onChange={(e) =>
                    updateValue("downPayment", Number(e.target.value))
                  }
                  className="flex-1 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3C78]"
                />
                <button
                  onClick={() =>
                    updateValue(
                      "downPayment",
                      Math.min(calculatorData.downPayment + 10000, 1000000)
                    )
                  }
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-base sm:text-lg font-bold transition"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    updateValue(
                      "downPayment",
                      Math.max(calculatorData.downPayment - 10000, 0)
                    )
                  }
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-base sm:text-lg font-bold transition"
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

          {/* Divider 1 */}
          <div className="hidden md:block w-px bg-gray-300 h-full"></div>

          {/* MIDDLE COLUMN */}
          <div className="space-y-6 sm:space-y-8">
            {/* Loan Term */}
            <div>
              <label className="block text-xs font-semibold mb-3 text-gray-600 tracking-wide">
                LOAN TERM (YEAR)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={calculatorData.loanTerm}
                  onChange={(e) =>
                    updateValue("loanTerm", Number(e.target.value))
                  }
                  className="flex-1 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3C78]"
                />
                <button
                  onClick={() =>
                    updateValue("loanTerm", Math.min(calculatorData.loanTerm + 1, 50))
                  }
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-base sm:text-lg font-bold transition"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    updateValue("loanTerm", Math.max(calculatorData.loanTerm - 1, 1))
                  }
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-base sm:text-lg font-bold transition"
                >
                  −
                </button>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-xs font-semibold mb-3 text-gray-600 tracking-wide">
                INTEREST RATE (%) ⓘ
              </label>
              <input
                type="number"
                step="0.1"
                value={calculatorData.interestRate}
                onChange={(e) =>
                  updateValue("interestRate", Number(e.target.value))
                }
                className="flex-1 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C3C78] bg-gray-50 w-full"
              />
            </div>
          </div>

          {/* Divider 2 */}
          <div className="hidden md:block w-px bg-gray-300 h-full"></div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Monthly Payment */}
            <div>
              <label className="block text-xs font-semibold mb-3 text-gray-600 tracking-wide">
                MONTHLY (AED)
              </label>
              <input
                type="text"
                value={monthlyPayment.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm text-gray-700"
              />
            </div>

            {/* Summary */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-semibold">Loan Amount:</span> AED{" "}
                {loanAmount.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </p>
              <p>
                <span className="font-semibold">Total Payment:</span> AED{" "}
                {totalPayment.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </p>
              <p>
                <span className="font-semibold">Total Interest:</span> AED{" "}
                {totalInterest.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// 🎬 Hero Section (unchanged)
const HomeHero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const videoRef = useRef(null);

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
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
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

        <motion.div
          className="absolute inset-0 bg-black"
          animate={{ opacity: transitioning ? 0.7 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

        <motion.div
          className="relative z-10 max-w-5xl px-4 sm:px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p className="text-white text-xs tracking-wider mb-3 uppercase">
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING
          </p>
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug drop-shadow-lg">
            Find A Home That Suits <br /> Your Lifestyle.
          </h1>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
            <button className="bg-[#0C3C78] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md text-sm font-semibold hover:bg-[#092d5c] transition">
              Schedule A Visit
            </button>
            <button className="bg-white text-gray-800 px-5 sm:px-6 py-2 sm:py-3 rounded-md text-sm font-semibold hover:bg-gray-200 transition">
              Call Us Now
            </button>
          </div>
        </motion.div>
      </section>

      <MortgageCalculator />
    </div>
  );
};

export default HomeHero;
