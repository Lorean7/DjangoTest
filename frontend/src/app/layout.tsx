import type { Metadata } from "next";

import Header from "@shared/ui/Header/header";
import Footer from "@/shared/ui/Footer/footer";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`flex flex-col justify-center`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
