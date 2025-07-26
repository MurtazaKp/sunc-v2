import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { HelpCircle, Phone, MessageCircle, Mail, ArrowRight } from 'lucide-react';

export function FAQ() {
  const faqCategories = [
    {
      category: "Battery Regeneration Basics",
      questions: [
        {
          question: "What is battery regeneration and how does it work?",
          answer: "Battery regeneration is a process that uses high-voltage technology to break down sulfate crystals that build up on lead-acid battery plates over time. These crystals reduce battery capacity and performance. Our regeneration process applies controlled high-voltage pulses to dissolve these crystals, restoring the battery's ability to hold and deliver charge effectively."
        },
        {
          question: "Is battery regeneration safe for my batteries?",
          answer: "Yes, battery regeneration is completely safe when performed by trained professionals using proper equipment. Our high-voltage regenerators are designed specifically for this purpose and include multiple safety features. The process actually extends battery life rather than damaging it, making it a safe and beneficial treatment."
        },
        {
          question: "What types of batteries can be regenerated?",
          answer: "We specialize in lead-acid battery regeneration, including sealed maintenance-free (SMF) batteries, gel batteries, and flooded lead-acid batteries. These are commonly used in UPS systems, solar installations, e-rickshaws, automotive applications, and backup power systems. We cannot regenerate lithium-ion or other battery chemistries."
        },
        {
          question: "How long does the regeneration process take?",
          answer: "The typical regeneration process takes 24-48 hours, depending on the battery's condition and capacity. This includes initial assessment, the actual regeneration treatment, and final testing. We provide estimated completion times when you drop off your batteries and keep you updated throughout the process."
        }
      ]
    },
    {
      category: "Performance & Results",
      questions: [
        {
          question: "How much will regeneration improve my battery's performance?",
          answer: "Most batteries show significant improvement after regeneration. Typically, we can restore 85-95% of the original capacity in batteries that have degraded to 30-60% capacity. The exact improvement depends on the battery's age, condition, and how well it has been maintained. We provide performance testing before and after regeneration."
        },
        {
          question: "How many times can a battery be regenerated?",
          answer: "Most lead-acid batteries can be successfully regenerated 2-4 times throughout their lifecycle, depending on usage patterns and maintenance. Each regeneration can extend battery life by 1-3 years. We assess each battery individually and advise whether regeneration is beneficial or if replacement is more economical."
        },
        {
          question: "What is the success rate of battery regeneration?",
          answer: "Our success rate is approximately 85-90% for batteries that meet our regeneration criteria. We perform initial testing to determine if a battery is a good candidate for regeneration. Factors affecting success include battery age, physical condition, and degree of sulfation. We only proceed with regeneration when we're confident of positive results."
        },
        {
          question: "How long will my regenerated battery last?",
          answer: "Regenerated batteries typically last 2-3 times longer than they would without treatment. A battery that might have lasted only 6 more months could operate effectively for 1.5-2 years after regeneration. Actual lifespan depends on usage patterns, maintenance, and operating conditions."
        }
      ]
    },
    {
      category: "Cost & Savings",
      questions: [
        {
          question: "How much does battery regeneration cost?",
          answer: "Regeneration costs start from ₹500 per battery, varying based on battery capacity and condition. This typically represents 20-30% of the cost of a new battery. We provide detailed quotes after initial assessment, and the cost includes testing, regeneration, and performance verification."
        },
        {
          question: "How much money can I save compared to buying new batteries?",
          answer: "Customers typically save 60-70% compared to purchasing new batteries. For example, if a new UPS battery costs ₹8,000, regeneration might cost ₹2,000-2,500 while providing 2-3 years of additional life. Over time, the savings can be substantial, especially for businesses with multiple batteries."
        },
        {
          question: "Do you offer any warranty on regenerated batteries?",
          answer: "Yes, we provide a performance warranty on regenerated batteries. The warranty period varies based on battery type and application, typically ranging from 6-12 months. Our warranty covers performance degradation beyond normal usage patterns, giving you confidence in the regeneration results."
        },
        {
          question: "Is there a minimum number of batteries required for service?",
          answer: "No, we accept single batteries as well as bulk orders. However, we offer volume discounts for businesses regenerating multiple batteries. Fleet operators, hospitals, and other organizations with many batteries can benefit from our bulk pricing programs."
        }
      ]
    },
    {
      category: "Service Process",
      questions: [
        {
          question: "How do I get my batteries regenerated?",
          answer: "Simply bring your batteries to any of our 75+ service centers across India, or contact us for pickup service in many areas. We'll perform initial testing, provide a quote, and proceed with regeneration upon approval. You can also call us for consultation before bringing your batteries."
        },
        {
          question: "Do you provide pickup and delivery service?",
          answer: "Yes, we offer pickup and delivery services in most major cities for multiple batteries or bulk orders. Individual battery pickup may be available depending on location. Contact your nearest service center to check availability and pricing for pickup/delivery services."
        },
        {
          question: "Can I regenerate batteries that are completely dead?",
          answer: "Not all completely dead batteries can be regenerated successfully. We perform comprehensive testing to determine if regeneration is feasible. Batteries that have been dead for extended periods or have physical damage may not be good candidates. Our assessment will determine the best course of action."
        },
        {
          question: "Where can I find your service centers?",
          answer: "We have 75+ service centers across India in major cities and towns. You can find the nearest center using our website's location finder, or call our helpline for assistance. We're continuously expanding our network to serve more areas."
        }
      ]
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-primary border-primary">
            FAQ
          </Badge>
          <h1 className="text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about battery regeneration, our services, 
            and how we can help extend your battery life while saving costs.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-primary" />
                <h2 className="text-2xl text-primary">{category.category}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <Card className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-3xl">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground">
              Our battery experts are here to help you make the right decision for your specific needs.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <Phone className="h-8 w-8 text-blue-500 mx-auto" />
                  <div>
                    <h3 className="text-lg mb-2">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-4">Speak directly with our technical experts</p>
                    <Button size="sm">
                      +91-XXX-XXX-XXXX
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <MessageCircle className="h-8 w-8 text-green-500 mx-auto" />
                  <div>
                    <h3 className="text-lg mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mb-4">Quick answers to your questions</p>
                    <Button size="sm" variant="outline">
                      Chat Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <Mail className="h-8 w-8 text-purple-500 mx-auto" />
                  <div>
                    <h3 className="text-lg mb-2">Email Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">Detailed responses within 24 hours</p>
                    <Button size="sm" variant="outline">
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                Need technical specifications or detailed consultation?
              </p>
              <Button size="lg">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}