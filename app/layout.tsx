import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navous — Indoor Navigation for Hospitals, Malls & Airports",
  description:
    "Real-time indoor navigation for hospitals, malls, and campuses. Stop losing people inside your building.",
  metadataBase: new URL("https://www.navous.app"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Navous — Indoor Navigation for Hospitals, Malls & Airports",
    description: "Turn your floor plan into a live indoor map. Guide every visitor from the entrance to exactly where they need to be.",
    url: "https://www.navous.app",
    siteName: "Navous",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navous — Indoor Navigation for Hospitals, Malls & Airports",
    description: "Turn your floor plan into a live indoor map. Guide every visitor from the entrance to exactly where they need to be.",
    images: ["/og-image.jpg"],
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
