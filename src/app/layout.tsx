import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Seriale | Percorso di Formazione AI by Master Mind Service and Consulting Srls",
  description:
    "Diventa esperto di Intelligenza Artificiale con il percorso formativo di Master Mind Service and Consulting Srls. Impara prompt engineering, automazione AI, machine learning e molto altro.",
  keywords: [
    "formazione AI",
    "corso intelligenza artificiale",
    "prompt engineering",
    "machine learning",
    "Master Mind Service and Consulting Srls",
    "AI Italia",
  ],
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
    ],
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "AI Seriale | Percorso di Formazione AI",
    description:
      "Diventa esperto di Intelligenza Artificiale con Master Mind Service and Consulting Srls",
    type: "website",
    url: "https://aiseriale.it",
  },
  metadataBase: new URL("https://aiseriale.it"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-overlay">{children}</body>
    </html>
  );
}
