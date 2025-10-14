"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  // onNavigate: (page: string) => void;
  onGetQuote: () => void;
}

export function Header({ onGetQuote }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Applications", href: "/applications" },
    { name: "Partner", href: "/partner" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const handleGetQuoteClick = () => {
    onGetQuote();
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            src="/SuncLogo.svg"
            alt="SunC Battery Solutions Logo"
            className="h-10 w-auto"
          />
          <div className="flex flex-col items-start">
            <span className="text-sm text-muted-foreground">
              Battery Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className=" items-center gap-4">
          <div className="hidden md:flex">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href="tel:+917276050250" className="text-sm">
                +91 7276050250
              </a>
            </div>
            <Button onClick={handleGetQuoteClick}>Get Quote</Button>
          </div>
          <div className="lg:hidden ">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 px-3">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <div className="flex items-center gap-4 ">
                      <img
                        src="/SuncLogo.svg"
                        alt="SunC Battery Solutions Logo"
                        className="h-10 w-auto"
                      />
                      <span className="text-sm text-muted-foreground">
                        Battery Solutions
                      </span>
                    </div>
                  </div>

                  <nav className="flex flex-col gap-3">
                    {navigation.map((item) => {
                      const isActive =
                        pathname === item.href ||
                        pathname.startsWith(item.href + "/");
                      return (
                        <button
                          key={item.name}
                          className={`text-left p-3 rounded-md transition-colors ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-accent"
                          }`}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </nav>

                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>+91-XXX-XXX-XXXX</span>
                    </div>
                    <Button className="w-full" onClick={handleGetQuoteClick}>
                      Get Quote
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Menu */}
      </div>
    </header>
  );
}
