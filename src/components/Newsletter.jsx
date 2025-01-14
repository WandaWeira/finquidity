import React, { useState } from "react";
import { ArrowDownRight, Circle } from "lucide-react";
import AbstractImages from "./AbstractImages";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#f3efd7] px-4 sm:px-8 md:px-32 py-10 md:py-20 relative overflow-hidden">
      {/* Artistic header */}
      <div className="relative mb-20 md:mb-40">
        <span className="text-8xl md:text-[20rem] font-light leading-none opacity-5 absolute -top-8 md:-top-32 -left-4 md:-left-20 select-none">
          05
        </span>
        <div className="relative z-10">
          <div className="flex items-baseline gap-4 mb-4 md:mb-8">
            <Circle className="w-3 md:w-4 h-3 md:h-4 opacity-30" />
            <h2 className="text-4xl md:text-[8rem] font-light leading-none">
              Financial
            </h2>
          </div>
          <div className="flex items-baseline gap-4 ml-8 md:ml-40">
            <Circle className="w-3 md:w-4 h-3 md:h-4 opacity-30" />
            <h2 className="text-4xl md:text-[8rem] font-light leading-none">
              Insights
            </h2>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Newsletter signup */}
        <div className="md:col-span-5">
          <div className="sticky top-20">
            <div className="relative group">
              <div className="bg-black/5 p-6 md:p-16 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
                <div className="relative mb-12">
                  <Circle className="w-3 h-3 absolute -left-6 top-3 opacity-30" />
                  <h3 className="text-3xl font-light">Join Our Circle</h3>
                </div>
                <p className="text-lg mb-12 max-w-md">
                  Monthly financial wisdom for creative minds. Tax insights,
                  grant opportunities, and accounting strategies delivered
                  artfully to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-0 py-4 bg-transparent border-b border-black/20 focus:border-black/40 outline-none text-lg"
                      required
                    />
                    <Circle className="w-2 h-2 opacity-30 absolute -left-4 top-1/2 -translate-y-1/2" />
                  </div>
                  <button
                    type="submit"
                    className="group flex items-center gap-2 text-lg hover:gap-4 transition-all"
                  >
                    Subscribe to Newsletter
                    <ArrowDownRight
                      className="w-6 h-6 -rotate-45 transition-transform group-hover:scale-110"
                      strokeWidth={1.25}
                    />
                  </button>
                </form>
              </div>
              <div className="absolute inset-0 border border-black/20 transform translate-x-2 translate-y-2 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-black/10 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Content preview */}
        <div className="md:col-span-7 space-y-12 md:space-y-24 pt-8 md:pt-20">
          <div className="relative group">
            <span className="text-9xl font-light opacity-5 absolute -top-20 -left-20 select-none">
              01
            </span>
            <div className="relative border-l-2 border-black/20 pl-12 py-8 transform group-hover:-translate-x-2 transition-transform">
              <Circle className="w-3 h-3 absolute -left-[0.3rem] top-10 opacity-30" />
              <span className="text-sm uppercase tracking-wider opacity-50">
                Latest Issue
              </span>
              <h3 className="text-4xl font-light mt-4 mb-6">
                Tax Planning for Creative Professionals
              </h3>
              <p className="text-lg opacity-70 max-w-xl">
                Essential tax strategies and deductions specifically for
                artists, designers, and creative businesses. Learn how to
                maximize your creative tax benefits.
              </p>
            </div>
          </div>

          <div className="relative group">
            <span className="text-9xl font-light opacity-5 absolute -top-20 -left-20 select-none">
              02
            </span>
            <div className="relative border-l-2 border-black/20 pl-12 py-8 transform group-hover:-translate-x-2 transition-transform">
              <Circle className="w-3 h-3 absolute -left-[0.3rem] top-10 opacity-30" />
              <span className="text-sm uppercase tracking-wider opacity-50">
                Featured
              </span>
              <h3 className="text-4xl font-light mt-4 mb-6">
                Grant Accounting Mastery
              </h3>
              <p className="text-lg opacity-70 max-w-xl">
                Navigate the complexities of grant management with our
                comprehensive guide to documentation, reporting, and compliance.
              </p>
            </div>
          </div>

          <div className="relative group">
            <span className="text-9xl font-light opacity-5 absolute -top-20 -left-20 select-none">
              03
            </span>
            <div className="relative border-l-2 border-black/20 pl-12 py-8 transform group-hover:-translate-x-2 transition-transform">
              <Circle className="w-3 h-3 absolute -left-[0.3rem] top-10 opacity-30" />
              <span className="text-sm uppercase tracking-wider opacity-50">
                Coming Soon
              </span>
              <h3 className="text-4xl font-light mt-4 mb-6">
                Creative Business Structures
              </h3>
              <p className="text-lg opacity-70 max-w-xl">
                A deep dive into choosing the perfect business structure for
                your creative venture, with real-world case studies and expert
                analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
