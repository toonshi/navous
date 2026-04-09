import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navous — Indoor Navigation for Modern Spaces",
  description:
    "Real-time indoor navigation for hospitals, malls, and campuses. Stop losing people inside your building.",
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
          href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700;800;900&family=Dosis:wght@400;500;600;700;800&family=Halant:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&family=Laila:wght@300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Trykker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
