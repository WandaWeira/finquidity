import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div className="bg-[#f3efd7]">
      <Hero />
      <Services />
      <Portfolio />
      <Newsletter />
      <Contact />
    </div>
  );
};

export default App;
