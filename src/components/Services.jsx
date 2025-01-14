import React from "react";
import { ArrowDownRight } from "lucide-react";

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3efd7] px-32 py-20">
      <div className="flex flex-row justify-between flex-grow mb-10">
        {/* Left Section - Who Are... */}
        <div className="w-[26%]">
          <div className="flex items-center gap-3 mb-10">
            <ArrowDownRight className="w-8 h-8 -rotate-45" strokeWidth={1.25} />
            <h2 className="text-[4rem] font-light leading-none">Who Are...</h2>
          </div>
          <div className="space-y-8 text-[1rem] leading-snug">
            <p>
              <span className="font-medium">We are Accountants</span> with a
              passion for the creative world.
            </p>
            <p>
              Our vision{" "}
              <span className="font-medium">
                to help create a more creative world through being the
                first-choice accounting partner for the creative economy.
              </span>
            </p>
            <p>
              Having an Accountant is not only about having someone to figure
              out your numbers but rather relationship that accelerates your
              growth.
            </p>
            <p>
              We help you{" "}
              <span className="font-medium">
                manage your career/business according to your specific needs.
              </span>
            </p>
            <p>
              We want to see more sustainable businesses and careers within the
              creative economy.
            </p>
          </div>
        </div>

        {/* Center Section - What we do... */}
        <div className="w-[30%] mt-[20%]">
          <div className="flex items-center gap-3 mb-12">
            <ArrowDownRight className="w-8 h-8 -rotate-45" strokeWidth={1.25} />
            <h2 className="text-[4rem] font-light leading-none">
              What we do...
            </h2>
          </div>
          <div className="space-y-10">
            <p className="text-[1rem]">
              We specialise in offering tailored accounting and tax services for
              our clients.
            </p>

            <div className="space-y-4">
              <h3 className="text-[1.15rem] font-medium">Accounting</h3>
              <ul className="space-y-2 text-[1rem]">
                <li>- Management Accounts</li>
                <li>- Annual Financial Statements</li>
                <li>- Business pitch prep.</li>
                <li>- Budgeting</li>
                <li>- Cashflow Projections</li>
              </ul>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-[1.15rem] font-medium">Taxation</h3>
              <ul className="space-y-2 text-[1rem]">
                <li>- International Tax</li>
                <li>- Personal Tax</li>
                <li>- Company Tax</li>
                <li>- Tax Advisory</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - Ideal clients... */}
        <div className="w-[26%]">
          <div className="flex items-center gap-3 mb-10">
            <ArrowDownRight className="w-8 h-8 -rotate-45" strokeWidth={1.25} />
            <h2 className="text-[4rem] font-light leading-none">
              Ideal clients...
            </h2>
          </div>
          <p className="text-[1rem] mb-10">
            We work with both individuals and companies.
          </p>

          <div className="space-y-4 mb-12">
            <h3 className="text-[1.15rem] font-medium">Individuals</h3>
            <ul className="space-y-2 text-[1rem]">
              <li>- Stylists</li>
              <li>- Musicians</li>
              <li>- Artists</li>
              <li>- Architects</li>
              <li>- Photographers</li>
              <li>- Etc...</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[1.15rem] font-medium">Businesses</h3>
            <ul className="space-y-2 text-[1rem]">
              <li>- Fashion brands/manufacturers</li>
              <li>- Agencies</li>
              <li>- Media houses</li>
              <li>- Production companies</li>
              <li>- Tech companies</li>
              <li>- Event organisers</li>
              <li>- Etc...</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="flex justify-between items-end mb-10 pt-10">
        <div>
          <h2 className="text-[4rem] font-light leading-none">
            Client Directory
          </h2>
        </div>
        <div className="space-y-6">
          <h2 className="text-[4rem] font-light leading-none">Contact Us</h2>
          <div className="space-y-2 text-[1rem]">
            <p>Email: finquidity@gmail.com</p>
            <p>Call/Text: 0674020561</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
