import type { Metadata } from "next";
import { nunito } from "@/fonts";
import Favicon from "/public/logo.svg";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Header } from "@/components/shared";
import React from "react";

export const metadata: Metadata = {
  title: "Маркет АйОу",
  description: "",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <main className="min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
