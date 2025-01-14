import React from "react";
import { ArrowDownRight, Circle } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#f3efd7] px-32 py-20">
      {/* Artistic header with dynamic elements */}
      <div className="relative mb-40">
        <span className="text-[20rem] font-light leading-none opacity-5 absolute -top-32 -left-20 select-none">
          04
        </span>
        <div className="relative z-10">
          <div className="flex items-baseline gap-4 mb-8">
            <Circle className="w-4 h-4 opacity-30" />
            <h2 className="text-[8rem] font-light leading-none">Success</h2>
          </div>
          <div className="flex items-baseline gap-4 ml-40">
            <Circle className="w-4 h-4 opacity-30" />
            <h2 className="text-[8rem] font-light leading-none">Stories</h2>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 border border-black/10 rounded-full opacity-20 -z-10"></div>
      </div>

      {/* Asymmetrical grid layout with enhanced visuals */}
      <div className="grid grid-cols-12 gap-12 mb-40">
        <div className="col-span-7">
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/3] bg-black/5 p-16 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
              <span className="text-9xl font-light opacity-10 absolute bottom-4 right-8 select-none">
                01
              </span>
              <div className="relative">
                <Circle className="w-3 h-3 absolute -left-6 top-3 opacity-30" />
                <h3 className="text-[2.5rem] font-light mb-6">
                  Independent Artists Collective
                </h3>
              </div>
              <div className="space-y-6 relative z-10">
                <p className="text-xl">Financial Strategy & Tax Planning</p>
                <ul className="space-y-3 text-lg">
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
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-black/10 rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="col-span-5 flex flex-col justify-end">
          <div className="relative group cursor-pointer">
            <div className="aspect-square bg-black/5 p-12 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
              <span className="text-8xl font-light opacity-10 absolute bottom-4 right-8 select-none">
                02
              </span>
              <div className="relative">
                <Circle className="w-3 h-3 absolute -left-6 top-2 opacity-30" />
                <h3 className="text-[2rem] font-light mb-6">
                  Design Studio Growth
                </h3>
              </div>
              <div className="space-y-4 relative z-10">
                <p className="text-lg">Strategic Financial Planning</p>
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
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-black/10 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Bottom section with enhanced artistic elements */}
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-5">
          <div className="relative group cursor-pointer">
            <div className="aspect-[3/4] bg-black/5 p-12 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
              <span className="text-8xl font-light opacity-10 absolute bottom-4 right-8 select-none">
                03
              </span>
              <div className="relative">
                <Circle className="w-3 h-3 absolute -left-6 top-2 opacity-30" />
                <h3 className="text-[2rem] font-light mb-6">
                  Art Gallery Network
                </h3>
              </div>
              <div className="space-y-4 relative z-10">
                <p className="text-lg">Financial Operations Transformation</p>
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
            <div className="absolute -top-12 -right-12 w-40 h-40 border border-black/10 rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="col-span-7 flex items-center">
          <div className="space-y-12 pl-20 border-l border-black/20">
            <div className="relative">
              <Circle className="w-3 h-3 absolute -left-[1.7rem] top-3 opacity-30" />
              <h2 className="text-[2.5rem] font-light">Our Impact</h2>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div className="group">
                <span className="text-5xl font-light group-hover:ml-4 transition-all">
                  150+
                </span>
                <p className="mt-2 text-lg">Creative Clients</p>
              </div>
              <div className="group">
                <span className="text-5xl font-light group-hover:ml-4 transition-all">
                  40%
                </span>
                <p className="mt-2 text-lg">Average Cost Savings</p>
              </div>
              <div className="group">
                <span className="text-5xl font-light group-hover:ml-4 transition-all">
                  £2M+
                </span>
                <p className="mt-2 text-lg">Grants Secured</p>
              </div>
              <div className="group">
                <span className="text-5xl font-light group-hover:ml-4 transition-all">
                  10yrs
                </span>
                <p className="mt-2 text-lg">Industry Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
