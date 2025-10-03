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
  GraduationCap,
  Building,
  Sun,
  Radio,
  Truck,
  Banknote,
  ArrowRight,
  CheckCircle,
  Zap,
  Phone,
  Battery,
} from "lucide-react";
import Link from "next/link";

interface ServicesOverviewProps {
  onLearnMore: () => void;
}

export function ServicesOverview({ onLearnMore }: ServicesOverviewProps) {
  const services = [
    {
      icon: Hospital,
      title: "Healthcare",
      description:
        "Critical power backup for hospitals, clinics, and medical equipment ensuring patient safety and operational continuity.",
      benefits: ["100% Uptime", "Patient Safety", "Cost Effective"],
      stats: "500+ Hospitals Served",
      color: "bg-red-50 text-red-600 border-red-200 hover:bg-red-100",
      isAnimated: true,
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Reliable power systems for schools, colleges, and universities supporting uninterrupted learning environments.",
      benefits: ["Learning Continuity", "Lab Protection", "Budget Friendly"],
      stats: "150+ Educational Institutions",
      color:
        "bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100",
      isAnimated: true,
    },
    {
      icon: Building,
      title: "Industries",
      description:
        "Heavy-duty battery solutions for manufacturing, production facilities, and industrial equipment operations.",
      benefits: ["Zero Downtime", "Production Safety", "Cost Control"],
      stats: "300+ Industrial Facilities",
      color:
        "bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100",
      isAnimated: true,
    },
    {
      icon: Sun,
      title: "Solar",
      description:
        "Optimized energy storage solutions for solar power systems, maximizing renewable energy efficiency and storage capacity.",
      benefits: ["Enhanced Storage", "Better ROI", "Eco-Friendly"],
      stats: "1K+ Solar Systems",
      color:
        "bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100",
      isAnimated: true,
    },
    {
      icon: Radio,
      title: "Telecommunication",
      description:
        "Reliable backup power for telecom towers, data centers, and communication infrastructure ensuring network uptime.",
      benefits: ["Network Reliability", "Signal Quality", "Remote Support"],
      stats: "200+ Telecom Sites",
      color: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100",
      isAnimated: true,
    },
    {
      icon: Truck,
      title: "Transport (E-Rickshaw)",
      description:
        "Extended battery life and improved performance for e-rickshaws, commercial vehicles, and transportation fleets.",
      benefits: ["Extended Range", "Higher Earnings", "Better Performance"],
      stats: "10K+ Vehicles",
      color: "bg-green-50 text-green-600 border-green-200 hover:bg-green-100",
      isAnimated: true,
    },
    {
      icon: Banknote,
      title: "Banking",
      description:
        "Critical power backup for banks, ATMs, and financial institutions ensuring secure and continuous banking operations.",
      benefits: ["Security Assured", "24/7 Operations", "Compliance Ready"],
      stats: "250+ Banking Centers",
      color:
        "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100",
      isAnimated: true,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Zap className="h-5 w-5 animate-pulse" />
            <span className="text-sm">Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            Comprehensive Battery Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From healthcare to banking, we provide specialized battery
            regeneration services across diverse industries with proven results
            and reliable support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${service.color} cursor-pointer`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-white/80 shadow-sm ${
                      service.isAnimated ? "animate-pulse" : ""
                    }`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs animate-bounce">
                    {service.stats}
                  </Badge>
                </div>

                <CardTitle className="text-lg group-hover:scale-105 transition-transform duration-300">
                  {service.title}
                </CardTitle>

                <CardDescription className="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                <div className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 animate-pulse" />
                      <span className="group-hover:font-medium transition-all">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-white group-hover:text-current group-hover:border-current transition-all duration-300 group-hover:shadow-lg"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Box with Graphical Images */}
        <Card className="bg-gradient-to-r from-primary/5 to-green-500/5 border-primary/20 mb-12">
          <CardContent className="p-8">
            <div className="text-center space-y-6 mb-8">
              <h3 className="text-2xl lg:text-3xl">
                Our Battery Regeneration Process
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Advanced 4-step process that restores your batteries to optimal
                performance
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                  <Battery className="h-10 w-10 text-red-600 animate-pulse" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">1</span>
                  </div>
                </div>
                <h4 className="text-lg">Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive battery condition assessment using advanced
                  diagnostics
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="relative mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="h-10 w-10 text-blue-600 animate-pulse" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">2</span>
                  </div>
                </div>
                <h4 className="text-lg">Regeneration</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced pulse technology removes sulfation and restores
                  capacity
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="relative mx-auto w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-yellow-600 animate-pulse" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">3</span>
                  </div>
                </div>
                <h4 className="text-lg">Testing</h4>
                <p className="text-sm text-muted-foreground">
                  Rigorous quality testing ensures optimal performance and
                  reliability
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="relative mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600 animate-pulse" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">4</span>
                  </div>
                </div>
                <h4 className="text-lg">Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Your regenerated battery with warranty and ongoing support
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground  border-0 inline-block">
            <CardContent className="p-6">
              <h3 className="text-xl mb-2">
                Ready to Transform Your Battery Operations?
              </h3>
              <p className="text-blue-100 mb-4">
                Get started with our expert consultation and customized
                solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={"/services"}>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={onLearnMore}
                    className=""
                  >
                    Explore All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+917276050250" className="text-sm">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now (Support)
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
