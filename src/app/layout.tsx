"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./index.css";
import { Header } from "@/components/Header";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { GetQuoteDialog } from "@/components/GetQuoteDialog";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);

  const handleGetQuote = () => {
    setIsQuoteDialogOpen(true);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header onGetQuote={handleGetQuote} />
        {children}
        <Footer onGetQuote={handleGetQuote} />

        <GetQuoteDialog
          open={isQuoteDialogOpen}
          onOpenChange={setIsQuoteDialogOpen}
          variant="quote"
        />

        {/* Toast Notifications */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
