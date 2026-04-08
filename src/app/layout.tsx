import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fast Mode Cruit | Transportation Staffing Solutions",
  description:
    "Expert staffing solutions for the transportation and logistics industry. CDL drivers, dispatchers, safety compliance, and more — 24/7 support.",
  keywords: "transportation staffing, CDL drivers, dispatchers, trucking recruitment, logistics staffing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69d6bf4284d877643cfc907d"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
