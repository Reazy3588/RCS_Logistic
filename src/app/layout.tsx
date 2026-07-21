import type { Metadata } from "next";
import ClientEnhancements from "@/components/ClientEnhancements";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: "RCS LOGISTICS CAMBODIA LTD",
  description: "LOGISTICS FOR A GLOBAL ECONOMY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/font.awesome.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/cargo-theme.css" />
        <link rel="stylesheet" href="/css/preloader.css" />
      </head>
      <body>
        <Preloader />
        <Header />
        <div id="page-shell">{children}</div>
        <Footer />
        <ClientEnhancements />
      </body>
    </html>
  );
}
