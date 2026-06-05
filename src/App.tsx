/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EmotionalStruggle from "./components/EmotionalStruggle";
import Impact from "./components/Impact";
import ProblemStatement from "./components/ProblemStatement";
import AboutSajan from "./components/AboutSajan";
import ExperienceDetails from "./components/ExperienceDetails";
import Transformation from "./components/Transformation";
import Journey from "./components/Journey";
import Meditation from "./components/Meditation";
import ImagineSection from "./components/ImagineSection";
import TargetAudience from "./components/TargetAudience";
import WarningSection from "./components/WarningSection";
import BookingFormSection from "./components/BookingFormSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Booking from "./components/Booking";
import Support from "./components/Support";
import BrandingFooter from "./components/BrandingFooter";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import PopupForm from "./components/PopupForm";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-luxury-black font-sans selection:bg-orange selection:text-white">
      <LoadingScreen />
      <PopupForm />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange z-[60] origin-left shadow-[0_0_15px_rgba(242,101,34,0.5)]"
        style={{ scaleX }}
      />
      
      {/* Global Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      
      <div className="relative z-10 overflow-hidden">
        <Hero />
        <EmotionalStruggle />
        <Impact />
        <ProblemStatement />
        <AboutSajan />
        <ExperienceDetails />
        <Transformation />
        <Journey />
        <Meditation />
        <ImagineSection />
        <TargetAudience />
        <WarningSection />
        <BookingFormSection />
        <Testimonials />
        <FAQ />
        <Booking />
        <BrandingFooter />
        <Support />
        <Footer />
      </div>
    </main>
  );
}
