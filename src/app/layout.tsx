import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KnowledgeFund — Secure, governed, mission-aligned AI automation",
  description:
    "KnowledgeFund helps organisations care for their shared knowledge, align their people, and safely automate business work through secure, governed, mission-aligned AI.",
  keywords: [
    "knowledge management",
    "AI governance",
    "enterprise AI",
    "knowledge automation",
    "organisational alignment",
  ],
  authors: [{ name: "KnowledgeFund" }],
  openGraph: {
    title: "KnowledgeFund — Secure, governed, mission-aligned AI automation",
    description:
      "KnowledgeFund helps organisations care for their shared knowledge, align their people, and safely automate business work through secure, governed, mission-aligned AI.",
    type: "website",
    url: "https://knowledgefund.co",
    siteName: "KnowledgeFund",
  },
  twitter: {
    card: "summary_large_image",
    title: "KnowledgeFund — Secure, governed, mission-aligned AI automation",
    description:
      "KnowledgeFund helps organisations care for their shared knowledge, align their people, and safely automate business work through secure, governed, mission-aligned AI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-navy text-off-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
