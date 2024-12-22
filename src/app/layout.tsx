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
  title: "Buck Polanski - Legend",
  description: "Buck Polanski is a legend and you should know about him.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
      >
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute inset-0 bg-[url('/img/space.jpg')] bg-cover bg-center bg-fixed" />
          <div className="absolute inset-0 bg-[url('/img/buck.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>
        {children}
      </body>
    </html>
  );
}
