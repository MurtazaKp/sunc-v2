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
  Banknote,
  Sun,
  Building,
  Truck,
  GraduationCap,
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Calendar,
  Star,
  Phone,
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
      isAnimated: true,
    },
    {
      icon: Banknote,
      name: "Banking",
      title: "Secure Financial Operations",
      description:
        "Critical power backup for banks, ATMs, and financial institutions ensuring secure and continuous banking operations.",
      benefits: ["Security Assured", "24/7 Operations", "Compliance Ready"],
      stats: "250+ Banking Centers",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      isAnimated: true,
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
      isAnimated: true,
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
      isAnimated: true,
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
      isAnimated: true,
    },
    {
      icon: GraduationCap,
      name: "Education Sector",
      title: "Reliable Campus Power Systems",
      description:
        "Maintain uninterrupted power for labs, computers, libraries, and campus infrastructure with regenerated backup systems.",
      benefits: ["Learning Continuity", "Equipment Safety", "Budget Savings"],
      stats: "150+ Institutions",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      isAnimated: true,
    },
  ];

  const caseStudies = [
    {
      industry: "Healthcare",
      title: "Delhi Hospital Saves ₹12 Lakhs Annually",
      client: "Max Super Speciality Hospital, Delhi",
      challenge:
        "Hospital's UPS system batteries were failing frequently, causing power disruptions in critical care units and increasing replacement costs by ₹18 lakhs annually.",
      solution:
        "SunC regenerated 240 UPS batteries using advanced electro-chemical treatment, extending their life by 3x and ensuring 99.9% uptime reliability.",
      results: {
        costSavings: "₹12 lakhs per year",
        batteryLife: "Extended by 200%",
        uptime: "99.9% reliability",
        roi: "6 months payback",
      },
      testimonial:
        "SunC's battery regeneration has been a game-changer for our hospital. We've eliminated unexpected power failures in our ICU and saved over ₹12 lakhs in battery replacement costs.",
      clientName: "Dr. Rajesh Sharma",
      clientTitle: "Chief Operations Officer",
      date: "March 2024",
      duration: "Ongoing partnership since 2012",
    },
    {
      industry: "Banking",
      title: "National Bank Secures 24/7 Operations",
      client: "State Bank Regional Office, Mumbai",
      challenge:
        "Critical ATM network and banking operations experiencing frequent power failures affecting customer service and security systems across 50+ branches.",
      solution:
        "SunC implemented comprehensive UPS battery regeneration program covering 200+ batteries across the regional network with real-time monitoring.",
      results: {
        uptime: "99.8% availability",
        costSavings: "₹8 lakhs annually",
        branches: "50+ locations covered",
        customerSatisfaction: "95% improvement",
      },
      testimonial:
        "Our ATM network runs seamlessly 24/7 now. Customer complaints about service disruptions have dropped to almost zero, and we're saving significantly on battery costs.",
      clientName: "Priya Mehta",
      clientTitle: "Regional Operations Manager",
      date: "January 2024",
      duration: "3-year service contract",
    },
    {
      industry: "Solar Power",
      title: "Rajasthan Solar Farm Achieves 40% Cost Reduction",
      client: "SunTech Solar Farm, Jodhpur",
      challenge:
        "50MW solar installation's battery storage system showing 60% capacity degradation, requiring ₹2.5 crore investment for complete replacement.",
      solution:
        "SunC regenerated 1,200 deep-cycle batteries using proprietary pulse technology, restoring storage capacity to 90% of original specification.",
      results: {
        costSavings: "₹1 crore saved",
        capacityRestored: "90% of original",
        energyEfficiency: "35% improvement",
        paybackPeriod: "8 months",
      },
      testimonial:
        "The regeneration process exceeded our expectations. We're storing 35% more energy and saved ₹1 crore compared to new battery replacement.",
      clientName: "Arjun Singh",
      clientTitle: "Plant Manager",
      date: "February 2024",
      duration: "12-month warranty",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Zap className="h-5 w-5 animate-pulse" />
            <span className="text-sm">Industries We Serve</span>
          </div>
          <h2 className="text-3xl lg:text-4xl bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            Powering India&apos;s Critical Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From healthcare to banking, our battery regeneration solutions keep
            essential services running efficiently and sustainably.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${industry.color} cursor-pointer`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-white/80 shadow-sm ${
                      industry.isAnimated ? "animate-pulse" : ""
                    }`}
                  >
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs animate-bounce">
                    {industry.stats}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg group-hover:text-current transition-colors group-hover:scale-105 transform duration-300">
                      {industry.name}
                    </CardTitle>
                  </div>
                  <h4 className="text-sm text-current/80 group-hover:text-current transition-colors">
                    {industry.title}
                  </h4>
                </div>

                <CardDescription className="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
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
                  View Case Study
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Award className="h-5 w-5 animate-pulse" />
              <span className="text-sm">Success Stories</span>
            </div>
            <h2 className="text-3xl lg:text-4xl">
              Real Results from Real Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how businesses across industries have transformed their
              operations with SunC&apos;s battery regeneration technology.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.slice(0, 3).map((caseStudy, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Case Study Header */}
                  <div className="lg:col-span-1 bg-gradient-to-br from-primary/5 to-primary/10 p-8">
                    <div className="space-y-4">
                      <Badge
                        variant="outline"
                        className="text-primary border-primary animate-pulse"
                      >
                        {caseStudy.industry}
                      </Badge>
                      <h3 className="text-xl bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
                        {caseStudy.title}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-primary animate-pulse" />
                          <span>{caseStudy.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary animate-pulse" />
                          <span>{caseStudy.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary animate-pulse" />
                          <span>{caseStudy.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Case Study Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="space-y-6">
                      {/* Challenge & Solution */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm text-red-600 mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            Challenge
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {caseStudy.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm text-green-600 mb-2 flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 animate-pulse" />
                            Solution
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {caseStudy.solution}
                          </p>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div>
                        <h4 className="text-sm text-primary mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 animate-pulse" />
                          Key Results
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {Object.entries(caseStudy.results).map(
                            ([key, value], resultIndex) => (
                              <div
                                key={resultIndex}
                                className="text-center p-3 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-all duration-300"
                              >
                                <div className="text-lg text-primary mb-1">
                                  {value}
                                </div>
                                <div className="text-xs text-muted-foreground capitalize">
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse"
                              />
                            ))}
                          </div>
                          <blockquote className="text-sm italic text-muted-foreground leading-relaxed mb-4">
                            {caseStudy.testimonial}
                          </blockquote>
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-green-100">
                              <Users className="h-4 w-4 text-green-600 animate-pulse" />
                            </div>
                            <div>
                              <div className="text-sm font-medium">
                                {caseStudy.clientName}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {caseStudy.clientTitle}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground mb-12">
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
                    <TrendingUp className="h-5 w-5 animate-pulse" />
                    <span className="text-sm">Proven Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 animate-bounce" />
                    <span className="text-sm">Satisfied Clients</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2 animate-pulse">70-80%</div>
                  <div className="text-sm text-primary-foreground/80">
                    Customer Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2 animate-pulse">70%</div>
                  <div className="text-sm text-primary-foreground/80">
                    Average Savings
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2 animate-pulse">400+</div>
                  <div className="text-sm text-primary-foreground/80">
                    Service Centers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2 animate-pulse">24/7</div>
                  <div className="text-sm text-primary-foreground/80">
                    Support Available
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-6">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-2">
                Ready to Transform Your Battery Operations?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl">
                Join thousands of satisfied customers across industries who
                trust SunC for reliable, cost-effective battery solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={onExplore}>
                  Explore Industry Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
