import type { Metadata } from "next";
import { Comfortaa, Quicksand, Caveat } from "next/font/google";
import Sparkles from "@/components/Sparkles";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radkliffe International | A Handcrafted Sanctuary of Learning",
  description: "A handcrafted sanctuary of learning where curiosity is the compass and imagination is the destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${comfortaa.variable} ${quicksand.variable} ${caveat.variable} scroll-smooth overflow-x-hidden`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background font-body-md overflow-x-hidden selection:bg-tertiary-fixed selection:text-on-tertiary-fixed flex flex-col min-h-screen">
        <div className="paper-grain"></div>
        <Sparkles />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
