import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Award,
  Leaf,
  Shield,
} from "lucide-react";

type ActivePage =
  | "home"
  | "about"
  | "services"
  | "products"
  | "applications"
  | "faq"
  | "contact"
  | "partner";

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onGetQuote: () => void;
}

export function Footer({ onNavigate, onGetQuote }: FooterProps) {
  const quickLinks = [
    { name: "Home", key: "home" as const },
    { name: "About Us", key: "about" as const },
    { name: "Services", key: "services" as const },
    { name: "Products", key: "products" as const },
    { name: "Applications", key: "applications" as const },
    { name: "Partner", key: "partner" as const },
    { name: "FAQ", key: "faq" as const },
    { name: "Contact", key: "contact" as const },
  ];

  const services = [
    "Battery Regeneration",
    "Regenerator Manufacturing",
    "Battery Monitoring",
    "Bulk Services",
    "Technical Consulting",
    "Training Programs",
  ];

  const products = [
    "RG-4X Regenerator",
    "RG-8X Regenerator",
    "RG-16X Regenerator",
    "Monitoring Systems",
    "Accessories",
    "Spare Parts",
  ];

  const industries = [
    "Healthcare",
    "E-Rickshaw",
    "Telecommunications",
    "Solar Power",
    "Industrial",
    "Transportation",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-8 text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl">Stay Updated with Battery Innovation</h2>
              <p className="text-primary-foreground/90">
                Get the latest news on battery technology, tips for battery
                maintenance, and exclusive offers
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-primary-foreground/70">
              Join 5,000+ industry professionals who trust SunC for battery
              insights
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={"/SuncLogo.svg"}
                alt="SunC Battery Solutions Logo"
                className="h-12 w-auto"
              />
              <div className="flex flex-col items-start">
                <span className="text-sm text-muted-foreground">
                  Battery Solutions
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Pioneering sustainable battery solutions in India since 2014.
              We&apos;ve regenerated 15,000+ batteries across 75+ service
              centers, helping businesses save costs while protecting the
              environment.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Award className="h-5 w-5 text-primary mx-auto mb-1" />
                <div className="text-sm">15K+ Batteries</div>
                <div className="text-xs text-muted-foreground">Regenerated</div>
              </div>
              <div className="text-center">
                <Shield className="h-5 w-5 text-green-500 mx-auto mb-1" />
                <div className="text-sm">75+ Centers</div>
                <div className="text-xs text-muted-foreground">Nationwide</div>
              </div>
              <div className="text-center">
                <Leaf className="h-5 w-5 text-emerald-500 mx-auto mb-1" />
                <div className="text-sm">98% Satisfaction</div>
                <div className="text-xs text-muted-foreground">
                  Customer Rate
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+91-XXX-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">info@suncbattery.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-sm">
                  123 Battery Street, Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => onNavigate(link.key)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg">Our Services</h3>
            <nav className="space-y-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {service}
                </div>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg">Products</h3>
            <nav className="space-y-2">
              {products.map((product) => (
                <div
                  key={product}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {product}
                </div>
              ))}
            </nav>
          </div>

          {/* Industries & CTA */}
          <div className="space-y-4">
            <h3 className="text-lg">Industries</h3>
            <nav className="space-y-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {industry}
                </div>
              ))}
            </nav>

            {/* Quote CTA */}
            <Card className="mt-6 bg-primary/5 border-primary/20">
              <CardContent className="p-4 text-center">
                <h4 className="text-sm mb-2">Need a Quote?</h4>
                <Button onClick={onGetQuote} size="sm" className="w-full">
                  Get Instant Quote
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4 text-center">
                <Phone className="h-5 w-5 text-red-600 mx-auto mb-2" />
                <div className="text-sm">Emergency Support</div>
                <div className="text-xs text-red-600">24/7 Available</div>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2 text-red-600 border-red-300 hover:bg-red-100"
                >
                  <MessageCircle className="mr-2 h-3 w-3" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2024 SunC Battery Solutions. All rights reserved. |
            <span className="hover:text-primary cursor-pointer ml-1">
              Privacy Policy
            </span>{" "}
            |
            <span className="hover:text-primary cursor-pointer ml-1">
              Terms of Service
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Follow us:</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>ISO Certified | Make in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
