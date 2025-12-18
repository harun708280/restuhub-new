import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/component/shared/Navber";
import Footer from "@/component/shared/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReviewFlow – The All-in-One Review Management Platform",
    description:
      "Automate review requests, respond faster, and improve your online reputation across Google, Facebook, Yelp & more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-[#ffffff]`}
      >
        <Navbar/>
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
