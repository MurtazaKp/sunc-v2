"use client";

import { useState } from "react";
// Assuming you have shadcn/ui components available at this path:
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Building,
  Battery,
  Search,
  Navigation,
  Star,
} from "lucide-react";
// Removed: import Link from "next/link"; // Replacing with <a> tag to fix compilation
import { toast } from "sonner"; // Needed for status messages

// ==============================================================================
// INLINE UTILITY FUNCTION (Self-contained submission logic)
// !!! REPLACE THIS URL with your deployed Google Apps Script Web App URL !!!
// ==============================================================================
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwreexCEHbnpq06sBiZJpaz7LGjeebMFJiUKjbauEcJygFhf7W3bA_cYbA9rxbqCJO-YA/exec";
/**
 * Sends form data to the Google Apps Script Web App.
 */
const sendFormData = async (formData: FormData): Promise<object> => {
  const urlEncodedData = new URLSearchParams(
    Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
  ).toString();

  const response = await fetch(GOOGLE_SHEET_URL, {
    method: "POST",
    mode: "cors", // Critical for cross-origin requests
    cache: "no-cache",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlEncodedData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};
// ==============================================================================

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCity, setSelectedCity] = useState("all");

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const targetSheet = "ContactForm"; // Target sheet for this specific form

    const form = new FormData();
    form.append("targetSheet", targetSheet); // CRITICAL: Tells Apps Script where to route data

    // Map local state keys to the required Google Sheet/Apps Script headers
    form.append("fullName", formData.name);
    form.append("emailAddress", formData.email);
    form.append("phoneNumber", formData.phone);
    form.append("serviceInterest", formData.service);
    form.append("message", formData.message);

    try {
      await sendFormData(form);

      toast.success("Request sent! We'll get back to you within 24 hours.");

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Submission Failed", {
        description: "Could not send data. Check console for details.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+917276050250"],
      description: "24/7 technical support",
      color: "text-blue-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+917276050250"],
      description: "Quick responses, file sharing",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: [" info@suncbattery.com"],
      description: "Detailed inquiries & quotes",
      color: "text-purple-600",
    },
    {
      icon: Building,
      title: "Corporate Office",
      details: [
        "Sr.No.25, Opposite Savali Dhaba, Sinhgad Rd, nr. Swami Samarth Temple, Nanded Fata, Pune, Maharashtra 411068",
      ],
      description: "Mon-Sat: 9:00 AM - 6:00 PM",
      color: "text-orange-600",
    },
  ];

  const serviceCenters = [
    {
      city: "West Bengal",
      name: "Alomgir shah- West Bengal",
      address: "Plot 45, MIDC Industrial Area, Andheri East, Mumbai - 400093",
      phone: "+917420886898",
      hours: "9:00 AM - 7:00 PM",
      services: ["Regeneration", "Monitoring", "Sales"],
      rating: 4.8,
    },
    {
      city: "Delhi",
      name: "Biju unninayar -Kerla",
      address: "A-234, Industrial Area, Mayapuri, New Delhi - 110064",
      phone: "+917420886898",
      hours: "9:00 AM - 7:00 PM",
      services: ["Regeneration", "Manufacturing", "Training"],
      rating: 4.9,
    },
    {
      city: "Jharkhand",
      name: "Pradip mahato-Jharkhand",
      address:
        "Unit 12, Tech Park, Electronic City Phase 1, Bangalore - 560100",
      phone: "+917420886898",
      hours: "9:00 AM - 7:00 PM",
      services: ["Regeneration", "Monitoring", "Support"],
      rating: 4.7,
    },
    {
      city: "Selam",
      name: "Jaychandran- Selam",
      address: "Sector 3, Hinjewadi IT Park, Pune - 411057",
      phone: "+917420886898",
      hours: "9:00 AM - 7:00 PM",
      services: ["Regeneration", "Sales", "Training"],
      rating: 4.8,
    },
  ];

  const cities = [...new Set(serviceCenters.map((center) => center.city))];

  const filteredCenters =
    selectedCity === "all"
      ? serviceCenters
      : serviceCenters.filter((center) => center.city === selectedCity);

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-primary border-primary">
            Contact Us
          </Badge>
          <h1 className="text-4xl lg:text-5xl">
            Get in Touch with Battery Experts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to extend your battery life and save costs? Contact our
            experts for personalized consultation and quotes.
          </p>
        </div>

        <Tabs defaultValue="contact" className="space-y-8">
          <TabsList className="grid w-full lg:w-auto lg:mx-auto grid-cols-1 lg:grid-cols-2">
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Contact & Quote
            </TabsTrigger>
            <TabsTrigger value="centers" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Service Centers
            </TabsTrigger>
          </TabsList>

          {/* Contact Form Tab */}
          <TabsContent value="contact" className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Request a Quote
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="FullName" // Match Apps Script Header
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="PhoneNumber" // Match Apps Script Header
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        name="EmailAddress" // Match Apps Script Header
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select
                        name="ServiceInterest" // Match Apps Script Header
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="battery-regeneration">
                            Battery Regeneration
                          </SelectItem>
                          <SelectItem value="regenerator-purchase">
                            Regenerator Purchase
                          </SelectItem>
                          <SelectItem value="monitoring-system">
                            Battery Monitoring System
                          </SelectItem>
                          <SelectItem value="bulk-service">
                            Bulk Service
                          </SelectItem>
                          <SelectItem value="consultation">
                            General Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="Message" // Match Apps Script Header
                        placeholder="Tell us about your battery requirements, number of batteries, applications, etc."
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h2 className="text-2xl">Contact Information</h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-lg bg-muted ${info.color}`}
                          >
                            <info.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg">Need Immediate Assistance?</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <a href="tel:+917276050250" className="text-sm">
                        <Button className="w-full">
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </Button>
                      </a>
                      <a
                        href="https://wa.me/917276050250"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm"
                      >
                        <Button variant="outline" className="w-full">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Service Centers Tab */}
          <TabsContent value="centers" className="space-y-8">
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <div>
                  <h2 className="text-2xl mb-2">Find a Service Center</h2>
                  <p className="text-muted-foreground">
                    Locate the nearest SunC service center for battery
                    regeneration and support
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cities</SelectItem>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {filteredCenters.map((center, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">
                            {center.name}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{center.city}</Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs">{center.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm">{center.phone}</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Battery className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <div className="flex flex-wrap gap-1">
                          {center.services.map((service, serviceIndex) => (
                            <Badge
                              key={serviceIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <a // Replaced Link component with <a> tag
                        href={`tel:${center.phone}`}
                        className="flex gap-2 pt-2"
                      >
                        <Button size="sm" className="flex-1">
                          <Phone className="mr-2 h-3 w-3" />
                          Call
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
