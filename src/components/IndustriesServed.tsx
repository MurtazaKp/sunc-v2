import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Hospital,
  Car,
  Radio,
  Sun,
  Building,
  Truck,
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

interface IndustriesServedProps {
  onExplore: () => void;
}

export function IndustriesServed({ onExplore }: IndustriesServedProps) {
  const industries = [
    {
      icon: Hospital,
      name: "Healthcare",
      title: "Uninterrupted Power for Critical Care",
      description:
        "Ensure reliable backup power for life-saving medical equipment, emergency lighting, and critical hospital infrastructure.",
      benefits: ["Zero Downtime", "Patient Safety", "Cost Reduction"],
      stats: "500+ Hospitals",
      color: "bg-red-50 text-red-600 border-red-200",
    },
    {
      icon: Car,
      name: "E-Rickshaw",
      title: "Extended Range, Better Earnings",
      description:
        "Maximize daily earnings with regenerated batteries that last 2-3 times longer than degraded ones.",
      benefits: ["Longer Trips", "Higher Income", "Less Maintenance"],
      stats: "10K+ Vehicles",
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      icon: Radio,
      name: "Telecommunications",
      title: "Reliable Network Infrastructure",
      description:
        "Maintain continuous connectivity with regenerated backup power systems for cell towers and data centers.",
      benefits: ["Network Uptime", "Signal Quality", "Operational Savings"],
      stats: "200+ Sites",
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      icon: Sun,
      name: "Solar Power",
      title: "Maximized Energy Storage",
      description:
        "Optimize solar energy storage systems with regenerated batteries for residential and commercial installations.",
      benefits: ["Better Storage", "Higher Efficiency", "Longer Lifespan"],
      stats: "1K+ Systems",
      color: "bg-yellow-50 text-yellow-600 border-yellow-200",
    },
    {
      icon: Building,
      name: "Industrial",
      title: "Continuous Production Power",
      description:
        "Keep manufacturing and industrial processes running with reliable regenerated battery backup systems.",
      benefits: [
        "Production Continuity",
        "Equipment Protection",
        "Cost Control",
      ],
      stats: "300+ Facilities",
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      icon: Truck,
      name: "Transportation",
      title: "Fleet Power Management",
      description:
        "Reduce fleet operating costs with regenerated batteries for trucks, buses, and commercial vehicles.",
      benefits: ["Fleet Efficiency", "Reduced Costs", "Better Performance"],
      stats: "2K+ Vehicles",
      color: "bg-orange-50 text-orange-600 border-orange-200",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Zap className="h-5 w-5" />
            <span className="text-sm">Industries We Serve</span>
          </div>
          <h2 className="text-3xl lg:text-4xl">
            Powering India&#39;s Critical Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From healthcare to transportation, our battery regeneration
            solutions keep essential services running efficiently and
            sustainably.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`inline-flex p-3 rounded-lg ${industry.color}`}
                  >
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {industry.stats}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {industry.name}
                    </CardTitle>
                  </div>
                  <h4 className="text-sm text-primary">{industry.title}</h4>
                </div>

                <CardDescription className="text-sm leading-relaxed">
                  {industry.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                <div className="space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl">Proven Impact Across Industries</h3>
                <p className="text-primary-foreground/90">
                  Our regeneration technology has transformed battery management
                  across diverse sectors, delivering measurable results in cost
                  savings, reliability, and environmental impact.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    <span className="text-sm">Proven Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm">Satisfied Clients</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">98%</div>
                  <div className="text-sm text-primary-foreground/80">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">70%</div>
                  <div className="text-sm text-primary-foreground/80">
                    Average Savings
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">2-3x</div>
                  <div className="text-sm text-primary-foreground/80">
                    Extended Life
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">24/7</div>
                  <div className="text-sm text-primary-foreground/80">
                    Support Available
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            onClick={onExplore}
            className="group"
          >
            Explore Industry Solutions
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
