"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { IndustriesServed } from "@/components/IndustriesServed";
import { WhyChooseSunC } from "@/components/WhyChooseSunC";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Applications } from "@/components/Applications";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { BecomePartner } from "@/components/BecomePartner";
import { Footer } from "@/components/Footer";
import { GetQuoteDialog } from "@/components/GetQuoteDialog";
import { Toaster } from "@/components/ui/sonner";

type ActivePage =
  | "home"
  | "about"
  | "services"
  | "products"
  | "applications"
  | "faq"
  | "contact"
  | "partner";

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>("home");
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);

  const handleNavigation = (page: ActivePage) => {
    setActivePage(page);
  };

  const handleGetQuote = () => {
    setIsQuoteDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onGetQuote={handleGetQuote} />
      <ServicesOverview onLearnMore={() => handleNavigation("services")} />
      <WhyChooseSunC />
      <IndustriesServed onExplore={() => handleNavigation("applications")} />

      {/* Global Quote Dialog */}
      <GetQuoteDialog
        open={isQuoteDialogOpen}
        onOpenChange={setIsQuoteDialogOpen}
        variant="quote"
      />
    </div>
  );
}
