import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Source_Sans_3 } from "next/font/google";
import { MusicProvider, MusicToggle, WelcomeGate } from "@/components/MusicToggle";
import { wedding } from "@/lib/wedding";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
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
  themeColor: "#7B1E1E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <MusicProvider>
          <WelcomeGate />
          {children}
          <MusicToggle />
        </MusicProvider>
      </body>
    </html>
  );
}
