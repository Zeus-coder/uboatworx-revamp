import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BubbleField } from "@/components/effects/BubbleField";
import { Caustics } from "@/components/effects/Caustics";
import { DepthGauge } from "@/components/effects/DepthGauge";
import { COMPANY_INFO } from "@/lib/site-data";
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

const SITE_URL = "https://www.uboatworx.com";
const SITE_NAME = "U-Boat Worx";
const SITE_TITLE = "U-Boat Worx | Private Submarine Manufacturer";
const SITE_DESCRIPTION =
  "U-Boat Worx is the world's leading manufacturer of private submarines, delivering uncompromised access to the deep for yachts, cruise operators, explorers and researchers.";
const OG_IMAGE =
  "https://www.uboatworx.com/wp-content/uploads/2018/09/new_home_cover-1920x1080.jpg";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | U-Boat Worx",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "private submarine",
    "luxury submarine manufacturer",
    "personal submersible",
    "yacht submarine",
    "deep sea exploration",
    "U-Boat Worx",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1920,
        height: 1080,
        alt: "U-Boat Worx private submarine beneath the surface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#03070d",
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_DESCRIPTION,
  email: COMPANY_INFO.email,
  telephone: COMPANY_INFO.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_INFO.addressLines[0],
    addressLocality: "Breda",
    postalCode: "4824 AL",
    addressCountry: "NL",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Caustics />
        <BubbleField />
        <DepthGauge />
        <Header />
        <main className="flex-1 pt-20 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
