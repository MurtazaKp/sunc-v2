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
  Battery,
  Cog,
  Monitor,
  CheckCircle,
  DollarSign,
  Zap,
  Shield,
  Settings,
  BarChart3,
  AlertTriangle,
  Phone,
  Download,
} from "lucide-react";

export function Services() {
  const [activeService, setActiveService] = useState("regeneration");

  const services = {
    regeneration: {
      icon: Battery,
      title: "Battery Regeneration Service",
      subtitle: "Revitalize Your Batteries, Maximize Their Potential",
      description:
        "Our advanced high-voltage regeneration technology can extend your lead-acid battery life by 2-3 times while saving you up to 70% compared to purchasing new batteries.",
      benefits: [
        "2-3x Extended Battery Life",
        "Up to 70% Cost Savings",
        "Improved Performance & Capacity",
        "Quick 24-48 Hour Turnaround",
        "Professional Assessment & Testing",
        "Eco-Friendly Alternative",
      ],
      process: [
        {
          step: 1,
          title: "Battery Assessment",
          description:
            "Comprehensive testing to determine regeneration feasibility and expected results",
        },
        {
          step: 2,
          title: "Regeneration Process",
          description:
            "High-voltage treatment using international quality regeneration equipment",
        },
        {
          step: 3,
          title: "Quality Testing",
          description:
            "Thorough performance testing to ensure optimal capacity restoration",
        },
        {
          step: 4,
          title: "Delivery & Warranty",
          description:
            "Safe delivery with performance guarantee and usage recommendations",
        },
      ],
      applications: [
        "UPS Systems",
        "Solar Installations",
        "E-Rickshaws",
        "Telecom Towers",
        "Emergency Backup",
      ],
      pricing: "Starting from ₹500 per battery",
    },
    manufacturing: {
      icon: Cog,
      title: "Regenerator Manufacturing",
      subtitle: "Advanced Battery Regenerators: Empowering Sustainable Energy",
      description:
        "High-quality, international standard battery regenerators designed for businesses looking to offer regeneration services or manage large battery fleets in-house.",
      benefits: [
        "International Quality Standards",
        "High Efficiency Output",
        "User-Friendly Interface",
        "Durable Construction",
        "Comprehensive Training",
        "Ongoing Technical Support",
      ],
      process: [
        {
          step: 1,
          title: "Consultation",
          description:
            "Understand your requirements and recommend the right regenerator model",
        },
        {
          step: 2,
          title: "Manufacturing",
          description:
            "Custom build regenerators to your specifications with quality assurance",
        },
        {
          step: 3,
          title: "Installation & Training",
          description:
            "Professional installation and comprehensive operator training",
        },
        {
          step: 4,
          title: "Support & Maintenance",
          description: "Ongoing technical support and maintenance services",
        },
      ],
      applications: [
        "Battery Shops",
        "Fleet Operations",
        "Industrial Facilities",
        "Service Centers",
        "Rental Businesses",
      ],
      pricing: "Starting from ₹1,50,000",
    },
    monitoring: {
      icon: Monitor,
      title: "Battery Monitoring System",
      subtitle: "Automated Battery Monitoring for Seamless Power",
      description:
        "Real-time battery monitoring solutions that provide insights, alerts, and predictive maintenance recommendations to optimize battery performance and prevent failures.",
      benefits: [
        "Real-Time Monitoring",
        "Predictive Maintenance Alerts",
        "Performance Analytics",
        "Remote Access Dashboard",
        "Cost Optimization",
        "Reduced Downtime",
      ],
      process: [
        {
          step: 1,
          title: "System Design",
          description:
            "Custom monitoring solution design based on your specific requirements",
        },
        {
          step: 2,
          title: "Installation",
          description:
            "Professional installation of sensors and monitoring equipment",
        },
        {
          step: 3,
          title: "Configuration",
          description:
            "System setup with custom alerts and reporting parameters",
        },
        {
          step: 4,
          title: "Training & Support",
          description: "User training and ongoing technical support services",
        },
      ],
      applications: [
        "Data Centers",
        "Hospitals",
        "Telecom Infrastructure",
        "Solar Plants",
        "Industrial UPS",
      ],
      pricing: "Starting from ₹25,000 per system",
    },
  };

  const currentService = services[activeService as keyof typeof services];

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-primary border-primary">
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl">
            Comprehensive Battery Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From individual battery regeneration to enterprise monitoring
            systems, we provide end-to-end solutions for all your battery
            management needs.
          </p>
        </div>

        {/* Service Selector */}
        <Tabs
          value={activeService}
          onValueChange={setActiveService}
          className="mb-12"
        >
          <TabsList className="grid w-full lg:w-auto lg:mx-auto grid-cols-1 lg:grid-cols-3 h-auto p-1">
            <TabsTrigger
              value="regeneration"
              className="flex items-center gap-2 p-4"
            >
              <Battery className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Battery Regeneration</div>
                <div className="text-xs text-muted-foreground">
                  Individual Service
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="manufacturing"
              className="flex items-center gap-2 p-4"
            >
              <Cog className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Regenerator Manufacturing</div>
                <div className="text-xs text-muted-foreground">
                  Equipment Sales
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="monitoring"
              className="flex items-center gap-2 p-4"
            >
              <Monitor className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Battery Monitoring</div>
                <div className="text-xs text-muted-foreground">
                  System Solutions
                </div>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Service Content */}
          <div className="mt-12">
            <TabsContent value={activeService} className="space-y-12">
              {/* Service Header */}
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10">
                  <currentService.icon className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl">{currentService.title}</h2>
                <h3 className="text-xl text-primary">
                  {currentService.subtitle}
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {currentService.description}
                </p>
              </div>

              {/* Service Details Grid */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Benefits */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Key Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {currentService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Applications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-blue-500" />
                      Ideal Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {currentService.applications.map((application, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="mr-2 mb-2"
                      >
                        {application}
                      </Badge>
                    ))}
                    <div className="mt-4 p-4 rounded-lg bg-muted">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Pricing</span>
                      </div>
                      <p className="text-lg text-primary">
                        {currentService.pricing}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Process Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-purple-500" />
                    Our Process
                  </CardTitle>
                  <CardDescription>
                    Simple, efficient, and transparent process from start to
                    finish
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentService.process.map((step, index) => (
                      <div key={index} className="text-center space-y-3">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                          {step.step}
                        </div>
                        <h4 className="text-lg">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Service Features (Conditional) */}
              {activeService === "monitoring" && (
                <div className="grid lg:grid-cols-3 gap-8">
                  <Card className="text-center">
                    <CardContent className="p-6 space-y-4">
                      <BarChart3 className="h-8 w-8 text-blue-500 mx-auto" />
                      <h3>Real-Time Analytics</h3>
                      <p className="text-sm text-muted-foreground">
                        Live performance metrics and historical data analysis
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6 space-y-4">
                      <AlertTriangle className="h-8 w-8 text-orange-500 mx-auto" />
                      <h3>Smart Alerts</h3>
                      <p className="text-sm text-muted-foreground">
                        Proactive notifications for maintenance and issues
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6 space-y-4">
                      <Shield className="h-8 w-8 text-green-500 mx-auto" />
                      <h3>Secure Access</h3>
                      <p className="text-sm text-muted-foreground">
                        Role-based access control and data security
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* CTA Section */}
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8 text-center space-y-6">
                  <h3 className="text-2xl">Ready to Get Started?</h3>
                  <p className="text-muted-foreground">
                    Contact our experts for a free consultation and personalized
                    quote
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <Phone className="mr-2 h-4 w-4" />
                      Get Free Quote
                    </Button>
                    <Button variant="outline" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      Service Brochure
                    </Button>
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
