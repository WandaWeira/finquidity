import React from "react";
import AbstractImages from "./AbstractImages";

const FinquidityLanding = () => {
  return (
    <div className="min-h-screen bg-[#f3efd7] px-4 sm:px-8 md:px-16 py-6 md:py-12 relative overflow-hidden">
      {/* Abstract Images */}
      <div className="absolute top-0 right-0 -z-10">
        <AbstractImages position="right" variant="1" />
      </div>

      {/* Logo and Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
        {/* Logo */}
        <div className="flex flex-col">
          <div className="w-12">
            <div className="h-2.5 w-12 bg-black mb-1"></div>
            <div className="h-2.5 w-12 bg-black mb-1"></div>
            <div className="h-2.5 w-12 bg-black"></div>
          </div>
        </div>

        {/* Header Text */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-none w-full md:w-[120px]">
            Accountants
          </h2>
          <div className="flex flex-col items-center w-full md:w-[80px]">
            <p className="text-sm font-normal leading-tight">for</p>
            <p className="text-sm font-normal leading-tight">the</p>
          </div>
          <div className="w-full md:w-[120px] text-center md:text-right">
            <p className="text-base md:text-lg font-medium leading-tight text-[#ff5722]">
              Creative
            </p>
            <p className="text-base md:text-lg font-medium leading-tight text-[#ff5722]">
              Industries
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="mt-12 md:mt-20">
        <div className="max-w-6xl mx-auto flex justify-center">
          {/* Main Title with Underline */}
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl md:text-[8rem] tracking-[.15em] text-center md:text-left">
              Finquidity
            </h1>
            <div className="absolute -bottom-6 left-0 w-1/2 h-0.5 bg-black"></div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 mt-16 md:mt-32 max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <span className="transform -rotate-45 text-3xl md:text-5xl text-black font-extralight">
              ↓
            </span>
            <h3 className="text-2xl md:text-5xl text-black font-extralight">
              Ideal Client...
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <span className="transform -rotate-45 text-3xl md:text-5xl text-black font-thin">
              ↓
            </span>
            <h3 className="text-2xl md:text-5xl text-black font-extralight">
              We Are...
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <span className="transform -rotate-45 text-3xl md:text-5xl text-black font-extralight">
              ↓
            </span>
            <h3 className="text-2xl md:text-5xl text-black font-extralight">
              What we do...
            </h3>
          </div>
        </div>

        {/* Abstract image bottom-left */}
        <div className="absolute bottom-0 left-0 -z-10">
          <AbstractImages position="left" variant="2" />
        </div>
      </main>
    </div>
  );
};

export default FinquidityLanding;
