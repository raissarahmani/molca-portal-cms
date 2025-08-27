import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter, DM_Sans, Orbitron } from "next/font/google";

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

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-orbitron",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmsans.variable} ${orbitron.variable}`}>
      <body className='flex flex-col h-screen w-full p-10 gap-5 relative'>
        <div
          className="flex h-screen w-3/4 flex-col items-center justify-center z-0"
          style={{
              backgroundImage: `url('/bg.png')`, 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top'
          }}
        ></div>
        <div
          className="flex h-screen w-3/4 flex-col items-end relative left-1/4 z-0"
          style={{
              backgroundImage: `url('/bg.png')`, 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
