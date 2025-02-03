import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/uiComponents/component/Navbar";
import Footer from "@/components/uiComponents/component/Footer";
import { Toaster } from "@/components/ui/toaster";
import {
  ClerkProvider,
} from '@clerk/nextjs'

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
  title: "ETcarWoW",
  description: "Car selling website in ethiopia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans relative flex flex-col min-h-screen`}
        >
          <div className="w-full">
            <Navbar />
          </div>
          <div className="flex-1">{children}</div>
          <div className="w-full">
            <Footer />
          </div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
