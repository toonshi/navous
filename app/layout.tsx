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
          href="https://fonts.googleapis.com/css2?family=Lustria&family=Sura:wght@400;700&family=Varela+Round&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
