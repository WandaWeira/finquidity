import React from "react";
import { Circle } from "lucide-react";
import AbstractImages from "./AbstractImages";

const IdealClients = () => {
  return (
    <div
      id="ideal-clients"
      className="min-h-screen bg-[#f3efd7] px-4 sm:px-8 md:px-16 lg:px-32 py-10 md:py-20 relative overflow-hidden"
    >
      {/* Abstract Images */}
      <div className="absolute top-0 right-0 -z-10">
        <AbstractImages position="right" variant="2" />
      </div>

      {/* Artistic header with dynamic elements */}
      <div className="relative mb-20 md:mb-40">
        <span className="text-6xl sm:text-8xl md:text-[20rem] font-light leading-none opacity-5 absolute -top-8 md:-top-32 -left-4 md:-left-20 select-none">
          03
        </span>
        <div className="relative z-10">
          <div className="flex items-baseline gap-4 mb-4 md:mb-8">
            <Circle className="w-3 md:w-4 h-3 md:h-4 opacity-30" />
            <h2 className="text-3xl sm:text-4xl md:text-[8rem] font-light leading-none">
              Ideal
            </h2>
          </div>
          <div className="flex items-baseline gap-4 ml-4 sm:ml-8 md:ml-40">
            <Circle className="w-3 md:w-4 h-3 md:h-4 opacity-30" />
            <h2 className="text-3xl sm:text-4xl md:text-[8rem] font-light leading-none">
              Clients
            </h2>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Individuals Section */}
        <div className="md:col-span-5">
          <div className="relative group">
            <div className="bg-black/5 p-6 md:p-16 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
              <div className="relative mb-8">
                <Circle className="w-2 md:w-3 h-2 md:h-3 absolute -left-4 top-2 opacity-30" />
                <h3 className="text-2xl md:text-3xl font-light">Individuals</h3>
              </div>
              <div className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Circle className="w-1.5 h-1.5 opacity-30" />
                    <span className="text-lg md:text-xl">Stylists</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-1.5 h-1.5 opacity-30" />
                    <span className="text-lg md:text-xl">Musicians</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-1.5 h-1.5 opacity-30" />
                    <span className="text-lg md:text-xl">Artists</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-1.5 h-1.5 opacity-30" />
                    <span className="text-lg md:text-xl">Architects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-1.5 h-1.5 opacity-30" />
                    <span className="text-lg md:text-xl">Photographers</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute inset-0 border border-black/20 transform translate-x-2 translate-y-2 -z-10"></div>
          </div>
        </div>

        {/* Businesses Section */}
        <div className="md:col-span-7">
          <div className="relative group">
            <div className="bg-black/5 p-6 md:p-16 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
              <div className="relative mb-8">
                <Circle className="w-2 md:w-3 h-2 md:h-3 absolute -left-4 top-2 opacity-30" />
                <h3 className="text-2xl md:text-3xl font-light">Businesses</h3>
              </div>
              <div className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Circle className="w-1.5 h-1.5 opacity-30" />
                    <span className="text-lg md:text-xl">
                      Fashion brands/manufacturers
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-1.5 h-1.5 opacity-30" />
                    <span className="text-lg md:text-xl">Agencies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-1.5 h-1.5 opacity-30" />
                    <span className="text-lg md:text-xl">Media houses</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-1.5 h-1.5 opacity-30" />
                    <span className="text-lg md:text-xl">
                      Production companies
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-1.5 h-1.5 opacity-30" />
                    <span className="text-lg md:text-xl">Tech companies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Circle className="w-1.5 h-1.5 opacity-30" />
                    <span className="text-lg md:text-xl">Event organisers</span>
                  </li>
                </ul>
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

export default IdealClients;
