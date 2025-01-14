import React from "react";
import AbstractImages from "./AbstractImages";

const FinquidityLanding = () => {
  return (
    <div className="min-h-screen bg-[#f3efd7] relative overflow-hidden">
      {/* Magazine Cover Layout */}
      <div className="h-screen flex flex-col justify-between p-8 md:p-16">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className="text-sm tracking-widest">
            <p>ISSUE 01 / 2024</p>
            <p className="mt-1">£FREE</p>
          </div>
          <div className="text-sm text-right">
            <p>THE CREATIVE</p>
            <p className="mt-1">FINANCE MAGAZINE</p>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-6xl md:text-[12rem] font-light tracking-tight leading-none">
            FINQUIDITY
          </h1>
          <div className="w-16 h-0.5 bg-black/40"></div>
          <p className="text-xl md:text-2xl tracking-wide">
            ACCOUNTING FOR THE CREATIVE MIND
          </p>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="space-y-4">
            <p className="uppercase tracking-wider opacity-60">Featured</p>
            <p>Tax Strategies for Artists</p>
          </div>
          <div className="space-y-4 text-center">
            <p className="uppercase tracking-wider opacity-60">Inside</p>
            <p>Creative Business Growth</p>
          </div>
          <div className="space-y-4 text-right">
            <p className="uppercase tracking-wider opacity-60">Special</p>
            <p>Grant Writing Guide</p>
          </div>
        </div>
      </div>

      {/* Abstract Design Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen opacity-10">
        <AbstractImages position="right" variant="1" />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-screen opacity-10">
        <AbstractImages position="left" variant="2" />
      </div>
    </div>
  );
};

export default FinquidityLanding;
