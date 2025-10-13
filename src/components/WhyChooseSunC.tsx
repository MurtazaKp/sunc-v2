import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Award,
  Users,
  Leaf,
  DollarSign,
  Battery,
  MapPin,
  Clock,
  Shield,
} from "lucide-react";

export function WhyChooseSunC() {
  const reasons = [
    {
      icon: Award,
      title: "Industry Pioneers",
      description:
        "First to introduce battery regeneration technology in India with 15,000+ successful regenerations",
      stats: "15K+ Batteries",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Extensive Network",
      description:
        "75+ regeneration centers across India, making our services easily accessible nationwide",
      stats: "75+ Centers",
      color: "text-green-600",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description:
        "Save up to 70% compared to buying new batteries while getting 2-3x extended battery life",
      stats: "70% Savings",
      color: "text-purple-600",
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description:
        "Reduce battery waste and promote circular economy through sustainable regeneration technology",
      stats: "Eco-Friendly",
      color: "text-emerald-600",
    },
    {
      icon: Battery,
      title: "Advanced Technology",
      description:
        "High-voltage regenerators with international quality standards for optimal battery restoration",
      stats: "Hi-Tech Equipment",
      color: "text-orange-600",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description:
        "Fast and efficient service with minimal downtime for your critical power systems",
      stats: "Fast Service",
      color: "text-red-600",
    },
  ];

  const achievements = [
    { label: "Batteries Regenerated", value: "50,000+", icon: Battery },
    { label: "Service Centers", value: "75+", icon: MapPin },
    { label: "Years of Experience", value: "10+", icon: Award },
    { label: "Customer Satisfaction", value: "98%", icon: Users },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-primary border-primary">
            Why Choose SunC
          </Badge>
          <h2 className="text-3xl lg:text-4xl">
            Leading India&apos;s Battery Regeneration Revolution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With cutting-edge technology, extensive experience, and commitment
            to sustainability, we&apos;re transforming how India approaches
            battery management.
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow"
            >
              <CardContent className="space-y-3 p-0">
                <div className="inline-flex p-3 rounded-full bg-primary/10">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl text-primary">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-background border ${reason.color}`}
                  >
                    <reason.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {reason.stats}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm text-green-600">
                  Certified Quality
                </span>
              </div>
              <h3 className="text-xl">Trusted by Leading Industries</h3>
              <p className="text-muted-foreground text-sm">
                From hospitals to telecom companies, our regeneration services
                power critical infrastructure across India.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-lg bg-background border">
                <div className="text-lg text-primary">ISO</div>
                <div className="text-xs text-muted-foreground">Certified</div>
              </div>
              <div className="p-4 rounded-lg bg-background border">
                <div className="text-lg text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {[
                "Hospitals",
                "Telecom",
                "E-Rickshaw",
                "Solar",
                "Industrial",
              ].map((industry) => (
                <Badge key={industry} variant="outline" className="text-xs">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
