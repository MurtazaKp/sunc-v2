"use client";
import { useState } from "react";
// import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { IndustriesServed } from "@/components/IndustriesServed";
import { WhyChooseSunC } from "@/components/WhyChooseSunC";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { Applications } from "@/components/Applications";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type ActivePage =
  | "home"
  | "about"
  | "services"
  | "applications"
  | "faq"
  | "contact";

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>("home");

  const handleNavigation = (page: ActivePage) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <AboutUs />;
      case "services":
        return <Services />;
      case "applications":
        return <Applications />;
      case "faq":
        return <FAQ />;
      case "contact":
        return <Contact />;
      default:
        return (
          <>
            <HeroSection onGetQuote={() => handleNavigation("contact")} />
            <ServicesOverview
              onLearnMore={() => handleNavigation("services")}
            />
            <WhyChooseSunC />
            <IndustriesServed
              onExplore={() => handleNavigation("applications")}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activePage={activePage} onNavigate={handleNavigation} />
      {renderPage()}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
