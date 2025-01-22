import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/assets/font_awesome_pro/css/all.css";
import Navbar from "@/components/global/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gianpiero Spata",
  description: "Fotografie & Video a Firenze.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="mt-[90px]">
          {children}
        </main>

        {/* speed insights */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
