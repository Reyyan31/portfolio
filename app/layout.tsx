import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reyyan Alam | Backend Engineer",
  description: "Backend Engineer with experience in Node.js, APIs, cloud systems, and ERP platforms. Serving 1M+ users.",
};

import { RecruiterModeProvider } from "@/components/providers/RecruiterModeProvider";
import { AvailabilityBanner } from "@/components/ui/AvailabilityBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground bg-[#000] selection:bg-brand selection:text-white">
        <RecruiterModeProvider>
          <AvailabilityBanner />
          {children}
        </RecruiterModeProvider>
      </body>
    </html>
  );
}
