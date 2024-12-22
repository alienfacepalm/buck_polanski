'use client'

import { usePathname } from 'next/navigation'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative flex flex-col`}
      >
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute inset-0 bg-[url('/img/space.jpg')] bg-cover bg-center bg-fixed" />
          <div className="absolute inset-0 bg-[url('/img/buck.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        {!isHomePage && (
          <footer className="text-center py-4 text-gray-400">
            <p className="text-xs">Built with Cursor IDE + Claude 3.5 Sonnet • Images by Microsoft Copilot</p>
            <p className="text-[10px]">© {new Date().getFullYear()} Buck Polanski LLC</p>
          </footer>
        )}
      </body>
    </html>
  );
}
