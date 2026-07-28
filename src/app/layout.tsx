import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Libre_Baskerville,
  Great_Vibes,
} from "next/font/google";
import {
  MusicProvider,
  MusicToggle,
  WelcomeGate,
} from "@/components/MusicToggle";
import { RosePetals } from "@/components/ui/RosePetals";
import { wedding } from "@/lib/wedding";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(wedding.seo.url),
  title: {
    default: wedding.seo.title,
    template: `%s · ${wedding.couple.partner1} & ${wedding.couple.partner2}`,
  },
  description: wedding.seo.description,
  keywords: [
    "wedding invitation",
    wedding.couple.partner1,
    wedding.couple.partner2,
    "wedding",
    wedding.date.display,
  ],
  authors: [{ name: `${wedding.couple.partner1} & ${wedding.couple.partner2}` }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: wedding.seo.url,
    title: wedding.seo.title,
    description: wedding.seo.description,
    siteName: `${wedding.couple.partner1} & ${wedding.couple.partner2}`,
    images: [
      {
        url: wedding.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${wedding.couple.partner1} & ${wedding.couple.partner2} Wedding`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: wedding.seo.title,
    description: wedding.seo.description,
    images: [wedding.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1F080E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <MusicProvider>
          <WelcomeGate />
          <RosePetals />
          {children}
          <MusicToggle />
        </MusicProvider>
      </body>
    </html>
  );
}
