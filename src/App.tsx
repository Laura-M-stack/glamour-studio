import React from "react";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StaffSection from "./components/StaffSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <ServicesSection />
        <TestimonialsSection />
        <StaffSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
