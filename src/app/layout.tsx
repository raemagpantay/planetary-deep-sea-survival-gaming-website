import type { Metadata } from "next";
import CustomNavbar from "@/components/ui/navbar";
import "./globals.css";
import AuthProvider from '@/app/context/auth-context'; 


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