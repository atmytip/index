import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardSection from "@/components/DashboardSection";
import PricingSection from "@/components/PricingSection";
import EmployeePortalSection from "@/components/EmployeePortalSection";
import DemoBookingSection from "@/components/DemoBookingSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white" data-testid="landing-page">
      <Navigation isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardSection />
        <PricingSection />
        <EmployeePortalSection />
        <DemoBookingSection />
      </main>
      <Footer />
    </div>
  );
}
