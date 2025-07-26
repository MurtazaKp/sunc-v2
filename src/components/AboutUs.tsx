import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Award,
  Users,
  Target,
  Lightbulb,
  Shield,
  Leaf,
  Battery,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

export function AboutUs() {
  const milestones = [
    {
      year: "2014",
      event: "Founded SunC Battery Solutions",
      description:
        "Started with a vision to revolutionize battery management in India",
    },
    {
      year: "2016",
      event: "First Regeneration Center",
      description:
        "Opened our first facility and regenerated 100 batteries in the first month",
    },
    {
      year: "2018",
      event: "Technology Enhancement",
      description:
        "Upgraded to high-voltage regeneration technology for better results",
    },
    {
      year: "2020",
      event: "National Expansion",
      description: "Reached 25 centers across major Indian cities",
    },
    {
      year: "2022",
      event: "10,000 Battery Milestone",
      description: "Successfully regenerated our 10,000th battery",
    },
    {
      year: "2024",
      event: "Industry Leadership",
      description:
        "75+ centers serving 15,000+ regenerated batteries nationwide",
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description:
        "Committed to reducing battery waste and promoting sustainable energy solutions for a greener future.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Excellence",
      description:
        "Continuously advancing our technology and processes to deliver the best battery regeneration results.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Building lasting relationships through exceptional service, transparency, and reliable solutions.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Maintaining international standards in equipment, processes, and service delivery.",
    },
  ];

  const leadership = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      description:
        "Visionary leader with 15+ years in renewable energy and battery technology innovation.",
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      description:
        "Expert in battery regeneration technology with multiple patents in sustainable energy solutions.",
    },
    {
      name: "Amit Patel",
      role: "Head of Operations",
      description:
        "Operations specialist ensuring quality and efficiency across all 75+ service centers.",
    },
  ];

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary">
            About SunC
          </Badge>
          <h1 className="text-4xl lg:text-5xl">
            Pioneering Indias Battery Revolution
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since 2014, weve been at the forefront of sustainable battery
            solutions, transforming how India approaches energy storage and
            battery lifecycle management.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl text-primary">
                  Our Mission
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                To revolutionize Indias battery industry through innovative
                regeneration technology, making sustainable energy solutions
                accessible, affordable, and environmentally responsible for
                businesses and communities across the nation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-2xl text-blue-600">
                  Our Vision
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                To become Indias most trusted partner in sustainable battery
                solutions, leading the transition towards a circular economy
                where every battery reaches its maximum potential before
                responsible recycling.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 bg-green-50 border-green-200">
            <CardContent className="space-y-2 p-0">
              <Battery className="h-8 w-8 text-green-600 mx-auto" />
              <div className="text-3xl text-green-600">15,000+</div>
              <div className="text-sm text-green-700">
                Batteries Regenerated
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-blue-50 border-blue-200">
            <CardContent className="space-y-2 p-0">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto" />
              <div className="text-3xl text-blue-600">75+</div>
              <div className="text-sm text-blue-700">Service Centers</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-purple-50 border-purple-200">
            <CardContent className="space-y-2 p-0">
              <Award className="h-8 w-8 text-purple-600 mx-auto" />
              <div className="text-3xl text-purple-600">10+</div>
              <div className="text-sm text-purple-700">Years Experience</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-orange-50 border-orange-200">
            <CardContent className="space-y-2 p-0">
              <Users className="h-8 w-8 text-orange-600 mx-auto" />
              <div className="text-3xl text-orange-600">98%</div>
              <div className="text-sm text-orange-700">
                Customer Satisfaction
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Story Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <span className="text-sm">{milestone.year}</span>
                  </div>
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <h3 className="text-lg mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-12">Leadership Team</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 mx-auto flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg">{leader.name}</h3>
                    <p className="text-sm text-primary mb-2">{leader.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {leader.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-3xl">
              Ready to Transform Your Battery Management?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have chosen SunC for
              reliable, sustainable, and cost-effective battery solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-4 w-4" />
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Find Service Center
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
