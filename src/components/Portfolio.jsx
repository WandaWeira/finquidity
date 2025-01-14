import React from "react";
import { ArrowDownRight, Circle } from "lucide-react";
import AbstractImages from "./AbstractImages";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#f3efd7] px-4 sm:px-8 md:px-16 lg:px-32 py-10 md:py-20 relative overflow-hidden">
      {/* Abstract Images */}
      <div className="absolute top-0 right-0 -z-10">
        <AbstractImages position="right" variant="2" />
      </div>

      {/* Artistic header with dynamic elements */}
      <div className="relative mb-20 md:mb-40">
        <span className="text-6xl sm:text-8xl md:text-[20rem] font-light leading-none opacity-5 absolute -top-8 md:-top-32 -left-4 md:-left-20 select-none">
          04
        </span>
        <div className="relative z-10">
          <div className="flex items-baseline gap-4 mb-4 md:mb-8">
            <Circle className="w-3 md:w-4 h-3 md:h-4 opacity-30" />
            <h2 className="text-3xl sm:text-4xl md:text-[8rem] font-light leading-none">Success</h2>
          </div>
          <div className="flex items-baseline gap-4 ml-4 sm:ml-8 md:ml-40">
            <Circle className="w-3 md:w-4 h-3 md:h-4 opacity-30" />
            <h2 className="text-3xl sm:text-4xl md:text-[8rem] font-light leading-none">Stories</h2>
          </div>
        </div>
      </div>

      {/* Grid layout for case studies */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-40">
        {/* First Case Study */}
        <div className="md:col-span-7">
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/3] bg-black/5 p-4 sm:p-6 md:p-16 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
              <span className="text-4xl sm:text-6xl md:text-9xl font-light opacity-10 absolute bottom-4 right-8 select-none">
                01
              </span>
              <div className="relative">
                <Circle className="w-2 md:w-3 h-2 md:h-3 absolute -left-4 md:-left-6 top-2 md:top-3 opacity-30" />
                <h3 className="text-xl sm:text-2xl md:text-[2.5rem] font-light mb-4 md:mb-6">
                  Independent Artists Collective
                </h3>
              </div>
              <div className="space-y-4 md:space-y-6 relative z-10">
                <p className="text-base sm:text-lg md:text-xl">Financial Strategy & Tax Planning</p>
                <ul className="space-y-2 md:space-y-3 text-base sm:text-lg">
                  <li className="flex items-center gap-3">
                    <Circle className="w-2 h-2 opacity-30" />
                    35% tax savings achieved
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-2 h-2 opacity-30" />
                    Streamlined royalty management
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-2 h-2 opacity-30" />
                    Custom financial dashboard
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute inset-0 border border-black/20 transform translate-x-2 translate-y-2 -z-10"></div>
          </div>
        </div>

        {/* Second Case Study */}
        <div className="md:col-span-5">
          <div className="relative group cursor-pointer">
            <div className="aspect-square bg-black/5 p-4 sm:p-6 md:p-12 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
              <span className="text-4xl sm:text-6xl md:text-8xl font-light opacity-10 absolute bottom-4 right-8 select-none">
                02
              </span>
              <div className="relative">
                <Circle className="w-2 md:w-3 h-2 md:h-3 absolute -left-4 md:-left-6 top-2 opacity-30" />
                <h3 className="text-xl sm:text-2xl md:text-[2rem] font-light mb-4 md:mb-6">
                  Design Studio Growth
                </h3>
              </div>
              <div className="space-y-4 relative z-10">
                <p className="text-base sm:text-lg">Strategic Financial Planning</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <Circle className="w-2 h-2 opacity-30" />
                    Scaled from 2 to 15 employees
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-2 h-2 opacity-30" />
                    200% revenue growth
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute inset-0 border border-black/20 transform translate-x-2 translate-y-2 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Third Case Study */}
        <div className="md:col-span-5">
          <div className="relative group cursor-pointer">
            <div className="aspect-[3/4] bg-black/5 p-4 sm:p-6 md:p-12 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
              <span className="text-4xl sm:text-6xl md:text-8xl font-light opacity-10 absolute bottom-4 right-8 select-none">
                03
              </span>
              <div className="relative">
                <Circle className="w-2 md:w-3 h-2 md:h-3 absolute -left-4 md:-left-6 top-2 opacity-30" />
                <h3 className="text-xl sm:text-2xl md:text-[2rem] font-light mb-4 md:mb-6">
                  Art Gallery Network
                </h3>
              </div>
              <div className="space-y-4 relative z-10">
                <p className="text-base sm:text-lg">Financial Operations Transformation</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <Circle className="w-2 h-2 opacity-30" />
                    Multi-gallery accounting system
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-2 h-2 opacity-30" />
                    International tax compliance
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-2 h-2 opacity-30" />
                    Exhibition budgeting tools
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute inset-0 border border-black/20 transform translate-x-2 translate-y-2 -z-10"></div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="md:col-span-7 flex items-center">
          <div className="space-y-8 md:space-y-12 pl-4 sm:pl-8 md:pl-20 border-l border-black/20">
            <div className="relative">
              <Circle className="w-3 h-3 absolute -left-[1.7rem] top-3 opacity-30" />
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-light">Our Impact</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-12">
              <div className="group">
                <span className="text-3xl sm:text-4xl md:text-5xl font-light group-hover:ml-4 transition-all">
                  150+
                </span>
                <p className="mt-2 text-base sm:text-lg">Creative Clients</p>
              </div>
              <div className="group">
                <span className="text-3xl sm:text-4xl md:text-5xl font-light group-hover:ml-4 transition-all">
                  40%
                </span>
                <p className="mt-2 text-base sm:text-lg">Average Cost Savings</p>
              </div>
              <div className="group">
                <span className="text-3xl sm:text-4xl md:text-5xl font-light group-hover:ml-4 transition-all">
                  £2M+
                </span>
                <p className="mt-2 text-base sm:text-lg">Grants Secured</p>
              </div>
              <div className="group">
                <span className="text-3xl sm:text-4xl md:text-5xl font-light group-hover:ml-4 transition-all">
                  10yrs
                </span>
                <p className="mt-2 text-base sm:text-lg">Industry Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract image middle-left */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -z-10">
        <AbstractImages position="left" variant="3" />
      </div>
    </div>
  );
};

export default Portfolio;