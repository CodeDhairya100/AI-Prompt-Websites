import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Nano Brew | Future of Freshness",
  description: "Awwwards winning premium cold brew brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
