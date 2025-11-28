import React, { useEffect, useState } from "react";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StaffSection from "./components/StaffSection";
import Footer from "./components/Footer";
import TurnosSection from "./components/TurnosSection";
import Loader from "./components/Loader";

export type ThemeMode = "light" | "dark";

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Topbar theme={theme} onToggleTheme={() =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
      } />
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
