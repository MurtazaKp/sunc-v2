import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Battery, Cog, Monitor, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

interface ServicesOverviewProps {
  onLearnMore: () => void;
}

export function ServicesOverview({ onLearnMore }: ServicesOverviewProps) {
  const services = [
    {
      icon: Battery,
      title: "Battery Regeneration Service",
      description: "Revitalize your lead-acid batteries with our high-voltage regeneration technology. Extend battery life by 2-3 times while saving up to 70% compared to buying new.",
      features: ["2-3x Extended Life", "Cost-Effective", "Quick Turnaround", "Professional Assessment"],
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: Cog,
      title: "Regenerator Manufacturing",
      description: "Advanced high-voltage battery regenerators for businesses. International quality equipment designed for efficiency, durability, and ease of use.",
      features: ["International Quality", "High Efficiency", "Easy Operation", "Durable Design"],
      color: "bg-green-50 text-green-600 border-green-200"
    },
    {
      icon: Monitor,
      title: "Battery Monitoring System",
      description: "Automated real-time monitoring for seamless power management. Get alerts, performance insights, and proactive maintenance recommendations.",
      features: ["Real-time Monitoring", "Performance Alerts", "Predictive Maintenance", "Remote Access"],
      color: "bg-purple-50 text-purple-600 border-purple-200"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Zap className="h-5 w-5" />
            <span className="text-sm">What We Do</span>
          </div>
          <h2 className="text-3xl lg:text-4xl">
            Comprehensive Battery Solutions for Every Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From individual battery regeneration to enterprise monitoring systems, 
            we provide end-to-end solutions for sustainable energy management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className={`inline-flex p-3 rounded-lg ${service.color} mb-4`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl text-primary">
                  Simple Process, Remarkable Results
                </h3>
                <p className="text-muted-foreground">
                  Our proven 3-step regeneration process has successfully restored over 15,000 batteries 
                  across 75+ service centers throughout India. Experience the difference of professional 
                  battery regeneration.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Safe & Reliable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Proven Results</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-background border">
                  <div className="text-2xl text-primary mb-2">1</div>
                  <div className="text-sm">Battery Assessment</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-background border">
                  <div className="text-2xl text-primary mb-2">2</div>
                  <div className="text-sm">Regeneration Process</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-background border">
                  <div className="text-2xl text-primary mb-2">3</div>
                  <div className="text-sm">Quality Testing</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" onClick={onLearnMore} className="group">
            Explore All Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}