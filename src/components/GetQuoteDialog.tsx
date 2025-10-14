import { useState } from "react";
// Assuming you have shadcn/ui components available at this path:
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  User,
  Building,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle,
  Zap,
  Clock,
  Award,
} from "lucide-react";

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
  // Convert FormData to URLSearchParams format (required by Apps Script's doPost(e))
  // Convert FormData to an array of entries for URLSearchParams
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

interface GetQuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant?: "quote" | "partner";
}

type FormDataKeys =
  | "fullName"
  | "companyName"
  | "email"
  | "phone"
  | "cityState"
  | "businessDescription";

export function GetQuoteDialog({
  open,
  onOpenChange,
  variant = "quote",
}: GetQuoteDialogProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    cityState: "",
    businessDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string>("");

  const handleInputChange = (field: FormDataKeys, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSubmissionError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    // --- 1. Determine Target Sheet ---
    const targetSheet = variant === "quote" ? "GetQuote" : "PartnerInquiry";

    // --- 2. Prepare FormData object for submission ---
    const form = new FormData();

    // Append the critical routing field first (Apps Script reads this as data.targetSheet)
    form.append("targetSheet", targetSheet);

    // Append standard fields
    form.append("fullName", formData.fullName);
    form.append("companyName", formData.companyName);
    form.append("cityState", formData.cityState);

    // Map internal state names to external Apps Script names (Apps Script reads data.emailAddress, etc.)
    form.append("emailAddress", formData.email);
    form.append("phoneNumber", formData.phone);

    if (variant === "partner") {
      form.append("businessDescription", formData.businessDescription);
    } else {
      form.append("batteryRequirements", formData.businessDescription);
    }

    // Map the description field based on the variant (Apps Script reads data.batteryRequirements or data.businessDescription)

    // --- 3. Send Data using the utility function ---
    try {
      await sendFormData(form);

      // Show success message
      toast.success(
        variant === "partner"
          ? "Partnership inquiry submitted! Our team will contact you within 24 hours."
          : "Quote request submitted! We'll get back to you within 24 hours."
      );

      // Reset form and close dialog
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        cityState: "",
        businessDescription: "",
      });
      onOpenChange(false);
    } catch (error) {
      // Handle API or network error
      console.error("Form Submission Failed:", error);
      const errorMessage = `Submission failed. Please check the console or verify your Apps Script deployment/permissions.`;
      setSubmissionError(errorMessage);
      toast.error("Submission Failed", {
        description: "An error occurred while connecting to the Google server.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.fullName &&
    formData.companyName &&
    formData.email &&
    formData.phone &&
    formData.cityState;

  const dialogContent = {
    quote: {
      title: "Get Your Custom Quote",
      description:
        "Tell us about your battery regeneration needs and we'll provide a tailored solution with competitive pricing.",
      submitText: "Submit Quote Request",
      businessLabel: "Tell us about your battery requirements (Optional)",
      placeholder:
        "Describe your battery types, quantities, current challenges, and specific requirements...",
    },
    partner: {
      title: "Let's Talk: Become a SunC Partner",
      description:
        "Interested in revolutionizing the energy sector with us? Fill out the form below, and our partnership team will contact you shortly to discuss this exciting opportunity.",
      submitText: "Submit Inquiry",
      businessLabel: "Tell us about your business (Optional)",
      placeholder:
        "Tell us about your business, current operations, and partnership interests...",
    },
  };

  const content = dialogContent[variant];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl">{content.title}</DialogTitle>
              <DialogDescription className="text-base mt-2">
                {content.description}
              </DialogDescription>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-muted/50">
            <div className="text-center">
              <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
              <div className="text-sm">24hr Response</div>
            </div>
            <div className="text-center">
              <Award className="h-5 w-5 text-primary mx-auto mb-1" />
              <div className="text-sm">15K+ Batteries</div>
            </div>
            <div className="text-center">
              <CheckCircle className="h-5 w-5 text-primary mx-auto mb-1" />
              <div className="text-sm">98% Satisfaction</div>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                Full Name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="flex items-center gap-2">
                <Building className="h-4 w-4 text-primary" />
                Company Name *
              </Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
                placeholder="Enter your company name"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                name="emailAddress" // Matches Apps Script field key
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                name="phoneNumber" // Matches Apps Script field key
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
          </div>

          {/* City/State */}
          <div className="space-y-2">
            <Label htmlFor="cityState" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              City / State *
            </Label>
            <Input
              id="cityState"
              name="cityState"
              value={formData.cityState}
              onChange={(e) => handleInputChange("cityState", e.target.value)}
              placeholder="Enter your city and state"
              required
            />
          </div>

          {/* Business Description */}
          <div className="space-y-2">
            <Label
              htmlFor="businessDescription"
              className="flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4 text-primary" />
              {content.businessLabel}
            </Label>
            <Textarea
              id="businessDescription"
              // Dynamically set the name attribute based on variant for Apps Script routing
              name={
                variant === "quote"
                  ? "batteryRequirements"
                  : "businessDescription"
              }
              value={formData.businessDescription}
              onChange={(e) =>
                handleInputChange("businessDescription", e.target.value)
              }
              placeholder={content.placeholder}
              rows={4}
            />
          </div>

          {/* Error Display */}
          {submissionError && (
            <p className="text-sm text-red-600 mt-2 p-2 bg-red-50 rounded-md">
              {submissionError}
            </p>
          )}

          {/* Privacy Notice */}
          <Card className="bg-muted/30">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Your information is secure.</strong> We respect your
                    privacy and will only use your details to provide the
                    requested{" "}
                    {variant === "partner"
                      ? "partnership information"
                      : "quote"}
                    . We never share personal information with third parties.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      GDPR Compliant
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      SSL Encrypted
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      No Spam Policy
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {content.submitText}
                </>
              )}
            </Button>
          </div>

          {/* Contact Alternative */}
          <div className="text-center pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-2">
              Prefer to talk directly? Contact us:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="tel:+91XXXXXXXXX"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <Phone className="h-3 w-3" />
                +91-XXX-XXX-XXXX
              </a>
              <a
                href="mailto:info@suncbattery.com"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <Mail className="h-3 w-3" />
                info@suncbattery.com
              </a>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
