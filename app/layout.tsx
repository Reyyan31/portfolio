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
  title: "Reyyan Alam | Backend & DevOps Engineer",
  description: "Backend & DevOps Engineer with 2+ years of production experience in Node.js, PHP/Laravel, Django, Kubernetes, and cloud infrastructure.",
};

import { Suspense } from "react";
import { RecruiterModeProvider } from "@/components/providers/RecruiterModeProvider";
import { RecruiterActionBar } from "@/components/ui/RecruiterActionBar";

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
      <head>
        {/* Simple legacy browser check */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            eval("() => {}");
          } catch (e) {
            document.documentElement.className += " legacy-browser";
            alert("This modern portfolio works best in Chrome, Edge, or Safari. Some features may not load in Internet Explorer.");
          }
        `}} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground bg-[#000] selection:bg-brand selection:text-white">
        <RecruiterModeProvider>
          <Suspense fallback={<div className="flex-1 flex items-center justify-center min-h-[50vh]">
            <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin" />
          </div>}>
            {children}
          </Suspense>
          <RecruiterActionBar />
        </RecruiterModeProvider>
      </body>
    </html>
  );
}
