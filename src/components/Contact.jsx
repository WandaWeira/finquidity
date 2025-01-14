import React, { useState } from "react";
import {
  ArrowDownRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Circle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#f3efd7] px-32 py-20 relative overflow-hidden">
      {/* Artistic header with dynamic elements */}
      <div className="relative mb-40">
        <span className="text-[20rem] font-light leading-none opacity-5 absolute -top-32 -left-20 select-none">
          06
        </span>
        <div className="relative z-10">
          <div className="flex items-baseline gap-4 mb-8">
            <Circle className="w-4 h-4 opacity-30" />
            <h2 className="text-[8rem] font-light leading-none">Let's</h2>
          </div>
          <div className="flex items-baseline gap-4 ml-40">
            <Circle className="w-4 h-4 opacity-30" />
            <h2 className="text-[8rem] font-light leading-none">Connect</h2>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 border border-black/10 rounded-full opacity-20 -z-10"></div>
      </div>

      {/* Main content grid with enhanced artistic layout */}
      <div className="grid grid-cols-12 gap-16">
        {/* Left column - Contact form */}
        <div className="col-span-7">
          <div className="relative group">
            <div className="bg-black/5 p-16 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-2 relative">
                    <Circle className="w-2 h-2 opacity-30 absolute -left-4 top-8" />
                    <label className="text-sm uppercase tracking-wider opacity-60">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-b border-black/20 focus:border-black/40 outline-none text-lg"
                      required
                    />
                  </div>
                  <div className="space-y-2 relative">
                    <Circle className="w-2 h-2 opacity-30 absolute -left-4 top-8" />
                    <label className="text-sm uppercase tracking-wider opacity-60">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-b border-black/20 focus:border-black/40 outline-none text-lg"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 relative">
                  <Circle className="w-2 h-2 opacity-30 absolute -left-4 top-8" />
                  <label className="text-sm uppercase tracking-wider opacity-60">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-0 py-4 bg-transparent border-b border-black/20 focus:border-black/40 outline-none text-lg resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group flex items-center gap-2 text-lg hover:gap-4 transition-all"
                >
                  Send Message
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

        {/* Right column - Contact information */}
        <div className="col-span-5 space-y-24 pt-20">
          <div className="relative group">
            <span className="text-9xl font-light opacity-5 absolute -top-20 -left-20 select-none">
              01
            </span>
            <div className="relative border-l-2 border-black/20 pl-12 py-8 transform group-hover:-translate-x-2 transition-transform">
              <Circle className="w-3 h-3 absolute -left-[0.3rem] top-10 opacity-30" />
              <span className="text-sm uppercase tracking-wider opacity-50">
                Email & Phone
              </span>
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-4 group/item">
                  <Mail
                    className="w-6 h-6 group-hover/item:scale-110 transition-transform"
                    strokeWidth={1.25}
                  />
                  <p className="text-lg">finquidity@gmail.com</p>
                </div>
                <div className="flex items-center gap-4 group/item">
                  <Phone
                    className="w-6 h-6 group-hover/item:scale-110 transition-transform"
                    strokeWidth={1.25}
                  />
                  <p className="text-lg">0674020561</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <span className="text-9xl font-light opacity-5 absolute -top-20 -left-20 select-none">
              02
            </span>
            <div className="relative border-l-2 border-black/20 pl-12 py-8 transform group-hover:-translate-x-2 transition-transform">
              <Circle className="w-3 h-3 absolute -left-[0.3rem] top-10 opacity-30" />
              <span className="text-sm uppercase tracking-wider opacity-50">
                Visit Our Studio
              </span>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-4 group/item">
                  <MapPin
                    className="w-6 h-6 group-hover/item:scale-110 transition-transform"
                    strokeWidth={1.25}
                  />
                  <div>
                    <p className="text-lg">123 Creative Street</p>
                    <p className="text-lg">Art District, City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <span className="text-9xl font-light opacity-5 absolute -top-20 -left-20 select-none">
              03
            </span>
            <div className="relative border-l-2 border-black/20 pl-12 py-8 transform group-hover:-translate-x-2 transition-transform">
              <Circle className="w-3 h-3 absolute -left-[0.3rem] top-10 opacity-30" />
              <span className="text-sm uppercase tracking-wider opacity-50">
                Studio Hours
              </span>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-4 group/item">
                  <Clock
                    className="w-6 h-6 group-hover/item:scale-110 transition-transform"
                    strokeWidth={1.25}
                  />
                  <div>
                    <p className="text-lg">Monday - Friday: 9am - 5pm</p>
                    <p className="text-lg">Weekend: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
