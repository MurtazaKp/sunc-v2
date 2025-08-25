import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowRight,
  Battery,
  Zap,
  Award,
  Leaf,
  TrendingUp,
  CheckCircle,
  Play,
  Target,
  Recycle,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
} from "lucide-react";

interface HeroSectionProps {
  onGetQuote: () => void;
}

export function HeroSection({ onGetQuote }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trustIndicators = [
    {
      icon: Battery,
      value: "40,000+",
      label: "Batteries Regenerated",
      isAnimated: true,
    },
    { icon: MapPin, value: "400+", label: "Service Centers", isAnimated: true },
    {
      icon: Award,
      value: "70-80%",
      label: "Customer Satisfaction",
      isAnimated: true,
    },
    {
      icon: Leaf,
      value: "Max 2 Years",
      label: "Extended Battery Life",
      isAnimated: true,
    },
  ];

  const benefits = [
    { icon: TrendingUp, text: "Save up to 70% on battery replacement costs" },
    { icon: Recycle, text: "Reduce environmental impact significantly" },
    { icon: Target, text: "Extend battery life by 2-3x through regeneration" },
    { icon: CheckCircle, text: "Professional service with 2-year warranty" },
  ];

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1581092787765-e3c8b36952f8?w=800&h=600&fit=crop",
      title: "Advanced Battery Regeneration Technology",
      description:
        "Our state-of-the-art regenerators restore battery capacity by removing sulfation and extending operational life.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      title: "Industrial Battery Solutions",
      description:
        "Comprehensive battery regeneration services for industrial applications and heavy-duty equipment.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      title: "Eco-Friendly Power Solutions",
      description:
        "Sustainable battery regeneration that reduces waste and environmental impact while saving costs.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative">
        {/* Welcome Badge */}
        <div className="text-center mb-8">
          <Badge
            variant="outline"
            className="text-primary border-primary text-lg px-6 py-3 animate-pulse"
          >
            🔋 Welcome to SunC - Est. 2012
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Hero Content */}
          <div className="space-y-8">
            {/* Main Headline with Infographic Style */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-4xl lg:text-6xl leading-tight bg-gradient-to-r from-primary via-green-600 to-primary bg-clip-text text-transparent">
                  India&apos;s Leading Battery Regeneration Revolution
                </h1>
                <div className="absolute -top-4 -right-4 text-6xl animate-bounce opacity-20">
                  ⚡
                </div>
              </div>

              <div className="flex items-center gap-1 text-lg">
                <span>We</span>
                <span className="text-primary">&apos;re</span>
                <span>Transforming Power Storage Across India</span>
              </div>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Transform your dead batteries into powerful, long-lasting energy
                sources with SunC&apos;s advanced regeneration technology.
                Extend battery life by 2-3x while saving up to 70% on
                replacement costs.
              </p>
            </div>

            {/* Battery Capacity Comparison */}
            <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-xl border">
              <h3 className="text-lg mb-4 text-center">
                Battery Capacity Comparison
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="relative mb-3">
                    <div className="w-16 h-8 mx-auto bg-red-200 rounded border-2 border-red-400">
                      <div className="w-1/5 h-full bg-red-500 rounded-l"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 text-red-500 animate-pulse">
                      ⚠️
                    </div>
                  </div>
                  <div className="text-2xl text-red-600 mb-1">20%</div>
                  <div className="text-sm text-red-600">
                    Old Battery Capacity
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative mb-3">
                    <div className="w-16 h-8 mx-auto bg-green-200 rounded border-2 border-green-400">
                      <div className="w-4/5 h-full bg-green-500 rounded-l"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 text-green-500 animate-bounce">
                      ✅
                    </div>
                  </div>
                  <div className="text-2xl text-green-600 mb-1">70-80%</div>
                  <div className="text-sm text-green-600">
                    Regenerated Battery
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10">
                    <benefit.icon className="h-4 w-4 text-primary animate-pulse" />
                  </div>
                  <span className="text-sm lg:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-green-600 hover:from-green-600 hover:to-primary transition-all duration-300"
                onClick={onGetQuote}
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image Slider */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0 relative">
                <div className="relative h-96 lg:h-[500px] pb-0">
                  {heroSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <ImageWithFallback
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay Content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-xl mb-2">{slide.title}</h3>
                          <p className="text-sm opacity-90">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slider Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Slider Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Live Stats Floating Card */}
                <div className="absolute top-4 right-4">
                  <Card className="bg-background/90 backdrop-blur-sm">
                    <CardContent className="p-3 text-center">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="h-4 w-4 text-primary animate-pulse" />
                        <span className="text-sm">Live Stats</span>
                      </div>
                      <div className="text-lg text-primary">40,247</div>
                      <div className="text-xs text-muted-foreground">
                        Batteries Saved
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators - 4 Highlighted Key Boxes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustIndicators.map((indicator, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20"
            >
              <CardContent className="space-y-3 p-0">
                <div className="flex justify-center">
                  <div
                    className={`p-3 rounded-full bg-primary/10 ${
                      indicator.isAnimated ? "animate-pulse" : ""
                    }`}
                  >
                    <indicator.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl text-primary">
                  {indicator.value}
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground">
                  {indicator.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Strip - Blue Box */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground  border-0">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl mb-2 text-[#2b2a51]">
                  Ready to Transform Your Battery?
                </h3>
                <p className="text-white">
                  Join thousands of satisfied customers who&apos;ve saved
                  millions on battery costs
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={onGetQuote}
                  variant="secondary"
                  size="lg"
                  className=" "
                >
                  Start Saving Today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Call Now (Support)
                  <Phone className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-20">
          <ImageWithFallback
            src={
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
            }
            className=" rounded-xl   object-cover"
          />
        </Card>
      </div>
    </section>
  );
}
