import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Grain from "@/components/Grain";
import MusicToggle from "@/components/MusicToggle";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollChoreography from "@/components/ScrollChoreography";
import ScrollProgress from "@/components/ScrollProgress";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bekri4tiv.com"),
  title: "KRI4TIV | AI Marketer",
  description:
    "Creative marketer based in Dubai. Brand strategy, AI video production, motion design, and creative campaigns for global brands. MSc Marketing, University of Manchester.",
  keywords: [
    "creative marketer Dubai",
    "AI video creator",
    "AI filmmaker",
    "motion designer",
    "brand strategy Dubai",
    "creative production",
    "AI reels",
    "commercial video",
    "Premiere Pro editor",
    "generative AI marketing",
    "Anirudh Kandpal",
    "KRI4TIV",
  ],
  openGraph: {
    title: "KRI4TIV | AI Marketer",
    description: "Brand strategy, AI-powered creative production, and motion work for global brands. Based in Dubai.",
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preload" as="style" href="https://api.fontshare.com/v2/css?f[]=clash-display@400,600,700&display=swap" />
        <link rel="preload" as="style" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap" />
        <link rel="preload" as="style" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&display=swap" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@400,600,700&display=swap" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&display=swap" />
      </head>
      <body>
        <Grain />
        <Nav />
        <CustomCursor />
        <main>{children}</main>
        <MusicToggle />
        <SmoothScroll />
        <ScrollChoreography />
        <ScrollProgress />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
