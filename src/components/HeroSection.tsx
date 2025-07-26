import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Battery, Recycle, DollarSign, Leaf, ArrowRight, Play, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  onGetQuote: () => void;
}

export function HeroSection({ onGetQuote }: HeroSectionProps) {
  const benefits = [
    { icon: Battery, text: "2-3x Extended Battery Life" },
    { icon: DollarSign, text: "Up to 70% Cost Savings" },
    { icon: Leaf, text: "Eco-Friendly Solution" },
    { icon: Recycle, text: "15,000+ Batteries Regenerated" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-primary">
                <Battery className="h-4 w-4" />
                <span>Pioneering Battery Regeneration in India</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl leading-tight">
                Extend Battery Life, 
                <span className="text-primary"> Save Money</span>, 
                <span className="text-primary"> Save the Planet</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Revolutionary sustainable energy solutions through advanced battery regeneration technology. 
                Revitalize your lead-acid batteries and maximize their potential while reducing environmental impact.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card border">
                  <div className="flex-shrink-0 p-2 rounded-md bg-primary/10">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onGetQuote} className="group">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 border-t">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">75+ Service Centers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">International Quality</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="space-y-6">
                {/* Battery Regeneration Visualization */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Old Battery */}
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-red-50 border border-red-200">
                      <Battery className="h-12 w-12 text-red-500" />
                      <div>
                        <div className="text-sm">Old Battery</div>
                        <div className="text-xs text-red-600">30% Capacity</div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex items-center justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                    
                    {/* Regenerated Battery */}
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-green-50 border border-green-200">
                      <Battery className="h-12 w-12 text-green-500" />
                      <div>
                        <div className="text-sm">Regenerated Battery</div>
                        <div className="text-xs text-green-600">85-95% Capacity</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="space-y-3">
                  <h3 className="text-center text-primary">Our 3-Step Process</h3>
                  <div className="grid grid-cols-3 gap-2 text-xs text-center">
                    <div className="p-2 rounded bg-primary/10">
                      <div className="text-primary mb-1">1</div>
                      <div>Assessment</div>
                    </div>
                    <div className="p-2 rounded bg-primary/10">
                      <div className="text-primary mb-1">2</div>
                      <div>Regeneration</div>
                    </div>
                    <div className="p-2 rounded bg-primary/10">
                      <div className="text-primary mb-1">3</div>
                      <div>Testing</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl">15K+</div>
                <div className="text-xs">Batteries Regenerated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}