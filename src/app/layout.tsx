import type { Metadata } from "next";
import { Libre_Caslon_Text, Inter, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "James Anderson / Software Developer",
  description:
    "Software developer in Auckland, New Zealand. Computer science student at AUT, founder of Prep, and web developer with WDCC. Building useful products with React, TypeScript, and Python.",
  openGraph: {
    title: "James Anderson / Software Developer",
    description:
      "Software developer in Auckland, NZ. CS student at AUT, founder of Prep, and developer with WDCC.",
    url: "https://james-anderson.vercel.app",
    type: "website",
    images: [
      {
        url: "https://james-anderson.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:image" content="https://james-anderson.vercel.app/og-image.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)})()`,
          }}
        />
      </head>
      <body
        className={`${libreCaslon.variable} ${inter.variable} ${plexMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
