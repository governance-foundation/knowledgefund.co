import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const themeScript = `
(() => {
  try {
    const preference = localStorage.getItem("kf-theme") || "system";
    const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = preference === "system" ? (systemLight ? "light" : "dark") : preference;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.themePreference = preference;
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.dataset.themePreference = "system";
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://knowledgefund.co"),
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
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-manrope">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
