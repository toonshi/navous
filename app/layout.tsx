import type { Metadata } from "next";
import "./globals.css";

// Temporary fallback for fonts to get the project running
const inter = { variable: "font-sans" };
const spaceGrotesque = { variable: "font-space-grotesque" };

export const metadata: Metadata = {
  title: "Navous - Spatial Intelligence for Modern Spaces",
  description: "Transform your space into a searchable, intelligent environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
