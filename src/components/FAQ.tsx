import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  MessageCircle,
  Phone,
  Mail,
  HelpCircle,
  CheckCircle,
  Zap,
  Battery,
  Clock,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react";

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      id: "faq-1",
      category: "General",
      question: "What is battery regeneration and how does it work?",
      answer:
        "Battery regeneration is an advanced process that restores lead-acid batteries to near-original capacity by removing sulfation buildup on battery plates. Our proprietary technology uses controlled electronic pulses to break down hardened sulfate crystals, allowing the battery to hold and deliver charge effectively again. This process can extend battery life by 2-3 times compared to degraded batteries.",
      icon: Battery,
    },
    {
      id: "faq-2",
      category: "Process",
      question: "How long does the battery regeneration process take?",
      answer:
        "The regeneration process typically takes 24-48 hours depending on the battery condition, size, and type. Our advanced RG-4X, RG-8X, and RG-16X machines can handle multiple batteries simultaneously. We also offer express services for critical applications where faster turnaround is needed.",
      icon: Clock,
    },
    {
      id: "faq-3",
      category: "Cost",
      question:
        "How much can I save with battery regeneration compared to buying new batteries?",
      answer:
        "Battery regeneration typically costs 60-70% less than purchasing new batteries. For example, if a new battery costs ₹10,000, regeneration would cost approximately ₹3,000-4,000. Additionally, you save on disposal costs and contribute to environmental sustainability.",
      icon: CheckCircle,
    },
    {
      id: "faq-4",
      category: "Process",
      question:
        "What's the difference between Battery Charging & Battery Regeneration?",
      answer:
        "Charging simply refurbished the energy in a battery - like filling a water bottle. Regeneration actually restores the battery's ability to hold charge by removing sulfation and reversing capacity degradation - like cleaning and repairing the bottle itself. Regeneration addresses the root cause of battery failure, not just the symptoms.",
      icon: Zap,
    },
    {
      id: "faq-5",
      category: "Compatibility",
      question: "What types of batteries can be regenerated?",
      answer:
        "Our regeneration process works on all types of lead-acid batteries including Dry, Flooded, SMF (Sealed Maintenance Free), Quanta, Traction, VRLA (Valve Regulated Lead Acid), and Ni-Cad batteries. We handle battery capacities ranging from 36Ah to 400-1000Ah across automotive, industrial, and renewable energy applications.",
      icon: Shield,
    },
    {
      id: "faq-6",
      category: "Benefits",
      question: "After purchasing the machine, what benefits will we receive?",
      answer:
        "When you purchase a SunC Battery Regeneration Machine, you receive: comprehensive training for your technicians, 2-year warranty with free service support, technical documentation and manuals, ongoing phone and email support, software updates, spare parts availability, and business development guidance to maximize your ROI.",
      icon: Award,
    },
    {
      id: "faq-7",
      category: "Warranty",
      question: "Do you provide warranty on regenerated batteries?",
      answer:
        "Yes, we provide a comprehensive warranty on all regenerated batteries. The warranty period depends on battery type and application, typically ranging from 6 months to 2 years. Our warranty covers performance issues and capacity degradation, giving you complete peace of mind.",
      icon: Shield,
    },
    {
      id: "faq-8",
      category: "Business",
      question:
        "Can battery regeneration be done multiple times on the same battery?",
      answer:
        "Yes, depending on the battery's initial condition and usage patterns, a battery can typically be regenerated 1-3 times throughout its extended lifecycle. Each regeneration cycle can restore 70-90% of original capacity, significantly extending the total operational life and maximizing your investment.",
      icon: Zap,
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(faqs.map((faq) => faq.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge
            variant="outline"
            className="text-primary border-primary animate-pulse"
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl lg:text-5xl bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            Got Questions? We Have Answers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about SunC Battery Regeneration
            technology, our services, and how we can help transform your battery
            operations.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground animate-pulse" />
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={`hover:scale-105 transition-transform ${
                    activeCategory === category ? "animate-pulse" : ""
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <faq.icon className="h-5 w-5 text-primary animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-base font-medium">
                          {faq.question}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {faq.category}
                        </Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFAQs.length === 0 && (
            <Card className="text-center p-12">
              <CardContent className="space-y-4">
                <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto animate-pulse" />
                <h3 className="text-xl">No FAQs found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or category filter, or contact us
                  directly for assistance.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact Support */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl">Still Have Questions?</h3>
                <p className="text-blue-100">
                  Our expert support team is here to help you with any specific
                  queries about battery regeneration or our services.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <Phone className="h-8 w-8 mx-auto mb-3 animate-pulse" />
                    <h4 className="text-lg mb-2">Call Support</h4>
                    <p className="text-blue-100 text-sm mb-3">
                      Get instant help from our experts
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white text-blue-600 hover:bg-blue-50"
                    >
                      Call Now (Support)
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <MessageCircle className="h-8 w-8 mx-auto mb-3 animate-pulse" />
                    <h4 className="text-lg mb-2">WhatsApp Chat</h4>
                    <p className="text-blue-100 text-sm mb-3">
                      Quick responses via WhatsApp
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white text-blue-600 hover:bg-blue-50"
                    >
                      Chat Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <Mail className="h-8 w-8 mx-auto mb-3 animate-pulse" />
                    <h4 className="text-lg mb-2">Email Support</h4>
                    <p className="text-blue-100 text-sm mb-3">
                      Detailed technical assistance
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white text-blue-600 hover:bg-blue-50"
                    >
                      Send Email
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="text-blue-100 text-sm">
                  <strong>24/7 Emergency Support Available</strong> • Response
                  Time: Within 2 hours • Technical Support in Hindi & English
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
