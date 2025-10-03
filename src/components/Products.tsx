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
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Battery,
  Zap,
  Award,
  Shield,
  Gauge,
  Settings,
  CheckCircle,
  ArrowRight,
  Phone,
  Download,
  Ruler,
  Weight,
  Calendar,
  Power,
  Star,
  TrendingUp,
  Users,
  ZoomIn,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Play,
  Eye,
  Wrench,
  Box,
  Factory,
  Grid3x3,
  Monitor,
} from "lucide-react";
import { GetQuoteDialog } from "./GetQuoteDialog";

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState("rg-4x");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImageSector, setSelectedImageSector] = useState("overview");
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);

  const productImageSectors = {
    "rg-4x": {
      overview: [
        {
          url: "/rg-4x/main-image.jpeg",
          alt: "RG-4X Battery Regenerator - Main Product View",
          caption: "Complete System Overview",
          type: "main",
        },
        {
          url: "/rg-4x/front-panel.jpeg",
          alt: "RG-4X Battery Regenerator - Front Panel",
          caption: "Control Panel Interface",
          type: "interface",
        },
        {
          url: "/rg-4x/side-image.jpeg",

          alt: "RG-4X Battery Regenerator - Side View",
          caption: "Compact Side Profile",
          type: "profile",
        },
      ],
    },
    "rg-8x": {
      overview: [
        {
          url: "/rg-8x/main-image.jpeg",
          alt: "RG-8X Battery Regenerator - Complete System",
          caption: "8-Battery Capacity System",
          type: "main",
        },
        {
          url: "/rg-8x/front-panel.jpeg",
          alt: "RG-8X Battery Regenerator - Advanced Interface",
          caption: "Enhanced Control Panel",
          type: "interface",
        },
        {
          url: "/rg-8x/side-image.jpeg",
          alt: "RG-8X Battery Regenerator - Professional Grade",
          caption: "Professional Side View",
          type: "profile",
        },
      ],
    },
    "rg-16x": {
      overview: [
        {
          url: "/rg-16x/main-image.jpeg",
          alt: "RG-16X Battery Regenerator - Maximum Capacity",
          caption: "16-Battery Industrial System",
          type: "main",
        },
        {
          url: "/rg-16x/front-panel.jpeg",
          alt: "RG-16X Battery Regenerator - Professional Panel",
          caption: "Professional Control Interface",
          type: "interface",
        },
        {
          url: "/rg-16x/side-image.jpeg",
          alt: "RG-16X Battery Regenerator - Industrial Design",
          caption: "Heavy-Duty Construction",
          type: "profile",
        },
      ],
      components: [
        {
          url: "https://images.unsplash.com/photo-1581092919965-vx5c21b6b22f?w=800&h=600&fit=crop",
          alt: "RG-16X Battery Regenerator - Advanced Systems",
          caption: "Advanced Internal Systems",
          type: "internal",
        },
        {
          url: "https://images.unsplash.com/photo-1581092920022-wy5c21b6b22f?w=800&h=600&fit=crop",
          alt: "RG-16X Battery Regenerator - Multiple Banks",
          caption: "Multiple Connection Banks",
          type: "connections",
        },
        {
          url: "https://images.unsplash.com/photo-1581092920079-xz5c21b6b22f?w=800&h=600&fit=crop",
          alt: "RG-16X Battery Regenerator - Control Systems",
          caption: "Advanced Control Systems",
          type: "controls",
        },
      ],
      applications: [
        {
          url: "https://images.unsplash.com/photo-1581092920136-ya5c21b6b22f?w=800&h=600&fit=crop",
          alt: "RG-16X Battery Regenerator - Manufacturing Plant",
          caption: "Manufacturing Facility",
          type: "manufacturing",
        },
        {
          url: "https://images.unsplash.com/photo-1581092920193-zb5c21b6b22f?w=800&h=600&fit=crop",
          alt: "RG-16X Battery Regenerator - Large Scale",
          caption: "Large Scale Operation",
          type: "largescale",
        },
        {
          url: "https://images.unsplash.com/photo-1581092920250-ac5c21b6b22f?w=800&h=600&fit=crop",
          alt: "RG-16X Battery Regenerator - Enterprise",
          caption: "Enterprise Installation",
          type: "enterprise",
        },
      ],
    },
  };

  const products = {
    "rg-4x": {
      id: "rg-4x",
      name: "RG-4X",
      image: "/rg-4x/rg-4x.jpeg",
      title: "Battery Regenerator - 4 Battery Capacity",
      description:
        "High-quality battery regenerator designed for small to medium operations, processing 4 batteries simultaneously.",
      capacity: "4 Batteries",
      batteryType: "Lead-Acid Batteries (36ah to 400ah)",
      dimensions: "960mm × 406mm × 406mm",
      weight: "56 Kg",
      warranty: "2 Years",
      power: "230V/50Hz (Single Phase)",
      certifications: ["CE", "ISO"],
      price: "Starting from ₹3,XX,XXX",
      ideal: "Small Service Centers, Battery Shops, Fleet Operators",
      features: [
        "Compact Design",
        "Energy Efficient",
        "Easy Operation",
        "Quick Setup",
        "Cost Effective",
        "Reliable Performance",
      ],
      benefits: [
        "Perfect for small operations",
        "Low space requirements",
        "Quick ROI",
        "Easy maintenance",
      ],
      applications: [
        "Battery Shops",
        "Small Fleet Operations",
        "Service Centers",
        "Maintenance Facilities",
      ],
    },
    "rg-8x": {
      id: "rg-8x",
      name: "RG-8X",
      title: "Battery Regenerator - 8 Battery Capacity",
      image: "/rg-8x/rg-8x.jpeg",
      description:
        "Mid-range battery regenerator ideal for medium-scale operations, doubling the capacity with 8 battery processing.",
      capacity: "8 Batteries",
      batteryType: "Lead-Acid Batteries (36ah to 400ah)",
      dimensions: "1019mm × 551mm × 484mm",
      weight: "76 Kg",
      warranty: "2 Years",
      power: "230V/50Hz (Single Phase)",
      certifications: ["CE", "ISO"],
      price: "Starting from ₹5,XX,XXX",
      ideal: "Medium Service Centers, Industrial Operations, Fleet Managers",
      features: [
        "Higher Capacity",
        "Advanced Controls",
        "Robust Construction",
        "Efficient Processing",
        "Professional Grade",
        "Enhanced Safety",
      ],
      benefits: [
        "Doubled productivity",
        "Better ROI potential",
        "Professional operations",
        "Scalable solution",
      ],
      applications: [
        "Industrial Facilities",
        "Medium Fleet Operations",
        "Commercial Service Centers",
        "Battery Distribution Centers",
      ],
    },
    "rg-16x": {
      id: "rg-16x",
      name: "RG-16X",
      title: "Battery Regenerator - 16 Battery Capacity",
      image: "/rg-16x/rg-16x.jpeg",
      description:
        "High-capacity battery regenerator for large-scale operations, capable of processing 16 batteries simultaneously for maximum efficiency.",
      capacity: "16 Batteries",
      batteryType: "All Lead-Acid Batteries (up to 400Ah)",
      dimensions: "1028mm × 751mm × 504mm",
      weight: "130 Kg",
      warranty: "2 Years",
      power: "230V/50Hz (Single Phase)",
      certifications: ["CE", "ISO"],
      price: "Starting from ₹6,XX,XXX",
      ideal:
        "Large Service Centers, Industrial Operations, Manufacturing Units",
      features: [
        "Maximum Capacity",
        "Industrial Grade",
        "Advanced Technology",
        "High Efficiency",
        "Premium Quality",
        "Professional Support",
      ],
      benefits: [
        "Highest productivity",
        "Industrial-scale operations",
        "Maximum ROI potential",
        "Enterprise solution",
      ],
      applications: [
        "Manufacturing Units",
        "Large Fleet Operations",
        "Industrial Battery Centers",
        "Commercial Regeneration Facilities",
      ],
    },
  };

  const currentProduct = products[selectedProduct as keyof typeof products];
  const currentImageSectors =
    productImageSectors[selectedProduct as keyof typeof productImageSectors];
  const currentSectorImages =
    currentImageSectors[
      selectedImageSector as keyof typeof currentImageSectors
    ];
  const currentImage = currentSectorImages[selectedImageIndex];

  const allProducts = Object.values(products);

  const imageSectors = [
    {
      id: "overview",
      name: "Overview",
      icon: Eye,
      description: "Main product views",
    },
    {
      id: "components",
      name: "Components",
      icon: Wrench,
      description: "Internal components",
    },
    {
      id: "applications",
      name: "Applications",
      icon: Factory,
      description: "Real-world usage",
    },
  ];

  const comparisonData = [
    {
      feature: "Capacity",
      rg4x: "4 Batteries",
      rg8x: "8 Batteries",
      rg16x: "16 Batteries",
    },
    {
      feature: "Battery Range",
      rg4x: "36ah - 400ah",
      rg8x: "36ah - 400ah",
      rg16x: "Up to 400ah",
    },
    {
      feature: "Dimensions",
      rg4x: "960×406×406mm",
      rg8x: "1019×551×484mm",
      rg16x: "1028×751×504mm",
    },
    { feature: "Weight", rg4x: "56 Kg", rg8x: "76 Kg", rg16x: "130 Kg" },
    {
      feature: "Power",
      rg4x: "230V/50Hz",
      rg8x: "230V/50Hz",
      rg16x: "230V/50Hz",
    },
    { feature: "Warranty", rg4x: "2 Years", rg8x: "2 Years", rg16x: "2 Years" },
    {
      feature: "Ideal For",
      rg4x: "Small Operations",
      rg8x: "Medium Operations",
      rg16x: "Large Operations",
    },
  ];

  const handleImageNavigation = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setSelectedImageIndex((prev) =>
        prev === 0 ? currentSectorImages.length - 1 : prev - 1
      );
    } else {
      setSelectedImageIndex((prev) =>
        prev === currentSectorImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const getImageTypeIcon = (type: string) => {
    switch (type) {
      case "main":
        return <Battery className="h-3 w-3" />;
      case "interface":
        return <Monitor className="h-3 w-3" />;
      case "profile":
        return <Box className="h-3 w-3" />;
      case "internal":
        return <Settings className="h-3 w-3" />;
      case "connections":
        return <Zap className="h-3 w-3" />;
      case "workshop":
        return <Wrench className="h-3 w-3" />;
      case "industrial":
        return <Factory className="h-3 w-3" />;
      case "commercial":
        return <Users className="h-3 w-3" />;
      default:
        return <Battery className="h-3 w-3" />;
    }
  };

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-primary border-primary">
            Our Products
          </Badge>
          <h1 className="text-4xl lg:text-5xl">
            Professional Battery Regenerators
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of high-quality battery regenerators designed for
            different scales of operation, from small service centers to large
            industrial facilities.
          </p>
        </div>

        {/* Product Overview Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {allProducts.map((product, index) => (
            <Card
              key={product.id}
              className={`relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                index === 1 ? "ring-2 ring-primary ring-opacity-50" : ""
              }`}
            >
              {index === 1 && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="inline-flex  justify-content-start  rounded-2xl  mx-auto mb-4 mt-2">
                  <ImageWithFallback
                    src={product.image}
                    alt={currentImage.alt}
                    className="  rounded-2xl  object-contain  "
                  />
                </div>
                <CardTitle className="text-2xl text-primary">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  {product.title}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Specs */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Capacity
                    </span>
                    <span className="text-sm">{product.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Weight
                    </span>
                    <span className="text-sm">{product.weight}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Warranty
                    </span>
                    <span className="text-sm">{product.warranty}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-sm">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {product.features
                      .slice(0, 4)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-xs"
                        >
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="p-4 rounded-lg bg-muted">
                  <div className="text-center">
                    <div className="text-lg text-primary">{product.price}</div>
                    <div className="text-xs text-muted-foreground">
                      + Installation & Training
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2">
                  <Button
                    className="w-full"
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => {
                      setIsQuoteDialogOpen(!isQuoteDialogOpen);
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Product View */}
        <Tabs
          value={selectedProduct}
          onValueChange={setSelectedProduct}
          className="space-y-8"
        >
          <TabsList className="grid w-full lg:w-auto lg:mx-auto grid-cols-1 lg:grid-cols-3 h-auto p-1">
            {allProducts.map((product) => (
              <TabsTrigger
                key={product.id}
                value={product.id}
                className="flex items-center gap-2 p-4"
              >
                <Battery className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">{product.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {product.capacity}
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedProduct} className="space-y-12">
            {/* Product Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl">
                {currentProduct.name} Battery Regenerator
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {currentProduct.description}
              </p>
            </div>

            {/* Enhanced Image Gallery with Sectors */}
            <div className="space-y-8">
              {/* Main Image Display */}
              <Card className="overflow-hidden">
                <CardContent className="p-0 [&:last-child]:pb-0">
                  <div className="relative group">
                    <ImageWithFallback
                      src={currentImage.url}
                      alt={currentImage.alt}
                      className="w-full lg:h-[650px]"
                    />

                    {/* Image Overlay Controls */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                      {/* Navigation Arrows */}
                      <button
                        onClick={() => handleImageNavigation("prev")}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 hover:bg-background transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-lg"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>

                      <button
                        onClick={() => handleImageNavigation("next")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 hover:bg-background transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-lg"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>

                      {/* Zoom and Fullscreen Controls */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-background/90 hover:bg-background shadow-lg"
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-background/90 hover:bg-background shadow-lg"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Enhanced Image Caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <div className="text-white">
                        <div className="flex items-center justify-between">
                          <div className="text-sm opacity-90">
                            {selectedImageIndex + 1} of{" "}
                            {currentSectorImages.length} in{" "}
                            {
                              imageSectors.find(
                                (s) => s.id === selectedImageSector
                              )?.name
                            }
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-background/20 text-white border-white/20"
                          >
                            {
                              imageSectors.find(
                                (s) => s.id === selectedImageSector
                              )?.name
                            }
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Grid3x3 className="h-5 w-5 text-primary" />
                    {
                      imageSectors.find((s) => s.id === selectedImageSector)
                        ?.name
                    }{" "}
                    Gallery
                  </CardTitle>
                  <CardDescription>
                    {
                      imageSectors.find((s) => s.id === selectedImageSector)
                        ?.description
                    }{" "}
                    for {currentProduct.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentSectorImages.map((image, index) => (
                      <Card
                        key={index}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                          index === selectedImageIndex
                            ? "ring-2 ring-primary shadow-lg"
                            : ""
                        }`}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <CardContent className="p-3">
                          <div className="relative mb-3">
                            <ImageWithFallback
                              src={image.url}
                              alt={image.alt}
                              className="w-full  object-cover rounded"
                            />
                            <div
                              className={`absolute inset-0 rounded transition-colors ${
                                index === selectedImageIndex
                                  ? "bg-primary/20"
                                  : "bg-black/0 hover:bg-black/10"
                              }`}
                            ></div>

                            {/* Selected Indicator */}
                            {index === selectedImageIndex && (
                              <div className="absolute top-2 right-2">
                                <div className="p-1 rounded-full bg-primary text-primary-foreground">
                                  <CheckCircle className="h-3 w-3" />
                                </div>
                              </div>
                            )}

                            {/* Image Type Badge */}
                            <div className="absolute bottom-2 left-2">
                              <Badge
                                variant="secondary"
                                className="text-xs bg-background/80"
                              >
                                {getImageTypeIcon(image.type)}
                              </Badge>
                            </div>
                          </div>

                          <div>
                            <div className="text-sm mb-1 line-clamp-2">
                              {image.caption}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Click to view
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Details Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Technical Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-blue-500" />
                    Technical Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Gauge className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm">Capacity</div>
                        <div className="text-lg">{currentProduct.capacity}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Battery className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="text-sm">Battery Type</div>
                        <div className="text-sm">
                          {currentProduct.batteryType}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Ruler className="h-5 w-5 text-purple-500" />
                      <div>
                        <div className="text-sm">Dimensions</div>
                        <div className="text-sm">
                          {currentProduct.dimensions}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Weight className="h-5 w-5 text-orange-500" />
                      <div>
                        <div className="text-sm">Weight</div>
                        <div className="text-lg">{currentProduct.weight}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Power className="h-5 w-5 text-red-500" />
                      <div>
                        <div className="text-sm">Power Requirements</div>
                        <div className="text-sm">{currentProduct.power}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      <div>
                        <div className="text-sm">Warranty</div>
                        <div className="text-lg">{currentProduct.warranty}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm">Certifications</span>
                    </div>
                    <div className="flex gap-2">
                      {currentProduct.certifications.map((cert) => (
                        <Badge key={cert} variant="secondary">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features & Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Features & Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {currentProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm mb-3">Business Benefits</h4>
                    <div className="space-y-2">
                      {currentProduct.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm mb-3">Ideal Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProduct.applications.map((app, index) => (
                        <Badge key={index} variant="outline">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">Ideal For:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {currentProduct.ideal}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center space-y-6">
                <h3 className="text-2xl">
                  Ready to Boost Your Battery Business?
                </h3>
                <p className="text-muted-foreground">
                  Get detailed pricing, technical specifications, and
                  personalized recommendations for your operation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => {
                      setIsQuoteDialogOpen(!isQuoteDialogOpen);
                    }}
                    size="lg"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Request Quote
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Technical Brochure
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Includes installation, training, and 2-year comprehensive
                  warranty
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Comparison Table */}
        <div className="mt-16">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl">Product Comparison</h2>
            <p className="text-muted-foreground">
              Compare specifications across all three models to find the perfect
              fit
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Feature</th>
                      <th className="text-center p-3">RG-4X</th>
                      <th className="text-center p-3">RG-8X</th>
                      <th className="text-center p-3">RG-16X</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-3">{row.feature}</td>
                        <td className="p-3 text-center text-sm">{row.rg4x}</td>
                        <td className="p-3 text-center text-sm">{row.rg8x}</td>
                        <td className="p-3 text-center text-sm">{row.rg16x}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Section */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <Shield className="h-8 w-8 text-green-500 mx-auto" />
              <h3>2-Year Warranty</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive warranty coverage on all parts and components
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <Settings className="h-8 w-8 text-blue-500 mx-auto" />
              <h3>Installation & Training</h3>
              <p className="text-sm text-muted-foreground">
                Complete setup and operator training included with every
                purchase
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <Phone className="h-8 w-8 text-purple-500 mx-auto" />
              <h3>24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Round-the-clock technical support and maintenance assistance
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <GetQuoteDialog
        open={isQuoteDialogOpen}
        onOpenChange={setIsQuoteDialogOpen}
        variant="quote"
      />
    </div>
  );
}
