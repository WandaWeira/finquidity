import React from "react";
import { ArrowDownRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#f5ecd7] p-8 md:p-16">
      <div className="relative min-h-screen">
        {/* Left Section - Who Are... */}
        <div className="absolute left-0 top-0 w-[30%] space-y-6">
          <div className="flex items-center gap-2">
            <ArrowDownRight className="w-6 h-6" />
            <h2 className="text-4xl font-light">Who Are...</h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-medium">We are Accountants</span> with a
              passion for the creative world.
            </p>
            <p className="text-lg">
              Our vision{" "}
              <span className="font-medium">
                to help create a more creative world through being the
                first-choice accounting partner for the creative economy.
              </span>
            </p>
            <p className="text-lg">
              Having an Accountant is not only about having someone to figure
              out your numbers but rather relationship that accelerates your
              growth.
            </p>
            <p className="text-lg">
              We help you{" "}
              <span className="font-medium">
                manage your career/business according to your specific needs.
              </span>
            </p>
            <p className="text-lg">
              We want to see more sustainable businesses and careers within the
              creative economy.
            </p>
          </div>
        </div>

        {/* Center Section - What we do... */}
        <div className="absolute left-1/2 top-[35%] -translate-x-1/2 w-[35%] space-y-8">
          <div className="flex items-center gap-2">
            <ArrowDownRight className="w-6 h-6" />
            <h2 className="text-[2.5rem] font-light">What we do...</h2>
          </div>
          <div className="space-y-8">
            <p className="text-lg">
              We specialise in offering tailored accounting and tax services for
              our clients.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-medium">Accounting</h3>
              <ul className="space-y-1 text-lg">
                <li>- Management Accounts</li>
                <li>- Annual Financial Statements</li>
                <li>- Business pitch prep.</li>
                <li>- Budgeting</li>
                <li>- Cashflow Projections</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium">Taxation</h3>
              <ul className="space-y-1 text-lg">
                <li>- International Tax</li>
                <li>- Personal Tax</li>
                <li>- Company Tax</li>
                <li>- Tax Advisory</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - Ideal clients... */}
        <div className="absolute right-0 top-0 w-[30%] space-y-6">
          <div className="flex items-center gap-2">
            <ArrowDownRight className="w-6 h-6" />
            <h2 className="text-4xl font-light">Ideal clients...</h2>
          </div>
          <p className="text-lg">
            We work with both individuals and companies.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Individuals</h3>
            <ul className="space-y-2 text-lg">
              <li>- Stylists</li>
              <li>- Musicians</li>
              <li>- Artists</li>
              <li>- Architects</li>
              <li>- Photographers</li>
              <li>- Etc...</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Businesses</h3>
            <ul className="space-y-2 text-lg">
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

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end">
          <div>
            <h2 className="text-[2.75rem] font-light">Client Directory</h2>
          </div>
          <div className="space-y-4">
            <h2 className="text-[2.75rem] font-light">Contact Us</h2>
            <div className="space-y-1 text-lg">
              <p>Email: finquidity@gmail.com</p>
              <p>Call/Text: 0674020561</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
