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
  title: "Lista de Presentes - Casamento Alexandre e Acsa",
  description: "O grande dia está chegando! Participe desse momento marcante na vida de Alexandre e Acsa com um presente especial escolhido com amor.",
  icons: {
    icon: "/LOGO.png", 
  },
  openGraph: {
    title: "Lista de Presentes - Casamento Alexandre e Acsa",
    description: "O grande dia está chegando! Participe desse momento marcante na vida de Alexandre e Acsa com um presente especial escolhido com amor.",
    url: "https://alexandreeacsa.vercel.app", 
    siteName: "Casamento Alexandre e Acsa",
    images: [
      {
        url: "/preview.jpg", 
        width: 1200,
        height: 630,
        alt: "Banner do Casamento Alexandre e Acsa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}