import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Grain from "@/components/Grain";
import MusicToggle from "@/components/MusicToggle";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "KRI4TIV | Anirudh Kandpal, Creative Marketer",
  description:
    "Creative marketing studio based in Dubai. Brand strategy, creative production, AI automation, motion and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="style" href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" />
        <link rel="preload" as="style" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap" />
        <link rel="preload" as="style" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&display=swap" />
        <link rel="preload" as="style" href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&display=swap" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap" />
      </head>
      <body>
        <Grain />
        <Nav />
        <CustomCursor />
        <main>{children}</main>
        <MusicToggle />
        <SmoothScroll />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
