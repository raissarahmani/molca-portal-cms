import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Portal - Molca",
  description: "Portal for Molca",
  icons: [{ rel: "icon", url: "/molca-icon.png" }],
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inter",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-dmsans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmsans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
