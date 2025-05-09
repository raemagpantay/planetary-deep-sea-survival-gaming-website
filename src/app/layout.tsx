import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomNavbar from "@/components/ui/navbar";
import "./globals.css";
import AuthProvider from '@/app/context/auth-context'; 

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: 'Planetary Deep-Sea Survival',
  description: 'Dive into an epic underwater adventure with Planetary Deep-Sea Survival. Explore, survive, and conquer the depths!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <CustomNavbar />
        </header>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}