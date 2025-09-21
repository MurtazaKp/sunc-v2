import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
// import suncLogo from "figma:asset/5999997ad884f52431f480b4cf38b265dd2cfd2b.png";
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
  Zap,
  Clock,
  Globe,
} from "lucide-react";
import Link from "next/link";

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
  onGetQuote: () => void;
}

export function Footer({ onGetQuote }: FooterProps) {
  const quickLinks = [
    { name: "Home", href: "/" as const },
    { name: "About Us", href: "/about-us" as const },
    { name: "Services", href: "/services" as const },
    { name: "Products", href: "/products" as const },
    { name: "Applications", href: "applications" as const },
    { name: "Partner", href: "/partner" as const },
    { name: "FAQ", href: "/faq" as const },
    { name: "Contact", href: "/contact" as const },
  ];

  const services = [
    "Battery Regeneration",
    "Regenerator Manufacturing",
    "Technical Consulting",
    "Training Programs",
    "Bulk Services",
    "Warranty Support",
  ];

  const products = [
    "RG-4X Regenerator",
    "RG-8X Regenerator",
    "RG-16X Regenerator",
    "Load Tester",
    "Output Cable",
    "Hydrometer",
  ];

  const industries = [
    "Healthcare",
    "Banking",
    "Solar Power",
    "Industrial",
    "Transportation",
    "Education",
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      name: "Facebook",
      color: "hover:text-blue-600",
    },
    { icon: Twitter, href: "#", name: "Twitter", color: "hover:text-blue-400" },
    {
      icon: Linkedin,
      href: "#",
      name: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: Instagram,
      href: "#",
      name: "Instagram",
      color: "hover:text-pink-600",
    },
    { icon: Youtube, href: "#", name: "YouTube", color: "hover:text-red-600" },
  ];

  const serviceCenters = [
    { city: "Mumbai", contact: "+91-9876543210" },
    { city: "Delhi", contact: "+91-9876543211" },
    { city: "Bangalore", contact: "+91-9876543212" },
    { city: "Chennai", contact: "+91-9876543213" },
    { city: "Kolkata", contact: "+91-9876543214" },
    { city: "Pune", contact: "+91-9876543215" },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 cultural-pattern opacity-20"></div>
          <CardContent className="p-8 text-center space-y-6 relative">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="h-6 w-6 animate-pulse" />
                <h2 className="text-2xl">
                  Stay Updated with Battery Innovation
                </h2>
              </div>
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
              <Button
                variant="secondary"
                className="whitespace-nowrap hover:scale-105 transition-transform"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-primary-foreground/70">
              Join 10,000+ industry professionals who trust SunC for battery
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
              <div className="relative">
                <img
                  src={"/SuncLogo.svg"}
                  alt="SunC Battery Solutions Logo"
                  className=" h-16 w-auto"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-green-500/20 rounded-lg blur opacity-75"></div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
                  Battery Solutions
                </span>
                <span className="text-xs text-muted-foreground">Est. 2012</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Pioneering sustainable battery solutions in India since 2012.
              We&apos;ve regenerated 40,000+ batteries across 400+ service
              centers, helping businesses save costs while protecting the
              environment.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Award className="h-5 w-5 text-primary mx-auto mb-1 animate-pulse" />
                <div className="text-sm">40K+ Batteries</div>
                <div className="text-xs text-muted-foreground">Regenerated</div>
              </div>
              <div className="text-center">
                <Shield className="h-5 w-5 text-green-500 mx-auto mb-1 animate-pulse" />
                <div className="text-sm">400+ Centers</div>
                <div className="text-xs text-muted-foreground">Nationwide</div>
              </div>
              <div className="text-center">
                <Leaf className="h-5 w-5 text-emerald-500 mx-auto mb-1 animate-pulse" />
                <div className="text-sm">70-80% Satisfaction</div>
                <div className="text-xs text-muted-foreground">
                  Customer Rate
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground animate-pulse" />
                <span className="text-sm">1800-XXX-XXXX (Toll Free)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground animate-pulse" />
                <span className="text-sm">info@suncbattery.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 animate-pulse" />
                <span className="text-sm">
                  Head Office: 123 Battery Street, Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary animate-pulse" />
              Quick Links
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary animate-pulse" />
              Our Services
            </h3>
            <nav className="space-y-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transform duration-200"
                >
                  {service}
                </div>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary animate-pulse" />
              Products
            </h3>
            <nav className="space-y-2">
              {products.map((product) => (
                <div
                  key={product}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transform duration-200"
                >
                  {product}
                </div>
              ))}
            </nav>
          </div>

          {/* Service Centers & CTA */}
          <div className="space-y-4">
            <h3 className="text-lg flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary animate-pulse" />
              Service Centers
            </h3>
            <div className="space-y-2">
              {serviceCenters.slice(0, 4).map((center) => (
                <div key={center.city} className="text-sm">
                  <div className="font-medium text-muted-foreground">
                    {center.city}
                  </div>
                  <div className="text-xs text-primary hover:underline cursor-pointer">
                    {center.contact}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote CTA */}
            <Card className="mt-6 bg-gradient-to-r from-primary/5 to-green-500/5 border-primary/20">
              <CardContent className="p-4 text-center">
                <h4 className="text-sm mb-2 flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 animate-pulse" />
                  Need a Quote?
                </h4>
                <Button
                  onClick={onGetQuote}
                  size="sm"
                  className="w-full hover:scale-105 transition-transform"
                >
                  Get Instant Quote
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4 text-center">
                <Phone className="h-5 w-5 text-red-600 mx-auto mb-2 animate-pulse" />
                <div className="text-sm">Emergency Support</div>
                <div className="text-xs text-red-600">24/7 Available</div>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2 text-red-600 border-red-300 hover:bg-red-100 hover:scale-105 transition-transform"
                >
                  <MessageCircle className="mr-2 h-3 w-3 animate-pulse" />
                  Call Now (Support)
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
            © 2012-2024 SunC Battery Solutions. All rights reserved. |
            <span className="hover:text-primary cursor-pointer ml-1 transition-colors">
              Privacy Policy
            </span>{" "}
            |
            <span className="hover:text-primary cursor-pointer ml-1 transition-colors">
              Terms of Service
            </span>
          </div>

          {/* Social Links - Highlighted Icons */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Follow us:</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} animate-pulse`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="h-4 w-4 animate-pulse" />
            <span>ISO Certified | Make in India | Est. 2012</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
