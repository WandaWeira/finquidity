import React from "react";
import { Circle } from "lucide-react";
import AbstractImages from "./AbstractImages";

const WhoWeAre = () => {
  return (
    <div
      id="who-we-are"
      className="min-h-screen bg-[#f3efd7] px-4 sm:px-8 md:px-16 lg:px-32 py-10 md:py-20 relative overflow-hidden"
    >
      {/* Abstract Images */}
      <div className="absolute top-0 right-0 -z-10">
        <AbstractImages position="right" variant="2" />
      </div>

      {/* Artistic header with dynamic elements */}
      <div className="relative mb-20 md:mb-40">
        <span className="text-6xl sm:text-8xl md:text-[20rem] font-light leading-none opacity-5 absolute -top-8 md:-top-32 -left-4 md:-left-20 select-none">
          02
        </span>
        <div className="relative z-10">
          <div className="flex items-baseline gap-4 mb-4 md:mb-8">
            <Circle className="w-3 md:w-4 h-3 md:h-4 opacity-30" />
            <h2 className="text-3xl sm:text-4xl md:text-[8rem] font-light leading-none">
              Who
            </h2>
          </div>
          <div className="flex items-baseline gap-4 ml-4 sm:ml-8 md:ml-40">
            <Circle className="w-3 md:w-4 h-3 md:h-4 opacity-30" />
            <h2 className="text-3xl sm:text-4xl md:text-[8rem] font-light leading-none">
              We Are
            </h2>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-7">
          <div className="relative group">
            <div className="bg-black/5 p-6 md:p-16 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
              <div className="space-y-6 md:space-y-8">
                <p className="text-xl md:text-2xl">
                  <span className="font-medium">We are Accountants</span> with a
                  passion for the creative world.
                </p>
                <p className="text-lg md:text-xl">
                  Our vision is to help create a more creative world through
                  being the first-choice accounting partner for the creative
                  economy.
                </p>
                <p className="text-lg md:text-xl">
                  Having an Accountant is not only about having someone to
                  figure out your numbers but rather relationship that
                  accelerates your growth.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 border border-black/20 transform translate-x-2 translate-y-2 -z-10"></div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative group">
            <div className="bg-black/5 p-6 md:p-16 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
              <div className="space-y-6 md:space-y-8">
                <p className="text-lg md:text-xl">
                  We help you{" "}
                  <span className="font-medium">
                    manage your career/business according to your specific
                    needs.
                  </span>
                </p>
                <p className="text-lg md:text-xl">
                  We want to see more sustainable businesses and careers within
                  the creative economy.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 border border-black/20 transform translate-x-2 translate-y-2 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Abstract image bottom-left */}
      <div className="absolute bottom-0 left-0 -z-10">
        <AbstractImages position="left" variant="1" />
      </div>
    </div>
  );
};

export default WhoWeAre;
