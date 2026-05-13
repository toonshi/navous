import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.navous.app"),
  title: "Navous — Indoor Navigation for Hospitals, Malls & Airports",
  description:
    "Enterprise-grade indoor navigation and spatial intelligence. No apps, no hardware—just scan and navigate your venue instantly.",
  keywords: ["indoor navigation", "wayfinding", "spatial intelligence", "hospital navigation", "mall navigation", "airport navigation", "digital maps"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Navous — Indoor Navigation for Hospitals, Malls & Airports",
    description: "Enterprise-grade indoor navigation and spatial intelligence. No apps, no hardware—just scan and navigate.",
    url: "https://www.navous.app",
    siteName: "Navous",
    images: [
      {
        url: "/live-map.jpeg",
        width: 1200,
        height: 630,
        alt: "Navous Indoor Navigation Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navous — Indoor Navigation for Hospitals, Malls & Airports",
    description: "Enterprise-grade indoor navigation and spatial intelligence. No apps, no hardware.",
    images: ["/live-map.jpeg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
