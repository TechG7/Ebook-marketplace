import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "E-Book Hub | Discover, Read & Sell E-Books",
    template: "%s | E-Book Hub",
  },
  description:
    "Discover digital books, support independent creators, and sell your own E-Books on E-Book Hub.",
  applicationName: "E-Book Hub",
  keywords: [
    "E-Books",
    "PDF Books",
    "Digital Books",
    "Sell E-Books",
    "Online Bookstore",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
