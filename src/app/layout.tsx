import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./provider/smooth-scroll-provider";
import Navbar from "../components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Sari Madu",
  description: "Segar Alami, Sehat Setiap Hari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/img/nexativelogo.webp" />
      </head>
      <body>
        <SmoothScrollProvider>
          <Navbar />
          <main className="bg-background">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
