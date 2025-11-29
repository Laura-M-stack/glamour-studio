import React, { useEffect, useState } from "react";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StaffSection from "./components/StaffSection";
import Footer from "./components/Footer";
import TurnosSection from "./components/TurnosSection";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <ServicesSection />
        <TestimonialsSection />
        <StaffSection />
        <TurnosSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
