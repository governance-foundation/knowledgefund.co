/* eslint-disable @next/next/no-page-custom-font, @next/next/no-sync-scripts */
import type { Metadata } from "next";
import "./globals.css";

const themeScript = `
(() => {
  document.documentElement.dataset.theme = "dark";
  document.documentElement.dataset.themePreference = "dark";
})();
`;

const tailwindCdnConfig = `
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#1c1b1d",
        "surface": "#131315",
        "outline": "#8d90a2",
        "secondary": "#bec6e0",
        "tertiary-container": "#707171",
        "tertiary-fixed-dim": "#c6c6c7",
        "on-primary-fixed-variant": "#0039b5",
        "on-primary-fixed": "#001552",
        "background": "#131315",
        "surface-container-highest": "#353437",
        "on-secondary": "#283044",
        "on-secondary-container": "#adb4ce",
        "on-background": "#e5e1e4",
        "surface-container-lowest": "#0e0e10",
        "primary-container": "#2e62ff",
        "primary": "#b7c4ff",
        "outline-variant": "#434656",
        "surface-tint": "#b7c4ff",
        "inverse-surface": "#e5e1e4",
        "primary-fixed": "#dce1ff",
        "surface-dim": "#131315",
        "primary-fixed-dim": "#b7c4ff",
        "on-tertiary-fixed": "#1a1c1c",
        "surface-container-high": "#2a2a2c",
        "on-tertiary": "#2f3131",
        "on-secondary-fixed-variant": "#3f465c",
        "tertiary": "#c6c6c7",
        "surface-container": "#201f22",
        "on-surface": "#e5e1e4",
        "on-secondary-fixed": "#131b2e",
        "secondary-fixed": "#dae2fd",
        "inverse-on-surface": "#313032",
        "on-tertiary-container": "#f6f7f7",
        "on-error-container": "#ffdad6",
        "on-error": "#690005",
        "on-primary": "#002682",
        "surface-variant": "#353437",
        "error": "#ffb4ab",
        "error-container": "#93000a",
        "secondary-fixed-dim": "#bec6e0",
        "on-primary-container": "#f7f6ff",
        "tertiary-fixed": "#e2e2e2",
        "surface-bright": "#39393b",
        "secondary-container": "#3f465c",
        "on-surface-variant": "#c3c5d8",
        "inverse-primary": "#024cec",
        "on-tertiary-fixed-variant": "#454747"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        margin: "48px",
        unit: "4px",
        "container-max": "1440px",
        gutter: "24px"
      },
      fontFamily: {
        "label-sm": ["Inter"],
        "headline-md": ["Manrope"],
        "headline-lg": ["Manrope"],
        "body-md": ["Inter"],
        "body-lg": ["Inter"],
        "headline-xl": ["Manrope"],
        "label-mono": ["Space Grotesk"],
        "manrope": ["Manrope"]
      },
      fontSize: {
        "label-sm": ["12px", {"lineHeight": "1.0", "fontWeight": "500"}],
        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "500"}],
        "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "500"}],
        "body-md": ["15px", {"lineHeight": "1.5", "fontWeight": "400"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-xl": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "600"}],
        "label-mono": ["13px", {"lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "500"}]
      }
    }
  }
};
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
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
        <script id="tailwind-config" dangerouslySetInnerHTML={{ __html: tailwindCdnConfig }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@500;600;700;800&family=Space+Grotesk:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
