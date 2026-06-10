import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BubbleField } from "@/components/effects/BubbleField";
import { DepthGauge } from "@/components/effects/DepthGauge";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "U-Boat Worx | Private Submarine Manufacturer",
    template: "%s | U-Boat Worx",
  },
  description:
    "U-Boat Worx is the world's leading manufacturer of private submarines, delivering uncompromised access to the deep for yachts, cruise operators, explorers and researchers.",
  metadataBase: new URL("https://www.uboatworx.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-abyss-950 text-ink-100">
        <BubbleField />
        <DepthGauge />
        <Header />
        <main className="flex-1 pt-20 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
