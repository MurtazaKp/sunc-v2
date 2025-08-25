import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Phone } from "lucide-react";

type ActivePage =
  | "home"
  | "about"
  | "services"
  | "products"
  | "applications"
  | "faq"
  | "contact"
  | "partner";

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onGetQuote: () => void;
}

export function Header({ activePage, onNavigate, onGetQuote }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", key: "home" as const },
    { name: "About Us", key: "about" as const },
    { name: "Services", key: "services" as const },
    { name: "Products", key: "products" as const },
    { name: "Applications", key: "applications" as const },
    { name: "Partner", key: "partner" as const },
    { name: "FAQ", key: "faq" as const },
    { name: "Contact", key: "contact" as const },
  ];

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setIsOpen(false);
  };

  const handleGetQuoteClick = () => {
    onGetQuote();
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            src={"/SuncLogo.svg"}
            alt="SunC Battery Solutions Logo"
            className="h-10 w-auto"
          />
          <div className="flex flex-col items-start">
            <span className="text-sm text-muted-foreground">
              Battery Solutions
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className={`text-sm transition-colors hover:text-primary ${
                activePage === item.key
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+91-XXX-XXX-XXXX</span>
          </div>
          <Button onClick={handleGetQuoteClick}>Get Quote</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-3 pb-4 border-b">
                {/* <img 
                  src={suncLogo} 
                  alt="SunC Battery Solutions Logo" 
                  className="h-8 w-auto"
                /> */}
                <div className="flex flex-col items-start">
                  <span className="text-sm text-muted-foreground">
                    Battery Solutions
                  </span>
                </div>
              </div>

              <nav className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className={`text-left p-3 rounded-md transition-colors ${
                      activePage === item.key
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
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
    </header>
  );
}
