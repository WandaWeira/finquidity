import React from "react";
import { ArrowDownRight, Circle } from "lucide-react";
import AbstractImages from "./AbstractImages";

const ServiceCard = ({ title, items }) => (
  <div className="relative group">
    <div className="bg-black/5 p-6 md:p-12 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
      <h3 className="text-xl md:text-2xl font-medium mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-base md:text-lg"
          >
            <Circle className="w-1.5 h-1.5 opacity-30" />
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="absolute inset-0 border border-black/20 transform translate-x-2 translate-y-2 -z-10"></div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Accounting",
      items: [
        "Management Accounts",
        "Annual Financial Statements",
        "Business pitch prep.",
        "Budgeting",
        "Cashflow Projections",
      ],
    },
    {
      title: "Taxation",
      items: [
        "International Tax",
        "Personal Tax",
        "Company Tax",
        "Tax Advisory",
      ],
    },
    {
      title: "Advisory",
      items: [
        "Business Strategy",
        "Financial Planning",
        "Growth Strategy",
        "Risk Management",
      ],
    },
  ];

  return (
    <div
      id="services"
      className="min-h-screen bg-[#f3efd7] px-4 sm:px-8 md:px-16 lg:px-32 py-10 md:py-20 relative overflow-hidden"
    >
      {/* Abstract Images */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -z-10">
        <AbstractImages position="right" variant="3" />
      </div>

      <div className="flex items-center gap-3 mb-12 md:mb-20">
        <ArrowDownRight
          className="w-6 h-6 md:w-8 md:h-8 -rotate-45"
          strokeWidth={1.25}
        />
        <h2 className="text-3xl md:text-[4rem] font-light leading-none">
          What we do...
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Abstract image bottom-left */}
      <div className="absolute bottom-0 left-0 -z-10">
        <AbstractImages position="left" variant="1" />
      </div>
    </div>
  );
};

export default Services;
