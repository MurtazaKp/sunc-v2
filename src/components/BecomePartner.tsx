"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GetQuoteDialog } from "./GetQuoteDialog";
import {
  Handshake,
  Target,
  Users,
  GraduationCap,
  Megaphone,
  HeadphonesIcon,
  TrendingUp,
  Zap,
  Award,
  Leaf,
  Phone,
  Mail,
  MessageCircle,
  Download,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Settings,
  Factory,
  Star,
  Globe,
  Shield,
} from "lucide-react";

export function BecomePartner() {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);

  const advantages = [
    {
      icon: Target,
      title: "Pioneer in the Indian Market",
      description:
        "Join one of India's leading companies in battery recovery and regeneration. We are passionately committed to reducing hazardous battery waste, having already recovered over 15,000 batteries and counting.",
    },
    {
      icon: Award,
      title: "Offer Unparalleled Quality",
      description:
        "Our regenerators are engineered with the highest standards of craftsmanship, ensuring long-lasting performance, reliability, and customer satisfaction.",
    },
    {
      icon: Lightbulb,
      title: "Promote Cutting-Edge Technology",
      description:
        "Our innovative designs maximize energy efficiency and reverse battery degradation, making them the ideal choice for a sustainable and cost-effective future.",
    },
    {
      icon: Globe,
      title: "Serve Versatile Applications",
      description:
        "Our products cater to a wide range of industries with diverse energy needs, from manufacturing and logistics to telecommunications and renewable energy.",
    },
  ];

  const supportBenefits = [
    {
      icon: GraduationCap,
      title: "Comprehensive Training",
      description:
        "Our dedicated technical and sales teams provide in-depth training programs to ensure your team is well-equipped to demonstrate, sell, and support our regenerator products effectively.",
    },
    {
      icon: Megaphone,
      title: "Robust Marketing Support",
      description:
        "Gain access to a wide range of marketing materials, including brochures, product demos, digital assets, and co-branded campaigns to effectively showcase our regenerators to your customers.",
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Assistance",
      description:
        "Our team is always available to provide ongoing technical and sales support, ensuring a seamless distribution experience and driving the success of our partnership.",
    },
    {
      icon: TrendingUp,
      title: "A Partnership for Mutual Growth",
      description:
        "By working together, we can leverage our respective strengths, expand our market presence, and achieve mutual success in the rapidly growing energy solutions industry.",
    },
  ];

  const faqs = [
    {
      question: "Is it really possible to regenerate a battery?",
      answer:
        "Absolutely. Using our advanced electro-chemical process, we can break down the sulfation that causes capacity loss, effectively breathing new life into tired batteries and restoring their performance.",
    },
    {
      question: "What are the main benefits of battery regeneration?",
      answer:
        "The key benefits are significant cost savings (up to 70% compared to buying new), extended battery lifespan, improved operational reliability, and a major positive environmental impact by reducing hazardous waste.",
    },
    {
      question:
        "What's the difference between Battery Charging & Battery Regeneration?",
      answer:
        "Charging is like refilling a water bottle—it simply replenishes the energy. Regeneration is like cleaning the bottle—it restores the battery's ability to hold a full charge by reversing the degradation of its internal components.",
    },
    {
      question: "What types of batteries can be regenerated?",
      answer:
        "Our process is highly effective for all types of lead-acid batteries, including those used in forklifts, golf carts, automotive vehicles, telecom towers, and solar energy storage systems.",
    },
    {
      question: "Is it possible to give a warranty on a regenerated battery?",
      answer:
        "Yes. We are so confident in our technology that we encourage our partners to offer a warranty on regenerated batteries, providing customers with peace of mind and demonstrating the quality of the service.",
    },
    {
      question: "How many times can a battery be regenerated?",
      answer:
        "Depending on its initial condition and usage, a battery can typically be regenerated 1 to 3 times, significantly extending its total operational life.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Partnering with SunC has been transformative for our business. Their regeneration technology is revolutionary, and the support team is exceptional. We've seen 40% growth in our battery services division.",
      name: "Rajesh Kumar",
      company: "PowerTech Solutions",
      location: "Mumbai, Maharashtra",
    },
    {
      quote:
        "The training and marketing support from SunC exceeded our expectations. Our technicians are now experts in battery regeneration, and customers love the cost savings and environmental benefits.",
      name: "Priya Sharma",
      company: "GreenEnergy Systems",
      location: "Bangalore, Karnataka",
    },
  ];

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge
            variant="outline"
            className="text-primary border-primary text-lg px-4 py-2"
          >
            Partnership Program
          </Badge>
          <h1 className="text-4xl lg:text-6xl">Become a SunC Partner</h1>
          <h2 className="text-2xl lg:text-3xl text-muted-foreground">
            Revolutionize Your Energy Solutions and Power a Sustainable Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Welcome to the SunC Battery Solutions Partner Program. As a trusted
            leader in India&apos;s green technology sector, we offer innovative
            and eco-friendly battery regenerator products that optimize energy
            usage, deliver significant cost savings, and reduce environmental
            impact. Join us as an authorized partner and unlock a powerful
            opportunity for mutual growth by distributing our premium, in-demand
            regenerator solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => setIsQuoteDialogOpen(true)}
            >
              <Handshake className="mr-2 h-5 w-5" />
              Become a Partner Today
            </Button>
            <a href="/sunc-brocher.pdf" download>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </a>
          </div>
        </div>

        {/* Why Partner With SunC Section */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl">
              The SunC Advantage: More Than Just a Product
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Partnering with SunC means aligning with a pioneer dedicated to
              quality, innovation, and mutual success. We provide the tools,
              training, and support you need to thrive.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <advantage.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support System Section */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl">
              Committed to Your Growth: Our Partnership Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We succeed when you succeed. Our support system is designed to
              ensure you are confident, equipped, and ready to capture the
              market.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {supportBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-green-100">
                      <benefit.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl">
              The SunC Battery Regeneration Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At the core of our offering is a scientifically proven process and
              state-of-the-art machinery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* The Process */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-blue-500">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">The Process</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our advanced regeneration process rejuvenates lead-acid
                  batteries by using controlled electronic pulses to dissolve
                  the hardened sulfate crystals on the battery plates. This
                  restores capacity, extends lifespan, and improves overall
                  performance, turning a disposable item into a reusable asset.
                </p>
              </CardContent>
            </Card>

            {/* Manufacturing */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-green-500">
                    <Factory className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">
                    Manufacturing High-Voltage Regenerators
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SunC also manufactures the high-voltage regenerators essential
                  for these operations. Devices like our
                  <strong> Battery Regeneration Machine RG-4X</strong> are
                  designed to restore capacity and extend battery lifespan
                  efficiently.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By incorporating SunC&apos;s regenerators into their
                  maintenance routines, your clients can achieve significant
                  cost savings, reduce their environmental footprint, and ensure
                  a consistent, reliable power supply.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl">What Our Partners Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from successful partners who have transformed their
              businesses with SunC
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl">Your Questions, Answered</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about battery regeneration and our
              partnership program
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    Q: {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    <strong>A:</strong> {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl">
                Let&apos;s Connect and Regenerate the Future
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to join a green tech revolution and build a profitable
                business? Contact our partnership team today to start the
                conversation.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <a
                href="tel:+91XXXXXXXXX"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Phone className="h-5 w-5" />
                +91 XXXXX XXXXX
              </a>
              <a
                href="mailto:partners@sun-c.com"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="h-5 w-5" />
                partners@sun-c.com
              </a>
              <a
                href="https://wa.me/917276050250"
                className="flex items-center gap-2 text-green-600 hover:underline"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp / Call
              </a>
            </div>

            <Button
              size="lg"
              className="text-lg px-12 py-6"
              onClick={() => setIsQuoteDialogOpen(true)}
            >
              <Handshake className="mr-2 h-6 w-6" />
              Inquire Now to Become a Partner
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Shield className="h-3 w-3 mr-1" />
                Trusted by 75+ Centers
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Leaf className="h-3 w-3 mr-1" />
                50,000+ Batteries Regenerated
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Award className="h-3 w-3 mr-1" />
                98% Partner Satisfaction
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Quote Dialog */}
        <GetQuoteDialog
          open={isQuoteDialogOpen}
          onOpenChange={setIsQuoteDialogOpen}
          variant="partner"
        />
      </div>
    </div>
  );
}
