import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding Case Studies | KRI4TIV",
  description:
    "Branding and design case studies by KRI4TIV, including Adidas Originals x Coca-Cola, Tabby Card, Heinz, SANDS, and CleanEats campaign systems.",
};

export default function BrandingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
