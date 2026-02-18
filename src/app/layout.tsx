import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
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
  title: "Mi Portafolio | Desarrollador Full Stack",
  description: "Portafolio profesional de desarrollo web con tecnologías modernas como React, Next.js, Node.js y más.",
  keywords: ["desarrollador", "full stack", "react", "nextjs", "javascript", "typescript", "portafolio"],
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-dominio.vercel.app",
    title: "Mi Portafolio | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollo web con tecnologías modernas",
    siteName: "Mi Portafolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Portafolio | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollo web con tecnologías modernas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
