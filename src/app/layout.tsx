import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Noto_Sans_Khmer } from "next/font/google";
import ClientEnhancements from "@/components/ClientEnhancements";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import "./globals.css";

const notoSansKhmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-khmer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RCS LOGISTICS CAMBODIA LTD",
  description: "LOGISTICS FOR A GLOBAL ECONOMY",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const fontClass = locale === "km" ? `${notoSansKhmer.variable} font-khmer` : "";

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="/css/font.awesome.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/cargo-theme.css" />
        <link rel="stylesheet" href="/css/preloader.css" />
      </head>
      <body className={fontClass}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Preloader />
          <Header />
          <div id="page-shell">{children}</div>
          <Footer />
          <ClientEnhancements />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}