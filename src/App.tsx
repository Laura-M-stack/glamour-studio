import { MotionConfig } from "framer-motion";
import DemoBanner from "./components/DemoBanner";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ServicesSection from "./components/ServicesSection";
import StaffSection from "./components/StaffSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TurnosSection from "./components/TurnosSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    // Honors the OS "reduce motion" setting for every framer-motion animation.
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <DemoBanner />
      <Topbar />
      <main id="contenido">
        <Hero />
        <Marquee />
        <ServicesSection />
        <StaffSection />
        <TestimonialsSection />
        <TurnosSection />
      </main>
      <Footer />
    </MotionConfig>
  );
}
