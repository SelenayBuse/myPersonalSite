// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Selenay | Portfolio",
  description: "Modern, animated portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative text-[var(--foreground)]`}
      >
        {/* Background image layer */}
        <div className="fixed inset-0 -z-20 bg-[url('/website_bg.png')] bg-cover bg-center blur-sm" />
        {/* Purple tint on top of the image */}
        <div className="fixed inset-0 -z-10 bg-[var(--color-purple-900)]/70" />

        <Navbar />
        <div className="mx-auto max-w-6xl px-6">{children}</div>
      </body>
    </html>
  );
}
