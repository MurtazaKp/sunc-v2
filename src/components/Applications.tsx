"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Hospital,
  Car,
  GraduationCap,
  Sun,
  Building,
  Truck,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Phone,
  BarChart3,
} from "lucide-react";

export function Applications() {
  const [activeIndustry, setActiveIndustry] = useState("healthcare");

  const industries = {
    healthcare: {
      icon: Hospital,
      name: "Healthcare",
      title: "Uninterrupted Power for Critical Care",
      description:
        "Ensure reliable backup power for life-saving medical equipment, emergency lighting, and critical hospital infrastructure with our regenerated battery solutions.",
      challenges: [
        "Critical equipment requires 100% uptime",
        "High replacement costs impact budgets",
        "Frequent power outages in many regions",
        "Need for reliable emergency backup",
      ],
      solutions: [
        "Extended battery life reduces replacement frequency",
        "70% cost savings compared to new batteries",
        "Reliable performance during emergencies",
        "Quick regeneration turnaround minimizes downtime",
      ],
      benefits: [
        "Patient Safety Assured",
        "Reduced Operating Costs",
        "Minimal Equipment Downtime",
        "Environmental Compliance",
      ],
      caseStudy: {
        title: "Max Super Speciality Hospital, Delhi",
        challenge:
          "Hospital's UPS system batteries were failing frequently, causing power disruptions in critical care units",
        solution:
          "SunC regenerated 240 UPS batteries using advanced electro-chemical treatment",
        results:
          "99.9% uptime reliability achieved, ₹12 lakhs annual savings, 200% battery life extension",
      },
      stats: {
        clients: "500+ Hospitals",
        savings: "60-70%",
        uptime: "99.9%",
        satisfaction: "98%",
      },
    },
    erickshaw: {
      icon: Car,
      name: "E-Rickshaw",
      title: "Extended Range, Better Earnings",
      description:
        "Maximize daily earnings with regenerated batteries that provide longer range, better performance, and significant cost savings for e-rickshaw operators.",
      challenges: [
        "Battery degradation reduces daily range",
        "High battery replacement costs",
        "Income loss during battery downtime",
        "Unreliable performance affects earnings",
      ],
      solutions: [
        "Regenerated batteries restore 85-95% capacity",
        "2-3x longer life than degraded batteries",
        "Quick 24-48 hour service turnaround",
        "Significant cost savings over new batteries",
      ],
      benefits: [
        "Increased Daily Range",
        "Higher Monthly Earnings",
        "Reduced Maintenance Costs",
        "Better Customer Satisfaction",
      ],
      caseStudy: {
        title: "Green Mobility Fleet, Mumbai",
        challenge:
          "Fleet of 200 e-rickshaws experiencing 40% reduction in daily range due to degraded batteries",
        solution:
          "SunC regenerated 800 lead-acid batteries using RG-4X technology with monthly maintenance program",
        results:
          "65% range improvement, drivers earning ₹300 extra per day, 2.5x battery life extension",
      },
      stats: {
        clients: "10K+ Vehicles",
        savings: "65-75%",
        range: "+40%",
        earnings: "+25%",
      },
    },
    education: {
      icon: GraduationCap,
      name: "Education Sector",
      title: "Reliable Campus Power Systems",
      description:
        "Maintain uninterrupted power for labs, computers, libraries, and campus infrastructure with regenerated backup systems designed for educational institutions.",
      challenges: [
        "Frequent power cuts disrupt classes and exams",
        "Limited budgets for infrastructure maintenance",
        "Critical lab equipment needs reliable backup",
        "Student safety during emergencies",
      ],
      solutions: [
        "Extended UPS battery life ensures continuous operation",
        "Cost-effective solution fits educational budgets",
        "Reliable backup for labs and computer centers",
        "Emergency lighting systems always operational",
      ],
      benefits: [
        "Learning Continuity",
        "Budget Optimization",
        "Equipment Protection",
        "Student Safety",
      ],
      caseStudy: {
        title: "Delhi University, North Campus",
        challenge:
          "Campus backup power system serving 15,000 students failing regularly with ₹8 lakh annual battery budget",
        solution:
          "SunC regenerated 180 UPS batteries across campus buildings with monitoring system",
        results:
          "98% uptime achieved, 60% budget savings, 2.8x battery life extension, 15,000+ students benefited",
      },
      stats: {
        clients: "150+ Institutions",
        savings: "50-65%",
        uptime: "98%",
        students: "200K+",
      },
    },
    solar: {
      icon: Sun,
      name: "Solar Power",
      title: "Maximized Energy Storage",
      description:
        "Optimize solar energy storage systems with regenerated batteries for residential, commercial, and utility-scale solar installations.",
      challenges: [
        "Battery degradation reduces storage capacity",
        "High replacement costs affect ROI",
        "Performance inconsistency impacts efficiency",
        "Waste disposal environmental concerns",
      ],
      solutions: [
        "Restored capacity improves energy storage",
        "Extended life cycle enhances system ROI",
        "Consistent performance optimization",
        "Eco-friendly alternative to disposal",
      ],
      benefits: [
        "Better Energy Storage",
        "Improved System ROI",
        "Enhanced Efficiency",
        "Environmental Sustainability",
      ],
      caseStudy: {
        title: "SunTech Solar Farm, Jodhpur",
        challenge:
          "50MW solar installation's battery storage system showing 60% capacity degradation, requiring ₹2.5 crore replacement",
        solution:
          "SunC regenerated 1,200 deep-cycle batteries using proprietary pulse technology",
        results:
          "90% capacity restoration, ₹1 crore saved, 35% energy efficiency improvement, 8-month payback",
      },
      stats: {
        clients: "1K+ Systems",
        savings: "60-70%",
        capacity: "+35%",
        efficiency: "+28%",
      },
    },
    industrial: {
      icon: Building,
      name: "Industrial",
      title: "Continuous Production Power",
      description:
        "Keep manufacturing and industrial processes running smoothly with reliable regenerated battery backup systems designed for heavy-duty applications.",
      challenges: [
        "Production downtime costs significant revenue",
        "High power demands stress battery systems",
        "Frequent replacements disrupt operations",
        "Budget constraints limit upgrade options",
      ],
      solutions: [
        "Reliable backup power prevents downtime",
        "Enhanced performance under heavy loads",
        "Planned regeneration minimizes disruption",
        "Cost-effective power solution",
      ],
      benefits: [
        "Production Continuity",
        "Equipment Protection",
        "Operational Cost Control",
        "Planned Maintenance",
      ],
      caseStudy: {
        title: "Tata Steel Processing Unit, Jamshedpur",
        challenge:
          "Critical forklift fleet experiencing 30% downtime due to battery failures, ₹15 lakhs monthly impact",
        solution:
          "Comprehensive battery regeneration program for 150 forklift batteries with on-site equipment",
        results:
          "95% downtime elimination, ₹12 lakhs monthly savings, 25% productivity increase, 3x battery cycles",
      },
      stats: {
        clients: "300+ Facilities",
        savings: "50-60%",
        downtime: "-90%",
        protection: "100%",
      },
    },
    transportation: {
      icon: Truck,
      name: "Transportation",
      title: "Fleet Power Management",
      description:
        "Reduce fleet operating costs and improve vehicle reliability with regenerated batteries for trucks, buses, and commercial vehicle fleets.",
      challenges: [
        "High fleet battery replacement costs",
        "Vehicle downtime affects schedules",
        "Inconsistent battery performance",
        "Large inventory management burden",
      ],
      solutions: [
        "Bulk regeneration reduces costs significantly",
        "Predictable performance and reliability",
        "Scheduled service minimizes downtime",
        "Simplified battery management",
      ],
      benefits: [
        "Fleet Cost Reduction",
        "Improved Reliability",
        "Better Route Planning",
        "Simplified Maintenance",
      ],
      caseStudy: {
        title: "Commercial Logistics Fleet",
        challenge:
          "High battery costs across 200-vehicle commercial fleet with frequent breakdowns",
        solution:
          "Fleet-wide battery regeneration program with monitoring and scheduled maintenance",
        results:
          "₹12 lakhs annual savings, 35% reduction in battery-related breakdowns, 40% reliability improvement",
      },
      stats: {
        clients: "2K+ Vehicles",
        savings: "55-65%",
        reliability: "+40%",
        breakdowns: "-35%",
      },
    },
  };

  const currentIndustry = industries[activeIndustry as keyof typeof industries];

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-primary border-primary">
            Industry Applications
          </Badge>
          <h1 className="text-4xl lg:text-5xl">Powering Every Industry</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our battery regeneration solutions are transforming
            power management across diverse industries and applications.
          </p>
        </div>

        {/* Industry Selector */}
        <Tabs
          value={activeIndustry}
          onValueChange={setActiveIndustry}
          className="mb-12"
        >
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto p-1">
            {Object.entries(industries).map(([key, industry]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex flex-col items-center gap-2 p-4"
              >
                <industry.icon className="h-5 w-5" />
                <span className="text-xs">{industry.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Industry Content */}
          <div className="mt-12">
            <TabsContent value={activeIndustry} className="space-y-12">
              {/* Industry Header */}
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10">
                  <currentIndustry.icon className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl">
                  {currentIndustry.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {currentIndustry.description}
                </p>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(currentIndustry.stats).map(([key, value]) => (
                  <Card key={key} className="text-center p-4">
                    <CardContent className="space-y-2 p-0">
                      <div className="text-2xl text-primary">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Challenges & Solutions */}
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-700">
                      Industry Challenges
                    </CardTitle>
                    <CardDescription>
                      Common issues faced by{" "}
                      {currentIndustry.name.toLowerCase()} sector
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {currentIndustry.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{challenge}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-700">
                      Our Solutions
                    </CardTitle>
                    <CardDescription>
                      How SunC addresses these challenges
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {currentIndustry.solutions.map((solution, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{solution}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Benefits Grid */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                    Key Benefits for {currentIndustry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentIndustry.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="text-center p-4 rounded-lg bg-muted"
                      >
                        <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Case Study */}
              <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <BarChart3 className="h-5 w-5" />
                    Success Story: {currentIndustry.caseStudy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm text-red-600 mb-2">Challenge</h4>
                      <p className="text-sm">
                        {currentIndustry.caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm text-blue-600 mb-2">Solution</h4>
                      <p className="text-sm">
                        {currentIndustry.caseStudy.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm text-green-600 mb-2">Results</h4>
                      <p className="text-sm">
                        {currentIndustry.caseStudy.results}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Section */}
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8 text-center space-y-6">
                  <h3 className="text-2xl">
                    Ready to Transform Your {currentIndustry.name} Operations?
                  </h3>
                  <p className="text-muted-foreground">
                    Join hundreds of satisfied clients who have chosen SunC for
                    reliable, cost-effective battery solutions
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+917276050250" className="text-sm">
                      <Button size="lg">
                        <Phone className="mr-2 h-4 w-4" />
                        Get Industry-Specific Quote
                      </Button>
                    </a>
                    {/* <Button className="" variant="outline" size="lg">
                      View More Case Studies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
