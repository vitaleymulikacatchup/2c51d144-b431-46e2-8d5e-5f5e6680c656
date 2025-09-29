import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemeCoin Frenzy — Fun Memecoin for the Community",
  description: "Experience MemeCoin Frenzy, the playful memecoin built for easy participation. Transparent tokenomics, fast onboarding, and a community-driven vibe.",
  keywords: ["memecoin","memes","crypto","community","tokenomics","onboarding","buy memecoin","web3"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MemeCoin Frenzy",
    title: "MemeCoin Frenzy — Fun Memecoin for the Community",
    description: "Experience MemeCoin Frenzy, the playful memecoin built for easy participation. Transparent tokenomics, fast onboarding, and a community-driven vibe.",
    images: [{ url: "https://example.com/og-image.jpg", width: 1200, height: 630, alt: "MemeCoin Frenzy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemeCoin Frenzy — Fun Memecoin for the Community",
    description: "Experience MemeCoin Frenzy, the playful memecoin built for easy participation. Transparent tokenomics, fast onboarding, and a community-driven vibe.",
    images: ["https://example.com/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}