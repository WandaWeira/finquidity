import React from "react";
import Hero from "./components/Hero";
import Service from "./components/Service";
import WhoWeAre from "./components/WhoWeAre";
import IdealClients from "./components/IdealClients";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="bg-[#f3efd7]">
      <Hero />
      <Services />
      <WhoWeAre />
      <Service />
      <IdealClients />
      <Portfolio />
      <Newsletter />
      <Contact />
    </div>
  );
};

export default App;
