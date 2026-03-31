import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PatterNAIQ — AI Lead Generation for Estate Agents",
  description:
    "We deliver 10–20 qualified buyer and seller leads per month to estate agents in South Africa using AI systems that run without you.",
  openGraph: {
    title: "PatterNAIQ — AI Lead Generation for Estate Agents",
    description: "10–20 qualified leads per month. No chasing. No wasted viewings.",
    siteName: "PatterNAIQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
