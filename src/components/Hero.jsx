import React from "react";

const FinquidityLanding = () => {
  return (
    <div className="min-h-screen bg-[#f3efd7] px-16 py-12">
      {/* Logo and Header Section */}
      <header className="flex justify-between items-start">
        {/* Logo */}
        <div className="flex flex-col">
          <div className="w-12">
            <div className="h-2.5 w-12 bg-black mb-1"></div>
            <div className="h-2.5 w-12 bg-black mb-1"></div>
            <div className="h-2.5 w-12 bg-black"></div>
          </div>
        </div>

        {/* Header Text */}
        <div className="flex flex-col items-end">
          <h2 className="text-black text-2xl font-bold tracking-tight leading-none w-[120px] text-right">
            Accountants
          </h2>
          <div className="flex flex-col items-center w-[80px]">
            <p className="text-black text-sm font-normal leading-tight">for</p>
            <p className="text-black text-sm font-normal leading-tight">the</p>
          </div>
          <div className="w-[120px] text-right">
            <p className="text-[#ff5722] text-lg font-medium leading-tight">
              Creative
            </p>
            <p className="text-[#ff5722] text-lg font-medium leading-tight">
              Industries
            </p>
          </div>
        </div>
      </header>
      {/* Main Content Section */}
      <main className="mt-20">
        <div className="max-w-6xl mx-auto flex justify-center">
          {/* Main Title with Underline */}
          <div className="relative">
            <h1 className="text-black text-[8rem] tracking-[.15em]">
              Finquidity
            </h1>
            <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-black/30"></div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-3 gap-20 mt-32 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="transform -rotate-45 text-5xl text-black font-extralight">
              ↓
            </span>
            <h3 className="text-5xl text-black font-extralight">
              Ideal Client...
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <span className="transform -rotate-45 text-5xl text-black font-thin">
              ↓
            </span>
            <h3 className="text-5xl text-black font-extralight">We Are...</h3>
          </div>

          <div className="flex items-center gap-4">
            <span className="transform -rotate-45 text-5xl text-black font-extralight">
              ↓
            </span>
            <h3 className="text-5xl text-black font-extralight">
              What we do...
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinquidityLanding;
