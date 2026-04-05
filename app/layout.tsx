import type { Metadata } from "next";
import { Inter, Space_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesque = Space_Grotesque({
  variable: "--font-space-grotesque",
  subsets: ["latin"],
});

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
      className={`${inter.variable} ${spaceGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
